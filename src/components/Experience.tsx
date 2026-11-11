import { Badge } from "@/components/ui/badge";
import SectionHeading from "@/components/SectionHeading";
import { experience } from "@/data/profile";

const Experience = () => (
  <section id="experience" className="bg-muted/30 py-20">
    <div className="container mx-auto max-w-6xl px-6">
      <SectionHeading
        eyebrow="Experience"
        title="Work history"
        intro="Nearly a decade across travel tech, live broadcasting and business automation."
      />

      <ol className="relative space-y-10 border-l-2 border-border pl-8">
        {experience.map((job) => (
          <li key={job.role + job.period} className="relative">
            <span className="absolute -left-[41px] top-1.5 h-4 w-4 rounded-full border-4 border-background bg-primary" />
            <div className="rounded-xl border border-border bg-card p-6 shadow-sm md:p-8">
              <div className="flex flex-col gap-1 md:flex-row md:items-baseline md:justify-between">
                <h3 className="text-xl font-semibold">{job.role}</h3>
                <p className="text-sm font-medium text-muted-foreground">{job.period}</p>
              </div>
              <p className="mt-1 font-medium text-primary">
                {job.companyUrl ? (
                  <a href={job.companyUrl} target="_blank" rel="noopener noreferrer" className="hover:underline">
                    {job.company}
                  </a>
                ) : (
                  job.company
                )}
                <span className="font-normal text-muted-foreground"> · {job.location}</span>
              </p>
              <p className="mt-4 text-muted-foreground">{job.intro}</p>
              <ul className="mt-4 list-disc space-y-2 pl-5">
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {job.stack.map((s) => (
                  <Badge key={s} variant="secondary" className="font-normal">
                    {s}
                  </Badge>
                ))}
              </div>
            </div>
          </li>
        ))}
      </ol>
    </div>
  </section>
);

export default Experience;
