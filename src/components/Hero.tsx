import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Smartphone, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const Hero = () => {
  const [email, setEmail] = useState("");
  const {
    toast
  } = useToast();
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
                <Zap className="w-8 h-8 text-accent mr-3" />
                <span className="text-accent font-inter font-medium text-lg">Latest-first news</span>
              </div>
              
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-poppins font-bold text-white mb-6 leading-tight">
                News in a
                <span className="text-primary block">flash</span>
              </h1>
              
              <p className="text-xl sm:text-2xl text-white/80 font-inter mb-8 max-w-2xl mx-auto lg:mx-0">
                AI-summarized, latest-first, swipeable briefs.
              </p>

              <p className="text-lg text-white/60 font-inter mb-12 max-w-xl mx-auto lg:mx-0">
                Quick reads for busy minds.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12">
                <Button size="lg" className="bg-primary hover:bg-primary-hover text-primary-foreground font-inter font-semibold text-lg px-8 py-4" asChild>
                  
                </Button>
                
                <Button size="lg" variant="outline" className="border-white/20 text-white hover:bg-white/10 font-inter font-semibold text-lg px-8 py-4" asChild>
                  
                </Button>
              </div>

              {/* Android Waitlist */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 max-w-md mx-auto lg:mx-0">
                <h3 className="text-white font-inter font-semibold text-lg mb-3">
                  Join Waitlist
                </h3>
                <form onSubmit={handleAndroidWaitlist} className="flex gap-3">
                  <Input type="email" placeholder="Enter your email" value={email} onChange={e => setEmail(e.target.value)} className="bg-white/20 border-white/30 text-white placeholder:text-white/60 focus:border-white" required />
                  <Button type="submit" className="bg-accent hover:bg-accent/90 text-accent-foreground px-6">
                    Join
                  </Button>
                </form>
              </div>
            </div>

            {/* Device Mockup */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Phone Frame */}
                <div className="relative w-80 h-[640px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[3rem] p-3 shadow-2xl">
                  <div className="w-full h-full bg-hero-from rounded-[2.5rem] overflow-hidden relative">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center px-6 py-3 text-white text-sm">
                      <span>1:24</span>
                      <div className="flex items-center space-x-1">
                        <div className="flex space-x-1">
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                          <div className="w-1 h-1 bg-white rounded-full"></div>
                        </div>
                        <span className="ml-2">80%</span>
                      </div>
                    </div>
                    
                    {/* App Content Preview */}
                    <div className="px-4">
                      <div className="text-center mb-6">
                        <div className="w-16 h-16 bg-primary rounded-2xl mx-auto mb-4 flex items-center justify-center">
                          <span className="text-white font-bold text-xl">N</span>
                        </div>
                        <h2 className="text-white text-2xl font-poppins font-bold">Nible</h2>
                        <p className="text-white/60 text-sm mt-2">Quick reads for busy minds...</p>
                      </div>
                      
                      {/* News Card Preview */}
                      <div className="bg-white/10 rounded-xl p-4 mb-4">
                        <div className="flex justify-between items-center mb-2">
                          <span className="text-primary text-sm font-semibold">Tech</span>
                          <span className="text-white/60 text-xs">2h ago</span>
                        </div>
                        <h3 className="text-white text-sm font-semibold mb-2">
                          AI breakthrough changes everything
                        </h3>
                        <p className="text-white/80 text-xs leading-relaxed">
                          Latest developments in artificial intelligence are reshaping how we interact with technology...
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full animate-bounce delay-300" />
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full animate-bounce delay-700" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;