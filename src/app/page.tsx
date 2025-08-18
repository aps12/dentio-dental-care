'use client';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { services as allServices } from "../data/services";
import Head from "next/head";
import { siteMeta } from "./metadata";
import { useState, useRef, useEffect } from "react";

const popularServices = allServices.filter(s => s.popular);

export default function Home() {
  return (
    <>
      <Head>
        <title>{siteMeta.title}</title>
        <meta name="description" content={siteMeta.description} />
        <meta name="keywords" content={siteMeta.keywords} />
        <link rel="canonical" href={siteMeta.url} />
      </Head>
      <div className="relative font-sans min-h-screen flex flex-col">
        {/* Hero Section with background image */}
        <section className="relative flex flex-col items-center justify-center px-4 py-10 md:py-20 gap-4 text-center overflow-hidden bg-white/70 md:bg-white/60 rounded-none shadow-none">
          <div className="absolute inset-0 -z-10 w-full h-full pointer-events-none">
            <Image
              src="/hero.jpg"
              alt="Dentist at work"
              fill
              priority
              className="object-cover w-full h-full opacity-90 blur-[12px] scale-110 transition-all duration-500"
              sizes="100vw"
            />
          </div>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-700 via-blue-800 to-cyan-500 leading-tight mb-1 tracking-tight font-serif drop-shadow-xl"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            DENTIO DENTAL CARE
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.1 }}
            className="text-xl md:text-3xl text-cyan-700 font-medium mb-2 font-sans"
          >
            Put a Smile in Your Life
          </motion.p>
          <motion.p initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.2 }} className="text-lg md:text-2xl text-blue-800 max-w-2xl mx-auto mb-2 drop-shadow-md">
            Expert dental care in Pune. Modern, gentle, and personalized for every patient. Book your appointment and experience the Dentio difference!
          </motion.p>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.4 }} className="flex flex-col sm:flex-row gap-4 justify-center mt-2">
            <Link href="https://dentio.dentostack.com" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:scale-105 hover:from-blue-700 hover:to-cyan-700 transition-all duration-300">Book Appointment Online</Link>
            <a href="https://wa.me/918625098210?text=Hello!%20I%20would%20like%20to%20book%20an%20appointment." target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 bg-green-500 text-white px-8 py-4 rounded-full font-bold shadow-lg hover:bg-green-600 hover:scale-105 transition-all duration-300">
              <Image src="/whatsapp.png" alt="WhatsApp" width={28} height={28} /> Book via WhatsApp
            </a>
          </motion.div>
        </section>
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-100 to-transparent my-8" aria-hidden="true" />
        {/* Services Section: Only show popular services, using imported array */}
        <motion.section id="services-simple" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative max-w-5xl mx-auto py-8 px-4 text-center overflow-hidden bg-white/80 rounded-2xl mt-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Our Services</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mb-4">
            {popularServices.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.07 }}
                className={`relative bg-white/90 rounded-2xl shadow-md shadow-cyan-100 p-8 flex flex-col items-center border-2 w-full text-left border-cyan-500`}
              >
                <div className="flex items-center justify-center w-20 h-20 rounded-full mb-4 bg-gradient-to-br from-cyan-100 to-blue-100 border-2 border-cyan-400 shadow-lg">
                  <Image src={s.icon} alt={s.title} width={48} height={48} className="object-contain" />
                </div>
                <h3 className="font-semibold text-lg mb-2 text-cyan-700 text-center w-full break-words leading-snug">{s.title}</h3>
                <p className="text-blue-800 text-center text-base">{s.desc}</p>
                <span className="absolute top-2 right-2 bg-cyan-600 text-white text-xs px-2 py-1 rounded-full shadow">Popular</span>
              </motion.div>
            ))}
          </div>
          <div className="mt-2">
            <a href="/services" className="inline-block bg-cyan-700 text-white px-6 py-3 rounded-full font-semibold shadow hover:bg-cyan-800 transition">See All Services</a>
          </div>
        </motion.section>
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-100 to-transparent my-8" aria-hidden="true" />
        {/* Team Section */}
        <motion.section id="team" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative max-w-3xl mx-auto py-8 px-4 text-center overflow-hidden bg-white/80 rounded-2xl mt-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-blue-900">Meet Our Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 justify-center">
            {[
              { img: "/team1.png", name: "Dr. Shalini Patel", role: "BDS, MDS (Ortho)", desc: "Founder & Chief Dentist. 12+ years of experience in orthodontics and smile design." },
              { img: "/team2.png", name: "Dr. Namrata Chame", role: "BDS", desc: "General & Family Dentist. Passionate about preventive care and patient education." },
              { img: "/team3.png", name: "Monica Bisht", role: "Dental Hygienist", desc: "Expert in oral hygiene and gum care. Dedicated to patient comfort and education." },
              { img: "/team2.png", name: "Komal Kamble", role: "Clinic Care Coordinator", desc: "Clinic care coordinator and the first smile you see at Dentio." },
            ].map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="bg-white/80 rounded-2xl p-8 flex flex-col items-center min-h-[320px] h-full border border-slate-100 shadow-md">
                <Image src={t.img} alt={t.name} width={72} height={72} className="rounded-full mb-3 object-cover" />
                <h3 className="font-semibold text-base text-blue-900 mb-1">{t.name}</h3>
                <div className="text-blue-700 text-xs mb-2">{t.role}</div>
                <p className="text-blue-800 text-center text-xs">{t.desc}</p>
              </motion.div>
            ))}
          </div>
          <div className="flex justify-center mt-6">
            <a
              href="/team"
              className="inline-block px-6 py-3 rounded-full bg-cyan-600 text-white font-semibold shadow-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 transition"
              aria-label="Learn more about our team"
            >
              Know More About Our Team
            </a>
          </div>
        </motion.section>
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-100 to-transparent my-8" aria-hidden="true" />
        {/* Reviews Section */}
        <motion.section id="reviews" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative bg-white/80 py-8 px-4 overflow-hidden rounded-2xl shadow-md mt-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4 text-blue-900">What Our Patients Say</h2>
          <div className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {[
              { name: "Priya S.", text: "The best dental experience I've ever had! The team is so caring and professional. Highly recommended.", rating: 5 },
              { name: "Amit K.", text: "Dr. Shalini explained everything clearly and made me feel at ease. My root canal was painless!", rating: 5 },
              { name: "Rohit M.", text: "Clinic is very clean and staff is friendly. Got my braces here and the results are amazing!", rating: 5 },
              { name: "Sneha T.", text: "Highly skilled doctors and modern equipment. My kids love coming here!", rating: 5 },
              { name: "Vikas P.", text: "Quick, painless tooth extraction. The doctor followed up after the procedure too.", rating: 5 },
              { name: "Megha D.", text: "Transparent pricing and honest advice. I trust them for all my dental needs.", rating: 5 },
            ].map((t, i) => (
              <motion.div key={t.name} initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: i * 0.1 }} className="relative bg-white/90 rounded-2xl shadow-md p-8 flex flex-col items-center border border-slate-100 hover:shadow-lg transition">
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(t.rating)].map((_, idx) => (
                    <svg key={idx} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" /></svg>
                  ))}
                </div>
                <div className="text-cyan-600 text-3xl mb-2">“</div>
                <p className="text-blue-800 mb-4 text-center text-base italic">{t.text}</p>
                <div className="font-semibold text-blue-900">{t.name}</div>
              </motion.div>
            ))}
          </div>
          <div className="text-center mt-6">
            <a href="https://www.google.com/maps/place/DENTIO+Dental+Care/@18.577018,73.7182741,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bba812226a0b:0xd65b14cde4fc702d!8m2!3d18.5770129!4d73.720849!16s%2Fg%2F11wbfkl7yr?entry=ttu" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-700 font-semibold hover:underline text-lg">
              <svg className="w-5 h-5 text-cyan-600" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2C6.13 2 3 5.13 3 9c0 5.25 7 9 7 9s7-3.75 7-9c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1110 6a2.5 2.5 0 010 5.5z" /></svg>
              See all Google reviews
            </a>
          </div>
        </motion.section>
        <div className="w-full h-0.5 bg-gradient-to-r from-transparent via-cyan-100 to-transparent my-8" aria-hidden="true" />
        {/* Contact Section */}
        <motion.section id="contact" initial={{ opacity: 0, y: 40 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} className="relative py-8 px-4 text-center overflow-hidden bg-white/80 rounded-2xl w-full mt-4">
          <h2 className="text-3xl font-bold text-center mb-4 text-blue-900 drop-shadow">Contact Us</h2>
          <motion.div initial={{ opacity: 0, scale: 0.97 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.7, delay: 0.2 }} className="max-w-5xl mx-auto flex flex-col md:flex-row gap-4 md:gap-6 items-stretch min-h-[320px] mt-2 mb-2">
            {/* WhatsApp Form */}
            <motion.form
              onSubmit={e => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name') || '';
                const message = formData.get('message') || '';
                const text = encodeURIComponent(`Hello! My name is ${name}. ${message}`);
                window.open(`https://wa.me/918625098210?text=${text}`, '_blank');
              }}
              whileHover={{ scale: 1.02 }}
              className="flex-1 flex flex-col justify-center gap-4 bg-gradient-to-br from-white via-cyan-50 to-blue-50 rounded-3xl p-8 border border-cyan-100 transition-all duration-300 min-h-[320px] h-full md:min-h-0 md:h-auto md:flex md:flex-col md:justify-stretch shadow-md"
              style={{ display: 'flex', flexDirection: 'column', height: '100%' }}
            >
              <input name="name" type="text" placeholder="Your Name" className="border rounded-lg px-4 py-3 text-base focus:ring-2 focus:ring-cyan-200 transition" required />
              <textarea name="message" placeholder="Your Message" className="border rounded-lg px-4 py-3 text-base focus:ring-2 focus:ring-cyan-200 transition" rows={5} required />
              <motion.button whileTap={{ scale: 0.97 }} type="submit" className="bg-gradient-to-r from-green-500 to-cyan-600 text-white px-6 py-2 rounded-lg font-semibold hover:from-green-600 hover:to-cyan-700 hover:scale-105 transition-all text-base flex items-center justify-center gap-2">
                {/* Modern WhatsApp icon */}
                <svg className="w-5 h-5" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="32" height="32" rx="16" fill="#25D366"/>
                  <path d="M16 6C10.477 6 6 10.477 6 16c0 2.021.606 3.898 1.65 5.47L6 26l4.66-1.62A9.94 9.94 0 0 0 16 26c5.523 0 10-4.477 10-10S21.523 6 16 6Zm0 18.333c-1.61 0-3.13-.47-4.41-1.28l-.31-.19-2.77.96.94-2.7-.2-.32A8.32 8.32 0 0 1 7.667 16c0-4.6 3.74-8.333 8.333-8.333 4.6 0 8.333 3.733 8.333 8.333 0 4.6-3.733 8.333-8.333 8.333Zm4.47-6.13c-.25-.13-1.48-.73-1.7-.81-.23-.08-.4-.12-.57.13-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.38.11-.5.12-.12.25-.3.37-.45.12-.15.16-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.48-.41-.42-.57-.43-.15-.01-.32-.01-.5-.01-.17 0-.45.06-.68.28-.23.22-.9.88-.9 2.14 0 1.26.92 2.48 1.05 2.65.13.17 1.81 2.77 4.4 3.77.62.21 1.1.33 1.48.42.62.15 1.18.13 1.62.08.5-.06 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29Z" fill="#fff"/>
                </svg>
                Send via WhatsApp
              </motion.button>
            </motion.form>
            {/* Contact Info */}
            <motion.div whileHover={{ scale: 1.02 }} className="flex-1 flex flex-col justify-center gap-3 bg-gradient-to-br from-cyan-50 to-blue-50 rounded-3xl p-8 border border-cyan-100 text-blue-800 text-base transition-all duration-300 min-h-[320px] h-full md:min-h-0 md:h-auto md:flex md:flex-col md:justify-stretch shadow-md">
              <div className="font-semibold text-blue-900 text-lg mb-1 flex items-center gap-2">
                {/* Hospital icon by Freepik - Flaticon */}
                <svg className="w-6 h-6 text-cyan-600" viewBox="0 0 64 64" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <rect x="8" y="20" width="48" height="36" rx="6" fill="none" stroke="currentColor" strokeWidth="3"/>
                  <rect x="24" y="36" width="16" height="20" rx="2" fill="none" stroke="currentColor" strokeWidth="3"/>
                  <rect x="30" y="44" width="4" height="8" rx="1" fill="currentColor"/>
                  <rect x="38" y="44" width="4" height="8" rx="1" fill="currentColor"/>
                  <rect x="22" y="44" width="4" height="8" rx="1" fill="currentColor"/>
                  <rect x="28" y="28" width="8" height="8" rx="1" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <rect x="30.5" y="30.5" width="3" height="3" rx="0.5" fill="currentColor"/>
                  <rect x="12" y="24" width="8" height="8" rx="1" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <rect x="44" y="24" width="8" height="8" rx="1" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <rect x="16" y="12" width="32" height="12" rx="4" fill="none" stroke="currentColor" strokeWidth="3"/>
                  <rect x="28" y="8" width="8" height="8" rx="2" fill="none" stroke="currentColor" strokeWidth="2"/>
                  <path d="M32 32v-4m-2 2h4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                </svg>
                Dentio Dental Care
              </div>
              <div className="flex items-center gap-2"><svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"/><circle cx="12" cy="10" r="3"/></svg>Shop#210, One Avenue, Maan Rd, Hinjawadi, Pune (MH)</div>
              <div className="flex items-center gap-2"><svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg><a href="mailto:dent.io210@gmail.com" className="text-cyan-600 hover:underline">dent.io210@gmail.com</a></div>
              <div className="flex items-center gap-2"><svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92V19a2 2 0 01-2.18 2A19.72 19.72 0 013 5.18 2 2 0 015 3h2.09a2 2 0 012 1.72c.13.81.36 1.6.68 2.34a2 2 0 01-.45 2.11l-.27.27a16 16 0 006.29 6.29l.27-.27a2 2 0 012.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0122 16.92z"/></svg><a href="tel:+918625098210" className="text-cyan-600 hover:underline">+91-8625098210</a></div>
              <a href="https://www.google.com/maps/place/DENTIO+Dental+Care/@18.577018,73.7182741,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bba812226a0b:0xd65b14cde4fc702d!8m2!3d18.5770129!4d73.720849!16s%2Fg%2F11wbfkl7yr?entry=ttu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-cyan-700 hover:underline mt-1"><svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5c0 7.5-9 12.5-9 12.5S3 18 3 10.5A9 9 0 1121 10.5z"/><circle cx="12" cy="10.5" r="3.5"/></svg>Google Maps</a>
              <div className="mt-2 text-blue-700 text-sm flex flex-col gap-1">
                <div className="flex items-center gap-3">
                  <span className="font-semibold text-blue-900">Hours:</span>
                  <div className="flex flex-row gap-2">
                    <span className="inline-flex items-center gap-1 bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full font-semibold text-sm shadow-sm border border-cyan-200 whitespace-nowrap">
                      <svg className="w-4 h-4 text-cyan-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 2a6 6 0 110 12A6 6 0 0110 4zm0 1a1 1 0 011 1v3.586l2.293 2.293a1 1 0 01-1.414 1.414l-2.586-2.586A1 1 0 019 9V5a1 1 0 011-1z"/></svg>
                      10 am – 2 pm
                    </span>
                    <span className="inline-flex items-center gap-1 bg-cyan-100 text-cyan-800 px-3 py-1 rounded-full font-semibold text-sm shadow-sm border border-cyan-200 whitespace-nowrap">
                      <svg className="w-4 h-4 text-cyan-500" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 2a6 6 0 110 12A6 6 0 0110 4zm0 1a1 1 0 011 1v3.586l2.293 2.293a1 1 0 01-1.414 1.414l-2.586-2.586A1 1 0 019 9V5a1 1 0 011-1z"/></svg>
                      5 pm – 9 pm
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <span className="inline-flex items-center gap-1 bg-red-100 text-red-700 px-3 py-1 rounded-full font-semibold text-sm shadow-sm border border-red-200">
                    <svg className="w-4 h-4 text-red-400" fill="currentColor" viewBox="0 0 20 20"><path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 2a6 6 0 110 12A6 6 0 0110 4zm0 1a1 1 0 011 1v3.586l2.293 2.293a1 1 0 01-1.414 1.414l-2.586-2.586A1 1 0 019 9V5a1 1 0 011-1z"/></svg>
                    Wednesday - Closed
                  </span>
                </div>
              </div>
            </motion.div>
          </motion.div>
          {/* Book Appointment Button - outside cards, full width, mobile first */}
          <div className="w-full flex flex-col md:flex-row items-center justify-center mt-2">
            <a href="https://dentio.dentostack.com/" target="_blank" rel="noopener noreferrer"
              className="w-full md:w-auto max-w-md mx-auto bg-gradient-to-r from-cyan-600 to-blue-600 text-white px-8 py-4 rounded-full font-bold shadow-lg flex items-center justify-center gap-2 text-lg hover:scale-105 hover:from-blue-700 hover:to-cyan-700 transition-all duration-300 mb-2 md:mb-0">
              <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M12.293 2.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-9 9a1 1 0 01-.39.242l-4 1a1 1 0 01-1.213-1.213l1-4a1 1 0 01.242-.39l9-9zM5.414 17H17v-1.586l-2-2V15a1 1 0 01-1 1H7.414l-2 2z" /></svg>
              Book Appointment Online
            </a>
          </div>
        </motion.section>
        {/* Persistent WhatsApp Icon */}
        <a href="https://wa.me/918625098210?text=Hello!%20I%20would%20like%20to%20book%20an%20appointment." target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 shadow-lg rounded-full bg-green-500 hover:bg-green-600 p-3 transition-all flex items-center justify-center">
          <Image src="/whatsapp.png" alt="WhatsApp" width={40} height={40} />
        </a>
      </div>
    </>
  );
}
