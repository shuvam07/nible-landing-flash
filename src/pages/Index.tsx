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
  searchArticles,
  getTimeline,
} from "@/lib/api";
import type { Article, TimelineGroup } from "@/lib/api";
import { RefreshCw, AlertCircle, Mail, Clock, List } from "lucide-react";
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
  const [isSearching, setIsSearching] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [searchOffset, setSearchOffset] = useState(0);
  const [hasMore, setHasMore] = useState(false);
  const [loadingMore, setLoadingMore] = useState(false);
  const [viewMode, setViewMode] = useState<"list" | "timeline">("list");
  const [timelineData, setTimelineData] = useState<TimelineGroup[]>([]);
  const [timelineSummary, setTimelineSummary] = useState("");
  const [timelineLoading, setTimelineLoading] = useState(false);
  const [timelineEligible, setTimelineEligible] = useState(false);
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

  // Read ?q= from URL for search
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const q = params.get("q");
    if (q) {
      handleSearch(q);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
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
    // Don't fetch tab articles if we're loading search results from URL
    const params = new URLSearchParams(window.location.search);
    if (params.get("q")) return;
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

  const handleSearch = useCallback(async (query: string) => {
    if (!query.trim()) return;
    setIsSearching(true);
    setSearchTerm(query.trim());
    setSearchOffset(0);
    setViewMode("list");
    setTimelineData([]);
    setTimelineSummary("");
    setLoading(true);
    setError(null);
    try {
      const { articles: results, has_more, timeline_eligible } = await searchArticles(query.trim(), 10, 0);
      setArticles(results);
      setHasMore(has_more);
      setSearchOffset(results.length);
      setTimelineEligible(timeline_eligible);
    } catch {
      setError("Search failed. Please try again.");
      setArticles([]);
      setHasMore(false);
    } finally {
      setLoading(false);
    }
  }, []);

  const loadMoreResults = useCallback(async () => {
    if (!searchTerm || loadingMore) return;
    setLoadingMore(true);
    try {
      const { articles: results, has_more } = await searchArticles(searchTerm, 10, searchOffset);
      setArticles((prev) => [...prev, ...results]);
      setHasMore(has_more);
      setSearchOffset((prev) => prev + results.length);
    } catch {
      // silently fail
    } finally {
      setLoadingMore(false);
    }
  }, [searchTerm, searchOffset, loadingMore]);

  const checkTimelineLimit = useCallback((): boolean => {
    const today = new Date().toISOString().slice(0, 10);
    const stored = localStorage.getItem("nible_tl");
    let count = 0;
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        if (parsed.d === today) count = parsed.c || 0;
      } catch { /* ignore */ }
    }
    if (count >= 10) return false;
    localStorage.setItem("nible_tl", JSON.stringify({ d: today, c: count + 1 }));
    return true;
  }, []);

  const fetchTimeline = useCallback(async (query: string) => {
    if (!checkTimelineLimit()) {
      toast({ title: "Daily limit reached", description: "You can view up to 10 timelines per day. Try again tomorrow!", variant: "destructive" });
      setViewMode("list");
      return;
    }
    setTimelineLoading(true);
    try {
      const data = await getTimeline(query, 50);
      setTimelineData(data.timeline);
      setTimelineSummary(data.summary);
    } catch (err: any) {
      setTimelineData([]);
      setTimelineSummary("");
      if (err?.message?.includes("429")) {
        toast({ title: "Daily limit reached", description: "You can view up to 10 timelines per day.", variant: "destructive" });
        setViewMode("list");
        return;
      }
    } finally {
      setTimelineLoading(false);
    }
  }, [toast, checkTimelineLimit]);

  const switchToTimeline = useCallback(() => {
    setViewMode("timeline");
    if (searchTerm && timelineData.length === 0) {
      fetchTimeline(searchTerm);
    }
  }, [searchTerm, timelineData.length, fetchTimeline]);

  const clearSearch = useCallback(() => {
    setIsSearching(false);
    setSearchTerm("");
    setSearchOffset(0);
    setHasMore(false);
    setViewMode("list");
    setTimelineData([]);
    setTimelineSummary("");
    setTimelineEligible(false);
    // Clear ?q= from URL and tell Navbar to clear search input
    window.history.replaceState({}, "", "/");
    window.dispatchEvent(new Event("nible:clearSearch"));
    fetchArticles(activeTab);
  }, [activeTab, fetchArticles]);

  const allTabs = [...SPECIAL_TABS, ...categories];
  const featuredArticles = articles.slice(0, 5);
  const remainingArticles = articles.slice(5);

  return (
    <div className="min-h-screen bg-background">
      {/* SEO Top Strip — above navbar */}
      <div className="fixed top-0 left-0 right-0 z-[60] bg-[#f0f4ff] border-b border-primary/20">
        <div className="container mx-auto px-4 py-1.5 flex items-center justify-center gap-3">
          <p className="text-xs sm:text-sm font-inter font-medium text-foreground/80 tracking-wide">
            Ad-free short news from the Netherlands &amp; the world. No login. No tracking.
          </p>
          <a
            href="#newsletter"
            className="hidden sm:inline-flex items-center gap-1 text-xs font-inter font-semibold text-primary hover:text-primary/80 bg-white/80 border border-primary/30 rounded-full px-3 py-0.5 transition-colors"
          >
            <Mail className="w-3 h-3" /> Subscribe Free
          </a>
        </div>
      </div>

      <div className="pt-8">
        <Navbar />
      </div>

      {/* Category Bar */}
      <div className="sticky top-24 z-40 bg-background border-b border-border">
        <div className="overflow-x-auto scrollbar-hide">
          <div className="flex min-w-max">
            {allTabs.map((tab) => {
              const isActive = !isSearching && tab === activeTab;
              return (
                <button
                  key={tab}
                  onClick={() => { setActiveTab(tab); if (isSearching) clearSearch(); }}
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
            {isSearching
              ? `Results for "${searchTerm}"`
              : activeTab === "Trending"
                ? "Top News"
                : activeTab}
          </h2>

          {/* Timeline suggestion banner — only when eligible and in list mode */}
          {isSearching && timelineEligible && viewMode === "list" && !loading && (
            <div className="max-w-3xl mx-auto mb-5 bg-primary/5 border border-primary/20 rounded-lg p-4 flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-primary flex-shrink-0" />
                <p className="text-sm font-inter text-foreground/80">
                  There's more to this story — trace the key moments
                </p>
              </div>
              <button
                onClick={switchToTimeline}
                className="flex-shrink-0 bg-primary text-white text-xs font-inter font-semibold px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors"
              >
                View Timeline
              </button>
            </div>
          )}

          {/* Back to list link when viewing timeline */}
          {isSearching && viewMode === "timeline" && (
            <div className="max-w-3xl mx-auto mb-4">
              <button
                onClick={() => setViewMode("list")}
                className="flex items-center gap-1.5 text-sm font-inter text-primary hover:underline"
              >
                <List className="w-4 h-4" /> Back to list
              </button>
            </div>
          )}

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

          {/* Articles — Featured + Grid (or flat grid for search) */}
          {!loading && !error && articles.length > 0 && (
            <>
              {isSearching && viewMode === "timeline" ? (
                <div className="max-w-3xl mx-auto">
                  {timelineLoading ? (
                    <div className="text-center py-12">
                      <RefreshCw className="w-8 h-8 text-primary mx-auto mb-3 animate-spin" />
                      <p className="text-sm text-muted-foreground font-inter">Building timeline...</p>
                    </div>
                  ) : (
                    <>
                      {timelineSummary && (
                        <p className="text-sm text-foreground/80 font-inter leading-relaxed mb-6 border-l-2 border-primary pl-4">
                          {timelineSummary}
                        </p>
                      )}

                      {timelineData.length === 0 && !timelineLoading && (
                        <p className="text-center text-muted-foreground font-inter py-8">No timeline data found.</p>
                      )}

                      <div className="relative">
                        {/* Vertical line */}
                        <div className="absolute left-[7px] top-0 bottom-0 w-0.5 bg-border" />

                        {timelineData.map((group) => {
                          const dateLabel = new Date(group.date + "T00:00:00").toLocaleDateString("en-GB", {
                            day: "numeric", month: "short", year: "numeric"
                          });
                          return (
                            <div key={group.date} className="relative pl-8 pb-5">
                              {/* Date dot */}
                              <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full bg-primary border-2 border-white shadow-sm" />
                              {/* Date label */}
                              <div className="text-xs font-inter font-bold text-primary mb-1.5">{dateLabel}</div>
                              {/* Event titles for this date */}
                              <div className="space-y-1">
                                {group.articles.map((evt, idx) => (
                                  <div key={idx} className="py-0.5">
                                    <p className="text-sm font-inter text-foreground/90 line-clamp-2">
                                      {evt.headline}
                                    </p>
                                  </div>
                                ))}
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </>
                  )}
                </div>
              ) : isSearching ? (
                <div className="space-y-3 max-w-3xl mx-auto">
                  {articles.map((article) => {
                    const date = article.published_at
                      ? new Date(article.published_at).toLocaleDateString("en-GB", {
                          day: "numeric", month: "short", year: "numeric", hour: "2-digit", minute: "2-digit"
                        })
                      : "";
                    return (
                      <a
                        key={article.id}
                        href={article.source_url || "#"}
                        className="flex gap-4 p-4 bg-white rounded-lg border border-border hover:border-primary/30 hover:shadow-sm transition-all group"
                      >
                        {article.image_url && (
                          <img
                            src={article.image_url}
                            alt=""
                            className="w-24 h-24 sm:w-32 sm:h-24 rounded-md object-cover flex-shrink-0"
                            loading="lazy"
                          />
                        )}
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-xs font-inter font-medium text-primary bg-primary/10 rounded px-2 py-0.5">
                              {article.category}
                            </span>
                            <span className="text-xs text-muted-foreground font-inter">{date}</span>
                          </div>
                          <h3 className="text-sm sm:text-base font-poppins font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-2">
                            {article.headline}
                          </h3>
                          <p className="text-xs sm:text-sm text-muted-foreground font-inter mt-1 line-clamp-2">
                            {article.summary}
                          </p>
                          {article.source && (
                            <span className="text-xs text-muted-foreground/70 font-inter mt-1 inline-block">
                              {article.source}
                            </span>
                          )}
                        </div>
                      </a>
                    );
                  })}
                  {hasMore && (
                    <div className="text-center mt-6">
                      <Button
                        onClick={loadMoreResults}
                        disabled={loadingMore}
                        variant="outline"
                        className="font-inter px-8"
                      >
                        {loadingMore ? "Loading..." : "Load More"}
                      </Button>
                    </div>
                  )}
                </div>
              ) : (
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
      <section id="newsletter" className="mt-12 bg-primary/5 border-y border-border scroll-mt-32">
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
