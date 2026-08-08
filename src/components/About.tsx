import { facts, profile } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-20 sm:py-24">
      <SectionHeading index="01" title="About me" />

      <div className="grid gap-10 md:grid-cols-5">
        <Reveal className="md:col-span-3">
          <div className="space-y-4 text-[15px] leading-relaxed text-muted">
            {profile.about.map((paragraph, i) => (
              <p key={i}>{paragraph}</p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="md:col-span-2">
          <dl className="divide-y divide-border overflow-hidden rounded-2xl border border-border bg-surface">
            {facts.map((fact) => (
              <div key={fact.label} className="px-5 py-4">
                <dt className="font-mono text-[11px] uppercase tracking-widest text-accent">
                  {fact.label}
                </dt>
                <dd className="mt-1.5 text-sm text-foreground">{fact.value}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
