import { certifications } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Certifications() {
  return (
    <section id="certifications" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-20 sm:py-24">
      <SectionHeading
        index="05"
        title="Certifications & programs"
        subtitle="Industry simulations and hands-on SOC training."
      />

      <div className="grid gap-4 sm:grid-cols-2">
        {certifications.map((cert, i) => (
          <Reveal key={cert.title} delay={(i % 2) * 90}>
            <div className="card-glow h-full rounded-2xl border border-border bg-surface p-5 transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <h3 className="font-medium tracking-tight">{cert.title}</h3>
                  <p className="mt-1 text-sm text-muted">{cert.issuer}</p>
                </div>
                <span
                  className={`shrink-0 rounded-full px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider ${
                    cert.inProgress
                      ? "bg-amber-500/10 text-amber-600 dark:text-amber-400"
                      : "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400"
                  }`}
                >
                  {cert.date}
                </span>
              </div>
              <p className="mt-4 text-sm leading-relaxed text-muted">{cert.description}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
