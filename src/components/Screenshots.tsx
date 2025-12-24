import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Screenshots = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const screenshots = [
    {
      title: "Feed Overview",
      description: "Clean, organized feed with latest-first sorting and category filters",
      image: "/api/placeholder/300/600"
    },
    {
      title: "Story Cards", 
      description: "AI-summarized news in beautiful, swipeable cards with key highlights",
      image: "/api/placeholder/300/600"
    },
    {
      title: "Categories",
      description: "Browse news by topic - Tech, Business, Sports, Politics, and more",
      image: "/api/placeholder/300/600"
    },
    {
      title: "Daily Digest",
      description: "Essential facts packaged in digestible cards for quick catch-ups",
      image: "/api/placeholder/300/600"
    },
    {
      title: "Offline Reading",
      description: "Download stories for offline access, perfect for commutes",
      image: "/api/placeholder/300/600"
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  return (
    <section id="screenshots" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-poppins font-bold text-foreground mb-6">
            See Nible in
            <span className="text-primary block">action</span>
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            Experience the clean, intuitive interface that makes staying informed a pleasure.
          </p>
        </div>

        {/* Mobile Carousel */}
        <div className="lg:hidden">
          <div className="relative max-w-xs mx-auto">
            <div className="overflow-hidden rounded-3xl">
              <div 
                className="flex transition-transform duration-300 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {screenshots.map((screenshot, index) => (
                  <div key={index} className="w-full flex-shrink-0">
                    <div className="aspect-[3/5] bg-gradient-to-b from-hero-from to-hero-to rounded-3xl p-4">
                      <div className="w-full h-full bg-hero-from/50 rounded-2xl flex items-center justify-center">
                        <div className="text-center p-6">
                          <div className="w-16 h-16 bg-primary/20 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                            <span className="text-primary font-bold text-xl">N</span>
                          </div>
                          <h3 className="text-white font-poppins font-semibold mb-2">{screenshot.title}</h3>
                          <p className="text-white/60 text-sm">{screenshot.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Navigation */}
            <div className="flex justify-between items-center mt-6">
              <Button 
                variant="outline" 
                size="icon"
                onClick={prevSlide}
                className="rounded-full"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <div className="flex space-x-2">
                {screenshots.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-2 h-2 rounded-full transition-colors ${
                      index === currentIndex ? 'bg-primary' : 'bg-muted'
                    }`}
                  />
                ))}
              </div>
              
              <Button 
                variant="outline" 
                size="icon"
                onClick={nextSlide}
                className="rounded-full"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Current Screenshot Info */}
          <div className="text-center mt-8">
            <h3 className="text-xl font-poppins font-semibold text-foreground mb-2">
              {screenshots[currentIndex].title}
            </h3>
            <p className="text-muted-foreground font-inter">
              {screenshots[currentIndex].description}
            </p>
          </div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden lg:block">
          <div className="grid lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
            {screenshots.map((screenshot, index) => (
              <div key={index} className="group">
                <div className="relative">
                  <div className="aspect-[3/5] bg-gradient-to-b from-hero-from to-hero-to rounded-3xl p-4 group-hover:scale-105 transition-transform duration-300">
                    <div className="w-full h-full bg-hero-from/50 rounded-2xl flex items-center justify-center">
                      <div className="text-center p-4">
                        <div className="w-12 h-12 bg-primary/20 rounded-xl mx-auto mb-3 flex items-center justify-center">
                          <span className="text-primary font-bold">N</span>
                        </div>
                        <h4 className="text-white font-poppins font-medium text-sm mb-1">{screenshot.title}</h4>
                        <p className="text-white/60 text-xs">{screenshot.description.split(',')[0]}</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center mt-4">
                  <h3 className="text-lg font-poppins font-semibold text-foreground mb-1">
                    {screenshot.title}
                  </h3>
                  <p className="text-sm text-muted-foreground font-inter">
                    {screenshot.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Feature Highlight */}
        <div className="mt-16 text-center">
          <div className="bg-primary/5 rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-poppins font-semibold text-foreground mb-4">
              Intuitive Design Meets Powerful AI
            </h3>
            <p className="text-muted-foreground font-inter mb-6">
              Every pixel is crafted for speed and clarity. Swipe through stories effortlessly, with AI-powered summaries that respect your time.
            </p>
            <Button 
              asChild
              className="bg-primary hover:bg-primary-hover text-primary-foreground"
            >
              <a href="#install">Experience It Yourself</a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Screenshots;