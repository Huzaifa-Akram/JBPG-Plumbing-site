import Hero from "@/components/Hero";
import AboutUs from "@/components/AboutUs";
import Services from "@/components/Services";
import Reviews from "@/components/Reviews";
import EmergencyCallSection from "@/components/EmergencyCallSection";
import FAQs from "@/components/FAQs";
import { faqsData } from "@/data/faqsdata";
import type { Metadata } from "next";
import WhatsAppButton from "@/components/WhatsAppButton";

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
      <EmergencyCallSection
        title="24/7 Emergency Call"
        description="Have a burst pipe or broken boiler? There is no need to panic, we are here to fix the problem."
        buttonText="Call Us Now"
        phoneNumber="+442036332827"
      />
      <FAQs faqs={faqsData} />
      <WhatsAppButton phoneNumber="+442036332827" />
    </main>
  );
}
