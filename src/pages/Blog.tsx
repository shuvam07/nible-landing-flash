import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Link } from "react-router-dom";
import { Calendar, Clock } from "lucide-react";

const Blog = () => {
  const posts = [
    {
      slug: "dutch-news-app",
      title: "Dutch News App: A Simpler Way to Stay Informed",
      description: "Discover how a dedicated Dutch news app can transform how you consume news, with local coverage and global context in one place.",
      date: "2025-01-27",
      readTime: "8 min read",
      category: "News"
    },
    {
      slug: "ad-free-news",
      title: "Why Ad-Free News Matters",
      description: "Learn why ad-free news platforms provide a better reading experience and why they're essential for staying informed without distractions.",
      date: "2025-01-27",
      readTime: "7 min read",
      category: "Privacy"
    },
    {
      slug: "short-news-summaries",
      title: "Short News Summaries vs Long Articles",
      description: "Explore the benefits of concise news summaries and how they help busy readers stay informed without information overload.",
      date: "2025-01-27",
      readTime: "6 min read",
      category: "Reading"
    },
    {
      slug: "no-login-privacy",
      title: "Why We Don't Require Login or Track Users",
      description: "Understanding the importance of privacy-first news consumption and why no-login platforms respect your intellectual freedom.",
      date: "2025-01-27",
      readTime: "9 min read",
      category: "Privacy"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Header */}
            <header className="mb-12 text-center">
              <h1 className="text-4xl sm:text-5xl font-poppins font-bold text-foreground mb-4">
                Blog & Insights
              </h1>
              <p className="text-xl text-muted-foreground font-inter max-w-2xl mx-auto">
                Learn about ad-free news, privacy-first reading, and how to stay informed in the digital age.
              </p>
            </header>

            {/* Blog Posts Grid */}
            <div className="space-y-8">
              {posts.map((post) => (
                <article
                  key={post.slug}
                  className="bg-white border border-border rounded-2xl p-8 hover:shadow-lg transition-shadow"
                >
                  <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground font-inter">
                    <span className="px-3 py-1 bg-primary/10 text-primary rounded-full text-xs font-medium">
                      {post.category}
                    </span>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString('en-US', { 
                          year: 'numeric', 
                          month: 'long', 
                          day: 'numeric' 
                        })}
                      </time>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  <h2 className="text-2xl sm:text-3xl font-poppins font-semibold text-foreground mb-3">
                    <Link 
                      to={`/blog/${post.slug}`}
                      className="hover:text-primary transition-colors"
                    >
                      {post.title}
                    </Link>
                  </h2>

                  <p className="text-muted-foreground font-inter mb-6 leading-relaxed">
                    {post.description}
                  </p>

                  <Link
                    to={`/blog/${post.slug}`}
                    className="inline-flex items-center text-primary hover:text-primary-hover font-inter font-medium"
                  >
                    Read more →
                  </Link>
                </article>
              ))}
            </div>

            {/* CTA Section */}
            <div className="mt-16 bg-primary/5 rounded-2xl p-8 text-center">
              <h2 className="text-2xl font-poppins font-semibold text-foreground mb-4">
                Ready to Experience Ad-Free News?
              </h2>
              <p className="text-muted-foreground font-inter mb-6 max-w-xl mx-auto">
                Download Nible and get Dutch local and global news in 60-word summaries. No ads, no login, no tracking.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Blog;

