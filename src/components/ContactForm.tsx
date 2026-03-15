"use client";

import { useState } from "react";

type FormState = "idle" | "loading" | "success";

const services = [
  "Installation Électrique",
  "Construction",
  "Fourniture d’Équipements",
  "Maintenance Électrique",
];

export default function ContactForm() {
  const [state, setState] = useState<FormState>("idle");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);
    const required = ["nom", "entreprise", "telephone", "email", "service", "message"];

    for (const field of required) {
      if (!formData.get(field)) {
        setError("Merci de renseigner tous les champs obligatoires.");
        return;
      }
    }

    setError(null);
    setState("loading");
    setTimeout(() => {
      setState("success");
      form.reset();
    }, 800);
  };

  return (
    <div className="max-w-md rounded-3xl border border-slate-200 bg-neutral-50 p-6 md:p-8 shadow-xl">
      <div className="mb-6 space-y-1">
        <p className="text-sm uppercase tracking-[0.2em] text-slate-400">
          Contact
        </p>
        <h3 className="text-2xl font-semibold text-slate-900">
          Discutons de votre projet
        </h3>
      </div>

      <form onSubmit={handleSubmit} className="grid gap-4 md:grid-cols-2">
        <div className="space-y-2 md:col-span-1">
          <label htmlFor="nom" className="text-sm text-slate-700">
            Nom et prénom *
          </label>
          <input
            id="nom"
            name="nom"
            type="text"
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-shimlaGold/80"
            required
          />
        </div>
        <div className="space-y-2 md:col-span-1">
          <label htmlFor="entreprise" className="text-sm text-slate-700">
            Entreprise *
          </label>
          <input
            id="entreprise"
            name="entreprise"
            type="text"
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-shimlaGold/80"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="telephone" className="text-sm text-slate-700">
            Téléphone *
          </label>
          <input
            id="telephone"
            name="telephone"
            type="tel"
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-shimlaGold/80"
            required
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="email" className="text-sm text-slate-700">
            Email *
          </label>
          <input
            id="email"
            name="email"
            type="email"
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-shimlaGold/80"
            required
          />
        </div>
        <div className="space-y-2 md:col-span-2">
          <label htmlFor="service" className="text-sm text-slate-700">
            Service recherché *
          </label>
          <select
            id="service"
            name="service"
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-shimlaGold/80"
            required
            defaultValue=""
          >
            <option value="" disabled>
              Sélectionnez un service
            </option>
            {services.map((svc) => (
              <option key={svc} value={svc} className="text-slate-900">
                {svc}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2 md:col-span-2">
          <label htmlFor="message" className="text-sm text-slate-700">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            className="w-full rounded-xl border border-slate-200 bg-white px-4 py-3 text-slate-900 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-shimlaGold/80"
            required
          />
        </div>

        {error && (
          <div className="md:col-span-2 text-sm text-red-500">{error}</div>
        )}
        {state === "success" && (
          <div className="md:col-span-2 text-sm text-emerald-600">
            Merci ! Nous revenons vers vous rapidement.
          </div>
        )}

        <button
          type="submit"
          disabled={state === "loading"}
          className="md:col-span-2 inline-flex justify-center items-center gap-2 rounded-xl bg-shimlaBlue px-6 py-3 font-semibold text-white shadow-lg shadow-blue-500/25 transition transform hover:-translate-y-0.5 hover:shadow-xl disabled:opacity-60"
        >
          {state === "loading" ? "Envoi..." : "Envoyer la demande"}
        </button>
      </form>
    </div>
  );
}
