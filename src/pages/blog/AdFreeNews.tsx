import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

const AdFreeNews = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <article className="pt-24 pb-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-inter font-medium mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            <header className="mb-12">
              <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground font-inter">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                  Privacy
                </span>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time dateTime="2025-01-27">January 27, 2025</time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>7 min read</span>
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-poppins font-bold text-foreground mb-6">
                Why Ad-Free News Matters
              </h1>
              
              <p className="text-xl text-muted-foreground font-inter leading-relaxed">
                Understanding the impact of advertisements on news consumption and why ad-free platforms provide a better reading experience.
              </p>
            </header>

            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <p className="text-foreground/80 font-inter mb-4 leading-relaxed text-lg">
                  Most news websites and apps rely on advertising revenue to operate. While this business model has been standard for decades, 
                  it creates significant problems for readers who just want to stay informed.
                </p>
                <p className="text-foreground/80 font-inter leading-relaxed">
                  Ad-free news platforms eliminate these distractions, creating a cleaner, faster, and more focused reading experience. Here's why this matters.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-poppins font-semibold text-foreground mb-4">
                  The Problem with Ads in News
                </h2>
                <p className="text-foreground/80 font-inter mb-4 leading-relaxed">
                  Traditional news platforms with advertisements face several challenges:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/80 font-inter">
                  <li><strong>Distraction:</strong> Banner ads, pop-ups, and video ads interrupt your reading flow and break concentration</li>
                  <li><strong>Slow Loading:</strong> Ad scripts and tracking pixels significantly slow down page load times</li>
                  <li><strong>Mobile Experience:</strong> Ads make mobile reading frustrating with interstitials and full-screen pop-ups</li>
                  <li><strong>Data Usage:</strong> Ads consume mobile data, especially video and rich media advertisements</li>
                  <li><strong>Privacy Concerns:</strong> Ad networks track your reading habits and build profiles of your interests</li>
                </ul>
                <p className="text-foreground/80 font-inter leading-relaxed">
                  These issues compound when you're trying to quickly catch up on news during a busy day. What should take seconds becomes minutes 
                  of waiting and scrolling past advertisements.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-poppins font-semibold text-foreground mb-4">
                  How Ads Affect News Quality
                </h2>
                <p className="text-foreground/80 font-inter mb-4 leading-relaxed">
                  Beyond user experience, advertising revenue models can influence editorial decisions:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/80 font-inter">
                  <li><strong>Clickbait Headlines:</strong> Ad-driven revenue incentivizes sensational headlines that generate more clicks</li>
                  <li><strong>Content Prioritization:</strong> Stories that generate more ad revenue may be prioritized over important news</li>
                  <li><strong>Sponsored Content:</strong> Native advertising blurs the line between news and marketing</li>
                  <li><strong>Algorithm Manipulation:</strong> Engagement metrics (clicks, time on page) drive what content gets promoted</li>
                </ul>
                <p className="text-foreground/80 font-inter leading-relaxed">
                  When news platforms depend on ad revenue, the focus can shift from informing readers to maximizing engagement and ad impressions.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-poppins font-semibold text-foreground mb-4">
                  Benefits of Ad-Free News
                </h2>
                <p className="text-foreground/80 font-inter mb-4 leading-relaxed">
                  Ad-free news platforms offer several advantages:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/80 font-inter">
                  <li><strong>Faster Reading:</strong> No ad scripts means instant page loads and smooth scrolling</li>
                  <li><strong>Better Focus:</strong> Clean interface lets you concentrate on the content without distractions</li>
                  <li><strong>Mobile Optimized:</strong> No pop-ups or interstitials means a seamless mobile experience</li>
                  <li><strong>Privacy Protection:</strong> No ad tracking means your reading habits stay private</li>
                  <li><strong>Lower Data Usage:</strong> Without ads, news consumption uses significantly less mobile data</li>
                  <li><strong>Editorial Independence:</strong> Content decisions aren't influenced by ad revenue considerations</li>
                </ul>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-poppins font-semibold text-foreground mb-4">
                  The Future of News Consumption
                </h2>
                <p className="text-foreground/80 font-inter mb-4 leading-relaxed">
                  As readers become more aware of privacy issues and value their time, ad-free news platforms are gaining traction. 
                  These platforms prove that quality news can be delivered without relying on advertising revenue.
                </p>
                <p className="text-foreground/80 font-inter leading-relaxed">
                  Ad-free news isn't just about removing distractions—it's about creating a news experience that respects readers' time, 
                  attention, and privacy. It's about putting content first, not revenue.
                </p>
              </section>

              <section className="mb-12 bg-primary/5 rounded-2xl p-8">
                <h2 className="text-3xl font-poppins font-semibold text-foreground mb-4">
                  Experience Ad-Free News with Nible
                </h2>
                <p className="text-foreground/80 font-inter mb-6 leading-relaxed">
                  Nible is an ad-free Dutch news app that delivers local and global news in 60-word summaries. 
                  No advertisements, no tracking, and no login required. Experience news the way it should be: fast, factual, and free from distractions.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a
                    href="https://apps.apple.com/in/app/nible-news/id6748324981"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary hover:bg-primary-hover text-primary-foreground px-6 py-3 rounded-lg font-inter font-medium transition-colors text-center"
                  >
                    Download for iOS
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.nible.news&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary hover:bg-primary-hover text-primary-foreground px-6 py-3 rounded-lg font-inter font-medium transition-colors text-center"
                  >
                    Download for Android
                  </a>
                </div>
              </section>
            </div>

            <div className="mt-12 pt-8 border-t border-border">
              <Link 
                to="/blog" 
                className="text-primary hover:text-primary-hover font-inter font-medium"
              >
                ← Back to Blog
              </Link>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default AdFreeNews;

