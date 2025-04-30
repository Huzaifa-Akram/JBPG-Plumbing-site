import React from "react";
import { Metadata } from "next";
import ServiceDetail from "@/components/ServiceDetail";

export const metadata: Metadata = {
  title: "Leaking Repair | JB Plumbing & Heating Services",
  description:
    "Expert leak detection and repair services for all types of leaks in London.",
};

export default function LeakingRepairPage() {
  return <ServiceDetail serviceId={5} />;
}
