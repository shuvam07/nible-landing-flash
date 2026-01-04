import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import WhyAdFree from "./pages/WhyAdFree";
import Blog from "./pages/Blog";
import DutchNewsApp from "./pages/blog/DutchNewsApp";
import AdFreeNews from "./pages/blog/AdFreeNews";
import ShortNewsSummaries from "./pages/blog/ShortNewsSummaries";
import NoLoginPrivacy from "./pages/blog/NoLoginPrivacy";
import Unsubscribe from "./pages/Unsubscribe";
import ApiUnsubscribe from "./pages/ApiUnsubscribe";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/privacy" element={<PrivacyPolicy />} />
          <Route path="/why-ad-free-news" element={<WhyAdFree />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/dutch-news-app" element={<DutchNewsApp />} />
          <Route path="/blog/ad-free-news" element={<AdFreeNews />} />
          <Route path="/blog/short-news-summaries" element={<ShortNewsSummaries />} />
          <Route path="/blog/no-login-privacy" element={<NoLoginPrivacy />} />
          <Route path="/unsubscribe" element={<Unsubscribe />} />
          <Route path="/api/newsletter/unsubscribe" element={<ApiUnsubscribe />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
