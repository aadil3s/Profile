import { socials } from "@/data/portfolio";
import { GitHubIcon, LinkedInIcon, MailIcon } from "./icons";

const icons = {
  github: GitHubIcon,
  linkedin: LinkedInIcon,
  mail: MailIcon,
};

export default function SocialLinks({ size = "md" }: { size?: "sm" | "md" }) {
  const box = size === "sm" ? "h-9 w-9" : "h-10 w-10";
  const glyph = size === "sm" ? "h-4 w-4" : "h-[18px] w-[18px]";

  return (
    <div className="flex items-center gap-1">
      {socials.map((social) => {
        const Icon = icons[social.icon];
        const external = social.href.startsWith("http");

        return (
          <a
            key={social.label}
            href={social.href}
            aria-label={social.label}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className={`flex ${box} items-center justify-center rounded-full text-muted transition-colors hover:bg-surface hover:text-foreground`}
          >
            <Icon className={glyph} />
          </a>
        );
      })}
    </div>
  );
}
