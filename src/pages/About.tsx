
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Award, Users, MapPin, TrendingUp, Shield, Heart } from "lucide-react";
import { Link } from "react-router-dom";

const About = () => {
  const stats = [
    { number: "20+", label: "Years in Business", icon: <Award className="h-8 w-8 text-orange-500" /> },
    { number: "1M+", label: "Customers Served", icon: <Users className="h-8 w-8 text-orange-500" /> },
    { number: "1,000+", label: "Store Locations", icon: <MapPin className="h-8 w-8 text-orange-500" /> },
    { number: "$2B+", label: "Loans Funded", icon: <TrendingUp className="h-8 w-8 text-orange-500" /> },
  ];

  const values = [
    {
      icon: <Shield className="h-8 w-8 text-blue-900" />,
      title: "Transparency",
      description: "We believe in clear, upfront pricing with no hidden fees or surprises."
    },
    {
      icon: <Heart className="h-8 w-8 text-blue-900" />,
      title: "Customer First",
      description: "Our customers' needs come first, and we're committed to their financial success."
    },
    {
      icon: <Users className="h-8 w-8 text-blue-900" />,
      title: "Accessibility",
      description: "We make financial services accessible to everyone, regardless of credit history."
    },
    {
      icon: <Award className="h-8 w-8 text-blue-900" />,
      title: "Excellence",
      description: "We strive for excellence in everything we do, from service to technology."
    },
  ];

  const leadership = [
    {
      name: "John Smith",
      position: "Chief Executive Officer",
      bio: "John has over 20 years of experience in financial services and has led Advance America's expansion nationwide.",
      image: "/placeholder.svg"
    },
    {
      name: "Sarah Johnson",
      position: "Chief Financial Officer",
      bio: "Sarah oversees our financial operations and ensures we maintain the highest standards of fiscal responsibility.",
      image: "/placeholder.svg"
    },
    {
      name: "Mike Davis",
      position: "Chief Technology Officer",
      bio: "Mike leads our technology initiatives, ensuring our platforms are secure, fast, and user-friendly.",
      image: "/placeholder.svg"
    },
    {
      name: "Lisa Chen",
      position: "Chief Customer Officer",
      bio: "Lisa is passionate about customer experience and leads our efforts to provide exceptional service.",
      image: "/placeholder.svg"
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-900 via-blue-800 to-blue-700 text-white py-16 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              About Advance America
            </h1>
            <p className="text-xl lg:text-2xl mb-8 text-blue-100">
              For over 20 years, we've been helping Americans access the financial services they need, 
              when they need them most.
            </p>
            <Link to="/apply">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white">
                Start Your Application
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center p-6 border-0 shadow-md">
                <CardContent className="p-0">
                  <div className="flex justify-center mb-4">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-blue-900 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
                Our Story
              </h2>
              <p className="text-xl text-gray-600">
                Built on the foundation of helping hardworking Americans
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  Founded with Purpose
                </h3>
                <p className="text-gray-600 mb-6">
                  Advance America was founded in 1997 with a simple mission: to provide fast, reliable financial 
                  services to hardworking Americans who need quick access to cash. We recognized that traditional 
                  banks often couldn't meet the urgent financial needs of everyday people.
                </p>
                <p className="text-gray-600 mb-6">
                  Over the years, we've grown from a single storefront to a nationwide network of over 1,000 
                  locations, serving more than one million customers. Despite our growth, our core values 
                  remain unchanged: treat customers with respect, provide transparent pricing, and deliver 
                  exceptional service.
                </p>
                <p className="text-gray-600">
                  Today, we're proud to be a trusted name in financial services, helping millions of Americans 
                  bridge the gap between paychecks and unexpected expenses.
                </p>
              </div>
              <div className="bg-blue-50 p-8 rounded-lg">
                <h4 className="text-xl font-bold text-blue-900 mb-4">Our Mission</h4>
                <p className="text-gray-700 mb-6">
                  "To provide accessible, transparent, and reliable financial services that help 
                  hardworking Americans achieve their financial goals."
                </p>
                <h4 className="text-xl font-bold text-blue-900 mb-4">Our Vision</h4>
                <p className="text-gray-700">
                  "To be America's most trusted and innovative provider of short-term financial solutions."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
                Our Values
              </h2>
              <p className="text-xl text-gray-600">
                The principles that guide everything we do
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center p-6 border-0 shadow-md bg-white">
                  <CardContent className="p-0">
                    <div className="flex justify-center mb-4">
                      {value.icon}
                    </div>
                    <h3 className="text-xl font-bold text-blue-900 mb-3">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
                Leadership Team
              </h2>
              <p className="text-xl text-gray-600">
                Meet the experienced leaders driving our mission forward
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {leadership.map((leader, index) => (
                <Card key={index} className="border-0 shadow-md">
                  <CardContent className="p-6 text-center">
                    <div className="w-20 h-20 bg-gray-200 rounded-full mx-auto mb-4"></div>
                    <h3 className="text-xl font-bold text-blue-900 mb-2">
                      {leader.name}
                    </h3>
                    <p className="text-orange-500 font-medium mb-3">
                      {leader.position}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {leader.bio}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Ready to Get Started?
          </h2>
            <p className="text-xl mb-8 text-blue-100">
              Join over one million customers who trust Advance America for their financial needs.
            </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/apply">
              <Button size="lg" className="bg-orange-500 hover:bg-orange-600">
                Apply Now
              </Button>
            </Link>
            <Link to="/store-locator">
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-900">
                Find a Store
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
