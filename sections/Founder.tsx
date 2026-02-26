"use client";

import { motion } from "framer-motion";

export default function Founder() {
  return (
    <section className="py-24 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="relative"
        >
          {/* glow */}
          <div className="absolute -inset-2 bg-blue-600/20 blur-2xl rounded-3xl"></div>

          <img
            src="/founder.jpg"
            alt="Founder"
            className="relative rounded-3xl shadow-2xl w-full object-cover border border-white/10"
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
        >
          <p className="text-blue-400 font-semibold tracking-wide uppercase mb-3">
            Meet the Founder
          </p>

          <h2 className="text-4xl font-bold mb-6">
            Mr. Kishan Jainani
          </h2>

          <p className="text-slate-300 leading-relaxed mb-6">
            NISM-certified financial advisor helping individuals build wealth
            through disciplined investing and smart financial planning.
          </p>

          <div className="border-l-2 border-blue-500 pl-4 text-slate-400 italic">
            “Financial freedom should be simple, transparent,
            and achievable for everyone.”
          </div>
        </motion.div>
      </div>
    </section>
  );
}