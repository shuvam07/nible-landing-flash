import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const FAQ = () => {
  const faqs = [
    {
      question: "How is Nible different from other news apps?",
      answer:
        "Nible uses AI to create concise summaries and prioritizes the latest news first with our unique two-pointer logic. Unlike other apps that show stories chronologically, we ensure trending and breaking news appears at the top of your feed.",
    },
    {
      question: "How often is the news updated?",
      answer:
        "Nible updates continuously throughout the day, 24/7. Our AI system monitors trusted sources in real-time and delivers new stories as they break, ensuring you're always up to date with the latest developments.",
    },
    {
      question: "How does Nible protect my privacy?",
      answer:
        "Privacy is our priority. We don't track your reading habits, sell your data, or share personal information with third parties. Your news consumption stays completely private, and you can use the app without creating an account.",
    },
  ];
  return (
    <section id="faq" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-3xl">
        <h2 className="text-3xl font-poppins font-bold mb-6">FAQ</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((f, idx) => (
            <AccordionItem key={idx} value={`item-${idx}`}>
              <AccordionTrigger>{f.question}</AccordionTrigger>
              <AccordionContent>{f.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
export default FAQ;