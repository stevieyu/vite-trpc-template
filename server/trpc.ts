import { initTRPC } from '@trpc/server';
import transformer from './utils/transformer';

/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.create({
    transformer,
});

/**
 * Export reusable router and procedure helpers
 * that cane be used throughout the router
 */
export const router = t.router;
export const publicProcedure = t.procedure;