import Navigation from "@/components/ui/navigation";
import Footer from "@/components/sections/footer";
import { Users, Heart, Zap, Target, Globe, Coffee } from "lucide-react";

const Careers = () => {
  const values = [
    {
      icon: Heart,
      title: "Privacy First",
      description: "We believe everyone deserves control over their data and AI interactions. Privacy isn't optional—it's fundamental."
    },
    {
      icon: Zap,
      title: "Innovation & Impact",
      description: "We're building the future of personal AI, helping people reclaim their digital independence one setup at a time."
    },
    {
      icon: Users,
      title: "People-Centered",
      description: "Technology should serve people, not the other way around. We design solutions that empower individuals and families."
    },
    {
      icon: Target,
      title: "Excellence",
      description: "We're passionate about delivering exceptional experiences and helping people achieve true AI independence."
    }
  ];

  const benefits = [
    "Competitive salary and equity",
    "Remote-first culture with flexible hours",
    "Health, dental, and vision coverage",
    "Professional development budget",
    "Latest equipment and tools",
    "Unlimited PTO policy",
    "Company retreats and team building",
    "Work on meaningful, privacy-focused technology"
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="container mx-auto px-6 py-20 max-w-4xl">
        <div className="space-y-12">
          <div className="text-center space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary mb-4">
              <Users className="w-4 h-4" />
              <span className="text-sm font-medium">Join Our Mission</span>
            </div>
            <h1 className="text-display font-grotesk text-text-primary">Careers at The Koru Project</h1>
            <p className="text-body-large text-text-secondary max-w-2xl mx-auto">
              Help us build a future where everyone owns their AI. We're looking for passionate people who believe in privacy, innovation, and human empowerment.
            </p>
          </div>

          {/* Mission Section */}
          <section className="text-center space-y-6">
            <h2 className="text-2xl font-semibold text-text-primary">Our Mission</h2>
            <p className="text-body text-text-secondary max-w-3xl mx-auto leading-relaxed">
              We're on a mission to democratize AI by helping individuals and families set up their own private AI systems. 
              In a world where big tech controls AI, we believe everyone deserves their own personal AI that learns from their knowledge, 
              respects their privacy, and works entirely for them.
            </p>
          </section>

          {/* Values */}
          <section className="space-y-8">
            <h2 className="text-2xl font-semibold text-text-primary text-center">Our Values</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div 
                  key={index}
                  className="card-elegant p-6 rounded-2xl group hover:scale-105 transition-all duration-300 animate-fade-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4 group-hover:scale-110 transition-transform">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-text-primary mb-3">
                    {value.title}
                  </h3>
                  <p className="text-text-secondary text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Benefits */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-text-primary text-center">Why Work With Us</h2>
            <div className="grid md:grid-cols-2 gap-4">
              {benefits.map((benefit, index) => (
                <div 
                  key={index}
                  className="flex items-center gap-3 p-4 rounded-lg bg-background-muted/50 hover:bg-background-muted transition-colors"
                >
                  <div className="w-2 h-2 bg-primary rounded-full flex-shrink-0"></div>
                  <span className="text-text-secondary">{benefit}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Current Status */}
          <section className="text-center space-y-6 py-12">
            <div className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent/10 border border-accent/20 text-accent">
              <Coffee className="w-5 h-5" />
              <span className="font-medium">Building Our Team</span>
            </div>
            <h2 className="text-2xl font-semibold text-text-primary">No Open Positions Right Now</h2>
            <p className="text-body text-text-secondary max-w-2xl mx-auto">
              We're currently focused on growing our business and refining our services. 
              While we don't have any open positions at the moment, we're always interested in connecting with talented people who share our vision.
            </p>
          </section>

          {/* Future Opportunities */}
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold text-text-primary text-center">Future Opportunities</h2>
            <p className="text-body text-text-secondary text-center max-w-2xl mx-auto mb-8">
              As we grow, we'll be looking for passionate individuals in these areas:
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Zap className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-text-primary">AI Engineering</h3>
                <p className="text-sm text-text-secondary">Help build and optimize private AI systems</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Users className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-text-primary">Customer Success</h3>
                <p className="text-sm text-text-secondary">Guide customers through their AI independence journey</p>
              </div>
              <div className="text-center space-y-3">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                  <Globe className="w-8 h-8 text-primary" />
                </div>
                <h3 className="font-semibold text-text-primary">Business Development</h3>
                <p className="text-sm text-text-secondary">Help us reach more people who need AI independence</p>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section className="text-center space-y-6 py-12 border-t border-border/30">
            <h2 className="text-2xl font-semibold text-text-primary">Stay Connected</h2>
            <p className="text-body text-text-secondary max-w-2xl mx-auto">
              Interested in joining our mission? We'd love to hear from you. Send us your resume and tell us why you're passionate about AI privacy and independence.
            </p>
            <div className="bg-background-muted p-6 rounded-lg max-w-md mx-auto">
              <p className="font-semibold text-text-primary mb-2">Get in Touch</p>
              <p className="text-text-secondary">Email: barryharris82@icloud.com</p>
              <p className="text-text-secondary">Subject: Career Interest - [Your Role/Area]</p>
              <p className="text-sm text-text-muted mt-3">
                Include your background and what excites you about private AI
              </p>
            </div>
          </section>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Careers;