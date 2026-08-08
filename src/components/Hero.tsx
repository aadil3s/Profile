import { profile, stats } from "@/data/portfolio";
import SocialLinks from "./SocialLinks";

function initials(name: string) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0]?.toUpperCase())
    .join("");
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Backdrop */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute inset-0 grid-bg" />
        <div
          className="orb h-[420px] w-[420px] -left-32 -top-40"
          style={{ background: "var(--glow-1)" }}
        />
        <div
          className="orb h-[360px] w-[360px] right-0 top-10"
          style={{ background: "var(--glow-2)", animationDelay: "-7s" }}
        />
      </div>

      <div className="mx-auto max-w-5xl px-6 pb-20 pt-20 sm:pt-28">
        <div className="animate-fade-up">
          <div className="mb-8 inline-flex items-center justify-center rounded-full bg-gradient-to-br from-accent to-accent-2 p-[2px]">
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-background font-mono text-lg font-semibold tracking-tight">
              {initials(profile.name)}
            </div>
          </div>

          {profile.availability && (
            <div className="mb-6 flex">
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1.5 text-xs text-muted backdrop-blur-sm">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
                </span>
                {profile.availability}
              </span>
            </div>
          )}
        </div>

        <h1
          className="animate-fade-up text-4xl font-semibold leading-[1.1] tracking-tight sm:text-6xl"
          style={{ animationDelay: "80ms" }}
        >
          {profile.name}
          <span className="mt-2 block text-muted">
            {profile.role} <span className="text-gradient">{profile.roleAccent}</span>
          </span>
        </h1>

        <p
          className="animate-fade-up mt-6 max-w-2xl text-lg leading-relaxed text-muted"
          style={{ animationDelay: "160ms" }}
        >
          {profile.tagline}
        </p>

        <div
          className="animate-fade-up mt-9 flex flex-wrap items-center gap-3"
          style={{ animationDelay: "240ms" }}
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-accent/20 transition-transform hover:-translate-y-0.5"
          >
            View my work
            <span className="transition-transform group-hover:translate-x-0.5">→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-6 py-3 text-sm font-medium backdrop-blur-sm transition-colors hover:bg-surface"
          >
            Get in touch
          </a>
          <div className="ml-1">
            <SocialLinks />
          </div>
        </div>

        {stats.length > 0 && (
          <dl
            className="animate-fade-up mt-16 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-4"
            style={{ animationDelay: "320ms" }}
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col-reverse bg-surface px-4 py-5 text-center sm:px-6"
              >
                <dt className="mt-1.5 text-xs text-muted sm:text-sm">{stat.label}</dt>
                <dd className="text-2xl font-semibold tracking-tight sm:text-3xl">
                  {stat.value}
                </dd>
              </div>
            ))}
          </dl>
        )}
      </div>
    </section>
  );
}
