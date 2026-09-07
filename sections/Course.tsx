"use client";

import {
  BarChart3,
  CalendarDays,
  CheckCircle2,
  IndianRupee,
  LineChart,
  Radio,
  TrendingUp,
  Wallet2,
} from "lucide-react";
import { motion } from "framer-motion";
import { EASE, Reveal, SectionHeading, Stagger, staggerItem } from "@/components/motion/Reveal";

const curriculum = [
  { icon: LineChart, title: "Market Foundations", desc: "Candlesticks, trends, structure & risk basics." },
  { icon: TrendingUp, title: "Trading Strategies", desc: "Entry, exit & position-sizing frameworks." },
  { icon: BarChart3, title: "Futures & Options", desc: "Hedging, spreads and expiry-day playbooks." },
  { icon: Radio, title: "Live Market Sessions", desc: "Trade alongside mentors in real time." },
  { icon: Wallet2, title: "Portfolio Building", desc: "Turn skills into a long-term investing plan." },
  { icon: CheckCircle2, title: "Career Pathways", desc: "Opportunities as analyst, trader or advisor." },
];

export default function Course() {
  return (
    <section
      id="course"
      className="relative overflow-hidden bg-gradient-to-b from-navy-900 to-navy-950 py-20 text-white md:py-28"
    >
      <div className="absolute inset-0 bg-dots-dark opacity-30" />
      <div className="absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[120px]" />

      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading
          dark
          eyebrow="Learn with us"
          title={
            <>
              Stock Market Ki <span className="text-gradient-gold">Pathshala</span>
            </>
          }
          subtitle="A hands-on 10-day program covering trading, futures & options and live market strategy — built for a real career in the markets."
        />

        <Stagger className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {curriculum.map((item) => (
            <motion.div
              key={item.title}
              variants={staggerItem}
              whileHover={{ y: -5 }}
              className="group rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-md transition hover:border-white/25 hover:bg-white/[0.08]"
            >
              <div className="mb-3 grid h-11 w-11 place-items-center rounded-xl bg-blue-500/15 text-blue-300 transition group-hover:scale-110">
                <item.icon size={19} />
              </div>
              <h3 className="font-display text-[15px] font-semibold">{item.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="mt-12">
          <div className="mx-auto flex max-w-3xl flex-col items-center gap-6 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-6 backdrop-blur-xl sm:flex-row sm:justify-between sm:p-8">
            <div className="flex gap-8">
              <div className="flex items-center gap-3">
                <CalendarDays size={22} className="text-blue-300" />
                <div>
                  <p className="font-display text-xl font-bold">10 Days</p>
                  <p className="text-xs text-slate-400">Live + practical</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <IndianRupee size={22} className="text-gold-300" />
                <div>
                  <p className="font-display text-xl font-bold">4,999</p>
                  <p className="text-xs text-slate-400">All inclusive</p>
                </div>
              </div>
            </div>

            <a href="https://wa.link/fcw2ig" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto">
              <motion.button
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                transition={{ ease: EASE }}
                className="w-full rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/30"
              >
                Enroll Now
              </motion.button>
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
