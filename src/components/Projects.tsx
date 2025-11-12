import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard. Built with MERN stack and integrated with Stripe for payments.",
      tech: ["React", "Node.js", "MongoDB", "Express", "Stripe", "Redux"],
      image: "🛒",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Real-Time Chat Application",
      description: "Scalable chat platform with WebSocket connections, message encryption, file sharing, and group chat features. Supports thousands of concurrent users.",
      tech: ["React", "Socket.io", "Node.js", "MongoDB", "Redis"],
      image: "💬",
      liveUrl: "#",
      githubUrl: "#",
      featured: true
    },
    {
      title: "Task Management System",
      description: "Collaborative project management tool with Kanban boards, real-time updates, time tracking, and team collaboration features.",
      tech: ["Next.js", "TypeScript", "PostgreSQL", "Prisma", "TailwindCSS"],
      image: "📋",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Analytics Dashboard",
      description: "Business intelligence dashboard with interactive charts, real-time data visualization, and customizable reports for data-driven decision making.",
      tech: ["React", "D3.js", "Node.js", "Express", "MongoDB"],
      image: "📊",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Social Media Platform",
      description: "Modern social networking application with posts, likes, comments, followers system, and real-time notifications.",
      tech: ["React", "Node.js", "MongoDB", "Socket.io", "AWS S3"],
      image: "🌐",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    },
    {
      title: "Booking System",
      description: "Appointment scheduling and booking platform with calendar integration, email notifications, and payment processing.",
      tech: ["React", "Node.js", "PostgreSQL", "Express", "Nodemailer"],
      image: "📅",
      liveUrl: "#",
      githubUrl: "#",
      featured: false
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A selection of recent work showcasing my expertise in full-stack development
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className={`group border-2 hover:border-primary transition-all duration-300 shadow-lg hover:shadow-2xl ${
                project.featured ? 'md:col-span-2' : ''
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
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
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
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
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
