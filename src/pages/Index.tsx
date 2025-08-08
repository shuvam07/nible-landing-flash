import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Screenshots from "@/components/Screenshots";
import Testimonials from "@/components/Testimonials";
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
      <Screenshots />
      <Testimonials />
      <IOSInstall />
      <Newsletter />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
