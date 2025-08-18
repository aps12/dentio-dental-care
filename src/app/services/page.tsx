'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Switch } from '@headlessui/react';
import Head from "next/head";
import { siteMeta } from "../metadata";

export const services = [
  { icon: "/service1.png", title: "Routine Dental Checkup & Cleaning", desc: "Preventive exams, cleanings, and oral hygiene guidance.", details: "Regular dental checkups and professional cleanings help prevent cavities, gum disease, and other oral health issues. Our gentle approach ensures your comfort and long-term oral health." },
  { icon: "/service2.png", title: "Dental X-Rays & Diagnostics", desc: "Advanced imaging for accurate diagnosis.", details: "We use digital X-rays and advanced diagnostic tools to detect dental problems early, ensuring precise and effective treatment planning." },
  { icon: "/service3.png", title: "Braces & Clear Aligners", desc: "Orthodontic solutions for all ages.", popular: true, details: "We offer metal, ceramic, and invisible aligners (like Invisalign) for children, teens, and adults. Get a straighter smile with advanced, pain-free orthodontics." },
  { icon: "/service4.png", title: "Root Canal Treatment", desc: "Gentle, effective therapy to save teeth.", popular: true, details: "Root canal therapy relieves pain and saves infected teeth. Our advanced techniques ensure a painless, quick recovery." },
  { icon: "/service5.png", title: "Dental Implants", desc: "Permanent, natural-looking tooth replacement.", popular: true, details: "Dental implants are the gold standard for replacing missing teeth. Enjoy a confident smile and full chewing ability with our expert implant solutions." },
  { icon: "/service6.png", title: "Crowns & Bridges", desc: "Custom restorations for function and aesthetics.", details: "Restore damaged or missing teeth with high-quality crowns and bridges that look and feel natural." },
  { icon: "/service1.png", title: "Cosmetic Dentistry", desc: "Smile makeovers, whitening, veneers, and more.", popular: true, details: "Transform your smile with whitening, veneers, bonding, and more. We create natural, beautiful results tailored to you." },
  { icon: "/service2.png", title: "Tooth-Colored Fillings", desc: "Natural-looking, durable cavity repair.", details: "We use advanced composite materials for fillings that blend seamlessly with your teeth for a flawless look." },
  { icon: "/service3.png", title: "Tooth Extraction", desc: "Safe, gentle removal of problematic teeth.", details: "When a tooth cannot be saved, we ensure a painless extraction and provide guidance for aftercare and replacement options." },
  { icon: "/service4.png", title: "Dentures & Partials", desc: "Comfortable, natural-looking tooth replacement.", details: "Custom dentures and partials restore your smile and function, designed for comfort and aesthetics." },
  { icon: "/service5.png", title: "Gum Disease Treatment (Periodontics)", desc: "Advanced care for healthy gums.", details: "We treat gum disease with deep cleaning, laser therapy, and ongoing maintenance for optimal oral health and fresh breath." },
  { icon: "/service6.png", title: "Smile Design & Digital Dentistry", desc: "Personalized digital smile planning.", popular: true, details: "We use digital tools to design your perfect smile, preview results, and deliver precise, beautiful outcomes." },
  { icon: "/service1.png", title: "Oral Cancer Screening", desc: "Early detection for peace of mind.", details: "We use advanced screening tools to detect oral cancer early, when it is most treatable." },
  { icon: "/service2.png", title: "Emergency Dental Care", desc: "Prompt relief for pain and trauma.", details: "Same-day appointments for toothaches, injuries, and urgent dental needs. We provide fast, compassionate care." },
  { icon: "/service3.png", title: "Pediatric Dentistry", desc: "Gentle, fun, and stress-free care for children.", popular: true, details: "Our child-friendly clinic and caring team make dental visits fun and comfortable for kids. We focus on prevention and education." },
  { icon: "/service4.png", title: "Teeth Whitening", desc: "Safe, effective professional whitening.", details: "Brighten your smile with our advanced in-office and take-home whitening treatments for fast, lasting results." },
  { icon: "/service5.png", title: "Veneers & Smile Makeovers", desc: "Custom porcelain veneers for a perfect smile.", details: "Porcelain veneers can correct chips, gaps, stains, and misalignment for a flawless, natural-looking smile." },
  { icon: "/service6.png", title: "Dental Sealants", desc: "Protective coatings for cavity prevention.", details: "Sealants are applied to the chewing surfaces of back teeth to prevent decay, especially in children and teens." },
  { icon: "/service1.png", title: "Fluoride Treatments", desc: "Strengthen teeth and prevent decay.", details: "Professional fluoride applications help protect teeth from cavities and sensitivity, especially for children." },
  { icon: "/service2.png", title: "Full Mouth Rehabilitation", desc: "Comprehensive restoration for complex cases.", details: "We combine multiple treatments to restore function, health, and aesthetics for patients with extensive dental needs." },
  { icon: "/service3.png", title: "TMJ/TMD Treatment", desc: "Relief for jaw pain and dysfunction.", details: "We diagnose and treat temporomandibular joint disorders with conservative and advanced therapies." },
  { icon: "/service4.png", title: "Oral Surgery (Minor)", desc: "Extractions, biopsies, and minor surgical care.", details: "We perform minor oral surgeries with precision and comfort, including wisdom tooth removal and biopsies." },
  { icon: "/service5.png", title: "Preventive Dentistry", desc: "Education, exams, and early intervention.", details: "We focus on prevention through education, regular exams, and early treatment to keep your smile healthy for life." },
  { icon: "/service6.png", title: "Laser Dentistry", desc: "Minimally invasive, advanced dental care.", details: "Laser technology allows for precise, comfortable treatment of gums, cavities, and more with faster healing." },
  { icon: "/service1.png", title: "Night Guards & Sports Mouthguards", desc: "Custom appliances for protection.", details: "We provide custom night guards for grinding/clenching and sports mouthguards for athletes of all ages." },
  { icon: "/service2.png", title: "Dental Bonding", desc: "Quick fixes for chips, gaps, and more.", details: "Bonding uses tooth-colored resin to repair minor imperfections for a natural look in a single visit." },
  { icon: "/service3.png", title: "Inlays & Onlays", desc: "Custom restorations for damaged teeth.", details: "Inlays and onlays restore teeth with moderate decay or damage, offering a durable, aesthetic solution." },
  { icon: "/service4.png", title: "Wisdom Teeth Removal", desc: "Safe extraction of third molars.", details: "We provide gentle, expert removal of wisdom teeth to prevent pain, crowding, and infection." },
  { icon: "/service5.png", title: "Retainers & Post-Ortho Care", desc: "Maintain your new smile after braces.", details: "Custom retainers and follow-up care ensure your teeth stay beautifully aligned after orthodontic treatment." },
  { icon: "/service6.png", title: "Sedation Dentistry", desc: "Anxiety-free dental care options.", details: "We offer sedation options for anxious patients, ensuring a calm and comfortable dental experience." },
];

export default function Services() {
  const [selected, setSelected] = useState<null | number>(null);
  const [simpleView, setSimpleView] = useState(true); // Default to simple view
  return (
    <>
      <Head>
        <title>Dental Services in Hinjewadi, Pune | {siteMeta.title}</title>
        <meta name="description" content="Explore all dental treatments at Dentio Dental Care, Hinjewadi, Pune. Braces, implants, root canal, smile makeovers, kids dentistry, and more." />
        <meta name="keywords" content={siteMeta.keywords + ', dental services, treatments, Pune, Hinjewadi, Maan Road'} />
        <link rel="canonical" href={siteMeta.url + 'services'} />
      </Head>
      <motion.main initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="max-w-4xl mx-auto py-16 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-10 text-blue-900">Our Dental Services</h1>
        <div className="flex items-center justify-center gap-4 mb-8">
          <span className="text-cyan-700 font-semibold text-base">List View</span>
          <Switch
            checked={!simpleView}
            onChange={() => setSimpleView(v => !v)}
            className={`${!simpleView ? 'bg-cyan-600' : 'bg-cyan-200'} relative inline-flex h-7 w-14 items-center rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-cyan-500`}
          >
            <span className="sr-only">Toggle detailed view</span>
            <span
              className={`inline-block h-6 w-6 transform rounded-full bg-white shadow transition-transform ${!simpleView ? 'translate-x-7' : 'translate-x-1'}`}
            />
          </Switch>
          <span className="text-cyan-700 font-semibold text-base">Detailed View</span>
        </div>
        {simpleView ? (
          <ul className="divide-y divide-cyan-100 bg-white/80 rounded-2xl shadow-lg overflow-hidden text-left max-w-2xl mx-auto">
            {services.map((s, i) => (
              <li key={s.title}>
                <button
                  className={`w-full flex items-center gap-4 px-5 py-4 hover:bg-cyan-50 focus:bg-cyan-100 transition group relative ${s.popular ? 'bg-gradient-to-r from-cyan-50 to-white border-l-4 border-cyan-500' : ''}`}
                  onClick={() => setSelected(i)}
                  aria-label={`View details for ${s.title}`}
                >
                  <span className="flex-shrink-0 w-12 h-12 rounded-full bg-cyan-100 flex items-center justify-center group-hover:scale-105 transition-transform">
                    <Image src={s.icon} alt={s.title} width={32} height={32} />
                  </span>
                  <span className="flex-1">
                    <span className="block font-semibold text-cyan-900 text-base flex items-center gap-2">
                      {s.title}
                      {s.popular && (
                        <span className="ml-2 px-2 py-0.5 rounded-full bg-cyan-600 text-white text-xs font-semibold shadow">Popular</span>
                      )}
                    </span>
                    <span className="block text-blue-800 text-xs mt-0.5">{s.desc}</span>
                  </span>
                  <svg className="w-5 h-5 text-cyan-400 group-hover:text-cyan-600 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {services.map((s, i) => (
              <motion.button
                key={s.title}
                type="button"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.04 }}
                className={`relative bg-white/90 rounded-2xl shadow-xl p-8 flex flex-col items-center hover:scale-105 hover:shadow-2xl transition-transform duration-300 border-2 w-full text-left ${s.popular ? 'border-cyan-500 shadow-cyan-200' : 'border-transparent'}`}
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
      </motion.main>
      {/* Persistent WhatsApp Icon */}
      <a href="https://wa.me/918625098210?text=Hello!%20I%20would%20like%20to%20book%20an%20appointment." target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 shadow-lg rounded-full bg-green-500 hover:bg-green-600 p-3 transition-all flex items-center justify-center">
        <img src="/whatsapp.png" alt="WhatsApp" width={40} height={40} />
      </a>
    </>
  );
}
