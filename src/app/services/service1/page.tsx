import React from "react";
import { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Plumbing Services | JB Plumbing & Heating Services",
  description:
    "Expert plumbing services in London with 24/7 emergency response.",
};

export default function PlumbingServicePage() {
  return <ServiceDetail serviceId={1} />;
}
