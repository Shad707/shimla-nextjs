import Link from "next/link";

type CTASectionProps = {
  title: string;
  subtitle: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  id?: string;
};

export default function CTASection({
  title,
  subtitle,
  primaryLabel = "Demander un devis",
  primaryHref = "/contact",
  secondaryLabel = "Voir nos réalisations",
  secondaryHref = "/projects",
  id,
}: CTASectionProps) {
  return (
    <section className="py-16" id={id}>
      <div className="container-wide overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-r from-slate-900 via-slate-900 to-slate-800">
        <div className="p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="space-y-3 max-w-2xl">
            <p className="text-sm uppercase tracking-[0.25em] text-slate-400">
              Accélérons votre projet
            </p>
            <h3 className="text-3xl md:text-4xl font-semibold text-white">
              {title}
            </h3>
            <p className="text-slate-300 text-lg">{subtitle}</p>
          </div>
          <div className="flex gap-3 flex-wrap">
            <Link
              href={primaryHref}
            className="px-5 py-3 rounded-full bg-shimlaGold text-slate-900 font-semibold shadow-lg shadow-yellow-300/30 hover:-translate-y-0.5 transition-transform"
          >
            {primaryLabel}
          </Link>
          <Link
            href={secondaryHref}
            className="px-5 py-3 rounded-full border border-white/20 text-white font-semibold hover:-translate-y-0.5 hover:shadow-lg transition-transform"
          >
            {secondaryLabel}
          </Link>
        </div>
      </div>
      </div>
    </section>
  );
}
