import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How is Nible different from other news apps?",
      answer: "Nible uses AI to create concise summaries and prioritizes the latest news first with our unique two-pointer logic. Unlike other apps that show stories chronologically, we ensure trending and breaking news appears at the top of your feed."
    },
    {
      question: "How often is the news updated?",
      answer: "Nible updates continuously throughout the day, 24/7. Our AI system monitors trusted sources in real-time and delivers new stories as they break, ensuring you're always up to date with the latest developments."
    },
    {
      question: "Can I read news offline?",
      answer: "Yes! Nible allows you to download stories for offline reading. Perfect for commutes, flights, or areas with poor connectivity. Downloaded stories include full AI summaries and key highlights."
    },
    {
      question: "How does Nible protect my privacy?",
      answer: "Privacy is our priority. We don't track your reading habits, sell your data, or share personal information with third parties. Your news consumption stays completely private, and you can use the app without creating an account."
    },
    {
      question: "When will Nible be available on Android?",
      answer: "We're working hard on the Android version! Join our waitlist to be notified as soon as it's ready. We expect to launch on Android in early 2024 with all the same great features as the iOS version."
    }
  ];

  return (
    <section id="faq" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-poppins font-bold text-foreground mb-6">
              Frequently Asked
              <span className="text-primary block">Questions</span>
            </h2>
            <p className="text-xl text-muted-foreground font-inter">
              Everything you need to know about Nible and how it works.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-2xl px-6">
                <AccordionTrigger className="text-left font-poppins font-semibold text-lg hover:text-primary">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground font-inter leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ;