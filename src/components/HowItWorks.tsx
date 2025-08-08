import { Search, Sparkles, ArrowRight } from "lucide-react";
const HowItWorks = () => {
  const steps = [{
    number: "01",
    icon: Search,
    title: "Fetch & Rank",
    description: "Our intelligent system continuously scans trusted sources, using two-pointer logic to prioritize trending stories first, then other important news.",
    color: "primary"
  }, {
    number: "02",
    icon: Sparkles,
    title: "Summarize & Stack",
    description: "Advanced AI processes each story, creating concise summaries while preserving key facts. Stories are stacked in an intuitive, swipeable format.",
    color: "accent"
  }, {
    number: "03",
    icon: ArrowRight,
    title: "You Swipe, We Refresh",
    description: "Simply swipe to read the next story. Nible keeps your feed fresh with the latest developments as they happen around the world.",
    color: "primary"
  }];
  return;
};
export default HowItWorks;