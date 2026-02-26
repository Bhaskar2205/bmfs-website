"use client";

import { motion } from "framer-motion";
import { ShieldCheck, TrendingUp, Cpu, MapPin, Gem } from "lucide-react";

const points = [
  { text: "Research Driven Approach", icon: TrendingUp },
  { text: "Full Spectrum Financial Solutions", icon: Gem },
  { text: "Personal Guidance + Technology", icon: Cpu },
  { text: "Local Trust with National Strength", icon: MapPin },
  { text: "Long-Term Wealth Philosophy", icon: ShieldCheck },
];

export default function WhyChoose() {
  return (
    <section className="relative py-16 md:py-24 overflow-hidden">

      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-blue-950"></div>

      {/* Glow (lighter on mobile for performance) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2
                      w-[350px] md:w-[700px]
                      h-[300px] md:h-[500px]
                      bg-blue-400/20 blur-[80px] md:blur-[120px]
                      rounded-full"></div>

      <div className="relative max-w-6xl mx-auto px-5 text-center text-white">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-4xl font-bold mb-4"
        >
          Why Choose BharatMoney?
        </motion.h2>

        <p className="text-blue-100 text-sm md:text-base mb-10 md:mb-14 max-w-2xl mx-auto leading-relaxed">
          Trusted expertise, research-backed strategies, and personalized
          financial solutions designed to secure your future.
        </p>

        {/* GRID */}
        <div className="grid gap-4 md:grid-cols-2 md:gap-6">
          {points.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group bg-white/10 border border-white/10 backdrop-blur-md
                           p-4 md:p-6 rounded-xl flex items-start gap-3 md:gap-4
                           hover:bg-white/20 active:scale-[0.98]
                           transition duration-300"
              >
                <div className="w-9 h-9 md:w-10 md:h-10 rounded-lg
                                bg-blue-500/20 flex items-center justify-center
                                shrink-0">
                  <Icon size={18} />
                </div>

                <p className="text-blue-50 text-left text-sm md:text-base leading-snug">
                  {point.text}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}