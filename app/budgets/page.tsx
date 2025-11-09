// app/budgets/page.tsx
"use client";

import * as React from "react";
import { useSession } from "next-auth/react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import BudgetTable from "@/components/budgets/BudgetTable"; // ✅ 默认导入
import { BudgetForm, type BudgetPayload } from "@/components/budgets/BudgetForm";
import { j } from "@/lib/http";
import { toast } from "sonner";

export default function BudgetsPage() {
  const { data: session, status } = useSession();
  const isAdmin = (session?.user as any)?.role === "ADMIN";

  // 新建
  const [open, setOpen] = React.useState(false);
  // 编辑（不依赖外部类型，避免类型导出不一致引发构建问题）
  const [editing, setEditing] = React.useState<any | undefined>(undefined);

  // 供表格触发编辑
  React.useEffect(() => {
    (window as any).__setEditingBudget = setEditing;
    return () => {
      delete (window as any).__setEditingBudget;
    };
  }, []);

  async function createBudget(payload: BudgetPayload) {
    await j("/api/budgets", { method: "POST", body: JSON.stringify(payload) });
    toast.success("已创建预算");
    setOpen(false);
    // 简单起见：整页刷新；后续可改成局部刷新
    location.reload();
  }

  async function updateBudget(payload: BudgetPayload) {
    if (!editing) return;
    await j(`/api/budgets/${editing.id}`, {
      method: "PATCH",
      body: JSON.stringify(payload),
    });
    toast.success("已保存修改");
    setEditing(undefined);
    location.reload();
  }

  async function removeBudget(id: string) {
    if (!confirm("确定删除该预算？")) return;
    await j(`/api/budgets/${id}`, { method: "DELETE" });
    toast.success("已删除");
    location.reload();
  }

  async function recalcAll() {
    await j("/api/budgets/recalc", { method: "POST" });
    toast.success("已重算所有预算的已用金额");
    location.reload();
  }

  if (status === "loading") {
    return (
      <Card>
        <CardContent className="p-6">加载中…</CardContent>
      </Card>
    );
  }

  if (!session) {
    return (
      <Card>
        <CardContent className="p-6 space-y-4">
          <div className="text-base">请先登录后访问预算页。</div>
          <Button asChild>
            <a href="/signin">去登录</a>
          </Button>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="p-4 md:p-6 flex flex-col gap-4">
      <Card>
        <CardHeader className="flex-row items-center justify-between">
          <div>
            <div className="text-xl font-semibold">预算管理</div>
            <div className="text-sm text-muted-foreground">
              按月度、团队、环境管理预算并跟踪消耗率
            </div>
          </div>
          <div className="flex gap-2">
            {isAdmin && (
              <Button variant="outline" onClick={recalcAll}>
                重算已用
              </Button>
            )}
            {isAdmin && (
              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button>新建预算</Button>
                </DialogTrigger>
                <DialogContent className="max-w-lg">
                  <DialogHeader>
                    <DialogTitle>新建预算</DialogTitle>
                  </DialogHeader>
                  <BudgetForm onSubmit={createBudget} />
                </DialogContent>
              </Dialog>
            )}
          </div>
        </CardHeader>
        <CardContent>
          <BudgetTable isAdmin={isAdmin} />
        </CardContent>
      </Card>

      {/* 编辑弹窗 */}
      <Dialog
        open={!!editing}
        onOpenChange={(v) => !v && setEditing(undefined)}
      >
        <DialogContent className="max-w-lg">
          <DialogHeader>
            <DialogTitle>编辑预算</DialogTitle>
          </DialogHeader>
          {editing && (
            <div className="flex flex-col gap-3">
              <BudgetForm defaultValues={editing} onSubmit={updateBudget} />
              <div className="flex justify-between">
                <Button
                  variant="destructive"
                  onClick={() => removeBudget(editing.id)}
                >
                  删除
                </Button>
                <div />
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
}
