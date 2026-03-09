"use client";

import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

type HeroImageProps = Omit<ImageProps, "fill"> & {
  alt: string;
  darkOverlay?: boolean;
};

export default function HeroImage(props: HeroImageProps) {
  const [loaded, setLoaded] = useState(false);
  const { darkOverlay = false, className, ...rest } = props;

  return (
    <div className="relative h-full w-full overflow-hidden rounded-[28px] border border-white/10 bg-slate-900">
      <div
        className={`absolute inset-0 shimmer ${loaded ? "opacity-0" : "opacity-100"}`}
      />
      <div className="absolute inset-0 bg-gradient-to-tr from-slate-900 via-transparent to-transparent pointer-events-none" />
      {darkOverlay && (
        <>
          <div className="pointer-events-none absolute inset-0 bg-black/55" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-r from-black/70 via-black/55 to-transparent" />
        </>
      )}

      <motion.div
        initial={{ opacity: 0, scale: 1.02 }}
        animate={loaded ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.02 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="h-full w-full"
      >
        <Image
          {...rest}
          fill
          className={`object-cover ${className ?? ""}`}
          onLoadingComplete={() => setLoaded(true)}
        />
      </motion.div>
    </div>
  );
}
