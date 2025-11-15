"use client";
import Link from "next/link";
import Head from "next/head";
import { motion } from "framer-motion";
import ServiceCard from "../components/ServiceCard";
import WhyShimla from "../components/WhyShimla";
import Header from "@/components/Header";

export default function Home() {
  return (
    <>
      <Head>
        <title>Shimla SARL | Accueil</title>
        <meta
          name="description"
          content="Shimla SARL - Votre partenaire de confiance pour les installations électriques industrielles et domestiques, la maintenance et les solutions d’énergie."
        />
      </Head>

      {/* Hero Section */}
      <section
        className="relative h-[90vh] flex items-center justify-center text-center mt-20"
        style={{
          backgroundImage: "url('/images/hero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50" />

        <motion.div
          className="relative z-10 max-w-3xl px-6 text-white"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Sécurité, Fiabilité et Performance <br />
            pour tous vos besoins électriques
          </h1>

          <p className="mt-6 text-lg md:text-xl text-gray-200">
            Basée en RDC, SHIMLA SARL propose des solutions en installation et
            maintenance électrique, construction et fourniture d’équipements.
          </p>

          <div className="mt-8 flex justify-center gap-4">
            <Link
              href="/services"
              className="bg-shimlaBlue hover:bg-shimlaBlue/90 text-white font-semibold px-6 py-3 rounded-full transition"
            >
              Nos Services
            </Link>
            <Link
              href="/contact"
              className="bg-white/90 hover:bg-white text-shimlaBlue font-semibold px-6 py-3 rounded-full transition"
            >
              Nous Contacter
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Intro Section */}
      <section className="py-14 bg-gray-50 text-center">
        {/* ↓ Reduced from py-20 → py-14 */}

        <div className="max-w-5xl mx-auto px-6">
          <motion.h2
            className="text-3xl font-bold text-gray-800 mb-4"
            /* ↓ Reduced margin-bottom from mb-6 → mb-4 */
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Bienvenue chez <span className="text-shimlaBlue">Shimla SARL</span>
          </motion.h2>

          <motion.p
            className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto"
            /* Added max-width for tighter, nicer readability */
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Nous offrons des solutions complètes, sécurisées et adaptées à vos
            besoins, avec un engagement fort sur la qualité, la sécurité et le
            respect des délais.
          </motion.p>
        </div>
      </section>

      {/* Services Section */}
      <section className="container py-10">
        {/* ↓ Reduced py-12 → py-10 AND removed artificial paddingTop */}

        <h2 className="text-2xl font-bold text-shimlaBlue">
          Nos services principaux
        </h2>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6">
          <ServiceCard
            title="Installation & maintenance électrique"
            desc="Conception, installation et maintenance de systèmes électriques pour 
            industrie et bâtiments."
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
