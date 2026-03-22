"use client";
import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Head from "next/head";
import { siteMeta } from "../metadata";

const allImages = [
  { src: "/gallery1.png", type: "Clinic", caption: "Reception & Waiting Area" },
  { src: "/gallery2.png", type: "Clinic", caption: "Operatory Room" },
  { src: "/gallery3.png", type: "Clinic", caption: "Sterilization Zone" },
  { src: "/gallery4.png", type: "Clinic", caption: "Advanced Equipment" },
  { src: "/gallery4.png", type: "Exterior", caption: "View from Pathak Road" },
  { src: "/gallery4.png", type: "Exterior", caption: "View One Avenue Complex" },
  { src: "/gallery4.png", type: "Happy Patients", caption: "Child RCT" },
  { src: "/gallery4.png", type: "Happy Patients", caption: "Video Testimony" },
];
const filterOptions = Array.from(new Set(allImages.map(img => img.type)));

export default function Gallery() {
  const [filter, setFilter] = useState<string | null>(null);
  const images = !filter ? allImages : allImages.filter((img) => img.type === filter);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [seeMoreOpen, setSeeMoreOpen] = useState(false);
  const seeMoreInputRef = useRef<HTMLInputElement>(null);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  // Get up to 2 images left and right of center
  const getDisplayImages = () => {
    const result = [];
    for (let offset = -2; offset <= 2; offset++) {
      const idx = (currentIndex + offset + images.length) % images.length;
      result.push({ ...images[idx], offset });
    }
    return result;
  };
  const displayImages = getDisplayImages();

  if (images.length === 0) {
    return (
      <div className="flex items-center justify-center min-h-screen text-2xl text-blue-800">
        No images found.
      </div>
    );
  }

  return (
    <>
      <Head>
        <title>Gallery | Dentio Dental Care, Hinjewadi, Pune</title>
        <meta name="description" content="View our dental clinic, patient smiles, and advanced technology at Dentio Dental Care, Hinjewadi, Pune." />
        <meta name="keywords" content={siteMeta.keywords + ', gallery, clinic photos, Pune, Hinjewadi'} />
        <link rel="canonical" href={siteMeta.url + 'gallery'} />
      </Head>
      <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden mt-8">
        {/* Animated, full-bleed blurred background */}
        <motion.div
          className="fixed inset-0 -z-10 bg-gradient-to-br from-cyan-200 via-blue-100 to-white"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <AnimatePresence mode="wait">
            <motion.img
              key={images[currentIndex].src}
              src={images[currentIndex].src}
              alt=""
              className="w-full h-full object-cover blur-2xl scale-125 opacity-40"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 0.4, scale: 1.25 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 1.2 }}
              aria-hidden
            />
          </AnimatePresence>
        </motion.div>

        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-bold mb-4 text-blue-900 text-center"
        >
          Smile Gallery
        </motion.h2>
        <motion.p
          className="text-center text-blue-700 text-sm md:text-base mb-3 w-full max-w-full md:max-w-2xl mx-auto z-10 whitespace-normal leading-snug"
          style={{ wordBreak: 'keep-all' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Explore our world-class dental clinic, advanced technology, and patient-friendly spaces.
        </motion.p>

        {/* Filter Chips */}
        <div className="mb-2 flex gap-2 z-10">
          {filterOptions.map((opt) => {
            const selected = filter === opt;
            return (
              <button
                key={opt}
                onClick={() => setFilter(selected ? null : opt)}
                className={`px-5 py-1.5 rounded-full border-2 transition-all font-semibold text-base backdrop-blur-md
                ${selected ? "border-cyan-600 bg-cyan-100/80 text-cyan-900 shadow-lg" : "border-cyan-200 text-cyan-700 bg-white/80 hover:border-cyan-400"}
                focus:outline-none focus:ring-2 focus:ring-cyan-200`}
              >
                {opt}
              </button>
            );
          })}
        </div>

        {/* Photo Slider with 3D effect */}
        <div className="relative flex flex-col items-center justify-center w-full max-w-7xl h-[70vw] max-h-[70vh] min-h-[220px] z-10 px-2 sm:px-4 md:px-8 mt-1">
          <div className="flex items-center justify-center w-full relative">
            <button
              onClick={handlePrev}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 text-cyan-700 p-3 sm:p-4 rounded-full shadow-lg hover:bg-cyan-100 transition-all text-2xl sm:text-3xl"
              aria-label="Previous photo"
            >
              &lt;
            </button>
            <div className="relative flex items-center justify-center h-full w-full z-10">
              {displayImages.map(({ src, caption, offset }) => {
                // Responsive translateX for mobile/desktop
                const isMobile = typeof window !== 'undefined' && window.innerWidth < 640;
                const scale = offset === 0 ? 1.05 : Math.abs(offset) === 1 ? 0.7 : 0.45;
                const blur = offset === 0 ? 0 : Math.abs(offset) === 1 ? 6 : 14;
                const z = offset === 0 ? 40 : Math.abs(offset) === 1 ? 20 : 10;
                const opacity = offset === 0 ? 1 : Math.abs(offset) === 1 ? 0.7 : 0.18;
                const translateX = offset === 0 ? 0 : offset * (isMobile ? (Math.abs(offset) === 1 ? 120 : 220) : (Math.abs(offset) === 1 ? 340 : 600));
                const rotateY = offset === 0 ? 0 : offset * (Math.abs(offset) === 1 ? -18 : -35);
                const shadow = offset === 0 ? "shadow-2xl" : Math.abs(offset) === 1 ? "shadow-xl" : "shadow";
                return (
                  <motion.div
                    key={src + offset + currentIndex}
                    className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ${shadow}`}
                    style={{
                      zIndex: z,
                      pointerEvents: offset === 0 ? "auto" : "none",
                      perspective: 1200,
                    }}
                    animate={{
                      scale,
                      opacity,
                      filter: `blur(${blur}px)`,
                      x: translateX,
                      y: 0,
                      rotateY,
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 60,
                      damping: 16,
                      mass: 0.5,
                      duration: 0.8,
                      ease: [0.4, 0, 0.2, 1],
                    }}
                  >
                    <img
                      src={src}
                      alt={caption}
                      className="object-cover w-[80vw] max-w-[95vw] h-[48vw] max-h-[60vw] sm:w-[min(95vw,900px)] sm:h-[min(70vw,600px)] md:w-[800px] md:h-[500px] rounded-3xl bg-white select-none"
                      draggable={false}
                    />
                    {offset === 0 && (
                      <motion.div
                        className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-white/90 text-cyan-800 px-4 py-2 rounded-full text-base sm:text-lg font-semibold shadow-lg backdrop-blur-md"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        {caption}
                      </motion.div>
                    )}
                  </motion.div>
                );
              })}
            </div>
            <button
              onClick={handleNext}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-white/80 text-cyan-700 p-3 sm:p-4 rounded-full shadow-lg hover:bg-cyan-100 transition-all text-2xl sm:text-3xl"
              aria-label="Next photo"
            >
              &gt;
            </button>
          </div>
        </div>
        {/* Navigation dots */}
        <div className="flex items-center justify-center gap-1 mt-2 z-30 relative">
          {images.map((img, idx) => (
            <button
              key={img.src}
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to image ${idx + 1}`}
              className={`w-4 h-4 rounded-full border-2 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-300
              ${currentIndex === idx ? 'bg-cyan-600 border-cyan-700 scale-125 shadow' : 'bg-white border-cyan-300 hover:bg-cyan-100'}`}
            />
          ))}
        </div>

        {/* Subtle call to action - CTA button and modal */}
        <div className="w-full flex justify-center mt-12 mb-8">
          <button
            onClick={() => setSeeMoreOpen(true)}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-cyan-50 via-white to-blue-50 border border-cyan-200 shadow hover:shadow-md text-cyan-800 font-semibold text-base md:text-lg hover:bg-cyan-100/80 transition-all group focus:outline-none focus:ring-2 focus:ring-cyan-300"
            aria-label="Want to see more? Let us know!"
          >
            <svg className="w-5 h-5 text-cyan-500 group-hover:scale-110 transition" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9zm-9 4a4 4 0 004-4H8a4 4 0 004 4z"/></svg>
            <span>Want to see more?</span>
          </button>
        </div>
        {seeMoreOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm" onClick={() => setSeeMoreOpen(false)}>
            <div
              className="bg-white rounded-2xl shadow-2xl p-6 w-full max-w-sm mx-2 relative flex flex-col gap-4 border border-cyan-100"
              onClick={e => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-cyan-400 hover:text-cyan-700 p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-cyan-300"
                onClick={() => setSeeMoreOpen(false)}
                aria-label="Close"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/></svg>
              </button>
              <div className="flex items-center gap-2 mb-2">
                <svg className="w-5 h-5 text-cyan-500" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9zm-9 4a4 4 0 004-4H8a4 4 0 004 4z"/></svg>
                <span className="text-cyan-800 font-semibold text-base">Want to see more?</span>
              </div>
              <form
                className="flex flex-col gap-3"
                onSubmit={e => {
                  e.preventDefault();
                  const val = seeMoreInputRef.current?.value || '';
                  if (!val.trim()) return;
                  const text = encodeURIComponent(`Hi! I would like to see more photos of: ${val}`);
                  window.open(`https://wa.me/918625098210?text=${text}`, '_blank');
                  setSeeMoreOpen(false);
                }}
              >
                <input
                  ref={seeMoreInputRef}
                  type="text"
                  defaultValue="Smile Makeovers, Clinic Interiors"
                  placeholder="e.g. Smile Makeovers, Clinic Interiors"
                  className="border border-cyan-200 rounded-lg px-4 py-3 text-base focus:ring-2 focus:ring-cyan-200 transition placeholder-cyan-400"
                  required
                  maxLength={80}
                  aria-label="What would you like to see?"
                  onFocus={e => {
                    if (e.target.value === 'Smile Makeovers, Clinic Interiors') {
                      e.target.value = '';
                    }
                  }}
                />
                <button
                  type="submit"
                  className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-gradient-to-r from-cyan-600 to-blue-600 text-white font-semibold shadow-md hover:from-cyan-700 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2 transition text-base whitespace-nowrap justify-center"
                >
                  <svg width="18" height="18" fill="currentColor" viewBox="0 0 24 24" className="inline-block"><path d="M20.52 3.48A11.93 11.93 0 0 0 12 0C5.37 0 0 5.37 0 12c0 2.11.55 4.16 1.6 5.97L0 24l6.19-1.62A11.93 11.93 0 0 0 12 24c6.63 0 12-5.37 12-12 0-3.19-1.24-6.19-3.48-8.52zM12 22c-1.85 0-3.67-.5-5.24-1.44l-.37-.22-3.68.96.98-3.59-.24-.37A9.93 9.93 0 0 1 2 12C2 6.48 6.48 2 12 2c2.61 0 5.08 1.02 6.94 2.88A9.93 9.93 0 0 1 22 12c0 5.52-4.48 10-10 10zm5.13-7.47c-.28-.14-1.65-.81-1.9-.9-.25-.09-.43-.14-.61.14-.18.28-.7.9-.86 1.08-.16.18-.32.2-.6.07-.28-.14-1.18-.44-2.25-1.41-.83-.74-1.39-1.65-1.55-1.93-.16-.28-.02-.43.12-.57.13-.13.28-.34.42-.51.14-.17.18-.29.28-.48.09-.19.05-.36-.02-.5-.07-.14-.61-1.47-.84-2.01-.22-.53-.45-.46-.62-.47-.16-.01-.36-.01-.56-.01-.19 0-.5.07-.76.34-.26.27-1 1-.97 2.43.03 1.43 1.03 2.81 1.18 3 .15.19 2.03 3.1 4.93 4.23.69.28 1.23.45 1.65.58.69.22 1.32.19 1.81.12.55-.08 1.65-.67 1.89-1.32.23-.65.23-1.2.16-1.32-.07-.12-.25-.19-.53-.33z"/></svg>
                  Send via WhatsApp
                </button>
              </form>
            </div>
          </div>
        )}
        {/* Persistent WhatsApp Icon */}
        <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
          <a href="https://wa.me/918625098210?text=Hello!%20I%20would%20like%20to%20book%20an%20appointment." target="_blank" rel="noopener noreferrer" className="shadow-lg rounded-full bg-green-500 hover:bg-green-600 p-3 transition-all flex items-center justify-center">
            <Image src="/whatsapp.png" alt="WhatsApp" width={40} height={40} />
          </a>
        </div>
      </div>
    </>
  );
}
