import { Lock, Target, Gem, Rocket } from "lucide-react";

const Solution = () => {
  const features = [
    {
      icon: Lock,
      title: "100% Private",
      description: "Your AI runs on YOUR servers or trusted hosting. Your data never trains someone else's model. Complete control over who accesses your knowledge.",
      gradient: "from-primary to-primary-bright"
    },
    {
      icon: Target,
      title: "Perfectly Personal",
      description: "AI trained on YOUR documents, YOUR expertise, YOUR values. Get answers that reflect your unique perspective and knowledge base.",
      gradient: "from-accent to-primary"
    },
    {
      icon: Gem,
      title: "Own Forever",
      description: "One-time setup, lifetime value. No monthly fees to Big Tech. Your AI assistant becomes a permanent asset for your family or business.",
      gradient: "from-primary-bright to-accent"
    },
    {
      icon: Rocket,
      title: "Easy Setup",
      description: "No coding required. We handle the technical complexity. You just provide your knowledge, and we build your personal AI.",
      gradient: "from-accent to-primary-muted"
    }
  ];

  return (
    <section className="py-20 px-6 relative" id="features">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
      
      <div className="container mx-auto relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-display font-grotesk text-text-primary mb-6">
            The Koru Solution
          </h2>
          <p className="text-body-large text-text-secondary max-w-3xl mx-auto">
            AI that belongs to you, not Big Tech. Imagine having an AI assistant that knows 
            YOUR business, YOUR family history, YOUR expertise — without sending a single byte 
            of data to Silicon Valley.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="card-elegant p-8 rounded-2xl group hover:scale-105 transition-all duration-500 animate-fade-in relative overflow-hidden"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-5 group-hover:opacity-10 transition-opacity`}></div>
              
              <div className="relative">
                <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-r ${feature.gradient} p-0.5 mb-6 group-hover:scale-110 transition-transform`}>
                  <div className="w-full h-full bg-background rounded-xl flex items-center justify-center">
                    <feature.icon className="w-7 h-7 text-primary" />
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-text-primary mb-4 font-grotesk">
                  {feature.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
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

export default Solution;