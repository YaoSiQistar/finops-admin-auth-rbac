"use client";
import { useEffect, useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Table, TableHeader, TableBody, TableRow, TableHead, TableCell
} from "@/components/ui/table";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, BarChart, Bar } from "recharts";
import Papa from "papaparse";
import { toast } from "sonner";

type CostItem = { date: string; service: string; env: string; team: string; cost: number; }

export default function OverviewPage() {
  const [total, setTotal] = useState(0);
  const [byDate, setByDate] = useState<{date:string; cost:number}[]>([]);
  const [byService, setByService] = useState<{service:string; cost:number}[]>([]);
  const [recent, setRecent] = useState<CostItem[]>([]);
  const [loading, setLoading] = useState(false);

  async function refreshStats() {
    const res = await fetch("/api/stats", { cache: "no-store" });
    const json = await res.json();
    setTotal(json.total || 0);
    setByDate(json.byDate || []);
    setByService(json.byService || []);
    setRecent(json.recent || []);
  }

  useEffect(()=>{ refreshStats(); }, []);

  async function loadSample() {
    try {
      setLoading(true);
      const res = await fetch("/sample-bill.csv");
      const text = await res.text();
      const parsed = Papa.parse(text, { header: true, dynamicTyping: true });
      const rows = (parsed.data as any[]).filter(Boolean);
      const payload = rows.map(r => ({
        date: r.date, provider: r.provider, service: r.service, env: r.env, team: r.team,
        cost: Number(r.cost), currency: r.currency || "USD"
      }));
      const post = await fetch("/api/costs", { method: "POST", body: JSON.stringify(payload) });
      if (!post.ok) throw new Error("导入失败");
      await refreshStats();
      toast.success("示例数据已导入");
    } catch (e:any) {
      toast.error(e.message || "导入失败");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold">总览看板</h2>
        <Button onClick={loadSample} disabled={loading}>
          {loading ? "加载中..." : "加载示例数据"}
        </Button>
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader><CardTitle>本期总费用</CardTitle></CardHeader>
          <CardContent>
            <div className="text-3xl font-bold">${total.toFixed(2)}</div>
            <p className="text-sm text-muted-foreground">基于数据库中已导入数据</p>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader><CardTitle>费用时间序列</CardTitle></CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={byDate}>
                <XAxis dataKey="date" />
                <YAxis />
                <Tooltip />
                <Line type="monotone" dataKey="cost" />
              </LineChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader><CardTitle>Top 5 服务成本</CardTitle></CardHeader>
          <CardContent className="h-64">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={byService}>
                <XAxis dataKey="service" />
                <YAxis />
                <Tooltip />
                <Bar dataKey="cost" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card>
          <CardHeader><CardTitle>最近 10 条记录</CardTitle></CardHeader>
          <CardContent className="max-h-64 overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>日期</TableHead><TableHead>服务</TableHead>
                  <TableHead>环境</TableHead><TableHead>团队</TableHead>
                  <TableHead className="text-right">成本(USD)</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {recent.map((c,i)=>(
                  <TableRow key={i}>
                    <TableCell>{c.date}</TableCell>
                    <TableCell>{c.service}</TableCell>
                    <TableCell>{c.env}</TableCell>
                    <TableCell>{c.team}</TableCell>
                    <TableCell className="text-right">${c.cost.toFixed(2)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
