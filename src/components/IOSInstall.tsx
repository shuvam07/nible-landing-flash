import { Button } from "@/components/ui/button";
import { Apple, Download, Smartphone } from "lucide-react";
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
            href="https://apps.apple.com/app/nible"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-lg bg-black text-white px-5 py-3 hover:bg-zinc-900"
          >
            <Smartphone className="h-5 w-5" />
            Download on the App Store
          </a>
        </div>
      </div>
    </section>
  );
};
export default IOSInstall;