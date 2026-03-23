import type { Metadata } from "next";
import { siteMeta } from "../metadata";

export const metadata: Metadata = {
  title: siteMeta.pages.about.title,
  description: siteMeta.pages.about.description,
  alternates: {
    canonical: siteMeta.url + "about",
  },
  openGraph: {
    title: siteMeta.pages.about.title,
    description: siteMeta.pages.about.description,
    url: siteMeta.url + "about",
    siteName: "Dentio Dental Care",
    locale: "en_IN",
    type: "website",
    images: [{ url: siteMeta.ogImage, width: 1200, height: 630, alt: "About Dentio Dental Care" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.pages.about.title,
    description: siteMeta.pages.about.description,
    images: [siteMeta.ogImage],
  },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
