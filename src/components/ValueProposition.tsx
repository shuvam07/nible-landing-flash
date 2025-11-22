import { CheckCircle2, XCircle } from "lucide-react";

const ValueProposition = () => {
  const benefits = [
    "Get the latest news first, not yesterday's stories",
    "Crafted summaries save you hours every week",
    "No ads, no distractions - just pure news",
    "Read offline anywhere, anytime",
    "Privacy-first: your data stays yours",
    "Beautiful, intuitive interface designed for speed"
  ];

  const problems = [
    "Too much noise, not enough signal",
    "Ads interrupting your reading flow",
    "Yesterday's news at the top of your feed",
    "Long articles when you just want the facts",
    "Can't read without internet connection",
    "Your reading habits being tracked and sold"
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-white to-orange-50/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="mx-auto mb-4 h-1.5 w-16 rounded-full bg-gradient-to-r from-primary to-accent" />
            <h2 className="text-3xl sm:text-4xl font-poppins font-bold tracking-tight text-foreground mb-4">
              Why Choose Nible?
            </h2>
            <p className="text-lg text-muted-foreground font-inter max-w-2xl mx-auto">
              Stop wasting time on news that doesn't matter. Get the facts fast, without the fluff.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Problems with Traditional News */}
            <div className="bg-white rounded-2xl p-8 border border-orange-200/60 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <XCircle className="w-6 h-6 text-red-500" />
                <h3 className="text-xl font-poppins font-semibold text-foreground">
                  Tired of Traditional News?
                </h3>
              </div>
              <ul className="space-y-4">
                {problems.map((problem, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="mt-1 w-2 h-2 rounded-full bg-red-400 flex-shrink-0" />
                    <span className="text-muted-foreground font-inter">{problem}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Benefits of Nible */}
            <div className="bg-white rounded-2xl p-8 border border-primary/30 shadow-sm">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-6 h-6 text-primary" />
                <h3 className="text-xl font-poppins font-semibold text-foreground">
                  Nible Solves It All
                </h3>
              </div>
              <ul className="space-y-4">
                {benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-foreground font-inter">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;

