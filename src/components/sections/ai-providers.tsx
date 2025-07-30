const AIProviders = () => {
  const providers = [
    { name: "Ollama", logo: "🦙" },
    { name: "OpenAI", logo: "🤖" },
    { name: "Anthropic", logo: "🧠" },
    { name: "Meta AI", logo: "🔷" },
    { name: "Google", logo: "🔍" },
    { name: "Mistral", logo: "🌪️" },
    { name: "Cohere", logo: "🎯" },
    { name: "Hugging Face", logo: "🤗" }
  ];

  return (
    <section className="py-16 px-6 bg-background-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-heading font-grotesk text-text-primary mb-4">
            Works With All Major AI Providers
          </h2>
          <p className="text-body text-text-secondary max-w-2xl mx-auto">
            Choose from the best AI models and providers. Your private setup supports them all.
          </p>
        </div>
        
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll-x space-x-8">
            {[...providers, ...providers].map((provider, index) => (
              <div
                key={index}
                className="flex-shrink-0 flex items-center space-x-3 px-6 py-4 bg-background rounded-xl border border-border hover:border-primary/30 transition-colors"
              >
                <span className="text-2xl">{provider.logo}</span>
                <span className="text-lg font-medium text-text-primary whitespace-nowrap">
                  {provider.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIProviders;