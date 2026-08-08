import { skills } from "@/data/portfolio";
import { SkillIcon } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-20 sm:py-24">
      <SectionHeading
        index="02"
        title="Technical toolkit"
        subtitle="The stack I detect, investigate and respond with."
      />

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <Reveal key={group.category} delay={(i % 3) * 80}>
            <div className="card-glow group h-full rounded-2xl border border-border bg-surface p-5 transition-transform duration-300 hover:-translate-y-1">
              <div className="flex items-center gap-2.5">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent-soft text-accent">
                  <SkillIcon name={group.icon} />
                </span>
                <h3 className="text-sm font-medium tracking-tight">{group.category}</h3>
              </div>

              <div className="mt-4 flex flex-wrap gap-1.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md bg-surface-2 px-2.5 py-1 text-xs text-muted transition-colors group-hover:text-foreground"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
