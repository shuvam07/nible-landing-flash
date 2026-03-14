import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ArrowRight, Shield, Zap, UserX, Globe, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import AppStoreBadge from "@/assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg";
import PlayStoreBadge from "@/assets/Download-on-the-android-store.svg";

const PLAY_STORE =
  "https://play.google.com/store/apps/details?id=com.nible.news&utm_source=producthunt&utm_medium=web&utm_campaign=ph_launch";
const APP_STORE =
  "https://apps.apple.com/in/app/nible-news/id6748324981?utm_source=producthunt&utm_medium=web&utm_campaign=ph_launch";
const PH_URL = "https://www.producthunt.com/products/nible-news";

const features = [
  {
    icon: Shield,
    title: "100% Ad-Free",
    desc: "No ads, no sponsored content, no popups. Just news.",
  },
  {
    icon: Zap,
    title: "60-Word Summaries",
    desc: "Every story distilled into a crisp summary you read in seconds.",
  },
  {
    icon: UserX,
    title: "No Login Required",
    desc: "Open and read. No accounts, no sign-ups, no data collected.",
  },
  {
    icon: Globe,
    title: "Dutch & Global",
    desc: "Local Dutch news alongside international headlines in one feed.",
  },
  {
    icon: Smartphone,
    title: "iOS & Android",
    desc: "Native apps with offline reading and trending notifications.",
  },
];

const Launch = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-28 pb-12 bg-gradient-to-b from-primary/5 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl text-center">
          {/* PH Badge */}
          <a
            href={PH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white border border-border rounded-full px-4 py-2 mb-8 shadow-sm hover:shadow-md transition-shadow"
          >
            <img
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=nible-news&theme=light"
              alt="Nible on Product Hunt"
              className="h-8"
            />
          </a>

          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-foreground leading-tight">
            News Without the Noise
          </h1>
          <p className="mt-4 text-base sm:text-lg text-muted-foreground font-inter max-w-2xl mx-auto leading-relaxed">
            Nible gives you Dutch and global news in 60-word summaries. No ads, no login, no
            tracking. Just open and read. Now on the web too.
          </p>

          {/* App Store Badges */}
          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={PLAY_STORE} target="_blank" rel="noopener noreferrer">
              <img src={PlayStoreBadge} alt="Google Play" className="h-14" />
            </a>
            <a href={APP_STORE} target="_blank" rel="noopener noreferrer">
              <img src={AppStoreBadge} alt="App Store" className="h-14" />
            </a>
          </div>

          <p className="mt-4 text-sm text-muted-foreground font-inter">
            Free on iOS &amp; Android. No credit card needed.
          </p>
        </div>
      </section>

      {/* App Screenshots */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <div className="flex justify-center gap-4 overflow-x-auto scrollbar-hide py-4">
            {["/images/nible/5.png", "/images/nible/1.png", "/images/nible/2.png"].map((src) => (
              <img
                key={src}
                src={src}
                alt="Nible app screenshot"
                className="h-[400px] sm:h-[480px] rounded-2xl shadow-lg border border-border/50 object-contain"
                loading="lazy"
              />
            ))}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-12 bg-muted/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-5xl">
          <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-foreground text-center mb-10">
            Why People Love Nible
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((f) => (
              <div
                key={f.title}
                className="bg-background rounded-xl border border-border p-6 hover:border-primary/30 transition-colors"
              >
                <f.icon className="w-8 h-8 text-primary mb-3" />
                <h3 className="font-poppins font-semibold text-foreground text-base mb-1">
                  {f.title}
                </h3>
                <p className="text-sm text-muted-foreground font-inter">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Browse on Web CTA */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-foreground mb-4">
            Don't Want to Download? Browse on the Web
          </h2>
          <p className="text-muted-foreground font-inter mb-6">
            Read all the same news right here on nible.news — same summaries, same categories, zero friction.
          </p>
          <Button asChild size="lg" className="bg-primary hover:bg-primary/90 text-white font-inter font-medium">
            <a href="/">
              Browse News Now <ArrowRight className="ml-2 w-4 h-4" />
            </a>
          </Button>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-16 bg-primary/5 border-y border-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl text-center">
          <h2 className="text-2xl sm:text-3xl font-poppins font-bold text-foreground mb-3">
            Support Us on Product Hunt
          </h2>
          <p className="text-muted-foreground font-inter mb-6">
            If you believe news should be ad-free, short, and respectful of your time — give us an upvote!
          </p>
          <a
            href={PH_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#ff6154] hover:bg-[#e5574b] text-white font-inter font-semibold px-6 py-3 rounded-lg shadow-md transition-colors"
          >
            Upvote on Product Hunt <ArrowRight className="w-4 h-4" />
          </a>

          <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href={PLAY_STORE} target="_blank" rel="noopener noreferrer">
              <img src={PlayStoreBadge} alt="Google Play" className="h-12" />
            </a>
            <a href={APP_STORE} target="_blank" rel="noopener noreferrer">
              <img src={AppStoreBadge} alt="App Store" className="h-12" />
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Launch;
