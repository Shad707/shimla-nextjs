// "use client";
// import { Wrench, Building2, Package } from "lucide-react";

// export default function Services() {
//   return (
//     <div className="bg-gray-50">
//       <div className="container py-20">
//         {/* Page Heading */}
//         <div className="text-center max-w-2xl mx-auto">
//           <h1 className="text-4xl font-bold text-shimlaBlue">Nos services</h1>
//           <p className="mt-4 text-gray-600">
//             SHIMLA SARL offre des solutions fiables et adaptées pour vos besoins
//             en installation électrique, construction et fourniture
//             d’équipements. Nous accompagnons nos clients de la conception à la
//             réalisation.
//           </p>
//         </div>

//         {/* Services Grid */}
//         <div className="mt-16 grid gap-12 md:grid-cols-3">
//           {/* Service 1 */}
//           <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition">
//             <Wrench className="w-12 h-12 text-shimlaBlue mb-4" />
//             <h2 className="text-xl font-semibold text-gray-900">
//               Installation & maintenance électrique
//             </h2>
//             <p className="mt-3 text-gray-600">
//               Études, conception et installation de systèmes électriques pour
//               bâtiments résidentiels, commerciaux et industriels. Nous assurons
//               également la maintenance préventive et corrective.
//             </p>
//             <ul className="mt-4 list-disc list-inside text-gray-600 text-sm space-y-1">
//               <li>Câblage et distribution MT/BT</li>
//               <li>Tableaux de commande & automatisation</li>
//               <li>Éclairage public & industriel</li>
//               <li>Maintenance régulière & dépannage</li>
//             </ul>
//           </div>

//           {/* Service 2 */}
//           <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition">
//             <Building2 className="w-12 h-12 text-shimlaBlue mb-4" />
//             <h2 className="text-xl font-semibold text-gray-900">
//               Constructions
//             </h2>
//             <p className="mt-3 text-gray-600">
//               Gestion complète de projets de construction, du terrassement aux
//               finitions, en respectant les normes et les délais convenus.
//             </p>
//             <ul className="mt-4 list-disc list-inside text-gray-600 text-sm space-y-1">
//               <li>Fondations & structures</li>
//               <li>Murs, toitures & finitions</li>
//               <li>Infrastructures industrielles</li>
//               <li>Projets clés en main</li>
//             </ul>
//           </div>

//           {/* Service 3 */}
//           <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition">
//             <Package className="w-12 h-12 text-shimlaBlue mb-4" />
//             <h2 className="text-xl font-semibold text-gray-900">
//               Fourniture d’équipements
//             </h2>
//             <p className="mt-3 text-gray-600">
//               Approvisionnement en matériels de qualité pour chantiers et
//               installations, avec un réseau de fournisseurs fiables.
//             </p>
//             <ul className="mt-4 list-disc list-inside text-gray-600 text-sm space-y-1">
//               <li>Matériels électriques certifiés</li>
//               <li>Équipements de protection (EPI)</li>
//               <li>Outils et consommables de chantier</li>
//               <li>Pièces de rechange & maintenance</li>
//             </ul>
//           </div>
//         </div>

//         {/* CTA Section */}
//         <div className="mt-20 bg-shimlaBlue text-white rounded-2xl shadow-lg p-10 text-center">
//           <h2 className="text-2xl font-bold">Besoin de nos services ?</h2>
//           <p className="mt-2 text-white/80">
//             Contactez notre équipe dès aujourd’hui et bénéficiez d’un
//             accompagnement personnalisé pour vos projets.
//           </p>
//           <div className="mt-6">
//             <a
//               href="/contact"
//               className="px-6 py-3 bg-white text-shimlaBlue font-semibold rounded-lg shadow hover:bg-gray-100 transition"
//             >
//               Nous contacter
//             </a>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
// import { Code, Smartphone, Globe, Server, Wrench, Shield } from "lucide-react";
// import { motion } from "framer-motion";

// export default function Services() {
//   const services = [
//     {
//       title: "Développement Web",
//       description:
//         "Nous concevons des sites modernes, rapides et adaptés à vos besoins, du simple site vitrine aux plateformes complexes.",
//       icon: <Globe className="w-10 h-10 text-primary" />,
//     },
//     {
//       title: "Applications Mobiles",
//       description:
//         "Des applications performantes et intuitives pour Android et iOS, conçues pour offrir une expérience utilisateur fluide.",
//       icon: <Smartphone className="w-10 h-10 text-primary" />,
//     },
//     {
//       title: "Développement d’Applications",
//       description:
//         "Des solutions logicielles personnalisées qui répondent à vos défis spécifiques, du prototype au produit final.",
//       icon: <Code className="w-10 h-10 text-primary" />,
//     },
//     {
//       title: "Backend & API",
//       description:
//         "Des architectures solides, sécurisées et évolutives pour soutenir vos projets web et mobiles.",
//       icon: <Server className="w-10 h-10 text-primary" />,
//     },
//     {
//       title: "Maintenance & Support",
//       description:
//         "Nous assurons la maintenance, la sécurité et les mises à jour de vos projets pour garantir leur performance continue.",
//       icon: <Wrench className="w-10 h-10 text-primary" />,
//     },
//     {
//       title: "Cybersécurité",
//       description:
//         "Protection de vos systèmes et données contre les menaces numériques, avec des audits et solutions sur mesure.",
//       icon: <Shield className="w-10 h-10 text-primary" />,
//     },
//   ];

//   return (
//     <section className="min-h-screen bg-background text-foreground py-20 px-6">
//       <div className="max-w-6xl mx-auto text-center">
//         <motion.h2
//           initial={{ opacity: 0, y: -20 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//           className="text-4xl font-bold mb-4"
//         >
//           Nos Services
//         </motion.h2>
//         <motion.p
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           transition={{ delay: 0.2, duration: 0.5 }}
//           className="text-muted-foreground max-w-2xl mx-auto mb-12"
//         >
//           Chez SmartProjet, nous combinons créativité, technologie et expertise
//           pour transformer vos idées en solutions digitales performantes.
//         </motion.p>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {services.map((service, index) => (
//             <motion.div
//               key={index}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: index * 0.1 }}
//             >
//               <Card className="p-6 shadow-md hover:shadow-lg transition-shadow rounded-2xl">
//                 <CardHeader>
//                   <div className="flex justify-center mb-4">{service.icon}</div>
//                   <CardTitle className="text-xl font-semibold">
//                     {service.title}
//                   </CardTitle>
//                 </CardHeader>
//                 <CardContent>
//                   <p className="text-muted-foreground">{service.description}</p>
//                 </CardContent>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

"use client";
import Head from "next/head";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Wrench,
  Zap,
  Hammer,
  Package,
  ShieldCheck,
  Building2,
} from "lucide-react";
import { motion } from "framer-motion";

export default function Services() {
  const services = [
    {
      title: "Installation & Maintenance Électrique",
      description:
        "Conception, installation et maintenance de systèmes électriques pour les secteurs industriel, commercial et résidentiel.",
      icon: <Zap className="w-12 h-12 text-shimlaBlue" />,
    },
    {
      title: "Construction & Génie Civil",
      description:
        "Réalisation de projets de construction clé en main — fondations, structures, ouvrages métalliques et finitions modernes.",
      icon: <Building2 className="w-12 h-12 text-shimlaBlue" />,
    },
    {
      title: "Fourniture d’Équipements",
      description:
        "Approvisionnement et livraison de matériels électriques, mécaniques et industriels certifiés, répondant aux standards internationaux.",
      icon: <Package className="w-12 h-12 text-shimlaBlue" />,
    },
    {
      title: "Maintenance Industrielle",
      description:
        "Inspection, réparation et entretien préventif d’équipements et d’installations pour garantir fiabilité et performance.",
      icon: <Wrench className="w-12 h-12 text-shimlaBlue" />,
    },
    {
      title: "Sécurité & Conformité",
      description:
        "Mise en œuvre de solutions conformes aux normes de sécurité et aux réglementations en vigueur pour un environnement de travail sûr.",
      icon: <ShieldCheck className="w-12 h-12 text-shimlaBlue" />,
    },
    {
      title: "Études & Ingénierie",
      description:
        "Analyse technique, conception et planification de projets sur mesure pour répondre aux exigences spécifiques de chaque client.",
      icon: <Hammer className="w-12 h-12 text-shimlaBlue" />,
    },
  ];

  return (
    <>
      <Head>
        <title>Nos Services | Shimla SARL</title>
        <meta
          name="description"
          content="Découvrez les services proposés par Shimla SARL : installation électrique, construction, fourniture d’équipements, maintenance et ingénierie technique."
        />
        <link rel="icon" href="/images/shimla-logo-ico.ico" />
      </Head>

      <section className="bg-gray-50 text-gray-900 py-24 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Page Title */}
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
              Nos Services
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Une gamme complète de services techniques, industriels et de
              construction, conçus pour soutenir le développement des
              entreprises et infrastructures en RDC.
            </p>
          </motion.div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.4 }}
              >
                <Card className="group relative h-full p-8 bg-white border border-gray-200 rounded-2xl shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col justify-start">
                  <CardHeader className="text-center">
                    <div className="mb-6 flex justify-center">
                      <div className="p-4 bg-blue-50 rounded-2xl group-hover:bg-blue-100 transition">
                        {service.icon}
                      </div>
                    </div>

                    <CardTitle className="text-xl font-semibold text-gray-900">
                      {service.title}
                    </CardTitle>
                  </CardHeader>

                  <CardContent className="text-center mt-2">
                    <p className="text-gray-600 leading-relaxed text-sm">
                      {service.description}
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
