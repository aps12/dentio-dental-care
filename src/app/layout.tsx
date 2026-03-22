'use client';

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import Head from "next/head";
import { siteMeta } from "./metadata";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <Head>
        <title>{siteMeta.title}</title>
        <meta name="description" content={siteMeta.description} />
        <meta name="keywords" content={siteMeta.keywords} />
        <meta name="author" content="Dentio Dental Care, Pune" />
        <meta name="robots" content="index, follow" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={siteMeta.title} />
        <meta property="og:description" content={siteMeta.description} />
        <meta property="og:url" content={siteMeta.url} />
        <meta property="og:image" content={siteMeta.logo} />
        <meta property="og:site_name" content="Dentio Dental Care" />
        <meta property="og:locale" content="en_IN" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={siteMeta.title} />
        <meta name="twitter:description" content={siteMeta.description} />
        <meta name="twitter:image" content={siteMeta.logo} />
        <meta name="twitter:site" content="@dentiodentalcare" />
        <meta name="twitter:creator" content="@dentiodentalcare" />
        <link rel="canonical" href={siteMeta.url} />
        <link rel="icon" href="/favicon.ico" />
        {/* LocalBusiness Schema.org JSON-LD */}
        <script type="application/ld+json" dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Dentist',
            name: 'Dentio Dental Care',
            image: siteMeta.logo,
            '@id': siteMeta.url,
            url: siteMeta.url,
            telephone: siteMeta.phone,
            email: siteMeta.email,
            address: {
              '@type': 'PostalAddress',
              streetAddress: 'Shop #210, One Avenue, Maan Rd, Hinjawadi Phase 1',
              addressLocality: 'Pune',
              addressRegion: 'MH',
              postalCode: '411057',
              addressCountry: 'IN',
            },
            geo: {
              '@type': 'GeoCoordinates',
              latitude: siteMeta.geo.lat,
              longitude: siteMeta.geo.lng,
            },
            openingHoursSpecification: [
              {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: [
                  'Monday',
                  'Tuesday',
                  'Thursday',
                  'Friday',
                  'Saturday',
                  'Sunday',
                ],
                opens: '10:00',
                closes: '21:00',
              },
            ],
            sameAs: [
              'https://www.instagram.com/dentiodentalcare/',
              siteMeta.gmaps
            ]
          })
        }} />
      </Head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-blue-100 via-white to-cyan-100 min-h-screen`}
      >
        {/* Global NavBar - fixed for all pages */}
        <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-md shadow-md border-b border-cyan-100">
          <nav className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3 group">
              <Image
                src="/logo.png"
                alt="Dentio Logo"
                width={44}
                height={44}
                className="rounded-full shadow-md border-2 border-cyan-500 group-hover:scale-105 transition-transform duration-200"
              />
              <span className="text-2xl font-extrabold text-blue-900 tracking-tight group-hover:text-cyan-700 transition-colors duration-200">
                Dentio Dental Care
              </span>
            </Link>
            {/* Desktop Nav */}
            <div className="hidden md:flex gap-2 lg:gap-4 items-center">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About" },
                { href: "/services", label: "Services" },
                { href: "/team", label: "Team" },
                { href: "/faqs", label: "FAQs" },
                { href: "/contact", label: "Contact" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 rounded-full font-semibold text-blue-800 hover:bg-cyan-100 hover:text-cyan-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                >
                  {link.label}
                </Link>
              ))}
              <a
                href="https://dentio.dentostack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-5 py-2 rounded-full font-bold shadow hover:scale-105 hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 text-base flex items-center gap-2"
              >
                <svg
                  className="w-5 h-5 text-white"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M12.293 2.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-9 9a1 1 0 01-.39.242l-4 1a1 1 0 01-1.213-1.213l1-4a1 1 0 01.242-.39l9-9zM5.414 17H17v-1.586l-2-2V15a1 1 0 01-1 1H7.414l-2 2z" />
                </svg>
                Book Online
              </a>
            </div>
            {/* Mobile Hamburger Menu */}
            <div className="md:hidden flex items-center">
              <button
                id="mobile-menu-button"
                className="p-2 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-300 hover:bg-cyan-100 transition"
                aria-label="Open menu"
                type="button"
                onClick={() => {
                  const menu = document.getElementById('mobile-menu-dropdown');
                  if (menu) menu.classList.toggle('hidden');
                }}
              >
                <svg className="w-7 h-7 text-blue-900" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </nav>
          {/* Mobile Dropdown Menu */}
          <div id="mobile-menu-dropdown" className="md:hidden hidden bg-white/95 border-b border-cyan-100 px-4 py-4 space-y-2 shadow-lg">
            {[
              { href: "/", label: "Home" },
              { href: "/about", label: "About" },
              { href: "/services", label: "Services" },
              { href: "/team", label: "Team" },
              { href: "/faqs", label: "FAQs" },
              { href: "/contact", label: "Contact" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="block w-full px-4 py-3 rounded-xl font-semibold text-blue-800 hover:bg-cyan-100 hover:text-cyan-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-300"
                onClick={() => {
                  const menu = document.getElementById('mobile-menu-dropdown');
                  if (menu) menu.classList.add('hidden');
                }}
              >
                {link.label}
              </Link>
            ))}
            <a
              href="https://dentio.dentostack.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full mt-2 bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-4 py-3 rounded-xl font-bold shadow text-center hover:scale-105 hover:from-blue-700 hover:to-cyan-700 transition-all duration-200 text-base"
            >
              Book Online
            </a>
          </div>
        </header>
        <main className="min-h-[80vh] pt-20">{children}</main>
        <footer className="bg-blue-900 text-white pt-10 pb-6 px-2 sm:px-4 mt-auto border-t border-cyan-200/20">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-col md:flex-row md:justify-between md:items-start gap-8 md:gap-0">
            {/* Logo & Tagline */}
            <div className="flex-1 flex flex-col items-center md:items-start mb-8 md:mb-0">
              <Image src="/logo.png" alt="Dentio Logo" width={64} height={64} className="rounded-full shadow border-2 border-cyan-400 mb-3" />
              <span className="font-extrabold text-lg sm:text-xl tracking-tight mb-1 text-center md:text-left">Dentio Dental Care</span>
              <span className="text-cyan-100 text-sm mb-2 text-center md:text-left">Put a Smile in Your Life</span>
              <div className="flex gap-4 mt-2">
                <a href="https://www.instagram.com/dentiodentalcare/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-cyan-300 transition p-2 rounded-full bg-white/10"><svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24"><path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2zm0 1.5A4.25 4.25 0 0 0 3.5 7.75v8.5A4.25 4.25 0 0 0 7.75 20.5h8.5A4.25 4.25 0 0 0 20.5 16.25v-8.5A4.25 4.25 0 0 0 16.25 3.5zm4.25 3.25a5.25 5.25 0 1 1 0 10.5a5.25 5.25 0 0 1 0-10.5zm0 1.5a3.75 3.75 0 1 0 0 7.5a3.75 3.75 0 0 0 0-7.5zm5.25.75a1 1 0 1 1-2 0a1 1 0 0 1 2 0z"/></svg></a>
                {/* Modern WhatsApp icon */}
                <a href="https://wa.me/918625098210" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="hover:text-green-400 transition p-2 rounded-full bg-white/10">
                  <svg className="w-7 h-7" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="32" height="32" rx="16" fill="#25D366"/>
                    <path d="M16 6C10.477 6 6 10.477 6 16c0 2.021.606 3.898 1.65 5.47L6 26l4.66-1.62A9.94 9.94 0 0 0 16 26c5.523 0 10-4.477 10-10S21.523 6 16 6Zm0 18.333c-1.61 0-3.13-.47-4.41-1.28l-.31-.19-2.77.96.94-2.7-.2-.32A8.32 8.32 0 0 1 7.667 16c0-4.6 3.74-8.333 8.333-8.333 4.6 0 8.333 3.733 8.333 8.333 0 4.6-3.733 8.333-8.333 8.333Zm4.47-6.13c-.25-.13-1.48-.73-1.7-.81-.23-.08-.4-.12-.57.13-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.38.11-.5.12-.12.25-.3.37-.45.12-.15.16-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.48-.41-.42-.57-.43-.15-.01-.32-.01-.5-.01-.17 0-.45.06-.68.28-.23.22-.9.88-.9 2.14 0 1.26.92 2.48 1.05 2.65.13.17 1.81 2.77 4.4 3.77.62.21 1.1.33 1.48.42.62.15 1.18.13 1.62.08.5-.06 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29Z" fill="#fff"/>
                  </svg>
                </a>
                {/* Google page (globe) icon */}
                <a href="https://share.google/pW43fzI7uyDOSbzhT" target="_blank" rel="noopener noreferrer" aria-label="Google Page" className="hover:text-cyan-300 transition p-2 rounded-full bg-white/10">
                  <svg className="w-7 h-7" fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><g clipPath="url(#a)"><path fillRule="evenodd" clipRule="evenodd" d="M10.27 14.1a6.5 6.5 0 0 0 3.67-3.45q-1.24.21-2.7.34-.31 1.83-.97 3.1M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16m.48-1.52a7 7 0 0 1-.96 0H7.5a4 4 0 0 1-.84-1.32q-.38-.89-.63-2.08a40 40 0 0 0 3.92 0q-.25 1.2-.63 2.08a4 4 0 0 1-.84 1.31zm2.94-4.76q1.66-.15 2.95-.43a7 7 0 0 0 0-2.58q-1.3-.27-2.95-.43a18 18 0 0 1 0 3.44m-1.27-3.54a17 17 0 0 1 0 3.64 39 39 0 0 1-4.3 0 17 17 0 0 1 0-3.64 39 39 0 0 1 4.3 0m1.1-1.17q1.45.13 2.69.34a6.5 6.5 0 0 0-3.67-3.44q.65 1.26.98 3.1M8.48 1.5l.01.02q.41.37.84 1.31.38.89.63 2.08a40 40 0 0 0-3.92 0q.25-1.2.63-2.08a4 4 0 0 1 .85-1.32 7 7 0 0 1 .96 0m-2.75.4a6.5 6.5 0 0 0-3.67 3.44 29 29 0 0 1 2.7-.34q.31-1.83.97-3.1M4.58 6.28q-1.66.16-2.95.43a7 7 0 0 0 0 2.58q1.3.27 2.95.43a18 18 0 0 1 0-3.44m.17 4.71q-1.45-.12-2.69-.34a6.5 6.5 0 0 0 3.67 3.44q-.65-1.27-.98-3.1" fill="#666"/></g><defs><clipPath id="a"><path fill="#fff" d="M0 0h16v16H0z"/></clipPath></defs></svg>
                </a>
              </div>
            </div>
            {/* Divider */}
            <div className="hidden md:block w-px bg-cyan-100/30 mx-8 h-32 self-center" />
            {/* Quick Links */}
            <div className="flex-1 flex flex-col items-center md:items-start mb-8 md:mb-0 mt-6 md:mt-0">
              <span className="font-semibold text-lg mb-3 text-cyan-100">Quick Links</span>
              <div className="flex flex-col gap-2 text-cyan-50 text-base text-center md:text-left">
                <Link href="/" className="hover:text-cyan-300 transition">Home</Link>
                <Link href="/about" className="hover:text-cyan-300 transition">About</Link>
                <Link href="/services" className="hover:text-cyan-300 transition">Services</Link>
                <Link href="/team" className="hover:text-cyan-300 transition">Team</Link>
                <Link href="/faqs" className="hover:text-cyan-300 transition">FAQs</Link>
                <Link href="/contact" className="hover:text-cyan-300 transition">Contact</Link>
              </div>
            </div>
            {/* Divider */}
            <div className="hidden md:block w-px bg-cyan-100/30 mx-8 h-32 self-center" />
            {/* Contact Info */}
            <div className="flex-1 flex flex-col items-center md:items-start mt-6 md:mt-0">
              <span className="font-semibold text-lg mb-3 text-cyan-100">Contact</span>
              <div className="flex flex-col gap-2 text-cyan-50 text-base text-center md:text-left">
                <span className="flex items-center gap-2 justify-center md:justify-start"><svg className="w-5 h-5 text-cyan-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"/><circle cx="12" cy="10" r="3"/></svg>Shop#210, One Avenue, Maan Rd, Hinjawadi, Pune (MH)</span>
                <span className="flex items-center gap-2 justify-center md:justify-start"><svg className="w-5 h-5 text-cyan-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg><a href="mailto:dent.io210@gmail.com" className="hover:underline">dent.io210@gmail.com</a></span>
                <span className="flex items-center gap-2 justify-center md:justify-start"><svg className="w-5 h-5 text-cyan-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92V19a2 2 0 01-2.18 2A19.72 19.72 0 013 5.18 2 2 0 015 3h2.09a2 2 0 012 1.72c.13.81.36 1.6.68 2.34a2 2 0 01-.45 2.11l-.27.27a16 16 0 006.29 6.29l.27-.27a2 2 0 012.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0122 16.92z"/></svg><a href="tel:+918625098210" className="hover:underline">+91-8625098210</a></span>
                <span className="flex items-center gap-2 justify-center md:justify-start">
                  <svg className="w-5 h-5 text-cyan-200" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 20 20"><path strokeLinecap="round" strokeLinejoin="round" d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 2a6 6 0 110 12A6 6 0 0110 4zm0 1a1 1 0 011 1v3.586l2.293 2.293a1 1 0 01-1.414 1.414l-2.586-2.586A1 1 0 019 9V5a1 1 0 011-1z"/></svg>
                  <span className="flex flex-col text-cyan-50 text-sm font-normal">
                    <span>Mon – Fri: 10:00 AM – 2:00 PM, 5:00 PM – 9:00 PM</span>
                    <span className="text-red-200">Sunday: Closed</span>
                  </span>
                </span>
              </div>
            </div>
          </div>
          <div className="border-t border-cyan-100/20 mt-8 pt-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-cyan-100">
            <span>&copy; {new Date().getFullYear()} Dentio Dental Care. All Rights Reserved.</span>
            <span>Made with <span className="text-pink-400">♥</span> in Pune</span>
            <button onClick={() => window.scrollTo({top:0,behavior:'smooth'})} className="flex items-center gap-1 px-3 py-1 rounded-full bg-cyan-700 hover:bg-cyan-600 text-white font-semibold shadow transition-all text-xs mt-2 md:mt-0"><svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 15l7-7 7 7"/></svg>Back to top</button>
          </div>
        </footer>
      </body>
    </html>
  );
}
