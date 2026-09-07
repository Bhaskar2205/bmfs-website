"use client";

import { useRef, useState } from "react";
import {
  AnimatePresence,
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  GraduationCap,
  LineChart,
  Phone,
  ShieldCheck,
  Sparkles,
  TrendingUp,
  X,
} from "lucide-react";
import { EASE } from "@/components/motion/Reveal";

const phoneNumber = "+918875729292";
const whatsappLink = "https://wa.link/fcw2ig";

const stats = [
  { value: "37+", label: "Years of trust", icon: ShieldCheck },
  { value: "5,000+", label: "Investors guided", icon: TrendingUp },
  { value: "₹4,999", label: "10-day market course", icon: GraduationCap },
];

const badges = [
  "Trusted Since 1987",
  "Motilal Oswal Partner",
  "NISM Certified",
  "Research Driven",
  "Wealth Planning",
];

export default function Hero() {
  const [showCallPopup, setShowCallPopup] = useState(false);
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const yFast = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : -120]);
  const ySlow = useTransform(scrollYProgress, [0, 1], [0, reduce ? 0 : 90]);
  const fade = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      ref={ref}
      id="top"
      className="relative overflow-hidden bg-white pt-32 pb-20 md:pt-40 md:pb-28"
    >
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-br from-blue-50 via-white to-sky-50" />
      <div className="absolute inset-0 -z-10 bg-grid opacity-60 [mask-image:radial-gradient(ellipse_at_center,#000_20%,transparent_75%)]" />
      <motion.div
        style={{ y: yFast }}
        className="absolute -top-40 left-1/2 -z-10 h-[560px] w-[560px] -translate-x-1/2 rounded-full bg-blue-400/25 blur-[120px]"
      />
      <motion.div
        style={{ y: ySlow }}
        className="absolute -right-24 top-40 -z-10 h-[380px] w-[380px] rounded-full bg-gold-300/30 blur-[120px]"
      />

      <motion.div style={{ opacity: fade }} className="relative mx-auto max-w-5xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: EASE }}
          className="mx-auto mb-7 flex w-fit items-center gap-2 rounded-full border border-blue-200/70 bg-white/70 px-4 py-1.5 text-[12px] font-medium text-blue-800 shadow-sm backdrop-blur"
        >
          <Sparkles size={14} className="text-gold-500" />
          Official Motilal Oswal Partner · Jaipur
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 32 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: EASE }}
          className="font-display text-center text-[1.85rem] font-bold leading-[1.1] text-navy-950 text-balance sm:text-5xl md:text-[4.4rem]"
        >
          Your gateway to{" "}
          <span className="relative inline-block">
            <span className="text-gradient-blue">wealth creation</span>
            <motion.svg
              viewBox="0 0 300 12"
              className="absolute -bottom-2 left-0 hidden w-full text-gold-400 sm:block"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ pathLength: 1, opacity: 1 }}
              transition={{ delay: 0.7, duration: 0.8, ease: EASE }}
            >
              <motion.path
                d="M2 9 C 80 2, 220 2, 298 8"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                fill="none"
              />
            </motion.svg>
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15, duration: 0.6, ease: EASE }}
          className="mx-auto mt-7 max-w-2xl text-center text-[15px] leading-relaxed text-slate-600 md:text-lg"
        >
          Expert financial guidance, disciplined investment solutions and hands-on
          stock-market education — built to help you grow, protect and compound
          real wealth.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25, duration: 0.6, ease: EASE }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <button
            onClick={() => setShowCallPopup(true)}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-navy-900 to-blue-700 px-8 py-4 text-[15px] font-semibold text-white shadow-[0_16px_40px_-10px_rgba(29,78,216,0.6)] ring-1 ring-white/10 transition hover:-translate-y-0.5 hover:shadow-[0_20px_48px_-8px_rgba(29,78,216,0.7)] sm:w-auto"
          >
            Start Investing
            <ArrowRight size={17} className="transition group-hover:translate-x-1" />
          </button>
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded-full border-2 border-navy-900 bg-white px-8 py-4 text-[15px] font-semibold text-navy-900 shadow-[0_12px_32px_-12px_rgba(10,24,54,0.45)] transition hover:-translate-y-0.5 hover:bg-navy-900 hover:text-white sm:w-auto"
          >
            <GraduationCap size={17} />
            Join the Course
          </a>
        </motion.div>

        {/* Floating stat cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.7, ease: EASE }}
          className="mx-auto mt-12 grid max-w-3xl grid-cols-3 gap-2.5 sm:mt-14 sm:gap-4"
        >
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              animate={reduce ? undefined : { y: [0, -8, 0] }}
              transition={{
                duration: 5 + i,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.5,
              }}
              className="card-sheen relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-3.5 text-left shadow-[0_18px_44px_-12px_rgba(10,24,54,0.35)] ring-1 ring-navy-900/5 sm:p-5"
            >
              <span className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-blue-600 to-sky-400" />
              <span className="inline-flex rounded-lg bg-blue-50 p-2 text-blue-700 ring-1 ring-blue-100">
                <s.icon size={17} className="sm:h-[18px] sm:w-[18px]" />
              </span>
              <p className="mt-2.5 font-display text-lg font-extrabold text-navy-950 sm:mt-3 sm:text-2xl">
                {s.value}
              </p>
              <p className="text-[11px] font-medium leading-tight text-slate-600 sm:text-xs">
                {s.label}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Ticker */}
      <div className="marquee-group relative mt-16 flex overflow-hidden border-y border-slate-200/70 bg-white/50 py-3.5 backdrop-blur">
        <div className="mask-fade-x flex w-full overflow-hidden">
          <div className="animate-marquee flex shrink-0 items-center gap-10 pr-10">
            {[...badges, ...badges].map((b, i) => (
              <span
                key={i}
                className="flex shrink-0 items-center gap-2 text-xs font-medium text-slate-600"
              >
                <BadgeCheck size={15} className="text-blue-600" />
                {b}
              </span>
            ))}
          </div>
          <div
            className="animate-marquee flex shrink-0 items-center gap-10 pr-10"
            aria-hidden
          >
            {[...badges, ...badges].map((b, i) => (
              <span
                key={i}
                className="flex shrink-0 items-center gap-2 text-xs font-medium text-slate-600"
              >
                <BadgeCheck size={15} className="text-blue-600" />
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <motion.div
        style={{ opacity: fade }}
        className="pointer-events-none absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:block"
      >
        <div className="flex h-9 w-5.5 items-start justify-center rounded-full border border-slate-300 p-1">
          <motion.span
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.6, repeat: Infinity }}
            className="h-1.5 w-1.5 rounded-full bg-blue-600"
          />
        </div>
      </motion.div>

      {/* Call popup */}
      <AnimatePresence>
        {showCallPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowCallPopup(false)}
            className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-950/50 px-6 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.9, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 20, opacity: 0 }}
              transition={{ duration: 0.25, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-sm rounded-3xl bg-white p-8 text-center shadow-2xl"
            >
              <button
                onClick={() => setShowCallPopup(false)}
                className="absolute right-4 top-4 text-slate-400 transition hover:text-navy-950"
              >
                <X size={20} />
              </button>
              <div className="mx-auto mb-4 grid h-14 w-14 place-items-center rounded-2xl bg-gradient-to-br from-navy-900 to-blue-700 text-white">
                <LineChart size={24} />
              </div>
              <h3 className="font-display text-xl font-bold text-navy-950">
                Talk to an advisor
              </h3>
              <p className="mt-2 text-sm text-slate-600">
                Speak directly with our financial advisor about getting started.
              </p>
              <a
                href={`tel:${phoneNumber}`}
                className="mt-6 flex items-center justify-center gap-2 rounded-full bg-gradient-to-r from-navy-900 to-blue-700 py-3 font-semibold text-white transition hover:shadow-lg"
              >
                <Phone size={16} /> {phoneNumber}
              </a>
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-sm font-medium text-blue-700 hover:underline"
              >
                or message us on WhatsApp
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
