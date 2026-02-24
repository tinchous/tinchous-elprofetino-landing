import { router } from './trpc';
import { authRouter } from './auth';
import { dashboardRouter } from './dashboard';
import { adminRouter } from './admin';

export const appRouter = router({
  health: authRouter.publicProcedure.query(() => 'ok'),
  auth: authRouter,
  dashboard: dashboardRouter,
  admin: adminRouter,
});

export type AppRouter = typeof appRouter;
