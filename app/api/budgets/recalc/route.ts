import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireRole } from "@/lib/authz";
import { calcMonthSpent, writeAuditLog } from "@/lib/finops";

export async function POST(_req: NextRequest) {
  await requireRole("ADMIN");
  const budgets = await prisma.budget.findMany();
  for (const b of budgets) {
    const spent = await calcMonthSpent({ month: b.month, team: b.team, env: b.env });
    await prisma.budget.update({ where: { id: b.id }, data: { spentCache: spent } });
  }
  await writeAuditLog({ action: "BUDGET_RECALC_ALL", meta: { count: budgets.length } });
  return NextResponse.json({ ok: true, count: budgets.length });
}
