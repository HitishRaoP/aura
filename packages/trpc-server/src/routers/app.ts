import { router } from '../trpc';
import { authRouter } from './auth';

export const appRouter = router({
  auth: authRouter,
});
