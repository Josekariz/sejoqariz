"use client";
import React, { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import { cn } from "@/utils/cn";
import Link from "next/link";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(true);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: 0,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        className={cn(
          // Base styles
          "fixed z-[5000] top-6 inset-x-0 mx-auto",
          // Container width and padding adjustments
          "w-[90%] sm:w-[85%] md:w-[80%] lg:w-[70%] xl:w-[60%] max-w-5xl",
          "px-4 sm:px-6 md:px-8 py-3 sm:py-4",
          // Visual styles
          "rounded-2xl",
          "bg-white/70 dark:bg-gray-900/70 backdrop-blur-md",
          "border border-gray-200 dark:border-gray-800",
          "shadow-[0px_2px_15px_-3px_rgba(0,0,0,0.1),0px_1px_0px_0px_rgba(25,28,33,0.02),0px_0px_0px_1px_rgba(25,28,33,0.08)]",
          className
        )}
      >
        {/* Navigation container */}
        <nav className="flex items-center justify-center sm:justify-evenly gap-3 sm:gap-4 md:gap-6 flex-wrap sm:flex-nowrap">
          {navItems.map((navItem: any, idx: number) => (
            <Link
              key={`link=${idx}`}
              href={navItem.link}
              {...(navItem.name === "Download CV"
                ? { target: "_blank", rel: "noopener noreferrer" }
                : {}
              )}
              className={cn(
                // Base styles
                "relative flex items-center",
                "px-2 sm:px-3 py-1.5",
                "rounded-lg",
                // Text styles
                "text-xs sm:text-sm md:text-base",
                "font-medium",
                "whitespace-nowrap",
                // Colors and hover effects
                "text-neutral-600 dark:text-neutral-200",
                "hover:text-neutral-900 dark:hover:text-neutral-50",
                "hover:bg-black/5 dark:hover:bg-white/5",
                // Transition
                "transition-all duration-200",
                // Special styles for Download CV
                navItem.name === "Download CV" && "bg-black/5 dark:bg-white/5"
              )}
            >
              {navItem.icon && (
                <span className="block mr-1 sm:mr-2">{navItem.icon}</span>
              )}
              <span>{navItem.name}</span>
            </Link>
          ))}
        </nav>
      </motion.div>
    </AnimatePresence>
  );
};