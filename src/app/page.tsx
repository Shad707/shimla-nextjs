"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import CTASection from "@/components/CTASection";
import Stats from "@/components/Stats";
import ServiceCard from "@/components/ServiceCard";
import ProjectCard from "@/components/ProjectCard";
import TestimonialCard from "@/components/TestimonialCard";
import FAQ from "@/components/FAQ";
import HeroImage from "@/components/HeroImage";

const HERO_BLUR =
  "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHJhZGlhbEdyYWRpZW50IGlkPSJnIiBjeD0iMjAiIGN5PSIyMCIgcj0iMjAiIGdyYWRpZW50VW5pdHM9InVzZXJTcGFjZU9uVXNlIiBncmFkaWVudFRyYW5zZm9ybT0icm90YXRlKDU5KSI+PHN0b3Agc3RvcC1jb2xvcj0iIzE3Mjg0NCIgLz48c3RvcCBvZmZzZXQ9IjEiIHN0b3AtY29sb3I9IiMwNjEwMjAiIC8+PC9yYWRpYWxHcmFkaWVudD48cmVjdCB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIGZpbGw9InVybCgjZykiIC8+PC9zdmc+";

const stats = [
  // {
  //   title: "Expertise technique",
  //   text: "Ingénierie, mise en service et maintenance sur sites critiques.",
  // },
  // {
  //   title: "Normes de sécurité strictes",
  //   text: "Procédures HSE, consignations et contrôles QA/QC documentés.",
  // },
  // {
  //   title: "Interventions rapides",
  //   text: "Équipes mobilisables avec stocks critiques pour réduire les arrêts.",
  // },
  // {
  //   title: "Couverture nationale",
  //   text: "Interventions planifiées en République Démocratique du Congo.",
  // },
];

const services = [
  {
    title: "Installation Électrique",
    description:
      "Études, installations et mises en service conformes aux normes.",
  },
  {
    title: "Construction",
    description:
      "Réalisation de projets résidentiels, commerciaux et industriels, rénovation, et suivi complet de chantier pour des ouvrages solides et durables.",
  },
  {
    title: "Fourniture d’Équipements",
    description:
      "Approvisionnement d’équipements électriques, matériels de construction et autres fournitures de qualité, adaptés à tous vos besoins.",
  },
  {
    title: "Maintenance Électrique",
    description:
      "Maintenance électrique préventive et corrective pour assurer sécurité et continuité des installations.",
  },
  // {
  //   title: "Sécurité & Conformité",
  //   description:
  //     "Procédures HSE, consignations, audits de conformité et formations terrain.",
  // },
  // {
  //   title: "Études & Ingénierie",
  //   description:
  //     "Dimensionnements, schémas, modélisations et dossiers techniques prêts pour exécution.",
  // },
];

const sectors = [
  {
    title: "Mines",
    text: "Alimentation, postes, distribution, sécurisation des sites.",
  },
  {
    title: "Industrie",
    text: "Process, automates, continuité énergétique et supervision.",
  },
  {
    title: "Bâtiments",
    text: "Électrification intégrale, sûreté, CVC et réseaux faibles.",
  },
  {
    title: "Institutions",
    text: "Centres hospitaliers, universités, infrastructures publiques.",
  },
];

const process = [
  {
    title: "Analyse",
    text: "Diagnostic terrain et priorisation des risques.",
  },
  {
    title: "Étude",
    text: "Schémas, notes de calcul, méthodes et planning.",
  },
  {
    title: "Exécution",
    text: "Réalisation des solutions avec rigueur pour des installations fiables et sécurisées.",
  },
  // {
  //   title: "Maintenance",
  //   text: "Suivi, astreintes et améliorations continues.",
  // },
];

const projects = [
  {
    title: "Installation électrique d'une résidence privée",
    location: "Lubumbashi",
    category: "Électrique",
    image: "/images/project3.jpg",
  },
  {
    title: "Rénovation d'une résidence privée",
    location: "Lubumbashi",
    category: "Construction",
    image: "/images/project2.jpg",
  },
  {
    title: "Fourniture d’équipements - salle de fête",
    location: "Kipushi",
    category: "Fourniture",
    image: "/images/dubai.jpg",
  },
];

const testimonials = [
  // {
  //   quote:
  //     "Délais tenus et procédure HSE irréprochable. Équipe réactive sur site minier.",
  //   name: "A. Kabila",
  //   role: "Responsable maintenance, site cuivre",
  // },
  // {
  //   quote:
  //     "Pilotage chantier exemplaire, communication claire et livrables conformes.",
  //   name: "J. Mukendi",
  //   role: "Directeur travaux, génie civil",
  // },
  // {
  //   quote:
  //     "Support technique fiable, pièces disponibles et interventions planifiées.",
  //   name: "S. Tshibasu",
  //   role: "Chef d’usine, industrie manufacturière",
  // },
];

const faqs = [
  {
    question: "Quels délais pour un devis ?",
    answer: "Sous 48h pour une demande standard. Audit terrain si nécessaire.",
  },
  {
    question: "Intervenez-vous en République démocratique du Congo ?",
    answer:
      "Oui, avec des interventions planifiées dans toute la République démocratique du Congo.",
  },
  {
    question: "Comment garantissez-vous la conformité ?",
    answer:
      "Procédures HSE, consignations, contrôles QA/QC et documentation complète.",
  },
  {
    question: "Gérez-vous la maintenance préventive ?",
    answer: "Oui, contrats préventifs et astreintes 24/7 sur sites critiques.",
  },
  {
    question: "Pouvez-vous travailler en urgence ?",
    answer:
      "Équipe d’intervention rapide avec stock critique pour rétablir la production.",
  },
  {
    question: "Fournissez-vous les équipements ?",
    answer:
      "Nous sourçons et livrons les matériels certifiés adaptés à votre projet.",
  },
];

export default function Home() {
  return (
    <div className="space-y-24">
      {/* Hero */}
      <section className="relative overflow-hidden pt-14 lg:pt-18">
        <div className="container-wide grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center">
          <div className="space-y-6">
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-sm uppercase tracking-[0.35em] text-shimlaGold"
            >
              Sécurité, Fiabilité et Performance
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white leading-tight"
            >
              Votre partenaire en électricité, construction et équipements
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1, duration: 0.7 }}
              className="text-xl text-slate-200 max-w-2xl text-justify"
            >
              Shimla SARL offre des solutions fiables et innovantes dans
              l’installation électrique, la construction et la fourniture
              d’équipements, avec un engagement total pour la qualité et la
              sécurité.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.15, duration: 0.7 }}
              className="flex flex-wrap gap-3"
            >
              <Link
                href="#contact"
                className="px-6 py-3 rounded-full bg-shimlaGold text-slate-900 font-semibold shadow-lg shadow-yellow-400/30 hover:-translate-y-0.5 transition-transform"
              >
                Demander un devis
              </Link>
              <Link
                href="/projects"
                className="px-6 py-3 rounded-full border border-white/20 text-white font-semibold hover:-translate-y-0.5 transition-transform"
              >
                Voir nos réalisations
              </Link>
            </motion.div>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-slate-400">Signature</p>
                <p className="text-lg text-white">
                  pour tous vos besoins électriques
                </p>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                <p className="text-sm text-slate-400">Implantation</p>
                <p className="text-lg text-white">
                  République démocratique du Congo
                </p>
              </div>
            </div>
          </div>
          <div className="h-[560px] relative">
            <div className="absolute inset-0 rounded-[28px] overflow-hidden">
              <HeroImage
                src="/images/hero.jpg"
                alt="Équipe SHIMLA sur site industriel"
                sizes="(min-width: 1024px) 600px, 90vw"
                priority
                quality={80}
                className="object-cover"
                blurDataURL={HERO_BLUR}
                placeholder="blur"
                darkOverlay
              />
            </div>
            <div className="relative z-10 h-full" />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      {/* <section className="container-wide space-y-6">
        <div className="glass rounded-3xl px-6 py-6 border border-white/10">
          <Stats stats={stats} />
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.25em] text-slate-400">
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
              Mines
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
              Industrie
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
              Bâtiments
            </span>
            <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">
              Institutions
            </span>
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            {["KCC", "Ivanhoe", "Gécamines", "SNEL"].map((logo) => (
              <div
                key={logo}
                className="h-10 w-28 rounded-xl border border-white/10 bg-white/5 flex items-center justify-center text-slate-300 text-xs tracking-[0.2em]"
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Services */}
      <section className="container-wide space-y-6" id="services">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-shimlaGold">
              Services
            </p>
            {/* <h2 className="text-3xl font-semibold text-white">
              6 expertises clés pour vos opérations
            </h2> */}
            {/* <p className="text-slate-300">
              Des équipes terrain, des procédures HSE strictes et des livrables
              précis.
            </p> */}
          </div>
          <Link
            href="/services"
            className="text-sm font-semibold text-white hover:text-shimlaGold"
          >
            Voir tous les services →
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-stretch">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </section>

      {/* Sectors */}
      {/* <section className="container-wide space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-shimlaGold">
              Secteurs
            </p>
            <h2 className="text-3xl font-semibold text-white">
              Interventions multi-secteurs
            </h2>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {sectors.map((sector) => (
            <div
              key={sector.title}
              className="rounded-2xl border border-white/10 bg-white/5 p-4 shadow-lg shadow-black/20"
            >
              <p className="text-sm uppercase tracking-[0.2em] text-shimlaGold">
                {sector.title}
              </p>
              <p className="mt-2 text-sm text-slate-300">{sector.text}</p>
            </div>
          ))}
        </div>
      </section> */}

      {/* Process */}
      <section className="container-wide space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-shimlaGold">
              Process
            </p>
            <h2 className="text-3xl font-semibold text-white">
              Méthodologie maîtrisée
            </h2>
          </div>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/25">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:gap-8">
            {process.map((step, index) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ delay: index * 0.08, duration: 0.45 }}
                className="flex-1"
              >
                <div className="relative flex items-start gap-3">
                  <div className="relative">
                    <div className="h-10 w-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-sm font-semibold text-white">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    {index < process.length - 1 && (
                      <div className="hidden md:block absolute top-5 left-[50%] h-px w-24 bg-white/15 translate-x-1/2" />
                    )}
                  </div>
                  <div className="space-y-1">
                    <p className="text-white font-semibold">{step.title}</p>
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {step.text}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured projects */}
      <section className="container-wide space-y-6" id="projects">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-shimlaGold">
              Réalisations
            </p>
            <h2 className="text-3xl font-semibold text-white">
              Projets récents
            </h2>
          </div>
          <Link
            href="/projects"
            className="text-sm font-semibold text-white hover:text-shimlaGold"
          >
            Voir la galerie →
          </Link>
        </div>
        <div className="grid md:grid-cols-3 gap-5">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </section>

      {/* Testimonials */}
      {/* <section className="container-wide space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-shimlaGold">
              Témoignages
            </p>
            <h2 className="text-3xl font-semibold text-white">
              Ce que disent nos clients
            </h2>
          </div>
        </div>
        <div className="grid md:grid-cols-3 gap-4">
          {testimonials.map((item) => (
            <TestimonialCard key={item.name} {...item} />
          ))}
        </div>
      </section> */}

      {/* FAQ */}
      <section className="container-wide space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-shimlaGold">
              FAQ
            </p>
            <h2 className="text-3xl font-semibold text-white">
              Questions fréquentes
            </h2>
          </div>
        </div>
        <FAQ items={faqs} />
      </section>

      {/* CTA */}
      <CTASection
        title="Prêts pour un site industriel sécurisé et performant ?"
        subtitle="Planifions un diagnostic rapide pour aligner budget, planning et sécurité."
        id="contact"
      />
    </div>
  );
}
