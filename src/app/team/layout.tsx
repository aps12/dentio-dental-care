import type { Metadata } from "next";
import { siteMeta } from "../metadata";

export const metadata: Metadata = {
  title: siteMeta.pages.team.title,
  description: siteMeta.pages.team.description,
  alternates: {
    canonical: siteMeta.url + "team",
  },
  openGraph: {
    title: siteMeta.pages.team.title,
    description: siteMeta.pages.team.description,
    url: siteMeta.url + "team",
    siteName: "Dentio Dental Care",
    locale: "en_IN",
    type: "website",
    images: [{ url: siteMeta.ogImage, width: 1200, height: 630, alt: "Dentio Dental Care Team" }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteMeta.pages.team.title,
    description: siteMeta.pages.team.description,
    images: [siteMeta.ogImage],
  },
};

export default function TeamLayout({ children }: { children: React.ReactNode }) {
  return children;
}
