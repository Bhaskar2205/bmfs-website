"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 pb-28 text-center">

      {/* BACKGROUND GRADIENT GLOW */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100"></div>

      {/* LIGHT GLOW EFFECT */}
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-400/20 blur-[140px] rounded-full"></div>

      <div className="relative max-w-4xl mx-auto px-6">

        {/* HEADLINE */}
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-6xl font-bold text-blue-950 leading-tight"
        >
          Your Gateway to
          <span className="block text-blue-700">
            Wealth Creation
          </span>
        </motion.h1>

        {/* SUBTEXT */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto"
        >
          Expert financial guidance, investment solutions, and stock market
          education designed to help you build lasting wealth and financial freedom.
        </motion.p>

        {/* BUTTONS */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          className="mt-10 flex flex-col sm:flex-row justify-center gap-4"
        >
          <button className="bg-blue-900 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:bg-blue-800 transition">
            Start Investing
          </button>

          <button className="backdrop-blur-md bg-white/70 border border-blue-200 px-8 py-3 rounded-full text-blue-900 hover:bg-white transition">
            Join Course
          </button>
        </motion.div>

        {/* TRUST STATS */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-8 text-sm text-slate-600"
        >
          <span>✔ Trusted Since 1987</span>
          <span>✔ Motilal Oswal Partner</span>
          <span>✔ Expert Guidance</span>
          <span>✔ Wealth Planning</span>
        </motion.div>

      </div>
    </section>
  );
}