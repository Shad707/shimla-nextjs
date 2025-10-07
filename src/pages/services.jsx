"use client";
import { Wrench, Building2, Package } from "lucide-react";

export default function Services() {
  return (
    <div className="bg-gray-50">
      <div className="container py-20">
        {/* Page Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-shimlaBlue">Nos services</h1>
          <p className="mt-4 text-gray-600">
            SHIMLA SARL offre des solutions fiables et adaptées pour vos besoins
            en installation électrique, construction et fourniture
            d’équipements. Nous accompagnons nos clients de la conception à la
            réalisation.
          </p>
        </div>

        {/* Services Grid */}
        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {/* Service 1 */}
          <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition">
            <Wrench className="w-12 h-12 text-shimlaBlue mb-4" />
            <h2 className="text-xl font-semibold text-gray-900">
              Installation & maintenance électrique
            </h2>
            <p className="mt-3 text-gray-600">
              Études, conception et installation de systèmes électriques pour
              bâtiments résidentiels, commerciaux et industriels. Nous assurons
              également la maintenance préventive et corrective.
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-600 text-sm space-y-1">
              <li>Câblage et distribution MT/BT</li>
              <li>Tableaux de commande & automatisation</li>
              <li>Éclairage public & industriel</li>
              <li>Maintenance régulière & dépannage</li>
            </ul>
          </div>

          {/* Service 2 */}
          <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition">
            <Building2 className="w-12 h-12 text-shimlaBlue mb-4" />
            <h2 className="text-xl font-semibold text-gray-900">
              Constructions
            </h2>
            <p className="mt-3 text-gray-600">
              Gestion complète de projets de construction, du terrassement aux
              finitions, en respectant les normes et les délais convenus.
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-600 text-sm space-y-1">
              <li>Fondations & structures</li>
              <li>Murs, toitures & finitions</li>
              <li>Infrastructures industrielles</li>
              <li>Projets clés en main</li>
            </ul>
          </div>

          {/* Service 3 */}
          <div className="bg-white shadow-md rounded-2xl p-8 hover:shadow-xl transition">
            <Package className="w-12 h-12 text-shimlaBlue mb-4" />
            <h2 className="text-xl font-semibold text-gray-900">
              Fourniture d’équipements
            </h2>
            <p className="mt-3 text-gray-600">
              Approvisionnement en matériels de qualité pour chantiers et
              installations, avec un réseau de fournisseurs fiables.
            </p>
            <ul className="mt-4 list-disc list-inside text-gray-600 text-sm space-y-1">
              <li>Matériels électriques certifiés</li>
              <li>Équipements de protection (EPI)</li>
              <li>Outils et consommables de chantier</li>
              <li>Pièces de rechange & maintenance</li>
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-20 bg-shimlaBlue text-white rounded-2xl shadow-lg p-10 text-center">
          <h2 className="text-2xl font-bold">Besoin de nos services ?</h2>
          <p className="mt-2 text-white/80">
            Contactez notre équipe dès aujourd’hui et bénéficiez d’un
            accompagnement personnalisé pour vos projets.
          </p>
          <div className="mt-6">
            <a
              href="/contact"
              className="px-6 py-3 bg-white text-shimlaBlue font-semibold rounded-lg shadow hover:bg-gray-100 transition"
            >
              Nous contacter
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
