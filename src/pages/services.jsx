"use client";
import Head from "next/head";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.jsx";
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
            <h2 className="text-4xl md:text-5xl font-extrabold text-shimlaBlue mb-4">
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
