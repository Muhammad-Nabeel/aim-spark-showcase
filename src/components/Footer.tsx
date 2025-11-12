import { Github, Linkedin, Mail, Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-heading font-bold text-xl mb-4">AIM DIGITAL UK LIMITED</h3>
            <p className="text-sm opacity-90">
              Building innovative web solutions with cutting-edge technologies. 
              Specializing in MERN stack development.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#about" className="opacity-90 hover:opacity-100 hover:text-primary transition-all">
                  About
                </a>
              </li>
              <li>
                <a href="#skills" className="opacity-90 hover:opacity-100 hover:text-primary transition-all">
                  Skills
                </a>
              </li>
              <li>
                <a href="#projects" className="opacity-90 hover:opacity-100 hover:text-primary transition-all">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="opacity-90 hover:opacity-100 hover:text-primary transition-all">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Connect</h4>
            <div className="flex gap-3">
              <a 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all"
              >
                <Github className="w-5 h-5" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="mailto:contact@aimdigital.co.uk"
                className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-all"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-sm opacity-90">
          <p className="flex items-center justify-center gap-2 flex-wrap">
            © {currentYear} Muhammad Nabeel | AIM DIGITAL UK LIMITED. Made with <Heart className="w-4 h-4 text-red-500 fill-current" /> using React & TypeScript
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
