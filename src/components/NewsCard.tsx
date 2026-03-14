import { Badge } from "@/components/ui/badge";
import { Clock, Eye, Heart, TrendingUp, ExternalLink } from "lucide-react";
import type { Article } from "@/lib/api";

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

const CATEGORY_COLORS: Record<string, string> = {
  Tech: "bg-blue-100 text-blue-700 border-blue-200",
  International: "bg-purple-100 text-purple-700 border-purple-200",
  Business: "bg-emerald-100 text-emerald-700 border-emerald-200",
  Politics: "bg-red-100 text-red-700 border-red-200",
  Sports: "bg-orange-100 text-orange-700 border-orange-200",
  Science: "bg-cyan-100 text-cyan-700 border-cyan-200",
  Local: "bg-amber-100 text-amber-700 border-amber-200",
  General: "bg-gray-100 text-gray-700 border-gray-200",
};

interface NewsCardProps {
  article: Article;
}

const NewsCard = ({ article }: NewsCardProps) => {
  const categoryColor =
    CATEGORY_COLORS[article.category] ||
    "bg-gray-100 text-gray-700 border-gray-200";

  const articleUrl = article.source_url || `https://nible.news/articles/${article.unique_code}`;

  return (
    <a
      href={articleUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg hover:border-primary/30 transition-all duration-300"
    >
      {/* Image */}
      {article.image_url && (
        <div className="relative aspect-[16/9] overflow-hidden bg-muted">
          <img
            src={article.image_url}
            alt=""
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            loading="lazy"
            onError={(e) => {
              (e.target as HTMLImageElement).style.display = "none";
            }}
          />
          {article.is_trending && (
            <div className="absolute top-3 left-3 flex items-center gap-1 bg-primary text-white text-xs font-inter font-semibold px-2.5 py-1 rounded-full shadow-md">
              <TrendingUp className="w-3 h-3" />
              Trending
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-4 sm:p-5">
        {/* Category + Time */}
        <div className="flex items-center justify-between mb-3">
          <Badge
            variant="outline"
            className={`${categoryColor} text-xs font-inter font-medium border`}
          >
            {article.category}
          </Badge>
          <span className="text-xs text-muted-foreground font-inter flex items-center gap-1">
            <Clock className="w-3 h-3" />
            {timeAgo(article.published_at)}
          </span>
        </div>

        {/* Headline */}
        <h3 className="text-base sm:text-lg font-poppins font-semibold text-foreground leading-snug mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {article.headline}
        </h3>

        {/* Summary */}
        <p className="text-sm text-muted-foreground font-inter leading-relaxed line-clamp-3 mb-3">
          {article.summary}
        </p>

        {/* Footer: source + stats */}
        <div className="flex items-center justify-between pt-2 border-t border-border/50">
          <span className="text-xs text-muted-foreground font-inter flex items-center gap-1">
            {article.source && (
              <>
                <ExternalLink className="w-3 h-3" />
                {article.source}
              </>
            )}
          </span>
          <div className="flex items-center gap-3 text-xs text-muted-foreground font-inter">
            {article.views > 0 && (
              <span className="flex items-center gap-1">
                <Eye className="w-3 h-3" />
                {article.views}
              </span>
            )}
            {article.likes > 0 && (
              <span className="flex items-center gap-1">
                <Heart className="w-3 h-3" />
                {article.likes}
              </span>
            )}
          </div>
        </div>
      </div>
    </a>
  );
};

export default NewsCard;
