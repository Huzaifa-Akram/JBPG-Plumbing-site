import React from "react";
import { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Power Flushing | JB Plumbing & Heating Services",
  description:
    "Professional power flushing services for clean pipes and improved heating efficiency.",
};

export default function PowerFlushingPage() {
  return <ServiceDetail serviceId={7} />;
}
