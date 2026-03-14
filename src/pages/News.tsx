import { useEffect, useState, useCallback } from "react";
import { useSearchParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import NewsCardSkeleton from "@/components/NewsCardSkeleton";
import AppDownloadBanner from "@/components/AppDownloadBanner";
import {
  getCategories,
  getTrendingArticles,
  getLatestArticles,
  getArticlesByCategory,
} from "@/lib/api";
import type { Article } from "@/lib/api";
import { TrendingUp, Newspaper, RefreshCw, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const SPECIAL_TABS = ["Trending", "Latest"] as const;

const News = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeTab = searchParams.get("category") || "Trending";

  const [categories, setCategories] = useState<string[]>([]);
  const [articles, setArticles] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch categories on mount
  useEffect(() => {
    getCategories()
      .then((cats) => setCategories(cats))
      .catch(() => setCategories(["Tech", "International", "Business", "Politics", "Sports", "Science", "Local", "General"]));
  }, []);

  // Fetch articles when tab changes
  const fetchArticles = useCallback(async (tab: string) => {
    setLoading(true);
    setError(null);
    try {
      let data: Article[];
      if (tab === "Trending") {
        data = await getTrendingArticles(30);
      } else if (tab === "Latest") {
        data = await getLatestArticles(30);
      } else {
        data = await getArticlesByCategory(tab, 30);
      }
      setArticles(data);
    } catch (err) {
      setError("Failed to load articles. Please try again.");
      setArticles([]);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchArticles(activeTab);
  }, [activeTab, fetchArticles]);

  const handleTabChange = (tab: string) => {
    if (tab === "Trending") {
      setSearchParams({});
    } else {
      setSearchParams({ category: tab });
    }
  };

  const allTabs = [...SPECIAL_TABS, ...categories];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Page Header */}
      <div className="pt-20 pb-6 bg-gradient-to-b from-hero-from to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center pt-8 pb-4">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-poppins font-bold text-foreground mb-3">
              <Newspaper className="inline-block w-8 h-8 sm:w-10 sm:h-10 text-primary mr-2 -mt-1" />
              News
            </h1>
            <p className="text-lg text-muted-foreground font-inter">
              Ad-free Dutch & Global news — read without downloading the app.
            </p>
          </div>
        </div>
      </div>

      {/* Sticky Category Tabs */}
      <div className="sticky top-16 z-40 bg-background/95 backdrop-blur-md border-b border-border shadow-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="overflow-x-auto scrollbar-hide -mx-4 px-4">
            <div className="flex gap-2 py-3 min-w-max">
              {allTabs.map((tab) => {
                const isActive = tab === activeTab;
                const isSpecial = (SPECIAL_TABS as readonly string[]).includes(tab);
                return (
                  <button
                    key={tab}
                    onClick={() => handleTabChange(tab)}
                    className={`
                      px-4 py-2 rounded-full text-sm font-inter font-medium whitespace-nowrap
                      transition-all duration-200
                      ${isActive
                        ? "bg-primary text-white shadow-md shadow-primary/25"
                        : "bg-muted text-muted-foreground hover:bg-primary/10 hover:text-primary"
                      }
                    `}
                  >
                    {isSpecial && tab === "Trending" && (
                      <TrendingUp className="inline-block w-3.5 h-3.5 mr-1 -mt-0.5" />
                    )}
                    {tab}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <main className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          {/* App Download Banner — top */}
          <div className="mb-8">
            <AppDownloadBanner />
          </div>

          {/* Error State */}
          {error && (
            <div className="text-center py-16">
              <AlertCircle className="w-12 h-12 text-destructive mx-auto mb-4" />
              <p className="text-lg text-foreground font-inter mb-4">{error}</p>
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

          {/* Articles Grid */}
          {!loading && !error && articles.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {articles.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          )}

          {/* Empty State */}
          {!loading && !error && articles.length === 0 && (
            <div className="text-center py-16">
              <Newspaper className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
              <p className="text-lg text-foreground font-poppins font-semibold mb-2">
                No articles found
              </p>
              <p className="text-muted-foreground font-inter">
                There are no articles in this category right now. Check back soon!
              </p>
            </div>
          )}

          {/* App Download Banner — bottom (shows after articles) */}
          {!loading && articles.length > 0 && (
            <div className="mt-12 mb-4">
              <AppDownloadBanner />
            </div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default News;
