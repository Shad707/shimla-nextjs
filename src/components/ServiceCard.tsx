"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

type ServiceCardProps = {
  title: string;
  description: string;
  icon?: ReactNode;
};

export default function ServiceCard({
  title,
  description,
  icon,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -6, scale: 1.02 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.25 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20 flex flex-col h-full"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-shimlaBlue/10 via-transparent to-shimlaGold/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      <div className="relative flex items-start gap-4">
        <div className="h-12 w-12 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-shimlaGold">
          {icon ?? (
            <span className="block h-6 w-6 rounded-full bg-gradient-to-br from-shimlaGold to-orange-400" />
          )}
        </div>
        <div>
          <h3 className="text-lg font-semibold text-white">{title}</h3>
          <p className="mt-2 text-sm text-slate-300 leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </motion.div>
  );
}
