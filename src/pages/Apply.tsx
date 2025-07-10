
import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/hooks/use-toast";
import { DollarSign, Shield, Clock } from "lucide-react";

const applicationSchema = z.object({
  loanAmount: z.string().min(1, "Please select a loan amount"),
  loanPurpose: z.string().min(1, "Please select loan purpose"),
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  address: z.string().min(5, "Please enter your full address"),
  city: z.string().min(2, "Please enter your city"),
  state: z.string().min(2, "Please select your state"),
  zipCode: z.string().min(5, "Please enter a valid ZIP code"),
  ssn: z.string().min(9, "Please enter your SSN"),
  dateOfBirth: z.string().min(1, "Please enter your date of birth"),
  employmentStatus: z.string().min(1, "Please select employment status"),
  monthlyIncome: z.string().min(1, "Please enter your monthly income"),
  bankName: z.string().min(1, "Please enter your bank name"),
  accountType: z.string().min(1, "Please select account type"),
  routingNumber: z.string().min(9, "Please enter routing number"),
  accountNumber: z.string().min(1, "Please enter account number"),
  agreeTerms: z.boolean().refine((val) => val === true, "You must agree to the terms"),
});

type ApplicationForm = z.infer<typeof applicationSchema>;

const Apply = () => {
  const [step, setStep] = useState(1);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<ApplicationForm>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      loanAmount: "",
      loanPurpose: "",
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zipCode: "",
      ssn: "",
      dateOfBirth: "",
      employmentStatus: "",
      monthlyIncome: "",
      bankName: "",
      accountType: "",
      routingNumber: "",
      accountNumber: "",
      agreeTerms: false,
    },
  });

  const onSubmit = async (data: ApplicationForm) => {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    console.log("Application submitted:", data);
    toast({
      title: "Application Submitted!",
      description: "We'll review your application and get back to you within 24 hours.",
    });
    
    setIsSubmitting(false);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const prevStep = () => {
    setStep(step - 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              Apply for Your Loan
            </h1>
            <p className="text-xl text-gray-600">
              Complete your application in just a few minutes
            </p>
          </div>

          {/* Progress Indicator */}
          <div className="mb-8">
            <div className="flex justify-between items-center">
              {[1, 2, 3, 4].map((num) => (
                <div
                  key={num}
                  className={`flex items-center justify-center w-10 h-10 rounded-full ${
                    step >= num ? 'bg-blue-900 text-white' : 'bg-gray-200 text-gray-600'
                  }`}
                >
                  {num}
                </div>
              ))}
            </div>
            <div className="flex justify-between mt-2">
              <span className="text-sm text-gray-600">Loan Details</span>
              <span className="text-sm text-gray-600">Personal Info</span>
              <span className="text-sm text-gray-600">Employment</span>
              <span className="text-sm text-gray-600">Banking</span>
            </div>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>
                {step === 1 && "Step 1: Loan Information"}
                {step === 2 && "Step 2: Personal Information"}
                {step === 3 && "Step 3: Employment Information"}
                {step === 4 && "Step 4: Banking Information"}
              </CardTitle>
              <CardDescription>
                {step === 1 && "Tell us about the loan you need"}
                {step === 2 && "Please provide your personal details"}
                {step === 3 && "Information about your employment"}
                {step === 4 && "Your banking details for fund transfer"}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {step === 1 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="loanAmount">Loan Amount Needed</Label>
                      <select
                        {...form.register("loanAmount")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select Amount</option>
                        <option value="100-500">$100 - $500</option>
                        <option value="500-1000">$500 - $1,000</option>
                        <option value="1000-2500">$1,000 - $2,500</option>
                        <option value="2500-5000">$2,500 - $5,000</option>
                      </select>
                      {form.formState.errors.loanAmount && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.loanAmount.message}</p>
                      )}
                    </div>

                    <div>
                      <Label htmlFor="loanPurpose">Loan Purpose</Label>
                      <select
                        {...form.register("loanPurpose")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select Purpose</option>
                        <option value="emergency">Emergency Expense</option>
                        <option value="bills">Pay Bills</option>
                        <option value="car">Car Repair</option>
                        <option value="medical">Medical Bills</option>
                        <option value="other">Other</option>
                      </select>
                      {form.formState.errors.loanPurpose && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.loanPurpose.message}</p>
                      )}
                    </div>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="firstName">First Name</Label>
                        <Input {...form.register("firstName")} placeholder="John" />
                        {form.formState.errors.firstName && (
                          <p className="text-red-500 text-sm mt-1">{form.formState.errors.firstName.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="lastName">Last Name</Label>
                        <Input {...form.register("lastName")} placeholder="Doe" />
                        {form.formState.errors.lastName && (
                          <p className="text-red-500 text-sm mt-1">{form.formState.errors.lastName.message}</p>
                        )}
                      </div>
                    </div>
                    
                    <div>
                      <Label htmlFor="email">Email Address</Label>
                      <Input {...form.register("email")} type="email" placeholder="john@example.com" />
                      {form.formState.errors.email && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input {...form.register("phone")} placeholder="(555) 123-4567" />
                      {form.formState.errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.phone.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <Label htmlFor="address">Street Address</Label>
                      <Input {...form.register("address")} placeholder="123 Main St" />
                      {form.formState.errors.address && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.address.message}</p>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div>
                        <Label htmlFor="city">City</Label>
                        <Input {...form.register("city")} placeholder="New York" />
                        {form.formState.errors.city && (
                          <p className="text-red-500 text-sm mt-1">{form.formState.errors.city.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="state">State</Label>
                        <select
                          {...form.register("state")}
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                        >
                          <option value="">Select State</option>
                          <option value="CA">California</option>
                          <option value="TX">Texas</option>
                          <option value="FL">Florida</option>
                          <option value="NY">New York</option>
                          <option value="IL">Illinois</option>
                        </select>
                        {form.formState.errors.state && (
                          <p className="text-red-500 text-sm mt-1">{form.formState.errors.state.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="zipCode">ZIP Code</Label>
                        <Input {...form.register("zipCode")} placeholder="12345" />
                        {form.formState.errors.zipCode && (
                          <p className="text-red-500 text-sm mt-1">{form.formState.errors.zipCode.message}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="ssn">Social Security Number</Label>
                        <Input {...form.register("ssn")} placeholder="123-45-6789" />
                        {form.formState.errors.ssn && (
                          <p className="text-red-500 text-sm mt-1">{form.formState.errors.ssn.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="dateOfBirth">Date of Birth</Label>
                        <Input {...form.register("dateOfBirth")} type="date" />
                        {form.formState.errors.dateOfBirth && (
                          <p className="text-red-500 text-sm mt-1">{form.formState.errors.dateOfBirth.message}</p>
                        )}
                      </div>
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="employmentStatus">Employment Status</Label>
                      <select
                        {...form.register("employmentStatus")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select Status</option>
                        <option value="employed">Employed Full-time</option>
                        <option value="part-time">Employed Part-time</option>
                        <option value="self-employed">Self-employed</option>
                        <option value="retired">Retired</option>
                        <option value="benefits">Government Benefits</option>
                      </select>
                      {form.formState.errors.employmentStatus && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.employmentStatus.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <Label htmlFor="monthlyIncome">Monthly Income</Label>
                      <Input {...form.register("monthlyIncome")} placeholder="$3,000" />
                      {form.formState.errors.monthlyIncome && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.monthlyIncome.message}</p>
                      )}
                    </div>
                  </div>
                )}

                {step === 4 && (
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="bankName">Bank Name</Label>
                      <Input {...form.register("bankName")} placeholder="Bank of America" />
                      {form.formState.errors.bankName && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.bankName.message}</p>
                      )}
                    </div>
                    
                    <div>
                      <Label htmlFor="accountType">Account Type</Label>
                      <select
                        {...form.register("accountType")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select Account Type</option>
                        <option value="checking">Checking</option>
                        <option value="savings">Savings</option>
                      </select>
                      {form.formState.errors.accountType && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.accountType.message}</p>
                      )}
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label htmlFor="routingNumber">Routing Number</Label>
                        <Input {...form.register("routingNumber")} placeholder="123456789" />
                        {form.formState.errors.routingNumber && (
                          <p className="text-red-500 text-sm mt-1">{form.formState.errors.routingNumber.message}</p>
                        )}
                      </div>
                      <div>
                        <Label htmlFor="accountNumber">Account Number</Label>
                        <Input {...form.register("accountNumber")} placeholder="123456789012" />
                        {form.formState.errors.accountNumber && (
                          <p className="text-red-500 text-sm mt-1">{form.formState.errors.accountNumber.message}</p>
                        )}
                      </div>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="agreeTerms"
                        checked={form.watch("agreeTerms")}
                        onCheckedChange={(checked) => form.setValue("agreeTerms", checked as boolean)}
                      />
                      <Label htmlFor="agreeTerms" className="text-sm">
                        I agree to the Terms of Service and Privacy Policy
                      </Label>
                    </div>
                    {form.formState.errors.agreeTerms && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.agreeTerms.message}</p>
                    )}
                  </div>
                )}

                <div className="flex justify-between">
                  {step > 1 && (
                    <Button type="button" variant="outline" onClick={prevStep}>
                      Previous
                    </Button>
                  )}
                  {step < 4 ? (
                    <Button type="button" onClick={nextStep} className="bg-blue-900 hover:bg-blue-800 ml-auto">
                      Next
                    </Button>
                  ) : (
                    <Button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="bg-orange-500 hover:bg-orange-600 ml-auto"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Application"}
                    </Button>
                  )}
                </div>
              </form>
            </CardContent>
          </Card>

          {/* Security Features */}
          <div className="mt-8 grid md:grid-cols-3 gap-6">
            <div className="flex items-center space-x-3">
              <Shield className="h-8 w-8 text-green-500" />
              <div>
                <h3 className="font-semibold">Secure Application</h3>
                <p className="text-sm text-gray-600">Bank-level encryption</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <Clock className="h-8 w-8 text-blue-500" />
              <div>
                <h3 className="font-semibold">Quick Approval</h3>
                <p className="text-sm text-gray-600">Decision in minutes</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <DollarSign className="h-8 w-8 text-orange-500" />
              <div>
                <h3 className="font-semibold">Fast Funding</h3>
                <p className="text-sm text-gray-600">Same day deposit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Apply;
