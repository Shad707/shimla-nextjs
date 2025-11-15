// "use client";

// export default function About() {
//   return (
//     <div className="bg-gray-50 text-gray-800">
//       {/* Intro Section */}
//       <section className="container mx-auto px-4 pb-20 pt-28">
//         <h1 className="text-4xl font-bold text-shimlaBlue mb-6">
//           Qui sommes-nous ?
//         </h1>
//         <p className="text-lg text-gray-700 max-w-3xl">
//           SHIMLA SARL est une entreprise de sous-traitance basée en République
//           Démocratique du Congo. Nous proposons des services en installation et
//           maintenance électrique, construction et fourniture d’équipements.
//           Notre engagement est d’offrir des solutions fiables et conformes aux
//           standards internationaux.
//         </p>
//       </section>

//       {/* Mission Section */}
//       <section className="bg-white py-20">
//         <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
//           {/* Text */}
//           <div>
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">
//               Notre mission
//             </h2>
//             <p className="text-gray-600 leading-relaxed">
//               Fournir des services de qualité, durables et accessibles pour
//               accompagner la croissance industrielle et économique de la région.
//               Nous plaçons la sécurité, la performance et la satisfaction client
//               au cœur de toutes nos activités.
//             </p>
//           </div>
//           {/* Image */}
//           <div>
//             <img
//               src="/images/project1.jpg"
//               alt="Mission SHIMLA"
//               className="rounded-2xl shadow-lg w-full h-72 object-cover"
//               loading="lazy"
//               decoding="async"
//             />
//           </div>
//         </div>
//       </section>

//       {/* Vision Section */}
//       <section className="py-20 bg-gray-50">
//         <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
//           {/* Image */}
//           <div className="order-2 md:order-1">
//             <img
//               src="/images/project2.jpg"
//               alt="Vision SHIMLA"
//               className="rounded-2xl shadow-lg w-full h-72 object-cover"
//               loading="lazy"
//               decoding="async"
//             />
//           </div>
//           {/* Text */}
//           <div className="order-1 md:order-2">
//             <h2 className="text-3xl font-bold text-gray-900 mb-4">
//               Notre vision
//             </h2>
//             <p className="text-gray-600 leading-relaxed">
//               Devenir une référence en RDC et en Afrique centrale dans les
//               domaines de l’électricité, de la construction et de la fourniture
//               d’équipements. Nous aspirons à bâtir des projets modernes et
//               durables qui participent au développement de la région.
//             </p>
//           </div>
//         </div>
//       </section>

//       {/* Values Section */}
//       <section className="bg-white py-20">
//         <div className="container mx-auto px-4 text-center">
//           <h2 className="text-3xl font-bold text-gray-900 mb-12">
//             Nos valeurs
//           </h2>
//           <div className="grid md:grid-cols-3 gap-8">
//             {[
//               {
//                 title: "Sécurité",
//                 text: "Priorité absolue sur chaque projet pour protéger nos clients, nos équipes et nos partenaires.",
//               },
//               {
//                 title: "Fiabilité",
//                 text: "Engagement à livrer des services et équipements qui tiennent leurs promesses.",
//               },
//               {
//                 title: "Innovation",
//                 text: "Recherche constante de solutions modernes et durables pour un meilleur avenir.",
//               },
//             ].map((value, i) => (
//               <div
//                 key={i}
//                 className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition"
//               >
//                 <h3 className="text-xl font-semibold text-shimlaBlue mb-2">
//                   {value.title}
//                 </h3>
//                 <p className="text-gray-600 text-sm">{value.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

"use client";

export default function About() {
  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Intro Section */}
      <section className="container mx-auto px-4 pb-20 pt-28">
        <h1 className="text-4xl font-bold text-shimlaBlue mb-6">
          Qui sommes-nous ?
        </h1>
        <p className="text-lg text-gray-700 max-w-3xl">
          Basée en République democratique du Congo , SHIMLA SARL propose des
          solutions techniques intégrées dans l’électricité, la construction et
          la fourniture d’équipements. Nous accompagnons entreprises,
          institutions et particuliers avec un service fiable et professionnel.
        </p>
      </section>

      {/* Mission Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
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
              loading="lazy"
            />
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <img
              src="/images/project2.jpg"
              alt="Vision SHIMLA"
              className="rounded-2xl shadow-lg w-full h-72 object-cover"
              loading="lazy"
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

      {/* Values Section */}
      <section className="bg-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-12">
            Nos valeurs
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Sécurité",
                text: "Priorité absolue, avec des procédures strictes pour protéger personnes, biens et environnement. Formation rigoureuse aux normes en vigueur.",
              },
              {
                title: "Fiabilité",
                text: "Engagement à livrer des services et équipements qui tiennent leurs promesses.",
              },
              {
                title: "Innovation",
                text: "Recherche constante de solutions modernes et durables pour un meilleur avenir.",
              },
            ].map((value, i) => (
              <div
                key={i}
                className="p-6 bg-gray-50 rounded-2xl shadow-sm hover:shadow-md transition"
              >
                <h3 className="text-xl font-semibold text-shimlaBlue mb-2">
                  {value.title}
                </h3>
                <p className="text-gray-600 text-sm">{value.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
