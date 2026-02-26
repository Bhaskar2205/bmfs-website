"use client";

import { motion } from "framer-motion";
import { TrendingUp, BarChart3, Briefcase } from "lucide-react";

export default function Course() {
  const benefits = [
    { text: "Learn Trading Strategies", icon: TrendingUp },
    { text: "Futures & Options Mastery", icon: BarChart3 },
    { text: "Career Opportunities in Markets", icon: Briefcase },
  ];

  return (
    <section
      id="course"
      className="py-16 md:py-24 bg-gradient-to-b from-slate-900 to-slate-950 text-white"
    >
      <div className="max-w-5xl mx-auto px-5 text-center">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-4xl font-bold mb-4 leading-snug"
        >
          Stock Market Ki Pathshala
        </motion.h2>

        {/* SUBTEXT */}
        <p className="text-slate-300 text-sm md:text-base max-w-2xl mx-auto mb-10">
          Learn trading, futures & options, and live market strategies
          to build a successful career in the stock market.
        </p>

        {/* BENEFITS */}
        <div className="grid gap-4 md:grid-cols-3 mb-12">
          {benefits.map((item, i) => {
            const Icon = item.icon;
            return (
              <div
                key={i}
                className="bg-white/5 border border-white/10 backdrop-blur-md p-5 md:p-6 rounded-xl flex flex-col items-center gap-3 hover:bg-white/10 transition"
              >
                <div className="w-11 h-11 flex items-center justify-center rounded-full bg-blue-600/20">
                  <Icon size={20} />
                </div>
                <p className="text-sm text-slate-200">{item.text}</p>
              </div>
            );
          })}
        </div>

        {/* COURSE INFO CARD */}
        <div className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 md:p-8 inline-block w-full max-w-md">

          <div className="flex justify-center gap-6 md:gap-10 text-sm md:text-lg font-semibold mb-6">
            <span>📅 10 Days</span>
            <span>💰 ₹4,999</span>
          </div>

          <a
            href="https://wa.link/fcw2ig"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full"
          >
            <button className="w-full bg-blue-600 hover:bg-blue-500 px-8 py-3 rounded-full font-semibold shadow-lg hover:scale-105 active:scale-95 transition">
              Enroll Now
            </button>
          </a>

        </div>

      </div>
    </section>
  );
}