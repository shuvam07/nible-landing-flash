import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
const FAQ = () => {
  const faqs = [
    {
      question: "How is Nible different from other news apps?",
      answer:
        "Nible is built for speed and privacy. We provide 60-word summaries of Dutch local and global news, completely ad-free and with no login required. We don't track your data or sell your information.",
    },
    {
      question: "Why no login or account?",
      answer:
        "We believe you should be able to read the news without giving away your personal data. Nible works instantly after download—no sign-up, no email, and no password needed.",
    },
    {
      question: "Is it really ad-free?",
      answer:
        "Yes. Nible is 100% ad-free. You won't find any banners, popups, or sponsored content interrupting your reading experience.",
    },
    {
      question: "What kind of news do you cover?",
      answer:
        "We cover a wide range of Dutch local news and major global stories, all condensed into clear 60-word briefs so you can stay informed in minutes.",
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