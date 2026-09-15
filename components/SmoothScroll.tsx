"use client";

import { useEffect, type ReactNode } from "react";
import Lenis from "lenis";

export default function SmoothScroll({ children }: { children: ReactNode }) {
  useEffect(() => {
    const lenis = new Lenis({
      autoRaf: true,
      // Keep coast-to-stop, but move farther per flick so it doesn't feel sluggish
      lerp: 0.09,
      duration: 1.25,
      wheelMultiplier: 1.2,
      touchMultiplier: 1.35,
      smoothWheel: true,
      syncTouch: false,
      anchors: true,
    });

    return () => {
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
