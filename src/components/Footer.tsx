import { Twitter, Linkedin, Instagram, Mail } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="py-16 bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <h3 className="text-2xl font-poppins font-bold text-primary mb-4">Nible</h3>
            <p className="text-muted-foreground font-inter mb-6 max-w-md">
              AI-summarized news in a flash. Quick reads for busy minds.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="mailto:hello@nible.app" className="text-muted-foreground hover:text-primary transition-colors">
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
              <li><a href="#ios-install" className="text-muted-foreground hover:text-foreground transition-colors">Download</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center">
          <p className="text-muted-foreground font-inter text-sm">
            © 2024 Nible. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;