import React from "react";
import { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Replacement Toilet | JB Plumbing & Heating Services",
  description: "Quick toilet replacement services within 24 hours in London.",
};

export default function ReplacementToiletPage() {
  return <ServiceDetail serviceId={4} />;
}
