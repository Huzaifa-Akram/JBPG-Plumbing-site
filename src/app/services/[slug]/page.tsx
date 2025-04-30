import React from "react";
import { serviceData } from "@/data/servicedata";
import ServiceDetail from "@/components/ServiceDetail";
import { notFound } from "next/navigation";

interface PageProps {
  params: {
    slug: string;
  };
}

export function generateStaticParams() {
  return serviceData.map((service) => ({
    slug: service.slug,
  }));
}

export function generateMetadata({ params }: PageProps) {
  const service = serviceData.find((service) => service.slug === params.slug);

  if (!service) {
    return {
      title: "Service Not Found",
    };
  }

  return {
    title: `${service.title} | JB Plumbing & Heating Services`,
    description: service.fullDescription.substring(0, 160),
  };
}

export default function Page({ params }: PageProps) {
  const { slug } = params;
  const service = serviceData.find((service) => service.slug === slug);

  if (!service) {
    notFound();
  }

  return <ServiceDetail slug={slug} />;
}
