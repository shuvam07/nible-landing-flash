import { Button } from "@/components/ui/button";
import { Apple, Download, Smartphone } from "lucide-react";

const IOSInstall = () => {
  return (
    <section id="ios-install" className="py-24 bg-gradient-to-br from-hero-from via-hero-via to-hero-to relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary rounded-full mix-blend-overlay animate-pulse" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent rounded-full mix-blend-overlay animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-white/10 rounded-2xl mb-6">
              <Apple className="w-10 h-10 text-white" />
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-poppins font-bold text-white mb-6">
              Download Nible
              <span className="text-primary block">for iOS</span>
            </h2>
            
            <p className="text-xl text-white/80 font-inter mb-8 max-w-2xl mx-auto">
              Get instant access to AI-summarized news. Available now on the App Store for iPhone and iPad.
            </p>
          </div>

          {/* Download Button */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              size="lg"
              className="bg-white text-gray-900 hover:bg-white/90 font-inter font-semibold text-lg px-12 py-6 rounded-2xl"
              asChild
            >
              <a 
                href="https://apps.apple.com/app/nible" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center"
              >
                <Apple className="mr-3 h-6 w-6" />
                Download on App Store
                <Download className="ml-3 h-5 w-5" />
              </a>
            </Button>
          </div>

          {/* Requirements */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-white font-poppins font-semibold text-xl mb-4">
              System Requirements
            </h3>
            <div className="grid sm:grid-cols-2 gap-4 text-white/80 font-inter">
              <div className="flex items-center">
                <Smartphone className="w-5 h-5 mr-3 text-primary" />
                <span>iOS 14.0 or later</span>
              </div>
              <div className="flex items-center">
                <Download className="w-5 h-5 mr-3 text-primary" />
                <span>25MB download size</span>
              </div>
            </div>
            
            <div className="mt-6 pt-6 border-t border-white/20">
              <p className="text-white/60 text-sm font-inter">
                Compatible with iPhone, iPad, and iPod touch. Optimized for iPhone 12 Pro and later.
              </p>
            </div>
          </div>

          {/* Features Preview */}
          <div className="mt-16 grid sm:grid-cols-3 gap-8 text-center">
            <div className="text-white">
              <div className="w-12 h-12 bg-primary/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary font-bold text-xl">⚡</span>
              </div>
              <h4 className="font-poppins font-semibold mb-2">Instant Updates</h4>
              <p className="text-white/60 text-sm font-inter">Breaking news alerts delivered in real-time</p>
            </div>
            
            <div className="text-white">
              <div className="w-12 h-12 bg-accent/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-accent font-bold text-xl">🧠</span>
              </div>
              <h4 className="font-poppins font-semibold mb-2">Smart Summaries</h4>
              <p className="text-white/60 text-sm font-inter">AI-powered brevity without losing context</p>
            </div>
            
            <div className="text-white">
              <div className="w-12 h-12 bg-primary/20 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary font-bold text-xl">🔒</span>
              </div>
              <h4 className="font-poppins font-semibold mb-2">Privacy First</h4>
              <p className="text-white/60 text-sm font-inter">Your reading habits stay completely private</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IOSInstall;