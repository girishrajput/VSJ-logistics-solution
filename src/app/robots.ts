import { MetadataRoute } from "next";
import { SITE_URL } from "@/data/company";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Note: /_next/ must NOT be blocked; Googlebot needs those CSS/JS files to render the pages.
        disallow: ["/api/", "/admin/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  };
}
