import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const AppScreenshots = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // You can replace these with the actual app screenshots uploaded by the user
  const screenshots = [
    {
      id: 1,
      title: "Clean News Feed",
      description: "Latest-first feed with AI summaries",
      image: "/placeholder.svg" // Replace with actual screenshot
    },
    {
      id: 2,
      title: "Story Details",
      description: "Swipeable briefs with key insights",
      image: "/placeholder.svg" // Replace with actual screenshot
    },
    {
      id: 3,
      title: "Daily Digest",
      description: "Curated daily overview cards",
      image: "/placeholder.svg" // Replace with actual screenshot
    },
    {
      id: 4,
      title: "Offline Reading",
      description: "Download stories for later",
      image: "/placeholder.svg" // Replace with actual screenshot
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % screenshots.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + screenshots.length) % screenshots.length);
  };

  // Auto-advance slides
  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="screenshots" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-poppins font-bold text-foreground mb-6">
            See Nible in
            <span className="text-primary block">action</span>
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            Experience the clean, intuitive interface designed for speed and clarity.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Screenshot Display */}
            <div className="relative h-[600px] bg-gradient-to-br from-hero-from to-hero-via rounded-3xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-80 h-[540px] bg-gradient-to-b from-gray-800 to-gray-900 rounded-[2.5rem] p-2">
                  <div className="w-full h-full bg-background rounded-[2rem] overflow-hidden">
                    <img 
                      src={screenshots[currentSlide].image}
                      alt={screenshots[currentSlide].title}
                      className="w-full h-full object-cover transition-opacity duration-500"
                    />
                  </div>
                </div>
              </div>

              {/* Navigation Arrows */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20"
                onClick={prevSlide}
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 border-white/20 text-white hover:bg-white/20"
                onClick={nextSlide}
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Screenshot Info */}
            <div className="mt-8 text-center">
              <h3 className="text-2xl font-poppins font-semibold text-foreground mb-2">
                {screenshots[currentSlide].title}
              </h3>
              <p className="text-muted-foreground font-inter">
                {screenshots[currentSlide].description}
              </p>
            </div>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-6 space-x-2">
              {screenshots.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-primary' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                  onClick={() => setCurrentSlide(index)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppScreenshots;