import React from "react";
import { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Boiler Servicing | JB Plumbing & Heating Services",
  description:
    "Professional boiler servicing, maintenance and repairs in London.",
};

export default function BoilerServicingPage() {
  return <ServiceDetail serviceId={3} />;
}
