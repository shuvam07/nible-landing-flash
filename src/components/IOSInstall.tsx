import { Apple } from "lucide-react";
import AppStoreBadge from "@/assets/Download_on_the_App_Store_Badge_US-UK_RGB_blk_092917.svg";

const IOSInstall = () => {
  return (
    <section id="ios-install" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="flex items-center gap-2 text-foreground/80">
            <Apple className="h-5 w-5" />
            <span className="font-inter">Available on iOS</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-poppins font-semibold">Get the Nible app</h3>
          <a
            href="https://apps.apple.com/in/app/nible-news/id6748324981"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={AppStoreBadge}
              alt="Download on the App Store"
              className="h-12"
            />
          </a>
        </div>
      </div>
    </section>
  );
};
export default IOSInstall;