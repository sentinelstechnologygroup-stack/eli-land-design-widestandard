// location: src/app/layout.tsx
import "./globals.css";
import "./legacy.css";            // site-wide styles (NO footer in here)
import "@/styles/eli-footer.css";  // footer MUST load AFTER legacy so it wins

import type { Metadata } from "next";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "ELI Land Design",
  description: "Landscape architecture and construction in The Woodlands / Houston.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
