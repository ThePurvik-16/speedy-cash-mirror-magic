import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { PageLoader } from "@/components/ui/loader";
import { FileText, Shield, Scale, AlertTriangle, Eye, Users } from "lucide-react";

export default function Legal() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <PageLoader />;

  const legalSections = [
    {
      icon: <FileText className="h-8 w-8" />,
      title: "Terms of Service",
      description: "Our complete terms and conditions for using our services"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Privacy Policy", 
      description: "How we collect, use, and protect your personal information"
    },
    {
      icon: <Scale className="h-8 w-8" />,
      title: "State Disclosures",
      description: "State-specific regulations and disclosure requirements"
    },
    {
      icon: <AlertTriangle className="h-8 w-8" />,
      title: "Responsible Lending",
      description: "Our commitment to fair and responsible lending practices"
    },
    {
      icon: <Eye className="h-8 w-8" />,
      title: "Complaints Process",
      description: "How to file a complaint and our resolution process"
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Accessibility",
      description: "Our commitment to making services accessible to everyone"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-slate-800 to-slate-900 text-white py-20">
        <div className="container mx-auto px-4 text-center animate-fade-in">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Legal Information</h1>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Important legal documents and compliance information
          </p>
        </div>
      </section>

      {/* Legal Sections */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {legalSections.map((section, index) => (
              <Card key={index} className={`hover-lift cursor-pointer animate-scale-in animate-stagger-${index % 3 + 1}`}>
                <CardContent className="p-8 text-center">
                  <div className="text-blue-600 mb-4 flex justify-center">
                    {section.icon}
                  </div>
                  <h3 className="text-xl font-bold mb-4">{section.title}</h3>
                  <p className="text-muted-foreground">{section.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Notice */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold mb-8">Regulatory Compliance</h2>
            <Card>
              <CardContent className="p-8">
                <p className="text-lg leading-relaxed mb-6">
                  Advance America is licensed and regulated by state financial regulatory agencies. 
                  We are committed to operating in full compliance with all applicable federal, 
                  state, and local laws and regulations.
                </p>
                <p className="text-muted-foreground">
                  Licensed by the Department of Financial Protection and Innovation under the 
                  California Deferred Deposit Transaction Law and other applicable state regulations.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Important Notices */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto animate-slide-up">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">Important Notices</h2>
            <div className="space-y-6">
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">Loan Terms and Conditions</h3>
                  <p className="text-muted-foreground">
                    All loans are subject to verification and eligibility requirements. 
                    Not all applicants will qualify. Rates, terms, and conditions apply.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">APR Disclosure</h3>
                  <p className="text-muted-foreground">
                    Annual Percentage Rates (APRs) vary by loan type and state. 
                    All rates and terms will be clearly disclosed before loan approval.
                  </p>
                </CardContent>
              </Card>
              
              <Card>
                <CardContent className="p-6">
                  <h3 className="font-bold text-lg mb-3">Equal Credit Opportunity</h3>
                  <p className="text-muted-foreground">
                    We do not discriminate on the basis of race, color, religion, national origin, 
                    sex, marital status, age, or other protected characteristics.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}