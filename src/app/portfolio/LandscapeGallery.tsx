// src/app/portfolio/LandscapeGallery.tsx
"use client";

import Image from "next/image";
import React, { useEffect, useMemo, useRef, useState } from "react";
import styles from "./portfolio.module.css";

export type PortfolioImage = {
  src: string;
  alt: string;
  width: number;
  height: number;
};

export default function LandscapeGallery({ images }: { images: PortfolioImage[] }) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const modalImageRef = useRef<HTMLImageElement | null>(null);

  const isOpen = activeIndex !== null;
  const count = images.length;

  const active = useMemo(() => {
    if (activeIndex === null) return null;
    return images[activeIndex];
  }, [activeIndex, images]);

  const openAt = (index: number) => setActiveIndex(index);
  const close = () => setActiveIndex(null);

  const prev = () =>
    setActiveIndex((cur) => {
      if (cur === null) return cur;
      return (cur - 1 + count) % count;
    });

  const next = () =>
    setActiveIndex((cur) => {
      if (cur === null) return cur;
      return (cur + 1) % count;
    });

  useEffect(() => {
    if (!isOpen) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "ArrowRight") next();
    };

    document.addEventListener("keydown", onKeyDown);

    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.setTimeout(() => modalImageRef.current?.focus(), 0);

    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = prevOverflow;
    };
  }, [isOpen, count]);

  return (
    <>
      <section className={styles.gallery} aria-label="Portfolio gallery">
        {images.map((img, idx) => {
          const directionClass = idx % 2 === 0 ? styles.panLTR : styles.panRTL;
          const delayMs = Math.min(idx * 120, 1200);

          return (
            <button
              key={img.src}
              type="button"
              className={styles.tile}
              onClick={() => openAt(idx)}
              aria-label={`Open image ${idx + 1} of ${count}`}
            >
              <div className={styles.frame}>
                <Image
                  className={`${styles.img} ${directionClass}`}
                  src={img.src}
                  alt={img.alt}
                  width={img.width}
                  height={img.height}
                  sizes="(max-width: 560px) 100vw, (max-width: 960px) 50vw, 33vw"
                  style={{ "--panDelay": `${delayMs}ms` } as React.CSSProperties}
                  priority={idx < 3}
                />
              </div>
            </button>
          );
        })}
      </section>

      {isOpen && active && (
        <div
          className={styles.backdrop}
          role="dialog"
          aria-modal="true"
          aria-label="Image viewer"
          onMouseDown={(e) => {
            if (e.target === e.currentTarget) close();
          }}
        >
          <div className={styles.modal}>
            <button type="button" className={styles.closeBtn} onClick={close} aria-label="Close image viewer">
              ✕
            </button>

            <button type="button" className={`${styles.navBtn} ${styles.leftBtn}`} onClick={prev} aria-label="Previous">
              ‹
            </button>

            <figure className={styles.figure}>
              <img
                ref={(el) => {
                  modalImageRef.current = el;
                }}
                tabIndex={-1}
                className={styles.modalImg}
                src={active.src}
                alt={active.alt}
                width={active.width}
                height={active.height}
                decoding="async"
              />
              <figcaption className={styles.caption}>
                {activeIndex! + 1} / {count}
              </figcaption>
            </figure>

            <button type="button" className={`${styles.navBtn} ${styles.rightBtn}`} onClick={next} aria-label="Next">
              ›
            </button>
          </div>
        </div>
      )}
    </>
  );
}
