import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import { Outfit, Space_Grotesk } from "next/font/google";
import "@/index.css";

const headingFont = Outfit({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-heading",
  display: "swap",
});

const bodyFont = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-body",
  display: "swap",
});

const siteUrl = "https://voxbitsolucoes.com.br";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "VoxBit Soluções",
  url: siteUrl,
  image: `${siteUrl}/logo-hero.webp`,
  logo: `${siteUrl}/logo-hero.webp`,
  email: "voxbitinformatica@gmail.com",
  telephone: "+55 66 99606-7576",
  address: {
    "@type": "PostalAddress",
    streetAddress: "",
    addressLocality: "Sinop",
    addressRegion: "MT",
    addressCountry: "BR",
  },
  areaServed: [
    { "@type": "City", name: "Sinop" },
    { "@type": "State", name: "Mato Grosso" },
    { "@type": "Country", name: "Brasil" },
  ],
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+55 66 99606-7576",
    contactType: "customer service",
    areaServed: "BR",
    availableLanguage: ["pt-BR"],
  },
  priceRange: "$$",
  description:
    "Criação de sites, landing pages, sistemas web e SEO em Sinop-MT. Atendemos empresas em Sinop, Mato Grosso e região.",
};

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "VoxBit Soluções | Sites e Sistemas Web em Sinop-MT",
  description:
    "VoxBit Soluções em Sinop-MT – Criação de sites, landing pages, sistemas web e SEO. Atendemos empresas em Sinop, Mato Grosso e região. Tecnologia sob medida para o seu negócio crescer.",
  authors: [{ name: "VoxBit Soluções" }],
  keywords: [
    "sites em Sinop",
    "criação de sites Sinop MT",
    "agência digital Sinop",
    "desenvolvimento web Sinop",
    "sistemas web Sinop",
    "SEO Sinop Mato Grosso",
    "landing page Sinop MT",
    "criação de sites Mato Grosso",
    "VoxBit Soluções",
  ],
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "_zz5IYh4t6xs_pzUqdSZFedbwbCpTetKIHByyrgFxXk",
  },
  icons: {
    shortcut: "/favicon.ico",
    icon: [
      { url: "/favicon.ico", type: "image/x-icon" },
      { url: "/logo-round-96.webp", sizes: "96x96", type: "image/webp" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  openGraph: {
    title: "VoxBit Soluções | Sites e Sistemas Web em Sinop-MT",
    description:
      "Criação de sites, landing pages, sistemas web e SEO em Sinop-MT. Atendemos empresas em Mato Grosso. Tecnologia sob medida, performance e resultados.",
    url: siteUrl,
    siteName: "VoxBit Soluções",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
  },
  other: {
    "geo.region": "BR-MT",
    "geo.placename": "Sinop, Mato Grosso",
    "geo.position": "-11.8647;-55.5083",
    ICBM: "-11.8647, -55.5083",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${headingFont.variable} ${bodyFont.variable}`}>
      <head>
        <link rel="preload" as="image" href="/logo-hero.webp" fetchPriority="high" />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      </head>
      <body className="font-body antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
