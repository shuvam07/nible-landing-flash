import { Button } from "@/components/ui/button";
import { Smartphone } from "lucide-react";
import AppStoreBadge from "@/assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg";
import PlayStoreBadge from "@/assets/Download-on-the-android-store.svg";

const AppDownloadBanner = () => {
  return (
    <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-accent/10 border border-primary/20 rounded-2xl p-6 sm:p-8">
      <div className="flex flex-col sm:flex-row items-center gap-6">
        {/* Icon + Text */}
        <div className="flex-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2 mb-2">
            <Smartphone className="w-5 h-5 text-primary" />
            <span className="text-primary font-poppins font-semibold text-lg">
              Get the full experience
            </span>
          </div>
          <p className="text-muted-foreground font-inter text-sm max-w-md">
            Download Nible for personalized feeds, push notifications for breaking news,
            offline reading, and more categories — all ad-free.
          </p>
        </div>

        {/* Store Badges */}
        <div className="flex flex-col sm:flex-row gap-3 shrink-0">
          <a
            href="https://apps.apple.com/in/app/nible-news/id6748324981?utm_source=nible_website&utm_medium=web&utm_campaign=website_cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={AppStoreBadge}
              alt="Download on the App Store"
              className="h-10"
            />
          </a>
          <a
            href="https://play.google.com/store/apps/details?id=com.nible.news&utm_source=nible_website&utm_medium=web&utm_campaign=website_cta"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={PlayStoreBadge}
              alt="Get it on Google Play"
              className="h-10"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default AppDownloadBanner;
