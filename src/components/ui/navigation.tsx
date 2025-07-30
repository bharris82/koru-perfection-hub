import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  const handleNavClick = (sectionId: string) => {
    if (isHomePage) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/#${sectionId}`;
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3 hover:opacity-80 transition-opacity">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">K</span>
            </div>
            <span className="text-xl font-grotesk font-bold text-text-primary">
              The Koru Project
            </span>
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/about" className="text-text-secondary hover:text-text-primary transition-colors">
              About
            </Link>
            <button onClick={() => handleNavClick('features')} className="text-text-secondary hover:text-text-primary transition-colors">
              Features
            </button>
            <button onClick={() => handleNavClick('solution')} className="text-text-secondary hover:text-text-primary transition-colors">
              Solution
            </button>
            <button onClick={() => handleNavClick('how-it-works')} className="text-text-secondary hover:text-text-primary transition-colors">
              How It Works
            </button>
            <button onClick={() => handleNavClick('contact')} className="text-text-secondary hover:text-text-primary transition-colors">
              Contact
            </button>
          </div>
          
          <div className="hidden md:flex items-center">
            <Link to="/about" className="text-text-secondary hover:text-text-primary transition-colors mr-4">
              Founder's Mission
            </Link>
          </div>
          
          <div className="flex items-center space-x-4">
            <button onClick={() => handleNavClick('contact')}>
              <Button className="bg-primary hover:bg-primary-bright text-primary-foreground">
                Get Started
              </Button>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;