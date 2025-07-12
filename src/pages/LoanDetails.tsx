
import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { CheckCircle, AlertCircle, DollarSign, Calendar, Percent } from "lucide-react";

const LoanDetails = () => {
  const { type } = useParams();

  const loanTypes = {
    payday: {
      title: "Payday Loans",
      subtitle: "Quick cash advance until your next payday",
      maxAmount: "$1,500",
      description: "Payday loans are short-term loans designed to help you cover unexpected expenses until your next paycheck arrives. These loans are typically due on your next payday and can provide quick access to cash when you need it most.",
      features: [
        "Same day funding available",
        "No credit check required",
        "Online application process",
        "Funds deposited directly to your account",
        "Flexible repayment options"
      ],
      requirements: [
        "Be at least 18 years old",
        "Have a valid government-issued ID",
        "Provide proof of regular income",
        "Have an active checking account",
        "Provide a working phone number"
      ],
      terms: {
        amount: "$100 - $1,500",
        term: "14 - 30 days",
        apr: "15% - 30%",
        fees: "$15 - $30 per $100 borrowed"
      },
      howItWorks: [
        "Complete our quick online application",
        "Get approved in minutes",
        "Receive funds the same day",
        "Repay on your next payday"
      ]
    },
    installment: {
      title: "Installment Loans",
      subtitle: "Flexible repayment terms over multiple months",
      maxAmount: "$5,000",
      description: "Installment loans provide larger loan amounts with longer repayment terms, allowing you to make fixed monthly payments over several months. This makes it easier to budget and manage your finances.",
      features: [
        "Fixed monthly payments",
        "Longer repayment terms",
        "Larger loan amounts",
        "Help build credit history",
        "No prepayment penalties"
      ],
      requirements: [
        "Be at least 18 years old",
        "Have a valid government-issued ID",
        "Provide proof of steady income",
        "Have an active checking account",
        "Meet minimum income requirements"
      ],
      terms: {
        amount: "$500 - $5,000",
        term: "6 - 24 months",
        apr: "12% - 25%",
        fees: "Origination fee may apply"
      },
      howItWorks: [
        "Apply online or in-store",
        "Choose your loan amount and term",
        "Get approved and receive funds",
        "Make fixed monthly payments"
      ]
    },
    title: {
      title: "Title Loans",
      subtitle: "Use your vehicle title as collateral",
      maxAmount: "$10,000",
      description: "Title loans allow you to borrow money using your vehicle's title as collateral. You can continue driving your car while repaying the loan, making it a convenient option for accessing larger amounts of cash.",
      features: [
        "Keep driving your vehicle",
        "Fast approval process",
        "Competitive interest rates",
        "Larger loan amounts available",
        "Flexible repayment options"
      ],
      requirements: [
        "Own your vehicle outright",
        "Have a clear vehicle title",
        "Valid government-issued ID",
        "Proof of income",
        "Vehicle registration and insurance"
      ],
      terms: {
        amount: "$1,000 - $10,000",
        term: "12 - 36 months",
        apr: "8% - 20%",
        fees: "Title processing fee may apply"
      },
      howItWorks: [
        "Bring your vehicle and title to our store",
        "Get your vehicle appraised",
        "Receive your loan approval",
        "Get cash and keep driving your car"
      ]
    },
    credit: {
      title: "Line of Credit",
      subtitle: "Revolving credit line for ongoing expenses",
      maxAmount: "$4,000",
      description: "A line of credit gives you access to funds whenever you need them, up to your approved credit limit. You only pay interest on the amount you use, and as you repay, the credit becomes available again.",
      features: [
        "Access funds when needed",
        "Pay only for what you use",
        "Reusable credit line",
        "Online account management",
        "No collateral required"
      ],
      requirements: [
        "Be at least 18 years old",
        "Have a valid government-issued ID",
        "Provide proof of regular income",
        "Have an active checking account",
        "Meet creditworthiness criteria"
      ],
      terms: {
        amount: "$500 - $4,000",
        term: "Revolving credit",
        apr: "18% - 35%",
        fees: "Monthly maintenance fee may apply"
      },
      howItWorks: [
        "Apply for your credit line",
        "Get approved for your limit",
        "Access funds online or in-store",
        "Repay and reuse your available credit"
      ]
    }
  };

  const currentLoan = loanTypes[type as keyof typeof loanTypes];

  if (!currentLoan) {
    return (
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="container mx-auto px-4 py-8">
          <div className="text-center">
            <h1 className="text-3xl font-bold text-blue-900 mb-4">Loan Type Not Found</h1>
            <p className="text-gray-600">The loan type you're looking for doesn't exist.</p>
            <Button className="mt-4 bg-blue-900 hover:bg-blue-800">
              Back to Home
            </Button>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Hero Section */}
          <div className="text-center mb-12">
            <h1 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              {currentLoan.title}
            </h1>
            <p className="text-xl text-gray-600 mb-6">
              {currentLoan.subtitle}
            </p>
            <div className="flex justify-center items-center space-x-8 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-orange-500">
                  {currentLoan.maxAmount}
                </div>
                <div className="text-gray-600">Maximum Amount</div>
              </div>
            </div>
            <Link to="/apply">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
                Apply Now
              </Button>
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              {/* About */}
              <Card>
                <CardHeader>
                  <CardTitle>About {currentLoan.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-6">
                    {currentLoan.description}
                  </p>
                  
                  <h3 className="text-xl font-bold text-blue-900 mb-4">Key Features</h3>
                  <ul className="space-y-2">
                    {currentLoan.features.map((feature, index) => (
                      <li key={index} className="flex items-center">
                        <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>

              {/* How It Works */}
              <Card>
                <CardHeader>
                  <CardTitle>How It Works</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    {currentLoan.howItWorks.map((step, index) => (
                      <div key={index} className="flex items-start space-x-3">
                        <div className="w-8 h-8 bg-blue-900 text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0">
                          {index + 1}
                        </div>
                        <div>
                          <p className="text-gray-700">{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Requirements */}
              <Card>
                <CardHeader>
                  <CardTitle>Requirements</CardTitle>
                  <CardDescription>
                    What you need to qualify for this loan
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {currentLoan.requirements.map((requirement, index) => (
                      <li key={index} className="flex items-center">
                        <AlertCircle className="h-5 w-5 text-blue-500 mr-3 flex-shrink-0" />
                        <span className="text-gray-700">{requirement}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Loan Terms */}
              <Card>
                <CardHeader>
                  <CardTitle>Loan Terms</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <DollarSign className="h-5 w-5 text-green-500" />
                    <div>
                      <div className="font-medium">Loan Amount</div>
                      <div className="text-sm text-gray-600">{currentLoan.terms.amount}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Calendar className="h-5 w-5 text-blue-500" />
                    <div>
                      <div className="font-medium">Loan Term</div>
                      <div className="text-sm text-gray-600">{currentLoan.terms.term}</div>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Percent className="h-5 w-5 text-orange-500" />
                    <div>
                      <div className="font-medium">APR Range</div>
                      <div className="text-sm text-gray-600">{currentLoan.terms.apr}</div>
                    </div>
                  </div>
                  
                  <div className="pt-4 border-t">
                    <div className="font-medium mb-1">Fees</div>
                    <div className="text-sm text-gray-600">{currentLoan.terms.fees}</div>
                  </div>
                </CardContent>
              </Card>

              {/* Apply Now */}
              <Card className="bg-blue-50 border-blue-200">
                <CardHeader>
                  <CardTitle>Ready to Apply?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Get started with your application today. The process is quick and easy.
                  </p>
                  <Link to="/apply">
                    <Button className="w-full bg-orange-500 hover:bg-orange-600 mb-2">
                      Apply Online
                    </Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Contact */}
              <Card>
                <CardHeader>
                  <CardTitle>Questions?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">
                    Our customer service team is here to help.
                  </p>
                  <div className="space-y-2">
                    <div className="text-sm">
                      <span className="font-medium">Phone:</span> 1-888-ADVANCE-1
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">Email:</span> support@advanceamerica.com
                    </div>
                  </div>
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

export default LoanDetails;
