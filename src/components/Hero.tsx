import { Button } from "@/components/ui/button";
import { Download, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile, highlights } from "@/data/profile";
import photo from "@/assets/m-nabeel.png";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative overflow-hidden bg-gradient-to-br from-background via-background to-muted pt-32 pb-20 md:pt-40 md:pb-28"
    >
      <div className="pointer-events-none absolute -top-40 -right-40 h-96 w-96 rounded-full bg-primary/10 blur-3xl" />

      <div className="container relative mx-auto max-w-6xl px-6">
        <div className="flex flex-col-reverse gap-10 md:flex-row md:items-center md:justify-between">
        <div className="max-w-3xl space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm font-medium shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            {profile.availability}
          </div>

          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">{profile.name}</h1>

          <p className="text-xl font-semibold text-primary md:text-2xl">{profile.title}</p>

          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            I build and lead production systems end to end: real-time flight booking, live-broadcast
            graphics, GPS tracking and AI automation pipelines. TypeScript, Next.js, NestJS, Node.js,
            .NET and Python.
          </p>

          <p className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin className="h-4 w-4" />
            Based in {profile.location} · Working with UK clients · Ready to relocate within the EU
          </p>

          <div className="flex flex-wrap gap-3 pt-2">
            <Button size="lg" asChild>
              <a href="#contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact me
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href={profile.cvUrl} download>
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </Button>
            <Button size="lg" variant="ghost" asChild>
              <a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
            </Button>
          </div>
        </div>

        <img
          src={photo}
          alt={`Portrait of ${profile.name}`}
          width={250}
          height={250}
          className="h-32 w-32 shrink-0 rounded-full border-4 border-background object-cover shadow-xl ring-2 ring-primary/30 md:h-56 md:w-56"
        />
        </div>

        <dl className="mt-16 grid grid-cols-2 gap-4 md:grid-cols-4">
          {highlights.map((h) => (
            <div key={h.label} className="flex flex-col rounded-xl border border-border bg-card p-5 shadow-sm">
              <dt className="order-2 mt-1 text-sm text-muted-foreground">{h.label}</dt>
              <dd className="font-heading text-2xl font-bold">{h.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
};

export default Hero;
