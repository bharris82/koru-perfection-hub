import { Home, Blocks, Settings } from "lucide-react";

const Solution = () => {
  const products = [
    {
      icon: Home,
      title: "Personal Isolated Environment",
      description: "Your own private AI environment that learns from your personal documents, family photos, and knowledge. Perfect for health advice, family tutoring, and personal finance guidance.",
      gradient: "from-primary to-primary-bright",
      features: ["Health AI", "Family Tutor", "Financial Advisor", "100% Private"]
    },
    {
      icon: Blocks,
      title: "HelpBlocks.ai",
      description: "Pre-trained AI agents for specific tasks. Choose from tutors, help desk, life coaches, and more. Each block comes with built-in prompts and guided assistance.",
      gradient: "from-accent to-primary",
      features: ["Ready-to-use", "Specialized Agents", "Built-in Prompts", "Quick Setup"]
    },
    {
      icon: Settings,
      title: "AI Consulting Solutions",
      description: "Professional AI implementation using AnythingLLM, Open WebUI, and other LLM platforms. Custom solutions for businesses and organizations.",
      gradient: "from-primary-bright to-accent",
      features: ["AnythingLLM", "Open WebUI", "Custom Setup", "Enterprise Ready"]
    }
  ];

  return (
    <section className="py-20 px-6 relative" id="solution">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
      
      <div className="container mx-auto relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-display font-grotesk text-text-primary mb-6">
            Three AI Solutions for Your Needs
          </h2>
          <p className="text-body-large text-text-secondary max-w-3xl mx-auto">
            Choose the perfect AI solution for your situation. From personal environments to ready-made agents to enterprise consulting.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {products.map((product, index) => (
            <div 
              key={index}
              className="card-elegant p-8 rounded-2xl group hover:scale-105 transition-all duration-500 animate-fade-in relative overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
              
              <div className="relative">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${product.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform`}>
                  <div className="w-full h-full bg-background rounded-xl flex items-center justify-center">
                    <product.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-text-primary mb-4 font-grotesk">
                  {product.title}
                </h3>
                <p className="text-text-secondary leading-relaxed mb-6">
                  {product.description}
                </p>
                
                {/* Features list */}
                <div className="grid grid-cols-2 gap-2">
                  {product.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center text-sm text-text-secondary">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-2"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solution;