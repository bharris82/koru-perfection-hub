import { AlertTriangle, DollarSign, Ban } from "lucide-react";

const Problems = () => {
  const problems = [
    {
      icon: AlertTriangle,
      title: "Your Data Leaves",
      description: "Your personal knowledge, business secrets, and family memories become training data for Big Tech's models.",
      color: "text-red-400"
    },
    {
      icon: DollarSign,
      title: "You Keep Paying",
      description: "Monthly subscriptions that never end, with prices that only go up. You rent access, never own anything.",
      color: "text-yellow-400"
    },
    {
      icon: Ban,
      title: "Generic Answers",
      description: "AI that knows everything about the internet but nothing about YOUR specific needs, values, or expertise.",
      color: "text-orange-400"
    }
  ];

  return (
    <section className="py-20 px-6" id="problems">
      <div className="container mx-auto">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-display font-grotesk text-text-primary mb-6">
            The Problem With Today's AI
          </h2>
          <p className="text-body-large text-text-secondary mb-8">
            Every time you use ChatGPT, Google AI, or Claude...
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