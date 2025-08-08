import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import AppScreenshots from "@/components/AppScreenshots";

import IOSInstall from "@/components/IOSInstall";
import Newsletter from "@/components/Newsletter";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <HowItWorks />
      <AppScreenshots />
      
      <IOSInstall />
      <Newsletter />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
