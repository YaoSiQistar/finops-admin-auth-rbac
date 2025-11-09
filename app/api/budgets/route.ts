import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireRole } from "@/lib/authz"; 
import { calcMonthSpent, writeAuditLog } from "@/lib/finops";

export async function GET(req: NextRequest) {
  // 支持分页与筛选
  const { searchParams } = new URL(req.url);
  const page = Math.max(1, Number(searchParams.get("page") ?? "1"));
  const pageSize = Math.min(100, Math.max(1, Number(searchParams.get("pageSize") ?? "20")));
  const month = searchParams.get("month") ?? undefined;
  const team = searchParams.get("team") ?? undefined;
  const env = searchParams.get("env") ?? undefined;

  const where: any = {};
  if (month) where.month = month;
  if (team) where.team = team;
  if (env) where.env = env;

  const [total, items] = await Promise.all([
    prisma.budget.count({ where }),
    prisma.budget.findMany({
      where,
      orderBy: [{ month: "desc" }, { name: "asc" }],
      skip: (page - 1) * pageSize,
      take: pageSize,
    }),
  ]);

  return NextResponse.json({ total, page, pageSize, items });
}

export async function POST(req: NextRequest) {
  await requireRole("ADMIN");
  const body = await req.json();
  const data = {
    name: String(body.name),
    team: body.team ?? null,
    env: body.env ?? null,
    month: String(body.month), // "YYYY-MM"
    amount: body.amount,
    currency: body.currency ?? "USD",
    note: body.note ?? null,
  };
  // 初次写入顺便计算当月实花
  const spent = await calcMonthSpent({ month: data.month, team: data.team, env: data.env });
  const created = await prisma.budget.create({ data: { ...data, spentCache: spent } });

  await writeAuditLog({ action: "BUDGET_CREATE", target: created.id, meta: created });

  return NextResponse.json(created, { status: 201 });
}
