"use client";

import { Phone, Mail, MapPin, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-slate-950 to-black text-white pt-20 pb-10">

      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-12">

        {/* BRAND */}
        <div>
          <h2 className="text-2xl font-bold text-blue-400 mb-4">
            BharatMoney
          </h2>

          <p className="text-slate-400 leading-relaxed">
            Helping individuals build long-term wealth through smart
            investing, financial planning, and trusted market guidance.
          </p>

          <div className="flex gap-4 mt-6 text-slate-400">
            <Instagram className="hover:text-white cursor-pointer" />
            <Youtube className="hover:text-white cursor-pointer" />
          </div>
        </div>

        {/* CONTACT INFO */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">Contact Us</h3>

          <div className="space-y-4 text-slate-400">

            <p className="flex items-center gap-3">
              <Phone size={18} /> +91 8875729292
            </p>

            <p className="flex items-center gap-3">
              <Mail size={18} /> bharatmoneymofsl@gmail.com
            </p>

            <p className="flex items-center gap-3">
              <MapPin size={18} /> Mansarovar, Jaipur
            </p>

          </div>
        </div>

        {/* CTA */}
        <div>
          <h3 className="font-semibold mb-4 text-lg">
            Start Your Investment Journey
          </h3>

          <p className="text-slate-400 mb-6">
            Open your Demat account today and begin building wealth.
          </p>

          <a
            href="https://ekyc.motilaloswal.com/partner?diyid=dceba2f4-a859-4e68-936c-7038669a7dd0"
            target="_blank"
            className="inline-block bg-gradient-to-r from-blue-600 to-blue-500 px-6 py-3 rounded-full font-semibold shadow-lg hover:scale-105 hover:shadow-blue-500/40 transition"
          >
            Open Free Account
          </a>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="border-t border-white/10 mt-16 pt-6 text-center text-slate-500 text-sm">
        © {new Date().getFullYear()} Bharat Money Financial Services. All rights reserved.
      </div>

    </footer>
  );
}