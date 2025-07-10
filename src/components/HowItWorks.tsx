
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { FileText, Search, DollarSign, CheckCircle } from "lucide-react";

export const HowItWorks = () => {
  const steps = [
    {
      icon: <FileText className="h-12 w-12 text-orange-500" />,
      step: "01",
      title: "Apply Online",
      description: "Complete our simple online application in just a few minutes. No paperwork required."
    },
    {
      icon: <Search className="h-12 w-12 text-orange-500" />,
      step: "02", 
      title: "Quick Review",
      description: "Our team reviews your application quickly and provides instant pre-approval decisions."
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-orange-500" />,
      step: "03",
      title: "Get Approved",
      description: "Receive your approval decision within minutes, not days. Fast and reliable process."
    },
    {
      icon: <DollarSign className="h-12 w-12 text-orange-500" />,
      step: "04",
      title: "Receive Funds",
      description: "Get your money deposited directly into your bank account as soon as the same day."
    }
  ];

  return (
    <section className="py-16 bg-white" id="how-it-works">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting the cash you need is simple and straightforward. 
            Follow these four easy steps to get started.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {steps.map((step, index) => (
            <Card key={index} className="text-center border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="relative mb-6">
                  <div className="absolute -top-4 -right-4 text-6xl font-bold text-gray-100">
                    {step.step}
                  </div>
                  <div className="flex justify-center">
                    {step.icon}
                  </div>
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold">
            Start Your Application
          </Button>
        </div>
      </div>
    </section>
  );
};
