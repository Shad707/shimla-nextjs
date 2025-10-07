"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Hero({
  title,
  subtitle,
  cta1 = "Découvrir nos services",
  cta2 = "Nous contacter",
}) {
  return (
    <section className="relative bg-[url('/images/hero.jpg')] bg-cover bg-center text-white">
      <div className="bg-black/50">
        <div className="container py-28 relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="mt-4 max-w-2xl"
          >
            {subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="mt-6 flex gap-4"
          >
            <Link
              href="/services"
              className="px-6 py-3 bg-shimlaGold text-black rounded font-semibold shadow hover:bg-yellow-400 transition"
            >
              {cta1}
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 border border-white rounded hover:bg-white/10 transition"
            >
              {cta2}
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Angled Divider
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg
          className="relative block w-full h-[80px] text-white"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          viewBox="0 0 1200 120"
        >
          <path d="M1200 0L0 120L0 0H1200Z" fill="currentColor"></path>
        </svg>
      </div> */}
    </section>
  );
}
