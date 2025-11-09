export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const page = Math.max(1, Number(searchParams.get("page") ?? "1"));
  const pageSize = Math.min(200, Math.max(1, Number(searchParams.get("pageSize") ?? "20")));
  const q = searchParams.get("q") ?? "";
  const sort = searchParams.get("sort") ?? ""; // e.g. "date:desc,cost:asc"
  const month = searchParams.get("month") ?? undefined;
  const team = searchParams.get("team") ?? undefined;
  const env = searchParams.get("env") ?? undefined;

  const where: any = {};
  if (q) {
    where.OR = [
      { provider: { contains: q, mode: "insensitive" } },
      { service: { contains: q, mode: "insensitive" } },
      { team: { contains: q, mode: "insensitive" } },
      { env: { contains: q, mode: "insensitive" } },
    ];
  }
  if (team) where.team = team;
  if (env) where.env = env;

  if (month) {
    const start = new Date(`${month}-01T00:00:00.000Z`);
    const end = new Date(start); end.setUTCMonth(start.getUTCMonth() + 1);
    where.date = { gte: start, lt: end };
  }

  const orderBy = sort
    ? sort.split(",").map((pair) => {
        const [field, dir] = pair.split(":");
        return { [field]: (dir === "desc" ? "desc" : "asc") } as any;
      })
    : [{ date: "desc" as const }];

  const [total, items] = await Promise.all([
    prisma.cost.count({ where }),
    prisma.cost.findMany({
      where,
      orderBy,
      skip: (page - 1) * pageSize,
      take: pageSize,
    }),
  ]);

  return NextResponse.json({ total, page, pageSize, items });
}
