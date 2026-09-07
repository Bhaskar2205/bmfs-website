"use client";

import { motion } from "framer-motion";
import {
  Building,
  Cpu,
  Gem,
  HeartHandshake,
  Microscope,
  ShieldCheck,
} from "lucide-react";
import { SectionHeading, Stagger, staggerItem } from "@/components/motion/Reveal";

const points = [
  {
    icon: Microscope,
    title: "Research-driven approach",
    desc: "Every recommendation is backed by Motilal Oswal's institutional research desk.",
    span: "md:col-span-2",
  },
  {
    icon: Gem,
    title: "Full-spectrum solutions",
    desc: "Equity, mutual funds, insurance, IPOs and retirement — under one roof.",
  },
  {
    icon: Cpu,
    title: "Guidance + technology",
    desc: "Personal advisors paired with modern, paperless investing tools.",
  },
  {
    icon: Building,
    title: "Local trust, national strength",
    desc: "A Jaipur team with the backing of a nationwide financial institution.",
    span: "md:col-span-2",
  },
  {
    icon: ShieldCheck,
    title: "Long-term wealth philosophy",
    desc: "We optimise for compounding and discipline, not hype.",
  },
  {
    icon: HeartHandshake,
    title: "Transparent, always",
    desc: "Clear costs, honest advice and communication you can rely on.",
  },
];

export default function WhyChoose() {
  return (
    <section id="why" className="relative overflow-hidden py-20 md:py-28">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-blue-900 to-navy-950" />
      <div className="absolute left-1/2 top-0 -z-10 h-[26rem] w-[42rem] -translate-x-1/2 rounded-full bg-blue-400/20 blur-[130px]" />
      <div className="absolute inset-0 -z-10 bg-grid-dark opacity-30" />

      <div className="relative mx-auto max-w-6xl px-5 text-white">
        <SectionHeading
          dark
          eyebrow="Why BharatMoney"
          title={
            <>
              Trusted expertise that <span className="text-gradient-gold">compounds</span>
            </>
          }
          subtitle="Research-backed strategies and personalised solutions designed to secure your financial future."
        />

        <Stagger className="mt-14 grid gap-4 md:grid-cols-3 md:gap-5">
          {points.map((point, i) => (
            <motion.div
              key={point.title}
              variants={staggerItem}
              whileHover={{ y: -5 }}
              className={`group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.06] p-6 backdrop-blur-md transition hover:border-white/25 hover:bg-white/[0.1] ${
                point.span ?? ""
              }`}
            >
              <span className="pointer-events-none absolute -right-6 -top-8 font-display text-7xl font-bold text-white/[0.05]">
                0{i + 1}
              </span>
              <div className="mb-4 grid h-11 w-11 place-items-center rounded-xl bg-blue-500/15 text-blue-200 ring-1 ring-white/10 transition group-hover:scale-110">
                <point.icon size={19} />
              </div>
              <h3 className="font-display text-base font-semibold">{point.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-blue-100/75">
                {point.desc}
              </p>
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
