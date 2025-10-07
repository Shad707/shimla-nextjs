"use client";

export default function About() {
  return (
    <div className="bg-gray-50">
      {/* Intro Section */}
      <section className="container pt-28 pb-20">
        <h1 className="text-4xl font-bold text-shimlaBlue mb-6">
          Qui sommes-nous ?
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl">
          SHIMLA SARL est une entreprise de sous-traitance basée à Lubumbashi,
          République Démocratique du Congo. Nous proposons des services en
          installation et maintenance électrique, construction et fourniture
          d’équipements. Notre engagement est d’offrir des solutions fiables et
          conformes aux standards internationaux.
        </p>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200"></div>

      {/* Mission Section */}
      <section className="bg-white py-20">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div>
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Notre mission
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Fournir des services de qualité, durables et accessibles pour
              accompagner la croissance industrielle et économique de la région.
              Nous plaçons la sécurité, la performance et la satisfaction client
              au cœur de toutes nos activités.
            </p>
          </div>
          {/* Image */}
          <div>
            <img
              src="/images/project1.jpg"
              alt="Mission SHIMLA"
              className="rounded-2xl shadow-lg w-full h-72 object-cover"
            />
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200"></div>

      {/* Vision Section */}
      <section className="py-20">
        <div className="container grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <img
              src="/images/project2.jpg"
              alt="Vision SHIMLA"
              className="rounded-2xl shadow-lg w-full h-72 object-cover"
            />
          </div>
          {/* Text */}
          <div className="order-1 md:order-2">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Notre vision
            </h2>
            <p className="text-gray-600 leading-relaxed">
              Devenir une référence en RDC et en Afrique centrale dans les
              domaines de l’électricité, de la construction et de la fourniture
              d’équipements. Nous aspirons à bâtir des projets modernes et
              durables qui participent au développement de la région.
            </p>
          </div>
        </div>
      </section>

      {/* Divider */}
      <div className="border-t border-gray-200"></div>

      {/* Values Section */}
      <section className="bg-white py-20">
        <div className="container text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Nos valeurs
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-shimlaBlue mb-2">
                Sécurité
              </h3>
              <p className="text-gray-600 text-sm">
                Priorité absolue sur chaque projet pour protéger nos clients,
                nos équipes et nos partenaires.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-shimlaBlue mb-2">
                Fiabilité
              </h3>
              <p className="text-gray-600 text-sm">
                Engagement à livrer des services et équipements qui tiennent
                leurs promesses.
              </p>
            </div>
            <div className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition">
              <h3 className="text-xl font-semibold text-shimlaBlue mb-2">
                Innovation
              </h3>
              <p className="text-gray-600 text-sm">
                Recherche constante de solutions modernes et durables pour un
                meilleur avenir.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
