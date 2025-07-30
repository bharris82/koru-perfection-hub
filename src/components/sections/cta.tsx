import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-20 px-6 relative" id="contact">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-background to-accent/10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(34,197,94,0.1),transparent_50%)]"></div>
      
      <div className="container mx-auto relative">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <h2 className="text-display font-grotesk text-text-primary leading-tight">
            Ready for Your Family's Digital Wisdom Keeper?
          </h2>
          <p className="text-body-large text-text-secondary max-w-2xl mx-auto">
            Transform your knowledge, recipes, and expertise into a personal AI assistant. 
            Private, permanent, and trained on what matters to YOU.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-6">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary-bright text-primary-foreground px-8 py-4 text-lg font-semibold glow-primary group animate-glow-pulse"
            >
              <Mail className="mr-2 w-5 h-5" />
              Get Your Personal AI
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-4 text-lg"
            >
              Discuss Your Project
            </Button>
          </div>
          
          {/* Trust Indicators */}
          <div className="pt-12 border-t border-border/30">
            <p className="text-text-muted text-sm mb-4">Trusted by forward-thinking organizations</p>
            <div className="flex flex-wrap justify-center gap-8 items-center opacity-60">
              <div className="text-text-muted font-semibold">100% Private</div>
              <div className="w-2 h-2 bg-primary/50 rounded-full"></div>
              <div className="text-text-muted font-semibold">2-3 Week Delivery</div>
              <div className="w-2 h-2 bg-primary/50 rounded-full"></div>
              <div className="text-text-muted font-semibold">Yours Forever</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;