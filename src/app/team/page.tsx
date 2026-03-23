'use client';
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";

const teamMembers = [
  {
    img: "/team1.png",
    name: "Dr. Shalini Patel",
    role: "BDS, MDS (Orthodontics & Dentofacial Orthopedics)",
    title: "Founder & Lead Orthodontist",
    desc: "With over 12 years of clinical experience, Dr. Shalini is an expert in braces, Invisalign, and digital smile design. Her patient-first approach combines precision with compassion.",
  },
  {
    img: "/team4.png",
    name: "Dr. Namrata Chame",
    role: "BDS",
    title: "General & Preventive Dentist",
    desc: "Dr. Namrata's warm, reassuring approach makes every dental visit comfortable. She specialises in preventive care, restorations, and patient counselling for long-term oral health.",
  },
  {
    img: "/team3.png",
    name: "Monica Bisht",
    role: "Dental Hygienist",
    title: "Oral Hygiene Specialist",
    desc: "Monica delivers thorough cleanings and personalised gum therapy with a gentle, reassuring touch. She educates every patient on at-home care routines for lasting results.",
  },
  {
    img: "/team2.png",
    name: "Komal Kamble",
    role: "Clinic Care Coordinator",
    title: "Patient Relations Manager",
    desc: "Komal is the warm, welcoming face of Dentio. She orchestrates appointments, insurance queries, and follow-ups so that every visit runs seamlessly from start to finish.",
  },
];

const values = [
  { icon: "🤝", title: "Empathy First", text: "We listen, understand, and care — every decision is guided by your comfort." },
  { icon: "🔬", title: "Clinical Excellence", text: "Advanced training and state-of-the-art technology drive superior outcomes." },
  { icon: "🛡️", title: "Safe & Inclusive", text: "Our team creates a warm, judgement-free environment for everyone." },
  { icon: "💡", title: "Patient Education", text: "We empower you with knowledge so you can make confident decisions about your oral health." },
];

export default function Team() {
  const [selected, setSelected] = useState<number>(0);

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
            <span className="text-cyan-400 font-medium">Our Team</span>
          </nav>
          <h1
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            <span className="text-white">The Faces Behind </span>
            <span className="bg-gradient-to-r from-cyan-400 to-cyan-300 bg-clip-text text-transparent">Your Best Smile</span>
          </h1>
          <p className="text-slate-300 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            An experienced dental team committed to gentle care, clinical precision, and making every visit a positive experience.
          </p>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 56" fill="none" className="w-full"><path d="M0 56h1440V28C1220 0 720 56 360 28S0 56 0 56z" fill="currentColor" className="text-slate-50" /></svg>
        </div>
      </section>

      <main className="bg-gradient-to-b from-slate-50 to-white" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>

        {/* Team Member Tiles as Tabs */}
        <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-20">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mb-8">
            {teamMembers.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setSelected(i)}
                className={`flex flex-col items-center gap-2.5 px-3 py-5 rounded-2xl border-2 transition-all duration-200 focus:outline-none w-full
                  ${selected === i
                    ? 'bg-cyan-50 border-cyan-400 shadow-lg ring-2 ring-cyan-200'
                    : 'bg-white border-slate-200 hover:bg-slate-50 hover:border-cyan-200'}`}
                aria-current={selected === i}
                aria-label={`Show details for ${t.name}`}
              >
                <div className={`w-16 h-16 sm:w-20 sm:h-20 rounded-full overflow-hidden border-2 flex-shrink-0 transition-colors ${selected === i ? 'border-cyan-400' : 'border-slate-200'}`}>
                  <Image src={t.img} alt={t.name} width={80} height={80} className="object-cover w-full h-full" />
                </div>
                <div className="flex flex-col items-center text-center">
                  <span className={`font-bold text-xs sm:text-sm leading-tight ${selected === i ? 'text-cyan-700' : 'text-slate-800'}`}>{t.name}</span>
                  <span className="text-[10px] sm:text-xs text-cyan-600 font-medium mt-0.5">{t.title}</span>
                </div>
                {selected === i && (
                  <svg className="w-4 h-4 text-cyan-500" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                )}
              </button>
            ))}
          </div>

          {/* Selected member detail panel */}
          <div className="w-full bg-white rounded-3xl border border-slate-200/80 shadow-xl p-8 sm:p-10">
            <AnimatePresence mode="wait">
              <motion.div
                key={selected}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.35 }}
                className="flex flex-col md:flex-row items-center gap-6 md:gap-10 w-full"
              >
                <div className="relative w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 rounded-2xl bg-gradient-to-br from-cyan-50 to-slate-50 overflow-hidden border border-slate-200 shadow-md flex-shrink-0">
                  <Image src={teamMembers[selected].img} alt={teamMembers[selected].name} fill className="object-cover object-top" />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/30 to-transparent" />
                </div>
                <div className="flex flex-col items-center md:items-start text-center md:text-left">
                  <span className="inline-block px-3 py-1 text-[11px] font-semibold uppercase tracking-wider bg-cyan-100 text-cyan-700 rounded-full mb-3">
                    {teamMembers[selected].title}
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-1" style={{ fontFamily: "'Playfair Display', serif" }}>
                    {teamMembers[selected].name}
                  </h3>
                  <p className="text-sm font-medium text-cyan-600 mb-4">{teamMembers[selected].role}</p>
                  <p className="text-base text-slate-600 leading-relaxed max-w-xl">{teamMembers[selected].desc}</p>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </section>

        {/* Clinic & Equipment Showcase — uses the referenced image */}
        <section className="relative bg-slate-900 overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 items-stretch">
              {/* Image side */}
              <div className="relative h-72 sm:h-96 lg:h-auto min-h-[360px]">
                <Image
                  src="/clinic-chair.jpg"
                  alt="Advanced dental operatory at Dentio Dental Care — modern equipment and comfortable treatment chairs"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-slate-900/70 hidden lg:block" />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent lg:hidden" />
              </div>

              {/* Content side */}
              <div className="relative flex flex-col justify-center px-6 sm:px-10 lg:px-14 py-12 lg:py-16">
                <span className="text-cyan-400 text-xs font-bold uppercase tracking-widest mb-3">Our Clinic</span>
                <h2
                  className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-5 leading-tight"
                  style={{ fontFamily: "'Playfair Display', serif" }}
                >
                  State-of-the-Art<br className="hidden sm:block" /> Dental Technology
                </h2>
                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6">
                  Every operatory at Dentio is fitted with the latest dental units, digital X-ray sensors, and intra-oral cameras — ensuring accurate diagnostics, efficient treatment, and maximum comfort. Our sterilisation protocol exceeds international standards, so you can sit back knowing you&apos;re in a clinically safe environment.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { num: "45+", label: "Treatments Offered" },
                    { num: "12+", label: "Years Experience" },
                    { num: "5000+", label: "Happy Patients" },
                    { num: "100%", label: "Sterilisation Standard" },
                  ].map((s) => (
                    <div key={s.label} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-center">
                      <span className="block text-xl sm:text-2xl font-bold text-cyan-400">{s.num}</span>
                      <span className="block text-[11px] sm:text-xs text-slate-400 mt-0.5">{s.label}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
          <div className="text-center mb-12">
            <span className="text-cyan-600 text-xs font-bold uppercase tracking-widest">What Drives Us</span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-slate-900 mt-2" style={{ fontFamily: "'Playfair Display', serif" }}>
              Built on Values, Powered by Care
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="bg-white rounded-2xl border border-slate-200/80 p-6 text-center hover:shadow-lg hover:border-cyan-200 transition-all duration-300"
              >
                <span className="text-3xl block mb-3">{v.icon}</span>
                <h3 className="text-base font-bold text-slate-900 mb-2">{v.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{v.text}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* CTA Strip */}
        <section className="bg-gradient-to-r from-cyan-600 to-cyan-500">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 py-12 sm:py-14 text-center">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-3" style={{ fontFamily: "'Playfair Display', serif" }}>
              Ready to Meet Us in Person?
            </h2>
            <p className="text-cyan-100 text-sm sm:text-base mb-6">Book a consultation and experience the Dentio difference — friendly, thorough, and always transparent.</p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <a
                href="https://dentio.dentostack.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 bg-white text-cyan-700 text-sm font-bold rounded-xl hover:bg-cyan-50 shadow-lg shadow-cyan-800/20 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>
                Book Your Appointment
              </a>
              <a
                href="tel:+918625098210"
                className="inline-flex items-center gap-2 px-7 py-3 bg-cyan-700/40 text-white text-sm font-bold rounded-xl border border-white/20 hover:bg-cyan-700/60 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                Call +91-8625098210
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* WhatsApp FAB */}
      <a href="https://wa.me/918625098210?text=Hello!%20I%20would%20like%20to%20book%20an%20appointment." target="_blank" rel="noopener noreferrer" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50 shadow-lg hover:shadow-2xl rounded-full bg-green-600 hover:bg-green-700 p-3 sm:p-4 transition-all flex items-center justify-center group">
        <Image src="/whatsapp.png" alt="WhatsApp" width={28} height={28} className="group-hover:scale-110 transition-transform sm:w-8 sm:h-8" />
      </a>
    </>
  );
}
