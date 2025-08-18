'use client';
import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Head from "next/head";
import { siteMeta } from "../metadata";

const teamMembers = [
  {
    img: "/team1.png",
    name: "Dr. Shalini Patel",
    role: "BDS, MDS (Ortho)",
    desc: "Founder & Chief Dentist. 12+ years of experience in orthodontics and smile design.",
    details: "Dr. Shalini Patel is a highly skilled orthodontist with over a decade of experience in transforming smiles. She specializes in braces, aligners, and digital smile design, and is known for her gentle approach and commitment to patient comfort. Her vision is to make world-class dental care accessible to all."
  },
  {
    img: "/team2.png",
    name: "Dr. Namrata Chame",
    role: "BDS",
    desc: "General & Family Dentist. Passionate about preventive care and patient education.",
    details: "Dr. Namrata Chame brings a warm, friendly approach to general dentistry. She excels in routine checkups, fillings, and patient counseling, ensuring every patient feels at ease. Her focus is on preventive care and building long-term relationships with families."
  },
  {
    img: "/team3.png",
    name: "Monica Bisht",
    role: "Dental Hygienist",
    desc: "Expert in oral hygiene and gum care. Dedicated to patient comfort and education.",
    details: "Monica is a certified dental hygienist with a keen eye for detail. She specializes in cleanings, gum therapy, and patient education, helping patients maintain healthy smiles for life. Her gentle touch and clear communication are loved by all ages."
  },
  {
    img: "/team2.png",
    name: "Komal Kamble",
    role: "Clinic Care Coordinator",
    desc: "Clinic care coordinator and the first smile you see at Dentio.",
    details: "Komal ensures every patient’s visit is smooth and stress-free. She manages appointments, patient queries, and clinic operations with efficiency and warmth. Her friendly demeanor makes everyone feel welcome."
  },
  {
    img: "/team1.png",
    name: "Our Team",
    role: "All-Female Dental Team",
    desc: "A dedicated, all-female team providing compassionate, expert care.",
    details: "Our all-female team is committed to creating a safe, welcoming environment for every patient. We believe in empathy, excellence, and empowering our patients with knowledge and care. Your smile is in the best hands!"
  }
];

export default function Team() {
  const [selected, setSelected] = useState<number>(0);
  const doctors = teamMembers.filter(t => t.name !== "Our Team");
  return (
    <>
      <Head>
        <title>Meet Our Dentists | Dentio Dental Care, Hinjewadi, Pune</title>
        <meta name="description" content="Meet the expert dental team at Dentio Dental Care, Hinjewadi, Pune. Experienced dentists for all your dental needs." />
        <meta name="keywords" content={siteMeta.keywords + ', team, dentists, doctors, Pune, Hinjewadi'} />
        <link rel="canonical" href={siteMeta.url + 'team'} />
      </Head>
      <main className="py-10 px-4 max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-blue-900 text-center"
        >
          Meet Our Team
        </motion.h2>
        <p className="text-lg md:text-xl text-blue-800 text-center mb-10 max-w-2xl mx-auto font-medium">Meet the passionate professionals who make Dentio Dental Care a welcoming, modern, and patient-first clinic. Our all-female team is dedicated to your comfort and smile.</p>
        {/* Our Team Card at the Top - Expanded with background image for desktop */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative mx-auto mb-10 flex flex-col items-center bg-gradient-to-br from-cyan-50 via-blue-50 to-white rounded-3xl border-2 border-cyan-200 shadow-2xl p-8 w-full max-w-5xl min-h-[340px] md:min-h-[420px] overflow-hidden"
          tabIndex={0}
          role="region"
          aria-label="About Our Team"
          style={{backgroundImage: 'url(/gallery1.png)', backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat'}}
        >
          {/* Overlay for readability */}
          <div className="absolute inset-0 bg-white/80 pointer-events-none rounded-3xl" />
          <div className="relative z-10 flex flex-col items-center w-full">
            <div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full bg-cyan-100 border-4 border-cyan-300 overflow-hidden shadow-2xl flex items-center justify-center mb-6">
              <Image src="/team1.png" alt="Our Team" width={224} height={224} className="object-cover w-full h-full" />
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-cyan-200/70 to-transparent rounded-b-full" />
            </div>
            <div className="text-blue-700 text-xs md:text-sm mb-2 font-medium uppercase tracking-wider text-center">All-Female Dental Team</div>
            <p className="text-blue-800 text-base md:text-lg mb-2 text-center max-w-2xl">A dedicated, all-female team providing compassionate, expert care.</p>
            <div className="w-full flex justify-center">
              <div className="bg-cyan-50 border border-cyan-200 rounded-xl px-6 py-4 shadow-md max-w-2xl text-center mt-2">
                <span className="block text-blue-900 text-base md:text-lg font-semibold mb-2">Our all-female team is committed to creating a safe, welcoming environment for every patient.</span>
                <span className="block text-blue-900 text-base md:text-lg font-medium">We believe in <span className="text-cyan-700 font-semibold">empathy</span>, <span className="text-cyan-700 font-semibold">excellence</span>, and empowering our patients with knowledge and care.<br className="hidden md:block" />Your smile is in the best hands!</span>
              </div>
            </div>
          </div>
        </motion.div>
        {/* Team Member Tiles as Tabs on Top */}
        <div className="flex flex-row flex-wrap justify-center gap-4 mb-8">
          {doctors.map((t, i) => (
            <button
              key={t.name}
              onClick={() => setSelected(i)}
              className={`flex items-center gap-2 px-4 py-2 rounded-xl border-2 transition-all duration-200 focus:outline-none
                ${selected === i ? 'bg-cyan-100 border-cyan-400 shadow-lg text-cyan-900' : 'bg-white border-cyan-100 hover:bg-cyan-50 text-blue-800'}`}
              aria-current={selected === i}
              aria-label={`Show details for ${t.name}`}
              style={{ minWidth: '180px' }}
            >
              <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-cyan-200 flex-shrink-0">
                <Image src={t.img} alt={t.name} width={40} height={40} className="object-cover" />
              </div>
              <div className="flex flex-col items-start">
                <span className="font-semibold text-sm md:text-base">{t.name}</span>
                <span className="text-xs text-cyan-700 uppercase font-medium">{t.role}</span>
              </div>
            </button>
          ))}
        </div>
        {/* Selected member details below */}
        <div className="w-full bg-gradient-to-br from-white via-cyan-50 to-blue-50 rounded-3xl border-2 border-cyan-100 shadow-xl p-8 flex flex-col items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={selected}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 40 }}
              transition={{ duration: 0.4 }}
              className="flex flex-col items-center w-full"
            >
              <div className="w-28 h-28 md:w-32 md:h-32 rounded-full mb-4 bg-cyan-100 border-2 border-cyan-300 overflow-hidden shadow-xl flex items-center justify-center">
                <Image src={doctors[selected].img} alt={doctors[selected].name} width={128} height={128} className="object-cover" />
              </div>
              <h3 className="font-semibold text-2xl text-cyan-700 mb-1 text-center">{doctors[selected].name}</h3>
              <div className="text-blue-700 text-sm mb-2 text-center font-medium uppercase tracking-wider">{doctors[selected].role}</div>
              <p className="text-blue-800 text-center text-base mb-2">{doctors[selected].desc}</p>
              <div className="text-blue-900 text-center text-base font-medium mt-2">{doctors[selected].details}</div>
            </motion.div>
          </AnimatePresence>
        </div>
      </main>
      {/* Persistent WhatsApp Icon */}
      <a href="https://wa.me/918625098210?text=Hello!%20I%20would%20like%20to%20book%20an%20appointment." target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 shadow-lg rounded-full bg-green-500 hover:bg-green-600 p-3 transition-all flex items-center justify-center">
        <img src="/whatsapp.png" alt="WhatsApp" width={40} height={40} />
      </a>
    </>
  );
}
