import React from "react";
import { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Radiators | JB Plumbing & Heating Services",
  description:
    "Expert radiator installation and replacement services for all radiator types.",
};

export default function RadiatorsPage() {
  return <ServiceDetail serviceId={8} />;
}
