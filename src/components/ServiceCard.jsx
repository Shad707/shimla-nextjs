"use client";
import { motion } from "framer-motion";
import { Shield, Zap, CheckCircle } from "lucide-react"; // Example icons

export default function ServiceCard({ title, desc, icon = "shield" }) {
  // Choose an icon dynamically
  const icons = {
    shield: <Shield className="w-8 h-8 text-shimlaBlue" />,
    zap: <Zap className="w-8 h-8 text-shimlaBlue" />,
    check: <CheckCircle className="w-8 h-8 text-shimlaBlue" />,
  };

  return (
    <motion.div
      className="p-6 bg-white rounded-2xl shadow-md hover:shadow-xl border border-gray-100 flex flex-col items-start gap-4 transition-all hover:-translate-y-1"
      whileHover={{ scale: 1.03 }}
    >
      <div className="p-3 bg-shimlaBlue/10 rounded-full">
        {icons[icon] || icons.shield}
      </div>
      <h3 className="font-bold text-xl text-shimlaBlue">{title}</h3>
      <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}
