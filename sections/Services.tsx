"use client";

import { useState } from "react";
import {
  ArrowUpRight,
  Building2,
  CandlestickChart,
  Coins,
  Globe2,
  HandCoins,
  PiggyBank,
  Rocket,
  ShieldPlus,
  Wallet,
  X,
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { EASE, SectionHeading, Stagger, staggerItem } from "@/components/motion/Reveal";

type ServiceLink = { name: string; url: string };
type Service = {
  title: string;
  blurb: string;
  icon: typeof Coins;
  links: ServiceLink[];
};

const services: Service[] = [
  {
    title: "Equity & Commodity Trading",
    blurb: "Demat, live platforms & research desk access.",
    icon: CandlestickChart,
    links: [
      { name: "Open Demat & Trading Account", url: "https://www.motilaloswal.com/open-demat-account/" },
      { name: "Login to Trading Platform", url: "https://invest.motilaloswal.com/" },
      { name: "Stock Market Research", url: "https://www.motilaloswal.com/research" },
    ],
  },
  {
    title: "Mutual Funds & SIPs",
    blurb: "Goal-based portfolios with rupee-cost averaging.",
    icon: Building2,
    links: [
      { name: "Motilal Oswal Mutual Funds", url: "https://www.motilaloswalmf.com/" },
      { name: "Explore Mutual Funds", url: "https://groww.in/mutual-funds/amc/motilal-oswal-mutual-funds" },
    ],
  },
  {
    title: "IPO Investments",
    blurb: "Apply to new listings with guided research.",
    icon: Rocket,
    links: [
      { name: "Upcoming IPOs", url: "https://www.motilaloswal.com/ipos" },
      { name: "How to Apply for an IPO", url: "https://www.motilaloswal.com/learning-centre/2023/7/how-to-apply-for-an-ipo" },
      { name: "IPO Calendar", url: "https://www.ipoplatform.com/ipo/" },
    ],
  },
  {
    title: "Insurance Solutions",
    blurb: "Protect your family and your wealth plan.",
    icon: ShieldPlus,
    links: [
      { name: "Life Insurance Plans", url: "https://www.policybazaar.com/life-insurance/" },
      { name: "Health Insurance Plans", url: "https://www.policybazaar.com/health-insurance/" },
    ],
  },
  {
    title: "Portfolio Management",
    blurb: "Professionally managed wealth strategies.",
    icon: Wallet,
    links: [
      { name: "Motilal Oswal Wealth Management", url: "https://www.motilaloswalgroup.com/" },
    ],
  },
  {
    title: "Retirement Planning",
    blurb: "Build a corpus that outlasts your career.",
    icon: PiggyBank,
    links: [
      { name: "Retirement Planning Guide", url: "https://www.motilaloswal.com/personal-finance" },
      { name: "Investment Learning Centre", url: "https://www.motilaloswal.com/learning-centre" },
    ],
  },
  {
    title: "Loan Against Securities",
    blurb: "Unlock liquidity without selling holdings.",
    icon: HandCoins,
    links: [
      { name: "Loan Against Securities Guide", url: "https://www.motilaloswal.com/learning-centre/2022/7/loan-against-securities" },
      { name: "Margin Against Shares", url: "https://www.motilaloswal.com/learning-centre/2021/3/margin-against-share" },
    ],
  },
  {
    title: "NRI Investment Services",
    blurb: "Invest in India from anywhere in the world.",
    icon: Globe2,
    links: [
      { name: "Open NRI Demat Account", url: "https://www.motilaloswal.com/nri-demat-account" },
      { name: "NRI Investment Learning", url: "https://www.motilaloswal.com/learning-centre" },
    ],
  },
];

export default function Services() {
  const [selected, setSelected] = useState<Service | null>(null);

  return (
    <section
      id="services"
      className="relative overflow-hidden bg-gradient-to-b from-white to-slate-50 py-20 md:py-28"
    >
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,#000,transparent_80%)]" />

      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="What we do"
          title={
            <>
              Financial services, <span className="text-gradient-blue">end to end</span>
            </>
          }
          subtitle="Comprehensive solutions to help you grow, protect and manage your wealth with confidence — tap any card to explore."
        />

        <Stagger className="mt-14 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-5">
          {services.map((service) => (
            <motion.button
              key={service.title}
              variants={staggerItem}
              whileHover={{ y: -6 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSelected(service)}
              className="card-sheen group relative flex flex-col rounded-2xl border border-slate-200 bg-white p-5 text-left shadow-sm transition hover:border-blue-200 hover:shadow-[0_24px_50px_-24px_rgba(29,78,216,0.4)]"
            >
              <div className="mb-4 grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-tr from-navy-900 to-blue-600 text-white transition duration-300 group-hover:scale-110 group-hover:rotate-3">
                <service.icon size={22} />
              </div>
              <h3 className="font-display text-[15px] font-semibold leading-snug text-navy-950">
                {service.title}
              </h3>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-500">
                {service.blurb}
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-blue-700 opacity-0 transition group-hover:opacity-100">
                Explore <ArrowUpRight size={13} />
              </span>
            </motion.button>
          ))}
        </Stagger>
      </div>

      <AnimatePresence>
        {selected && (
          <motion.div
            className="fixed inset-0 z-[70] flex items-center justify-center bg-navy-950/50 px-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelected(null)}
          >
            <motion.div
              initial={{ scale: 0.9, y: 24, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.9, y: 24, opacity: 0 }}
              transition={{ duration: 0.25, ease: EASE }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-md rounded-3xl bg-white p-7 shadow-2xl"
            >
              <button
                onClick={() => setSelected(null)}
                className="absolute right-4 top-4 grid h-8 w-8 place-items-center rounded-full text-slate-400 transition hover:bg-slate-100 hover:text-navy-950"
              >
                <X size={18} />
              </button>

              <div className="mb-5 flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-xl bg-gradient-to-tr from-navy-900 to-blue-600 text-white">
                  <selected.icon size={22} />
                </div>
                <h3 className="font-display text-lg font-bold text-navy-950">
                  {selected.title}
                </h3>
              </div>

              <div className="space-y-2.5">
                {selected.links.map((link, index) => (
                  <motion.a
                    key={link.url}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 * index }}
                    className="group flex items-center justify-between rounded-xl bg-slate-100 px-4 py-3 text-sm font-medium text-slate-700 transition hover:bg-blue-50 hover:text-blue-800"
                  >
                    {link.name}
                    <ArrowUpRight
                      size={15}
                      className="text-slate-400 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-blue-700"
                    />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
