"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp, MessageCircle } from "lucide-react";

const WHATSAPP = "https://wa.link/fcw2ig";

export default function FloatingActions() {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-5 right-4 z-50 flex flex-col items-end gap-3 sm:bottom-7 sm:right-6">
      <AnimatePresence>
        {showTop && (
          <motion.button
            key="top"
            initial={{ opacity: 0, scale: 0.6, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.6, y: 10 }}
            transition={{ duration: 0.25 }}
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            aria-label="Back to top"
            className="grid h-11 w-11 place-items-center rounded-full border border-slate-200 bg-white/90 text-navy-900 shadow-lg backdrop-blur transition hover:-translate-y-0.5 hover:shadow-xl"
          >
            <ArrowUp size={18} />
          </motion.button>
        )}
      </AnimatePresence>

      <motion.a
        href={WHATSAPP}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4, type: "spring", stiffness: 200, damping: 15 }}
        className="group relative grid h-14 w-14 place-items-center rounded-full bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-[0_12px_40px_-8px_rgba(16,185,129,0.6)]"
      >
        <span className="absolute inset-0 animate-ping rounded-full bg-emerald-500/40 [animation-duration:2.5s]" />
        <MessageCircle size={24} className="relative transition group-hover:scale-110" />
      </motion.a>
    </div>
  );
}
