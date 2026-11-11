import { Button } from "@/components/ui/button";
import { Mail, Linkedin, MapPin, Phone, MessageCircle, Download } from "lucide-react";
import SectionHeading from "@/components/SectionHeading";
import { profile } from "@/data/profile";

const items = [
  { icon: Mail, label: "Email", value: profile.email, href: `mailto:${profile.email}` },
  { icon: Linkedin, label: "LinkedIn", value: "muhammad-nabeel-3311458a", href: profile.linkedin, external: true },
  { icon: MessageCircle, label: "WhatsApp", value: profile.phone, href: profile.whatsappHref, external: true },
  { icon: Phone, label: "Phone", value: profile.phone, href: profile.phoneHref },
  { icon: MapPin, label: "Location", value: `${profile.location} (UTC+5), relocating to the EU` },
];

const Contact = () => (
  <section id="contact" className="bg-muted/30 py-20">
    <div className="container mx-auto max-w-6xl px-6">
      <SectionHeading
        eyebrow="Contact"
        title="Let's talk"
        intro="I'm looking for full-time senior or lead engineering roles in Europe, on-site, hybrid or remote. I will need visa sponsorship (e.g. EU Blue Card or a national skilled-worker permit) and can relocate quickly. Recruiters and hiring managers are welcome to get in touch."
      />

      <div className="grid gap-8 md:grid-cols-5">
        <ul className="grid gap-4 sm:grid-cols-2 md:col-span-3">
          {items.map(({ icon: Icon, label, value, href, external }) => (
            <li key={label} className="rounded-xl border border-border bg-card p-5 shadow-sm">
              <p className="mb-1 flex items-center gap-2 text-sm font-semibold">
                <Icon className="h-4 w-4 text-primary" /> {label}
              </p>
              {href ? (
                <a
                  href={href}
                  {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  className="break-all text-muted-foreground hover:text-primary"
                >
                  {value}
                </a>
              ) : (
                <p className="text-muted-foreground">{value}</p>
              )}
            </li>
          ))}
        </ul>

        <div className="flex flex-col justify-center rounded-xl bg-primary p-8 text-primary-foreground shadow-lg md:col-span-2">
          <h3 className="text-2xl font-bold">Hiring?</h3>
          <p className="mt-2 opacity-90">
            Email is the quickest way to reach me. My full CV is available as a PDF.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button variant="secondary" asChild>
              <a href={`mailto:${profile.email}?subject=Job%20opportunity`}>
                <Mail className="mr-2 h-4 w-4" /> Email me
              </a>
            </Button>
            <Button
              variant="outline"
              className="border-white/60 bg-transparent text-white hover:bg-white hover:text-primary"
              asChild
            >
              <a href={profile.cvUrl} download>
                <Download className="mr-2 h-4 w-4" /> CV
              </a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

export default Contact;
