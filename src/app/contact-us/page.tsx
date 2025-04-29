import React from "react";
import Contact from "@/components/Contact";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | JBPHS Plumbing & Heating Services",
  description:
    "Get in touch with our team for all your plumbing and heating needs. We're here to help with emergency services, installations, and maintenance.",
};

export default function ContactUsPage() {
  return <Contact />;
}
