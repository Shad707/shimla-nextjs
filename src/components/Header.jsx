"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navItems = [
    { href: "/", label: "Accueil" },
    { href: "/about", label: "À propos" },
    { href: "/services", label: "Services" },
    { href: "/projects", label: "Réalisations" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur shadow-sm">
      <div className="container mx-auto px-6 py-3 flex items-center justify-between">
        {/* Logo + Name (NO SLOGAN) */}
        <Link href="/" className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="Logo Shimla SARL"
            className="h-16 w-auto object-contain"
          />
          <h1 className="text-xl font-bold text-shimlaBlue">SHIMLA SARL</h1>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-medium transition ${
                  isActive
                    ? "text-shimlaBlue after:absolute after:-bottom-1 after:left-0 after:w-full after:h-[2px] after:bg-shimlaBlue"
                    : "text-gray-700 hover:text-shimlaBlue"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded text-gray-700 hover:bg-gray-100 transition"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-inner">
          <nav className="flex flex-col p-4 space-y-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className={`py-2 font-medium transition ${
                    isActive
                      ? "text-shimlaBlue font-semibold"
                      : "text-gray-700 hover:text-shimlaBlue"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>
        </div>
      )}
    </header>
  );
}
