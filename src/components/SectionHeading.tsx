import Reveal from "./Reveal";

type Props = {
  index: string;
  title: string;
  subtitle?: string;
};

export default function SectionHeading({ index, title, subtitle }: Props) {
  return (
    <Reveal>
      <div className="mb-12">
        <div className="flex items-center gap-3">
          <span className="font-mono text-xs tracking-widest text-accent">{index}</span>
          <span className="h-px w-10 bg-gradient-to-r from-accent to-transparent" />
        </div>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">{title}</h2>
        {subtitle && <p className="mt-3 max-w-lg text-muted">{subtitle}</p>}
      </div>
    </Reveal>
  );
}
