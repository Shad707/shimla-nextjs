"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { href: "/", label: "Accueil" },
  { href: "/about", label: "À propos" },
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Réalisations" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-[rgba(2,6,23,0.7)] backdrop-blur-lg border-b border-white/5">
      <div className="container-wide flex items-center justify-between py-4">
        <Link href="/" className="flex items-center gap-3">
          <div className="relative h-12 w-12 rounded-xl overflow-hidden bg-slate-800 border border-white/10">
            <Image
              src="/images/logo.png"
              alt="Logo SHIMLA"
              fill
              className="object-contain p-1"
              sizes="44px"
              priority
            />
          </div>
          <p className="text-lg font-semibold text-white tracking-wide">
            SHIMLA
          </p>
        </Link>

        <nav className="hidden lg:flex items-center gap-6">
          {navItems.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(item.href + "/");
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`text-sm font-medium transition-colors ${
                  active
                    ? "text-white"
                    : "text-slate-300 hover:text-white"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="/contact"
            className="px-4 py-2 rounded-full bg-shimlaBlue text-white text-sm font-semibold shadow-lg shadow-blue-500/25 hover:-translate-y-0.5 transition-transform duration-150"
          >
            Demander un devis
          </Link>
        </div>

        <button
          className="lg:hidden p-2 rounded-lg border border-white/10 text-white"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label="Ouvrir le menu"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <div className="lg:hidden border-t border-white/10 bg-slate-950/95 backdrop-blur">
          <nav className="container-wide py-4 flex flex-col gap-3">
            {navItems.map((item) => {
              const active =
                pathname === item.href || pathname.startsWith(item.href + "/");
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={`py-2 text-sm font-medium ${
                    active ? "text-white" : "text-slate-300"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex w-max px-4 py-2 rounded-full bg-shimlaBlue text-white text-sm font-semibold shadow-md"
            >
              Demander un devis
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
