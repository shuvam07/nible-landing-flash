import { Search, Sparkles, ArrowRight } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      number: "01",
      icon: Search,
      title: "Fetch & Rank",
      description: "Our intelligent system continuously scans trusted sources, using two-pointer logic to prioritize trending stories first, then other important news.",
      color: "primary"
    },
    {
      number: "02", 
      icon: Sparkles,
      title: "Summarize & Stack",
      description: "Advanced AI processes each story, creating concise summaries while preserving key facts. Stories are stacked in an intuitive, swipeable format.",
      color: "accent"
    },
    {
      number: "03",
      icon: ArrowRight, 
      title: "You Swipe, We Refresh",
      description: "Simply swipe to read the next story. Nible keeps your feed fresh with the latest developments as they happen around the world.",
      color: "primary"
    }
  ];

  return (
    <section id="how-it-works" className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-poppins font-bold text-foreground mb-6">
            How Nible
            <span className="text-primary block">works</span>
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            Three simple steps to transform how you consume news. Fast, smart, and effortless.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-12">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-primary/30 to-transparent z-0" />
                )}
                
                <div className="relative z-10 text-center lg:text-left">
                  {/* Step Number */}
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                    <span className="text-primary font-poppins font-bold text-lg">{step.number}</span>
                  </div>

                  {/* Icon */}
                  <div className={`inline-flex items-center justify-center w-20 h-20 rounded-2xl mb-6 mx-auto lg:mx-0 ${
                    step.color === 'primary' ? 'bg-primary/10' : 'bg-accent/10'
                  }`}>
                    <step.icon className={`w-10 h-10 ${
                      step.color === 'primary' ? 'text-primary' : 'text-accent'
                    }`} />
                  </div>

                  {/* Content */}
                  <h3 className="text-2xl font-poppins font-semibold text-foreground mb-4">
                    {step.title}
                  </h3>
                  
                  <p className="text-muted-foreground font-inter leading-relaxed max-w-sm mx-auto lg:mx-0">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Visual Flow Indicator */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-4 text-muted-foreground">
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse" />
              <div className="w-8 h-0.5 bg-primary/30" />
              <div className="w-3 h-3 bg-accent rounded-full animate-pulse delay-300" />
              <div className="w-8 h-0.5 bg-primary/30" />
              <div className="w-3 h-3 bg-primary rounded-full animate-pulse delay-700" />
            </div>
            <p className="text-sm font-inter text-muted-foreground mt-4">
              Continuous flow of fresh, summarized news
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;