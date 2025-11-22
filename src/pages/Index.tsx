import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ValueProposition from "@/components/ValueProposition";
import Features from "@/components/Features";
import IOSInstall from "@/components/IOSInstall";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <ValueProposition />
      <Features />
      <IOSInstall />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
