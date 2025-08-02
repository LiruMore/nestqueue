"use client";

import Navigation from "@/components/ui/navigation";
import { ReactNode, useState } from "react";

import "./globals.css";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./globals.css";

interface RootLayoutProps {
  children: Readonly<ReactNode>;
}

export default function RootLayout({ children }: Readonly<RootLayoutProps>) {
  const [queryClient] = useState(() => new QueryClient());

  return (
    <html lang="en">
      <body>
        <Navigation />
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </body>
    </html>
  );
}
