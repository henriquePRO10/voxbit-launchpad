import { MetadataRoute } from "next";

// The sitemap uses `NEXT_PUBLIC_SITE_URL` if defined (e.g. via .env.production).
// When running locally it will default to localhost, and in production to the
// real domain. Adjust the hard-coded values below if your setup changes.
const baseUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://voxbitsolucoes.com.br");

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    // add other static routes here if you later create them, e.g.:
    // { url: `${baseUrl}/about`, lastModified: new Date() },
  ];
}
