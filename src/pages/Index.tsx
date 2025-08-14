import Navigation from "@/components/ui/navigation";
import Hero from "@/components/sections/hero";
import ProductsShowcase from "@/components/sections/products-showcase";
import Solution from "@/components/sections/solution";
import HelpBlocks from "@/components/sections/helpblocks";
import AIProviders from "@/components/sections/ai-providers";
import Problems from "@/components/sections/problems";
import HowItWorks from "@/components/sections/how-it-works";
import CTA from "@/components/sections/cta";
import Footer from "@/components/sections/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <ProductsShowcase />
      <Solution />
      <HelpBlocks />
      <AIProviders />
      <Problems />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
