import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

const DutchNewsApp = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <article className="pt-24 pb-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Back to Blog */}
            <Link 
              to="/blog" 
              className="inline-flex items-center gap-2 text-primary hover:text-primary-hover font-inter font-medium mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              Back to Blog
            </Link>

            {/* Header */}
            <header className="mb-12">
              <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground font-inter">
                <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                  News
                </span>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time dateTime="2025-01-27">January 27, 2025</time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>8 min read</span>
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-poppins font-bold text-foreground mb-6">
                Dutch News App — Ad-Free, Short News Summaries
              </h1>
              
              <p className="text-xl text-muted-foreground font-inter leading-relaxed">
                Nible is a Dutch news app built for people who want to stay informed without ads, accounts, or unnecessary noise.
              </p>
            </header>

            {/* Main Content */}
            <div className="prose prose-lg max-w-none">
              <section className="mb-8">
                <p className="text-foreground/80 font-inter mb-4 leading-relaxed text-lg">
                  We provide Dutch local and global news, summarized in under 60 words, so you can understand what's happening quickly and clearly.
                </p>
                <div className="bg-primary/5 rounded-xl p-6 mb-6 border-l-4 border-primary">
                  <p className="text-foreground font-inter font-semibold mb-2">No ads.</p>
                  <p className="text-foreground font-inter font-semibold mb-2">No login.</p>
                  <p className="text-foreground font-inter font-semibold">No tracking.</p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-poppins font-semibold text-foreground mb-4">
                  A Simpler Way to Read Dutch News
                </h2>
                <p className="text-foreground/80 font-inter mb-4 leading-relaxed">
                  Most Dutch news apps are filled with:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/80 font-inter">
                  <li>Ads and popups</li>
                  <li>Long articles</li>
                  <li>Mandatory accounts</li>
                  <li>Tracking and personalization you didn't ask for</li>
                </ul>
                <p className="text-foreground/80 font-inter leading-relaxed">
                  Nible takes a different approach.
                </p>
                <p className="text-foreground/80 font-inter leading-relaxed">
                  As a privacy-first Dutch news app, Nible focuses on clarity and speed. You open the app and start reading immediately.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-poppins font-semibold text-foreground mb-4">
                  Short Dutch News Summaries
                </h2>
                <p className="text-foreground/80 font-inter mb-4 leading-relaxed">
                  Every story in Nible is summarized to highlight:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/80 font-inter">
                  <li><strong>What happened</strong></li>
                  <li><strong>Why it matters</strong></li>
                  <li><strong>What to know next</strong></li>
                </ul>
                <p className="text-foreground/80 font-inter leading-relaxed">
                  Each summary is short, factual, and neutral. If you want more context, you can tap through to read the full article from the original source.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-poppins font-semibold text-foreground mb-4">
                  Ad-Free and No Login Required
                </h2>
                <p className="text-foreground/80 font-inter mb-4 leading-relaxed">
                  Nible is designed to work without friction.
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/80 font-inter">
                  <li>No advertisements</li>
                  <li>No sponsored content</li>
                  <li>No sign-ups or accounts</li>
                  <li>No personal data collection</li>
                </ul>
                <p className="text-foreground/80 font-inter leading-relaxed">
                  This makes Nible a clean and distraction-free Dutch news app that respects your time and privacy.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-poppins font-semibold text-foreground mb-4">
                  Dutch Local and Global Coverage
                </h2>
                <p className="text-foreground/80 font-inter mb-4 leading-relaxed">
                  Nible covers:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/80 font-inter">
                  <li>Dutch local news</li>
                  <li>National headlines</li>
                  <li>International news</li>
                </ul>
                <p className="text-foreground/80 font-inter leading-relaxed">
                  You can choose the topics you care about, such as politics, business, technology, or sports, and update your preferences anytime.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-poppins font-semibold text-foreground mb-4">
                  Built for Daily Reading
                </h2>
                <p className="text-foreground/80 font-inter mb-4 leading-relaxed">
                  Nible is designed to fit naturally into your day:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/80 font-inter">
                  <li>Clean and simple interface</li>
                  <li>Fast loading summaries</li>
                  <li>Optional notifications</li>
                  <li>Morning newsletter available</li>
                </ul>
                <p className="text-foreground/80 font-inter leading-relaxed">
                  Whether you have two minutes or ten, Nible helps you stay informed without overwhelm.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-poppins font-semibold text-foreground mb-4">
                  Why Choose Nible as Your Dutch News App?
                </h2>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/80 font-inter">
                  <li>Ad-free by default</li>
                  <li>No login or tracking</li>
                  <li>Short, clear news summaries</li>
                  <li>Dutch local + global coverage</li>
                  <li>Free to use</li>
                </ul>
                <p className="text-foreground/80 font-inter leading-relaxed">
                  Nible is built for readers who value time, clarity, and privacy.
                </p>
              </section>

              <section className="mb-12 bg-primary/5 rounded-2xl p-8">
                <h2 className="text-3xl font-poppins font-semibold text-foreground mb-4">
                  Try Nible
                </h2>
                <p className="text-foreground/80 font-inter mb-6 leading-relaxed">
                  Nible is available as:
                </p>
                <ul className="list-disc pl-6 mb-6 space-y-2 text-foreground/80 font-inter">
                  <li>A mobile app (iOS and Android)</li>
                  <li>A web-based news reader</li>
                  <li>A morning newsletter</li>
                </ul>
                <p className="text-foreground/80 font-inter mb-6 leading-relaxed">
                  If you're looking for a Dutch news app without ads or accounts, Nible is a simple alternative.
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

            {/* Navigation */}
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

export default DutchNewsApp;

