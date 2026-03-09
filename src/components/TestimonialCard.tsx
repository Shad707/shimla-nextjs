type TestimonialCardProps = {
  quote: string;
  name: string;
  role: string;
};

export default function TestimonialCard({
  quote,
  name,
  role,
}: TestimonialCardProps) {
  return (
    <div className="h-full rounded-2xl border border-white/10 bg-white/5 p-6 shadow-lg shadow-black/20 transition duration-200 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-black/30">
      <p className="text-lg text-white leading-relaxed">“{quote}”</p>
      <div className="mt-4 text-sm">
        <p className="font-semibold text-white">{name}</p>
        <p className="text-slate-400">{role}</p>
      </div>
    </div>
  );
}
