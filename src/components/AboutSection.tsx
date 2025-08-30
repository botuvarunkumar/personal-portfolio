import { Card } from "@/components/ui/card";
import profilePhoto from "@/assets/Varun_Pic.webp";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-space font-bold text-center mb-16 gradient-text">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="flex justify-center md:justify-end animate-fade-in">
              <div className="relative">
                <div className="w-80 h-80 rounded-3xl overflow-hidden shadow-medium hover-lift">
                  <img 
                    src={profilePhoto} 
                    alt="Botu Varun Kumar - UI/UX Designer"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent rounded-full opacity-20"></div>
                <div className="absolute -top-4 -left-4 w-16 h-16 bg-primary rounded-full opacity-30"></div>
              </div>
            </div>
            
            {/* Content */}
            <div className="space-y-6 animate-slide-up">
              <Card className="p-8 card-interactive">
                <h3 className="text-2xl font-space font-semibold mb-4 text-text-primary">
                  Creative Problem Solver
                </h3>
                <p className="text-lg text-text-secondary leading-relaxed mb-4">
                  A design-driven student exploring the world of visual storytelling through Graphic and UI/UX Design. I work on freelance projects involving branding, posters, brochures, and intuitive web applications.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed mb-4">
                  With tools like Figma, Canva, and Kittl, I aim to build meaningful, minimal, and user-first experiences.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  My future goal? To evolve into a full-time UI/UX designer who blends strategy with creativity to solve real-world design problems.
                </p>
              </Card>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <Card className="p-4 text-center card-interactive">
                  <div className="text-2xl font-bold text-primary">3</div>
                  <div className="text-sm text-text-muted">Projects</div>
                </Card>
                <Card className="p-4 text-center card-interactive">
                  <div className="text-2xl font-bold text-accent">5+</div>
                  <div className="text-sm text-text-muted">Tools</div>
                </Card>
                <Card className="p-4 text-center card-interactive">
                  <div className="text-2xl font-bold text-primary">2+</div>
                  <div className="text-sm text-text-muted">Years Learning</div>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;