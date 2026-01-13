import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "JANSPORTS E-commerce Website",
      description:
        "Developed responsive e-commerce platforms with streamlined navigation and mobile-friendly features. Boosted online sales by 35% through enhanced user experience.",
      tech: ["Shopify", "Liquid", "SCSS", "CSS", "JQuery"],
      image: "🛒",
      liveUrl: "https://www.jansport.com/",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Babolat E-commerce Website",
      description:
        "Developed responsive e-commerce platforms with streamlined navigation and responsive design.",
      tech: ["Shopify", "Liquid", "SCSS", "CSS", "JQuery"],
      image: "🛒",
      liveUrl: "https://www.babolat.com/",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Samirandaly.com E-commerce Website",
      description:
        "Developed responsive e-commerce platforms with streamlined navigation and responsive design.",
      tech: ["Shopify", "Liquid", "SCSS", "CSS", "JQuery"],
      image: "🛒",
      liveUrl: "https://samirandaly.com/",
      githubUrl: "#",
      featured: true,
    },
    {
      title: "Faremkers React App",
      description:
        "Real-time information app for current location, nearby bus stops, and routes. Includes admin panel for centralized management of route mapping and schedules.",
      tech: [
        "React.js",
        "jsx",
        "CSS3",
        "Bootstrap",
        "Material UI",
        "Ant Design",
        "InfoBip SMS API",
        "Sabre Search & Booking API",
        "Webhooks",
        "Infobip Whatsapp API",
        "Zong Icoming Call API",
      ],
      image: "📱",
      liveUrl: "https://www.faremakers.com/",
      githubUrl: "https://github.com/TravelChannel/Faremakers-React.git",
      featured: true,
    },
    {
      title: "Faremakers NEST.JS Backend",
      description:
        "Fully functional website with responsive design and user-friendly interface. Includes automated lead generation from Facebook and Google Ads.",
      tech: [
        "Node.js",
        "NEST.js",
        "InfoBip SMS API",
        "Sabre Search & Booking API",
        "Webhooks",
        "Infobip Whatsapp API",
        "Zong Icoming Call API",
      ],
      image: "🌐",
      liveUrl: "https://api.faremakers.com/",
      githubUrl: "https://github.com/TravelChannel/Faremakers-Backend.git",
      featured: true,
    },
    {
      title: "Faremakers CRM",
      description:
        "Customer relationship management system for efficient customer data handling and management. Built using ADO.NET for robust database operations.",
      tech: ["ADO.NET", "C#", ".NET", "Database Management"],
      image: "💼",
      liveUrl: "https://fmcrm.azurewebsites.net",
      githubUrl: "https://github.com/TravelChannel/TravelChannel-CRM.git",
      featured: false,
    },
    {
      title: "Vizrt Graphics Control System",
      description:
        ".NET-based system for managing Vizrt graphics and rendering engines in production control room. Includes text replacement automation and command-based triggers.",
      tech: [".NET", "C#", "Vizrt Integration", "Real-time Processing"],
      image: "🎥",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
    {
      title: "Amadeus API Integration",
      description:
        "Back-end integration with Amadeus Enterprise API for real-time flight bookings and ticket issuance. Streamlined booking flow with enhanced transaction security.",
      tech: [
        "Nest.js",
        "API Integration",
        "Real-time Booking",
        "Payment Processing",
      ],
      image: "✈️",
      liveUrl: "#",
      githubUrl: "#",
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of recent work showcasing my expertise in full-stack
            development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card
              key={index}
              className={`group border-2 hover:border-primary transition-all duration-300 shadow-lg hover:shadow-2xl ${
                project.featured ? "md:col-span-2" : ""
              }`}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-4xl">{project.image}</span>
                      {project.featured && (
                        <Badge className="bg-gradient-to-r from-primary to-accent text-white">
                          Featured
                        </Badge>
                      )}
                    </div>
                    <CardTitle className="text-2xl mb-2 group-hover:text-primary transition-colors">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-base">
                      {project.description}
                    </CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <Badge key={tech} variant="outline" className="bg-muted">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <div className="flex gap-3 pt-2">
                    <Button
                      variant="default"
                      size="sm"
                      className="bg-gradient-to-r from-primary to-accent hover:opacity-90 text-white"
                      asChild
                    >
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2" />
                        Source Code
                      </a>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to see more of my work?
          </p>
          <Button variant="outline" size="lg" asChild>
            <a
              href="https://github.com/Muhammad-Nabeel"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="w-5 h-5 mr-2" />
              View All Projects on GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Projects;
