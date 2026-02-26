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
    <section className="relative py-24 overflow-hidden">

      {/* background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-900 to-blue-950"></div>

      {/* glow effect */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-blue-400/20 blur-[120px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto px-6 text-center text-white">

        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-4xl font-bold mb-4"
        >
          Why Choose BharatMoney?
        </motion.h2>

        <p className="text-blue-100 mb-14 max-w-2xl mx-auto">
          Trusted expertise, research-backed strategies, and personalized
          financial solutions designed to secure your future.
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {points.map((point, i) => {
            const Icon = point.icon;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.05 }}
                className="group bg-white/10 border border-white/10 backdrop-blur-md p-6 rounded-xl flex items-center gap-4 hover:bg-white/20 hover:-translate-y-1 transition"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-500/20 flex items-center justify-center">
                  <Icon size={20} />
                </div>

                <p className="text-blue-50 text-left">{point.text}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}