import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

const ShortNewsSummaries = () => {
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
                  Reading
                </span>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4" />
                  <time dateTime="2025-01-27">January 27, 2025</time>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="w-4 h-4" />
                  <span>6 min read</span>
                </div>
              </div>
              
              <h1 className="text-4xl sm:text-5xl font-poppins font-bold text-foreground mb-6">
                Short News Summaries vs Long Articles
              </h1>
              
              <p className="text-xl text-muted-foreground font-inter leading-relaxed">
                Why concise news summaries help busy readers stay informed without information overload.
              </p>
            </header>

            <div className="prose prose-lg max-w-none">
              <section className="mb-12">
                <p className="text-foreground/80 font-inter mb-4 leading-relaxed text-lg">
                  In our fast-paced world, most people don't have time to read full-length articles for every news story. 
                  Yet staying informed is important. Short news summaries solve this problem by delivering essential information 
                  in a format that fits into busy schedules.
                </p>
                <p className="text-foreground/80 font-inter leading-relaxed">
                  Here's why short summaries are becoming the preferred way to consume news.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-poppins font-semibold text-foreground mb-4">
                  The Time Problem with Long Articles
                </h2>
                <p className="text-foreground/80 font-inter mb-4 leading-relaxed">
                  Traditional news articles are often 800-2000 words long. Reading a single article can take 5-10 minutes. 
                  If you want to stay informed on multiple topics, this quickly becomes overwhelming:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/80 font-inter">
                  <li>Reading 10 full articles could take an hour or more</li>
                  <li>Most people don't have that much time in their day</li>
                  <li>Information overload leads to decision fatigue</li>
                  <li>Long articles often include background context you may already know</li>
                </ul>
                <p className="text-foreground/80 font-inter leading-relaxed">
                  This time barrier means many people simply skip reading news altogether, or only read headlines, 
                  missing important context and nuance.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-poppins font-semibold text-foreground mb-4">
                  How Short Summaries Help
                </h2>
                <p className="text-foreground/80 font-inter mb-4 leading-relaxed">
                  Well-crafted 60-word summaries solve the time problem:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/80 font-inter">
                  <li><strong>Time Efficiency:</strong> Read 10 stories in the time it takes to read one full article</li>
                  <li><strong>Better Coverage:</strong> Stay informed on more topics without spending hours</li>
                  <li><strong>Key Facts First:</strong> Get the essential information immediately, without wading through background</li>
                  <li><strong>Reduced Overwhelm:</strong> Short formats prevent information overload</li>
                  <li><strong>Mobile-Friendly:</strong> Perfect for quick reads during commutes, breaks, or waiting</li>
                  <li><strong>Better Retention:</strong> Concise summaries help you remember important points</li>
                </ul>
                <p className="text-foreground/80 font-inter leading-relaxed">
                  A good summary captures what happened, why it matters, and what to know next—all in under 60 words.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-poppins font-semibold text-foreground mb-4">
                  When to Read Summaries vs Full Articles
                </h2>
                <p className="text-foreground/80 font-inter mb-4 leading-relaxed">
                  Short summaries and long articles serve different purposes:
                </p>
                <div className="bg-primary/5 rounded-xl p-6 mb-4">
                  <h3 className="font-poppins font-semibold text-foreground mb-2">Use Summaries For:</h3>
                  <ul className="list-disc pl-6 space-y-1 text-foreground/80 font-inter">
                    <li>Daily news catch-up</li>
                    <li>Understanding multiple topics quickly</li>
                    <li>Staying informed during busy periods</li>
                    <li>Getting the facts without deep analysis</li>
                  </ul>
                </div>
                <div className="bg-muted/30 rounded-xl p-6">
                  <h3 className="font-poppins font-semibold text-foreground mb-2">Read Full Articles For:</h3>
                  <ul className="list-disc pl-6 space-y-1 text-foreground/80 font-inter">
                    <li>Topics you're deeply interested in</li>
                    <li>Complex stories requiring detailed context</li>
                    <li>In-depth analysis and expert opinions</li>
                    <li>When you have dedicated reading time</li>
                  </ul>
                </div>
                <p className="text-foreground/80 font-inter mt-4 leading-relaxed">
                  The best news platforms offer both: summaries for quick scanning, with the option to read full articles when needed.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-3xl font-poppins font-semibold text-foreground mb-4">
                  The Science of Information Processing
                </h2>
                <p className="text-foreground/80 font-inter mb-4 leading-relaxed">
                  Research shows that people process and remember information better when it's presented concisely:
                </p>
                <ul className="list-disc pl-6 mb-4 space-y-2 text-foreground/80 font-inter">
                  <li>Shorter content reduces cognitive load</li>
                  <li>Key points are easier to identify and remember</li>
                  <li>Less information means less decision fatigue</li>
                  <li>Quick reads fit natural attention spans better</li>
                </ul>
                <p className="text-foreground/80 font-inter leading-relaxed">
                  This doesn't mean long-form journalism is obsolete—it means summaries serve a different, equally important purpose: 
                  helping busy people stay informed efficiently.
                </p>
              </section>

              <section className="mb-12 bg-primary/5 rounded-2xl p-8">
                <h2 className="text-3xl font-poppins font-semibold text-foreground mb-4">
                  Try Short News Summaries with Nible
                </h2>
                <p className="text-foreground/80 font-inter mb-6 leading-relaxed">
                  Nible delivers Dutch local and global news in 60-word summaries. Get the facts fast, without information overload. 
                  Each summary includes what happened, why it matters, and what to know next—all in under a minute of reading.
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

export default ShortNewsSummaries;

