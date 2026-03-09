"use client";

import { motion } from "framer-motion";

export type Stat = {
  title: string;
  text: string;
};

export default function Stats({ stats }: { stats: Stat[] }) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat, index) => (
        <motion.div
          key={stat.title}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: index * 0.05 }}
          viewport={{ once: true, margin: "-50px" }}
          className="rounded-2xl border border-white/10 bg-white/5 px-4 py-5 shadow-lg shadow-black/20 transition-transform transition-shadow duration-200 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/30"
        >
          <p className="text-lg font-semibold text-white">{stat.title}</p>
          <p className="text-sm text-slate-300 mt-2 leading-relaxed">
            {stat.text}
          </p>
        </motion.div>
      ))}
    </div>
  );
}
