import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
// Removed HowItWorks section from page

import IOSInstall from "@/components/IOSInstall";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      {/* HowItWorks removed */}
      <IOSInstall />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
