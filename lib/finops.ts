import { prisma } from "@/lib/db";
import { Decimal } from "@prisma/client/runtime/library";

// 计算某个月的实际花费（可选 team/env 过滤）
export async function calcMonthSpent(params: { month: string; team?: string | null; env?: string | null }) {
  const { month, team, env } = params;
  // month: "YYYY-MM"
  const start = new Date(`${month}-01T00:00:00.000Z`);
  const end = new Date(start);
  end.setUTCMonth(start.getUTCMonth() + 1);

  const where: any = {
    date: { gte: start, lt: end },
  };
  if (team) where.team = team;
  if (env) where.env = env;

  const rows = await prisma.cost.findMany({
    where,
    select: { cost: true },
  });

  const sum = rows.reduce((acc, r) => acc + Number(r.cost), 0);
  return new Decimal(sum.toFixed(6));
}

// 写一条审计日志（尽量别失败阻塞主流程）
export async function writeAuditLog(entry: {
  actorId?: string | null;
  actorEmail?: string | null;
  action: string;
  target?: string | null;
  meta?: any;
}) {
  try {
    await prisma.auditLog.create({ data: { ...entry, meta: entry.meta ?? undefined } });
  } catch (e) {
    console.error("audit log failed", e);
  }
}
