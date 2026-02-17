// src/app/portfolio/page.tsx
import type { Metadata } from "next";
import PageShell from "@/components/PageShell";
import LandscapeGallery, { type PortfolioImage } from "./LandscapeGallery";
import styles from "./portfolio.module.css";

export const metadata: Metadata = {
  title: "Portfolio | ELI Land Design",
  description: "A curated selection of ELI Land Design work.",
  alternates: { canonical: "/portfolio" },
};

const IMAGES: PortfolioImage[] = [
  { src: "/images/portfolio/landscape/landscape-01.jpg", alt: "Landscape portfolio image 01", width: 1600, height: 1000 },
  { src: "/images/portfolio/landscape/landscape-02.jpg", alt: "Landscape portfolio image 02", width: 1600, height: 1000 },
  { src: "/images/portfolio/landscape/landscape-03.jpg", alt: "Landscape portfolio image 03", width: 1600, height: 1000 },
  { src: "/images/portfolio/landscape/landscape-04.jpg", alt: "Landscape portfolio image 04", width: 1600, height: 1000 },
  { src: "/images/portfolio/landscape/landscape-05.jpg", alt: "Landscape portfolio image 05", width: 1600, height: 1000 },
  { src: "/images/portfolio/landscape/landscape-06.jpg", alt: "Landscape portfolio image 06", width: 1600, height: 1000 },
  { src: "/images/portfolio/landscape/landscape-07.jpg", alt: "Landscape portfolio image 07", width: 1600, height: 1000 },
  { src: "/images/portfolio/landscape/landscape-08.jpg", alt: "Landscape portfolio image 08", width: 1600, height: 1000 },
  { src: "/images/portfolio/landscape/landscape-09.jpg", alt: "Landscape portfolio image 09", width: 1600, height: 1000 },
  { src: "/images/portfolio/landscape/landscape-10.jpg", alt: "Landscape portfolio image 10", width: 1600, height: 1000 },
  { src: "/images/portfolio/landscape/landscape-11.jpg", alt: "Landscape portfolio image 11", width: 1600, height: 1000 },
  { src: "/images/portfolio/landscape/landscape-12.jpg", alt: "Landscape portfolio image 12", width: 1600, height: 1000 },
];

export default function PortfolioPage() {
  return (
    <PageShell>
      <div className={styles.page}>
        <header className={styles.header}>
          <p className={styles.eyebrow}>Portfolio</p>
          <h1 className={styles.title}>Landscape Portfolio</h1>
          <p className={styles.subhead}>
            Click any image to view larger and navigate with arrows. Click off the image or press ESC to return.
          </p>
        </header>

        <LandscapeGallery images={IMAGES} />
      </div>
    </PageShell>
  );
}
