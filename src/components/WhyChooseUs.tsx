
import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Users, Award, HeadphonesIcon, MapPin } from "lucide-react";

export const WhyChooseUs = () => {
  const reasons = [
    {
      icon: <Clock className="h-8 w-8 text-orange-500" />,
      title: "Fast & Easy Process",
      description: "Get approved in minutes with our streamlined online application process."
    },
    {
      icon: <Shield className="h-8 w-8 text-orange-500" />,
      title: "Secure & Safe",
      description: "Your personal information is protected with bank-level security encryption."
    },
    {
      icon: <Users className="h-8 w-8 text-orange-500" />,
      title: "Trusted by Millions",
      description: "Over 1 million customers trust us with their financial needs nationwide."
    },
    {
      icon: <Award className="h-8 w-8 text-orange-500" />,
      title: "Industry Leader",
      description: "20+ years of experience providing reliable financial solutions."
    },
    {
      icon: <HeadphonesIcon className="h-8 w-8 text-orange-500" />,
      title: "24/7 Support",
      description: "Our customer service team is available around the clock to help you."
    },
    {
      icon: <MapPin className="h-8 w-8 text-orange-500" />,
      title: "1,000+ Locations",
      description: "Visit one of our many store locations for in-person service and support."
    }
  ];

  return (
    <section className="py-16 bg-blue-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Why Choose SpeedyCash?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're committed to providing fast, reliable, and transparent financial services 
            that put our customers first.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow bg-white">
              <CardContent className="p-8 text-center">
                <div className="flex justify-center mb-4">
                  {reason.icon}
                </div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">
                  {reason.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-blue-900 mb-2">Trusted & Regulated</h3>
            <p className="text-gray-600">Licensed and regulated in all states where we operate</p>
          </div>
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
                <Award className="h-8 w-8 text-blue-900" />
              </div>
              <span className="text-sm font-medium">BBB Accredited</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
                <Shield className="h-8 w-8 text-blue-900" />
              </div>
              <span className="text-sm font-medium">SSL Secured</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
                <Users className="h-8 w-8 text-blue-900" />
              </div>
              <span className="text-sm font-medium">State Licensed</span>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-200 rounded-lg mb-3 flex items-center justify-center">
                <HeadphonesIcon className="h-8 w-8 text-blue-900" />
              </div>
              <span className="text-sm font-medium">Customer First</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
