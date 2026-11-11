import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { profile, projects } from "@/data/profile";

const Projects = () => (
  <section id="projects" className="bg-background py-20">
    <div className="container mx-auto max-w-6xl px-6">
      <SectionHeading
        eyebrow="Selected work"
        title="Projects & case studies"
        intro="Most of this is commercial work for employers and clients, so source code is private unless linked."
      />

      <div className="grid gap-6 md:grid-cols-2">
        {projects.map((p) => (
          <article
            key={p.title}
            className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm transition-shadow hover:shadow-md"
          >
            <div className="mb-3 flex flex-wrap items-center gap-2">
              <p className="text-sm text-muted-foreground">{p.context}</p>
              {p.status && (
                <Badge variant="outline" className="border-amber-500/40 text-amber-700 dark:text-amber-400">
                  {p.status}
                </Badge>
              )}
            </div>
            <h3 className="text-xl font-semibold">{p.title}</h3>
            <dl className="mt-4 space-y-3 text-sm">
              <div>
                <dt className="font-semibold">Challenge</dt>
                <dd className="text-muted-foreground">{p.problem}</dd>
              </div>
              <div>
                <dt className="font-semibold">What I built</dt>
                <dd className="text-muted-foreground">{p.outcome}</dd>
              </div>
            </dl>
            <div className="mt-5 flex flex-wrap gap-2">
              {p.tech.map((t) => (
                <Badge key={t} variant="secondary" className="font-normal">
                  {t}
                </Badge>
              ))}
            </div>
            {p.links && (
              <div className="mt-auto flex flex-wrap gap-4 pt-5 text-sm font-medium">
                {p.links.map((l) => (
                  <a
                    key={l.href}
                    href={l.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 text-primary hover:underline"
                  >
                    {l.kind === "code" ? <Github className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />}
                    {l.label}
                  </a>
                ))}
              </div>
            )}
          </article>
        ))}
      </div>

      <p className="mt-10 text-muted-foreground">
        More on{" "}
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="font-medium text-primary hover:underline">
          GitHub
        </a>
        .
      </p>
    </div>
  </section>
);

export default Projects;
