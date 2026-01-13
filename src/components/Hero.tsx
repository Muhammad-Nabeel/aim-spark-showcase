import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-background to-muted">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700" />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-card border border-border rounded-full text-sm font-medium shadow-sm">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
            </span>
            Available for freelance projects
          </div>

          {/* Name */}
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-2">
            Muhammad Nabeel
          </h1>

          {/* Title */}
          <p className="text-2xl md:text-4xl font-semibold mb-4">
            <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
              MERN Stack Engineer
            </span>
          </p>

          {/* Company */}
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Co Founder {" "}
            <span className="font-semibold text-foreground">
              AIM DIGITAL UK LIMITED
            </span>
          </p>

          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
            Building scalable web applications with MySQL, Express.js, React,
            and Node.js. Transforming ideas into powerful digital solutions.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-primary to-accent hover:opacity-90 transition-opacity text-white shadow-lg"
              onClick={() => scrollToSection("projects")}
            >
              View My Work
            </Button>
            <Button
              size="lg"
              variant="outline"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex gap-4 justify-center pt-8">
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 shadow-sm"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/muhammad-nabeel-3311458a/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 shadow-sm"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:nabeelfarooq7000@gmail.com"
              className="p-3 rounded-full bg-card border border-border hover:border-primary hover:bg-primary/5 transition-all duration-300 shadow-sm"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Scroll indicator */}
          <div className="pt-16">
            <button
              onClick={() => scrollToSection("about")}
              className="animate-bounce text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowDown className="w-6 h-6 mx-auto" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
