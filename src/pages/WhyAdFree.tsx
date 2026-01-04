import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";

const WhyAdFree = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <article className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <header className="mb-12">
              <h1 className="text-4xl sm:text-5xl font-poppins font-bold text-foreground mb-6">
                Why Ad-Free, Privacy-First News Matters in 2026
              </h1>
              <p className="text-xl text-muted-foreground font-inter">
                Understanding the importance of ad-free news, short summaries, and privacy-focused reading experiences.
              </p>
            </header>

            {/* Main Content */}
            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <h2 className="text-3xl font-poppins font-semibold text-foreground mb-4">
                  What is Ad-Free News?
                </h2>
                <p className="text-foreground/80 font-inter mb-4 leading-relaxed">
                  Ad-free news platforms deliver information without advertisements, sponsored content, or promotional interruptions. 
                  Unlike traditional news sites that rely on ad revenue, ad-free news apps prioritize reader experience and content quality 
                  over monetization through advertising.
                </p>
                <p className="text-foreground/80 font-inter leading-relaxed">
                  Traditional news websites are cluttered with banner ads, pop-ups, video ads, and sponsored content that interrupt 
                  your reading flow. These ads not only distract but can also slow down page loading times and compromise your privacy 
                  through tracking scripts.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-poppins font-semibold text-foreground mb-4">
                  Why Ads Make News Worse
                </h2>
                <p className="text-foreground/80 font-inter mb-4 leading-relaxed">
                  Advertising in news media creates several problems for readers:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/80 font-inter">
                  <li><strong>Distraction:</strong> Ads break your focus and make it harder to absorb information</li>
                  <li><strong>Slower Loading:</strong> Ad scripts and tracking pixels slow down page load times</li>
                  <li><strong>Privacy Concerns:</strong> Ad networks track your reading habits and personal data</li>
                  <li><strong>Clickbait Content:</strong> Ad-driven revenue models incentivize sensational headlines over quality journalism</li>
                  <li><strong>Mobile Experience:</strong> Ads make mobile reading frustrating with pop-ups and interstitials</li>
                </ul>
                <p className="text-foreground/80 font-inter leading-relaxed">
                  When news platforms depend on ad revenue, the focus shifts from informing readers to maximizing clicks and engagement, 
                  often at the expense of journalistic integrity and reader experience.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-poppins font-semibold text-foreground mb-4">
                  Why Login Slows News Consumption
                </h2>
                <p className="text-foreground/80 font-inter mb-4 leading-relaxed">
                  Many news apps and websites require account creation before you can read articles. This creates unnecessary friction:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/80 font-inter">
                  <li><strong>Barrier to Entry:</strong> Sign-up forms prevent instant access to information</li>
                  <li><strong>Data Collection:</strong> Login requirements enable tracking of your reading patterns</li>
                  <li><strong>Password Fatigue:</strong> Creating and remembering another account adds friction</li>
                  <li><strong>Privacy Risk:</strong> Your email and personal data become part of marketing databases</li>
                  <li><strong>Time Waste:</strong> Filling forms takes time away from actually reading news</li>
                </ul>
                <p className="text-foreground/80 font-inter leading-relaxed">
                  News should be accessible immediately. Requiring login creates an unnecessary barrier between readers and information, 
                  and often serves as a data collection mechanism rather than a security feature.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-poppins font-semibold text-foreground mb-4">
                  How Short Summaries Help Busy Readers
                </h2>
                <p className="text-foreground/80 font-inter mb-4 leading-relaxed">
                  In our fast-paced world, most people don't have time to read full-length articles for every news story. 
                  Short summaries solve this problem:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/80 font-inter">
                  <li><strong>Time Efficiency:</strong> Get the key facts in 60 seconds instead of 5-10 minutes</li>
                  <li><strong>Better Retention:</strong> Concise summaries help you remember important points</li>
                  <li><strong>More Coverage:</strong> Read 10 stories in the time it takes to read one full article</li>
                  <li><strong>Reduced Overwhelm:</strong> Short formats prevent information overload</li>
                  <li><strong>Mobile-Friendly:</strong> Perfect for quick reads during commutes or breaks</li>
                </ul>
                <p className="text-foreground/80 font-inter leading-relaxed">
                  Well-crafted 60-word summaries capture the essential facts, context, and implications of a news story without 
                  the fluff. This allows busy readers to stay informed without sacrificing hours of their day.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-poppins font-semibold text-foreground mb-4">
                  Why Privacy Matters in Modern News Apps
                </h2>
                <p className="text-foreground/80 font-inter mb-4 leading-relaxed">
                  Your reading habits reveal a lot about you: your interests, political views, concerns, and even your location. 
                  Privacy-focused news apps protect this sensitive information:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/80 font-inter">
                  <li><strong>No Tracking:</strong> Your reading patterns aren't monitored or sold to advertisers</li>
                  <li><strong>No Data Collection:</strong> No personal information is stored or shared</li>
                  <li><strong>No Profiling:</strong> You can't be targeted based on your news consumption</li>
                  <li><strong>Freedom to Explore:</strong> Read diverse topics without algorithmic manipulation</li>
                  <li><strong>Peace of Mind:</strong> Your intellectual privacy is protected</li>
                </ul>
                <p className="text-foreground/80 font-inter leading-relaxed">
                  When news apps track your behavior, they create profiles that can be used for manipulation, targeted advertising, 
                  or even surveillance. Privacy-first platforms ensure your reading remains private and your mind remains free.
                </p>
              </section>

              <section className="mb-12 bg-primary/5 rounded-2xl p-8">
                <h2 className="text-3xl font-poppins font-semibold text-foreground mb-4">
                  Introducing Nible — A Cleaner News Experience
                </h2>
                <p className="text-foreground/80 font-inter mb-6 leading-relaxed">
                  Nible is an ad-free Dutch news app and website that delivers local and global news summaries in 60 words, 
                  with no login required and no user data tracking. We believe news should be:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-foreground/80 font-inter">
                  <li><strong>Ad-Free:</strong> Zero advertisements, sponsored content, or promotional interruptions</li>
                  <li><strong>No Login Required:</strong> Start reading immediately without creating an account</li>
                  <li><strong>Short Summaries:</strong> 60-word summaries that capture essential facts</li>
                  <li><strong>Privacy-First:</strong> No tracking, no data collection, no user profiling</li>
                  <li><strong>Dutch & Global Coverage:</strong> Local Dutch news alongside major global stories</li>
                </ul>
                <p className="text-foreground/80 font-inter mb-6 leading-relaxed">
                  Nible represents a new approach to news consumption: fast, factual, and respectful of your time and privacy. 
                  Experience the difference of ad-free, privacy-first news.
                </p>
                <div className="flex gap-4">
                  <a
                    href="https://apps.apple.com/in/app/nible-news/id6748324981"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary hover:bg-primary-hover text-primary-foreground px-6 py-3 rounded-lg font-inter font-medium transition-colors"
                  >
                    Download for iOS
                  </a>
                  <a
                    href="https://play.google.com/store/apps/details?id=com.nible.news&pcampaignid=web_share"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block bg-primary hover:bg-primary-hover text-primary-foreground px-6 py-3 rounded-lg font-inter font-medium transition-colors"
                  >
                    Download for Android
                  </a>
                </div>
              </section>
            </div>

            {/* Back to Home */}
            <div className="mt-12 pt-8 border-t border-border">
              <Link 
                to="/" 
                className="text-primary hover:text-primary-hover font-inter font-medium"
              >
                ← Back to Home
              </Link>
            </div>
          </div>
        </div>
      </article>
      <Footer />
    </div>
  );
};

export default WhyAdFree;

