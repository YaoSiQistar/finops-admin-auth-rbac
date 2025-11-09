import { NextResponse } from "next/server";
import { prisma } from "@/lib/db";
import { requireAuth } from "@/lib/rbac";

export async function GET() {
  await requireAuth();
  const items = await prisma.costItem.findMany();
  const total = items.reduce((s, c) => s + c.cost, 0);
  const byDate = Object.entries(items.reduce((acc: Record<string, number>, c) => {
    acc[c.date] = (acc[c.date] ?? 0) + c.cost; return acc;
  }, {})).sort((a,b)=>a[0].localeCompare(b[0])).map(([date, cost])=>({ date, cost: Number(cost.toFixed(2)) }));

  const byService = Object.entries(items.reduce((acc: Record<string, number>, c) => {
    acc[c.service] = (acc[c.service] ?? 0) + c.cost; return acc;
  }, {})).sort((a,b)=> b[1]-a[1]).slice(0,5).map(([service, cost])=>({ service, cost: Number(cost.toFixed(2)) }));

  const recent = items.sort((a,b)=> b.date.localeCompare(a.date)).slice(0,10);

  return NextResponse.json({ total: Number(total.toFixed(2)), byDate, byService, recent });
}
