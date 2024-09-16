import { AppRouter } from '@aura/trpc-server';
import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import { cookies } from 'next/headers';

export const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: `${process.env.TRPC_BACKEND_URL}/trpc`,
      async headers() {
        const getCookies = cookies();
        const token = getCookies.get('next-auth.session-token')?.value;
        return {
          authorization: `Bearer ${token}`,
        };
      },
    }),
  ],
});
