import ContactForm from "@/components/ContactForm";
import CTASection from "@/components/CTASection";
import { CONTACT_EMAIL, CONTACT_PHONE, WHATSAPP_LINK } from "@/lib/constants";
import Link from "next/link";

export default function ContactPage() {
  return (
    <div className="space-y-20" id="contact">
      <section className="container-wide space-y-4 pt-8">
        <p className="text-sm uppercase tracking-[0.35em] text-shimlaGold">
          Contact
        </p>
        <h1 className="text-4xl font-semibold text-white">
          Discutons de votre chantier ou de votre maintenance
        </h1>
        <p className="text-lg text-slate-300 max-w-3xl text-justify">
          Un chef de projet vous répond sous 24h avec un premier cadrage (scope,
          planning, risques) et une proposition de visite de site.
        </p>
      </section>

      <section className="container-wide grid lg:grid-cols-[0.9fr_1.1fr] gap-10 items-start">
        <div className="space-y-4">
          <p className="text-sm uppercase tracking-[0.3em] text-shimlaGold">
            Coordonnées
          </p>
          <div className="rounded-3xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20 space-y-4">
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Email
              </p>
              <Link href={`mailto:${CONTACT_EMAIL}`} className="text-lg text-white hover:text-shimlaGold">
                {CONTACT_EMAIL}
              </Link>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Téléphone
              </p>
              <Link href={`tel:${CONTACT_PHONE}`} className="text-lg text-white hover:text-shimlaGold">
                {CONTACT_PHONE}
              </Link>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.2em] text-slate-400">
                Adresse
              </p>
              <p className="text-white">République démocratique du Congo</p>
            </div>
            <Link
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noreferrer"
              className="inline-flex w-max items-center gap-2 rounded-xl bg-[#25D366] px-4 py-3 text-white font-semibold shadow-md shadow-emerald-500/30 transition hover:scale-[1.02]"
            >
              WhatsApp direct
            </Link>
          </div>
        </div>
        <div className="flex justify-end">
          <ContactForm />
        </div>
      </section>

      <CTASection
        title="Besoin d’un audit ou d’une remise en service urgente ?"
        subtitle="Appelez-nous ou envoyez un message, nous organisons une intervention prioritaire."
        primaryHref={WHATSAPP_LINK}
        primaryLabel="WhatsApp immédiat"
        secondaryHref="tel:+243990639382"
        secondaryLabel="Appeler maintenant"
      />
    </div>
  );
}
