import { experience, type Job } from "@/data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  const security = experience.filter((job) => job.category === "security");
  const additional = experience.filter((job) => job.category === "additional");

  return (
    <section id="experience" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-20 sm:py-24">
      <SectionHeading index="04" title="Experience" />

      <Timeline jobs={security} label="Security & technical" />

      {additional.length > 0 && (
        <div className="mt-14">
          <Timeline jobs={additional} label="Additional experience" muted />
        </div>
      )}
    </section>
  );
}

function Timeline({
  jobs,
  label,
  muted = false,
}: {
  jobs: Job[];
  label: string;
  muted?: boolean;
}) {
  return (
    <div>
      <Reveal>
        <p className="mb-8 font-mono text-[11px] uppercase tracking-widest text-muted">{label}</p>
      </Reveal>

      <div className="relative">
        <div
          aria-hidden
          className={`absolute bottom-2 left-[7px] top-2 w-px ${
            muted ? "bg-border" : "bg-gradient-to-b from-accent via-border to-transparent"
          }`}
        />

        <div className={muted ? "space-y-8" : "space-y-12"}>
          {jobs.map((job, i) => (
            <Reveal key={`${job.company}-${job.period}`} delay={i * 100}>
              <div className="relative pl-10">
                <span
                  aria-hidden
                  className="absolute left-0 top-1.5 flex h-[15px] w-[15px] items-center justify-center rounded-full border border-border bg-background"
                >
                  <span
                    className={`h-[7px] w-[7px] rounded-full ${
                      muted ? "bg-muted" : "bg-gradient-to-br from-accent to-accent-2"
                    }`}
                  />
                </span>

                <div className="flex flex-wrap items-baseline gap-x-3">
                  <p className="font-mono text-xs tracking-wide text-muted">{job.period}</p>
                  <p className="font-mono text-xs text-muted/70">{job.location}</p>
                </div>

                <h3 className="mt-2 font-medium tracking-tight sm:text-lg">
                  {job.role}
                  <span className="text-muted"> · {job.company}</span>
                </h3>

                <ul className="mt-3 space-y-2.5">
                  {job.points.map((point, j) => (
                    <li key={j} className="flex gap-3 text-sm leading-relaxed text-muted">
                      <span
                        aria-hidden
                        className={`mt-[7px] h-1 w-1 shrink-0 rounded-full ${
                          muted ? "bg-muted" : "bg-accent"
                        }`}
                      />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
