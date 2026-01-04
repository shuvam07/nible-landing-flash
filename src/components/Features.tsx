import { Clock, BookOpen, Globe, Shield, Zap, Lock } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Shield,
      title: "Ad-Free Experience",
      description:
        "No interruptions. Read your news without annoying ads or sponsored content blocking the way.",
    },
    {
      icon: Lock,
      title: "No Login Required",
      description:
        "Start reading immediately. We don't ask for your email, phone number, or any personal data.",
    },
    {
      icon: BookOpen,
      title: "60-word Summaries",
      description:
        "Get the full story in just 60 words. Concise briefs that deliver key facts without the fluff.",
    },
    {
      icon: Globe,
      title: "Dutch & Global News",
      description:
        "Stay informed on both Dutch local events and major global stories in one place.",
    },
    {
      icon: Clock,
      title: "Latest-First Feed",
      description:
        "Trending and breaking news first — our system ensures you're always up to date.",
    },
    {
      icon: Zap,
      title: "Lightning Fast",
      description:
        "Instant loads and smooth navigation for a frictionless reading experience.",
    },
  ];

  return (
    <section id="features" className="relative py-24 bg-gradient-to-b from-orange-100/80 via-orange-50/80 to-transparent">
      {/* Decorative background */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-16 -left-8 h-48 w-48 rounded-full bg-orange-300/30 blur-2xl" />
        <div className="absolute bottom-0 right-0 h-56 w-56 rounded-full bg-orange-300/25 blur-2xl" />
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-gradient-to-r from-primary to-accent" />
          <h2 className="text-3xl sm:text-4xl font-poppins font-bold tracking-tight text-zinc-900">
            Ad-Free News Features for Dutch Readers
          </h2>
          <p className="mt-3 text-zinc-600 font-inter">
            Designed for speed, clarity, and staying on top of what matters.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {features.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group relative rounded-2xl border border-orange-200/60 bg-white/70 backdrop-blur-sm p-6 transition-all hover:-translate-y-1 hover:shadow-xl max-w-sm mx-auto w-full"
            >
              {/* glow ring */}
              <div className="absolute inset-0 rounded-2xl ring-1 ring-transparent group-hover:ring-orange-300/30 transition" />

              <div className="mb-4 flex items-center gap-3">
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-orange-400/10 to-white text-orange-700 flex items-center justify-center ring-1 ring-orange-300/40">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-poppins font-semibold text-base text-zinc-900">{title}</h3>
              </div>

              <p className="text-sm text-zinc-700 font-inter leading-relaxed">
                {description}
              </p>

              <div className="mt-6 h-px w-full bg-gradient-to-r from-transparent via-orange-200/60 to-transparent" />
              <div className="mt-3 flex items-center gap-2 text-xs text-zinc-600">
                <span className="inline-block h-2 w-2 rounded-full bg-orange-400/80" />
                Optimized for daily use
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;