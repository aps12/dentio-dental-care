'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Switch } from '@headlessui/react';
import { services } from "../../data/services";

export default function Services() {
  const [selected, setSelected] = useState<null | number>(null);
  const [simpleView, setSimpleView] = useState(true);
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
            <span className="text-cyan-400 font-medium">Services</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="text-white">Comprehensive </span>
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">Dental Services</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            45+ advanced treatments — from preventive care and braces to implants, smile design, and emergency dentistry.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 56" fill="none" className="w-full"><path d="M0 56h1440V28C1220 0 720 56 360 28S0 56 0 56z" fill="currentColor" className="text-slate-50" /></svg>
        </div>
      </section>

      <main className="bg-gradient-to-b from-slate-50 to-white" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">

          {/* View Toggle */}
          <div className="flex items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
            <span className="text-sm sm:text-base text-slate-700 font-medium">List View</span>
            <Switch
              checked={!simpleView}
              onChange={() => setSimpleView(v => !v)}
              className={`${!simpleView ? 'bg-cyan-600' : 'bg-slate-300'} relative inline-flex h-7 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2`}
            >
              <span className="sr-only">Toggle detailed view</span>
              <span className={`inline-block h-6 w-6 transform rounded-full bg-white shadow-sm transition-transform ${!simpleView ? 'translate-x-7' : 'translate-x-1'}`} />
            </Switch>
            <span className="text-sm sm:text-base text-slate-700 font-medium">Detailed View</span>
          </div>
        {simpleView ? (
          <ul className="divide-y divide-slate-100 bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden text-left max-w-3xl mx-auto">
            {services.map((s, i) => (
              <li key={s.title}>
                <button
                  className={`w-full flex items-center gap-3 sm:gap-4 px-4 sm:px-5 py-3 sm:py-4 hover:bg-slate-50 focus:bg-slate-100 transition-colors group relative ${s.popular ? 'bg-slate-50/80 border-l-4 border-cyan-600' : ''}`}
                  onClick={() => setSelected(i)}
                  aria-label={`View details for ${s.title}`}
                >
                  <span className="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-cyan-50 border border-cyan-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Image src={s.icon} alt={s.title} width={32} height={32} className="w-6 h-6 sm:w-8 sm:h-8" />
                  </span>
                  <span className="flex-1 text-left">
                    <span className="block font-semibold text-slate-900 text-sm sm:text-base flex flex-wrap items-center gap-2">
                      {s.title}
                      {s.popular && (
                        <span className="px-2 py-0.5 rounded-full bg-cyan-600 text-white text-[10px] sm:text-xs font-semibold">Popular</span>
                      )}
                    </span>
                    <span className="block text-slate-600 text-xs sm:text-sm mt-0.5">{s.desc}</span>
                  </span>
                  <svg className="w-4 h-4 sm:w-5 sm:h-5 text-slate-400 group-hover:text-cyan-600 transition-colors flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {services.map((s, i) => (
              <motion.button
                key={s.title}
                type="button"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className={`relative bg-white rounded-2xl shadow-sm border p-6 sm:p-8 flex flex-col items-center hover:shadow-md hover:-translate-y-1 transition-all duration-300 w-full ${s.popular ? 'border-cyan-500 bg-cyan-50/30' : 'border-slate-200'}`}
                onClick={() => setSelected(i)}
                aria-label={`View details for ${s.title}`}
              >
                <div className={`flex items-center justify-center w-20 h-20 rounded-full mb-4 ${s.popular ? 'bg-gradient-to-br from-cyan-100 to-blue-100 border-2 border-cyan-400 shadow-lg' : 'bg-blue-50'}`}>
                  <Image src={s.icon} alt={s.title} width={48} height={48} className="object-contain" />
                </div>
                {/* Center align header if it wraps to 2 lines */}
                <h3 className={`font-semibold text-lg mb-2 ${s.popular ? 'text-cyan-700' : 'text-blue-900'} text-center w-full break-words leading-snug`}>{s.title}</h3>
                <p className="text-blue-800 text-center text-base">{s.desc}</p>
                {s.popular && <span className="absolute top-2 right-2 bg-cyan-600 text-white text-xs px-2 py-1 rounded-full shadow">Popular</span>}
              </motion.button>
            ))}
          </div>
        )}
        {/* Modal for service details */}
        {selected !== null && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-2xl shadow-2xl max-w-md w-full p-8 relative animate-fadeIn"
            >
              <button onClick={() => setSelected(null)} className="absolute top-3 right-3 text-cyan-700 hover:text-cyan-900 text-2xl font-bold" aria-label="Close details">&times;</button>
              <div className="flex flex-col items-center mb-4">
                <Image src={services[selected].icon} alt={services[selected].title} width={56} height={56} className="mb-2" />
                <h2 className="text-xl font-bold text-blue-900 mb-1 text-center">{services[selected].title}</h2>
                {services[selected].popular && <span className="bg-cyan-600 text-white text-xs px-2 py-1 rounded-full shadow">Popular</span>}
              </div>
              <p className="text-blue-800 text-base text-center">{services[selected].details}</p>
            </motion.div>
          </div>
        )}
        </div>
      </main>

      {/* CTA Strip */}
      <section className="bg-gradient-to-r from-cyan-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-14 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            Not Sure Which Treatment You Need?
          </h2>
          <p className="text-cyan-100 text-sm sm:text-base mb-6">Book a free consultation and our team will guide you to the best solution for your smile.</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a href="https://dentio.dentostack.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3 bg-white text-cyan-700 text-sm font-bold rounded-xl hover:bg-cyan-50 shadow-lg shadow-cyan-800/20 transition-all duration-200">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
              Book Consultation
            </a>
            <a href="tel:+918625098210" className="inline-flex items-center gap-2 px-7 py-3 bg-cyan-700/40 text-white text-sm font-bold rounded-xl border border-white/20 hover:bg-cyan-700/60 transition-all duration-200">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
              Call +91-8625098210
            </a>
          </div>
        </div>
      </section>

      {/* WhatsApp FAB */}
      <a href="https://wa.me/918625098210?text=Hello!%20I%20would%20like%20to%20book%20an%20appointment." target="_blank" rel="noopener noreferrer" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50 shadow-lg hover:shadow-2xl rounded-full bg-green-600 hover:bg-green-700 p-3 sm:p-4 transition-all flex items-center justify-center group">
        <Image src="/whatsapp.png" alt="WhatsApp" width={28} height={28} className="group-hover:scale-110 transition-transform sm:w-8 sm:h-8" />
      </a>
    </>
  );
}
