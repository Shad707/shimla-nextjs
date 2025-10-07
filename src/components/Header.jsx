"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation"; // to detect current page
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
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-shimlaBlue rounded flex items-center justify-center text-white font-bold">
            S
          </div>
          <div>
            <h1 className="text-lg font-semibold">SHIMLA SARL</h1>
            <p className="text-sm text-gray-500">
              Lubumbashi — Sécurité • Fiabilité • Performance
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {navItems.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`relative font-medium transition 
                  ${
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

      {/* Mobile Menu Drawer */}
      {isOpen && (
        <div className="md:hidden bg-white border-t shadow-inner">
          <nav className="flex flex-col p-4 space-y-3">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={`py-2 font-medium transition ${
                    isActive
                      ? "text-shimlaBlue font-semibold"
                      : "text-gray-700 hover:text-shimlaBlue"
                  }`}
                  onClick={() => setIsOpen(false)}
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
