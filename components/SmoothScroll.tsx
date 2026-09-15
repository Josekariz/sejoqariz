"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        lerp: 0.08,
        smoothWheel: true,
        anchors: true,
        syncTouch: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
