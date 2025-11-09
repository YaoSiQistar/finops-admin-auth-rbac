"use client";

import { useEffect } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const schema = z.object({
  name: z.string().min(1),
  team: z.string().optional(),
  env: z.string().optional(),
  month: z.string().regex(/^\d{4}-\d{2}$/,"格式 YYYY-MM"),
  amount: z.coerce.number().positive(),
  currency: z.string().default("USD"),
  note: z.string().optional(),
});
export type BudgetPayload = z.infer<typeof schema>;

export function BudgetForm({
  defaultValues,
  onSubmit,
  submitting,
}: {
  defaultValues?: Partial<BudgetPayload>;
  onSubmit: (v: BudgetPayload)=>void|Promise<void>;
  submitting?: boolean;
}) {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm<BudgetPayload>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: "", month: new Date().toISOString().slice(0,7),
      amount: 1000, currency: "USD", ...defaultValues
    }
  });

  useEffect(()=>{ if (defaultValues) Object.entries(defaultValues).forEach(([k,v])=>setValue(k as any, v as any)); },[defaultValues,setValue]);

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit(onSubmit)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
        <div>
          <Label htmlFor="name">名称</Label>
          <Input id="name" placeholder="如 Team A 月度预算" {...register("name")} />
          {errors.name && <p className="text-red-600 text-sm mt-1">{errors.name.message}</p>}
        </div>
        <div>
          <Label htmlFor="month">月份 (YYYY-MM)</Label>
          <Input id="month" placeholder="2025-01" {...register("month")} />
          {errors.month && <p className="text-red-600 text-sm mt-1">{errors.month.message}</p>}
        </div>
        <div>
          <Label>团队</Label>
          <Input placeholder="team-a" {...register("team")} />
        </div>
        <div>
          <Label>环境</Label>
          <Select onValueChange={(v)=>setValue("env", v)} defaultValue={defaultValues?.env ?? ""}>
            <SelectTrigger><SelectValue placeholder="选择环境（可空）" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="">（空）</SelectItem>
              <SelectItem value="prod">prod</SelectItem>
              <SelectItem value="staging">staging</SelectItem>
              <SelectItem value="dev">dev</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="amount">预算金额</Label>
          <Input id="amount" type="number" step="0.01" {...register("amount")} />
          {errors.amount && <p className="text-red-600 text-sm mt-1">{errors.amount.message}</p>}
        </div>
        <div>
          <Label>币种</Label>
          <Select onValueChange={(v)=>setValue("currency", v)} defaultValue={defaultValues?.currency ?? "USD"}>
            <SelectTrigger><SelectValue placeholder="USD" /></SelectTrigger>
            <SelectContent>
              <SelectItem value="USD">USD</SelectItem>
              <SelectItem value="CNY">CNY</SelectItem>
              <SelectItem value="EUR">EUR</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
      <div>
        <Label htmlFor="note">备注</Label>
        <Input id="note" placeholder="可选" {...register("note")} />
      </div>
      <div className="flex gap-2 justify-end">
        <Button type="submit" disabled={submitting}>{submitting ? "提交中..." : "保存"}</Button>
      </div>
    </form>
  );
}
