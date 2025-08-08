import { Clock, Brain, Layers, Wifi, Shield, Zap } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Clock,
      title: "Latest-First Feed",
      description: "Two-pointer logic ensures trending stories appear first, followed by other important news. Never miss breaking developments."
    },
    {
      icon: Brain,
      title: "Smart AI Summaries", 
      description: "Advanced AI distills complex stories into clear, concise briefs. Get the essential facts without the fluff."
    },
    {
      icon: Layers,
      title: "Daily Digest Cards",
      description: "Key facts and insights packaged in beautiful, digestible cards. Perfect for catching up during your commute."
    },
    {
      icon: Wifi,
      title: "Offline-Friendly",
      description: "Download stories for offline reading. Stay informed even when you're disconnected from the internet."
    },
    {
      icon: Shield,
      title: "Privacy-First",
      description: "Your reading habits stay private. No tracking, no data selling, no compromises on your digital privacy."
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description: "Optimized for speed with instant loading and smooth swipe gestures. News consumption that keeps up with your pace."
    }
  ];

  return (
    <section id="features" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-poppins font-bold text-foreground mb-6">
            Everything you need to stay
            <span className="text-primary block">informed</span>
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-3xl mx-auto">
            Nible combines cutting-edge AI with thoughtful design to deliver the perfect news reading experience for modern life.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-7 h-7 text-primary" />
              </div>
              
              <h3 className="text-xl font-poppins font-semibold text-card-foreground mb-4">
                {feature.title}
              </h3>
              
              <p className="text-muted-foreground font-inter leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-20 grid sm:grid-cols-3 gap-8 text-center">
          <div className="p-6">
            <div className="text-4xl font-poppins font-bold text-primary mb-2">8 sec</div>
            <p className="text-muted-foreground font-inter">Average reading time</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-poppins font-bold text-primary mb-2">24/7</div>
            <p className="text-muted-foreground font-inter">Real-time updates</p>
          </div>
          <div className="p-6">
            <div className="text-4xl font-poppins font-bold text-primary mb-2">10+</div>
            <p className="text-muted-foreground font-inter">Trusted sources</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Features;