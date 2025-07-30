const ProductsShowcase = () => {
  const products = [
    { name: "AnythingLLM", logo: "🤖" },
    { name: "OpenWeb UI", logo: "🌐" },
    { name: "Ollama", logo: "🦙" },
    { name: "HuggingFace", logo: "🤗" },
    { name: "NVIDIA", logo: "💚" },
    { name: "OpenAI", logo: "🧠" },
    { name: "Google Gemini", logo: "♊" },
    { name: "Claude", logo: "🎭" },
  ];

  return (
    <section id="features" className="py-12 bg-background-muted/30 overflow-hidden">
      <div className="container mx-auto px-6 mb-8">
        <div className="text-center">
          <h2 className="text-xl font-semibold text-text-primary mb-2">
            Trusted AI Technologies
          </h2>
          <p className="text-text-secondary text-sm">
            We work with leading AI platforms to give you the best private setup
          </p>
        </div>
      </div>
      
      <div className="relative">
        <div className="flex animate-scroll-left">
          {/* First set of products */}
          {products.map((product, index) => (
            <div
              key={`first-${index}`}
              className="flex-shrink-0 mx-8 flex items-center gap-3 px-6 py-3 bg-background rounded-lg border border-border/50 shadow-sm"
            >
              <span className="text-2xl">{product.logo}</span>
              <span className="text-text-primary font-medium whitespace-nowrap">
                {product.name}
              </span>
            </div>
          ))}
          
          {/* Duplicate set for seamless loop */}
          {products.map((product, index) => (
            <div
              key={`second-${index}`}
              className="flex-shrink-0 mx-8 flex items-center gap-3 px-6 py-3 bg-background rounded-lg border border-border/50 shadow-sm"
            >
              <span className="text-2xl">{product.logo}</span>
              <span className="text-text-primary font-medium whitespace-nowrap">
                {product.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;