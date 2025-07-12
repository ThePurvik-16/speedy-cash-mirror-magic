
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DollarSign, Clock, Shield, CheckCircle } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "@/hooks/use-toast";

export const Hero = () => {
  const [formData, setFormData] = useState({
    loanAmount: "",
    state: "",
    zipCode: "",
  });
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.loanAmount || !formData.state || !formData.zipCode) {
      toast({
        title: "Please fill out all fields",
        description: "All fields are required to get started.",
        variant: "destructive",
      });
      return;
    }

    // Store form data in sessionStorage and navigate to apply page
    sessionStorage.setItem('heroFormData', JSON.stringify(formData));
    navigate('/apply');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Get Cash
              <br />
              <span className="text-orange-400">Fast & Easy</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Need money quickly? Get up to $5,000 with our fast and simple online application process. 
              No hidden fees, quick approval, and funds as soon as today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8 animate-slide-up">
              <Link to="/apply">
                <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold hover-glow">
                  Apply Online Now
                </Button>
              </Link>
              <div className="group relative">
                <Link to="/about">
                  <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg opacity-100 group-hover:opacity-100 transition-opacity">
                    Learn More
                  </Button>
                </Link>
              </div>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 animate-scale-in">
              <div className="flex items-center animate-stagger-1">
                <Clock className="h-5 w-5 mr-2 text-orange-400" />
                <span className="text-sm">Fast Approval</span>
              </div>
              <div className="flex items-center animate-stagger-2">
                <DollarSign className="h-5 w-5 mr-2 text-orange-400" />
                <span className="text-sm">Up to $5,000</span>
              </div>
              <div className="flex items-center animate-stagger-3">
                <Shield className="h-5 w-5 mr-2 text-orange-400" />
                <span className="text-sm">Secure Process</span>
              </div>
              <div className="flex items-center animate-stagger-4">
                <CheckCircle className="h-5 w-5 mr-2 text-orange-400" />
                <span className="text-sm">Easy Approval</span>
              </div>
            </div>
          </div>

          {/* Right Content - Application Form */}
          <div className="animate-scale-in">
            <Card className="p-8 bg-white text-gray-800 hover-lift">
              <h3 className="text-2xl font-bold mb-6 text-center text-blue-900">
                Get Started in Minutes
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Loan Amount Needed</label>
                  <select 
                    name="loanAmount"
                    value={formData.loanAmount}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Amount</option>
                    <option value="100-500">$100 - $500</option>
                    <option value="500-1000">$500 - $1,000</option>
                    <option value="1000-2500">$1,000 - $2,500</option>
                    <option value="2500-5000">$2,500 - $5,000</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Your State</label>
                  <select 
                    name="state"
                    value={formData.state}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  >
                    <option value="">Select Your State</option>
                    <option value="CA">California</option>
                    <option value="TX">Texas</option>
                    <option value="FL">Florida</option>
                    <option value="NY">New York</option>
                    <option value="IL">Illinois</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">ZIP Code</label>
                  <input
                    type="text"
                    name="zipCode"
                    value={formData.zipCode}
                    onChange={handleChange}
                    placeholder="Enter your ZIP code"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                  />
                </div>
                <Button type="submit" className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg font-semibold">
                  Get Started Now
                </Button>
              </form>
              <p className="text-xs text-gray-500 mt-4 text-center">
                * Approval and loan amounts subject to verification and eligibility requirements.
              </p>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};
