import { initTRPC } from '@trpc/server';
import { Context } from "@/_core/context";

/**
 * Initialization of tRPC backend
 * Should be done only once per backend!
 */
const t = initTRPC.context<Context>().create();

/**
 * Reusable middleware to ensure users are logged in
 */
const isAuthenticated = t.middleware(({ ctx, next }) => {
  if (!ctx.user) {
    throw new TRPCError({ code: 'UNAUTHORIZED' });
  }
  return next({
    ctx: {
      user: ctx.user,
    },
  });
});

/**
 * Reusable middleware to ensure users are administrators
 */
const isAdmin = t.middleware(({ ctx, next }) => {
  if (!ctx.user || !ctx.user.isAdmin) {
    throw new TRPCError({ code: 'UNAUTHORIZED', message: 'Not an admin' });
  }
  return next({
    ctx: {
      user: ctx.user,
    },
  });
});

/**
 * Export reusable router and procedure helpers
 * that can be used throughout the router
 */
export const router = t.router;
export const publicProcedure = t.procedure;
export const protectedProcedure = t.procedure.use(isAuthenticated);
export const adminProcedure = t.procedure.use(isAdmin);
export { t };
