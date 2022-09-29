import { initTRPC } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.create();

export default t.router({
  greeting: t.procedure
    .input(z.object({ name: z.string() }).nullish())
    .query(({ input }) => {
      return `Hello ${input?.name ?? 'World'}`;
    }),
});