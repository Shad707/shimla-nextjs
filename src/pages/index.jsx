import Hero from "../components/Hero";
import ServiceCard from "../components/ServiceCard";
import WhyShimla from "../components/WhyShimla";

export default function Home() {
  return (
    <>
      <Hero
        title="SHIMLA SARL – Sécurité, Fiabilité, Performance et Résultats Garantis"
        subtitle="Basée à Lubumbashi, SHIMLA SARL propose des solutions en installation et maintenance électrique, construction et fourniture d’équipements. Nous réalisons des projets durables et conformes aux normes modernes."
        cta1="Découvrir nos services"
        cta2="Nous contacter"
      />

      <section className="container py-12">
        <h2 className="text-2xl font-bold text-shimlaBlue">
          Nos services principaux
        </h2>
        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard
            title="Installation & maintenance électrique"
            desc="Conception, installation et maintenance de systèmes électriques pour industrie et bâtiments."
          />
          <ServiceCard
            title="Constructions"
            desc="Projets clés en main : fondations, structures et finitions conformes aux normes."
          />
          <ServiceCard
            title="Fourniture d’équipements"
            desc="Approvisionnement en matériels de qualité pour chantiers et installations."
          />
        </div>
      </section>
      <WhyShimla />
    </>
  );
}
