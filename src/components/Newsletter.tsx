import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    try {
      // Placeholder for API call
      // await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email }) });
      
      setIsSubmitted(true);
      toast({
        title: "Welcome to the waitlist!",
        description: "We'll keep you updated on Nible's Android launch.",
      });
      
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive",
      });
    }
  };

  return (
    <section className="py-24 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="mb-8">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-2xl mb-6">
              <Mail className="w-8 h-8 text-primary" />
            </div>
            
            <h2 className="text-4xl sm:text-5xl font-poppins font-bold text-foreground mb-6">
              Join the
              <span className="text-primary block">Waitlist</span>
            </h2>
            
            <p className="text-xl text-muted-foreground font-inter mb-8">
              Be the first to know when Nible launches. Plus, get exclusive updates about new features and improvements.
            </p>
          </div>

          {!isSubmitted ? (
            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="email"
                  placeholder="Enter your email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-6 py-4 text-lg font-inter rounded-xl border-border focus:border-primary"
                  required
                />
                <Button 
                  type="submit"
                  size="lg"
                  className="bg-primary hover:bg-primary-hover text-primary-foreground font-inter font-semibold px-8 py-4 rounded-xl"
                >
                  Join Waitlist
                </Button>
              </div>
              
              <p className="text-sm text-muted-foreground font-inter mt-4">
                No spam, ever. Unsubscribe anytime with one click.
              </p>
            </form>
          ) : (
            <div className="max-w-md mx-auto">
              <div className="bg-card border border-border rounded-2xl p-8">
                <CheckCircle className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-xl font-poppins font-semibold text-card-foreground mb-2">
                  You're on the list!
                </h3>
                <p className="text-muted-foreground font-inter">
                  We'll notify you as soon as Nible is available on Android.
                </p>
              </div>
            </div>
          )}

          {/* Benefits */}
          <div className="mt-16 grid sm:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary font-bold text-xl">📱</span>
              </div>
              <h4 className="font-poppins font-semibold text-foreground mb-2">
                Early Access
              </h4>
              <p className="text-muted-foreground font-inter text-sm">
                Get Nible before it's available to the general public
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-accent font-bold text-xl">✨</span>
              </div>
              <h4 className="font-poppins font-semibold text-foreground mb-2">
                Feature Updates
              </h4>
              <p className="text-muted-foreground font-inter text-sm">
                Exclusive previews of new features and improvements
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-xl mx-auto mb-4 flex items-center justify-center">
                <span className="text-primary font-bold text-xl">🎁</span>
              </div>
              <h4 className="font-poppins font-semibold text-foreground mb-2">
                Special Perks
              </h4>
              <p className="text-muted-foreground font-inter text-sm">
                Exclusive content and early access to premium features
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;