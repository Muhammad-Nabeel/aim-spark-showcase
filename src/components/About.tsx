import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            As a software developer with 7+ years of experience, I specialize in
            creating innovative, scalable solutions that drive business success.
            With expertise in multiple platforms and technologies, including web
            development, mobile apps, and system integration, I am committed to
            continuous learning and staying ahead of industry trends.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-2 hover:border-primary transition-all duration-300 shadow-md hover:shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Briefcase className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Experience</h3>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold text-lg">
                        Technical Founder & MERN Stack Engineer
                      </h4>
                      <p className="text-primary font-medium">
                        AIM DIGITAL UK LIMITED
                      </p>
                      <p className="text-muted-foreground text-sm mt-1">
                        Dec 2024 - Present
                      </p>
                      <p className="text-muted-foreground mt-2">
                        Lead architecture and development of e-commerce
                        platforms using MERN stack with Nest.JS. Design and
                        implement scalable Back-end APIs, integrate third-party
                        services.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">
                        MERN Stack Engineer
                      </h4>
                      <p className="text-primary font-medium">
                        Travel Channel Int'l Pvt Ltd
                      </p>
                      <p className="text-muted-foreground text-sm mt-1">
                        May 2023 - Nov 2024
                      </p>
                      <p className="text-muted-foreground mt-2">
                        Back-end integration with Amadeus Enterprise API,
                        real-time booking flow, enhanced transaction process.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">
                        Solutions Developer
                      </h4>
                      <p className="text-primary font-medium">FastSports.tv</p>
                      <p className="text-muted-foreground text-sm mt-1">
                        Jan 2022 - Apr 2023
                      </p>
                      <p className="text-muted-foreground mt-2">
                        Developed .NET-based system for Vizrt graphics control,
                        text replacement automation, command-based triggers.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">
                        Senior DotNet Developer
                      </h4>
                      <p className="text-primary font-medium">Faremakers</p>
                      <p className="text-muted-foreground text-sm mt-1">
                        Aug 2017 - Dec 2021
                      </p>
                      <p className="text-muted-foreground mt-2">
                        Developed Faremakers website with CRM integration,
                        automated lead generation, WhatsApp integration.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-accent transition-all duration-300 shadow-md hover:shadow-xl">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Education</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold">
                        Bachelor of Science in Computer Science
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        University of Lahore
                      </p>
                      <p className="text-muted-foreground text-sm">
                        2012 - 2016
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">HSSC</h4>
                      <p className="text-muted-foreground text-sm">
                        Govt Islamia College (Railway Road)
                      </p>
                      <p className="text-muted-foreground text-sm">
                        2010 - 2012
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">
                        Secondary School Certificate
                      </h4>
                      <p className="text-muted-foreground text-sm">
                        Akbari Public School
                      </p>
                      <p className="text-muted-foreground text-sm">
                        2008 - 2010
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-primary/5 to-accent/5 border-2">
          <CardContent className="p-8 md:p-12 text-center">
            <h3 className="text-2xl font-semibold mb-4">Skills & Expertise</h3>
            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              <div>
                <h4 className="font-semibold mb-2">Frontend</h4>
                <p className="text-sm text-muted-foreground">
                  React JS, React Router, React Hooks, React DOM
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Backend</h4>
                <p className="text-sm text-muted-foreground">
                  Node.js, Nest.JS, RESTful APIs, C# / .NET
                </p>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Database & Tools</h4>
                <p className="text-sm text-muted-foreground">
                  SQL Server, Git, SQL
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
