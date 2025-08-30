import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { GraduationCap, Award, Calendar } from "lucide-react";

const EducationSection = () => {
  const education = [
    {
      degree: "Bachelor of Technology in Electronics and Communication",
      institution: "National Institute of Technology Meghalaya",
      period: "2022 - 2026",
      status: "Pursuing",
      gpa: "8.16/10",
      relevant: ["Embedded Systems", "Internet Of Things", "Wireless Communications", "Signal Processing", "Microcontrollers", "Digital Design"]
    }
  ];

  const certifications = [
    {
      title: "UI/UX Design Fundamentals",
      provider: "National Institute of Technology Meghalaya",
      date: "2024",
      type: "Course Workshop"
    },
    {
      title: "Figma Advanced Prototyping",
      provider: "Online Learning Platform",
      date: "2023",
      type: "Workshop"
    },
    {
      title: "Canva Design Essentials",
      provider: "Design Club",
      date: "2023",
      type: "Workshop"
    }
  ];

  return (
    <section id="education" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-space font-bold text-center mb-4 gradient-text">
            Education
          </h2>
          <p className="text-xl text-text-secondary text-center mb-16 max-w-2xl mx-auto">
            Building a strong foundation in technology and design through formal education and continuous learning
          </p>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Education */}
            <div className="lg:col-span-2 animate-fade-up">
              <Card className="p-8 card-interactive">
                <div className="flex items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <GraduationCap className="w-7 h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-space font-semibold text-text-primary mb-2">
                      {education[0].degree}
                    </h3>
                    <p className="text-lg text-text-secondary mb-2">{education[0].institution}</p>
                    <div className="flex items-center gap-4 text-text-muted mb-4">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-4 h-4" />
                        <span>{education[0].period}</span>
                      </div>
                      <Badge variant="secondary">{education[0].status}</Badge>
                      <span>CGPA: {education[0].gpa}</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h4 className="font-semibold text-text-primary mb-3">Relevant Coursework:</h4>
                  <div className="flex flex-wrap gap-2">
                    {education[0].relevant.map((course) => (
                      <Badge key={course} variant="outline" className="border-primary/20 text-primary">
                        {course}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
            
            {/* Certifications */}
            <div className="animate-fade-up" style={{ animationDelay: '200ms' }}>
              <h3 className="text-2xl font-space font-semibold mb-6 text-text-primary flex items-center gap-3">
                <Award className="w-6 h-6 text-accent" />
                Certifications
              </h3>
              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <Card key={cert.title} className="p-6 card-interactive">
                    <h4 className="font-space font-semibold text-text-primary mb-2">
                      {cert.title}
                    </h4>
                    <p className="text-text-secondary text-sm mb-2">{cert.provider}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-text-muted text-xs">{cert.date}</span>
                      <Badge variant="secondary" className="text-xs">
                        {cert.type}
                      </Badge>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;