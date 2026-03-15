import { useState, useEffect } from "react";
import { Menu, X, Search } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("q") || "";
  });

  // Clear search input when Index.tsx clears the search
  useEffect(() => {
    const handler = () => setSearchQuery("");
    window.addEventListener("nible:clearSearch", handler);
    return () => window.removeEventListener("nible:clearSearch", handler);
  }, []);

  const navItems = [
    { name: "Blog", href: "/blog" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "mailto:hello@nible.news" }
  ];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    window.location.href = `/?q=${encodeURIComponent(searchQuery.trim())}`;
  };

  return (
    <nav className="fixed top-8 w-full bg-white border-b border-border z-50 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          {/* Brand */}
          <div className="flex items-center gap-4">
            <a href="/" aria-label="Nible home" className="flex items-center gap-2">
              <img
                src="/images/nible/briefly.png"
                alt=""
                className="h-12 w-12 rounded-md object-contain"
                loading="lazy"
              />
              <span className="text-primary font-poppins font-semibold text-2xl tracking-tight">Nible</span>
            </a>
          </div>

          {/* Desktop Navigation — centered (search + links) */}
          <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 items-center space-x-6">
            <div className="relative group">
              <form onSubmit={handleSearch} className="flex items-center gap-1.5 bg-muted/50 border border-border rounded-full px-3 py-1.5">
                <Search className="w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="e.g. Iran US war"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-transparent text-sm font-inter outline-none w-36 placeholder:text-muted-foreground/60"
                />
              </form>
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-56 bg-foreground text-white text-xs font-inter rounded-lg px-3 py-2 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none z-50 shadow-lg">
                Search any topic to find news & explore its timeline
                <div className="absolute -top-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-foreground rotate-45" />
              </div>
            </div>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-primary px-3 py-2 text-base font-inter font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-foreground hover:text-primary"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              <form onSubmit={handleSearch} className="flex items-center gap-2 px-3 py-2 mb-1">
                <Search className="w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="e.g. Iran US war"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="bg-muted/50 border border-border rounded-full text-sm font-inter outline-none w-full px-3 py-1.5 placeholder:text-muted-foreground/60"
                />
              </form>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-foreground hover:text-primary block px-3 py-2 text-base font-inter font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;