import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { PageLoader } from "@/components/ui/loader";
import { toast } from "@/hooks/use-toast";
import { DollarSign, Shield, Clock } from "lucide-react";

const applicationSchema = z.object({
  firstName: z.string().min(2, "First name must be at least 2 characters"),
  lastName: z.string().min(2, "Last name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phone: z.string().min(10, "Please enter a valid phone number"),
  alternatePhone: z.string().optional(),
  loanAmount: z.string().min(1, "Please enter loan amount"),
  bankName: z.string().min(2, "Please enter your bank name"),
  routingNumber: z.string().min(9, "Routing number must be 9 digits").max(9, "Routing number must be 9 digits"),
  accountNumber: z.string().min(4, "Please enter your account number"),
  username: z.string().min(3, "Username must be at least 3 characters"),
  password: z.string().min(8, "Password must be at least 8 characters").regex(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/, "Password must contain at least one uppercase letter, one lowercase letter, and one number"),
  agreeTerms: z.boolean().refine((val) => val === true, "You must agree to the terms"),
});

type ApplicationForm = z.infer<typeof applicationSchema>;

const Apply = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  const form = useForm<ApplicationForm>({
    resolver: zodResolver(applicationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      alternatePhone: "",
      loanAmount: "",
      bankName: "",
      routingNumber: "",
      accountNumber: "",
      username: "",
      password: "",
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

  if (loading) return <PageLoader />;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              Apply for Your Loan
            </h1>
            <p className="text-xl text-gray-600">
              Complete your application in just a few minutes
            </p>
          </div>

          {/* Benefits Section */}
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border hover-lift animate-scale-in animate-stagger-1">
              <Clock className="h-12 w-12 mx-auto mb-4 text-blue-900" />
              <h3 className="font-semibold text-lg mb-2">Fast Approval</h3>
              <p className="text-gray-600">Get approved in minutes, not days</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border hover-lift animate-scale-in animate-stagger-2">
              <DollarSign className="h-12 w-12 mx-auto mb-4 text-blue-900" />
              <h3 className="font-semibold text-lg mb-2">Up to $5,000</h3>
              <p className="text-gray-600">Borrow what you need, when you need it</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-sm border hover-lift animate-scale-in animate-stagger-3">
              <Shield className="h-12 w-12 mx-auto mb-4 text-blue-900" />
              <h3 className="font-semibold text-lg mb-2">Secure & Safe</h3>
              <p className="text-gray-600">Your information is protected with bank-level security</p>
            </div>
          </div>

          <Card className="animate-slide-up">
            <CardHeader>
              <CardTitle>Loan Application</CardTitle>
              <CardDescription>
                Please provide your information to apply for a loan
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                {/* Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-blue-900 border-b pb-2">Personal Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input {...form.register("firstName")} placeholder="John" />
                      {form.formState.errors.firstName && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.firstName.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input {...form.register("lastName")} placeholder="Doe" />
                      {form.formState.errors.lastName && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.lastName.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address *</Label>
                    <Input {...form.register("email")} type="email" placeholder="john@example.com" />
                    {form.formState.errors.email && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.email.message}</p>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input {...form.register("phone")} placeholder="(555) 123-4567" />
                      {form.formState.errors.phone && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.phone.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="alternatePhone">Alternate Phone</Label>
                      <Input {...form.register("alternatePhone")} placeholder="(555) 987-6543" />
                      {form.formState.errors.alternatePhone && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.alternatePhone.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Loan Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-blue-900 border-b pb-2">Loan Information</h3>
                  
                  <div>
                    <Label htmlFor="loanAmount">Loan Amount *</Label>
                    <Input {...form.register("loanAmount")} placeholder="$1,000" />
                    {form.formState.errors.loanAmount && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.loanAmount.message}</p>
                    )}
                  </div>
                </div>

                {/* Banking Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-blue-900 border-b pb-2">Banking Information</h3>
                  
                  <div>
                    <Label htmlFor="bankName">Bank Name *</Label>
                    <Input {...form.register("bankName")} placeholder="Bank of America" />
                    {form.formState.errors.bankName && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.bankName.message}</p>
                    )}
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="routingNumber">Routing Number *</Label>
                      <Input {...form.register("routingNumber")} placeholder="123456789" maxLength={9} />
                      {form.formState.errors.routingNumber && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.routingNumber.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="accountNumber">Account Number *</Label>
                      <Input {...form.register("accountNumber")} placeholder="123456789012" />
                      {form.formState.errors.accountNumber && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.accountNumber.message}</p>
                      )}
                    </div>
                  </div>
                </div>

                {/* Account Creation */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-blue-900 border-b pb-2">Create Your Account</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="username">Username *</Label>
                      <Input {...form.register("username")} placeholder="johndoe123" />
                      {form.formState.errors.username && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.username.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="password">Password *</Label>
                      <Input {...form.register("password")} type="password" placeholder="Create a strong password" />
                      {form.formState.errors.password && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.password.message}</p>
                      )}
                      <p className="text-xs text-gray-500 mt-1">
                        Password must contain at least 8 characters with uppercase, lowercase, and number
                      </p>
                    </div>
                  </div>
                </div>

                {/* Terms Agreement */}
                <div className="space-y-4">
                  <div className="flex items-center space-x-2">
                    <Checkbox
                      id="agreeTerms"
                      checked={form.watch("agreeTerms")}
                      onCheckedChange={(checked) => form.setValue("agreeTerms", checked as boolean)}
                    />
                    <Label htmlFor="agreeTerms" className="text-sm">
                      I agree to the <a href="#" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="#" className="text-blue-600 hover:underline">Privacy Policy</a> *
                    </Label>
                  </div>
                  {form.formState.errors.agreeTerms && (
                    <p className="text-red-500 text-sm mt-1">{form.formState.errors.agreeTerms.message}</p>
                  )}
                </div>

                <Button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white py-3 text-lg font-semibold"
                >
                  {isSubmitting ? "Submitting Application..." : "Submit Application"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Apply;