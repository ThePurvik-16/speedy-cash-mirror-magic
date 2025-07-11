import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PageLoader } from "@/components/ui/loader";
import { Phone, Mail, MessageCircle, FileText, CreditCard, Shield } from "lucide-react";

export default function Support() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <PageLoader />;

  const supportOptions = [
    {
      icon: <Phone className="h-8 w-8" />,
      title: "Phone Support",
      description: "Speak with our customer service team",
      contact: "1-888-ADVANCE-1",
      hours: "Mon-Fri: 8AM-8PM EST"
    },
    {
      icon: <Mail className="h-8 w-8" />,
      title: "Email Support", 
      description: "Send us your questions via email",
      contact: "support@advanceamerica.com",
      hours: "Response within 24 hours"
    },
    {
      icon: <MessageCircle className="h-8 w-8" />,
      title: "Live Chat",
      description: "Chat with our support team",
      contact: "Available on website",
      hours: "Mon-Fri: 9AM-6PM EST"
    }
  ];

  const faqItems = [
    {
      question: "How long does the loan approval process take?",
      answer: "Most applications are approved within 15 minutes during business hours."
    },
    {
      question: "What documents do I need to apply?",
      answer: "You'll need a valid ID, proof of income, and bank account information."
    },
    {
      question: "Can I pay off my loan early?",
      answer: "Yes, you can pay off your loan early without any prepayment penalties."
    },
    {
      question: "What if I can't make my payment on time?",
      answer: "Contact us immediately. We offer payment plans and extensions in many cases."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Customer Support</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            We're here to help you with all your questions and concerns
          </p>
        </div>
      </section>

      {/* Support Options */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-slide-up">
            Get Help Now
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {supportOptions.map((option, index) => (
              <Card key={index} className={`text-center hover-lift animate-scale-in animate-stagger-${index + 1}`}>
                <CardContent className="p-8">
                  <div className="text-blue-600 mb-4 flex justify-center">
                    {option.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-2">{option.title}</h3>
                  <p className="text-muted-foreground mb-4">{option.description}</p>
                  <p className="font-semibold text-blue-600 mb-2">{option.contact}</p>
                  <p className="text-sm text-muted-foreground">{option.hours}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 animate-slide-up">
            Frequently Asked Questions
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {faqItems.map((item, index) => (
              <Card key={index} className={`animate-fade-in animate-stagger-${index + 1}`}>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">{item.question}</h3>
                  <p className="text-muted-foreground">{item.answer}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Send Us a Message
            </h2>
            <Card>
              <CardContent className="p-8">
                <form className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <Input placeholder="First Name" />
                    <Input placeholder="Last Name" />
                  </div>
                  <Input placeholder="Email Address" type="email" />
                  <Input placeholder="Phone Number" />
                  <Input placeholder="Subject" />
                  <Textarea placeholder="Your Message" rows={5} />
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}