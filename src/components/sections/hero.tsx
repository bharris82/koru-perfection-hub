import { Button } from "@/components/ui/button";
import AnimatedTitle from "@/components/ui/animated-title";
import { ArrowRight, Shield, Zap } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 py-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-accent/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8 animate-fade-in-up">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary">
            <Shield className="w-4 h-4" />
            <span className="text-sm font-medium">100% Private & Secure</span>
          </div>
          
          {/* Main Heading */}
          <AnimatedTitle
            staticText="Your Knowledge."
            phrases={[
              "Your AI.",
              "Your Privacy.",
              "Your Control.",
              "Your Future.",
              "Your Power."
            ]}
            className="text-hero font-grotesk bg-gradient-to-r from-text-primary via-primary to-accent bg-clip-text text-transparent leading-tight"
          />
          
          {/* Subheading */}
          <p className="text-body-large text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Personal AI assistants trained on <em className="text-primary font-medium">your</em> knowledge — 
            perfect for families, tutors, and small businesses. Private, permanent, and personal.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-bright text-primary-foreground px-8 py-4 text-lg font-semibold glow-primary group"
            >
              Get Your Personal AI
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-4 text-lg"
            >
              <Zap className="mr-2 w-5 h-5" />
              See Real Examples
            </Button>
          </div>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 pt-12 text-center">
            <div className="space-y-1">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-text-muted">Private</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-primary">2-3</div>
              <div className="text-sm text-text-muted">Weeks Delivery</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-primary">∞</div>
              <div className="text-sm text-text-muted">Yours Forever</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;