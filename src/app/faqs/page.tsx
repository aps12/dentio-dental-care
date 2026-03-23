'use client';
import { motion } from "framer-motion";
import Image from "next/image";

const faqs = [
  {
    question: "What are your clinic hours?",
    answer: "We are open Monday to Saturday, 10:00 AM – 2:00 PM and 5:00 PM – 9:00 PM. Sundays are closed."
  },
  {
    question: "How do I book an appointment?",
    answer: "You can book online via our appointment portal, call us at +91-8625098210, or message us on WhatsApp. Walk-ins are welcome, but appointments are preferred to minimise wait time."
  },
  {
    question: "Do you accept walk-in patients?",
    answer: "Yes, walk-ins are welcome. However, we recommend booking an appointment to ensure minimal wait time and dedicated attention."
  },
  {
    question: "Is dental treatment painful?",
    answer: "We prioritise painless dentistry using the latest techniques, topical and local anaesthesia, and sedation options for anxious patients. Most procedures are completely comfortable."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, all major credit/debit cards, UPI (GPay, PhonePe, Paytm), and digital wallets. EMI options are also available for select treatments."
  },
  {
    question: "Do you offer emergency dental care?",
    answer: "Yes. For dental pain, injuries, or urgent needs, call us immediately and we will accommodate you as quickly as possible."
  },
  {
    question: "Are your treatments safe for children and seniors?",
    answer: "Absolutely. We provide gentle, age-appropriate care for all age groups — from toddlers to senior citizens — using child-friendly protocols and geriatric dental expertise."
  },
  {
    question: "How often should I visit the dentist?",
    answer: "A dental checkup and professional cleaning every 6 months is recommended. Your dentist may suggest more frequent visits based on your oral health."
  },
  {
    question: "What should I bring for my first visit?",
    answer: "Bring any previous dental records or X-rays, a list of current medications, and a valid ID. Please arrive 10 minutes early to complete registration."
  },
  {
    question: "Do you offer cosmetic dentistry?",
    answer: "Yes — we offer teeth whitening, veneers, smile makeovers, gummy smile correction, tooth reshaping, and more. Book a consultation to discuss what suits you best."
  },
  {
    question: "Is parking available at the clinic?",
    answer: "Yes, free parking is available at One Avenue for all our patients."
  },
];

export default function Faqs() {
  return (
    <>
      {/* Hero Banner */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        <div className="absolute inset-0">
          <Image src="/gallery3.png" alt="" fill className="object-cover blur-[6px] opacity-[0.06]" sizes="100vw" />
          <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500 rounded-full blur-3xl opacity-10" />
          <div className="absolute bottom-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-cyan-400 rounded-full blur-3xl opacity-8" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(6,182,212,0.08),transparent_60%)]" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 md:py-24 text-center">
          <nav className="flex items-center justify-center gap-2 text-sm text-slate-400 mb-6">
            <a href="/" className="hover:text-cyan-400 transition-colors">Home</a>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
            <span className="text-cyan-400 font-medium">FAQs</span>
          </nav>
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
            <span className="text-white">Frequently Asked </span>
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">Questions</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Everything you need to know about our treatments, appointments, and clinic — answered.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 56" fill="none" className="w-full"><path d="M0 56h1440V28C1220 0 720 56 360 28S0 56 0 56z" fill="currentColor" className="text-slate-50" /></svg>
        </div>
      </section>

      <main className="bg-gradient-to-b from-slate-50 to-white" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <motion.details
                key={faq.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="group bg-white rounded-xl shadow-sm p-5 sm:p-6 open:bg-slate-50 border border-slate-200 open:border-cyan-500 transition-all"
              >
                <summary className="font-semibold text-base sm:text-lg cursor-pointer text-slate-900 group-open:text-cyan-600 flex items-center gap-2 select-none transition-colors">
                  <span className="flex-1">{faq.question}</span>
                  <span className="ml-2 transition-transform duration-300 group-open:rotate-90 flex-shrink-0">
                    <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                  </span>
                </summary>
                <p className="mt-3 text-slate-600 text-sm sm:text-base leading-relaxed">{faq.answer}</p>
              </motion.details>
            ))}
          </div>

          {/* Still have questions? */}
          <div className="mt-12 text-center">
            <p className="text-slate-500 text-sm mb-4">Still have questions? We&apos;re happy to help.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://wa.me/918625098210?text=Hi%20Dentio%20Clinic%2C%20I%20have%20a%20question."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white text-sm font-bold rounded-xl hover:bg-green-700 shadow-md transition-all"
              >
                <Image src="/whatsapp.png" alt="" width={18} height={18} />
                Ask on WhatsApp
              </a>
              <a href="tel:+918625098210" className="inline-flex items-center gap-2 px-6 py-3 bg-white text-slate-700 text-sm font-bold rounded-xl border border-slate-200 hover:border-cyan-300 hover:text-cyan-700 shadow-sm transition-all">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call Us
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* CTA Strip */}
      <section className="bg-gradient-to-r from-cyan-600 to-cyan-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-14 text-center">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
            Ready to Book Your Visit?
          </h2>
          <p className="text-cyan-100 text-sm sm:text-base mb-6">Schedule an appointment today and experience the Dentio difference.</p>
          <a href="https://dentio.dentostack.com/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-7 py-3 bg-white text-cyan-700 text-sm font-bold rounded-xl hover:bg-cyan-50 shadow-lg shadow-cyan-800/20 transition-all duration-200">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
            Book Appointment
          </a>
        </div>
      </section>

      {/* WhatsApp FAB */}
      <a href="https://wa.me/918625098210?text=Hello!%20I%20would%20like%20to%20book%20an%20appointment." target="_blank" rel="noopener noreferrer" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50 shadow-lg hover:shadow-2xl rounded-full bg-green-600 hover:bg-green-700 p-3 sm:p-4 transition-all flex items-center justify-center group">
        <Image src="/whatsapp.png" alt="WhatsApp" width={28} height={28} className="group-hover:scale-110 transition-transform sm:w-8 sm:h-8" />
      </a>
    </>
  );
}
