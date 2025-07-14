
import { MapPin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

export const Footer = () => {
  const loanProducts = [
    "Payday Loans",
    "Installment Loans", 
    "Title Loans",
    "Line of Credit",
    "Check Cashing",
    "Money Orders"
  ];

  const company = [
    "About Us",
    "Contact Us"
  ];

  const support = [
    "Customer Service",
    "FAQs",
    "Payment Options",
    "Account Management",
    "Report a Problem",
    "Feedback"
  ];

  const legal = [
    "Terms of Service",
    "Privacy Policy",
    "State Disclosures",
    "Responsible Lending",
    "Complaints Process",
    "Accessibility"
  ];

  return (
    <footer className="bg-blue-900 text-white">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-5 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold mb-4">
              Advance<span className="text-orange-400">America</span>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Providing fast, reliable financial solutions for over 20 years. 
              Your trusted partner for quick cash when you need it most.
            </p>
          </div>

          {/* Loan Products */}
          <div>
            <h4 className="font-bold text-lg mb-4">Loan Products</h4>
            <ul className="space-y-2">
              <li><Link to="/loans/payday" className="text-blue-100 hover:text-white transition-colors">Payday Loans</Link></li>
              <li><Link to="/loans/installment" className="text-blue-100 hover:text-white transition-colors">Installment Loans</Link></li>
              <li><Link to="/loans/title" className="text-blue-100 hover:text-white transition-colors">Title Loans</Link></li>
              <li><Link to="/loans/credit" className="text-blue-100 hover:text-white transition-colors">Line of Credit</Link></li>
              <li><Link to="#" className="text-blue-100 hover:text-white transition-colors">Check Cashing</Link></li>
              <li><Link to="#" className="text-blue-100 hover:text-white transition-colors">Money Orders</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              <li><Link to="/about" className="text-blue-100 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-blue-100 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              <li><Link to="/support" className="text-blue-100 hover:text-white transition-colors">Customer Service</Link></li>
              <li><Link to="/support" className="text-blue-100 hover:text-white transition-colors">FAQs</Link></li>
              <li><Link to="/support" className="text-blue-100 hover:text-white transition-colors">Payment Options</Link></li>
              <li><Link to="/support" className="text-blue-100 hover:text-white transition-colors">Account Management</Link></li>
              <li><Link to="/support" className="text-blue-100 hover:text-white transition-colors">Report a Problem</Link></li>
              <li><Link to="/support" className="text-blue-100 hover:text-white transition-colors">Feedback</Link></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><Link to="/legal" className="text-blue-100 hover:text-white transition-colors">Terms of Service</Link></li>
              <li><Link to="/legal" className="text-blue-100 hover:text-white transition-colors">Privacy Policy</Link></li>
              <li><Link to="/legal" className="text-blue-100 hover:text-white transition-colors">State Disclosures</Link></li>
              <li><Link to="/legal" className="text-blue-100 hover:text-white transition-colors">Responsible Lending</Link></li>
              <li><Link to="/legal" className="text-blue-100 hover:text-white transition-colors">Complaints Process</Link></li>
              <li><Link to="/legal" className="text-blue-100 hover:text-white transition-colors">Accessibility</Link></li>
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="grid md:grid-cols-2 gap-6">
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-3 text-orange-400" />
              <div>
                <div className="font-semibold">Address</div>
                <div className="text-blue-100">200 west Jackson BLWD Chicago Illinois 60606</div>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-3 text-orange-400" />
              <div>
                <div className="font-semibold">Email Support</div>
                <div className="text-blue-100">support@advanceamerica.com</div>
              </div>
            </div>
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="border-t border-blue-800 mt-8 pt-8">
          <div className="max-w-2xl">
            <h4 className="font-bold text-lg mb-4">Stay Updated</h4>
            <p className="text-blue-100 mb-4">
              Get tips on managing your finances and be the first to know about special offers.
            </p>
            <form onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              const email = formData.get('email') as string;
              if (!email || !email.includes('@')) {
                alert('Please enter a valid email address');
                return;
              }
              alert('Thank you for subscribing!');
              e.currentTarget.reset();
            }} className="flex gap-4">
              <input
                name="email"
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
                required
              />
              <Button type="submit" className="bg-orange-500 hover:bg-orange-600 px-6">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-blue-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-100 text-sm mb-4 md:mb-0">
              © 2024 Advance America. All rights reserved. Licensed by the Department of Financial Protection and Innovation.
            </div>
            <div className="flex space-x-6 text-sm">
              <Link to="/legal" className="text-blue-100 hover:text-white transition-colors">Privacy</Link>
              <Link to="/legal" className="text-blue-100 hover:text-white transition-colors">Terms</Link>
              <Link to="/contact" className="text-blue-100 hover:text-white transition-colors">Contact</Link>
            </div>
          </div>
          <div className="mt-4 text-xs text-blue-200 leading-relaxed">
            <p>
              * Approval and loan amounts subject to verification and eligibility requirements. 
              Not all applicants will qualify. Rates, terms and conditions apply. 
              Title loans subject to minimum vehicle value requirements.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
