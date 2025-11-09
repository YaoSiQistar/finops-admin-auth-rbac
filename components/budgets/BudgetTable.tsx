"use client";

import * as React from "react";
import {
    ColumnDef,
    flexRender,
    getCoreRowModel,
    useReactTable,
} from "@tanstack/react-table";

import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { j } from "@/lib/http";
import { toast } from "sonner";

export type BudgetRow = {
    id: string;
    name: string;
    team: string | null;
    env: string | null;
    month: string;
    amount: number;
    currency: string;
    spentCache: number;
    note: string | null;
};

const makeColumns = (
    onEdit: (row: BudgetRow) => void,
    canEdit: boolean
): ColumnDef<BudgetRow>[] => [
        { header: "名称", accessorKey: "name" },
        {
            header: "团队",
            accessorKey: "team",
            cell: (c) => <span>{(c.getValue() as string) || "—"}</span>,
        },
        {
            header: "环境",
            accessorKey: "env",
            cell: (c) => <span>{(c.getValue() as string) || "—"}</span>,
        },
        { header: "月份", accessorKey: "month" },
        {
            header: "预算",
            cell: ({ row }) => (
                <span>
                    {row.original.amount} {row.original.currency}
                </span>
            ),
        },
        { header: "已用", accessorKey: "spentCache" },
        {
            header: "消耗率",
            cell: ({ row }) => {
                const pct =
                    (row.original.spentCache ?? 0) /
                    Math.max(1e-9, row.original.amount || 0);
                const cls =
                    pct > 1 ? "text-red-600" : pct > 0.8 ? "text-amber-600" : "text-emerald-600";
                return <span className={cls}>{Math.round(pct * 100)}%</span>;
            },
        },
        {
            header: "操作",
            cell: ({ row }) =>
                canEdit ? (
                    <Button size="sm" onClick={() => onEdit(row.original)}>
                        编辑
                    </Button>
                ) : null,
        },
    ];

export default function BudgetTable({ isAdmin }: { isAdmin: boolean }) {
    const [data, setData] = React.useState<BudgetRow[]>([]);
    const [total, setTotal] = React.useState(0);
    const [page, setPage] = React.useState(1);
    const [pageSize, setPageSize] = React.useState(10);
    const [qMonth, setQMonth] = React.useState<string>("");
    const [qTeam, setQTeam] = React.useState<string>("");
    const [qEnv, setQEnv] = React.useState<string>("");

    const fetchList = React.useCallback(async () => {
        const sp = new URLSearchParams({
            page: String(page),
            pageSize: String(pageSize),
        });
        if (qMonth) sp.set("month", qMonth);
        if (qTeam) sp.set("team", qTeam);
        if (qEnv) sp.set("env", qEnv);

        const res = await j<{ items: BudgetRow[]; total: number }>(
            `/api/budgets?${sp.toString()}`
        );
        setData(res.items);
        setTotal(res.total);
    }, [page, pageSize, qMonth, qTeam, qEnv]);

    React.useEffect(() => {
        fetchList().catch((e) => toast.error(e.message));
    }, [fetchList]);

    // 供外部打开编辑弹窗（保持你的约定）
    const setEditingRow = (r: BudgetRow) => {
        (window as any).__setEditingBudget?.(r);
    };

    const table = useReactTable({
        data,
        columns: makeColumns(setEditingRow, isAdmin),
        getCoreRowModel: getCoreRowModel(),
    });

    const pageCount = Math.max(1, Math.ceil(total / Math.max(1, pageSize)));

    return (
        <Card>
            <CardContent className="p-4 flex flex-col gap-3">
                {/* 查询区 */}
                <div className="flex flex-wrap items-center gap-2">
                    <Input
                        placeholder="月份 YYYY-MM"
                        value={qMonth}
                        onChange={(e) => setQMonth(e.target.value)}
                        className="w-36"
                    />
                    <Input
                        placeholder="团队"
                        value={qTeam}
                        onChange={(e) => setQTeam(e.target.value)}
                        className="w-36"
                    />
                    <Select value={qEnv || undefined} onValueChange={(v) => setQEnv(v === "all" ? "" : v)}>
                        <SelectTrigger className="w-36">
                            <SelectValue placeholder="环境" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value="all">全部环境</SelectItem>
                            <SelectItem value="prod">prod</SelectItem>
                            <SelectItem value="staging">staging</SelectItem>
                            <SelectItem value="dev">dev</SelectItem>
                        </SelectContent>
                    </Select>

                    <Button
                        onClick={() => {
                            setPage(1);
                            fetchList();
                        }}
                    >
                        查询
                    </Button>

                    <div className="ms-auto flex items-center gap-2">
                        <span className="text-sm">每页</span>
                        <Select
                            value={String(pageSize)}
                            onValueChange={(v) => {
                                setPageSize(Number(v));
                                setPage(1);
                            }}
                        >
                            <SelectTrigger className="w-24">
                                <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                                {[10, 20, 50, 100].map((n) => (
                                    <SelectItem key={n} value={String(n)}>
                                        {n}
                                    </SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                </div>

                {/* 表格 */}
                <div className="overflow-auto rounded-xl border">
                    <Table>
                        <TableHeader>
                            {table.getHeaderGroups().map((hg) => (
                                <TableRow key={hg.id}>
                                    {hg.headers.map((h) => (
                                        <TableHead key={h.id}>
                                            {h.isPlaceholder
                                                ? null
                                                : flexRender(h.column.columnDef.header, h.getContext())}
                                        </TableHead>
                                    ))}
                                </TableRow>
                            ))}
                        </TableHeader>

                        <TableBody>
                            {table.getRowModel().rows.length ? (
                                table.getRowModel().rows.map((r) => (
                                    <TableRow key={r.id}>
                                        {r.getVisibleCells().map((c) => (
                                            <TableCell key={c.id}>
                                                {flexRender(c.column.columnDef.cell, c.getContext())}
                                            </TableCell>
                                        ))}
                                    </TableRow>
                                ))
                            ) : (
                                <TableRow>
                                    <TableCell
                                        colSpan={table.getAllColumns().length}
                                        className="h-24 text-center"
                                    >
                                        暂无数据
                                    </TableCell>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>

                {/* 分页 */}
                <div className="flex items-center justify-between">
                    <div className="text-sm">共 {total} 条</div>
                    <div className="flex gap-2">
                        <Button
                            variant="outline"
                            onClick={() => setPage((p) => Math.max(1, p - 1))}
                            disabled={page === 1}
                        >
                            上一页
                        </Button>
                        <div className="px-2 py-1 rounded-lg border text-sm">
                            第 {page} / {pageCount} 页
                        </div>
                        <Button
                            variant="outline"
                            onClick={() => setPage((p) => Math.min(pageCount, p + 1))}
                            disabled={page >= pageCount}
                        >
                            下一页
                        </Button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
