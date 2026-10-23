import { MetadataRoute } from "next";
import { ALL_PAGES } from "@/data/pages";
import { ROUTES } from "@/data/routes";
import { SITE_URL } from "@/data/company";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const core: MetadataRoute.Sitemap = [
    { path: "", priority: 1.0, changeFrequency: "weekly" as const },
    { path: "/get-a-quote", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/contact-us", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/about-us", priority: 0.7, changeFrequency: "monthly" as const },
    // Index (hub) pages were missing from the sitemap before.
    { path: "/services", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/locations", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/routes", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/industries", priority: 0.75, changeFrequency: "monthly" as const },
  ].map((r) => ({ url: `${SITE_URL}${r.path}`, lastModified: now, changeFrequency: r.changeFrequency, priority: r.priority }));

  const pages: MetadataRoute.Sitemap = ALL_PAGES.map((page) => ({
    url: `${SITE_URL}${page.url}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: page.category === "service" ? 0.85 : page.category === "location" ? 0.85 : 0.7,
  }));

  const routes: MetadataRoute.Sitemap = ROUTES.map((r) => ({
    url: `${SITE_URL}${r.url}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [...core, ...pages, ...routes];
}
