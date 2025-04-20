import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/private/", "/admin/"],
      },
    ],
    sitemap: "https://www.jbplumbingandheating.com/sitemap.xml",
    host: "https://www.jbplumbingandheating.com",
  };
}
