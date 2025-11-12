import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Skills = () => {
  const skillCategories = [
    {
      title: "Frontend",
      color: "primary",
      skills: [
        "React.js", "Next.js", "TypeScript", "JavaScript (ES6+)",
        "HTML5", "CSS3", "Tailwind CSS", "Redux", "React Query",
        "Vite", "Webpack", "Responsive Design"
      ]
    },
    {
      title: "Backend",
      color: "accent",
      skills: [
        "Node.js", "Express.js", "REST APIs", "GraphQL",
        "JWT Authentication", "Socket.io", "Microservices",
        "API Design", "WebSockets"
      ]
    },
    {
      title: "Database",
      color: "secondary",
      skills: [
        "MongoDB", "MySQL", "PostgreSQL", "Redis",
        "Mongoose", "Prisma", "Database Design",
        "Query Optimization"
      ]
    },
    {
      title: "DevOps & Tools",
      color: "primary",
      skills: [
        "Git & GitHub", "Docker", "AWS", "Azure", "CI/CD",
        "Linux", "Nginx", "PM2", "Jenkins", "GitHub Actions"
      ]
    },
    {
      title: "Other",
      color: "accent",
      skills: [
        "Agile/Scrum", "Testing (Jest, Cypress)", "SEO",
        "Performance Optimization", "Security Best Practices",
        "Technical Documentation", "Code Review"
      ]
    }
  ];

  const getColorClasses = (color: string) => {
    switch (color) {
      case "primary":
        return "bg-primary/10 text-primary border-primary/20 hover:bg-primary/20";
      case "accent":
        return "bg-accent/10 text-accent border-accent/20 hover:bg-accent/20";
      case "secondary":
        return "bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20";
      default:
        return "bg-muted text-muted-foreground";
    }
  };

  return (
    <section id="skills" className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Technical Skills</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern web applications
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category) => (
            <Card 
              key={category.title}
              className="border-2 hover:border-primary/50 transition-all duration-300 shadow-md hover:shadow-xl"
            >
              <CardContent className="p-6">
                <h3 className="text-2xl font-semibold mb-4 pb-2 border-b-2 border-primary/20">
                  {category.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge 
                      key={skill}
                      variant="outline"
                      className={`${getColorClasses(category.color)} transition-all duration-200 cursor-default`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 border-2">
            <CardContent className="p-8">
              <p className="text-lg text-muted-foreground">
                Always learning and staying updated with the latest technologies and best practices 
                in the ever-evolving world of web development.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Skills;
