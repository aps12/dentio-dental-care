import type { Metadata } from "next";
import { siteMeta } from "../metadata";

export const metadata: Metadata = {
  title: siteMeta.pages.services.title,
  description: siteMeta.pages.services.description,
  alternates: {
    canonical: siteMeta.url + "services",
  },
  openGraph: {
    title: siteMeta.pages.services.title,
    description: siteMeta.pages.services.description,
    url: siteMeta.url + "services",
    siteName: "Dentio Dental Care",
    locale: "en_IN",
    type: "website",
    images: [{ url: siteMeta.ogImage, width: 1200, height: 630, alt: "Dental Services at Dentio" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.pages.services.title,
    description: siteMeta.pages.services.description,
    images: [siteMeta.ogImage],
  },
};

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
