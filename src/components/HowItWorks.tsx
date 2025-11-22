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
    <section id="how-it-works" className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-gradient-to-r from-primary to-accent" />
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold tracking-tight text-foreground mb-4">
            How Nible Works
          </h2>
          <p className="text-lg text-muted-foreground font-inter">
            Get the news that matters, delivered in seconds. No ads, no clutter, just the facts.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="relative text-center"
              >
                {/* Step Number */}
                <div className="mb-6 flex justify-center">
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl" />
                    <div className={`relative w-20 h-20 rounded-full flex items-center justify-center ${
                      step.color === "primary" 
                        ? "bg-gradient-to-br from-primary to-primary/80" 
                        : "bg-gradient-to-br from-accent to-accent/80"
                    }`}>
                      <span className="text-2xl font-poppins font-bold text-white">{step.number}</span>
                    </div>
                  </div>
                </div>

                {/* Icon */}
                <div className="mb-4 flex justify-center">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center ${
                    step.color === "primary" 
                      ? "bg-primary/10" 
                      : "bg-accent/10"
                  }`}>
                    <Icon className={`w-8 h-8 ${
                      step.color === "primary" 
                        ? "text-primary" 
                        : "text-accent"
                    }`} />
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-xl font-poppins font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground font-inter leading-relaxed">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;