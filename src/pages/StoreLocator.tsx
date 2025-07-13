
import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { PageLoader } from "@/components/ui/loader";
import { MapPin, Phone, Clock, Navigation, Search } from "lucide-react";

const StoreLocator = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedStore, setSelectedStore] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(timer);
  }, []);

  // Mock store data
  const stores = [
    {
      id: 1,
      name: "Advance America - Downtown",
      address: "200 west Jackson BLWD Chicago Illinois 60606",
      phone: "(555) 123-4567",
      hours: {
        weekdays: "8:00 AM - 8:00 PM",
        saturday: "9:00 AM - 6:00 PM",
        sunday: "10:00 AM - 4:00 PM"
      },
      services: ["Payday Loans", "Installment Loans", "Title Loans", "Check Cashing"],
      distance: "0.5 miles"
    },
    {
      id: 2,
      name: "Advance America - Midtown",
      address: "200 west Jackson BLWD Chicago Illinois 60606",
      phone: "(555) 234-5678",
      hours: {
        weekdays: "8:00 AM - 8:00 PM",
        saturday: "9:00 AM - 6:00 PM",
        sunday: "10:00 AM - 4:00 PM"
      },
      services: ["Payday Loans", "Installment Loans", "Money Transfers"],
      distance: "1.2 miles"
    },
    {
      id: 3,
      name: "Advance America - Brooklyn",
      address: "200 west Jackson BLWD Chicago Illinois 60606",
      phone: "(555) 345-6789",
      hours: {
        weekdays: "8:00 AM - 8:00 PM",
        saturday: "9:00 AM - 6:00 PM",
        sunday: "Closed"
      },
      services: ["Payday Loans", "Title Loans", "Check Cashing", "Bill Pay"],
      distance: "3.4 miles"
    },
    {
      id: 4,
      name: "Advance America - Queens",
      address: "200 west Jackson BLWD Chicago Illinois 60606",
      phone: "(555) 456-7890",
      hours: {
        weekdays: "9:00 AM - 7:00 PM",
        saturday: "9:00 AM - 5:00 PM",
        sunday: "10:00 AM - 3:00 PM"
      },
      services: ["Payday Loans", "Installment Loans", "Money Orders"],
      distance: "5.1 miles"
    }
  ];

  const handleSearch = () => {
    console.log("Searching for stores near:", searchQuery);
  };

  if (loading) return <PageLoader />;

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 animate-fade-in">
            <h1 className="text-3xl lg:text-4xl font-bold text-blue-900 mb-4">
              Find a Store Near You
            </h1>
            <p className="text-xl text-gray-600">
              Visit one of our 1,000+ locations nationwide for in-person service
            </p>
          </div>

          {/* Search Section */}
          <Card className="mb-8 animate-slide-up">
            <CardHeader>
              <CardTitle className="flex items-center">
                <Search className="h-5 w-5 mr-2" />
                Store Locator
              </CardTitle>
              <CardDescription>
                Enter your ZIP code, city, or address to find nearby locations
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex-1">
                  <Label htmlFor="location" className="sr-only">Location</Label>
                  <Input
                    id="location"
                    placeholder="Enter ZIP code, city, or address"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full"
                  />
                </div>
                <Button onClick={handleSearch} className="bg-blue-900 hover:bg-blue-800">
                  <Search className="h-4 w-4 mr-2" />
                  Search
                </Button>
              </div>
            </CardContent>
          </Card>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Store List */}
            <div className="lg:col-span-2 space-y-4">
              <h2 className="text-2xl font-bold text-blue-900 mb-4">
                Nearby Locations
              </h2>
              
              {stores.map((store) => (
                <Card 
                  key={store.id} 
                  className={`cursor-pointer transition-all hover:shadow-md ${
                    selectedStore === store.id ? 'ring-2 ring-blue-500' : ''
                  }`}
                  onClick={() => setSelectedStore(store.id)}
                >
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-blue-900 mb-2">
                          {store.name}
                        </h3>
                        <div className="flex items-start text-gray-600 mb-2">
                          <MapPin className="h-4 w-4 mr-2 mt-1 flex-shrink-0" />
                          <span>{store.address}</span>
                        </div>
                        <div className="flex items-center text-gray-600 mb-2">
                          <Phone className="h-4 w-4 mr-2" />
                          <span>{store.phone}</span>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="text-sm font-medium text-orange-500">
                          {store.distance}
                        </span>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex items-center text-gray-600 mb-1">
                        <Clock className="h-4 w-4 mr-2" />
                        <span className="font-medium">Hours:</span>
                      </div>
                      <div className="text-sm text-gray-600 ml-6">
                        <p>Mon - Fri: {store.hours.weekdays}</p>
                        <p>Saturday: {store.hours.saturday}</p>
                        <p>Sunday: {store.hours.sunday}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="font-medium text-gray-800 mb-2">Services Available:</h4>
                      <div className="flex flex-wrap gap-2">
                        {store.services.map((service, index) => (
                          <span 
                            key={index}
                            className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full"
                          >
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    <div className="flex space-x-3">
                      <Button size="sm" className="bg-blue-900 hover:bg-blue-800">
                        <Navigation className="h-4 w-4 mr-1" />
                        Get Directions
                      </Button>
                      <Button size="sm" variant="outline">
                        <Phone className="h-4 w-4 mr-1" />
                        Call Store
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Placeholder and Info */}
            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Map View</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="h-64 bg-gray-200 rounded-lg flex items-center justify-center">
                    <div className="text-center">
                      <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                      <p className="text-gray-500">Interactive map would appear here</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>What to Bring</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      Valid government-issued ID
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      Proof of income (pay stub, bank statement)
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      Active checking account
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                      Social Security number
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Store Services</CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Payday Loans
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Installment Loans
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Title Loans
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Check Cashing
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Money Transfers
                    </li>
                    <li className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                      Bill Payment
                    </li>
                  </ul>
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

export default StoreLocator;
