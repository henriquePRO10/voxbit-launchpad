import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "@fontsource/outfit/latin-400.css";
import "@fontsource/outfit/latin-600.css";
import "@fontsource/outfit/latin-700.css";
import "@fontsource/outfit/latin-800.css";
import "@fontsource/space-grotesk/latin-400.css";
import "@fontsource/space-grotesk/latin-500.css";
import "@fontsource/space-grotesk/latin-700.css";
import "@/index.css";

const siteUrl = "https://voxbitsolucoes.com.br";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "VoxBit Solucoes",
  url: siteUrl,
  image: `${siteUrl}/logo-hero.webp`,
  logo: `${siteUrl}/logo-hero.webp`,
  email: "voxbitinformatica@gmail.com",
  telephone: "+55 66 99606-7576",
  address: {
    "@type": "PostalAddress",
    addressCountry: "BR",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55 66 99606-7576",
    contactType: "customer service",
    areaServed: "BR",
    availableLanguage: ["pt-BR"],
  },
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "VoxBit Solucoes | Sites, Sistemas Web e SEO",
  description:
    "VoxBit Solucoes - Criacao de sites, landing pages, sistemas web completos e SEO. Tecnologia sob medida para o seu negocio crescer.",
  authors: [{ name: "VoxBit Solucoes" }],
  alternates: {
    canonical: "/",
  },
  icons: {
    icon: [{ url: "/logo-round-96.webp", type: "image/webp" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "VoxBit Solucoes | Tecnologia sob medida",
    description:
      "Sites, sistemas web, SEO e presenca digital. Solucoes completas com seguranca e performance.",
    url: siteUrl,
    siteName: "VoxBit Solucoes",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preload" as="image" href="/logo-hero.webp" fetchPriority="high" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
