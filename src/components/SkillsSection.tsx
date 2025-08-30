import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Figma, Palette, Smartphone, Lightbulb, PenTool, Users } from "lucide-react";

const SkillsSection = () => {
  const tools = [
    { name: "Figma", level: 70, icon: Figma },
    { name: "Adobe XD", level: 65, icon: PenTool },
    { name: "Canva", level: 95, icon: Palette },
    { name: "Photoshop", level: 70, icon: Palette },
  ];

  const coreSkills = [
    { name: "Wireframing", level: 88, icon: PenTool },
    { name: "Prototyping", level: 85, icon: Smartphone },
    { name: "Visual Design", level: 92, icon: Palette },
    { name: "User Research", level: 85, icon: Users },
  ];

  const SkillCard = ({ skill, delay = 0 }: { skill: typeof tools[0], delay?: number }) => {
    const IconComponent = skill.icon;
    return (
      <Card className="p-6 card-interactive" style={{ animationDelay: `${delay}ms` }}>
        <div className="flex items-center gap-4 mb-4">
          <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
            <IconComponent className="w-6 h-6 text-primary" />
          </div>
          <div className="flex-1">
            <h4 className="font-space font-semibold text-text-primary">{skill.name}</h4>
            <div className="text-sm text-text-muted">{skill.level}% proficiency</div>
          </div>
        </div>
        <Progress value={skill.level} className="h-2" />
      </Card>
    );
  };

  return (
    <section id="skills" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-space font-bold text-center mb-4 gradient-text">
            Skills & Tools
          </h2>
          <p className="text-xl text-text-secondary text-center mb-16 max-w-2xl mx-auto">
            Crafting digital experiences with industry-standard tools and user-centered methodologies
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Design Tools */}
            <div className="animate-fade-up">
              <h3 className="text-2xl font-space font-semibold mb-8 text-text-primary flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-accent/20 flex items-center justify-center">
                  <PenTool className="w-4 h-4 text-accent" />
                </div>
                Design Tools
              </h3>
              <div className="space-y-4">
                {tools.map((tool, index) => (
                  <SkillCard key={tool.name} skill={tool} delay={index * 100} />
                ))}
              </div>
            </div>
            
            {/* Core Skills */}
            <div className="animate-fade-up">
              <h3 className="text-2xl font-space font-semibold mb-8 text-text-primary flex items-center gap-3">
                <div className="w-8 h-8 rounded-lg bg-primary/20 flex items-center justify-center">
                  <Lightbulb className="w-4 h-4 text-primary" />
                </div>
                Core Skills
              </h3>
              <div className="space-y-4">
                {coreSkills.map((skill, index) => (
                  <SkillCard key={skill.name} skill={skill} delay={(index + tools.length) * 100} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;