"use client";

import { motion, type Variants } from "framer-motion";
import type { ReactNode } from "react";

export const EASE = [0.22, 1, 0.36, 1] as const;

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  y?: number;
  once?: boolean;
};

/** Fade + slide element into view on scroll. */
export function Reveal({
  children,
  className,
  delay = 0,
  y = 26,
  once = true,
}: RevealProps) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-70px" }}
      transition={{ duration: 0.7, ease: EASE, delay }}
    >
      {children}
    </motion.div>
  );
}

export const staggerContainer: Variants = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.1, delayChildren: 0.08 },
  },
};

export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 26 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

/** Grid/list wrapper that reveals its children one after another. */
export function Stagger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, margin: "-60px" }}
    >
      {children}
    </motion.div>
  );
}

type HeadingProps = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  dark?: boolean;
  align?: "center" | "left";
  className?: string;
};

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  dark = false,
  align = "center",
  className = "",
}: HeadingProps) {
  const alignment =
    align === "center" ? "items-center text-center mx-auto" : "items-start text-left";

  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-70px" }}
      transition={{ duration: 0.7, ease: EASE }}
      className={`flex flex-col ${alignment} max-w-2xl ${className}`}
    >
      {eyebrow && (
        <span
          className={`mb-4 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] ${
            dark
              ? "border-white/15 bg-white/5 text-blue-200"
              : "border-blue-200/70 bg-blue-50 text-blue-700"
          }`}
        >
          <span className="h-1.5 w-1.5 rounded-full bg-current" />
          {eyebrow}
        </span>
      )}

      <h2
        className={`font-display text-3xl font-bold leading-[1.12] text-balance sm:text-4xl md:text-[2.9rem] ${
          dark ? "text-white" : "text-navy-950"
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-5 text-[15px] leading-relaxed md:text-base ${
            dark ? "text-slate-300" : "text-slate-600"
          }`}
        >
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
