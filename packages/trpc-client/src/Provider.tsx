'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactNode, useState } from 'react';
import { trpcClient as trpc } from './client';
import { httpBatchLink } from '@trpc/client';

export const TRPCProvider = ({ children }: { children: ReactNode }) => {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        httpBatchLink({
          url: `${process.env.TRPC_BACKEND_URL}/trpc`,
          async headers() {
            const token = await fetch(
              `${process.env.TRPC_FRONTEND_URL}/api/auth/token`,
            ).then((res) => res.json());
            return {
              authorization: `Bearer ${token}`,
            };
          },
        }),
      ],
    }),
  );
  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </trpc.Provider>
  );
};
