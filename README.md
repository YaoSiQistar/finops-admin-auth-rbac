# FinOps Admin (With Backend)

一个带 **Prisma (SQLite)** 后端与 **REST API**、以及 **TanStack Table 服务端分页** 的 FinOps 最小演示：
- 页面：**总览看板**、**导入页**、**预算**、**成本探索（Server Pagination）**
- API：`/api/costs`（GET 分页 + POST 批量导入）、`/api/budgets`（GET/POST/DELETE）
- 数据库：Prisma + SQLite（默认 `file:./dev.db`，可换 Postgres）

## 本地运行
```bash
cp .env.example .env
pnpm i
pnpm prisma:generate
pnpm db:push      # 创建 dev.db
pnpm dev          # http://localhost:3000
```

## 导入示例
- 首页点击“加载示例数据”或到“导入页”上传 `public/sample-bill.csv`。

## 目录结构
- `app/api/*` 后端接口（Next Route Handlers）
- `prisma/schema.prisma` 数据模型
- `app/cost-explorer` TanStack Table 服务端分页示例

## 迁移至 Postgres（可选）
1. 修改 `.env`：`DATABASE_URL="postgresql://user:pass@host:port/db"`  
2. 运行 `pnpm prisma:migrate`

## 下一步
- 增加筛选维度与汇总指标 `/api/stats` 的缓存
- 添加鉴权（Auth.js）与 RBAC
- 审计日志与导出


## 认证 & RBAC
- 使用 `next-auth` GitHub OAuth。
- 第一个登录的用户自动授予 **ADMIN** 角色，其余默认为 **VIEWER**。
- **RBAC 规则**：
  - **ADMIN**：可导入成本、创建/删除预算。
  - **VIEWER**：仅可读取（看板/探索/预算列表）。

### 配置步骤
```bash
cp .env.example .env
# 在 GitHub OAuth 应用里设置回调 http://localhost:3000/api/auth/callback/github
# 填写 GITHUB_ID / GITHUB_SECRET / NEXTAUTH_SECRET
pnpm prisma:generate
pnpm db:push
pnpm dev
```
访问 `http://localhost:3000/signin` 登录。
