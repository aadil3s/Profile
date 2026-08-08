import { profile } from "@/data/portfolio";
import SocialLinks from "./SocialLinks";

export default function Footer() {
  return (
    <footer className="mx-auto max-w-5xl px-6 pb-12">
      <div className="flex flex-col items-center justify-between gap-5 border-t border-border pt-8 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name} · {profile.location}
        </p>
        <SocialLinks size="sm" />
      </div>
    </footer>
  );
}
