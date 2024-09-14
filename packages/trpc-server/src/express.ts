import { createExpressMiddleware } from '@trpc/server/adapters/express';
import { appRouter } from './routers/app';

export const trpcExpress = createExpressMiddleware({
  router: appRouter,
});
