"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function Founder() {
  return (
    <section className="py-20 md:py-24 bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 md:gap-16 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}          transition={{ duration: 0.6 }}
          className="relative group w-full max-w-sm mx-auto"
        >
          {/* Glow */}
          <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/20 to-indigo-500/20 blur-xl md:blur-2xl rounded-3xl group-hover:blur-3xl transition"></div>

          <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-xl">

            {/* Image */}
            <div className="relative h-[420px] w-full overflow-hidden">
              <Image
                src="/founder.png"
                alt="Kishan Jainani"
                fill
                className="object-cover group-hover:scale-105 transition duration-700"
                priority
              />
            </div>

            {/* Overlay */}
            <div className="absolute bottom-0 w-full bg-gradient-to-t from-black/80 via-black/40 to-transparent p-6 text-center md:text-left">
              <h3 className="text-white text-lg font-semibold tracking-wide">
                Mr. Kishan Jainani
              </h3>
              <p className="text-blue-300 text-sm mt-1">
                Founder & Financial Strategist
              </p>
            </div>

          </div>
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="text-center md:text-left"
        >
          <p className="text-blue-400 font-semibold tracking-wide uppercase mb-3">
            Meet the Founder
          </p>

          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Mr. Kishan Jainani
          </h2>

          <p className="text-slate-300 leading-relaxed mb-6 max-w-xl mx-auto md:mx-0">
            NISM-certified financial advisor helping individuals build wealth
            through disciplined investing and smart financial planning.
          </p>

          <div className="border-l-0 md:border-l-2 border-blue-500 pl-0 md:pl-4 text-slate-400 italic max-w-md mx-auto md:mx-0">
            “Financial freedom should be simple, transparent,
            and achievable for everyone.”
          </div>
        </motion.div>

      </div>
    </section>
  );
}