import { Button } from "@/components/ui/button";

const Navigation = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <a href="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">K</span>
            </div>
            <span className="text-xl font-grotesk font-bold text-text-primary">
              The Koru Project
            </span>
          </a>
          
          <div className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-text-secondary hover:text-text-primary transition-colors">
              About
            </a>
          <a href="#features" className="text-text-secondary hover:text-text-primary transition-colors">
            Features
          </a>
          <a href="#how-it-works" className="text-text-secondary hover:text-text-primary transition-colors">
            How It Works
          </a>
          <a href="#contact" className="text-text-secondary hover:text-text-primary transition-colors">
            Contact
          </a>
          </div>
          
          <div className="hidden md:flex items-center">
            <a href="/about" className="text-text-secondary hover:text-text-primary transition-colors mr-4">
              Founder's Mission
            </a>
          </div>
          
          
          <div className="flex items-center space-x-4">
            <a href="#contact">
              <Button className="bg-primary hover:bg-primary-bright text-primary-foreground">
                Get Started
              </Button>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;