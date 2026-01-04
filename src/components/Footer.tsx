import { Twitter, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-16 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/images/nible/briefly.png" alt="Nible logo" className="h-8 w-8 rounded-md object-contain" loading="lazy" />
              <h3 className="text-2xl font-poppins font-bold text-primary">Nible</h3>
            </div>
            <p className="text-muted-foreground font-inter mb-6 max-w-md">
              Ad-free Dutch & Global news summaries. 60 words, no login, no tracking.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a 
                href="https://www.linkedin.com/company/nible-news/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                title="Follow us on LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a 
                href="https://www.instagram.com/nible.news/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors"
                title="Follow on Instagram for daily news updates"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:hello@nible.news" className="text-muted-foreground hover:text-primary transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-poppins font-semibold text-foreground mb-4">Legal</h4>
            <ul className="space-y-2 font-inter">
              <li><a href="/privacy" className="text-muted-foreground hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="/terms" className="text-muted-foreground hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="mailto:support@nible.app" className="text-muted-foreground hover:text-foreground transition-colors">Support</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-poppins font-semibold text-foreground mb-4">Product</h4>
            <ul className="space-y-2 font-inter">
              <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#features" className="text-muted-foreground hover:text-foreground transition-colors">How it Works</a></li>
              <li><a href="#install" className="text-muted-foreground hover:text-foreground transition-colors">Download</a></li>
              <li><a href="/why-ad-free-news" className="text-muted-foreground hover:text-foreground transition-colors">Why Ad-Free News</a></li>
            </ul>
          </div>
        </div>

        {/* About Nible Section for SEO */}
        <div className="border-t border-border mt-12 pt-8">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-poppins font-semibold text-foreground mb-4 text-center">
              About Nible
            </h2>
            <p className="text-foreground/80 font-inter text-center leading-relaxed mb-4">
              Nible is an ad-free news app and website delivering local Dutch and global news summaries (60 words) with no login required. 
              We provide fast, factual news coverage without advertisements, tracking, or data collection. Nible focuses on Dutch local news 
              and major global stories, all condensed into clear, concise summaries that respect your time and privacy.
            </p>
            <p className="text-foreground/80 font-inter text-center leading-relaxed">
              As a privacy-first news platform, Nible ensures your reading habits remain private. No user accounts, no tracking scripts, 
              and no targeted advertising. Experience news the way it should be: fast, factual, and free from distractions. 
              <a href="/why-ad-free-news" className="text-primary hover:text-primary-hover ml-1">Learn why ad-free news matters</a>.
            </p>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 text-center">
          <p className="text-muted-foreground font-inter text-sm">
            © 2025 Nible. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;