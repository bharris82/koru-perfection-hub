import { Shield, Home, Cpu, Heart, GraduationCap, DollarSign } from "lucide-react";

const ProductsShowcase = () => {
  const features = [
    {
      icon: Heart,
      title: "Personal Health AI",
      description: "Your private health advisor that learns from your medical history, symptoms, and preferences.",
      gradient: "from-primary to-primary-bright"
    },
    {
      icon: GraduationCap,
      title: "Family Tutor AI",
      description: "Personalized tutoring for your children, adapting to their learning style and pace.",
      gradient: "from-accent to-primary"
    },
    {
      icon: DollarSign,
      title: "Financial Advisor AI",
      description: "Personal finance guidance based on your spending habits, goals, and financial situation.",
      gradient: "from-primary-bright to-accent"
    },
    {
      icon: Shield,
      title: "100% Private",
      description: "All AI solutions run in your isolated environment. Your personal data stays with you.",
      gradient: "from-accent to-primary-muted"
    }
  ];

  return (
    <section id="features" className="py-20 px-6 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-accent/5 via-transparent to-primary/5"></div>
      
      <div className="container mx-auto relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-display font-grotesk text-text-primary mb-6">
            Personal AI for Every Aspect of Life
          </h2>
          <p className="text-body-large text-text-secondary max-w-3xl mx-auto">
            Get AI assistants that truly understand you and your family. Trained on your personal data, completely private, and always available.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card-elegant p-6 rounded-2xl group hover:scale-105 transition-all duration-500 animate-fade-in text-center relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
              
              <div className="relative">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} p-0.5 mb-4 group-hover:scale-110 transition-transform`}>
                  <div className="w-full h-full bg-background rounded-xl flex items-center justify-center">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-text-primary mb-3 font-grotesk">
                  {feature.title}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;