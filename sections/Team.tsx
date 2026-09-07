"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { SectionHeading, Stagger, staggerItem } from "@/components/motion/Reveal";

const team = [
  { name: "Juhi Jainani", role: "Managing Director", image: "/team/juhi.jpeg" },
  { name: "Bhaskar Mamoria", role: "Investor", image: "/team/bhaskar.jpeg" },
  { name: "Naveen Verma", role: "Investment Consultant", image: "/team/naveen.jpeg" },
  { name: "Chirag Sharma", role: "Referral Associate", image: "/team/chirag.jpeg" },
];

export default function Team() {
  return (
    <section id="team" className="relative overflow-hidden bg-slate-50 py-20 md:py-28">
      <div className="absolute inset-0 bg-grid opacity-40 [mask-image:radial-gradient(ellipse_at_center,#000,transparent_80%)]" />

      <div className="relative mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="The people"
          title={
            <>
              A team invested in <span className="text-gradient-blue">your goals</span>
            </>
          }
          subtitle="Experienced advisors and consultants dedicated to guiding your financial journey."
        />

        <Stagger className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member) => (
            <motion.div
              key={member.name}
              variants={staggerItem}
              whileHover={{ y: -8 }}
              className="card-sheen group relative rounded-2xl border border-slate-200 bg-white p-6 text-center shadow-sm transition hover:shadow-[0_28px_60px_-28px_rgba(10,24,54,0.35)]"
            >
              <div className="relative mx-auto mb-5 h-28 w-28">
                <div className="absolute -inset-1.5 rounded-full bg-gradient-to-tr from-blue-600 via-sky-400 to-gold-400 opacity-70 blur-[2px] transition group-hover:opacity-100" />
                <div className="relative h-full w-full overflow-hidden rounded-full border-4 border-white shadow-md">
                  <Image
                    src={member.image}
                    alt={member.name}
                    fill
                    sizes="112px"
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <h3 className="font-display text-base font-semibold text-navy-950">
                {member.name}
              </h3>
              <p className="mt-1 text-sm text-slate-500">{member.role}</p>
              <span className="mx-auto mt-4 block h-0.5 w-8 rounded-full bg-gradient-to-r from-blue-600 to-gold-400 opacity-0 transition group-hover:opacity-100" />
            </motion.div>
          ))}
        </Stagger>
      </div>
    </section>
  );
}
