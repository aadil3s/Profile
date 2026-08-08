import { education, leadership } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-20 sm:py-24">
      <SectionHeading index="06" title="Education & leadership" />

      <div className="grid gap-10 md:grid-cols-5">
        <div className="md:col-span-3">
          <div className="space-y-4">
            {education.map((entry, i) => (
              <Reveal key={entry.school} delay={i * 90}>
                <div className="rounded-2xl border border-border bg-surface p-5">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3 gap-y-1">
                    <h3 className="font-medium tracking-tight">{entry.school}</h3>
                    <span className="font-mono text-xs text-muted">{entry.period}</span>
                  </div>
                  <p className="mt-1.5 text-sm text-accent">{entry.qualification}</p>
                  <p className="mt-1 font-mono text-xs text-muted/70">{entry.location}</p>
                  {entry.details && (
                    <p className="mt-3 text-sm leading-relaxed text-muted">{entry.details}</p>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <div className="md:col-span-2">
          <Reveal delay={120}>
            <div className="rounded-2xl border border-border bg-surface p-5">
              <p className="mb-4 font-mono text-[11px] uppercase tracking-widest text-accent">
                Leadership & activities
              </p>
              <ul className="space-y-4">
                {leadership.map((entry) => (
                  <li key={`${entry.org}-${entry.period}`}>
                    <p className="text-sm font-medium">{entry.role}</p>
                    <p className="mt-0.5 text-sm text-muted">{entry.org}</p>
                    <p className="mt-0.5 font-mono text-xs text-muted/70">{entry.period}</p>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
