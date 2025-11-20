import { useEffect, useMemo, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Smartphone, Zap, Instagram } from "lucide-react";
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
        '/images/nible/5.png',
        '/images/nible/1.png',
        '/images/nible/2.png',
        '/images/nible/4.png',
        '/images/nible/3.png',
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
                "h-2 w-2 rounded-full " + (i === index ? "bg-primary" : "bg-primary/40")
              }
            />
          ))}
        </div>
      </div>
    );
  };
  const handleNewsletterSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      const response = await fetch('https://api.nible.news/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ 
          email: email
        })
      });
      
      if (response.ok) {
        toast({
          title: "Welcome to Nible Newsletter!",
          description: "You'll receive your daily news brief every morning."
        });
        setEmail("");
      } else {
        toast({
          title: "Subscription failed",
          description: "Please check your email and try again.",
          variant: "destructive"
        });
      }
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
                <span className="text-accent font-inter font-medium text-base">Latest‑first • Ad-free</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-poppins font-bold text-foreground mb-6 leading-tight">
                Fresh news.
                <span className="text-primary block">Fast reads.</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-foreground/80 font-inter mb-8 max-w-2xl mx-auto lg:mx-0">
                Swipe through concise, Ad-free briefs—updated all day.
              </p>

              <p className="text-lg text-foreground/70 font-inter mb-12 max-w-xl mx-auto lg:mx-0">
                No fluff. Just what matters.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
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
                <span className="inline-flex items-center bg-primary/10 backdrop-blur-sm text-foreground font-inter text-sm px-4 py-2 rounded-full border border-primary/20">
                  🤖 Android coming soon
                </span>
              </div>

              {/* Newsletter Subscription */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto lg:mx-0 border border-primary/20 shadow-lg">
                <h3 className="text-foreground font-inter font-semibold text-lg mb-2">
                  📬 Subscribe to Daily Newsletter
                </h3>
                <p className="text-foreground/70 font-inter text-sm mb-4">
                  Get short news briefs delivered to your inbox every morning
                </p>
                <form onSubmit={handleNewsletterSubscribe} className="flex gap-3">
                  <Input 
                    type="email" 
                    placeholder="Enter your email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)} 
                    className="bg-white border-border text-foreground placeholder:text-muted-foreground focus:border-primary" 
                    required 
                  />
                  <Button type="submit" className="bg-primary hover:bg-primary-hover text-primary-foreground px-6">
                    Subscribe
                  </Button>
                </form>
              </div>

              {/* Social Media */}
              <div className="mt-6 text-center lg:text-left">
                <p className="text-foreground/70 font-inter text-sm mb-3">
                  Follow us for daily news updates
                </p>
                <a 
                  href="https://www.instagram.com/nible.news/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-white text-primary hover:bg-primary hover:text-white px-4 py-2 rounded-full font-inter text-sm transition-all duration-200 hover:scale-105 border border-primary/30 shadow-sm"
                >
                  <Instagram className="w-4 h-4" />
                  Follow on Instagram
                </a>
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