
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { PageLoader } from "@/components/ui/loader";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { Phone, Mail, MapPin, Clock, MessageSquare } from "lucide-react";
import { Link } from "react-router-dom";

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  subject: z.string().min(1, "Please select a subject"),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type ContactForm = z.infer<typeof contactSchema>;

const Contact = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const form = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactForm) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log("Contact form submitted:", data);
    toast({
      title: "Message Sent!",
      description: "We'll get back to you within 24 hours.",
    });
    
    form.reset();
    setIsSubmitting(false);
  };

  if (loading) return <PageLoader />;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              Contact Us
            </h1>
            <p className="text-xl text-gray-600">
              We're here to help you with any questions or concerns
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Send us a Message
                </CardTitle>
                <CardDescription>
                  Fill out the form below and we'll get back to you soon
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                  <div>
                    <Label htmlFor="name">Full Name</Label>
                    <Input 
                      {...form.register("name")} 
                      placeholder="John Doe" 
                    />
                    {form.formState.errors.name && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      {...form.register("email")} 
                      type="email" 
                      placeholder="john@example.com" 
                    />
                    {form.formState.errors.email && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input 
                      {...form.register("phone")} 
                      placeholder="200 west Jackson BLWD Chicago Illinois 60606" 
                    />
                    {form.formState.errors.phone && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.phone.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <select
                      {...form.register("subject")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a subject</option>
                      <option value="loan-inquiry">Loan Inquiry</option>
                      <option value="application-status">Application Status</option>
                      <option value="payment-question">Payment Question</option>
                      <option value="technical-support">Technical Support</option>
                      <option value="general-question">General Question</option>
                      <option value="complaint">Complaint</option>
                    </select>
                    {form.formState.errors.subject && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.subject.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      {...form.register("message")} 
                      placeholder="Please describe your question or concern..."
                      rows={5}
                    />
                    {form.formState.errors.message && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.message.message}</p>
                    )}
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full bg-blue-900 hover:bg-blue-800"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Get in Touch</CardTitle>
                  <CardDescription>
                    Multiple ways to reach our customer service team
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="flex items-start space-x-3">
                    <Phone className="h-5 w-5 text-blue-900 mt-1" />
                    <div>
                      <h3 className="font-semibold">Phone Support</h3>
                      <p className="text-gray-600">200 west Jackson BLWD Chicago Illinois 60606</p>
                      <p className="text-sm text-gray-500">Available 24/7</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start space-x-3">
                    <Mail className="h-5 w-5 text-blue-900 mt-1" />
                    <div>
                      <h3 className="font-semibold">Email Support</h3>
                      <p className="text-gray-600">support@advanceamerica.com</p>
                      <p className="text-sm text-gray-500">Response within 24 hours</p>
                    </div>
                  </div>
                  
                  
                  <div className="flex items-start space-x-3">
                    <Clock className="h-5 w-5 text-blue-900 mt-1" />
                    <div>
                      <h3 className="font-semibold">Business Hours</h3>
                      <div className="text-gray-600 text-sm space-y-1">
                        <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                        <p>Saturday: 9:00 AM - 6:00 PM</p>
                        <p>Sunday: 10:00 AM - 4:00 PM</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Frequently Asked Questions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-medium">How long does approval take?</h4>
                      <p className="text-sm text-gray-600">Most applications are approved within 15 minutes.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">When will I receive my funds?</h4>
                      <p className="text-sm text-gray-600">Approved loans are typically funded the same business day.</p>
                    </div>
                    <div>
                      <h4 className="font-medium">What do I need to apply?</h4>
                      <p className="text-sm text-gray-600">Valid ID, proof of income, and an active checking account.</p>
                    </div>
                  </div>
                  <Link to="/support">
                    <Button variant="link" className="p-0 mt-4 text-blue-900">
                      View all FAQs
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
