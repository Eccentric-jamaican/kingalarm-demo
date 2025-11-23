import Image from "next/image";
import Navbar from "@/components/ui/sections/navbar";
import Hero from "@/components/ui/sections/hero";
import Features from "@/components/ui/sections/Features";
import Testimonials from "@/components/ui/sections/testimonials";
import Stats from "@/components/ui/sections/stats";
import Benefits from "@/components/ui/sections/Benefits";
import Services from "@/components/ui/sections/Services";
import FAQ from "@/components/ui/sections/FAQ";
import CTA from "@/components/ui/sections/CTA";
import Footer from "@/components/ui/sections/footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Testimonials />
      <Stats />
      <Benefits />
      <Services />
      <FAQ />
      <CTA />
      <Footer />
    </div>
  )
}