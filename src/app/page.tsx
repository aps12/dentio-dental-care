'use client';
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { services as allServices } from "../data/services";
const popularServices = allServices.filter(s => s.popular);

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen flex flex-col bg-gradient-to-b from-slate-50 to-white" style={{ fontFamily: "'Inter', system-ui, -apple-system, sans-serif" }}>
        {/* Hero Section */}
        <section className="relative min-h-screen flex items-center pt-20 sm:pt-24 pb-16 sm:pb-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-cyan-50">
          {/* Creative Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            {/* Floating blur orbs */}
            <div className="absolute top-20 right-0 w-72 sm:w-96 h-72 sm:h-96 bg-cyan-100 rounded-full blur-3xl opacity-40 animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-64 sm:w-80 h-64 sm:h-80 bg-blue-100 rounded-full blur-3xl opacity-30 animate-pulse" style={{ animationDelay: '1s' }}></div>
            {/* Decorative SVG Pattern */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-4xl">
              <svg className="w-full h-full opacity-5" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="40" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-cyan-600"></circle>
                <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-cyan-600"></circle>
                <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-cyan-600"></circle>
                <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-cyan-600"></circle>
              </svg>
            </div>
          </div>

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
            <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
              {/* Left Content */}
              <motion.div 
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="text-center lg:text-left order-1 lg:order-1"
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-100 text-cyan-700 rounded-full text-sm font-medium mb-6">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path>
                  </svg>
                  <span>Trusted Dental Care in Pune</span>
                </div>
                
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-slate-900 leading-tight mb-6" style={{ fontFamily: "'Playfair Display', serif" }}>
                  <span className="block">DENTIO</span>
                  <span className="block bg-gradient-to-r from-cyan-500 to-cyan-600 bg-clip-text text-transparent">DENTAL CARE</span>
                </h1>
                
                <p className="text-2xl sm:text-3xl text-cyan-600 font-medium mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Put a Smile in Your Life
                </p>
                
                <p className="text-base lg:text-lg text-slate-600 leading-relaxed mb-8 max-w-xl mx-auto lg:mx-0">
                  Expert dental care in Pune. Modern, gentle, and personalized for every patient. Book your appointment and experience the Dentio difference!
                </p>
                
                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                  <Link 
                    href="https://dentio.dentostack.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-cyan-600 text-white font-semibold rounded-xl hover:from-cyan-600 hover:to-cyan-700 transition-all shadow-xl shadow-cyan-500/30"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                    </svg>
                    Book Appointment Online
                  </Link>
                  <a 
                    href="https://wa.me/918625098210?text=Hello!%20I%20would%20like%20to%20book%20an%20appointment." 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-500 text-white font-semibold rounded-xl hover:bg-green-600 transition-all shadow-xl shadow-green-500/30"
                  >
                    <Image src="/whatsapp.png" alt="WhatsApp" width={20} height={20} />
                    Book via WhatsApp
                  </a>
                </div>
              </motion.div>

              {/* Right Visual - Blurred Image with Glassmorphism Overlays */}
              <motion.div 
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
                className="relative order-2 lg:order-2"
              >
                <div className="relative w-full max-w-md mx-auto lg:max-w-none h-96 lg:h-[520px]">
                  {/* Main container with blurred dental image */}
                  <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
                    {/* Blurred background image */}
                    <Image
                      src="/hero.jpg"
                      alt="Dental Care"
                      fill
                      priority
                      className="object-cover blur-[2px] brightness-[0.85]"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    {/* Gradient overlay on top of image */}
                    <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/40 via-slate-900/20 to-cyan-800/50"></div>
                    
                    {/* Content overlay */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center gap-4 sm:gap-6 p-4 sm:p-6">
                      
                      {/* Animated SVG smile with sparkle */}
                      <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                        className="scale-75 sm:scale-100"
                      >
                        <svg width="120" height="80" viewBox="0 0 120 80" fill="none">
                          <motion.path
                            initial={{ pathLength: 0, opacity: 0 }}
                            animate={{ pathLength: 1, opacity: 1 }}
                            transition={{ duration: 1.5, delay: 0.8 }}
                            d="M20 35 Q60 65 100 35"
                            stroke="white"
                            strokeWidth="4"
                            strokeLinecap="round"
                            fill="none"
                          />
                          <motion.g
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 2, repeat: Infinity }}
                          >
                            <path d="M55 18 L57 24 L63 26 L57 28 L55 34 L53 28 L47 26 L53 24 Z" fill="white" opacity="0.9"/>
                          </motion.g>
                          <motion.g
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                          >
                            <path d="M90 15 L91.5 19 L95.5 20.5 L91.5 22 L90 26 L88.5 22 L84.5 20.5 L88.5 19 Z" fill="white" opacity="0.7"/>
                          </motion.g>
                        </svg>
                      </motion.div>
                      
                      {/* Glassmorphism Feature Cards - Staggered grid */}
                      <div className="grid grid-cols-2 gap-2 sm:gap-4 w-full max-w-sm">
                        {[
                          { icon: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z", label: "Expert Dentists", sub: "Qualified team", delay: 0.6, color: "from-cyan-400/20 to-cyan-400/5" },
                          { icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z", label: "Gentle Care", sub: "Pain-free treatment", delay: 0.8, color: "from-green-400/20 to-green-400/5" },
                          { icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z", label: "Modern Tech", sub: "Latest equipment", delay: 1.0, color: "from-blue-400/20 to-blue-400/5" },
                          { icon: "M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z", label: "Quick Service", sub: "Value your time", delay: 1.2, color: "from-amber-400/20 to-amber-400/5" },
                        ].map((item, i) => (
                          <motion.div
                            key={item.label}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: item.delay }}
                            className={`backdrop-blur-xl bg-gradient-to-br ${item.color} border border-white/20 rounded-xl sm:rounded-2xl p-2 sm:p-4 flex flex-col items-center text-center gap-1 sm:gap-2 hover:bg-white/20 transition-colors duration-300`}
                          >
                            <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-white/20 flex items-center justify-center backdrop-blur-sm">
                              <svg className="w-4 h-4 sm:w-5 sm:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}/>
                              </svg>
                            </div>
                            <p className="text-white font-semibold text-xs sm:text-sm leading-tight">{item.label}</p>
                            <p className="text-white/60 text-[10px] sm:text-xs hidden sm:block">{item.sub}</p>
                          </motion.div>
                        ))}
                      </div>
                      
                      {/* Bottom - Smooth marquee-style scroll */}
                      <div className="w-full overflow-hidden backdrop-blur-xl bg-white/10 border-t border-white/15 rounded-b-2xl sm:rounded-b-3xl py-2 sm:py-3">
                        <motion.div
                          animate={{ x: ["0%", "-50%"] }}
                          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
                          className="flex whitespace-nowrap gap-4 sm:gap-8"
                        >
                          {[...Array(2)].map((_, dupeIdx) => (
                            <div key={dupeIdx} className="flex items-center gap-4 sm:gap-8 shrink-0">
                              <span className="flex items-center gap-1.5 sm:gap-2 text-white/80 text-xs sm:text-sm font-medium">
                                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400"></span>
                                Braces &amp; Clear Aligners
                              </span>
                              <span className="flex items-center gap-1.5 sm:gap-2 text-white/80 text-xs sm:text-sm font-medium">
                                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-green-400"></span>
                                Root Canal Treatment
                              </span>
                              <span className="flex items-center gap-1.5 sm:gap-2 text-white/80 text-xs sm:text-sm font-medium">
                                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-amber-400"></span>
                                Dental Implants
                              </span>
                              <span className="flex items-center gap-1.5 sm:gap-2 text-white/80 text-xs sm:text-sm font-medium">
                                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-cyan-400"></span>
                                Smile Design &amp; Digital Dentistry
                              </span>
                              <span className="flex items-center gap-1.5 sm:gap-2 text-white/80 text-xs sm:text-sm font-medium">
                                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-green-400"></span>
                                Pediatric Dentistry
                              </span>
                              <span className="flex items-center gap-1.5 sm:gap-2 text-white/80 text-xs sm:text-sm font-medium">
                                <span className="w-1 h-1 sm:w-1.5 sm:h-1.5 rounded-full bg-amber-400"></span>
                                Full Mouth Rehabilitation
                              </span>
                            </div>
                          ))}
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Services Section */}
        <section className="relative max-w-7xl mx-auto py-12 sm:py-16 md:py-20 px-4 sm:px-6">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5 }} 
            className="text-center mb-16"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              Our Services
            </h2>
            <div className="w-20 h-1 bg-cyan-600 mx-auto rounded-full"></div>
          </motion.div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-10 sm:mb-12">
            {popularServices.map((s, i) => (
              <motion.div
                key={s.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group relative bg-white rounded-xl shadow-sm hover:shadow-xl p-6 sm:p-8 flex flex-col items-center border border-slate-100 transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full mb-6 bg-cyan-50 border border-cyan-100 group-hover:bg-cyan-100 transition-colors duration-300">
                  <Image src={s.icon} alt={s.title} width={40} height={40} className="object-contain" />
                </div>
                <h3 className="font-semibold text-xl mb-3 text-slate-900 text-center">{s.title}</h3>
                <p className="text-slate-600 text-center leading-relaxed">{s.desc}</p>
                <span className="absolute top-4 right-4 bg-cyan-600 text-white text-xs px-3 py-1 rounded-full font-medium">
                  Popular
                </span>
              </motion.div>
            ))}
          </div>
          <div className="text-center">
            <a href="/services" className="inline-block bg-slate-900 text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors duration-200 text-sm sm:text-base">
              See All Services
            </a>
          </div>
        </section>
        
        {/* Team Section */}
        <section className="relative bg-slate-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6">
          <div className="absolute inset-0 overflow-hidden">
            <Image src="/hero.png" alt="" fill className="object-cover blur-[8px] opacity-[0.04]" sizes="100vw" />
          </div>
          <div className="relative max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5 }} 
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Meet Our Team
              </h2>
              <p className="text-slate-600 text-base sm:text-lg">The people behind your perfect smile</p>
              <div className="w-20 h-1 bg-cyan-600 mx-auto rounded-full mt-4"></div>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {[
                { img: "/team1.png", name: "Dr. Shalini Patel", role: "BDS, MDS (Orthodontics and Dentofacial Orthopedics)", badge: "Founder & Chief Dentist", desc: "12+ years in orthodontics & smile design." },
                { img: "/team4.png", name: "Dr. Namrata Chame", role: "BDS", badge: "General Dentist", desc: "Your go-to for everyday dental care." },
                { img: "/team3.png", name: "Monica Bisht", role: "Dental Hygienist", badge: "Hygienist", desc: "Specialist in gum care & oral hygiene." },
                { img: "/team2.png", name: "Komal Kamble", role: "Care Coordinator", badge: "Coordinator", desc: "The first smile you see at Dentio." },
              ].map((t, i) => (
                <motion.div
                  key={t.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="group flex flex-col items-center bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                >
                  <div className="w-full bg-slate-50 flex items-center justify-center pt-8 pb-4">
                    <div className="w-28 h-28 rounded-full border-4 border-white shadow-md overflow-hidden">
                      <Image src={t.img} alt={t.name} width={112} height={112} className="object-cover w-full h-full" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center px-6 pb-6 pt-4 flex-1 w-full">
                    <span className="text-xs bg-cyan-600 text-white px-3 py-1 rounded-full font-medium mb-3">
                      {t.badge}
                    </span>
                    <h3 className="font-bold text-lg text-slate-900 leading-tight text-center">{t.name}</h3>
                    <div className="text-slate-500 text-sm font-normal mt-1 mb-3 text-center">{t.role}</div>
                    <p className="text-slate-600 text-sm text-center leading-relaxed">{t.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center mt-10 sm:mt-12">
              <a
                href="/team"
                className="inline-block px-6 sm:px-8 py-3 rounded-lg bg-slate-900 text-white font-semibold hover:bg-slate-800 transition-colors duration-200 text-sm sm:text-base"
                aria-label="Learn more about our team"
              >
                Know More About Our Team
              </a>
            </div>
          </div>
        </section>
        
        {/* Reviews Section */}
        <section className="relative bg-white py-12 sm:py-16 md:py-20 px-4 sm:px-6">
          <div className="absolute inset-0 overflow-hidden">
            <Image src="/gallery3.png" alt="" fill className="object-cover blur-[8px] opacity-[0.03]" sizes="100vw" />
          </div>
          <div className="relative max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5 }} 
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                What Our Patients Say
              </h2>
              <div className="w-20 h-1 bg-cyan-600 mx-auto rounded-full"></div>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {[
                { name: "Priya S.", text: "The best dental experience I've ever had! The team is so caring and professional. Highly recommended.", rating: 5 },
                { name: "Amit K.", text: "Dr. Shalini explained everything clearly and made me feel at ease. My root canal was painless!", rating: 5 },
                { name: "Rohit M.", text: "Clinic is very clean and staff is friendly. Got my braces here and the results are amazing!", rating: 5 },
                { name: "Sneha T.", text: "Highly skilled doctors and modern equipment. My kids love coming here!", rating: 5 },
                { name: "Vikas P.", text: "Quick, painless tooth extraction. The doctor followed up after the procedure too.", rating: 5 },
                { name: "Megha D.", text: "Transparent pricing and honest advice. I trust them for all my dental needs.", rating: 5 },
              ].map((t, i) => (
                <motion.div 
                  key={t.name} 
                  initial={{ opacity: 0, y: 20 }} 
                  whileInView={{ opacity: 1, y: 0 }} 
                  viewport={{ once: true }} 
                  transition={{ duration: 0.4, delay: i * 0.1 }} 
                  className="bg-white rounded-xl shadow-sm hover:shadow-lg p-6 sm:p-8 flex flex-col border border-slate-100 transition-all duration-300"
                >
                  <div className="flex items-center gap-1 mb-4">
                    {[...Array(t.rating)].map((_, idx) => (
                      <svg key={idx} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.286 3.967a1 1 0 00.95.69h4.175c.969 0 1.371 1.24.588 1.81l-3.38 2.455a1 1 0 00-.364 1.118l1.287 3.966c.3.922-.755 1.688-1.54 1.118l-3.38-2.455a1 1 0 00-1.175 0l-3.38 2.455c-.784.57-1.838-.196-1.54-1.118l1.287-3.966a1 1 0 00-.364-1.118L2.05 9.394c-.783-.57-.38-1.81.588-1.81h4.175a1 1 0 00.95-.69l1.286-3.967z" />
                      </svg>
                    ))}
                  </div>
                  <p className="text-slate-600 mb-6 leading-relaxed flex-1">{t.text}</p>
                  <div className="font-semibold text-slate-900">{t.name}</div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-10 sm:mt-12">
              <a href="https://www.google.com/maps/place/DENTIO+Dental+Care/@18.577018,73.7182741,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bba812226a0b:0xd65b14cde4fc702d!8m2!3d18.5770129!4d73.720849!16s%2Fg%2F11wbfkl7yr?entry=ttu" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-cyan-700 font-semibold hover:text-cyan-800 transition-colors text-base sm:text-lg">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2C6.13 2 3 5.13 3 9c0 5.25 7 9 7 9s7-3.75 7-9c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1110 6a2.5 2.5 0 010 5.5z" />
                </svg>
                See all Google reviews
              </a>
            </div>
          </div>
        </section>
        
        {/* Contact Section */}
        <section className="relative bg-slate-50 py-12 sm:py-16 md:py-20 px-4 sm:px-6">
          <div className="absolute inset-0 overflow-hidden">
            <Image src="/gallery3.png" alt="" fill className="object-cover blur-[8px] opacity-[0.04]" sizes="100vw" />
          </div>
          <div className="relative max-w-7xl mx-auto">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5 }} 
              className="text-center mb-16"
            >
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4" style={{ fontFamily: "'Playfair Display', serif" }}>
                Contact Us
              </h2>
              <div className="w-20 h-1 bg-cyan-600 mx-auto rounded-full"></div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              viewport={{ once: true }} 
              transition={{ duration: 0.5, delay: 0.1 }} 
              className="max-w-5xl mx-auto flex flex-col lg:flex-row gap-8 items-stretch"
            >
              {/* WhatsApp Form */}
              <div className="flex-1 bg-white rounded-xl shadow-sm border border-slate-100 p-8">
                <form
                  onSubmit={e => {
                    e.preventDefault();
                    const formData = new FormData(e.currentTarget);
                    const name = formData.get('name') || '';
                    const message = formData.get('message') || '';
                    const text = encodeURIComponent(`Hello! My name is ${name}. ${message}`);
                    window.open(`https://wa.me/918625098210?text=${text}`, '_blank');
                  }}
                  className="flex flex-col gap-5 h-full"
                >
                  <input 
                    name="name" 
                    type="text" 
                    placeholder="Your Name" 
                    className="border border-slate-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition" 
                    required 
                  />
                  <textarea 
                    name="message" 
                    placeholder="Your Message" 
                    className="border border-slate-200 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition flex-1" 
                    rows={6} 
                    required 
                  />
                  <button 
                    type="submit" 
                    className="bg-green-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors text-base flex items-center justify-center gap-2"
                  >
                    <svg className="w-5 h-5" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <rect width="32" height="32" rx="16" fill="white"/>
                      <path d="M16 6C10.477 6 6 10.477 6 16c0 2.021.606 3.898 1.65 5.47L6 26l4.66-1.62A9.94 9.94 0 0 0 16 26c5.523 0 10-4.477 10-10S21.523 6 16 6Zm0 18.333c-1.61 0-3.13-.47-4.41-1.28l-.31-.19-2.77.96.94-2.7-.2-.32A8.32 8.32 0 0 1 7.667 16c0-4.6 3.74-8.333 8.333-8.333 4.6 0 8.333 3.733 8.333 8.333 0 4.6-3.733 8.333-8.333 8.333Zm4.47-6.13c-.25-.13-1.48-.73-1.7-.81-.23-.08-.4-.12-.57.13-.17.25-.65.81-.8.98-.15.17-.3.19-.55.06-.25-.13-1.05-.39-2-1.24-.74-.66-1.24-1.47-1.39-1.72-.15-.25-.02-.38.11-.5.12-.12.25-.3.37-.45.12-.15.16-.25.25-.42.08-.17.04-.32-.02-.45-.06-.13-.57-1.37-.78-1.88-.2-.48-.41-.42-.57-.43-.15-.01-.32-.01-.5-.01-.17 0-.45.06-.68.28-.23.22-.9.88-.9 2.14 0 1.26.92 2.48 1.05 2.65.13.17 1.81 2.77 4.4 3.77.62.21 1.1.33 1.48.42.62.15 1.18.13 1.62.08.5-.06 1.48-.6 1.69-1.18.21-.58.21-1.08.15-1.18-.06-.1-.23-.16-.48-.29Z" fill="#25D366"/>
                    </svg>
                    Send via WhatsApp
                  </button>
                </form>
              </div>
              {/* Contact Info */}
              <div className="flex-1 bg-white rounded-xl shadow-sm border border-slate-100 p-8">
                <div className="flex flex-col gap-5 h-full justify-center">
                  <div className="font-semibold text-slate-900 text-xl mb-2 flex items-center gap-3">
                    <Image 
                      src="/logo.png" 
                      alt="Dentio Logo" 
                      width={48} 
                      height={48} 
                      className="rounded-full shadow-sm border border-slate-200" 
                    />
                    <div className="flex flex-col">
                      <span className="text-lg font-bold">Dentio Dental Care</span>
                      <span className="text-xs text-slate-500 font-normal">Put a Smile in Your Life</span>
                    </div>
                  </div>
                  <div className="flex items-start gap-3 text-slate-600">
                    <svg className="w-5 h-5 text-cyan-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a2 2 0 01-2.828 0l-4.243-4.243a8 8 0 1111.314 0z"/>
                      <circle cx="12" cy="10" r="3"/>
                    </svg>
                    <span>Shop#210, One Avenue, Maan Rd, Hinjawadi, Pune (MH)</span>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <svg className="w-5 h-5 text-cyan-600 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                    <a href="mailto:dent.io210@gmail.com" className="text-cyan-700 hover:text-cyan-800">dent.io210@gmail.com</a>
                  </div>
                  <div className="flex items-center gap-3 text-slate-600">
                    <svg className="w-5 h-5 text-cyan-600 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92V19a2 2 0 01-2.18 2A19.72 19.72 0 013 5.18 2 2 0 015 3h2.09a2 2 0 012 1.72c.13.81.36 1.6.68 2.34a2 2 0 01-.45 2.11l-.27.27a16 16 0 006.29 6.29l.27-.27a2 2 0 012.11-.45c.74.32 1.53.55 2.34.68A2 2 0 0122 16.92z"/>
                    </svg>
                    <a href="tel:+918625098210" className="text-cyan-700 hover:text-cyan-800">+91-8625098210</a>
                  </div>
                  <a href="https://www.google.com/maps/place/DENTIO+Dental+Care/@18.577018,73.7182741,17z/data=!3m1!4b1!4m6!3m5!1s0x3bc2bba812226a0b:0xd65b14cde4fc702d!8m2!3d18.5770129!4d73.720849!16s%2Fg%2F11wbfkl7yr?entry=ttu" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 text-cyan-700 hover:text-cyan-800 font-medium">
                    <svg className="w-5 h-5 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth="1.7" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 10.5c0 7.5-9 12.5-9 12.5S3 18 3 10.5A9 9 0 1121 10.5z"/>
                      <circle cx="12" cy="10.5" r="3.5"/>
                    </svg>
                    View on Google Maps
                  </a>
                  <div className="mt-4 pt-4 border-t border-slate-200">
                    <div className="font-semibold text-slate-900 mb-3">Opening Hours</div>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center gap-2 text-sm">
                        <svg className="w-4 h-4 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 2a6 6 0 110 12A6 6 0 0110 4zm0 1a1 1 0 011 1v3.586l2.293 2.293a1 1 0 01-1.414 1.414l-2.586-2.586A1 1 0 019 9V5a1 1 0 011-1z"/>
                        </svg>
                        <span className="text-slate-600">10:00 AM – 2:00 PM</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm">
                        <svg className="w-4 h-4 text-cyan-600" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M10 2a8 8 0 100 16 8 8 0 000-16zm0 2a6 6 0 110 12A6 6 0 0110 4zm0 1a1 1 0 011 1v3.586l2.293 2.293a1 1 0 01-1.414 1.414l-2.586-2.586A1 1 0 019 9V5a1 1 0 011-1z"/>
                        </svg>
                        <span className="text-slate-600">5:00 PM – 9:00 PM</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm mt-1">
                        <span className="text-red-600 font-medium">Sunday - Closed</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <div className="text-center mt-10 sm:mt-12">
              <a href="https://dentio.dentostack.com/" target="_blank" rel="noopener noreferrer"
                className="inline-block bg-cyan-600 text-white px-8 sm:px-10 py-3 sm:py-4 rounded-lg font-semibold shadow-sm hover:bg-cyan-700 hover:shadow-md transition-all duration-200 text-sm sm:text-base">
                Book Appointment Online
              </a>
            </div>
          </div>
        </section>
        
        {/* Persistent WhatsApp Icon */}
        <a href="https://wa.me/918625098210?text=Hello!%20I%20would%20like%20to%20book%20an%20appointment." target="_blank" rel="noopener noreferrer" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-50 shadow-lg hover:shadow-2xl rounded-full bg-green-600 hover:bg-green-700 p-3 sm:p-4 transition-all flex items-center justify-center group">
          <Image src="/whatsapp.png" alt="WhatsApp" width={28} height={28} className="group-hover:scale-110 transition-transform sm:w-8 sm:h-8" />
        </a>
      </div>
    </>
  );
}
