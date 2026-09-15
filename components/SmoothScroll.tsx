"use client";

import { ReactLenis } from "lenis/react";
import type { ReactNode } from "react";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  return (
    <ReactLenis
      root
      options={{
        autoRaf: true,
        // Higher lerp = snappier scroll (0.08 felt too heavy / sticky)
        lerp: 0.14,
        wheelMultiplier: 1.25,
        touchMultiplier: 1.5,
        smoothWheel: true,
        anchors: true,
        syncTouch: false,
      }}
    >
      {children}
    </ReactLenis>
  );
}
