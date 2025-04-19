import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Script from "next/script";

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_BASE_URL || "https://www.jbplumbingandheating.com"
  ),
  title: "JB Plumbing and Heating | Professional Plumbing Services",
  description:
    "Professional plumbing and heating services in London. Expert solutions for residential and commercial properties with 24/7 emergency support.",
  keywords:
    "plumbing, heating, emergency plumbing, boiler repair, bathroom installation, London",
  authors: [{ name: "JB Plumbing and Heating" }],
  creator: "JB Plumbing and Heating",
  openGraph: {
    title: "JB Plumbing and Heating | Professional Plumbing Services",
    description:
      "Trusted plumbing and heating specialists serving London with quality workmanship and competitive pricing.",
    url: "https://www.jbplumbingandheating.com",
    siteName: "JB Plumbing and Heating",
    images: [
      {
        url: "/images/site-logo.png",
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
      "Reliable plumbing and heating solutions for homes and businesses in London.",
    images: ["/images/site-logo.png"],
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
      <head>
        <Script
          id="schema-org-script"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.jbplumbingandheating.com",
              name: "JB Plumbing & Heating Specialists",
              image:
                "https://www.jbplumbingandheating.com/images/site-logo.png",
              url: "https://www.jbplumbingandheating.com",
              telephone: "+44-XXX-XXX-XXXX",
              address: {
                "@type": "PostalAddress",
                streetAddress: "123 Plumbing Street",
                addressLocality: "London",
                postalCode: "XXX XXX",
                addressCountry: "GB",
              },
              geo: {
                "@type": "GeoCoordinates",
                latitude: 51.5074,
                longitude: 0.1278,
              },
              openingHoursSpecification: {
                "@type": "OpeningHoursSpecification",
                dayOfWeek: [
                  "Monday",
                  "Tuesday",
                  "Wednesday",
                  "Thursday",
                  "Friday",
                  "Saturday",
                  "Sunday",
                ],
                opens: "00:00",
                closes: "23:59",
              },
              priceRange: "££",
              description:
                "Professional plumbing and heating services in London. Expert solutions for residential and commercial properties with 24/7 emergency support.",
              services: [
                "Emergency Plumbing",
                "Boiler Installation",
                "Boiler Servicing",
                "Leaking Repairs",
                "Gas Services",
                "Power Flushing",
                "Radiator Installation",
              ],
              sameAs: [
                "https://www.facebook.com/jbplumbingandheating",
                "https://www.instagram.com/jbplumbingandheating",
                "https://www.checkatrade.com/jbplumbingandheating",
              ],
            }),
          }}
        />
      </head>
      <body suppressHydrationWarning>
        <Navbar />
        <main className="pt-[80px] md:pt-[90px] lg:pt-[100px]">{children}</main>
      </body>
    </html>
  );
}
