import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireRole } from "@/lib/authz";
import { calcMonthSpent, writeAuditLog } from "@/lib/finops";

export async function PATCH(_req: NextRequest, { params }: { params: { id: string } }) {
  await requireRole("ADMIN");
  const body = await _req.json();
  const id = params.id;

  const old = await prisma.budget.findUnique({ where: { id } });
  if (!old) return NextResponse.json({ message: "Not found" }, { status: 404 });

  const updated = await prisma.budget.update({
    where: { id },
    data: {
      name: body.name ?? old.name,
      team: body.team ?? old.team,
      env: body.env ?? old.env,
      month: body.month ?? old.month,
      amount: body.amount ?? old.amount,
      currency: body.currency ?? old.currency,
      note: body.note ?? old.note,
    },
  });

  await writeAuditLog({ action: "BUDGET_UPDATE", target: id, meta: { before: old, after: updated } });

  return NextResponse.json(updated);
}

export async function DELETE(_req: NextRequest, { params }: { params: { id: string } }) {
  await requireRole("ADMIN");
  const id = params.id;
  await prisma.budget.delete({ where: { id } });
  await writeAuditLog({ action: "BUDGET_DELETE", target: id });
  return NextResponse.json({ ok: true });
}

export const revalidate = 0;
