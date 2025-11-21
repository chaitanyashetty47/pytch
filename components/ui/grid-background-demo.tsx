"use client";

import { cn } from "@/lib/utils";
import React from "react";

interface GridBackgroundDemoProps {
  children?: React.ReactNode;
  className?: string;
}

export default function GridBackgroundDemo({
  children,
  className,
}: GridBackgroundDemoProps) {
  return (
    <div
      className={cn(
        "relative flex h-[47rem] md:h-[65rem] w-full items-center justify-center overflow-hidden bg-[#FAF9F6]",
        className,
      )}
    >
      <div
        className={cn(
          "absolute inset-0",
          "[background-size:40px_40px]",
          "[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
        )}
      />
      {/* Radial gradient for the container to give a faded look */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-[#FAF9F6] [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
      {children ? (
        <div className="relative z-20 w-full">{children}</div>
      ) : (
        <p className="relative z-20 bg-gradient-to-b from-neutral-200 to-neutral-500 bg-clip-text py-8 text-4xl font-bold text-transparent sm:text-7xl">
          Backgrounds
        </p>
      )}
    </div>
  );
}

