import { Upload, Cog, Cloud } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "1",
      icon: Upload,
      title: "Homeschool Families",
      description: "Upload lesson plans and teaching notes. Kids get a personal tutor trained on YOUR curriculum to help with math, science, and history.",
      color: "primary"
    },
    {
      number: "2", 
      icon: Cog,
      title: "Family Knowledge",
      description: "Grandma's recipes become an AI cooking assistant. Family stories and photos create a 'digital ancestor' future generations can chat with.",
      color: "accent"
    },
    {
      number: "3",
      icon: Cloud,
      title: "Small Businesses",
      description: "Restaurant procedures become staff training AI. Auto shop knowledge becomes customer explanation tool. Always available, never forgets.",
      color: "primary-bright"
    }
  ];

  return (
    <section className="py-20 px-6" id="how-it-works">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-display font-grotesk text-text-primary mb-6">
            Real-World Examples
          </h2>
          <p className="text-body-large text-text-secondary max-w-2xl mx-auto">
            See how families and small businesses use their personal AI
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {steps.map((step, index) => (
              <div 
                key={index}
                className="flex flex-col md:flex-row items-center gap-8 group animate-fade-in"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Step Number & Icon */}
                <div className="flex-shrink-0 relative">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-r from-primary to-accent p-0.5 group-hover:scale-110 transition-transform">
                    <div className="w-full h-full bg-background rounded-full flex items-center justify-center relative">
                      <step.icon className="w-10 h-10 text-primary" />
                      <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                        {step.number}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Content */}
                <div className="flex-1 text-center md:text-left">
                  <h3 className="text-2xl font-bold text-text-primary mb-4 font-grotesk">
                    {step.title}
                  </h3>
                  <p className="text-text-secondary text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
                
                {/* Connector Line */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute left-12 mt-24 w-0.5 h-12 bg-gradient-to-b from-primary to-transparent opacity-30"></div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;