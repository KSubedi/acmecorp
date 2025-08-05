import Hero from "@/components/Hero";
import Features from "@/components/Features";
import HowItWorks from "@/components/HowItWorks";
import Benefits from "@/components/Benefits";
import Integrations from "@/components/Integrations";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import CTA from "@/components/CTA";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <Hero />
      <Features />
      <HowItWorks />
      <Benefits />
      <Integrations />
      <Testimonials />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  );
}
