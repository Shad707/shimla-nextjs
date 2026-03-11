import CTASection from "@/components/CTASection";
import {
  Wrench,
  ShieldCheck,
  Box,
  HardHat,
  Sparkle,
  ClipboardCheck,
} from "lucide-react";
import Link from "next/link";

const serviceDetails = [
  {
    title: "Installation & maintenance électrique",
    description:
      "Câblage,Études, maintenance préventive et corrective, mise aux normes et optimisation des installations pour garantir sécurité et fiabilité.",
    icon: Wrench,
  },
  {
    title: "Construction",
    description:
      "Réalisation de projets résidentiels, commerciaux et industriels, rénovation, et suivi complet de chantier pour des ouvrages solides et durables.",
    icon: HardHat,
  },
  {
    title: "Fourniture d’équipements",
    description:
      "Approvisionnement d’équipements électriques, matériels de construction et autres fournitures de qualité, adaptés à tous vos besoins.",
    icon: Box,
  },
  {
    title: "Maintenance industrielle",
    description:
      "Préventif/curatif 24/7, fiabilisation et disponibilité maximale.",
    icon: ClipboardCheck,
  },
  {
    title: "Sécurité & conformité",
    description:
      "Procédures HSE, consignations, audits et documentation de conformité.",
    icon: ShieldCheck,
  },
  {
    title: "Études & ingénierie",
    description:
      "Plans, schémas, notes de calcul et dossiers d’exécution prêts chantier.",
    icon: Sparkle,
  },
];

export default function ServicesPage() {
  return (
    <div className="space-y-24">
      <section className="container-wide space-y-4 pt-8">
        <p className="text-sm uppercase tracking-[0.35em] text-shimlaGold">
          Services
        </p>
        <h1 className="text-4xl font-semibold text-white">
          Des solutions intégrées, de l’ingénierie à la maintenance
        </h1>
        <p className="text-lg text-slate-300 max-w-3xl">
          Equipes spécialisées, procédures de sécurité strictes et engagement de
          performance pour vos infrastructures électriques et bâtiments.
        </p>
      </section>

      <section className="container-wide grid md:grid-cols-2 gap-8 items-stretch">
        {serviceDetails.map((service) => {
          const Icon = service.icon;
          return (
            <div
              key={service.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20 flex flex-col gap-4 transition duration-200 hover:-translate-y-1.5 hover:shadow-2xl"
            >
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-2xl bg-white/10 border border-white/10 flex items-center justify-center text-shimlaGold">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">
                  {service.title}
                </h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed flex-1">
                {service.description}
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm font-semibold text-shimlaGold hover:text-white transition"
              >
                En savoir plus →
              </Link>
            </div>
          );
        })}
      </section>

      <CTASection
        title="Parlons de vos contraintes techniques et sécurité"
        subtitle="Un chef de projet vous répond sous 24h avec les premiers jalons et livrables."
      />
    </div>
  );
}
