
import { Hero } from "@/components/Hero";
import { LoanProducts } from "@/components/LoanProducts";
import { HowItWorks } from "@/components/HowItWorks";
import { WhyChooseUs } from "@/components/WhyChooseUs";
import { Testimonials } from "@/components/Testimonials";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <LoanProducts />
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
