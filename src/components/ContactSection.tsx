import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "@/hooks/use-toast";
import { Mail, Phone, MapPin, Linkedin, Github, Instagram } from "lucide-react";

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Please fill in all fields",
        description: "All fields are required to send your message.",
        variant: "destructive"
      });
      return;
    }

    // Simulate form submission
    toast({
      title: "Message sent successfully!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "botu.varun@gmail.com",
      href: "mailto:botu.varun@gmail.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7989644618",
      href: "tel:+91 7989644618"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Vishakapatnam, India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "www.linkedin.com/in/botu-varun-kumar-45b454275",
      color: "text-blue-600"
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/botuvarunkumar",
      color: "text-gray-800"
    },
    {
      icon: Instagram,
      label: "Instagram",
      href: "https://www.instagram.com/botuvarunkumar?igsh=dzd6dmN1ZzJnYzVi",
      color: "text-blue-500"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-surface">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-space font-bold text-center mb-4 gradient-text">
            Let's Connect
          </h2>
          <p className="text-xl text-text-secondary text-center mb-16 max-w-2xl mx-auto">
            Ready to bring your ideas to life? Let's discuss your next project and create something amazing together.
          </p>
          
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card className="p-8 card-interactive animate-fade-up">
              <h3 className="text-2xl font-space font-semibold mb-6 text-text-primary">
               Send me a message
              </h3>
              <div className="w-full">
                <iframe
                  src="https://docs.google.com/forms/d/e/1FAIpQLSdezEX-fN-GOIVdA6MT_BlAAqM60xOxujix7Hwsvi09jnBjCg/viewform?embedded=true"
                     width="100%"
                      height="600"
                     frameBorder="0"
                    marginHeight={0}
                    marginWidth={0}
                       title="Contact Form"
                    >
                          Loading…
                    </iframe>
                    </div>
                </Card>
            
            {/* Contact Info */}
            <div className="space-y-8 animate-fade-up" style={{ animationDelay: '200ms' }}>
              {/* Contact Details */}
              <Card className="p-8 card-interactive">
                <h3 className="text-2xl font-space font-semibold mb-6 text-text-primary">
                  Get in touch
                </h3>
                
                <div className="space-y-6">
                  {contactInfo.map((item) => {
                    const IconComponent = item.icon;
                    return (
                      <a
                        key={item.label}
                        href={item.href}
                        className="flex items-center gap-4 text-text-secondary hover:text-primary transition-colors group"
                      >
                        <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <IconComponent className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <div className="text-sm text-text-muted">{item.label}</div>
                          <div className="font-medium">{item.value}</div>
                        </div>
                      </a>
                    );
                  })}
                </div>
              </Card>
              
              {/* Social Links */}
              <Card className="p-8 card-interactive">
                <h3 className="text-2xl font-space font-semibold mb-6 text-text-primary">
                  Follow my work
                </h3>
                
                <div className="flex gap-4">
                  {socialLinks.map((social) => {
                    const IconComponent = social.icon;
                    return (
                      <a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
                        title={social.label}
                      >
                        <IconComponent className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
                
                <p className="text-text-muted text-sm mt-4">
                  Follow me on social media to see my latest work and design insights!
                </p>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;