'use client';
import { motion } from "framer-motion";
import Image from "next/image";

export default function Contact() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/hero.png" alt="" fill className="object-cover blur-[6px] opacity-[0.06]" sizes="100vw" />
          <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500 rounded-full blur-3xl opacity-10" />
          <div className="absolute bottom-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-cyan-400 rounded-full blur-3xl opacity-8" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.08),transparent_60%)]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 text-center">
          <nav className="flex items-center justify-center gap-2 text-sm text-slate-400 mb-6">
            <a href="/" className="hover:text-cyan-400 transition-colors">Home</a>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            <span className="text-cyan-400 font-medium">Contact</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="text-white">Get in </span>
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">Touch</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We&apos;d love to hear from you — book an appointment, ask a question, or simply say hello.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 56" fill="none" className="w-full"><path d="M0 56h1440V28C1220 0 720 56 360 28S0 56 0 56z" fill="currentColor" className="text-slate-50" /></svg>
        </div>
      </section>

      <main className="bg-gradient-to-b from-slate-50 to-white" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
            {/* WhatsApp Form */}
            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              onSubmit={e => {
                e.preventDefault();
                const formData = new FormData(e.currentTarget);
                const name = formData.get('name') || '';
                const message = formData.get('message') || '';
                const text = encodeURIComponent(`Hello! My name is ${name}. ${message}`);
                window.open(`https://wa.me/918625098210?text=${text}`, '_blank');
              }}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-8 flex flex-col gap-4"
            >
              <h2 className="text-lg font-bold text-slate-900 mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>Send Us a Message</h2>
              <p className="text-sm text-slate-500 mb-2">Fill in the form and we&apos;ll reply via WhatsApp instantly.</p>
              <input name="name" type="text" placeholder="Your Name" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-cyan-200 focus:border-cyan-400 transition outline-none" required />
              <textarea name="message" placeholder="Your Message" className="border border-slate-200 rounded-xl px-4 py-3 text-sm focus:ring-2 focus:ring-cyan-200 focus:border-cyan-400 transition outline-none" rows={5} required />
              <button type="submit" className="mt-auto flex items-center justify-center gap-2 px-6 py-3 bg-green-600 text-white text-sm font-bold rounded-xl hover:bg-green-700 shadow-md transition-all">
                <Image src="/whatsapp.png" alt="" width={18} height={18} />
                Send via WhatsApp
              </button>
            </motion.form>

            {/* Contact Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl border border-slate-200/80 shadow-sm p-6 sm:p-8 flex flex-col gap-5"
            >
              <h2 className="text-lg font-bold text-slate-900 mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>Clinic Information</h2>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"/><circle cx="12" cy="10" r="3"/></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">Address</p>
                  <p className="text-sm text-slate-500">Shop #210, One Avenue, Maan Rd, Hinjawadi Phase 1, Pune 411057</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">Phone</p>
                  <a href="tel:+918625098210" className="text-sm text-cyan-600 hover:underline">+91-8625098210</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">Email</p>
                  <a href="mailto:dent.io210@gmail.com" className="text-sm text-cyan-600 hover:underline">dent.io210@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-cyan-600" fill="none" stroke="currentColor" strokeWidth="1.8" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2" /></svg>
                </div>
                <div>
                  <p className="text-sm font-semibold text-slate-800">Hours</p>
                  <p className="text-sm text-slate-500">Mon – Sat: 10 AM – 2 PM, 5 PM – 9 PM</p>
                  <p className="text-sm text-red-500 font-medium">Sunday: Closed</p>
                </div>
              </div>

              <a
                href="https://www.google.com/maps/place/DENTIO+Dental+Care/@18.577018,73.7182741,17z"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-semibold text-cyan-600 hover:text-cyan-700 transition-colors mt-1"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5c0 7.5-9 12.5-9 12.5S3 18 3 10.5A9 9 0 1121 10.5z"/><circle cx="12" cy="10.5" r="3.5"/></svg>
                View on Google Maps
              </a>
            </motion.div>
          </div>

          {/* Book Appointment CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mt-10 text-center"
          >
            <a href="https://dentio.dentostack.com/" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-gradient-to-r from-cyan-600 to-cyan-500 text-white text-sm font-bold rounded-xl hover:from-cyan-700 hover:to-cyan-600 shadow-lg shadow-cyan-500/20 transition-all duration-200">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              Book Appointment Online
            </a>
          </motion.div>

        </div>
      </main>

      {/* Map embed */}
      <section className="w-full h-72 sm:h-96">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.5!2d73.7182741!3d18.577018!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bba812226a0b%3A0xd65b14cde4fc702d!2sDENTIO%20Dental%20Care!5e0!3m2!1sen!2sin!4v1"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Dentio Dental Care Location"
          className="w-full h-full"
        />
      </section>

      {/* WhatsApp FAB */}
      <a href="https://wa.me/918625098210?text=Hello!%20I%20would%20like%20to%20book%20an%20appointment." target="_blank" rel="noopener noreferrer" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50 shadow-lg hover:shadow-2xl rounded-full bg-green-600 hover:bg-green-700 p-3 sm:p-4 transition-all flex items-center justify-center group">
        <Image src="/whatsapp.png" alt="WhatsApp" width={28} height={28} className="group-hover:scale-110 transition-transform sm:w-8 sm:h-8" />
      </a>
    </>
  );
}
