import { PrismaClient } from "@prisma/client";

// ✅ 1. Augment the Node global type (don’t redeclare globalThis)
declare global {
  var prismaGlobal: PrismaClient | undefined;
}

// ✅ 2. Create / reuse the client
const prisma = global.prismaGlobal ?? new PrismaClient();

// ✅ 3. Cache in dev only
if (process.env.NODE_ENV !== "production") {
  global.prismaGlobal = prisma;
}

export default prisma;
