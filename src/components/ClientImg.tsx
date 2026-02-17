// location: src/components/ClientImg.tsx
"use client";

import { useState } from "react";

type Props = {
  src: string;
  alt: string;
  className?: string;
  fallbackSrc?: string;
  loading?: "eager" | "lazy";
  decoding?: "async" | "sync" | "auto";
};

export default function ClientImg({
  src,
  alt,
  className,
  fallbackSrc = "/images/fallback.jpg",
  loading = "lazy",
  decoding = "async",
}: Props) {
  const [currentSrc, setCurrentSrc] = useState(src);

  return (
    <img
      className={className}
      src={currentSrc}
      alt={alt}
      loading={loading}
      decoding={decoding}
      onError={() => {
        if (currentSrc !== fallbackSrc) setCurrentSrc(fallbackSrc);
      }}
    />
  );
}
