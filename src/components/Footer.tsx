
import { Facebook, Twitter, Instagram, Youtube, Phone, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    "Careers",
    "Press",
    "Investor Relations",
    "Store Locations",
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
              Speedy<span className="text-orange-400">Cash</span>
            </div>
            <p className="text-blue-100 mb-6 leading-relaxed">
              Providing fast, reliable financial solutions for over 20 years. 
              Your trusted partner for quick cash when you need it most.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-blue-300 hover:text-white cursor-pointer transition-colors" />
              <Twitter className="h-6 w-6 text-blue-300 hover:text-white cursor-pointer transition-colors" />
              <Instagram className="h-6 w-6 text-blue-300 hover:text-white cursor-pointer transition-colors" />
              <Youtube className="h-6 w-6 text-blue-300 hover:text-white cursor-pointer transition-colors" />
            </div>
          </div>

          {/* Loan Products */}
          <div>
            <h4 className="font-bold text-lg mb-4">Loan Products</h4>
            <ul className="space-y-2">
              {loanProducts.map((product) => (
                <li key={product}>
                  <a href="#" className="text-blue-100 hover:text-white transition-colors">
                    {product}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-bold text-lg mb-4">Company</h4>
            <ul className="space-y-2">
              {company.map((item) => (
                <li key={item}>
                  <a href="#" className="text-blue-100 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-lg mb-4">Support</h4>
            <ul className="space-y-2">
              {support.map((item) => (
                <li key={item}>
                  <a href="#" className="text-blue-100 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-bold text-lg mb-4">Legal</h4>
            <ul className="space-y-2">
              {legal.map((item) => (
                <li key={item}>
                  <a href="#" className="text-blue-100 hover:text-white transition-colors">
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-blue-800 mt-12 pt-8">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-3 text-orange-400" />
              <div>
                <div className="font-semibold">Customer Service</div>
                <div className="text-blue-100">1-888-SPEEDY-1</div>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-3 text-orange-400" />
              <div>
                <div className="font-semibold">Email Support</div>
                <div className="text-blue-100">support@speedycash.com</div>
              </div>
            </div>
            <div className="flex items-center">
              <MapPin className="h-5 w-5 mr-3 text-orange-400" />
              <div>
                <div className="font-semibold">Store Locator</div>
                <div className="text-blue-100">Find a location near you</div>
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
            <div className="flex gap-4">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-2 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <Button className="bg-orange-500 hover:bg-orange-600 px-6">
                Subscribe
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-blue-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-blue-100 text-sm mb-4 md:mb-0">
              © 2024 SpeedyCash. All rights reserved. Licensed by the Department of Financial Protection and Innovation.
            </div>
            <div className="flex space-x-6 text-sm">
              <a href="#" className="text-blue-100 hover:text-white transition-colors">Privacy</a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">Terms</a>
              <a href="#" className="text-blue-100 hover:text-white transition-colors">Sitemap</a>
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
