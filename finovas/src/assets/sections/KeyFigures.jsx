import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import useIsMobile from "../lib/useMobile.js";
import LazyImage from "../components/common/LazyImage";

/* ---------- Hook compteur ---------- */
function useCountUp(end, duration = 1500, startWhenVisible = true) {
  const ref = useRef(null);
  const [value, setValue] = useState(0);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!startWhenVisible) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
        }
      },
      { threshold: 0.6 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [started, startWhenVisible]);

  useEffect(() => {
    if (!started) return;

    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setValue(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(step);
    };

    requestAnimationFrame(step);
  }, [started, end, duration]);

  return { ref, value };
}

function KeyFigureItem({ item, index, variants }) {
  const { ref, value } = useCountUp(
    item.decimal ? item.value * 10 : item.value,
    1600
  );

  const displayValue = item.decimal
    ? (value / 10).toFixed(1)
    : value;

  return (
    <motion.div
      ref={ref}
      variants={variants}
      initial="hidden"
      whileInView="show"
      custom={index}
      viewport={{ once: true, amount: 0.4 }}
      className="border-t border-white/10 pt-8"
    >
      {/* Chiffre animé */}
      <div className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">
        {item.prefix || ""}
        {displayValue}
        {item.suffix || ""}
      </div>

      <div className="mt-4 text-lg font-semibold">
        {item.label}
      </div>

      <div className="mt-2 text-sm text-gray-400">
        {item.desc}
      </div>
    </motion.div>
  );
}

/* ---------- SECTION ---------- */
export default function KeyFigures() {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const figureTexts = t('figures.items');
  const figures = [
    { value: 10, suffix: "+", label: figureTexts[0].label, desc: figureTexts[0].desc },
    { value: 25, suffix: "+", label: figureTexts[1].label, desc: figureTexts[1].desc },
    { value: 99.9, suffix: "%", label: figureTexts[2].label, desc: figureTexts[2].desc, decimal: true },
    { value: 1, suffix: "M+", label: figureTexts[3].label, desc: figureTexts[3].desc },
    { value: 30, prefix: "<", suffix: "j", label: figureTexts[4].label, desc: figureTexts[4].desc },
    { value: 24, suffix: "/7", label: figureTexts[5].label, desc: figureTexts[5].desc },
  ];
  const headerVariants = isMobile
    ? {
        hidden: { opacity: 0, y: 12 },
        show: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.55, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.06 }
        }
      }
    : {
        hidden: { opacity: 0, x: -28 },
        show: {
          opacity: 1,
          x: 0,
          transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.1 }
        }
      };
  const headerItem = isMobile
    ? {
        hidden: { opacity: 0, y: 8 },
        show: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] } }
      }
    : {
        hidden: { opacity: 0, y: 12 },
        show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } }
      };
  const statVariants = isMobile
    ? {
        hidden: { opacity: 0, y: 16 },
        show: (index) => ({
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.45,
            ease: [0.22, 1, 0.36, 1],
            delay: index * 0.05
          }
        })
      }
    : {
        hidden: { opacity: 0, y: 30 },
        show: (index) => ({
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.55,
            ease: [0.22, 1, 0.36, 1],
            delay: index * 0.08
          }
        })
      };

  return (
    <section className="relative w-full bg-[#050209] text-white py-20 md:py-32 overflow-hidden">
      
      {/* Background Image & Overlays */}
      <div className="absolute inset-0 z-10">
        <LazyImage
          src="/wallpaper/objectif.webp"
          alt="Background"
          width={1600}
          height={900}
          className="w-full h-full object-cover"
          onError={(e) => {
            e.currentTarget.onerror = null;
            e.currentTarget.src =
              "/wallpaper/objectif.webp";
          }}
        />
        <div className="absolute inset-0 bg-purple-900/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,0,0,0.8)_100%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <motion.div
          variants={headerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.5 }}
          className="max-w-3xl mb-20 px-6 md:px-0"
        >
          <motion.span 
            variants={headerItem}
            className="text-sm uppercase tracking-widest text-white/60 inline-block"
          >
            {t('figures.header_tag')}
          </motion.span>

          <motion.h2 variants={headerItem} className="mt-6 text-3xl md:text-5xl font-semibold">
            {t('figures.title_line1')}
            <br />
            {t('figures.title_line2')}
          </motion.h2>

          <motion.p variants={headerItem} className="mt-6 text-lg text-gray-400">
            {t('figures.description')}
          </motion.p>
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-16">
          {figures.map((item, i) => (
            <KeyFigureItem 
              key={i} 
              item={item} 
              index={i} 
              variants={statVariants} 
            />
          ))}
        </div>
      </div>
    </section>
  );
}
