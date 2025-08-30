import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Palette, Calendar, MapPin } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
    {
      title: "Design Club Coordinator",
      organization: "National Institute of Technology Meghalaya",
      location: "Sohra, Meghalaya, India",
      period: "Nov 2023 - Present",
      type: "Leadership Role",
      description: "Leading a team of 15+ designers in organizing workshops, design competitions, and community events.",
      achievements: [
        "Organized 8+ design workshops with 20+ participants",
        "Increased club membership by 150% in one year",
        "Launched mentorship program connecting seniors with freshers",
        "Coordinated design thinking sessions for College Fest"
      ],
      skills: ["Team Leadership", "Event Management", "Workshop Planning", "Community Building"]
    },
    {
      title: "Graphic Designer",
      organization: "College Cultural Festival",
      location: "National Institute of Technology Meghalaya",
      period: "Jan 2025 - Apr 2025",
      type: "Freelance Project",
      description: "Created a visual identity and promotional materials for major college events and festivals.",
      achievements: [
        "Designed branding for TechFest 2024 (500+ attendees)",
        "Created 20+ posters, banners, and digital assets",
        "Developed ID card templates for multiple events",
        "Collaborated with 6 different event committees"
      ],
      skills: ["Graphic Design", "Brand Identity", "Print Design", "Digital Marketing"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-space font-bold text-center mb-4 gradient-text">
            Experience
          </h2>
          <p className="text-xl text-text-secondary text-center mb-16 max-w-2xl mx-auto">
            Gaining hands-on experience through leadership roles and creative projects
          </p>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <Card 
                key={exp.title} 
                className="p-8 card-interactive animate-fade-up"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <div className="flex flex-col lg:flex-row gap-6">
                  {/* Left Side - Main Info */}
                  <div className="lg:w-1/3">
                    <div className="flex items-start gap-4 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                        {index === 0 ? (
                          <Users className="w-6 h-6 text-primary" />
                        ) : (
                          <Palette className="w-6 h-6 text-accent" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-xl font-space font-semibold text-text-primary mb-1">
                          {exp.title}
                        </h3>
                        <p className="text-text-secondary font-medium">{exp.organization}</p>
                      </div>
                    </div>
                    
                    <div className="space-y-2 text-sm text-text-muted mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{exp.period}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <MapPin className="w-4 h-4" />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    
                    <Badge variant="secondary" className="mb-4">
                      {exp.type}
                    </Badge>
                    
                    <p className="text-text-secondary leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                  
                  {/* Right Side - Details */}
                  <div className="lg:w-2/3 space-y-6">
                    {/* Key Achievements */}
                    <div>
                      <h4 className="font-space font-semibold text-text-primary mb-3">
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex} className="flex items-start gap-3 text-text-secondary">
                            <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Skills Used */}
                    <div>
                      <h4 className="font-space font-semibold text-text-primary mb-3">
                        Skills Applied
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill) => (
                          <Badge 
                            key={skill} 
                            variant="outline" 
                            className="border-primary/20 text-primary"
                          >
                            {skill}
                          </Badge>
                        ))}
                      </div>
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

export default ExperienceSection;