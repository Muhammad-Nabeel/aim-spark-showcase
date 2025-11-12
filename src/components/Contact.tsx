import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Linkedin, Github, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? I'd love to hear from you!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="border-2 hover:border-primary transition-all duration-300 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Email</h3>
                  <a 
                    href="mailto:contact@aimdigital.co.uk"
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    contact@aimdigital.co.uk
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-accent transition-all duration-300 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Phone</h3>
                  <a 
                    href="tel:+44000000000"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    +44 (0) 000 000 000
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-primary transition-all duration-300 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">Location</h3>
                  <p className="text-muted-foreground">
                    United Kingdom
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-2 hover:border-accent transition-all duration-300 shadow-lg">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-accent/10 rounded-lg">
                  <Linkedin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2">LinkedIn</h3>
                  <a 
                    href="https://linkedin.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    Connect on LinkedIn
                  </a>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-gradient-to-br from-primary via-primary to-accent text-white border-0 shadow-2xl">
          <CardContent className="p-8 md:p-12 text-center">
            <h3 className="text-3xl font-bold mb-4">AIM DIGITAL UK LIMITED</h3>
            <p className="text-lg mb-8 opacity-90">
              Let's build something amazing together. Whether you need a full-stack application, 
              consulting, or technical leadership, I'm here to help turn your vision into reality.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button 
                size="lg" 
                variant="secondary"
                asChild
              >
                <a href="mailto:contact@aimdigital.co.uk">
                  <Mail className="w-5 h-5 mr-2" />
                  Send Email
                </a>
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="bg-transparent border-2 border-white text-white hover:bg-white hover:text-primary"
                asChild
              >
                <a href="https://github.com" target="_blank" rel="noopener noreferrer">
                  <Github className="w-5 h-5 mr-2" />
                  GitHub Profile
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
