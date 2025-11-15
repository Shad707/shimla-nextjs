// export default function Projects() {
//   const projects = [
//     {
//       title: "Installation électrique industrielle",
//       desc: "Mise en place de systèmes MT/BT avec tableaux de commande et protection.",
//       img: "/images/project1.jpg",
//       client: "Client industriel — Lubumbashi",
//     },
//     {
//       title: "Construction bâtiment administratif",
//       desc: "Conception et exécution d’un immeuble moderne avec normes de sécurité.",
//       img: "/images/project2.jpg",
//       client: "Entreprise privée — Kolwezi",
//     },
//     {
//       title: "Fourniture d’équipements électriques",
//       desc: "Distribution de matériel conforme aux standards internationaux.",
//       img: "/images/project3.jpg",
//       client: "Partenaire minier — Likasi",
//     },
//   ];

//   return (
//     <div className="container py-16">
//       <h1 className="text-4xl font-bold text-shimlaBlue">Nos réalisations</h1>
//       <p className="mt-4 text-lg text-gray-700 leading-relaxed">
//         Découvrez quelques projets menés avec succès par notre équipe, alliant
//         expertise technique, respect des délais et conformité aux normes.
//       </p>

//       <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
//         {projects.map((proj, idx) => (
//           <div
//             key={idx}
//             className="bg-white rounded-xl shadow-lg overflow-hidden"
//           >
//             <img
//               src={proj.img}
//               alt={proj.title}
//               className="w-full h-48 object-cover"
//             />
//             <div className="p-6">
//               <h3 className="text-xl font-semibold text-gray-900">
//                 {proj.title}
//               </h3>
//               <p className="mt-2 text-gray-600">{proj.desc}</p>
//               <p className="mt-3 text-sm text-gray-500 italic">{proj.client}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
import Head from "next/head";
import { motion } from "framer-motion";
import {
  Card,
  CardHeader,
  CardContent,
  CardTitle,
} from "@/components/ui/card.jsx";

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
    <>
      <Head>
        <title>Nos Réalisations | Shimla SARL</title>
        <meta
          name="description"
          content="Explorez les projets réalisés par Shimla SARL dans les domaines de l’électricité, construction et fourniture d’équipements en RDC."
        />
        <meta property="og:title" content="Nos Réalisations | Shimla SARL" />
        <meta property="og:image" content="/images/shimla-logo.png" />
      </Head>

      <section className="min-h-screen bg-gray-50 text-gray-900 py-20 px-6">
        <div className="max-w-6xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-4xl font-bold text-blue-900 mb-4"
          >
            Nos Réalisations
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="text-gray-600 max-w-2xl mx-auto mb-12"
          >
            Découvrez quelques projets menés avec succès par notre équipe,
            alliant expertise technique, respect des délais et conformité aux
            normes.
          </motion.p>

          {/* GRID OF PROJECT CARDS */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((proj, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="rounded-2xl shadow-md hover:shadow-xl transition-all bg-white overflow-hidden border border-gray-100 flex flex-col h-full">
                  {/* Image */}
                  <div className="h-48 w-full overflow-hidden">
                    <img
                      src={proj.img}
                      alt={proj.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>

                  {/* Content */}
                  <CardHeader className="px-6 pt-5 text-left">
                    <CardTitle className="text-xl font-semibold text-blue-900">
                      {proj.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="px-6 pb-6 text-left mt-auto">
                    <p className="text-gray-600">{proj.desc}</p>
                    <p className="mt-3 text-sm text-gray-500 italic">
                      {proj.client}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
