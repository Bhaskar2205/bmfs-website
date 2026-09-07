"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, Menu, X } from "lucide-react";

const LINKS = [
  { label: "Founder", href: "#founder" },
  { label: "Services", href: "#services" },
  { label: "Course", href: "#course" },
  { label: "Why Us", href: "#why" },
  { label: "Team", href: "#team" },
  { label: "Contact", href: "#contact" },
];

const OPEN_ACCOUNT =
  "https://ekyc.motilaloswal.com/partner?diyid=dceba2f4-a859-4e68-936c-7038669a7dd0";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState<string>("");

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const ids = LINKS.map((l) => l.href.slice(1));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <>
      <div className="fixed inset-x-0 top-0 z-50 flex justify-center px-3 pt-3">
        <motion.nav
          initial={{ y: -80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className={`flex w-full max-w-5xl items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${
            scrolled
              ? "border border-white/50 bg-white/80 shadow-[0_10px_40px_-12px_rgba(10,24,54,0.25)] backdrop-blur-xl"
              : "border border-transparent bg-white/50 backdrop-blur-md"
          }`}
        >
          <a href="#top" className="flex items-center gap-2.5">
            <span className="relative h-10 w-10 shrink-0 md:h-11 md:w-11">
              <Image
                src="/logo-new.png"
                alt="BharatMoney Financial Services"
                fill
                sizes="44px"
                priority
                className="object-contain"
              />
            </span>
            <span className="flex flex-col leading-tight">
              <span className="font-display text-[13px] font-bold tracking-wide text-navy-950 sm:text-sm">
                BHARATMONEY
              </span>
              <span className="text-[8px] tracking-[0.28em] text-slate-500 sm:text-[9px] sm:tracking-[0.3em]">
                FINANCIAL SERVICES
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {LINKS.map((link) => {
              const isActive = active === link.href.slice(1);
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className={`relative rounded-full px-3.5 py-2 text-[13px] font-medium transition-colors ${
                    isActive
                      ? "text-blue-800"
                      : "text-slate-600 hover:text-navy-950"
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-blue-50"
                      transition={{ type: "spring", stiffness: 380, damping: 30 }}
                    />
                  )}
                  {link.label}
                </a>
              );
            })}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={OPEN_ACCOUNT}
              target="_blank"
              rel="noopener noreferrer"
              className="group hidden items-center gap-1.5 rounded-full bg-gradient-to-r from-navy-900 to-blue-700 px-4 py-2 text-[13px] font-semibold text-white shadow-md transition hover:shadow-lg hover:shadow-blue-700/25 sm:inline-flex"
            >
              Open Account
              <ArrowUpRight
                size={15}
                className="transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>

            <button
              onClick={() => setMenuOpen((v) => !v)}
              aria-label="Toggle menu"
              className="grid h-10 w-10 place-items-center rounded-xl text-navy-950 transition hover:bg-slate-100 md:hidden"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </motion.nav>
      </div>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 md:hidden"
          >
            <div
              className="absolute inset-0 bg-navy-950/40 backdrop-blur-sm"
              onClick={() => setMenuOpen(false)}
            />
            <motion.div
              initial={{ y: -24, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -24, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="absolute inset-x-3 top-20 rounded-3xl border border-white/60 bg-white p-4 shadow-2xl"
            >
              <div className="flex flex-col">
                {LINKS.map((link, i) => (
                  <motion.a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * i }}
                    className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-[15px] font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-800"
                  >
                    {link.label}
                    <ArrowUpRight size={16} className="text-slate-400" />
                  </motion.a>
                ))}
              </div>
              <a
                href={OPEN_ACCOUNT}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMenuOpen(false)}
                className="mt-3 block rounded-2xl bg-gradient-to-r from-navy-900 to-blue-700 py-3.5 text-center text-sm font-semibold text-white"
              >
                Open Free Demat Account
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
