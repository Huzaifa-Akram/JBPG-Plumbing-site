import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <meta
          name="description"
          content="Professional plumbing and heating services in London. Expert solutions for residential and commercial properties with 24/7 emergency support."
        />
        <meta
          name="keywords"
          content="plumbing, heating, emergency plumbing, boiler repair, bathroom installation, London, plumber near me"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta
          property="og:title"
          content="JB Plumbing and Heating | Professional Plumbing Services"
        />
        <meta
          property="og:description"
          content="Trusted plumbing and heating specialists serving London with quality workmanship and competitive pricing."
        />
        <meta property="og:site_name" content="JB Plumbing and Heating" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="JB Plumbing and Heating | Professional Services"
        />
        <meta
          name="twitter:description"
          content="Reliable plumbing and heating solutions for homes and businesses in London."
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://www.jbplumbingandheating.com" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
