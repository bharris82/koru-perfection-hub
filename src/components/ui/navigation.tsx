import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navigation = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleNavClick = (sectionId: string) => {
    if (isHomePage) {
      document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.href = `/#${sectionId}`;
    }
    setIsMobileMenuOpen(false);
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
            <button onClick={() => handleNavClick('about')} className="text-text-secondary hover:text-text-primary transition-colors">
              About
            </button>
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
            <div className="hidden md:block">
              <button onClick={() => handleNavClick('contact')}>
                <Button className="bg-primary hover:bg-primary-bright text-primary-foreground">
                  Get Started
                </Button>
              </button>
            </div>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 text-text-secondary hover:text-text-primary transition-colors"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border">
            <div className="flex flex-col space-y-4 pt-4">
              <button onClick={() => handleNavClick('about')} className="text-left text-text-secondary hover:text-text-primary transition-colors">
                About
              </button>
              <button onClick={() => handleNavClick('features')} className="text-left text-text-secondary hover:text-text-primary transition-colors">
                Features
              </button>
              <button onClick={() => handleNavClick('solution')} className="text-left text-text-secondary hover:text-text-primary transition-colors">
                Solution
              </button>
              <button onClick={() => handleNavClick('how-it-works')} className="text-left text-text-secondary hover:text-text-primary transition-colors">
                How It Works
              </button>
              <button onClick={() => handleNavClick('contact')} className="text-left text-text-secondary hover:text-text-primary transition-colors">
                Contact
              </button>
              <Link to="/about" className="text-left text-text-secondary hover:text-text-primary transition-colors">
                Founder's Mission
              </Link>
              <button onClick={() => handleNavClick('contact')} className="text-left">
                <Button className="bg-primary hover:bg-primary-bright text-primary-foreground w-full">
                  Get Started
                </Button>
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;