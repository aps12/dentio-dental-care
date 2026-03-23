import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { siteMeta } from "./metadata";
import ClientLayout from "./ClientLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

/* ───────────────────────────── Next.js Metadata API ───────────────────────────── */
export const metadata: Metadata = {
  metadataBase: new URL(siteMeta.url),
  title: {
    default: siteMeta.title,
    template: "%s | Dentio Dental Care",
  },
  description: siteMeta.description,
  keywords: siteMeta.keywords,
  authors: [{ name: "Dentio Dental Care, Pune" }],
  creator: "Dentio Dental Care",
  publisher: "Dentio Dental Care",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  alternates: {
    canonical: siteMeta.url,
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/logo.png",
  },
  openGraph: {
    type: "website",
    title: siteMeta.title,
    description: siteMeta.description,
    url: siteMeta.url,
    siteName: "Dentio Dental Care",
    locale: "en_IN",
    images: [
      {
        url: siteMeta.ogImage,
        width: 1200,
        height: 630,
        alt: "Dentio Dental Care - Best Dentist in Hinjewadi, Pune",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.title,
    description: siteMeta.description,
    images: [siteMeta.ogImage],
    site: "@dentiodentalcare",
    creator: "@dentiodentalcare",
  },
  other: {
    "geo.region": "IN-MH",
    "geo.placename": "Hinjewadi, Pune",
    "geo.position": `${siteMeta.geo.lat};${siteMeta.geo.lng}`,
    "ICBM": `${siteMeta.geo.lat}, ${siteMeta.geo.lng}`,
    "rating": "general",
    "revisit-after": "7 days",
    "distribution": "global",
    "theme-color": "#0891b2",
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
    "apple-mobile-web-app-title": "Dentio Dental Care",
  },
};

/* ───────────────────────────── JSON-LD Schemas ───────────────────────────── */
const dentistSchema = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "@id": siteMeta.url + "#dentist",
  name: "Dentio Dental Care",
  alternateName: "Dentio Dental Clinic Hinjewadi",
  description: siteMeta.description,
  image: siteMeta.logo,
  logo: siteMeta.logo,
  url: siteMeta.url,
  telephone: siteMeta.phoneE164,
  email: siteMeta.email,
  priceRange: siteMeta.priceRange,
  foundingDate: String(siteMeta.foundingYear),
  address: {
    "@type": "PostalAddress",
    streetAddress: "Shop #210, One Avenue, Maan Rd, Hinjawadi Phase 1",
    addressLocality: "Pune",
    addressRegion: "Maharashtra",
    postalCode: "411057",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: siteMeta.geo.lat,
    longitude: siteMeta.geo.lng,
  },
  hasMap: siteMeta.gmaps,
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "10:00",
      closes: "14:00",
    },
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "17:00",
      closes: "21:00",
    },
  ],
  areaServed: siteMeta.areaServed.map((area) => ({
    "@type": "City",
    name: area,
  })),
  medicalSpecialty: [
    "Orthodontics",
    "Endodontics",
    "Periodontics",
    "Prosthodontics",
    "Pediatric Dentistry",
    "Cosmetic Dentistry",
    "Oral Surgery",
    "Preventive Dentistry",
  ],
  availableService: siteMeta.services.map((service) => ({
    "@type": "MedicalProcedure",
    name: service,
  })),
  employee: {
    "@type": "Dentist",
    name: siteMeta.doctorName,
    description: siteMeta.doctorQualification,
    medicalSpecialty: "Orthodontics",
    jobTitle: "Lead Orthodontist & Clinic Director",
  },
  sameAs: [siteMeta.instagram, siteMeta.gmaps, siteMeta.whatsapp],
  potentialAction: [
    {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: siteMeta.bookingUrl,
        actionPlatform: [
          "http://schema.org/DesktopWebPlatform",
          "http://schema.org/MobileWebPlatform",
        ],
      },
      result: {
        "@type": "Reservation",
        name: "Dental Appointment",
      },
    },
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    { "@type": "ListItem", position: 1, name: "Home", item: siteMeta.url },
    { "@type": "ListItem", position: 2, name: "About", item: siteMeta.url + "about" },
    { "@type": "ListItem", position: 3, name: "Services", item: siteMeta.url + "services" },
    { "@type": "ListItem", position: 4, name: "Team", item: siteMeta.url + "team" },
    { "@type": "ListItem", position: 5, name: "FAQs", item: siteMeta.url + "faqs" },
    { "@type": "ListItem", position: 6, name: "Contact", item: siteMeta.url + "contact" },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Dentio Dental Care",
  url: siteMeta.url,
  publisher: {
    "@type": "Organization",
    name: "Dentio Dental Care",
    logo: { "@type": "ImageObject", url: siteMeta.logo },
  },
};

/* ───────────────────────────── Root Layout (Server Component) ───────────────────────────── */
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* JSON-LD structured data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(dentistSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-blue-100 via-white to-cyan-100 min-h-screen`}
      >
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
