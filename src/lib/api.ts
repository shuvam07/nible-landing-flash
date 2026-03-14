/**
 * Nible Public API client.
 * Fetches news data from the public (no-auth) endpoints.
 */

// In dev, Vite proxy forwards /api to api.nible.news (avoids CORS)
// In production, use the full public URL (no API key needed)
const API_BASE = import.meta.env.DEV
  ? "/api/public"
  : "https://api.nible.news/api/public";

export interface Article {
  id: number;
  headline: string;
  summary: string;
  image_url: string | null;
  source: string | null;
  source_url: string | null;
  category: string;
  published_at: string;
  unique_code: string;
  is_trending: boolean;
  views: number;
  likes: number;
}

interface ArticlesResponse {
  status: string;
  articles: Article[];
  count: number;
  category?: string;
}

interface CategoriesResponse {
  status: string;
  categories: string[];
  count: number;
}

interface SingleArticleResponse {
  status: string;
  article: Article;
}

async function fetchJSON<T>(url: string): Promise<T> {
  const res = await fetch(url);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

export async function getCategories(): Promise<string[]> {
  const data = await fetchJSON<CategoriesResponse>(`${API_BASE}/categories`);
  return data.categories;
}

export async function getTrendingArticles(limit = 20): Promise<Article[]> {
  const data = await fetchJSON<ArticlesResponse>(
    `${API_BASE}/articles/trending?limit=${limit}`
  );
  return data.articles;
}

export async function getLatestArticles(limit = 20): Promise<Article[]> {
  const data = await fetchJSON<ArticlesResponse>(
    `${API_BASE}/articles/latest?limit=${limit}`
  );
  return data.articles;
}

export async function getArticlesByCategory(
  category: string,
  limit = 20
): Promise<Article[]> {
  const data = await fetchJSON<ArticlesResponse>(
    `${API_BASE}/articles/category/${encodeURIComponent(category)}?limit=${limit}`
  );
  return data.articles;
}

interface SearchResponse {
  status: string;
  articles: Article[];
  query: string;
  count: number;
  offset: number;
  has_more: boolean;
}

export async function searchArticles(
  query: string,
  limit = 30,
  offset = 0
): Promise<{ articles: Article[]; has_more: boolean }> {
  const data = await fetchJSON<SearchResponse>(
    `${API_BASE}/articles/search?q=${encodeURIComponent(query)}&limit=${limit}&offset=${offset}`
  );
  return { articles: data.articles, has_more: data.has_more };
}

export async function getArticleByCode(
  uniqueCode: string
): Promise<Article> {
  const data = await fetchJSON<SingleArticleResponse>(
    `${API_BASE}/articles/${encodeURIComponent(uniqueCode)}`
  );
  return data.article;
}
