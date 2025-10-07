export default function Projects() {
  const projects = [
    {
      title: "Installation électrique industrielle",
      desc: "Mise en place de systèmes MT/BT avec tableaux de commande et protection.",
      img: "/images/project1.jpg",
      client: "Client industriel — Lubumbashi",
    },
    {
      title: "Construction bâtiment administratif",
      desc: "Conception et exécution d’un immeuble moderne avec normes de sécurité.",
      img: "/images/project2.jpg",
      client: "Entreprise privée — Kolwezi",
    },
    {
      title: "Fourniture d’équipements électriques",
      desc: "Distribution de matériel conforme aux standards internationaux.",
      img: "/images/project3.jpg",
      client: "Partenaire minier — Likasi",
    },
  ];

  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold text-shimlaBlue">Nos réalisations</h1>
      <p className="mt-4 text-lg text-gray-700 leading-relaxed">
        Découvrez quelques projets menés avec succès par notre équipe, alliant
        expertise technique, respect des délais et conformité aux normes.
      </p>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((proj, idx) => (
          <div
            key={idx}
            className="bg-white rounded-xl shadow-lg overflow-hidden"
          >
            <img
              src={proj.img}
              alt={proj.title}
              className="w-full h-48 object-cover"
            />
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-900">
                {proj.title}
              </h3>
              <p className="mt-2 text-gray-600">{proj.desc}</p>
              <p className="mt-3 text-sm text-gray-500 italic">{proj.client}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
