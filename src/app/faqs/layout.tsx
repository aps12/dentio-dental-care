import type { Metadata } from "next";
import { siteMeta } from "../metadata";

export const metadata: Metadata = {
  title: siteMeta.pages.faqs.title,
  description: siteMeta.pages.faqs.description,
  alternates: {
    canonical: siteMeta.url + "faqs",
  },
  openGraph: {
    title: siteMeta.pages.faqs.title,
    description: siteMeta.pages.faqs.description,
    url: siteMeta.url + "faqs",
    siteName: "Dentio Dental Care",
    locale: "en_IN",
    type: "website",
    images: [{ url: siteMeta.ogImage, width: 1200, height: 630, alt: "Dentio Dental Care FAQs" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.pages.faqs.title,
    description: siteMeta.pages.faqs.description,
    images: [siteMeta.ogImage],
  },
};

export default function FaqsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
