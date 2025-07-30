import { AlertTriangle, DollarSign, Ban } from "lucide-react";

const Problems = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Privacy Fears",
      description: "Family recipes, business secrets, and personal documents shared with ChatGPT become training data for everyone else.",
      color: "text-red-400"
    },
    {
      icon: DollarSign,
      title: "Endless Subscriptions",
      description: "Monthly fees that never end. Pay forever just to access YOUR own knowledge, with no guarantee of future pricing.",
      color: "text-yellow-400"
    },
    {
      icon: Ban,
      title: "Generic & Irrelevant",
      description: "AI that knows everything about the internet but nothing about your family's recipes, your business processes, or your teaching style.",
      color: "text-orange-400"
    }
  ];

  return (
    <section className="py-20 px-6" id="problems">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-display font-grotesk text-text-primary mb-6">
            Why Families Don't Use AI
          </h2>
          <p className="text-body-large text-text-secondary mb-8">
            Most people want AI help but avoid it because...
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="card-elegant p-8 rounded-2xl text-center group hover:scale-105 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-background-muted mb-6 group-hover:scale-110 transition-transform ${problem.color}`}>
                <problem.icon className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-4">
                {problem.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Problems;