
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { DollarSign, Clock, Shield, CheckCircle } from "lucide-react";

export const Hero = () => {
  return (
    <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Get Cash
              <br />
              <span className="text-orange-400">Fast & Easy</span>
            </h1>
            <p className="text-xl mb-8 text-blue-100">
              Need money quickly? Get up to $5,000 with our fast and simple online application process. 
              No hidden fees, quick approval, and funds as soon as today.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 text-lg font-semibold">
                Apply Online Now
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900 px-8 py-4 text-lg">
                Find a Store
              </Button>
            </div>

            {/* Key Features */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center">
                <Clock className="h-5 w-5 mr-2 text-orange-400" />
                <span className="text-sm">Fast Approval</span>
              </div>
              <div className="flex items-center">
                <DollarSign className="h-5 w-5 mr-2 text-orange-400" />
                <span className="text-sm">Up to $5,000</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 mr-2 text-orange-400" />
                <span className="text-sm">Secure Process</span>
              </div>
              <div className="flex items-center">
                <CheckCircle className="h-5 w-5 mr-2 text-orange-400" />
                <span className="text-sm">Easy Approval</span>
              </div>
            </div>
          </div>

          {/* Right Content - Application Form */}
          <div>
            <Card className="p-8 bg-white text-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-center text-blue-900">
                Get Started in Minutes
              </h3>
              <form className="space-y-4">
                <div>
                  <label className="block text-sm font-medium mb-2">Loan Amount Needed</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>$100 - $500</option>
                    <option>$500 - $1,000</option>
                    <option>$1,000 - $2,500</option>
                    <option>$2,500 - $5,000</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Your State</label>
                  <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
                    <option>Select Your State</option>
                    <option>California</option>
                    <option>Texas</option>
                    <option>Florida</option>
                    <option>New York</option>
                    <option>Illinois</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">ZIP Code</label>
                  <input
                    type="text"
                    placeholder="Enter your ZIP code"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                </div>
                <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 text-lg font-semibold">
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
