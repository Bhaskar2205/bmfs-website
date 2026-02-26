"use client";

import { Phone, Mail, MapPin, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-950 to-black text-white pt-16 md:pt-20 pb-10">

      <div className="max-w-6xl mx-auto px-5 grid gap-10 md:grid-cols-3">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            BharatMoney
          </h2>

          <p className="text-slate-400 leading-relaxed text-sm md:text-base">
            Helping individuals build long-term wealth through smart
            investing, financial planning, and trusted market guidance.
          </p>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-6 text-slate-400">
            <a href="https://www.instagram.com/bharatmoneyfinancialservices/?hl=en" className="hover:text-white transition">
              <Instagram size={20} />
            </a>
            <a href="https://www.youtube.com/@bharatmoney-x8x" className="hover:text-white transition">
              <Youtube size={20} />
            </a>
          </div>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Contact Us</h3>

          <div className="space-y-3 text-slate-400 text-sm md:text-base">

            <a
              href="tel:+918875729292"
              className="flex items-center gap-3 hover:text-white transition"
            >
              <Phone size={18} /> +91 88757 29292
            </a>

            <a
              href="mailto:bharatmoneymofsl@gmail.com"
              className="flex items-center gap-3 hover:text-white transition break-all"
            >
              <Mail size={18} /> bharatmoneymofsl@gmail.com
            </a>

            <a
              href="https://maps.google.com/?q=Mansarovar+Jaipur"
              target="_blank"
              className="flex items-center gap-3 hover:text-white transition"
            >
              <MapPin size={18} />Patel Marg, Mansarovar, Jaipur
            </a>

          </div>
        </div>

        {/* CTA */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">
            Start Your Investment Journey
          </h3>

          <p className="text-slate-400 mb-6 text-sm md:text-base">
            Open your Demat account today and begin building wealth.
          </p>

          <a
            href="https://ekyc.motilaloswal.com/partner?diyid=dceba2f4-a859-4e68-936c-7038669a7dd0"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 active:scale-95 hover:shadow-blue-500/40 transition"
          >
            Open Free Account
          </a>
        </div>
      </div>

     {/* DIVIDER + COPYRIGHT */}
<div className="border-t border-white/10 mt-12 md:mt-16 pt-6 text-center text-slate-500 text-xs md:text-sm space-y-3">

<p>
  © {new Date().getFullYear()} Bharat Money Financial Services. All rights reserved.
</p>

{/* CREDIT LINE */}
<p className="text-slate-400">
  Website crafted & maintained by
</p>

<a
  href="https://pink-city-blog.vercel.app/"
  target="_blank"
  rel="noopener noreferrer"
  className="inline-block px-4 py-1.5 rounded-full
             bg-gradient-to-r from-pink-500 to-rose-500
             text-white text-sm font-semibold
             shadow-lg shadow-pink-500/30
             hover:scale-105 hover:shadow-pink-500/50
             transition"
>
  Pink City Blog
</a>

<p className="text-slate-500 text-[11px]">
  Built with Next.js
</p>

</div>

    </footer>
  );
}