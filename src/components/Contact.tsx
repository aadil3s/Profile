import { profile } from "@/data/portfolio";
import { ArrowUpRightIcon } from "./icons";
import Reveal from "./Reveal";
import SocialLinks from "./SocialLinks";

export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl scroll-mt-24 px-6 py-20 sm:py-24">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-8 py-14 text-center sm:px-12">
          <div aria-hidden className="pointer-events-none absolute inset-0">
            <div
              className="orb left-1/2 -top-32 h-[300px] w-[300px] -translate-x-1/2"
              style={{ background: "var(--glow-1)" }}
            />
          </div>

          <div className="relative">
            <p className="font-mono text-xs tracking-widest text-accent">07 - CONTACT</p>
            <h2 className="mx-auto mt-4 max-w-xl text-3xl font-semibold leading-tight tracking-tight sm:text-4xl">
              Hiring for a <span className="text-gradient">SOC team</span>? Let&apos;s talk.
            </h2>
            <p className="mx-auto mt-4 max-w-md text-muted">
              I&apos;m after an entry-level SOC or cybersecurity role in Sydney. Happy to walk
              you through the cyber range build or the detection rules behind it.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-accent to-accent-2 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-accent/20 transition-transform hover:-translate-y-0.5"
              >
                {profile.email}
                <span className="transition-transform group-hover:translate-x-0.5">→</span>
              </a>
              <a
                href={profile.resumeUrl}
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-6 py-3 text-sm font-medium transition-colors hover:bg-surface-2"
              >
                Download resume
                <ArrowUpRightIcon />
              </a>
            </div>

            <div className="mt-6 flex justify-center">
              <SocialLinks size="sm" />
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
