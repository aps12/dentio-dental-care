'use client';
import { motion } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import { siteMeta } from "../metadata";

const faqs = [
  {
    question: "What are your clinic hours?",
    answer: "We are open from 10:00 AM to 09:00 PM, Monday to Saturday. Sundays by appointment only."
  },
  {
    question: "How do I book an appointment?",
    answer: "You can book online, call us, or use our WhatsApp link. For online booking, visit our appointment portal. Walk-ins are also welcome, but appointments are preferred."
  },
  {
    question: "Do you accept walk-in patients?",
    answer: "Yes, but we recommend booking an appointment to minimize your wait time."
  },
  {
    question: "Is dental treatment painful?",
    answer: "We use the latest techniques and technology to ensure your comfort and minimize pain. Local anesthesia and sedation options are available for anxious patients."
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept cash, credit/debit cards, UPI, and most major digital wallets."
  },
  {
    question: "Do you offer emergency dental care?",
    answer: "Yes, we provide prompt relief for dental pain, injuries, and urgent dental needs. Please call ahead for emergency appointments."
  },
  {
    question: "Are your treatments safe for children and elderly patients?",
    answer: "Absolutely! We offer gentle, age-appropriate care for children, adults, and seniors. Our clinic is fully equipped for all age groups."
  },
  {
    question: "How often should I visit the dentist?",
    answer: "We recommend a dental checkup and cleaning every 6 months for most patients. Your dentist will advise if you need more frequent visits."
  },
  {
    question: "What should I bring for my first visit?",
    answer: "Please bring any previous dental records, a list of medications, and your ID. Arrive 10 minutes early to complete a short registration."
  },
  {
    question: "Do you offer cosmetic dentistry?",
    answer: "Yes, we provide teeth whitening, veneers, smile makeovers, and more. Book a consultation to discuss your options."
  },
  {
    question: "Is parking available at the clinic?",
    answer: "Yes, we have convenient parking available for our patients."
  },
];

export default function Faqs() {
  return (
    <>
      <Head>
        <title>FAQs | Dentio Dental Care, Hinjewadi, Pune</title>
        <meta name="description" content="Frequently asked questions about Dentio Dental Care, our services, appointments, and dental treatments in Hinjewadi, Pune." />
        <meta name="keywords" content={siteMeta.keywords + ', faqs, questions, answers, Pune, Hinjewadi'} />
        <link rel="canonical" href={siteMeta.url + 'faqs'} />
      </Head>
      <motion.main initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }} className="py-16 px-4 max-w-2xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-blue-900 text-center"
        >
          Frequently Asked Questions
        </motion.h2>
        <div className="space-y-6">
          {faqs.map((faq, i) => (
            <motion.details
              key={faq.question}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group bg-white/90 rounded-2xl shadow-md p-6 open:bg-cyan-50 border border-cyan-100 transition-all relative overflow-hidden"
            >
              <summary className="font-semibold text-lg cursor-pointer text-blue-800 group-open:text-cyan-700 flex items-center gap-2 select-none transition-all">
                <span className="flex-1">{faq.question}</span>
                <span className="ml-2 transition-transform duration-300 group-open:rotate-90">
                  <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                </span>
              </summary>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.1 }}
                className="mt-3 text-blue-700 text-base leading-relaxed"
              >
                {faq.answer}
              </motion.p>
            </motion.details>
          ))}
        </div>
        <div className="flex justify-center mt-10">
          <a
            href="https://wa.me/918625098210?text=Hi%20Dentio%20Clinic%2C%20I%20have%20an%20additional%20question%20about%20your%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-cyan-600 text-white font-semibold shadow-md hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 transition text-base"
            aria-label="Post an additional question on WhatsApp"
          >
            <svg width="22" height="22" fill="currentColor" viewBox="0 0 24 24" className="inline-block"><path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.19-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.67-.5-5.24-1.44l-.37-.22-3.68.96.98-3.59-.24-.37A9.93 9.93 0 0 1 2 12C2 6.48 6.48 2 12 2c2.61 0 5.08 1.02 6.94 2.88A9.93 9.93 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.13-7.47c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.23.69.28 1.23.45 1.65.58.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>
            Post Additional Question on WhatsApp
          </a>
        </div>
      </motion.main>
      {/* Persistent WhatsApp Icon */}
      <a href="https://wa.me/918625098210?text=Hello!%20I%20would%20like%20to%20book%20an%20appointment." target="_blank" rel="noopener noreferrer" className="fixed bottom-6 right-6 z-50 shadow-lg rounded-full bg-green-500 hover:bg-green-600 p-3 transition-all flex items-center justify-center">
        <Image src="/whatsapp.png" alt="WhatsApp" width={40} height={40} />
      </a>
    </>
  );
}
