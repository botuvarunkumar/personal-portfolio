import { Card } from "@/components/ui/card";
import { Palette, Smartphone, Lightbulb, Image } from "lucide-react";

const WorkAreaSection = () => {
  const workAreas = [
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "Creating intuitive and visually appealing user interfaces with a focus on user experience and accessibility.",
      gradient: "from-primary to-primary-glow"
    },
    {
      icon: Image,
      title: "Graphic Design",
      description: "Designing eye-catching posters, banners, ID cards, and visual content for various events and campaigns.",
      gradient: "from-accent to-primary"
    },
    {
      icon: Smartphone,
      title: "Mobile App Prototyping",
      description: "Developing interactive prototypes for mobile applications with smooth animations and user flows.",
      gradient: "from-primary-glow to-accent"
    },
    {
      icon: Lightbulb,
      title: "Creative Branding",
      description: "Building cohesive brand identities that tell compelling stories and connect with target audiences.",
      gradient: "from-accent to-primary-glow"
    }
  ];

  return (
    <section id="work-areas" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-space font-bold text-center mb-4 gradient-text">
            What I Do
          </h2>
          <p className="text-xl text-text-secondary text-center mb-16 max-w-2xl mx-auto">
            Exploring diverse areas of design to create meaningful and impactful digital experiences
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {workAreas.map((area, index) => {
              const IconComponent = area.icon;
              return (
                <Card 
                  key={area.title} 
                  className="p-8 card-interactive animate-fade-up group"
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="relative">
                    {/* Icon with gradient background */}
                    <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${area.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                      <IconComponent className="w-full h-full text-white" />
                    </div>
                    
                    {/* Content */}
                    <h3 className="text-2xl font-space font-semibold mb-4 text-text-primary">
                      {area.title}
                    </h3>
                    <p className="text-text-secondary leading-relaxed">
                      {area.description}
                    </p>
                    
                    {/* Decorative element */}
                    <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-primary/5 to-accent/5 rounded-full -z-10 group-hover:scale-150 transition-transform duration-500"></div>
                  </div>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkAreaSection;