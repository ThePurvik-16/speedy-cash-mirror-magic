
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CreditCard, Calendar, Car, TrendingUp, DollarSign, Clock } from "lucide-react";

export const LoanProducts = () => {
  const products = [
    {
      icon: <CreditCard className="h-8 w-8 text-orange-500" />,
      title: "Payday Loans",
      description: "Quick cash advance until your next payday",
      amount: "Up to $1,500",
      features: ["Same day funding", "No credit check", "Online application"],
      id: "payday"
    },
    {
      icon: <Calendar className="h-8 w-8 text-orange-500" />,
      title: "Installment Loans",
      description: "Flexible repayment terms over multiple months",
      amount: "Up to $5,000",
      features: ["Fixed payments", "Longer terms", "Build credit history"],
      id: "installment"
    },
    {
      icon: <Car className="h-8 w-8 text-orange-500" />,
      title: "Title Loans",
      description: "Use your vehicle title as collateral",
      amount: "Up to $10,000",
      features: ["Keep your car", "Fast approval", "Competitive rates"],
      id: "title"
    },
    {
      icon: <TrendingUp className="h-8 w-8 text-orange-500" />,
      title: "Line of Credit",
      description: "Revolving credit line for ongoing expenses",
      amount: "Up to $4,000",
      features: ["Pay as you use", "Reusable credit", "Online access"],
      id: "credit"
    }
  ];

  return (
    <section className="py-16 bg-gray-50" id="loan-products">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            Choose Your Loan Product
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We offer a variety of loan products to meet your financial needs. 
            Find the right solution for your situation.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <Card key={product.id} className="hover:shadow-lg transition-shadow border-0 shadow-md">
              <CardHeader className="text-center pb-4">
                <div className="flex justify-center mb-4">
                  {product.icon}
                </div>
                <CardTitle className="text-xl font-bold text-blue-900">
                  {product.title}
                </CardTitle>
                <CardDescription className="text-gray-600">
                  {product.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-center mb-4">
                  <div className="text-2xl font-bold text-orange-500 mb-2">
                    {product.amount}
                  </div>
                </div>
                <ul className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center text-sm text-gray-700">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Button className="w-full bg-blue-900 hover:bg-blue-800">
                  Learn More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-16 bg-white rounded-xl p-8 shadow-lg">
          <div className="grid md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">1M+</div>
              <div className="text-gray-600">Customers Served</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">$2B+</div>
              <div className="text-gray-600">Loans Funded</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">15min</div>
              <div className="text-gray-600">Average Approval Time</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-blue-900 mb-2">1,000+</div>
              <div className="text-gray-600">Store Locations</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
