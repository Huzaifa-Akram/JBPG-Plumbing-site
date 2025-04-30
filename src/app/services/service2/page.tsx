import React from "react";
import { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Boiler Installations | JB Plumbing & Heating Services",
  description:
    "Professional boiler installation services with up to 12 years warranty.",
};

export default function BoilerInstallationsPage() {
  return <ServiceDetail serviceId={2} />;
}
