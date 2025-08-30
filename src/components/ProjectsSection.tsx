import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";

import mobileAppImage from "@/assets/portfolio-pic.jpg";
import portfolioImage from "@/assets/shiishir2025.png";
import brandingImage from "@/assets/techfest.png";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Personal Portfolio",
      category: "Web UI ",
      description: "Responsive portfolio website showcasing modern design principles, clean typography, and engaging user interactions.",
      image: mobileAppImage,
      tools: ["Figma", "Prototyping", "Canva"],
      features: ["Responsive Design", "Clean UI", "Interactive Elements", "User-Centric Layout"],
      links: {
        live: "https://tryportfolio2.my.canva.site/portfolio",
        figma: "https://www.figma.com/design/EqOlfIpvIjyaqdjy3cSY0B/Portfolio?node-id=0-1&t=7szJAR5ajyVjcKkc-1"
      }
    },
    {
      title: "Shishir 2025 Cultural Fest",
      category: "Event Branding",
      description: "Complete visual identity design for college technical festival including posters, banners and ID Cards .",
      image: portfolioImage,
      tools: ["Canva", "Photoshop",],
      features: ["Brand Identity", "Print Design", "Digital Assets", "Merchandise Design"],
      links: {        
        drive: "https://drive.google.com/drive/folders/1PxJk_MBV7WSSbV4-r0PPfPcLsQudBQPt?usp=drive_link"
      }
    },
    {
      title: "Cognitia 2024 TechFest ",
      category: "Event Design & Merchandise",
      description: "Complete visual identity design for college technical festival including posters, banners, merchandise, and  goodies .",
      image: brandingImage,
      tools: ["Photoshop", "Illustrator", "Canva"],
      features: ["Brand Identity", "Print Design", "Digital Assets", "Merchandise Design"],
      links: {
        drive: "https://drive.google.com/drive/folders/1VjCPuY3A8XI6KlhebIQZh_9LB5l5fwRO?usp=drive_link"
      }
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-space font-bold text-center mb-4 gradient-text">
            Featured Projects
          </h2>
          <p className="text-xl text-text-secondary text-center mb-16 max-w-2xl mx-auto">
            A showcase of my design work across mobile apps, web interfaces, and branding projects
          </p>
          
          <div className="space-y-12">
            {projects.map((project, index) => (
              <Card 
                key={project.title}
                className="overflow-hidden card-interactive animate-fade-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className={`grid lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  {/* Image */}
                  <div className={`relative h-80 lg:h-auto ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-4">
                        {project.links.live && (
                          <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white border-white/20">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            Live Demo
                          </Button>
                        )}
                        {project.links.figma && (
                          <Button size="sm" variant="outline" className="bg-white/20 backdrop-blur-sm text-white border-white/20" asChild>
                            <a href={project.links.figma} target="_blank" rel="noopener noreferrer">
                               Figma
                             </a>
                          </Button>
                        )}
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className={`p-8 lg:p-12 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <Badge variant="secondary" className="w-fit mb-4">
                      {project.category}
                    </Badge>
                    
                    <h3 className="text-3xl font-space font-bold text-text-primary mb-4">
                      {project.title}
                    </h3>
                    
                    <p className="text-text-secondary leading-relaxed mb-6">
                      {project.description}
                    </p>
                    
                    {/* Tools Used */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-text-primary mb-2">Tools Used:</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tools.map((tool) => (
                          <Badge key={tool} variant="outline" className="border-primary/20 text-primary">
                            {tool}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    
                    {/* Key Features */}
                    <div className="mb-8">
                      <h4 className="text-sm font-semibold text-text-primary mb-3">Key Features:</h4>
                      <ul className="grid grid-cols-2 gap-2">
                        {project.features.map((feature) => (
                          <li key={feature} className="flex items-center gap-2 text-sm text-text-secondary">
                            <div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Action Buttons */}
                    <div className="flex gap-4">
                      {project.links.live && (
                        <Button className="bg-primary hover:bg-primary/90" asChild>
                          <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2" />
                            View Project
                          </a>
                        </Button>
                      )}
                      {project.links.figma && (
                        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                          <a href={project.links.figma} target="_blank" rel="noopener noreferrer">
                             View in Figma
                          </a>
                        </Button>
                      )}
                      {project.links.drive && (
                        <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground" asChild>
                          <a href={project.links.drive} target="_blank" rel="noopener noreferrer">
                             <ExternalLink className="w-4 h-4 mr-2" />
                             View on Drive
                           </a>
                         </Button>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;