"use client";

import { useState, useEffect } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed w-full z-50 flex justify-center px-4 pt-4">
      <div
        className={`w-full max-w-5xl transition-all duration-300 rounded-2xl px-5 py-2.5 flex items-center justify-between
        ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg border border-white/40"
            : "bg-white/60 backdrop-blur-md"
        }`}
      >
       {/* LOGO + BRAND NAME */}
<a href="#" className="flex items-center gap-3">
  <img
    src="/logo.png"
    alt="BharatMoney Logo"
    className="h-12 w-auto object-contain"
  />

  <span className="hidden sm:block text-blue-950 font-semibold tracking-wide text-sm leading-tight">
    BHARATMONEY
    <br />
    <span className="text-[10px] tracking-widest text-slate-500">
      FINANCIAL SERVICES
    </span>
  </span>
</a>

        {/* MENU */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-700">

          <a className="relative group" href="#services">
            Services
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-900 transition-all group-hover:w-full"></span>
          </a>

          <a className="relative group" href="#course">
            Course
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-blue-900 transition-all group-hover:w-full"></span>
          </a>

        </div>

        {/* CTA BUTTON */}
        <button
          onClick={() =>
            document.getElementById("contact")?.scrollIntoView({
              behavior: "smooth",
            })
          }
          className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:scale-105 hover:shadow-lg transition"
        >
          Open Account
        </button>
      </div>
    </div>
  );
}