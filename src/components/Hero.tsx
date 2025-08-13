import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Smartphone, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import AppStoreBadge from "@/assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg";

const Hero = () => {
  const [email, setEmail] = useState("");
  const {
    toast
  } = useToast();
  
  // Local carousel component for screenshots
  const Carousel = () => {
    const images = useMemo(
      () => [
        '/images/nible/5.jpeg',
        '/images/nible/1.jpeg',
        '/images/nible/2.jpeg',
        '/images/nible/4.jpeg',
        '/images/nible/3.jpeg',
      ],
      []
    );
    const [index, setIndex] = useState(0);
    
    useEffect(() => {
      const id = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 1200);
      return () => clearInterval(id);
    }, [images.length]);
    
    return (
      <div className="relative w-full overflow-hidden rounded-2xl bg-white/10">
        <div
          className="flex transition-transform duration-700 ease-out"
          style={{ transform: `translateX(-${index * 100}%)` }}
        >
          {images.map((src) => (
            <div key={src} className="min-w-full">
              <img
                src={src}
                alt="Nible screenshot"
                className="w-full h-auto block"
                loading="lazy"
              />
            </div>
          ))}
        </div>
        {/* Dots */}
        <div className="absolute bottom-3 left-0 right-0 flex justify-center gap-2">
          {images.map((_, i) => (
            <span
              key={i}
              className={
                "h-2 w-2 rounded-full " + (i === index ? "bg-white" : "bg-white/40")
              }
            />
          ))}
        </div>
      </div>
    );
  };
  const handleAndroidWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Placeholder for API call
    try {
      // await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email }) });
      toast({
        title: "Thanks for joining!",
        description: "We'll notify you when Nible launches on Android."
      });
      setEmail("");
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive"
      });
    }
  };
  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-hero-from via-hero-via to-hero-to" />
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary rounded-full mix-blend-overlay animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-accent rounded-full mix-blend-overlay animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 pt-16">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div className="text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start mb-6">
                <Zap className="w-5 h-5 text-accent mr-2" />
                <span className="text-accent font-inter font-medium text-base">Latest‑first • AI summarized</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-poppins font-bold text-white mb-6 leading-tight">
                Fresh news.
                <span className="text-primary block">Fast reads.</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-white/80 font-inter mb-8 max-w-2xl mx-auto lg:mx-0">
                Swipe through concise, AI‑crafted briefs—updated all day.
              </p>

              <p className="text-lg text-white/70 font-inter mb-12 max-w-xl mx-auto lg:mx-0">
                No fluff. Just what matters.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <a
                  href="https://apps.apple.com/in/app/nible-news/id6748324981"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={AppStoreBadge}
                    alt="Download on the App Store"
                    className="h-12"
                  />
                </a>
              </div>

              {/* Android Waitlist */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto lg:mx-0">
                <h3 className="text-white font-inter font-semibold text-lg mb-3">
                  Join Waitlist{' '}
                  <span className="font-normal text-sm text-white/80">
                    for Android
                  </span>
                </h3>
                <form onSubmit={handleAndroidWaitlist} className="flex gap-3">
                  <Input type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white" required />
                  <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground px-6">
                    Join
                  </Button>
                </form>
              </div>
            </div>

            {/* See Nible in action: auto carousel (smaller width) */}
            <div className="flex justify-center lg:justify-end">
              <div className="w-[240px] sm:w-[280px] md:w-[320px]">
                <Carousel />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;