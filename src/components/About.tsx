import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, GraduationCap, Award } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate about creating innovative digital solutions that make a difference
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
                      <h4 className="font-semibold text-lg">Founder & Lead Developer</h4>
                      <p className="text-primary font-medium">AIM DIGITAL UK LIMITED</p>
                      <p className="text-muted-foreground text-sm mt-1">2020 - Present</p>
                      <p className="text-muted-foreground mt-2">
                        Leading a team of developers to deliver cutting-edge web solutions. 
                        Specializing in full-stack MERN applications with focus on scalability and performance.
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg">Senior Full Stack Developer</h4>
                      <p className="text-muted-foreground text-sm mt-1">2018 - 2020</p>
                      <p className="text-muted-foreground mt-2">
                        Developed enterprise-level applications and mentored junior developers.
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
                  <Award className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">Expertise</h3>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-semibold">Full Stack Development</h4>
                      <p className="text-muted-foreground text-sm">
                        Building end-to-end solutions with modern JavaScript frameworks
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Cloud Architecture</h4>
                      <p className="text-muted-foreground text-sm">
                        Designing scalable cloud infrastructure on AWS and Azure
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">DevOps & CI/CD</h4>
                      <p className="text-muted-foreground text-sm">
                        Implementing automated deployment pipelines and monitoring
                      </p>
                    </div>
                    <div>
                      <h4 className="font-semibold">Team Leadership</h4>
                      <p className="text-muted-foreground text-sm">
                        Managing cross-functional teams and delivering projects on time
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
            <h3 className="text-2xl font-semibold mb-4">My Approach</h3>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I believe in writing clean, maintainable code that not only solves problems but also 
              scales with your business. Every project is an opportunity to learn, innovate, and 
              deliver exceptional user experiences. My focus is on understanding your needs and 
              translating them into robust technical solutions that drive real business value.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
