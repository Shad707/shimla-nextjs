import CTASection from "@/components/CTASection";
import HeroImage from "@/components/HeroImage";
import { LucideIcon } from "lucide-react";
import { CONTACT_EMAIL, CONTACT_PHONE } from "@/lib/constants";
import { Shield, CheckCircle, Sparkles } from "lucide-react";

const values = [
  {
    title: "Sécurité",
    //text: "Procédures HSE strictes, consignations et formations terrain continues.",
    icon: Shield,
  },
  {
    title: "Fiabilité",
    //text: "Livrables conformes, contrôle qualité et maintenance planifiée.",
    icon: CheckCircle,
  },
  {
    title: "Innovation",
    //text: "Solutions modernes, digitalisation des suivis et optimisations énergétiques.",
    icon: Sparkles,
  },
];

export default function AboutPage() {
  return (
    <div className="space-y-24">
      <section className="container-wide grid lg:grid-cols-[1.15fr_1fr] gap-12 items-center pt-8">
        <div className="space-y-5">
          <p className="text-sm uppercase tracking-[0.35em] text-shimlaGold">
            À propos
          </p>
          <h1 className="text-4xl font-semibold text-white">
            Shimla SARL – votre partenaire de confiance pour des projets solides
            et sécurisés.
          </h1>
          <p className="text-lg text-slate-300">
            Shimla SARL est une entreprise basée en République démocratique du
            Congo, spécialisée dans l’installation et la maintenance électrique,
            la construction et la fourniture d’équipements. Nous nous engageons
            à offrir des solutions fiables, durables et adaptées aux besoins de
            nos clients, qu’il s’agisse de projets résidentiels, commerciaux ou
            industriels.
          </p>

          <p className="text-lg text-slate-300">
            Grâce à une équipe qualifiée et expérimentée, Shimla SARL allie
            professionnalisme, sécurité et innovation pour garantir la réussite
            de chaque projet. Notre priorité est de transformer vos idées en
            réalisations concrètes, tout en assurant une satisfaction totale
          </p>
          <div className="text-sm text-slate-300 space-y-1">
            <p>Email : {CONTACT_EMAIL}</p>
            <p>Téléphone : {CONTACT_PHONE}</p>
            <p>Implantation : République Démocratique du Congo.</p>
          </div>
        </div>
        <div className="h-[500px]">
          <HeroImage
            src="/images/project06.jpg"
            alt="Équipe SHIMLA sur site"
            sizes="(min-width: 1024px) 560px, 90vw"
            priority={false}
            quality={80}
            darkOverlay
          />
        </div>
      </section>

      <section className="container-wide grid lg:grid-cols-2 gap-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-shimlaGold">
            Mission
          </p>
          {/* <h2 className="text-2xl font-semibold text-white mt-2">
            Livrer des infrastructures fiables
          </h2> */}
          <p className="text-slate-300 mt-3">
            Offrir des solutions complètes et fiables dans l’installation et
            maintenance électrique, la construction et la fourniture
            d’équipements, en mettant l’accent sur la qualité, la sécurité et la
            satisfaction client.
          </p>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-shimlaGold">
            Vision
          </p>
          {/* <h2 className="text-2xl font-semibold text-white mt-2">
            Référence industrielle en Afrique centrale
          </h2> */}
          <p className="text-slate-300 mt-3">
            Devenir une référence en République démocratique du Congo pour les
            projets électriques et de construction, en innovant constamment et
            en contribuant au développement durable et à la modernisation des
            infrastructures.
          </p>
        </div>
      </section>

      {/* <section className="container-wide space-y-10">
        <div>
          <p className="text-sm uppercase tracking-[0.3em] text-shimlaGold">
            Valeurs
          </p>
          <h2 className="text-3xl font-semibold text-white">
            Notre ADN opérationnel
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value) => {
            const Icon = value.icon;
            return (
              <div
                key={value.title}
                className="rounded-2xl border border-white/10 bg-white/5 p-5 shadow-lg shadow-black/20 flex flex-col gap-3 text-center hover:-translate-y-1 hover:shadow-2xl transition duration-200"
              >
                <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-shimlaGold">
                  <Icon className="h-6 w-6" />
                </div>
                <p className="text-lg font-semibold text-white">
                  {value.title}
                </p>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {value.text}
                </p>
              </div>
            );
          })}
        </div>
      </section> */}

      {/* <section className="container-wide grid lg:grid-cols-2 gap-8">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-shimlaGold">
            Engagement sécurité & conformité
          </p>
          <ul className="mt-4 space-y-3 text-slate-300">
            <li>
              • Procédures HSE intégrées, EPI obligatoires et consignations.
            </li>
            <li>• Contrôles QA/QC systématiques et rapports documentés.</li>
            <li>
              • Traçabilité des équipements et conformité aux normes locales.
            </li>
          </ul>
        </div>
        <div className="rounded-3xl border border-white/10 bg-white/5 p-6">
          <p className="text-sm uppercase tracking-[0.3em] text-shimlaGold">
            Capacités terrain
          </p>
          <ul className="mt-4 space-y-3 text-slate-300">
            <li>• Équipes certifiées pour sites miniers et industriels.</li>
            <li>• Stocks critiques pour interventions rapides.</li>
            <li>• Planification rigoureuse et reporting client régulier.</li>
          </ul>
        </div>
      </section> */}

      <CTASection
        title="Besoin d’un partenaire fiable en électricité et construction ?"
        subtitle="Planifiez un échange avec notre équipe pour cadrer votre projet et vos contraintes sécurité."
      />
    </div>
  );
}
