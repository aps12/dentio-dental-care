import type { Metadata } from "next";
import { siteMeta } from "../metadata";

export const metadata: Metadata = {
  title: siteMeta.pages.gallery.title,
  description: siteMeta.pages.gallery.description,
  alternates: {
    canonical: siteMeta.url + "gallery",
  },
  openGraph: {
    title: siteMeta.pages.gallery.title,
    description: siteMeta.pages.gallery.description,
    url: siteMeta.url + "gallery",
    siteName: "Dentio Dental Care",
    locale: "en_IN",
    type: "website",
    images: [{ url: siteMeta.ogImage, width: 1200, height: 630, alt: "Dentio Dental Care Gallery" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.pages.gallery.title,
    description: siteMeta.pages.gallery.description,
    images: [siteMeta.ogImage],
  },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return children;
}
