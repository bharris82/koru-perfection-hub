import Navigation from "@/components/ui/navigation";
import Hero from "@/components/sections/hero";
import Problems from "@/components/sections/problems";
import Solution from "@/components/sections/solution";
import HowItWorks from "@/components/sections/how-it-works";
import CTA from "@/components/sections/cta";
import Footer from "@/components/sections/footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Problems />
      <Solution />
      <HowItWorks />
      <CTA />
      <Footer />
    </div>
  );
};

export default Index;
