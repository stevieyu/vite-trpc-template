import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.create();

const mainRouter = t.router({
  greeting: t.procedure
      .input(z.object({
        name: z.string()
      }).nullish())
      .query(({input}) => `Hello ${input?.name ?? 'World'}`),
})

export type AppRouter = typeof mainRouter;

export default mainRouter;