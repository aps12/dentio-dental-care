import type { Metadata } from "next";
import { siteMeta } from "../metadata";

export const metadata: Metadata = {
  title: siteMeta.pages.contact.title,
  description: siteMeta.pages.contact.description,
  alternates: {
    canonical: siteMeta.url + "contact",
  },
  openGraph: {
    title: siteMeta.pages.contact.title,
    description: siteMeta.pages.contact.description,
    url: siteMeta.url + "contact",
    siteName: "Dentio Dental Care",
    locale: "en_IN",
    type: "website",
    images: [{ url: siteMeta.ogImage, width: 1200, height: 630, alt: "Contact Dentio Dental Care" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.pages.contact.title,
    description: siteMeta.pages.contact.description,
    images: [siteMeta.ogImage],
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return children;
}
