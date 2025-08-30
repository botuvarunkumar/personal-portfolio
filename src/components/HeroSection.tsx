import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center animate-fade-up">
        <h1 className="text-5xl md:text-7xl font-space font-bold mb-6">
          Hi, I'm <span className="gradient-text">Botu Varun Kumar</span>
        </h1>
        <h2 className="text-6xl md:text-8xl font-space font-light mb-8 text-text-secondary">
          Aspiring UI/UX Designer
        </h2>
        <p className="text-xl md:text-2xl text-text-secondary max-w-3xl mx-auto mb-12 leading-relaxed">
          Designing user-friendly and engaging digital experiences that bridge creativity with functionality
        </p>
        
        <div className="flex flex-col sm:flex-row gap-6 justify-center mb-16">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-medium rounded-full shadow-soft hover:shadow-medium transition-all duration-300"
            onClick={() => scrollToSection('projects')}
          >
            View My Work
          </Button>
          <Button 
            variant="outline"
            size="lg" 
            className="border-2 border-primary text-primary hover:bg-primary hover:text-primary-foreground px-8 py-4 text-lg font-medium rounded-full transition-all duration-300"
            onClick={() => scrollToSection('contact')}
          >
            Contact Me
          </Button>
        </div>
        
        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <ChevronDown 
            className="w-8 h-8 text-text-muted mx-auto cursor-pointer hover:text-primary transition-colors"
            onClick={() => scrollToSection('about')}
          />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;