import { db } from '@aura/db';
import { publicProcedure, router } from '../trpc';

export const authRouter = router({
  users: publicProcedure.query(async () => {
    return await db.user.findMany();
  }),
});
