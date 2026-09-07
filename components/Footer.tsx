"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Instagram,
  Mail,
  MapPin,
  Phone,
  Youtube,
} from "lucide-react";

const OPEN_ACCOUNT =
  "https://ekyc.motilaloswal.com/partner?diyid=dceba2f4-a859-4e68-936c-7038669a7dd0";

const nav = [
  { label: "Founder", href: "#founder" },
  { label: "Services", href: "#services" },
  { label: "Course", href: "#course" },
  { label: "Why Us", href: "#why" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-black pt-16 text-white md:pt-20">
      <div className="absolute inset-0 bg-dots-dark opacity-20" />

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1.2fr]">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5">
              <span className="relative h-10 w-10">
                <Image src="/logo-new.png" alt="BharatMoney" fill sizes="40px" className="object-contain" />
              </span>
              <span className="flex flex-col leading-tight">
                <span className="font-display text-sm font-bold tracking-wide">
                  BHARATMONEY
                </span>
                <span className="text-[9px] tracking-[0.3em] text-slate-500">
                  FINANCIAL SERVICES
                </span>
              </span>
            </div>
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-slate-400">
              Helping individuals build long-term wealth through smart investing,
              financial planning and trusted market guidance since 1987.
            </p>
            <div className="mt-6 flex gap-3">
              {[
                { icon: Instagram, href: "https://www.instagram.com/bharatmoneyfinancialservices/?hl=en" },
                { icon: Youtube, href: "https://www.youtube.com/@bharatmoney-x8x" },
              ].map((s, i) => (
                <motion.a
                  key={i}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3 }}
                  className="grid h-10 w-10 place-items-center rounded-xl border border-white/10 bg-white/5 text-slate-300 transition hover:border-white/25 hover:text-white"
                >
                  <s.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-slate-300">
              Explore
            </h3>
            <ul className="mt-4 space-y-2.5">
              {nav.map((n) => (
                <li key={n.href}>
                  <a
                    href={n.href}
                    className="text-sm text-slate-400 transition hover:text-white"
                  >
                    {n.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + CTA */}
          <div>
            <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-slate-300">
              Contact
            </h3>
            <div className="mt-4 space-y-3 text-sm text-slate-400">
              <a href="tel:+918875729292" className="flex items-center gap-3 transition hover:text-white">
                <Phone size={16} /> +91 88757 29292
              </a>
              <a
                href="mailto:bharatmoneymofsl@gmail.com"
                className="flex items-center gap-3 break-all transition hover:text-white"
              >
                <Mail size={16} /> bharatmoneymofsl@gmail.com
              </a>
              <a
                href="https://maps.google.com/?q=Patel+Marg+Mansarovar+Jaipur"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 transition hover:text-white"
              >
                <MapPin size={16} /> Patel Marg, Mansarovar, Jaipur
              </a>
            </div>
            <a
              href={OPEN_ACCOUNT}
              target="_blank"
              rel="noopener noreferrer"
              className="group mt-5 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-blue-600 to-sky-500 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-blue-600/25 transition hover:shadow-xl"
            >
              Open Free Account
              <ArrowUpRight size={15} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </div>
        </div>

        {/* Developer credit — Pink City Blog */}
        <div className="mt-14 border-t border-white/10 pt-10">
          <motion.a
            href="https://pink-city-blog.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ y: -4 }}
            className="group relative mx-auto block max-w-xl overflow-hidden rounded-2xl border border-pink-400/30 bg-gradient-to-br from-pink-500/15 via-rose-500/10 to-fuchsia-500/15 p-6 text-center shadow-[0_20px_60px_-20px_rgba(244,63,94,0.5)] transition"
          >
            <div className="pointer-events-none absolute -inset-x-10 -top-16 h-32 bg-pink-500/25 blur-3xl transition group-hover:bg-pink-500/40" />
            <p className="relative text-[11px] font-semibold uppercase tracking-[0.28em] text-pink-200/80">
              Designed, developed &amp; maintained by
            </p>
            <p className="relative mt-2 bg-gradient-to-r from-pink-300 via-rose-300 to-fuchsia-300 bg-clip-text font-display text-2xl font-extrabold text-transparent sm:text-3xl">
              Pink City Blog
            </p>
            <span className="relative mt-3 inline-flex items-center gap-1.5 rounded-full bg-gradient-to-r from-pink-500 to-rose-500 px-4 py-1.5 text-xs font-semibold text-white shadow-lg shadow-pink-500/30 transition group-hover:shadow-pink-500/50">
              Visit our work
              <ArrowUpRight size={14} className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </span>
          </motion.a>

          <div className="mt-8 flex flex-col items-center gap-2 pb-7 text-center text-xs text-slate-500">
            <p>
              © {new Date().getFullYear()} Bharat Money Financial Services. All rights reserved.
            </p>
            <p className="text-[11px] text-slate-600">Built with Next.js</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
