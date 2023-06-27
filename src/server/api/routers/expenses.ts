import { z } from "zod";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const expensesRouter = createTRPCRouter({
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.expense.findMany();
  }),
});
