import { useState } from "react";
import { X } from "lucide-react";
import AppStoreBadge from "@/assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg";
import PlayStoreBadge from "@/assets/Download-on-the-android-store.svg";

const StickyAppBanner = () => {
  const [dismissed, setDismissed] = useState(false);

  if (dismissed) return null;

  return (
    <div className="fixed bottom-4 right-4 z-50 w-[320px] bg-white rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.12)] border border-border/50 p-5">
      {/* Close */}
      <button
        onClick={() => setDismissed(true)}
        className="absolute -top-2 -right-2 bg-primary text-white rounded-full p-1 shadow-md hover:bg-primary/90 transition-colors"
        aria-label="Dismiss"
      >
        <X className="w-4 h-4" />
      </button>

      <p className="text-foreground font-poppins font-bold text-base text-center mb-4">
        Get a personalized experience!
      </p>

      {/* Store badges */}
      <div className="flex items-center justify-center gap-3">
        <a
          href="https://play.google.com/store/apps/details?id=com.nible.news&utm_source=nible_website&utm_medium=web&utm_campaign=website_cta"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-lg border border-border hover:border-primary/40 transition-colors overflow-hidden"
        >
          <img src={PlayStoreBadge} alt="Google Play" className="h-11" />
        </a>
        <a
          href="https://apps.apple.com/in/app/nible-news/id6748324981?utm_source=nible_website&utm_medium=web&utm_campaign=website_cta"
          target="_blank"
          rel="noopener noreferrer"
          className="block rounded-lg border border-border hover:border-primary/40 transition-colors overflow-hidden"
        >
          <img src={AppStoreBadge} alt="App Store" className="h-11" />
        </a>
      </div>
    </div>
  );
};

export default StickyAppBanner;
