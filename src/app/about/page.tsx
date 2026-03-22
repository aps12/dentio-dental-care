'use client';
import Image from "next/image";
import { motion } from "framer-motion";
import Head from "next/head";
import { siteMeta } from "../metadata";

export default function About() {
  return (
    <>
      <Head>
        <title>About Dentio Dental Care | Best Dentist in Hinjewadi, Pune</title>
        <meta name="description" content="Learn about Dentio Dental Care, our expert team, advanced technology, and patient-first approach in Hinjewadi, Pune." />
        <meta name="keywords" content={siteMeta.keywords + ', about, team, technology, Pune, Hinjewadi'} />
        <link rel="canonical" href={siteMeta.url + 'about'} />
      </Head>
      <main className="max-w-3xl mx-auto py-16 px-4 flex flex-col items-center">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full"
        >
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="text-3xl md:text-4xl font-bold mb-4 text-blue-900 text-center"
          >
            About Dentio Dental Care
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="rounded-3xl shadow-2xl border-2 border-cyan-100 bg-gradient-to-br from-white via-cyan-50 to-blue-50 p-8 mb-10 w-full flex flex-col items-center"
          >
            <p className="text-lg md:text-2xl text-blue-800 mb-6 max-w-2xl mx-auto font-medium text-center">
              Welcome to <span className="font-semibold text-cyan-700">Dentio Dental Care</span>, where your smile is our passion. Led by <span className="font-semibold text-cyan-700">Dr. Shalini Patel (BDS, MDS Orthodontics)</span>, our clinic blends advanced technology, a gentle touch, and a commitment to ethical, transparent care. We believe every patient deserves a healthy, confident smile in a warm, welcoming environment.
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="mb-6 w-full"
            >
              <h2 className="text-xl md:text-2xl font-bold text-cyan-800 mb-2 text-center">Personalized, Compassionate Dentistry</h2>
              <p className="text-blue-800 text-base md:text-lg max-w-2xl mx-auto mb-2 text-center">Our all-female team is dedicated to providing expert, gentle care for every age. We focus on prevention, patient education, and empowering you to maintain lifelong oral health. From routine check-ups to advanced orthodontics, we tailor every treatment to your unique needs and goals.</p>
            </motion.div>
            <div className="flex flex-wrap justify-center gap-4 mt-2">
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full font-semibold shadow animate-pulse"
              >
                <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0-2.21 1.79-4 4-4s4 1.79 4 4-1.79 4-4 4-4-1.79-4-4zm0 0c0-2.21-1.79-4-4-4s-4 1.79-4 4 1.79 4 4 4 4-1.79 4-4zm0 0v2m0 4h.01"/></svg> Preventive Focus
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="inline-flex items-center gap-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full font-semibold shadow animate-pulse"
              >
                <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3"/></svg> Patient Education
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="inline-flex items-center gap-2 bg-cyan-100 text-cyan-800 px-4 py-2 rounded-full font-semibold shadow animate-pulse"
              >
                <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10" /><path d="M8 12l2 2 4-4" /></svg> Ethical & Transparent
              </motion.span>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="rounded-3xl shadow-xl border-2 border-cyan-100 bg-gradient-to-br from-cyan-50 via-white to-blue-50 p-8 mb-10 w-full"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-cyan-800 mb-4 text-center">Why Choose Dentio?</h2>
            <motion.ul
              initial="hidden"
              animate="visible"
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.12 } } }}
              className="text-blue-800 text-base md:text-lg mb-8 max-w-2xl mx-auto text-left list-disc list-inside space-y-2"
            >
              <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}><b>Experienced Team:</b> Led by Dr. Shalini Patel (BDS, MDS Ortho), our all-female team brings expertise, compassion, and a gentle touch to every treatment.</motion.li>
              <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}><b>Personalized Care:</b> We listen to your concerns and tailor treatments to your unique needs and goals.</motion.li>
              <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}><b>Advanced Technology:</b> Digital X-rays, smile design, and modern equipment for precise, comfortable care.</motion.li>
              <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}><b>Transparent & Ethical:</b> Honest advice, clear pricing, and a focus on prevention and education.</motion.li>
              <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}><b>Comfortable Environment:</b> Relaxing, child-friendly clinic designed to put you at ease.</motion.li>
              <motion.li variants={{ hidden: { opacity: 0, x: -20 }, visible: { opacity: 1, x: 0 } }}><b>Prime Location:</b> Located in the most developing area in Hinjewadi Phase 1 with ample parking space.</motion.li>
            </motion.ul>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-10 text-base text-blue-700 space-y-2 text-center"
          >
            <div><b>Address:</b> Shop#210, One Avenue, Maan Rd, Hinjawadi, Pune (MH)</div>
            <div><b>Open Hours:</b> 10:00 AM - 09:00 PM</div>
            <div><b>Phone:</b> <a href="tel:+918625098210" className="text-cyan-600 hover:underline">+91-8625098210</a></div>
            <div><b>Email:</b> <a href="mailto:dent.io210@gmail.com" className="text-cyan-600 hover:underline">dent.io210@gmail.com</a></div>
          </motion.div>
        </motion.div>
      </main>
      {/* Persistent WhatsApp Icon */}
      <a href="https://wa.me/918625098210?text=Hello!%20I%20would%20like%20to%20book%20an%20appointment." target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 shadow-lg rounded-full bg-green-500 hover:bg-green-600 p-3 transition-all flex items-center justify-center">
        <Image src="/whatsapp.png" alt="WhatsApp" width={40} height={40} />
      </a>
    </>
  );
}
