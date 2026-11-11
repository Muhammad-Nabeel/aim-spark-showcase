import { Badge } from "@/components/ui/badge";
import SectionHeading from "@/components/SectionHeading";
import { skillGroups } from "@/data/profile";

const Skills = () => (
  <section id="skills" className="bg-muted/30 py-20">
    <div className="container mx-auto max-w-6xl px-6">
      <SectionHeading eyebrow="Skills" title="Technical toolkit" intro="Tools I have used in production." />
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((g) => (
          <div key={g.title} className="rounded-xl border border-border bg-card p-5 shadow-sm">
            <h3 className="mb-3 font-semibold">{g.title}</h3>
            <div className="flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <Badge key={s} variant="outline" className="bg-muted/50 font-normal">
                  {s}
                </Badge>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Skills;
