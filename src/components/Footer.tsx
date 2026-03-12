import Link from "next/link";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/constants";

const footerLinks = [
  { href: "/services", label: "Services" },
  { href: "/projects", label: "Réalisations" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 mt-16">
      <div className="container-wide py-12 grid gap-10 lg:grid-cols-4">
        <div className="lg:col-span-2 space-y-3">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
            SHIMLA SARL
          </p>
          <p className="text-2xl font-semibold text-white">
            Sécurité, Fiabilité et Performance pour vos projets.
          </p>
          <p className="text-sm text-slate-400">
            Basés en République démocratique du Congo, nous vous accompagnons
            dans vos projets, avec des solutions conformes, durables et
            maîtrisées.
          </p>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white mb-3">Navigation</h3>
          <div className="space-y-2">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block text-sm text-slate-300 hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-semibold text-white mb-3">Contact</h3>
          <div className="space-y-3 text-sm text-slate-300">
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Email
              </p>
              <Link
                href={`mailto:${CONTACT_EMAIL}`}
                className="hover:text-white block"
              >
                {CONTACT_EMAIL}
              </Link>
            </div>
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Téléphone
              </p>
              <Link
                href={`tel:${CONTACT_PHONE}`}
                className="hover:text-white block"
              >
                {CONTACT_PHONE}
              </Link>
            </div>
            <p className="text-slate-400">République démocratique du Congo</p>
          </div>
          <Link
            href="/contact"
            className="mt-4 inline-flex px-4 py-2 rounded-full bg-white text-slate-900 text-sm font-semibold"
          >
            Discutons de votre projet
          </Link>
        </div>
      </div>
      <div className="border-t border-white/10 py-4 text-center text-xs text-slate-500">
        © {new Date().getFullYear()} SHIMLA SARL. Tous droits réservés.
      </div>
    </footer>
  );
}
