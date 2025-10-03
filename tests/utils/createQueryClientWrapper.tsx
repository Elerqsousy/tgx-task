import React from 'react';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

export function createQueryClientWrapper() {
  const qc = new QueryClient({
    defaultOptions: { queries: { retry: false } },
  });
  return function Wrapper({ children }: { children: React.ReactNode }) {
    return <QueryClientProvider client={qc}>{children}</QueryClientProvider>;
  };
}
