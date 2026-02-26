"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

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
<a href="/" className="flex items-center gap-3 group">
  
  {/* Logo */}
  <div className="relative w-12 h-12 shrink-0">
    <Image
      src="/logo.png"
      alt="BharatMoney Financial Services"
      fill
      priority
      className="object-contain"
    />
  </div>

  {/* Brand Text */}
  <div className="hidden sm:flex flex-col leading-tight">
    <span className="text-blue-950 font-semibold tracking-wide text-sm">
      BHARATMONEY
    </span>
    <span className="text-[10px] tracking-[0.25em] text-slate-500">
      FINANCIAL SERVICES
    </span>
  </div>

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
<a
  href="https://ekyc.motilaloswal.com/partner?diyid=dceba2f4-a859-4e68-936c-7038669a7dd0"
  target="_blank"
  rel="noopener noreferrer"
  className="bg-gradient-to-r from-blue-900 to-blue-700 text-white px-5 py-2 rounded-full text-sm font-semibold shadow-md hover:scale-105 hover:shadow-lg transition inline-block"
>
  Open Demat Account
</a>
      </div>
    </div>
  );
}