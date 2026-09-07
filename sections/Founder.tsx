"use client";

import { useRef } from "react";
import Image from "next/image";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import { Award, Quote, ShieldCheck, TrendingUp } from "lucide-react";
import { EASE, Reveal } from "@/components/motion/Reveal";

const credentials = [
  { icon: Award, label: "NISM Certified Advisor" },
  { icon: ShieldCheck, label: "Motilal Oswal Partner" },
  { icon: TrendingUp, label: "37+ Years of Market Trust" },
];

export default function Founder() {
  const ref = useRef<HTMLElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const imageY = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : 60, reduce ? 0 : -60]);
  const glowY = useTransform(scrollYProgress, [0, 1], [reduce ? 0 : -40, reduce ? 0 : 40]);

  return (
    <section
      ref={ref}
      id="founder"
      className="relative overflow-hidden bg-gradient-to-b from-navy-950 to-navy-900 py-20 text-white md:py-28"
    >
      <div className="absolute inset-0 bg-grid-dark opacity-40 [mask-image:radial-gradient(ellipse_at_top,#000,transparent_70%)]" />
      <motion.div
        style={{ y: glowY }}
        className="absolute -left-20 top-24 h-72 w-72 rounded-full bg-blue-500/20 blur-[120px]"
      />

      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-6 md:grid-cols-2 md:gap-16">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE }}
          className="relative mx-auto w-full max-w-sm"
        >
          <motion.div
            style={{ y: imageY }}
            className="group relative rounded-[2rem] border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur-xl"
          >
            <div className="absolute -inset-3 -z-10 rounded-[2.4rem] bg-gradient-to-tr from-blue-500/25 via-transparent to-gold-400/20 blur-2xl" />
            <div className="relative aspect-4/5 overflow-hidden rounded-[1.7rem]">
              <Image
                src="/founder.png"
                alt="Mr. Kishan Jainani"
                fill
                sizes="(max-width: 768px) 90vw, 384px"
                className="object-cover transition duration-700 group-hover:scale-105"
                priority
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-navy-950 via-navy-950/50 to-transparent p-6">
                <p className="font-display text-lg font-semibold">Mr. Kishan Jainani</p>
                <p className="text-sm text-blue-300">Founder &amp; Financial Strategist</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20, rotate: -6 }}
            whileInView={{ opacity: 1, y: 0, rotate: -6 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6, ease: EASE }}
            className="absolute -right-4 -top-5 rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur-xl"
          >
            <p className="font-display text-xl font-bold text-gold-300">1987</p>
            <p className="text-[10px] uppercase tracking-wide text-blue-200">Since</p>
          </motion.div>
        </motion.div>

        {/* Text */}
        <div>
          <Reveal>
            <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.22em] text-blue-200">
              <span className="h-1.5 w-1.5 rounded-full bg-current" />
              Meet the Founder
            </span>
          </Reveal>

          <Reveal delay={0.05}>
            <h2 className="font-display text-3xl font-bold leading-tight text-balance md:text-[2.7rem]">
              Building wealth the <span className="text-gradient-gold">disciplined</span> way
            </h2>
          </Reveal>

          <Reveal delay={0.1}>
            <p className="mt-5 max-w-xl leading-relaxed text-slate-300">
              A NISM-certified financial advisor helping individuals and families
              build lasting wealth through disciplined investing, smart planning
              and transparent, research-backed guidance.
            </p>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="mt-7 flex flex-col gap-3">
              {credentials.map((c) => (
                <div
                  key={c.label}
                  className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-slate-200 transition hover:border-white/20 hover:bg-white/10"
                >
                  <c.icon size={16} className="text-gold-300" />
                  {c.label}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="mt-7 flex gap-3 border-l-2 border-blue-500 pl-4 text-slate-300 italic">
              <Quote size={18} className="shrink-0 text-blue-400" />
              <p className="max-w-md">
                Financial freedom should be simple, transparent and achievable for
                everyone.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
