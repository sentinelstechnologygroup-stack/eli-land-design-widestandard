// src/components/PageShell.tsx
import React from "react";

export default function PageShell({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`eliPage ${className}`.trim()}>
      <div className="eliPage__inner">{children}</div>
    </div>
  );
}
