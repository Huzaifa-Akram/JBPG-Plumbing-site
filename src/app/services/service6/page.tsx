import React from "react";
import { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Gas & Boiler Installations | JB Plumbing & Heating Services",
  description:
    "Professional gas and boiler installation services by Gas Safe engineers.",
};

export default function GasBoilerInstallationsPage() {
  return <ServiceDetail serviceId={6} />;
}
