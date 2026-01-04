import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

const NoLoginPrivacy = () => {
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
                  <span>9 min read</span>
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-poppins font-bold text-foreground mb-6">
                Why We Don't Require Login or Track Users
              </h1>
              
              <p className="text-xl text-muted-foreground font-inter leading-relaxed">
                Understanding the importance of privacy-first news consumption and why no-login platforms respect your intellectual freedom.
              </p>
            </header>

            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <p className="text-foreground/80 font-inter mb-4 leading-relaxed text-lg">
                  Most news apps and websites require you to create an account before you can read articles. This seems normal, 
                  but it creates unnecessary barriers and privacy risks. Nible takes a different approach: no login required, 
                  no user tracking, and no data collection.
                </p>
                <p className="text-foreground/80 font-inter leading-relaxed">
                  Here's why this matters for your privacy and reading experience.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-poppins font-semibold text-foreground mb-4">
                  The Problem with Required Logins
                </h2>
                <p className="text-foreground/80 font-inter mb-4 leading-relaxed">
                  When news platforms require accounts, they create several problems:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/80 font-inter">
                  <li><strong>Barrier to Entry:</strong> Sign-up forms prevent instant access to information</li>
                  <li><strong>Data Collection:</strong> Your email, name, and other personal information become part of marketing databases</li>
                  <li><strong>Password Fatigue:</strong> Creating and remembering another account adds friction</li>
                  <li><strong>Tracking Enabled:</strong> Logins enable platforms to track your reading patterns across sessions</li>
                  <li><strong>Privacy Risk:</strong> Your reading habits reveal interests, political views, and concerns</li>
                  <li><strong>Time Waste:</strong> Filling forms takes time away from actually reading news</li>
                </ul>
                <p className="text-foreground/80 font-inter leading-relaxed">
                  News should be accessible immediately. Requiring login creates an unnecessary barrier between readers and information, 
                  and often serves as a data collection mechanism rather than a security feature.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-poppins font-semibold text-foreground mb-4">
                  What Gets Tracked When You Log In
                </h2>
                <p className="text-foreground/80 font-inter mb-4 leading-relaxed">
                  When you create an account on a news platform, they can track:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/80 font-inter">
                  <li>Every article you read</li>
                  <li>How long you spend on each story</li>
                  <li>What topics you're interested in</li>
                  <li>Your reading patterns and habits</li>
                  <li>When and where you access news</li>
                  <li>What you share or save</li>
                </ul>
                <p className="text-foreground/80 font-inter leading-relaxed">
                  This data is often used to build profiles of your interests, political views, and concerns. 
                  These profiles can be used for targeted advertising, content manipulation, or even sold to third parties.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-poppins font-semibold text-foreground mb-4">
                  Why Intellectual Privacy Matters
                </h2>
                <p className="text-foreground/80 font-inter mb-4 leading-relaxed">
                  Your reading habits reveal a lot about you:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/80 font-inter">
                  <li>Your political views and concerns</li>
                  <li>Your interests and hobbies</li>
                  <li>Your location and daily routine</li>
                  <li>Your professional interests</li>
                  <li>Your personal concerns and priorities</li>
                </ul>
                <p className="text-foreground/80 font-inter leading-relaxed">
                  This information is sensitive. When news platforms track and profile your reading, they can:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/80 font-inter">
                  <li>Manipulate what content you see based on your profile</li>
                  <li>Target you with specific advertisements</li>
                  <li>Create echo chambers by showing you similar content</li>
                  <li>Share your data with third parties</li>
                  <li>Use your profile for surveillance or discrimination</li>
                </ul>
                <p className="text-foreground/80 font-inter leading-relaxed">
                  Intellectual privacy—the right to read and think without being monitored—is fundamental to a free mind.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-poppins font-semibold text-foreground mb-4">
                  The Benefits of No-Login News
                </h2>
                <p className="text-foreground/80 font-inter mb-4 leading-relaxed">
                  News platforms that don't require login offer several advantages:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/80 font-inter">
                  <li><strong>Instant Access:</strong> Start reading immediately without creating accounts</li>
                  <li><strong>No Tracking:</strong> Your reading patterns aren't monitored or profiled</li>
                  <li><strong>No Data Collection:</strong> No personal information is stored or shared</li>
                  <li><strong>Freedom to Explore:</strong> Read diverse topics without algorithmic manipulation</li>
                  <li><strong>Privacy Protection:</strong> Your intellectual privacy is respected</li>
                  <li><strong>Less Friction:</strong> No passwords to remember or accounts to manage</li>
                </ul>
                <p className="text-foreground/80 font-inter leading-relaxed">
                  This approach puts the reader first, not the platform's data collection needs.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-poppins font-semibold text-foreground mb-4">
                  How Nible Protects Your Privacy
                </h2>
                <p className="text-foreground/80 font-inter mb-4 leading-relaxed">
                  Nible is designed from the ground up to respect your privacy:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/80 font-inter">
                  <li><strong>No Login Required:</strong> Download and start reading immediately</li>
                  <li><strong>No User Accounts:</strong> We don't collect emails, names, or personal information</li>
                  <li><strong>No Tracking Scripts:</strong> We don't use analytics or tracking pixels</li>
                  <li><strong>No Data Storage:</strong> Your reading habits aren't stored or analyzed</li>
                  <li><strong>No Profiling:</strong> We don't build profiles of your interests</li>
                  <li><strong>No Third-Party Sharing:</strong> We don't sell or share your data</li>
                </ul>
                <p className="text-foreground/80 font-inter leading-relaxed">
                  This means you can read news freely, explore diverse topics, and form your own opinions without being monitored, 
                  manipulated, or profiled.
                </p>
              </section>

              <section className="mb-12 bg-primary/5 rounded-2xl p-8">
                <h2 className="text-3xl font-poppins font-semibold text-foreground mb-4">
                  Experience Privacy-First News with Nible
                </h2>
                <p className="text-foreground/80 font-inter mb-6 leading-relaxed">
                  Nible is an ad-free Dutch news app that delivers local and global news in 60-word summaries. 
                  No login, no tracking, no data collection. Your reading stays private, and your mind stays free.
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

export default NoLoginPrivacy;

