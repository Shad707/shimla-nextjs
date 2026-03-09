"use client";

import Link from "next/link";
import { MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { WHATSAPP_LINK } from "@/lib/constants";

export default function WhatsAppFloat() {
  const [visible, setVisible] = useState(true);
  const hideTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    hideTimeout.current = setTimeout(() => setVisible(false), 4000);
    return () => {
      if (hideTimeout.current) clearTimeout(hideTimeout.current);
    };
  }, []);

  const scheduleHide = () => {
    if (hideTimeout.current) clearTimeout(hideTimeout.current);
    hideTimeout.current = setTimeout(() => setVisible(false), 1500);
  };

  return (
    <div
      className="fixed bottom-4 right-4 z-40 h-16 w-16"
      onMouseEnter={() => {
        if (hideTimeout.current) clearTimeout(hideTimeout.current);
        setVisible(true);
      }}
      onMouseLeave={scheduleHide}
    >
      <Link
        href={WHATSAPP_LINK}
        aria-label="Ouvrir WhatsApp pour demander un devis"
        target="_blank"
        rel="noreferrer"
        className={`flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] shadow-2xl shadow-emerald-500/30 transition duration-300 ${
          visible
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-2 pointer-events-none"
        }`}
      >
        <MessageCircle className="h-6 w-6 text-white" />
      </Link>
    </div>
  );
}
