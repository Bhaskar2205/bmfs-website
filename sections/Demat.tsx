"use client";

import { motion } from "framer-motion";
import { CheckCircle, ShieldCheck, Lock } from "lucide-react";

export default function Demat() {
  const steps = [
    {
      title: "Fill Basic Details",
      desc: "Enter PAN, Aadhaar & contact details",
    },
    {
      title: "Complete OTP & KYC",
      desc: "Secure verification via Aadhaar linked mobile",
    },
    {
      title: "E-Sign & Activate",
      desc: "Activate your account instantly",
    },
  ];

  return (
    <section className="relative py-16 md:py-28 overflow-hidden">

      {/* BACKGROUND */}
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 to-black"></div>

      {/* GLOW (smaller on mobile) */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[350px] md:w-[700px] h-[300px] md:h-[500px] bg-blue-500/20 blur-[90px] md:blur-[120px] rounded-full"></div>

      <div className="relative max-w-6xl mx-auto px-5 text-center text-white">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-5xl font-bold mb-4 leading-snug"
        >
          Open Your Free Demat Account
        </motion.h2>

        {/* TRUST LINE */}
        <p className="text-slate-300 text-sm md:text-base mb-10 md:mb-12 max-w-2xl mx-auto">
          Start investing with a secure, paperless process powered by
          Motilal Oswal. Open your account in minutes.
        </p>

        {/* STEPS */}
        <div className="grid gap-4 md:grid-cols-3 mb-12 md:mb-14">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.08 }}
              className="bg-white/5 border border-white/10 backdrop-blur-md p-5 md:p-6 rounded-xl text-left hover:bg-white/10 transition"
            >
              <CheckCircle className="mb-2 text-blue-400" size={24} />
              <h3 className="font-semibold mb-1 text-sm md:text-base">
                {step.title}
              </h3>
              <p className="text-xs md:text-sm text-slate-300">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* SECURITY BADGES */}
        <div className="flex justify-center gap-5 md:gap-8 text-xs md:text-sm text-slate-400 mb-10 md:mb-12 flex-wrap">
          <span className="flex items-center gap-2">
            <ShieldCheck size={16} /> Secure & Trusted
          </span>
          <span className="flex items-center gap-2">
            <Lock size={16} /> 100% Paperless
          </span>
          <span className="flex items-center gap-2">
            <CheckCircle size={16} /> Quick Approval
          </span>
        </div>

        {/* CTA BUTTON */}
        <motion.a
          href="https://ekyc.motilaloswal.com/partner?diyid=dceba2f4-a859-4e68-936c-7038669a7dd0"
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="inline-block w-full sm:w-auto bg-gradient-to-r from-blue-600 to-blue-500 px-8 md:px-12 py-3 md:py-4 rounded-full text-base md:text-lg font-semibold shadow-xl hover:scale-105 active:scale-95 hover:shadow-blue-500/40 transition"
        >
          Open Free Account Now →
        </motion.a>

        {/* NOTE */}
        <p className="text-[11px] md:text-xs text-slate-500 mt-4">
          Takes less than 10 minutes • Zero paperwork
        </p>
      </div>
    </section>
  );
}