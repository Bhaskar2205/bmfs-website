"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Hero() {
  const [showCallPopup, setShowCallPopup] = useState(false);

  const phoneNumber = "+918875729292";
  const whatsappLink = "https://wa.link/fcw2ig";

  return (
<section className="relative overflow-hidden pt-32 pb-28 text-center bg-white">
      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-white to-blue-100"></div>
      <div className="absolute top-[-100px] left-1/2 -translate-x-1/2 w-[700px] h-[700px] bg-blue-400/20 blur-3xl md:blur-[120px] rounded-full"></div>

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
          {/* Start Investing */}
          <button
            onClick={() => setShowCallPopup(true)}
            className="bg-blue-900 text-white px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:bg-blue-800 transition"
          >
            Start Investing
          </button>

          {/* Join Course */}
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="backdrop-blur-md bg-white/70 border border-blue-200 px-8 py-3 rounded-full text-blue-900 hover:bg-white transition"
          >
            Join Course
          </a>
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

      {/* CALL POPUP */}
      {showCallPopup && (
        <div className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-6">
          <div className="bg-white rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl">

            <h3 className="text-xl font-semibold text-blue-950 mb-3">
              Call Now
            </h3>

            <p className="text-slate-600 mb-6">
              Speak directly with our financial advisor.
            </p>

            <a
              href={`tel:${phoneNumber}`}
              className="block bg-blue-900 text-white py-3 rounded-full font-semibold hover:bg-blue-800 transition mb-4"
            >
              📞 {phoneNumber}
            </a>

            <button
              onClick={() => setShowCallPopup(false)}
              className="text-slate-500 text-sm hover:text-black"
            >
              Cancel
            </button>

          </div>
        </div>
      )}
    </section>
  );
}