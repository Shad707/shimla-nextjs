"use client";
import Link from "next/link";
import { Facebook, Instagram, Linkedin, Mail, Phone } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 pt-12 pb-6 mt-12">
      <div className="container mx-auto px-6 grid md:grid-cols-3 gap-10">
        {/* Company Info */}
        <div>
          <h2 className="text-xl font-bold text-white">SHIMLA SARL</h2>
          <p className="mt-3 text-sm text-gray-400 leading-relaxed">
            Lubumbashi — Sécurité • Fiabilité • Performance. Votre partenaire de
            confiance pour des solutions modernes et fiables.
          </p>
          <div className="mt-4 flex items-center gap-4 text-gray-400">
            <a
              href="tel:+243990639382"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <Phone className="w-4 h-4" /> +243 990 639 382
            </a>
          </div>
          <div className="mt-4 flex items-center gap-4 text-gray-400">
            <a
              href="mailto:contact@shimla.com"
              className="flex items-center gap-2 hover:text-white transition"
            >
              <Mail className="w-4 h-4" /> contact@shimla.com
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white">Liens rapides</h3>
          <ul className="mt-4 space-y-2">
            <li>
              <Link href="/" className="hover:text-shimlaBlue transition">
                Accueil
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:text-shimlaBlue transition">
                À propos
              </Link>
            </li>
            <li>
              <Link
                href="/services"
                className="hover:text-shimlaBlue transition"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                href="/projects"
                className="hover:text-shimlaBlue transition"
              >
                Réalisations
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-shimlaBlue transition"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h3 className="text-lg font-semibold text-white">Réseaux sociaux</h3>
          <p className="mt-4 text-sm text-gray-400">
            Suivez-nous pour rester informé de nos activités.
          </p>
          <div className="mt-4 flex gap-4">
            <a href="#" className="hover:text-white transition">
              <Facebook className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition">
              <Instagram className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-white transition">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-700 mt-10 pt-6 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} SHIMLA SARL. Tous droits réservés.
      </div>
    </footer>
  );
}
