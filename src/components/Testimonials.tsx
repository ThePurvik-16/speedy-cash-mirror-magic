
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

export const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      location: "Austin, TX",
      rating: 5,
      text: "SpeedyCash saved me when I had an unexpected car repair. The process was so easy and I got the money the same day!"
    },
    {
      name: "Mike Rodriguez",
      location: "Phoenix, AZ",
      rating: 5,
      text: "I've used SpeedyCash multiple times for emergencies. They're always fast, professional, and transparent about fees."
    },
    {
      name: "Jennifer Chen",
      location: "Miami, FL",
      rating: 5,
      text: "The online application took less than 10 minutes and I was approved instantly. Highly recommend for quick cash needs."
    },
    {
      name: "David Thompson",
      location: "Chicago, IL",
      rating: 5,
      text: "Great customer service and fair terms. They helped me bridge the gap between paychecks without any hassle."
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-4">
            What Our Customers Say
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. See what thousands of satisfied customers 
            have to say about their SpeedyCash experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-4 italic">
                  "{testimonial.text}"
                </blockquote>
                <div className="border-t pt-4">
                  <div className="font-semibold text-blue-900">{testimonial.name}</div>
                  <div className="text-sm text-gray-500">{testimonial.location}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Overall Rating */}
        <div className="mt-12 text-center bg-blue-50 rounded-xl p-8">
          <div className="flex justify-center items-center mb-4">
            <div className="text-4xl font-bold text-blue-900 mr-4">4.8</div>
            <div>
              <div className="flex mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-6 w-6 text-yellow-400 fill-current" />
                ))}
              </div>
              <div className="text-sm text-gray-600">Based on 50,000+ reviews</div>
            </div>
          </div>
          <p className="text-gray-700 max-w-2xl mx-auto">
            We're proud to maintain one of the highest customer satisfaction ratings 
            in the industry, with 95% of customers rating us 4 stars or higher.
          </p>
        </div>
      </div>
    </section>
  );
};
