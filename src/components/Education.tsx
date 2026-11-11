import { GraduationCap, Languages, IdCard, Heart } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { education, languages, extras } from "@/data/profile";

const Education = () => (
  <section id="education" className="bg-background py-20">
    <div className="container mx-auto max-w-6xl px-6">
      <SectionHeading eyebrow="Background" title="Education & languages" />
      <div className="grid gap-6 md:grid-cols-2">
        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h3 className="mb-5 flex items-center gap-2 text-lg font-semibold">
            <GraduationCap className="h-5 w-5 text-primary" /> Education
          </h3>
          <ul className="space-y-5">
            {education.map((e) => (
              <li key={e.degree}>
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <p className="font-semibold">{e.degree}</p>
                  <p className="text-sm text-muted-foreground">{e.period}</p>
                </div>
                <p className="text-primary">{e.school}</p>
                <p className="mt-1 text-sm text-muted-foreground">{e.detail}</p>
              </li>
            ))}
          </ul>
        </div>

        <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
          <h3 className="mb-5 flex items-center gap-2 text-lg font-semibold">
            <Languages className="h-5 w-5 text-primary" /> Languages{" "}
            <span className="text-sm font-normal text-muted-foreground">(CEFR)</span>
          </h3>
          <ul className="space-y-4">
            {languages.map((l) => (
              <li key={l.name} className="flex items-center justify-between gap-4">
                <div>
                  <p className="font-semibold">{l.name}</p>
                  <p className="text-sm text-muted-foreground">{l.detail}</p>
                </div>
                <span className="rounded-md bg-primary/10 px-2.5 py-1 text-sm font-semibold text-primary">{l.level}</span>
              </li>
            ))}
          </ul>

          <div className="mt-6 space-y-3 border-t border-border pt-5 text-sm text-muted-foreground">
            <p className="flex gap-2">
              <IdCard className="h-4 w-4 shrink-0 translate-y-0.5" /> {extras.licences}
            </p>
            <p className="flex gap-2">
              <Heart className="h-4 w-4 shrink-0 translate-y-0.5" /> {extras.interests}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Education;
