import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "How do I book a session?",
      answer: "Simply click the 'Book on WhatsApp' button and send us a message with your preferred date, time, and service. Our team will confirm your booking within 30 minutes.",
    },
    {
      question: "What should I prepare before the therapist arrives?",
      answer: "Prepare a clean, quiet space with a bed or floor mat. Wear loose, comfortable clothing. We bring our own massage table, fresh linens, and organic oils.",
    },
    {
      question: "Are your therapists verified and trained?",
      answer: "Yes! All our therapists are background-verified, trained in traditional Kerala Ayurvedic methods, and have minimum 5 years of professional experience.",
    },
    {
      question: "Which cities do you currently serve?",
      answer: "We currently operate in Bangalore, Mumbai, Delhi, Chennai, and Hyderabad. We're expanding to more cities soon!",
    },
    {
      question: "What is your cancellation policy?",
      answer: "Free cancellation up to 4 hours before your scheduled session. Cancellations within 4 hours may incur a 25% fee.",
    },
    {
      question: "Do you offer packages or subscriptions?",
      answer: "Yes! We offer 4-session and 8-session packages with 15-20% savings. Perfect for ongoing wellness routines. Ask us for details on WhatsApp.",
    },
  ];

  return (
    <section id="faq" className="py-20 lg:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-1.5 bg-sage-light text-sage-dark text-sm font-medium rounded-full mb-4">
            Common Questions
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about our services.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card rounded-xl border border-border px-6 shadow-soft"
              >
                <AccordionTrigger className="text-left font-serif text-lg hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
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

export default FAQSection;
