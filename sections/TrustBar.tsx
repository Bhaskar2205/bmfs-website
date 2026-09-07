"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import { CalendarClock, GraduationCap, Landmark, Users } from "lucide-react";

type Stat = {
  icon: typeof Users;
  target: number;
  suffix?: string;
  prefix?: string;
  label: string;
};

const stats: Stat[] = [
  { icon: CalendarClock, target: 37, suffix: "+", label: "Years of market trust" },
  { icon: Users, target: 5000, suffix: "+", label: "Investors guided" },
  { icon: GraduationCap, target: 1200, suffix: "+", label: "Course learners" },
  { icon: Landmark, target: 8, label: "Financial services" },
];

function useCountUp(target: number, run: boolean, duration = 1400) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!run) return;
    let raf = 0;
    const start = performance.now();
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setValue(Math.round(target * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [target, run, duration]);
  return value;
}

function StatItem({ stat, index, run }: { stat: Stat; index: number; run: boolean }) {
  const value = useCountUp(stat.target, run);
  const display =
    stat.target >= 1000 ? value.toLocaleString("en-IN") : value.toString();
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={run ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      className="flex items-center gap-3.5 px-2"
    >
      <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-white/10 text-blue-200 ring-1 ring-white/15">
        <stat.icon size={18} />
      </div>
      <div>
        <p className="font-display text-xl font-bold text-white sm:text-2xl">
          {stat.prefix}
          {display}
          {stat.suffix}
        </p>
        <p className="text-[11px] uppercase tracking-wide text-blue-200/70">
          {stat.label}
        </p>
      </div>
    </motion.div>
  );
}

export default function TrustBar() {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div className="relative overflow-hidden bg-gradient-to-r from-navy-950 via-navy-900 to-navy-950">
      <div className="absolute inset-0 bg-dots-dark opacity-40" />
      <div
        ref={ref}
        className="relative mx-auto grid max-w-6xl grid-cols-2 gap-6 px-5 py-8 md:grid-cols-4 md:py-10"
      >
        {stats.map((stat, i) => (
          <StatItem key={stat.label} stat={stat} index={i} run={inView} />
        ))}
      </div>
    </div>
  );
}
