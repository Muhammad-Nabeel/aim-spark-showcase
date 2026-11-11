import { Github, Linkedin, Mail } from "lucide-react";
import { profile } from "@/data/profile";

const Footer = () => (
  <footer className="border-t border-border bg-background py-8">
    <div className="container mx-auto flex max-w-6xl px-6 flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
      <p>
        © {new Date().getFullYear()} {profile.name} · {profile.title}
      </p>
      <div className="flex gap-4">
        <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="hover:text-foreground">
          <Linkedin className="h-5 w-5" />
        </a>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="hover:text-foreground">
          <Github className="h-5 w-5" />
        </a>
        <a href={`mailto:${profile.email}`} aria-label="Email" className="hover:text-foreground">
          <Mail className="h-5 w-5" />
        </a>
      </div>
    </div>
  </footer>
);

export default Footer;
