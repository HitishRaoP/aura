import { AppRouter } from '@aura/trpc-server';
import { createTRPCReact } from '@trpc/react-query';

export const trpcClient = createTRPCReact<AppRouter>();
