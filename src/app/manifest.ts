import { MetadataRoute } from "next";
import { COMPANY_INFO } from "@/data/company";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${COMPANY_INFO.name} – Transport Company in Ahmedabad`,
    short_name: "VSJ Logistics",
    description: "Truck transport & logistics from Naroda GIDC, Ahmedabad.",
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#0F2042",
    icons: [
      { src: "/icon.svg", sizes: "any", type: "image/svg+xml" },
      { src: "/logo.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
