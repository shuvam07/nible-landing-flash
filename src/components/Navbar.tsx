import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Features", href: "#features" },
    { name: "Contact", href: "mailto:hello@nible.news" }
  ];

  return (
    <nav className="fixed top-0 w-full bg-blue/50 backdrop-blur-md border-b border-border z-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand + Tagline */}
          <div className="flex items-center gap-4">
            <a href="#" aria-label="Nible home" className="flex items-center gap-2">
              <img
                src="/images/nible/briefly.png"
                alt=""
                className="h-12 w-12 rounded-md object-contain"
                loading="lazy"
              />
              <span className="text-white font-poppins font-semibold text-2xl tracking-tight">Nible</span>
            </a>
            <span className="hidden md:inline text-white/90 text-base font-inter">Quick reads for busy minds.</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-20 flex items-baseline space-x-8 text-lg">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground px-3 py-2 text-base font-inter font-medium transition-colors"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              asChild
              className="bg-primary hover:bg-primary-hover text-primary-foreground font-inter font-medium"
            >
              <a href="#ios-install">Get the iOS App</a>
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-muted-foreground hover:text-foreground"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground block px-3 py-2 text-base font-inter font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="pt-4">
                <Button 
                  asChild
                  className="w-full bg-primary hover:bg-primary-hover text-primary-foreground font-inter font-medium"
                >
                  <a href="#ios-install">Get the iOS App</a>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;