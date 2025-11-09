"use client";
import { useState } from "react";
import Papa from "papaparse";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Table, TableHeader, TableBody, TableRow, TableHead, TableCell
} from "@/components/ui/table";
import { toast } from "sonner";

type Row = { date: string; provider: string; service: string; env: string; team: string; cost: number; currency: string; };

export default function ImportsPage() {
  const [rows, setRows] = useState<Row[]>([]);
  const [importing, setImporting] = useState(false);
  const [inserted, setInserted] = useState<number | null>(null);

  function onFile(file?: File | null) {
    if (!file) return;
    Papa.parse(file, {
      header: true,
      dynamicTyping: true,
      complete: (res) => {
        const data = (res.data as any[]).filter(Boolean);
        const items: Row[] = data.map(r => ({
          date: r.date, provider: r.provider, service: r.service, env: r.env, team: r.team,
          cost: Number(r.cost), currency: r.currency || "USD"
        }));
        setRows(items);
      }
    });
  }

  async function commit() {
    if (!rows.length) return;
    setImporting(true);
    try {
      const res = await fetch("/api/costs", { method: "POST", body: JSON.stringify(rows) });
      const json = await res.json();
      if (!res.ok) throw new Error(json?.error || "导入失败");
      setInserted(json.inserted);
      setRows([]);
      toast.success(`已导入 ${json.inserted} 条记录`);
    } catch (err:any) {
      toast.error(err.message || "导入失败");
    } finally {
      setImporting(false);
    }
  }

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">导入账单</h2>

      <Card>
        <CardHeader><CardTitle>上传 CSV</CardTitle></CardHeader>
        <CardContent className="space-y-3">
          <Input type="file" accept=".csv" onChange={(e)=>onFile(e.target.files?.[0])} />
          <div className="flex gap-2">
            <a className="underline text-sm" href="/sample-bill.csv" download>下载示例账单</a>
            <span className="text-sm text-muted-foreground">字段：date,provider,service,env,team,cost,currency</span>
          </div>
          <Button onClick={commit} disabled={!rows.length || importing}>
            {importing ? "导入中..." : "导入到数据库"}
          </Button>
          {inserted !== null && <div className="text-sm text-green-700">已导入 {inserted} 条记录。</div>}
        </CardContent>
      </Card>

      {rows.length > 0 && (
        <Card>
          <CardHeader><CardTitle>预览（前 20 条）</CardTitle></CardHeader>
          <CardContent className="max-h-80 overflow-auto">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>日期</TableHead><TableHead>服务</TableHead>
                  <TableHead>环境</TableHead><TableHead>团队</TableHead>
                  <TableHead className="text-right">成本</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.slice(0,20).map((r,i)=>(
                  <TableRow key={i}>
                    <TableCell>{r.date}</TableCell>
                    <TableCell>{r.service}</TableCell>
                    <TableCell>{r.env}</TableCell>
                    <TableCell>{r.team}</TableCell>
                    <TableCell className="text-right">${r.cost.toFixed(2)}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
