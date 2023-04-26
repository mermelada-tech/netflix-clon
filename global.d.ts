import { PrismaClient } from '@prisma/client';

declare global {
  namespace globalThis {
    let prismadb: PrismaClient;
  }
}
