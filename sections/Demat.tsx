"use client";

import { useRef } from "react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import {
  ArrowRight,
  BadgeCheck,
  FileText,
  Fingerprint,
  Lock,
  PenLine,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { EASE, Reveal, SectionHeading } from "@/components/motion/Reveal";

const OPEN_ACCOUNT =
  "https://ekyc.motilaloswal.com/partner?diyid=dceba2f4-a859-4e68-936c-7038669a7dd0";

const steps = [
  { icon: FileText, title: "Fill basic details", desc: "Enter PAN, Aadhaar and contact information." },
  { icon: Fingerprint, title: "Complete OTP & KYC", desc: "Secure verification via your Aadhaar-linked mobile." },
  { icon: PenLine, title: "E-sign & activate", desc: "Digitally sign and start investing right away." },
];

const badges = [
  { icon: ShieldCheck, label: "Secure & trusted" },
  { icon: Lock, label: "100% paperless" },
  { icon: BadgeCheck, label: "Quick approval" },
];

export default function Demat() {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.4"],
  });
  const lineScale = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <section
      id="demat"
      className="relative overflow-hidden bg-gradient-to-b from-navy-950 to-black py-20 text-white md:py-28"
    >
      <div className="absolute inset-0 bg-dots-dark opacity-25" />
      <div className="absolute left-1/2 top-0 h-72 w-[36rem] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[130px]" />

      <div className="relative mx-auto max-w-5xl px-5">
        <SectionHeading
          dark
          eyebrow="Get started"
          title={
            <>
              Open your free <span className="text-gradient-blue">Demat account</span>
            </>
          }
          subtitle="A secure, paperless process powered by Motilal Oswal. Most accounts are ready in minutes."
        />

        {/* Timeline */}
        <div ref={ref} className="relative mt-16 grid gap-8 md:grid-cols-3 md:gap-6">
          <div className="absolute left-0 right-0 top-6 hidden h-px bg-white/10 md:block">
            <motion.div
              style={{ scaleX: reduce ? 1 : lineScale }}
              className="h-full origin-left bg-gradient-to-r from-blue-500 to-gold-400"
            />
          </div>

          {steps.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: EASE, delay: i * 0.12 }}
              className="relative"
            >
              <div className="relative z-10 mb-4 grid h-12 w-12 place-items-center rounded-full border border-white/15 bg-navy-950 text-blue-300">
                <step.icon size={20} />
                <span className="absolute -right-1 -top-1 grid h-5 w-5 place-items-center rounded-full bg-gold-400 text-[10px] font-bold text-navy-950">
                  {i + 1}
                </span>
              </div>
              <h3 className="font-display text-base font-semibold">{step.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-400">{step.desc}</p>
            </motion.div>
          ))}
        </div>

        <Reveal delay={0.1}>
          <div className="mt-12 flex flex-wrap justify-center gap-x-6 gap-y-3">
            {badges.map((b) => (
              <span
                key={b.label}
                className="flex items-center gap-2 text-xs font-medium text-slate-400"
              >
                <b.icon size={15} className="text-blue-400" /> {b.label}
              </span>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.15} className="mt-10 flex justify-center">
          <motion.a
            href={OPEN_ACCOUNT}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-10 py-4 text-base font-semibold text-white shadow-xl shadow-blue-600/30 sm:w-auto"
          >
            Open Free Account Now
            <ArrowRight size={18} className="transition group-hover:translate-x-1" />
          </motion.a>
        </Reveal>

        {/* AI announcement */}
        <Reveal delay={0.2}>
          <div className="relative mx-auto mt-10 max-w-xl overflow-hidden rounded-2xl border border-blue-500/25 bg-gradient-to-r from-blue-900/40 to-blue-800/20 px-6 py-5 text-center backdrop-blur-md">
            <motion.div
              animate={{ y: ["-130%", "130%"] }}
              transition={{ repeat: Infinity, duration: 3, ease: "linear" }}
              className="absolute inset-x-0 h-px bg-blue-400/50 blur-[1px]"
            />
            <span className="inline-flex items-center gap-1.5 rounded-full border border-blue-400/30 bg-blue-500/15 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-blue-300">
              <Sparkles size={11} /> AI powered · coming soon
            </span>
            <p className="mt-2 font-display text-sm font-semibold text-blue-200 md:text-base">
              BharatMoney AI document upload
            </p>
            <p className="mt-1 text-xs leading-relaxed text-slate-300 md:text-sm">
              Upload your documents and our{" "}
              <span className="font-medium text-white">automated AI verification</span>{" "}
              processes them instantly — opening your account in seconds.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
