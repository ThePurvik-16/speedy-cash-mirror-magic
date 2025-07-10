
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const FAQ = () => {
  const faqs = [
    {
      question: "How quickly can I get my money?",
      answer: "Once approved, you can receive your funds as soon as the same business day. Most customers receive their money within 24 hours of approval."
    },
    {
      question: "What do I need to apply?",
      answer: "You'll need a valid ID, proof of income, an active checking account, and a working phone number. The entire application process can be completed online."
    },
    {
      question: "Do you check my credit score?",
      answer: "We may perform a credit check, but we also consider other factors like your income and employment history. Bad credit doesn't automatically disqualify you."
    },
    {
      question: "What are your interest rates and fees?",
      answer: "Our rates and fees vary by state and loan product. We're transparent about all costs upfront - you'll see exactly what you'll pay before you agree to anything."
    },
    {
      question: "Can I pay off my loan early?",
      answer: "Yes! You can pay off your loan early at any time without penalty. This can help you save on interest charges."
    },
    {
      question: "What if I can't make my payment on time?",
      answer: "Contact us immediately if you're having trouble making a payment. We offer various options to help, including payment plans and extensions."
    },
    {
      question: "Is my personal information secure?",
      answer: "Absolutely. We use bank-level encryption and security measures to protect your personal and financial information. Your data is never shared with unauthorized parties."
    },
    {
      question: "Do you have physical store locations?",
      answer: "Yes! We have over 1,000 store locations across the country. You can visit a store for in-person service or complete everything online."
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get answers to the most common questions about our loan products and services.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-lg border shadow-sm">
                <AccordionTrigger className="px-6 py-4 text-left hover:no-underline hover:bg-gray-50 rounded-lg">
                  <span className="font-semibold text-blue-900">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-4 text-gray-700 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Still have questions? Our customer service team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-blue-900 hover:bg-blue-800">
              Contact Support
            </Button>
            <Button size="lg" variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white">
              Call 1-888-SPEEDY-1
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
