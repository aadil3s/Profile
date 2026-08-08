import { projects } from "@/data/portfolio";
import { ArrowUpRightIcon, GitHubIcon } from "./icons";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-20 sm:py-24">
      <SectionHeading
        index="03"
        title="Selected work"
        subtitle="Work from my cyber range internship, capstone and lab exercises."
      />

      <div className="grid gap-5 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal
            key={project.title}
            delay={i * 90}
            className={project.featured ? "md:col-span-2" : ""}
          >
            <article className="card-glow group relative flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-black/5 sm:p-7">
              <div
                aria-hidden
                className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100"
                style={{ background: "var(--glow-1)" }}
              />

              <div className="relative flex-1">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-2">
                  <h3 className="text-lg font-medium tracking-tight sm:text-xl">
                    {project.title}
                  </h3>
                  {project.featured && (
                    <span className="rounded-full bg-accent-soft px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-accent">
                      Featured
                    </span>
                  )}
                  <span className="ml-auto font-mono text-xs text-muted">{project.period}</span>
                </div>

                <p className="mt-3 max-w-2xl text-sm leading-relaxed text-muted">
                  {project.description}
                </p>

                <ul className="mt-4 space-y-2">
                  {project.highlights.map((highlight, j) => (
                    <li key={j} className="flex gap-2.5 text-sm leading-relaxed text-muted">
                      <span
                        aria-hidden
                        className="mt-[7px] h-1 w-1 shrink-0 rounded-full bg-accent"
                      />
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-1.5">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-border px-2 py-0.5 font-mono text-[11px] text-muted"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {(project.liveUrl || project.repoUrl) && (
                <div className="relative mt-6 flex items-center gap-4 text-sm">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 font-medium text-accent hover:underline"
                    >
                      Live demo
                      <ArrowUpRightIcon />
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 font-medium text-muted transition-colors hover:text-foreground"
                    >
                      <GitHubIcon className="h-4 w-4" />
                      Source
                    </a>
                  )}
                </div>
              )}
            </article>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
