import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "JB Plumbing and Heating | Professional Plumbing Services",
  description:
    "Professional plumbing and heating services in [Your Location]. Expert solutions for residential and commercial properties with 24/7 emergency support.",
  keywords:
    "plumbing, heating, emergency plumbing, boiler repair, bathroom installation, [Your Location]",
  authors: [{ name: "JB Plumbing and Heating" }],
  creator: "JB Plumbing and Heating",
  openGraph: {
    title: "JB Plumbing and Heating | Professional Plumbing Services",
    description:
      "Trusted plumbing and heating specialists serving [Your Location] with quality workmanship and competitive pricing.",
    url: "https://www.jbplumbingandheating.com", // Update with your actual domain
    siteName: "JB Plumbing and Heating",
    images: [
      {
        url: "/images/site-logo.svg", // Consider using an actual image rather than SVG for social sharing
        width: 1200,
        height: 630,
        alt: "JB Plumbing and Heating",
      },
    ],
    locale: "en_GB",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "JB Plumbing and Heating | Professional Services",
    description:
      "Reliable plumbing and heating solutions for homes and businesses in [Your Location].",
    images: ["/images/site-logo.svg"], // Consider using an actual image rather than SVG
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body suppressHydrationWarning>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
