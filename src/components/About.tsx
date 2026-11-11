import { CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/profile";

const strengths = [
  "Owns features from database design to deployment",
  "Experienced with real-time systems where errors are visible instantly",
  "Leads delivery and works directly with clients and stakeholders",
  "Moved from .NET to the modern TypeScript stack, so I learn new stacks quickly",
];

const About = () => (
  <section id="about" className="bg-background py-20">
    <div className="container mx-auto max-w-6xl px-6">
      <SectionHeading eyebrow="About" title="Engineer first, product-minded always" />
      <div className="grid gap-12 md:grid-cols-5">
        <div className="space-y-4 text-lg leading-relaxed text-muted-foreground md:col-span-3">
          {profile.summary.map((p) => (
            <p key={p.slice(0, 20)}>{p}</p>
          ))}
        </div>
        <ul className="space-y-4 md:col-span-2">
          {strengths.map((s) => (
            <li key={s} className="flex gap-3">
              <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
              <span>{s}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
);

export default About;
