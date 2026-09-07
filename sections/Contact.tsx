"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, MessageCircle, Phone, Mail } from "lucide-react";
import { EASE, Reveal, SectionHeading, Stagger, staggerItem } from "@/components/motion/Reveal";

const channels = [
  {
    icon: Phone,
    label: "Call us",
    value: "+91 88757 29292",
    href: "tel:+918875729292",
  },
  {
    icon: Mail,
    label: "Email",
    value: "bharatmoneymofsl@gmail.com",
    href: "mailto:bharatmoneymofsl@gmail.com",
  },
  {
    icon: MapPin,
    label: "Visit",
    value: "Patel Marg, Mansarovar, Jaipur",
    href: "https://maps.google.com/?q=Patel+Marg+Mansarovar+Jaipur",
  },
];

export default function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden bg-navy-950 py-20 text-white md:py-28">
      <div className="absolute inset-0 bg-grid-dark opacity-30 [mask-image:radial-gradient(ellipse_at_center,#000,transparent_75%)]" />
      <div className="absolute -bottom-24 left-1/2 h-72 w-[40rem] -translate-x-1/2 rounded-full bg-blue-500/20 blur-[130px]" />

      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading
          dark
          eyebrow="Get in touch"
          title={
            <>
              Let&apos;s start your <span className="text-gradient-gold">journey</span>
            </>
          }
          subtitle="Have a question or ready to invest? Reach out — our team usually responds within a few hours."
        />

        <Stagger className="mt-14 grid gap-4 md:grid-cols-3">
          {channels.map((c) => (
            <motion.a
              key={c.label}
              variants={staggerItem}
              href={c.href}
              target={c.href.startsWith("http") ? "_blank" : undefined}
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="group flex items-start gap-4 rounded-2xl border border-white/10 bg-white/[0.05] p-6 backdrop-blur-md transition hover:border-white/25 hover:bg-white/[0.09]"
            >
              <div className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-blue-500/15 text-blue-300 ring-1 ring-white/10">
                <c.icon size={19} />
              </div>
              <div className="min-w-0">
                <p className="text-[11px] uppercase tracking-wider text-blue-200/70">
                  {c.label}
                </p>
                <p className="mt-1 break-words text-sm font-medium text-white">
                  {c.value}
                </p>
              </div>
              <ArrowUpRight
                size={16}
                className="ml-auto shrink-0 text-slate-500 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-300"
              />
            </motion.a>
          ))}
        </Stagger>

        <Reveal delay={0.1} className="mt-6">
          <div className="flex flex-col items-center gap-5 rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.08] to-white/[0.02] p-7 text-center backdrop-blur-xl sm:flex-row sm:justify-between sm:text-left">
            <div>
              <p className="font-display text-lg font-semibold">Prefer a quick chat?</p>
              <p className="mt-1 text-sm text-slate-400">
                Message us on WhatsApp for course details and account help.
              </p>
            </div>
            <motion.a
              href="https://wa.link/fcw2ig"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
              transition={{ ease: EASE }}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-emerald-500 to-green-600 px-8 py-3.5 text-sm font-semibold text-white shadow-lg shadow-emerald-600/30 sm:w-auto"
            >
              <MessageCircle size={16} /> WhatsApp Now
            </motion.a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
