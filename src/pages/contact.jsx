"use client";
import { useState } from "react";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
  const [status, setStatus] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("Envoi en cours...");

    const formData = new FormData(e.target);
    const response = await fetch("YOUR_FORMSPREE_ENDPOINT", {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    });

    if (response.ok) {
      setStatus("✅ Message envoyé avec succès !");
      e.target.reset();
    } else {
      setStatus("❌ Une erreur est survenue. Veuillez réessayer.");
    }
  };

  return (
    <div className="bg-gray-50 py-20">
      <div className="container grid md:grid-cols-2 gap-12 items-start">
        {/* Left Side: Info */}
        <div>
          <h1 className="text-3xl font-bold text-shimlaBlue">Contactez-nous</h1>
          <p className="mt-4 text-gray-600">
            Vous avez un projet en tête ou besoin d’un devis ? Remplissez le
            formulaire ou contactez-nous directement.
          </p>

          <div className="mt-8 space-y-4 text-gray-700">
            <p className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-shimlaBlue" />
              shimlasarl1@gmail.com
            </p>
            <p className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-shimlaBlue" />
              +243 990 639 382
            </p>
            <p className="flex items-center gap-3">
              <MapPin className="w-5 h-5 text-shimlaBlue" />
              Lubumbashi, République Démocratique du Congo
            </p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="bg-white shadow-md rounded-2xl p-8">
          <h2 className="text-xl font-semibold text-gray-900 mb-6">
            Envoyez-nous un message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Votre nom"
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-shimlaBlue outline-none"
              />
              <input
                type="email"
                name="email"
                placeholder="Votre email"
                required
                className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-shimlaBlue outline-none"
              />
            </div>
            <input
              type="text"
              name="subject"
              placeholder="Sujet"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-shimlaBlue outline-none"
            />
            <textarea
              name="message"
              placeholder="Votre message"
              required
              rows="5"
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-shimlaBlue outline-none"
            />
            <button
              type="submit"
              className="w-full bg-shimlaBlue text-white py-3 rounded-lg font-medium hover:bg-blue-700 transition"
            >
              Envoyer
            </button>
          </form>

          {status && (
            <p className="text-center text-sm text-gray-600 mt-4">{status}</p>
          )}
        </div>
      </div>
    </div>
  );
}
