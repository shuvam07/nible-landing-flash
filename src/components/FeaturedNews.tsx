import { Badge } from "@/components/ui/badge";
import { Clock, TrendingUp, ExternalLink } from "lucide-react";
import type { Article } from "@/lib/api";
import ShareButtons from "@/components/ShareButtons";

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
  return date.toLocaleDateString("en-GB", { day: "numeric", month: "short" });
}

interface FeaturedNewsProps {
  articles: Article[];
}

const FeaturedNews = ({ articles }: FeaturedNewsProps) => {
  if (articles.length === 0) return null;

  const hero = articles[0];
  const sidebar = articles.slice(1, 5);

  const heroUrl = hero.source_url || `/articles/${hero.unique_code}`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
      {/* Hero Article — left, large */}
      <a
        href={heroUrl}
        className="lg:col-span-3 group block"
      >
        <div className="relative rounded-xl overflow-hidden bg-muted aspect-[16/10]">
          {hero.image_url && (
            <img
              src={hero.image_url}
              alt=""
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              loading="eager"
              onError={(e) => {
                (e.target as HTMLImageElement).style.display = "none";
              }}
            />
          )}
          {hero.is_trending && (
            <div className="absolute top-3 left-3 flex items-center gap-1 bg-primary text-white text-xs font-inter font-semibold px-2.5 py-1 rounded-full shadow-md">
              <TrendingUp className="w-3 h-3" />
              Trending
            </div>
          )}
        </div>
        <div className="mt-3">
          <div className="flex items-center gap-2 text-xs text-muted-foreground font-inter mb-2">
            <span className="flex items-center gap-1">
              <Clock className="w-3 h-3" />
              {timeAgo(hero.published_at)}
            </span>
          </div>
          <h2 className="text-xl sm:text-2xl font-poppins font-bold text-foreground leading-tight group-hover:text-primary transition-colors line-clamp-2">
            {hero.headline}
          </h2>
          <p className="mt-2 text-sm sm:text-base text-muted-foreground font-inter leading-relaxed line-clamp-3">
            {hero.summary}
          </p>
          {hero.source && (
            <span className="text-[11px] text-muted-foreground/50 font-inter mt-2 inline-block">
              Source: {hero.source}
            </span>
          )}
        </div>
      </a>

      {/* Sidebar Articles — right, stacked */}
      <div className="lg:col-span-2 flex flex-col divide-y divide-border">
        {sidebar.map((article) => {
          const url = article.source_url || `/articles/${article.unique_code}`;
          return (
            <a
              key={article.id}
              href={url}
              className="group flex gap-3 py-3 first:pt-0 last:pb-0"
            >
              {/* Thumbnail */}
              {article.image_url && (
                <div className="w-24 h-20 sm:w-28 sm:h-20 rounded-lg overflow-hidden bg-muted shrink-0">
                  <img
                    src={article.image_url}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                    onError={(e) => {
                      (e.target as HTMLImageElement).parentElement!.style.display = "none";
                    }}
                  />
                </div>
              )}
              {/* Text */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[11px] text-muted-foreground font-inter shrink-0">
                    {timeAgo(article.published_at)}
                  </span>
                </div>
                <h3 className="text-sm font-poppins font-semibold text-foreground leading-snug group-hover:text-primary transition-colors line-clamp-2">
                  {article.headline}
                </h3>
                <p className="text-xs text-muted-foreground font-inter mt-0.5 line-clamp-2">
                  {article.summary}
                </p>
                <div className="flex items-center justify-between mt-1">
                  <span className="text-[10px] text-muted-foreground/40 font-inter">
                    {article.source || ""}
                  </span>
                  <ShareButtons url={`https://www.nible.news/articles/${article.unique_code}`} title={article.headline} />
                </div>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturedNews;
