import { Bot, Monitor, Car, Heart, DollarSign, GraduationCap, Lightbulb, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const HelpBlocks = () => {
  const agents = [
    {
      icon: GraduationCap,
      name: "Math Tutor",
      description: "Step-by-step math help from elementary to calculus",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Monitor,
      name: "PC Help Desk",
      description: "Computer troubleshooting and tech support",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Car,
      name: "Car Helper",
      description: "Vehicle maintenance and repair guidance",
      color: "from-red-500 to-red-600"
    },
    {
      icon: Heart,
      name: "Life Coach",
      description: "Personal development and goal achievement",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: DollarSign,
      name: "Financial Advisor",
      description: "Budget planning and investment guidance",
      color: "from-yellow-500 to-yellow-600"
    },
    {
      icon: Lightbulb,
      name: "Creative Assistant",
      description: "Writing, brainstorming, and creative projects",
      color: "from-pink-500 to-pink-600"
    },
    {
      icon: Users,
      name: "Relationship Coach",
      description: "Communication and relationship advice",
      color: "from-indigo-500 to-indigo-600"
    },
    {
      icon: Bot,
      name: "Study Buddy",
      description: "Learning companion with built-in study techniques",
      color: "from-teal-500 to-teal-600"
    }
  ];

  return (
    <section className="py-20 px-6 relative" id="helpblocks">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-transparent to-accent/5"></div>
      
      <div className="container mx-auto relative">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-display font-grotesk text-text-primary mb-6">
            HelpBlocks.ai
          </h2>
          <p className="text-body-large text-text-secondary max-w-3xl mx-auto mb-8">
            Choose from pre-trained AI agents designed for specific tasks. Each block comes with built-in prompts, guided help, and specialized knowledge.
          </p>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-primary/30 text-primary hover:bg-primary/10"
          >
            Coming Soon - Join Waitlist
          </Button>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
          {agents.map((agent, index) => (
            <div 
              key={index}
              className="card-elegant p-6 rounded-2xl group hover:scale-105 transition-all duration-500 animate-fade-in text-center relative overflow-hidden cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${agent.color} opacity-5 group-hover:opacity-15 transition-opacity`}></div>
              
              <div className="relative">
                <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-r ${agent.color} p-0.5 mb-4 group-hover:scale-110 transition-transform`}>
                  <div className="w-full h-full bg-background rounded-xl flex items-center justify-center">
                    <agent.icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                
                <h3 className="text-lg font-bold text-text-primary mb-3 font-grotesk">
                  {agent.name}
                </h3>
                <p className="text-text-secondary text-sm leading-relaxed">
                  {agent.description}
                </p>
                
                {/* Block indicator */}
                <div className="mt-4 text-xs text-text-muted">
                  🔧 Ready-to-use agent
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <p className="text-text-secondary">
            And many more specialized agents for every need...
          </p>
        </div>
      </div>
    </section>
  );
};

export default HelpBlocks;