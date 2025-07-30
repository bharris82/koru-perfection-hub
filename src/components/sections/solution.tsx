import { Lock, Target, Gem, Rocket } from "lucide-react";

const Solution = () => {
  const features = [
    {
      icon: Lock,
      title: "Completely Private",
      description: "Runs locally on your hardware. Your data never leaves your location. No cloud servers, no data sharing.",
      gradient: "from-primary to-primary-bright"
    },
    {
      icon: Target,
      title: "Trained on YOUR Knowledge",
      description: "Upload your documents, photos, and files. AI learns only from your materials - nothing from the internet.",
      gradient: "from-accent to-primary"
    },
    {
      icon: Rocket,
      title: "Professional Setup",
      description: "We handle all the technical work. Hardware recommendation, installation, training, and handoff.",
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
            Your Own Private AI Setup
          </h2>
          <p className="text-body-large text-text-secondary max-w-3xl mx-auto">
            We set up your own private AI that runs in your home or office. It learns from YOUR documents, photos, and knowledge - and stays completely private.
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