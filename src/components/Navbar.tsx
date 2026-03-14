import { useState } from "react";
import { Menu, X, Search } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState(() => {
    const params = new URLSearchParams(window.location.search);
    return params.get("q") || "";
  });

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
    <nav className="fixed top-8 w-full bg-white/95 backdrop-blur-md border-b border-border z-50 shadow-sm">
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
            <form onSubmit={handleSearch} className="flex items-center gap-1.5 bg-muted/50 border border-border rounded-full px-3 py-1.5">
              <Search className="w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search news..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="bg-transparent text-sm font-inter outline-none w-36 placeholder:text-muted-foreground/60"
              />
            </form>
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
                  placeholder="Search news..."
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