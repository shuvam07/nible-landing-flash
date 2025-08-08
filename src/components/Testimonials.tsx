import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Marketing Director",
      content: "Nible has completely changed how I stay informed. The AI summaries are spot-on, and I love that I can catch up on news during my commute without feeling overwhelmed.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez", 
      role: "Software Engineer",
      content: "The latest-first feed is genius. No more scrolling through yesterday's news to find what's happening now. Clean interface, fast performance - exactly what I needed.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emma Thompson",
      role: "Business Analyst", 
      content: "Finally, a news app that respects my time and privacy. The daily digest cards are perfect for busy mornings, and the offline reading saves my data plan.",
      rating: 5,
      avatar: "ET"
    }
  ];

  return (
    <section className="py-24 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-poppins font-bold text-foreground mb-6">
            What users are
            <span className="text-primary block">saying</span>
          </h2>
          <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
            Join thousands of satisfied users who've transformed their news reading experience with Nible.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 border border-border hover:border-primary/20 transition-all duration-300 hover:shadow-lg"
            >
              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-accent fill-current" />
                ))}
              </div>

              {/* Content */}
              <blockquote className="text-card-foreground font-inter mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>

              {/* User Info */}
              <div className="flex items-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mr-4">
                  <span className="text-primary font-poppins font-semibold">
                    {testimonial.avatar}
                  </span>
                </div>
                <div>
                  <div className="font-poppins font-semibold text-card-foreground">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-muted-foreground font-inter">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid sm:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div>
              <div className="text-3xl font-poppins font-bold text-primary mb-2">4.8★</div>
              <p className="text-muted-foreground font-inter text-sm">App Store Rating</p>
            </div>
            <div>
              <div className="text-3xl font-poppins font-bold text-primary mb-2">50K+</div>
              <p className="text-muted-foreground font-inter text-sm">Active Readers</p>
            </div>
            <div>
              <div className="text-3xl font-poppins font-bold text-primary mb-2">1M+</div>
              <p className="text-muted-foreground font-inter text-sm">Stories Summarized</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;