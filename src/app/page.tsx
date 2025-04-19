import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "JB Plumbing & Heating Specialists | Professional Plumbing Services in London",
  description:
    "Leading plumbing and heating specialists in London offering 24/7 emergency service, boiler installations, repairs, and maintenance with guaranteed workmanship.",
  alternates: {
    canonical: "https://www.jbplumbingandheating.com",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <AboutUs />
      <Services />
      <Reviews />
    </main>
  );
}
