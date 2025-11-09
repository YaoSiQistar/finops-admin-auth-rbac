// app/cost-explorer/page.tsx
"use client";  // 这是一个客户端组件
import { useEffect, useMemo, useState } from "react";
import { ColumnDef, getCoreRowModel, useReactTable, flexRender } from "@tanstack/react-table";// 引入表格相关的工具
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "@/components/ui/table";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

type CostItem = {
  id: string;
  date: string;
  provider: string;
  service: string;
  env: string;
  team: string;
  cost: number;
  currency: string;
}// 定义成本项的类型

export default function CostExplorer() {
  const [data, setData] = useState<CostItem[]>([]);// 存储成本数据
  const [total, setTotal] = useState(0);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(20);
  const [filters, setFilters] = useState({ service: "", env: "", team: "" }); // 筛选条件
async function fetchData(pg = page, ps = pageSize) {
    const params = new URLSearchParams({ page: String(pg), pageSize: String(ps) });
    if (filters.service) params.set("service", filters.service);
    if (filters.env) params.set("env", filters.env);
    if (filters.team) params.set("team", filters.team);

    try {
        const res = await fetch(`/api/costs?${params.toString()}`);
        
        // 检查响应是否成功
        if (!res.ok) {
            throw new Error(`API 请求失败，状态码: ${res.status}`);
        }

        // 检查响应内容是否为空
        const text = await res.text();
        if (!text) {
            throw new Error("API 响应为空");
        }

        const json = JSON.parse(text); // 手动解析 JSON

        // 确保返回的数据结构是有效的
        if (!json.items || !json.total || !json.page) {
            throw new Error("API 返回的 JSON 格式不正确");
        }

        setData(json.items);
        setTotal(json.total);
        setPage(json.page);
        setPageSize(json.pageSize);
    } catch (error) {
        // 处理错误
        console.error("获取数据时出错:", error);
        toast.error(error.message); // 显示错误提示
    }
}


  const columns = useMemo<ColumnDef<CostItem>[]>(() => [
    { accessorKey: "date", header: "日期", cell: (ctx)=> ctx.getValue() as string },
    { accessorKey: "service", header: "服务" },
    { accessorKey: "env", header: "环境" },
    { accessorKey: "team", header: "团队" },
    { accessorKey: "cost", header: "成本(USD)", cell: (ctx)=> `$${(ctx.getValue() as number).toFixed(2)}` },
  ], []);

  const table = useReactTable({ data, columns, getCoreRowModel: getCoreRowModel() });
  const pages = Math.max(1, Math.ceil(total / pageSize));

  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold">成本探索（服务端分页）</h2>

      <Card>
        <CardHeader><CardTitle>筛选</CardTitle></CardHeader>
        <CardContent className="grid gap-3 md:grid-cols-4">
          <Input placeholder="service (如 S3)" value={filters.service} onChange={(e)=>setFilters({...filters, service: e.target.value})} />
          <Input placeholder="env (如 prod)" value={filters.env} onChange={(e)=>setFilters({...filters, env: e.target.value})} />
          <Input placeholder="team (如 team-a)" value={filters.team} onChange={(e)=>setFilters({...filters, team: e.target.value})} />
          <div className="flex items-center gap-2">
            <Button onClick={()=>fetchData(1, pageSize)}>查询</Button>
            <Button variant="outline" onClick={()=>{ setFilters({ service:"", env:"", team:"" }); }}>重置</Button>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader><CardTitle>结果（{total} 条）</CardTitle></CardHeader>
        <CardContent className="overflow-auto">
          <Table>
            <TableHeader>
              {table.getHeaderGroups().map(hg => (
                <TableRow key={hg.id}>
                  {hg.headers.map(h => (
                    <TableHead key={h.id}>
                      {flexRender(h.column.columnDef.header, h.getContext())}
                    </TableHead>
                  ))}
                </TableRow>
              ))}
            </TableHeader>
            <TableBody>
              {table.getRowModel().rows.map(row => (
                <TableRow key={row.id}>
                  {row.getVisibleCells().map(cell => (
                    <TableCell key={cell.id}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </TableCell>
                  ))}
                </TableRow>
              ))}
            </TableBody>
          </Table>
          <div className="mt-3 flex items-center justify-between">
            <div className="text-sm text-muted-foreground">第 {page} / {pages} 页</div>
            <div className="flex items-center gap-2">
              <Button variant="outline" disabled={page<=1} onClick={()=>{ const p=page-1; setPage(p); fetchData(p, pageSize); }}>上一页</Button>
              <Button variant="outline" disabled={page>=pages} onClick={()=>{ const p=page+1; setPage(p); fetchData(p, pageSize); }}>下一页</Button>
              <Input type="number" className="w-24" value={pageSize} onChange={(e)=>{ const ps=parseInt(e.target.value||"20",10); setPageSize(ps); fetchData(1, ps); }} />
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
