import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import AnimatedTitle from "@/components/ui/animated-title";
import ConsultationForm from "@/components/consultation-form";
import { ArrowRight, Shield, Zap } from "lucide-react";


const Hero = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center justify-center px-6 py-20">
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
          <h1 className="text-hero font-grotesk bg-gradient-to-r from-text-primary via-primary to-accent bg-clip-text text-transparent leading-tight">
            Your Own Private AI
            <br />
            <span className="text-text-secondary">Isolated & Secure</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-body-large text-text-secondary max-w-2xl mx-auto leading-relaxed">
            Get your own LLM running in an isolated environment. Trained on your knowledge, owned by you forever.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <ConsultationForm 
              triggerButton={
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary-bright text-primary-foreground px-8 py-4 text-lg font-semibold glow-primary group"
                >
                  Get Your Isolated LLM Setup
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              }
            />
            <Dialog>
              <DialogTrigger asChild>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-4 text-lg"
                >
                  <Zap className="mr-2 w-5 h-5" />
                  See How It Works
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl w-full">
                <img 
                  src="/lovable-uploads/d443aa79-c23a-4460-ac96-131c7e33a44a.png" 
                  alt="How It Works - 3 Step Process" 
                  className="w-full h-auto"
                />
              </DialogContent>
            </Dialog>
          </div>
          
          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 pt-12 text-center">
            <div className="space-y-1">
              <div className="text-2xl font-bold text-primary">100%</div>
              <div className="text-sm text-text-muted">Private & Isolated</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-primary">2-3</div>
              <div className="text-sm text-text-muted">Weeks Setup</div>
            </div>
            <div className="space-y-1">
              <div className="text-2xl font-bold text-primary">24/7</div>
              <div className="text-sm text-text-muted">Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;