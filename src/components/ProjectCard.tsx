"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

type ProjectCardProps = {
  title: string;
  location: string;
  category: string;
  image: string;
  href?: string;
};

export default function ProjectCard({
  title,
  location,
  category,
  image,
  href = "/projects",
}: ProjectCardProps) {
  const [loaded, setLoaded] = useState(false);

  return (
    <Link
      href={href}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 shadow-xl shadow-black/30 transition-transform transition-shadow duration-200 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/40"
    >
      <div className="relative h-56 w-full overflow-hidden">
        <div
          className={`absolute inset-0 shimmer ${loaded ? "opacity-0" : "opacity-100"}`}
        />
        <Image
          src={image}
          alt={title}
          fill
          sizes="(min-width: 1024px) 360px, (min-width: 768px) 45vw, 90vw"
          className={`object-cover transition duration-700 ${
            loaded ? "opacity-100 scale-100" : "opacity-0 scale-105"
          } group-hover:scale-105`}
          onLoadingComplete={() => setLoaded(true)}
          priority={false}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
      </div>
      <div className="p-5 flex items-start justify-between gap-3">
        <div>
          <p className="text-xs uppercase tracking-[0.2em] text-shimlaGold">
            {category}
          </p>
          <h3 className="text-lg font-semibold text-white mt-1">{title}</h3>
          <p className="text-sm text-slate-300">{location}</p>
        </div>
        <span className="text-sm text-slate-300 group-hover:text-shimlaGold transition">
          → 
        </span>
      </div>
    </Link>
  );
}
