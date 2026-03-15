import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { getArticleByCode, searchArticles } from "@/lib/api";
import type { Article } from "@/lib/api";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import NewsCard from "@/components/NewsCard";
import ShareButtons from "@/components/ShareButtons";
import { Clock, ExternalLink, ArrowLeft, Tag } from "lucide-react";

function timeAgo(dateStr: string): string {
  const now = new Date();
  const date = new Date(dateStr);
  const diffMs = now.getTime() - date.getTime();
  const diffMin = Math.floor(diffMs / 60000);
  if (diffMin < 1) return "just now";
  if (diffMin < 60) return `${diffMin}m ago`;
  const diffHrs = Math.floor(diffMin / 60);
  if (diffHrs < 24) return `${diffHrs}h ago`;
  const diffDays = Math.floor(diffHrs / 24);
  if (diffDays < 7) return `${diffDays}d ago`;
  return date.toLocaleDateString("en-GB", { day: "numeric", month: "short", year: "numeric" });
}

const CATEGORY_COLORS: Record<string, string> = {
  Tech: "bg-blue-100 text-blue-700",
  International: "bg-purple-100 text-purple-700",
  Business: "bg-emerald-100 text-emerald-700",
  Politics: "bg-red-100 text-red-700",
  Sports: "bg-orange-100 text-orange-700",
  Science: "bg-cyan-100 text-cyan-700",
  Local: "bg-amber-100 text-amber-700",
  General: "bg-gray-100 text-gray-700",
};

const ArticlePage = () => {
  const { uniqueCode } = useParams<{ uniqueCode: string }>();
  const [article, setArticle] = useState<Article | null>(null);
  const [related, setRelated] = useState<Article[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!uniqueCode) return;
    setLoading(true);
    setError(null);

    getArticleByCode(uniqueCode)
      .then((a) => {
        setArticle(a);
        // Update page title for SEO
        document.title = `${a.headline} | Nible News`;
        // Update meta description
        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) metaDesc.setAttribute("content", a.summary);
        // Update OG tags
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute("content", a.headline);
        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute("content", a.summary);
        const ogImage = document.querySelector('meta[property="og:image"]');
        if (ogImage && a.image_url) ogImage.setAttribute("content", a.image_url);
        const ogUrl = document.querySelector('meta[property="og:url"]');
        if (ogUrl) ogUrl.setAttribute("content", `https://www.nible.news/articles/${a.unique_code}`);
        // Inject NewsArticle JSON-LD for Google News
        const existingLd = document.getElementById("article-jsonld");
        if (existingLd) existingLd.remove();
        const ldScript = document.createElement("script");
        ldScript.id = "article-jsonld";
        ldScript.type = "application/ld+json";
        ldScript.textContent = JSON.stringify({
          "@context": "https://schema.org",
          "@type": "NewsArticle",
          "headline": a.headline,
          "description": a.summary,
          "image": a.image_url || undefined,
          "datePublished": a.published_at,
          "author": { "@type": "Organization", "name": "Nible" },
          "publisher": {
            "@type": "Organization",
            "name": "Nible",
            "logo": { "@type": "ImageObject", "url": "https://www.nible.news/images/nible/briefly.png" }
          },
          "mainEntityOfPage": `https://www.nible.news/articles/${a.unique_code}`,
        });
        document.head.appendChild(ldScript);
        // Fetch related articles from same category
        return searchArticles(a.category, 7, 0);
      })
      .then((res) => {
        // Filter out the current article
        setRelated(res.articles.filter((r) => r.unique_code !== uniqueCode).slice(0, 6));
      })
      .catch(() => setError("Article not found."))
      .finally(() => setLoading(false));
  }, [uniqueCode]);

  const articleUrl = article
    ? `https://www.nible.news/articles/${article.unique_code}`
    : "";

  const categoryColor = article
    ? CATEGORY_COLORS[article.category] || "bg-gray-100 text-gray-700"
    : "";

  return (
    <div className="min-h-screen bg-background font-inter">
      <Navbar />

      <main className="pt-24 pb-16">
        {loading && (
          <div className="max-w-3xl mx-auto px-4 py-20 text-center">
            <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin mx-auto mb-3" />
            <p className="text-sm text-muted-foreground">Loading article...</p>
          </div>
        )}

        {error && (
          <div className="max-w-3xl mx-auto px-4 py-20 text-center">
            <p className="text-lg font-semibold text-foreground mb-2">Article not found</p>
            <p className="text-sm text-muted-foreground mb-6">{error}</p>
            <Link to="/" className="text-primary hover:underline text-sm font-medium">
              ← Back to homepage
            </Link>
          </div>
        )}

        {!loading && !error && article && (
          <>
            {/* Article content */}
            <article className="max-w-3xl mx-auto px-4 sm:px-6">
              {/* Back link */}
              <Link
                to="/"
                className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary transition-colors mb-6"
              >
                <ArrowLeft className="w-4 h-4" />
                Back to news
              </Link>

              {/* Category + Time */}
              <div className="flex items-center gap-3 mb-4">
                <span className={`inline-flex items-center gap-1 text-xs font-semibold px-2.5 py-1 rounded-full ${categoryColor}`}>
                  <Tag className="w-3 h-3" />
                  {article.category}
                </span>
                <span className="text-xs text-muted-foreground flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {timeAgo(article.published_at)}
                </span>
                {article.source && (
                  <span className="text-xs text-muted-foreground">
                    via {article.source}
                  </span>
                )}
              </div>

              {/* Headline */}
              <h1 className="text-2xl sm:text-3xl font-poppins font-bold text-foreground leading-tight mb-6">
                {article.headline}
              </h1>

              {/* Hero image */}
              {article.image_url && (
                <div className="rounded-xl overflow-hidden mb-6 bg-muted">
                  <img
                    src={article.image_url}
                    alt={article.headline}
                    className="w-full h-auto max-h-[400px] object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).style.display = "none";
                    }}
                  />
                </div>
              )}

              {/* Summary */}
              <div className="bg-muted/30 border border-border rounded-xl p-6 mb-6">
                <p className="text-base sm:text-lg text-foreground/90 font-inter leading-relaxed">
                  {article.summary}
                </p>
              </div>

              {/* Actions: Read full + Share */}
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8 pb-8 border-b border-border">
                {article.source_url && (
                  <a
                    href={article.source_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-primary text-white font-semibold text-sm px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Read full article at {article.source || "source"}
                  </a>
                )}
                <ShareButtons
                  url={articleUrl}
                  title={article.headline}
                  variant="bar"
                />
              </div>
            </article>

            {/* Related articles */}
            {related.length > 0 && (
              <section className="max-w-6xl mx-auto px-4 sm:px-6">
                <h2 className="text-xl font-poppins font-semibold text-foreground mb-6">
                  More in {article.category}
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {related.map((r) => (
                    <NewsCard key={r.id} article={r} />
                  ))}
                </div>
              </section>
            )}
          </>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default ArticlePage;
