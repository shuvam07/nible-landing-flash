import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail, CheckCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);
  const {
    toast
  } = useToast();
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    try {
      // Placeholder for API call
      // await fetch('/api/subscribe', { method: 'POST', body: JSON.stringify({ email }) });

      setIsSubmitted(true);
      toast({
        title: "Welcome to the waitlist!",
        description: "We'll keep you updated on Nible's Android launch."
      });
      setTimeout(() => {
        setIsSubmitted(false);
        setEmail("");
      }, 3000);
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later.",
        variant: "destructive"
      });
    }
  };
  return;
};
export default Newsletter;