import { useEffect, useState } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { CheckCircle2, XCircle, Loader2 } from "lucide-react";

const Unsubscribe = () => {
  const [searchParams] = useSearchParams();
  const token = searchParams.get("token");
  const [status, setStatus] = useState<"loading" | "success" | "error">("loading");
  const [message, setMessage] = useState("");

  useEffect(() => {
    const unsubscribe = async () => {
      if (!token) {
        setStatus("error");
        setMessage("Invalid unsubscribe link. Please check your email for the correct link.");
        return;
      }

      try {
        const response = await fetch(`https://api.nible.news/api/newsletter/unsubscribe?token=${token}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          setStatus("success");
          setMessage("You have been successfully unsubscribed from the Nible newsletter.");
        } else {
          const data = await response.json().catch(() => ({}));
          setStatus("error");
          setMessage(
            data.message || 
            "Unable to unsubscribe. The link may have expired. Please contact us at hello@nible.news for assistance."
          );
        }
      } catch (error) {
        setStatus("error");
        setMessage(
          "Something went wrong. Please try again later or contact us at hello@nible.news for assistance."
        );
      }
    };

    unsubscribe();
  }, [token]);

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-24 pb-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white border border-border rounded-2xl p-8 shadow-sm">
              {status === "loading" && (
                <div className="text-center py-12">
                  <Loader2 className="w-12 h-12 text-primary animate-spin mx-auto mb-4" />
                  <h1 className="text-2xl font-poppins font-semibold text-foreground mb-2">
                    Unsubscribing...
                  </h1>
                  <p className="text-muted-foreground font-inter">
                    Please wait while we process your request.
                  </p>
                </div>
              )}

              {status === "success" && (
                <div className="text-center py-12">
                  <CheckCircle2 className="w-16 h-16 text-green-500 mx-auto mb-6" />
                  <h1 className="text-3xl font-poppins font-bold text-foreground mb-4">
                    Successfully Unsubscribed
                  </h1>
                  <p className="text-muted-foreground font-inter mb-8 text-lg">
                    {message}
                  </p>
                  <p className="text-muted-foreground font-inter mb-6">
                    We're sorry to see you go. If you change your mind, you can always subscribe again from our homepage.
                  </p>
                  <Link
                    to="/"
                    className="inline-block bg-primary hover:bg-primary-hover text-primary-foreground px-6 py-3 rounded-lg font-inter font-medium transition-colors"
                  >
                    Return to Homepage
                  </Link>
                </div>
              )}

              {status === "error" && (
                <div className="text-center py-12">
                  <XCircle className="w-16 h-16 text-red-500 mx-auto mb-6" />
                  <h1 className="text-3xl font-poppins font-bold text-foreground mb-4">
                    Unsubscribe Failed
                  </h1>
                  <p className="text-muted-foreground font-inter mb-8 text-lg">
                    {message}
                  </p>
                  <div className="space-y-4">
                    <p className="text-muted-foreground font-inter">
                      If you continue to have issues, please contact us:
                    </p>
                    <a
                      href="mailto:hello@nible.news"
                      className="inline-block bg-primary hover:bg-primary-hover text-primary-foreground px-6 py-3 rounded-lg font-inter font-medium transition-colors"
                    >
                      Contact Support
                    </a>
                    <div className="pt-4">
                      <Link
                        to="/"
                        className="text-primary hover:text-primary-hover font-inter font-medium"
                      >
                        ← Return to Homepage
                      </Link>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Additional Info */}
            <div className="mt-8 text-center">
              <p className="text-sm text-muted-foreground font-inter">
                If you didn't request to unsubscribe, you can safely ignore this page.
              </p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Unsubscribe;

