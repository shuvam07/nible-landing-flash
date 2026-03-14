import { useEffect, useState, useCallback } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FeaturedNews from "@/components/FeaturedNews";
import NewsCard from "@/components/NewsCard";
import NewsCardSkeleton from "@/components/NewsCardSkeleton";
import StickyAppBanner from "@/components/StickyAppBanner";
import {
  getCategories,
  getTrendingArticles,
  getArticlesByCategory,
} from "@/lib/api";
import type { Article } from "@/lib/api";
import { RefreshCw, AlertCircle, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";

const SPECIAL_TABS = ["Trending"] as const;

const Index = () => {
  const [activeTab, setActiveTab] = useState<string>("Trending");
  const [categories, setCategories] = useState<string[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [email, setEmail] = useState("");
  const [subscribing, setSubscribing] = useState(false);
  const { toast } = useToast();

  // Fetch categories on mount
  useEffect(() => {
    getCategories()
      .then((cats) => setCategories(cats))
      .catch(() =>
        setCategories([
          "Tech",
          "International",
          "Business",
          "Politics",
          "Sports",
          "Science",
          "Local",
          "General",
        ])
      );
  }, []);

  // Fetch articles when tab changes
  const fetchArticles = useCallback(async (tab: string) => {
    setLoading(true);
    setError(null);
    try {
      let data: Article[];
      if (tab === "Trending") {
        data = await getTrendingArticles(30);
      } else {
        data = await getArticlesByCategory(tab, 30);
      }
      setArticles(data);
    } catch {
      setError("Failed to load articles. Please try again.");
      setArticles([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchArticles(activeTab);
  }, [activeTab, fetchArticles]);

  const handleNewsletterSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribing(true);
    try {
      const response = await fetch("https://api.nible.news/api/newsletter/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      if (response.ok) {
        toast({ title: "Welcome to Nible Newsletter!", description: "You'll receive your daily news brief every morning." });
        setEmail("");
      } else {
        toast({ title: "Subscription failed", description: "Please check your email and try again.", variant: "destructive" });
      }
    } catch {
      toast({ title: "Something went wrong", description: "Please try again later.", variant: "destructive" });
    } finally {
      setSubscribing(false);
    }
  };

  const allTabs = [...SPECIAL_TABS, ...categories];
  const featuredArticles = articles.slice(0, 5);
  const remainingArticles = articles.slice(5);

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Top Strip — above navbar */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-primary/10 border-b border-primary/20">
        <div className="container mx-auto px-4 py-1.5 text-center">
          <p className="text-xs sm:text-sm font-inter font-medium text-foreground/80 tracking-wide">
            Ad-free short news from the Netherlands &amp; the world. No login. No tracking. Trusted.
          </p>
        </div>
      </div>

      <div className="pt-8">
        <Navbar />
      </div>

      {/* Category Bar — full width, evenly spaced, underline style */}
      <div className="sticky top-24 z-40 bg-background border-b border-border">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex min-w-max">
            {allTabs.map((tab) => {
              const isActive = tab === activeTab;
              return (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`
                    flex-1 min-w-[100px] px-4 py-3 text-sm font-inter font-medium whitespace-nowrap
                    transition-all duration-200 border-b-2 text-center
                    ${
                      isActive
                        ? "border-primary text-primary"
                        : "border-transparent text-muted-foreground hover:text-foreground hover:border-muted-foreground/30"
                    }
                  `}
                >
                  {tab}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Main Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 mt-6">
        <div className="max-w-6xl mx-auto">
          {/* Section title */}
          <h2 className="text-lg font-poppins font-bold text-foreground mb-4">
            {activeTab === "Trending" ? "Top News" : activeTab}
          </h2>

          {/* Error State */}
          {error && (
            <div className="text-center py-16">
              <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
              <p className="text-lg text-foreground font-inter mb-4">
                {error}
              </p>
              <Button
                onClick={() => fetchArticles(activeTab)}
                variant="outline"
                className="font-inter"
              >
                <RefreshCw className="w-4 h-4 mr-2" />
                Try Again
              </Button>
            </div>
          )}

          {/* Loading Skeletons */}
          {loading && !error && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {Array.from({ length: 9 }).map((_, i) => (
                <NewsCardSkeleton key={i} />
              ))}
            </div>
          )}

          {/* Articles — Featured + Grid */}
          {!loading && !error && articles.length > 0 && (
            <>
              {/* Featured hero + sidebar layout */}
              <FeaturedNews articles={featuredArticles} />

              {/* More articles below in a grid */}
              {remainingArticles.length > 0 && (
                <div className="mt-8">
                  <h3 className="text-base font-poppins font-semibold text-foreground mb-4">
                    More Stories
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                    {remainingArticles.map((article) => (
                      <NewsCard key={article.id} article={article} />
                    ))}
                  </div>
                </div>
              )}
            </>
          )}

          {/* Empty State */}
          {!loading && !error && articles.length === 0 && (
            <div className="text-center py-16">
              <p className="text-lg text-foreground font-poppins font-semibold mb-2">
                No articles found
              </p>
              <p className="text-muted-foreground font-inter">
                There are no articles in this category right now. Check back
                soon!
              </p>
            </div>
          )}
        </div>
      </main>

      {/* Newsletter Section */}
      <section className="mt-12 bg-primary/5 border-y border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-12">
          <div className="max-w-xl mx-auto text-center">
            <Mail className="w-10 h-10 text-primary mx-auto mb-3" />
            <h2 className="text-xl sm:text-2xl font-poppins font-bold text-foreground">
              Get News in Your Inbox
            </h2>
            <p className="mt-2 text-sm sm:text-base text-muted-foreground font-inter">
              Subscribe to the Nible newsletter — daily Dutch &amp; global news summaries delivered every morning. Free, no spam.
            </p>
            <form
              onSubmit={handleNewsletterSubscribe}
              className="mt-5 flex flex-col sm:flex-row gap-3 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder="Your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="flex-1 h-11 font-inter"
              />
              <Button
                type="submit"
                disabled={subscribing}
                className="bg-primary hover:bg-primary/90 text-white h-11 px-6 font-inter font-medium"
              >
                {subscribing ? "Subscribing..." : "Subscribe"}
              </Button>
            </form>
            <p className="mt-3 text-xs text-muted-foreground font-inter">
              No spam, unsubscribe anytime. We respect your privacy.
            </p>
          </div>
        </div>
      </section>

      <Footer />

      {/* Sticky bottom app download banner */}
      <StickyAppBanner />
    </div>
  );
};

export default Index;
