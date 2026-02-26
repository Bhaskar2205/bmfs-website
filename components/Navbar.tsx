"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <div className="fixed w-full z-50 flex justify-center px-3 pt-3">
        <div
          className={`w-full max-w-5xl transition-all duration-300 rounded-2xl px-4 py-2 flex items-center justify-between
          ${
            scrolled
              ? "bg-white/80 backdrop-blur-xl shadow-lg border border-white/40"
              : "bg-white/60 backdrop-blur-md"
          }`}
        >
          {/* LOGO */}
          <a href="/" className="flex items-center gap-2">
            <div className="relative w-10 h-10 md:w-12 md:h-12 shrink-0">
              <Image
                src="/logo-new.png"
                alt="BharatMoney"
                fill
                priority
                className="object-contain"
              />
            </div>

            <div className="hidden sm:flex flex-col leading-tight">
              <span className="text-blue-950 font-semibold text-sm tracking-wide">
                BHARATMONEY
              </span>
              <span className="text-[10px] tracking-[0.25em] text-slate-500">
                FINANCIAL SERVICES
              </span>
            </div>
          </a>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-8 text-sm font-medium text-slate-700">
            <a href="#services" className="hover:text-blue-900 transition">
              Services
            </a>
            <a href="#course" className="hover:text-blue-900 transition">
              Course
            </a>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex items-center gap-3">
            {/* MOBILE MENU BUTTON */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden text-2xl text-slate-700"
            >
              ☰
            </button>

            {/* CTA */}
            <a
              href="https://ekyc.motilaloswal.com/partner?diyid=dceba2f4-a859-4e68-936c-7038669a7dd0"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-block bg-gradient-to-r from-blue-900 to-blue-700 text-white px-4 py-2 rounded-full text-sm font-semibold shadow hover:scale-105 transition"
            >
              Open Account
            </a>
          </div>
        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="fixed top-20 left-0 w-full px-4 z-40 md:hidden">
          <div className="bg-white rounded-2xl shadow-xl p-6 space-y-4 text-center">
            <a
              href="#services"
              onClick={() => setMenuOpen(false)}
              className="block text-lg font-medium text-slate-700"
            >
              Services
            </a>

            <a
              href="#course"
              onClick={() => setMenuOpen(false)}
              className="block text-lg font-medium text-slate-700"
            >
              Course
            </a>

            <a
              href="https://ekyc.motilaloswal.com/partner?diyid=dceba2f4-a859-4e68-936c-7038669a7dd0"
              target="_blank"
              className="block bg-blue-900 text-white py-3 rounded-xl font-semibold mt-2"
            >
              Open Demat Account
            </a>
          </div>
        </div>
      )}
    </>
  );
}