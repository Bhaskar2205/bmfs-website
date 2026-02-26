"use client";

import {
  TrendingUp,
  Landmark,
  BadgeDollarSign,
  ShieldCheck,
  PieChart,
  Wallet,
  HandCoins,
  Globe,
} from "lucide-react";
import { motion } from "framer-motion";

const services = [
  { title: "Equity & Commodity Trading", icon: TrendingUp },
  { title: "Mutual Funds & SIPs", icon: Landmark },
  { title: "IPO Investments", icon: BadgeDollarSign },
  { title: "Insurance Solutions", icon: ShieldCheck },
  { title: "Portfolio Management", icon: PieChart },
  { title: "Retirement Planning", icon: Wallet },
  { title: "Loan Against Securities", icon: HandCoins },
  { title: "NRI Investment Services", icon: Globe },
];

export default function Services() {
  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-gradient-to-b from-white to-slate-50"
    >
      <div className="max-w-6xl mx-auto px-5">

        {/* TITLE */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-2xl md:text-4xl font-bold text-center text-blue-950 mb-4"
        >
          Financial Services
        </motion.h2>

        <p className="text-center text-slate-600 text-sm md:text-base mb-10 md:mb-14 max-w-2xl mx-auto leading-relaxed">
          Comprehensive financial solutions designed to help you grow,
          protect, and manage your wealth with confidence.
        </p>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8">
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
                className="group bg-white/80 backdrop-blur-lg border border-slate-200 p-5 md:p-8 rounded-2xl shadow-sm hover:shadow-2xl hover:-translate-y-2 active:scale-[0.98] transition duration-300 text-center"
              >
                {/* ICON */}
                <div className="w-12 h-12 md:w-14 md:h-14 mx-auto mb-4 md:mb-5 rounded-xl bg-gradient-to-tr from-blue-900 to-blue-600 text-white flex items-center justify-center group-hover:scale-110 transition">
                  <Icon size={22} />
                </div>

                <h3 className="font-semibold text-blue-950 text-sm md:text-base leading-snug">
                  {service.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}