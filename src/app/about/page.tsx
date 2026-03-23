'use client';
import Image from "next/image";
import { motion } from "framer-motion";
export default function About() {
  return (
    <>
      {/* Hero Header Section */}
      <section className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute inset-0">
          <Image src="/gallery3.png" alt="" fill className="object-cover blur-[6px] opacity-[0.06]" sizes="100vw" priority />
          <div className="absolute top-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-cyan-500 rounded-full blur-3xl opacity-10"></div>
          <div className="absolute bottom-0 left-0 w-48 sm:w-72 h-48 sm:h-72 bg-cyan-600 rounded-full blur-3xl opacity-10"></div>
          <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.4) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        </div>

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 pt-16 sm:pt-20 md:pt-24 pb-14 sm:pb-18 md:pb-20">
          {/* Breadcrumb */}
          <motion.nav
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="flex items-center gap-2 text-sm text-slate-400 mb-8 sm:mb-10"
          >
            <a href="/" className="hover:text-cyan-400 transition-colors">Home</a>
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
            <span className="text-cyan-400 font-medium">About</span>
          </motion.nav>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-full text-xs sm:text-sm font-medium mb-5 sm:mb-6">
              <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
              </svg>
              <span>Your Trusted Dental Partner</span>
            </div>

            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-5 sm:mb-6 leading-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
              About{' '}
              <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">
                Dentio Dental Care
              </span>
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-slate-300 max-w-2xl leading-relaxed">
              Where your smile is our passion and your comfort is our priority
            </p>
          </motion.div>
        </div>

        {/* Bottom curved edge */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-6 sm:h-8 md:h-10" preserveAspectRatio="none">
            <path d="M0 40L1440 40L1440 0C1440 0 1080 40 720 40C360 40 0 0 0 0L0 40Z" className="fill-slate-50" />
          </svg>
        </div>
      </section>

      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
        <div className="max-w-6xl mx-auto py-10 sm:py-14 md:py-16 px-4 sm:px-6">
          {/* Main Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8 mb-8 sm:mb-12"
          >
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed mb-6">
              Welcome to <span className="font-semibold text-cyan-600">Dentio Dental Care</span>, where your smile is our passion. Led by <span className="font-semibold text-cyan-600">Dr. Shalini Patel (BDS, MDS Orthodontics)</span>, our clinic blends advanced technology, a gentle touch, and a commitment to ethical, transparent care.
            </p>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed">
              We believe every patient deserves a healthy, confident smile in a warm, welcoming environment. Our team is dedicated to providing expert, gentle care for every age.
            </p>
          </motion.div>

          {/* Core Values */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
            {[
              { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", title: "Preventive Focus" },
              { icon: "M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253", title: "Patient Education" },
              { icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z", title: "Ethical & Transparent" },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 + i * 0.1 }}
                className="bg-gradient-to-br from-cyan-50 to-white rounded-xl p-6 text-center border border-cyan-100 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 mx-auto mb-4 rounded-full bg-cyan-100 flex items-center justify-center">
                  <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d={item.icon} />
                  </svg>
                </div>
                <h3 className="font-semibold text-slate-900 text-base sm:text-lg">{item.title}</h3>
              </motion.div>
            ))}
          </div>

          {/* Why Choose Dentio */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="bg-white rounded-2xl shadow-sm border border-slate-200 p-6 sm:p-8 mb-8 sm:mb-12"
          >
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 sm:mb-8 text-center" style={{ fontFamily: "'Playfair Display', serif" }}>
              Why Choose Dentio?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {[
                { title: "Experienced Team", desc: "Led by Dr. Shalini Patel (BDS, MDS Ortho), our team brings expertise, compassion, and a gentle touch." },
                { title: "Personalized Care", desc: "We listen to your concerns and tailor treatments to your unique needs and goals." },
                { title: "Advanced Technology", desc: "Digital X-rays, smile design, and modern equipment for precise, comfortable care." },
                { title: "Transparent & Ethical", desc: "Honest advice, clear pricing, and a focus on prevention and education." },
                { title: "Comfortable Environment", desc: "Relaxing, child-friendly clinic designed to put you at ease." },
                { title: "Prime Location", desc: "Located in Hinjewadi Phase 1 with ample parking space." },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-3"
                >
                  <div className="flex-shrink-0 w-6 h-6 mt-1">
                    <svg className="w-6 h-6 text-cyan-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 text-base sm:text-lg mb-1">{item.title}</h3>
                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.6 }}
            className="bg-gradient-to-br from-cyan-50 to-slate-50 rounded-2xl shadow-sm border border-cyan-200 p-6 sm:p-8 text-center"
          >
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-6">Visit Us Today</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 text-left max-w-3xl mx-auto">
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"/>
                  <circle cx="12" cy="10" r="3"/>
                </svg>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Address</p>
                  <p className="text-slate-600 text-sm">Shop#210, One Avenue, Maan Rd, Hinjawadi, Pune</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <circle cx="12" cy="12" r="10"/>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v6l4 2"/>
                </svg>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Hours</p>
                  <p className="text-slate-600 text-sm">Mon-Sat: 10 AM – 2 PM, 5 PM – 9 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Phone</p>
                  <a href="tel:+918625098210" className="text-cyan-600 hover:text-cyan-700 font-medium text-sm">+91-86250982 10</a>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <svg className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <div>
                  <p className="font-semibold text-slate-900 text-sm">Email</p>
                  <a href="mailto:dent.io210@gmail.com" className="text-cyan-600 hover:text-cyan-700 font-medium text-sm">dent.io210@gmail.com</a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </main>
      
      {/* Persistent WhatsApp Icon */}
      <a href="https://wa.me/918625098210?text=Hello!%20I%20would%20like%20to%20book%20an%20appointment." target="_blank" rel="noopener noreferrer" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50 shadow-lg hover:shadow-2xl rounded-full bg-green-600 hover:bg-green-700 p-3 sm:p-4 transition-all flex items-center justify-center group">
        <Image src="/whatsapp.png" alt="WhatsApp" width={28} height={28} className="group-hover:scale-110 transition-transform sm:w-8 sm:h-8" />
      </a>
    </>
  );
}
