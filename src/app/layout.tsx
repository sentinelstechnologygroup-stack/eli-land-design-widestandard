// src/app/layout.tsx
import "./globals.css";
import type { Metadata } from "next";

import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import StandardBottomCTA from "@/components/StandardBottomCTA";

export const metadata: Metadata = {
  title: "ELI Land Design",
  description: "Landscape architecture and construction.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <SiteHeader />

        {/* IMPORTANT:
            Keep CTA + Footer inside the same ELI layout frame your CSS expects.
            Do NOT place CTA/Footer outside this container or the footer breaks. */}
        <div className="eliPage">
          <div className="eliPage__inner">
            <main>{children}</main>

            {/* CTA belongs ABOVE footer, inside the same inner frame */}
            <StandardBottomCTA />

            <SiteFooter />
          </div>
        </div>
      </body>
    </html>
  );
}
