"use client";

import { useState } from "react";
import {
  TrendingUp,
  Landmark,
  BadgeDollarSign,
  ShieldCheck,
  PieChart,
  Wallet,
  HandCoins,
  Globe,
  X,
} from "lucide-react";

import { motion, AnimatePresence } from "framer-motion";

type ServiceLink = {
  name: string;
  url: string;
};

type Service = {
  title: string;
  icon: any;
  links: ServiceLink[];
};

const services: Service[] = [
  {
    title: "Equity & Commodity Trading",
    icon: TrendingUp,
    links: [
      {
        name: "Open Demat & Trading Account",
        url: "https://www.motilaloswal.com/open-demat-account/",
      },
      {
        name: "Login to Trading Platform",
        url: "https://invest.motilaloswal.com/",
      },
      {
        name: "Stock Market Research",
        url: "https://www.motilaloswal.com/research",
      },
    ],
  },
  {
    title: "Mutual Funds & SIPs",
    icon: Landmark,
    links: [
      {
        name: "Motilal Oswal Mutual Funds",
        url: "https://www.motilaloswalmf.com/",
      },
      {
        name: "Explore Mutual Funds",
        url: "https://groww.in/mutual-funds/amc/motilal-oswal-mutual-funds",
      },
    ],
  },
  {
    title: "IPO Investments",
    icon: BadgeDollarSign,
    links: [
      {
        name: "Upcoming IPOs",
        url: "https://www.motilaloswal.com/ipos",
      },
      {
        name: "How to Apply for IPO",
        url: "https://www.motilaloswal.com/learning-centre/2023/7/how-to-apply-for-an-ipo",
      },
      {
        name: "IPO Calendar",
        url: "https://www.ipoplatform.com/ipo/",
      },
    ],
  },
  {
    title: "Insurance Solutions",
    icon: ShieldCheck,
    links: [
      {
        name: "Life Insurance Plans",
        url: "https://www.policybazaar.com/life-insurance/",
      },
      {
        name: "Health Insurance Plans",
        url: "https://www.policybazaar.com/health-insurance/",
      },
    ],
  },
  {
    title: "Portfolio Management",
    icon: PieChart,
    links: [
      {
        name: "Motilal Oswal Wealth Management",
        url: "https://www.motilaloswalgroup.com/",
      },
    ],
  },
  {
    title: "Retirement Planning",
    icon: Wallet,
    links: [
      {
        name: "Retirement Planning Guide",
        url: "https://www.motilaloswal.com/personal-finance",
      },
      {
        name: "Investment Learning Centre",
        url: "https://www.motilaloswal.com/learning-centre",
      },
    ],
  },
  {
    title: "Loan Against Securities",
    icon: HandCoins,
    links: [
      {
        name: "Loan Against Securities Guide",
        url: "https://www.motilaloswal.com/learning-centre/2022/7/loan-against-securities",
      },
      {
        name: "Margin Against Shares",
        url: "https://www.motilaloswal.com/learning-centre/2021/3/margin-against-share",
      },
    ],
  },
  {
    title: "NRI Investment Services",
    icon: Globe,
    links: [
      {
        name: "Open NRI Demat Account",
        url: "https://www.motilaloswal.com/nri-demat-account",
      },
      {
        name: "NRI Investment Learning",
        url: "https://www.motilaloswal.com/learning-centre",
      },
    ],
  },
];

export default function Services() {
  const [selected, setSelected] = useState<Service | null>(null);

  return (
    <section
      id="services"
      className="py-16 md:py-24 bg-linear-to-b from-white to-slate-50"
    >
      <div className="max-w-6xl mx-auto px-5">
        <h2 className="text-2xl md:text-4xl font-bold text-center text-blue-950 mb-4">
          Financial Services
        </h2>

        <p className="text-center text-slate-600 text-sm md:text-base mb-12 max-w-2xl mx-auto">
          Comprehensive financial solutions designed to help you grow,
          protect, and manage your wealth with confidence.
        </p>

        {/* SERVICES GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          {services.map((service, i) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={i}
                whileHover={{ y: -6 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => setSelected(service)}
                className="cursor-pointer group bg-white border border-slate-200 p-6 rounded-2xl shadow-sm hover:shadow-xl transition text-center"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-linear-to-tr from-blue-900 to-blue-600 text-white flex items-center justify-center group-hover:scale-110 transition">
                  <Icon size={22} />
                </div>

                <h3 className="font-semibold text-blue-950 text-sm">
                  {service.title}
                </h3>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* POPUP MODAL */}
      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex items-center justify-center z-50 px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.85 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.85 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl p-8 max-w-md w-full relative shadow-xl"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 text-gray-500 hover:text-black"
              >
                <X size={20} />
              </button>

              <h3 className="text-xl font-semibold text-blue-950 mb-6">
                {selected.title}
              </h3>

              <div className="space-y-3">
                {selected.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block bg-slate-100 hover:bg-blue-50 px-4 py-3 rounded-lg text-sm font-medium text-slate-700 hover:text-blue-900 transition"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}