import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Shield, Zap, UserX, Globe, Cpu, Heart } from "lucide-react";
import AppStoreBadge from "@/assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg";
import PlayStoreBadge from "@/assets/Download-on-the-android-store.svg";

const values = [
  {
    icon: Shield,
    title: "100% Ad-Free",
    description:
      "We believe news should inform, not sell. No ads, no sponsored content, no popups — ever.",
  },
  {
    icon: Zap,
    title: "60-Word Summaries",
    description:
      "AI-powered summaries give you the full picture in under a minute. Stay informed without the scroll.",
  },
  {
    icon: UserX,
    title: "No Login Required",
    description:
      "Open the app, read the news. No accounts, no sign-ups, no personal data collected.",
  },
  {
    icon: Globe,
    title: "Dutch & Global Coverage",
    description:
      "Local Dutch news alongside international headlines — Tech, Business, Politics, Sports, Science, and more.",
  },
  {
    icon: Cpu,
    title: "Smart Curation",
    description:
      "We scan hundreds of sources to surface what matters most, so you don't have to.",
  },
  {
    icon: Heart,
    title: "Built for Busy Minds",
    description:
      "Designed for people who want clarity, not clutter. News that respects your time and attention.",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <main className="pt-28 pb-16">
        {/* Hero */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
          <div className="text-center">
            <img
              src="/images/nible/briefly.png"
              alt="Nible logo"
              className="h-20 w-20 rounded-2xl object-contain mx-auto mb-6"
            />
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-foreground leading-tight">
              About <span className="text-primary">Nible</span>
            </h1>
            <p className="mt-4 text-base sm:text-lg text-muted-foreground font-inter max-w-2xl mx-auto leading-relaxed">
              Ad-free news for busy minds. We deliver short, unbiased summaries of Dutch
              and global headlines — so you can stay informed in under a minute.
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl mt-16">
          <h2 className="text-xl sm:text-2xl font-poppins font-bold text-foreground mb-4">
            Our Mission
          </h2>
          <div className="space-y-4 text-muted-foreground font-inter leading-relaxed">
            <p>
              News today is broken. Clickbait headlines, endless ads, paywalls, and algorithms
              designed to keep you scrolling — not informed. We started Nible to fix that.
            </p>
            <p>
              Nible scans hundreds of trusted sources and distills every story into a clear,
              60-word summary. No ads, no tracking, no login walls. Just the news you need,
              delivered fast.
            </p>
          </div>
        </section>

        {/* Values Grid */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl mt-16">
          <h2 className="text-xl sm:text-2xl font-poppins font-bold text-foreground mb-8 text-center">
            What We Stand For
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((v) => (
              <div
                key={v.title}
                className="rounded-xl border border-border bg-background p-6 hover:border-primary/30 transition-colors"
              >
                <v.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-poppins font-semibold text-foreground text-base mb-2">
                  {v.title}
                </h3>
                <p className="text-sm text-muted-foreground font-inter leading-relaxed">
                  {v.description}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl mt-16">
          <div className="rounded-2xl bg-primary/5 border border-primary/20 p-8 sm:p-10 text-center">
            <h2 className="text-xl sm:text-2xl font-poppins font-bold text-foreground mb-3">
              Try Nible Today
            </h2>
            <p className="text-muted-foreground font-inter mb-6">
              Download the app and experience news the way it should be — fast, clean, and free.
            </p>
            <div className="flex items-center justify-center gap-4">
              <a
                href="https://play.google.com/store/apps/details?id=com.nible.news&utm_source=nible_website&utm_medium=web&utm_campaign=website_cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={PlayStoreBadge} alt="Google Play" className="h-12" />
              </a>
              <a
                href="https://apps.apple.com/in/app/nible-news/id6748324981?utm_source=nible_website&utm_medium=web&utm_campaign=website_cta"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={AppStoreBadge} alt="App Store" className="h-12" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
