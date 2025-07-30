import Navigation from "@/components/ui/navigation";

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="pt-20"></div>
      <div className="container mx-auto px-6 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-16">
            <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden border-4 border-primary">
              <img 
                src="/lovable-uploads/7fdeb2e2-4cc7-436b-8496-eefa399d2fe4.png" 
                alt="Barry - AI Independence Guide"
                className="w-full h-full object-cover"
              />
            </div>
            <h1 className="text-4xl md:text-5xl font-grotesk font-bold text-text-primary mb-4">
              About Barry
            </h1>
            <p className="text-xl text-primary font-semibold">
              Your AI Independence Guide
            </p>
          </div>

          {/* Main Content */}
          <div className="prose prose-lg max-w-none text-text-secondary space-y-8">
            <div className="bg-background-muted/30 rounded-xl p-8 border border-border">
              <p className="text-lg leading-relaxed">
                With over a decade in enterprise systems and two years specializing in local AI deployments, 
                I founded The Koru Project to solve a problem most people don't even know they have:
              </p>
              <p className="text-xl font-semibold text-text-primary mt-4">
                Your private conversations, business docs, and family memories shouldn't be training someone else's AI.
              </p>
            </div>

            <div>
              <p className="text-lg leading-relaxed">
                When I realized how much data was silently being absorbed by cloud-based tools, I knew there had to be a better way. 
                Now that local AI is powerful enough for real work, it's time to take control.
              </p>
            </div>

            {/* Why I Started Koru */}
            <div className="bg-background rounded-xl p-8 border border-border">
              <h2 className="text-2xl font-grotesk font-bold text-text-primary mb-6">
                Why I Started Koru
              </h2>
              <ul className="space-y-4 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  I saw families unknowingly feeding private info into ChatGPT.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  I watched small businesses struggle to afford tools that lock them into monthly fees.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary font-bold">•</span>
                  I wanted a solution that worked offline, respected your privacy, and could be owned, not rented.
                </li>
              </ul>
              <p className="text-lg mt-6 font-semibold text-text-primary">
                The Koru Project helps people set up their own private AI — running in their home or office, 
                fully trained on their knowledge, and completely in their control.
              </p>
            </div>

            {/* Background */}
            <div>
              <h2 className="text-2xl font-grotesk font-bold text-text-primary mb-6">
                My Background
              </h2>
              <ul className="space-y-3 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  10+ years designing and managing enterprise tech systems
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  2 years focused on local AI tools like Ollama, AnythingLLM, and OpenWebUI
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  Deep experience helping families, small businesses, and private practices with technology that fits their needs
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-primary">✓</span>
                  Passionate about privacy-first solutions and making AI accessible to non-technical users
                </li>
              </ul>
            </div>

            {/* Mission */}
            <div className="bg-primary/10 rounded-xl p-8 border border-primary/20 text-center">
              <h2 className="text-2xl font-grotesk font-bold text-text-primary mb-4">
                Mission
              </h2>
              <p className="text-xl font-semibold text-text-primary mb-2">
                Help 1,000 families and small businesses own their AI instead of renting it.
              </p>
              <p className="text-lg text-text-secondary">
                Because your data should work for you — not Big Tech.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;