"use client";

import { useMemo, useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import CTASection from "@/components/CTASection";

const projects = [
  {
    title: "Installation électrique d'une résidence privée ",
    location: "Lubumbashi",
    category: "Électrique",
    image: "/images/project3.jpg",
  },
  {
    title: "Rénovation d'une residence privée",
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
  // {
  //   title: "Maintenance poste et distribution",
  //   location: "Kolwezi",
  //   category: "Électrique",
  //   image: "/images/project4.jpg",
  // },
  // {
  //   title: "Sécurisation site industriel",
  //   location: "Likasi",
  //   category: "Sécurité",
  //   image: "/images/project5.jpg",
  // },
];

const categories = [
  "Tous",
  "Électrique",
  "Construction",
  "Fourniture",
  // "Sécurité",
];

export default function ProjectsPage() {
  const [active, setActive] = useState("Tous");

  const filtered = useMemo(() => {
    if (active === "Tous") return projects;
    return projects.filter((p) => p.category === active);
  }, [active]);

  return (
    <div className="space-y-20">
      <section className="container-wide space-y-4 pt-8">
        <p className="text-sm uppercase tracking-[0.35em] text-shimlaGold">
          Réalisations
        </p>
        <h1 className="text-4xl font-semibold text-white">
          Projets livrés et interventions
        </h1>
        <p className="text-lg text-slate-300 max-w-3xl">
          Nos équipes offrent des solutions conformes et sécurisées.
        </p>
      </section>

      <section className="container-wide space-y-6">
        <div className="flex flex-wrap gap-3">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full border px-4 py-2 text-sm transition ${
                active === cat
                  ? "border-shimlaGold bg-shimlaGold text-slate-900"
                  : "border-white/15 bg-white/5 text-white hover:border-white/30"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="grid md:grid-cols-3 gap-5">
          {filtered.map((project) => (
            <ProjectCard key={project.title} {...project} href="#" />
          ))}
        </div>
      </section>

      <CTASection
        title="Un projet à lancer ou à relancer ?"
        subtitle="Planifions une visite de site et un planning d’intervention aligné sur vos contraintes."
      />
    </div>
  );
}
