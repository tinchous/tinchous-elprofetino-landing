/* Design: Cosmic Education - Futurismo Educativo Espacial
   Colors: Space Navy (#0a1628), Cyan (#00d4ff), Gold (#ffd700), Green (#00ff88)
   Typography: Space Grotesk (display), Inter (body)
   Layout: Asymmetric, floating cards, diagonal sections
*/

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { trpc } from "@/_core/utils/trpc";
import { useState } from "react";

interface ProvidersProps {
  children: React.ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  const [queryClient] = useState(() => new QueryClient());
  const [trpcClient] = useState(() =>
    trpc.createClient({
      links: [
        trpc.httpBatchLink({
          url: "/trpc",
        }),
      ],
    })
  );

  return (
    <trpc.Provider client={trpcClient} queryClient={queryClient}>
      <QueryClientProvider client={queryClient}>
        {children}
      </QueryClientProvider>
    </trpc.Provider>
  );
}
