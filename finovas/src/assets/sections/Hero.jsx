import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";
import useIsMobile from "../lib/useMobile";
import LazyImage from "../components/common/LazyImage.jsx";

export default function HeroSection() {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  const containerVariants = isMobile
    ? {
        hidden: { opacity: 0, y: 14 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: 0.06,
            delayChildren: 0.05
          }
        }
      }
    : {
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.9,
            ease: [0.22, 1, 0.36, 1],
            staggerChildren: 0.12,
            delayChildren: 0.1
          }
        }
      };

  const itemVariants = isMobile
    ? {
        hidden: { opacity: 0, y: 10 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.45, ease: [0.22, 1, 0.36, 1] }
        }
      }
    : {
        hidden: { opacity: 0, y: 16 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] }
        }
      };

  return (
    <section className="relative w-full h-screen min-h-[600px] overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 w-full h-full">
        <LazyImage
          src="/wallpaper/hero.webp"
          alt="Finovas background"
          width={1600}
          height={900}
          className="w-full h-full object-cover"
          loading="eager"
          fetchPriority="high"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#2C0342]/90 via-[#6F02B5]/70 to-transparent" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 h-full w-full max-w-7xl mx-auto px-6 flex items-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="max-w-4xl"
        >
          <motion.span
            variants={itemVariants}
            className="inline-block mb-6 text-sm uppercase tracking-widest text-white/60"
          >
            {t("hero.label")}
          </motion.span>

          <motion.h1
            variants={itemVariants}
            className="text-4xl sm:text-5xl md:text-6xl xl:text-7xl font-semibold text-white leading-tight"
          >
            {t("hero.title_line1")} <br />
            <span className="text-white/90">{t("hero.title_line2")}</span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="mt-6 text-base sm:text-lg md:text-xl text-white/75 leading-relaxed max-w-2xl"
          >
            {t("hero.description")}
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap items-center gap-4"
          >
            <button className="bg-white text-[#081351] hover:bg-gray-100 font-semibold px-7 py-3 rounded-xl transition shadow-lg">
              {t("hero.cta_demo")}
            </button>
            <button className="border border-white/40 text-white hover:bg-white/10 font-semibold px-7 py-3 rounded-xl transition">
              {t("hero.cta_solutions")}
            </button>
          </motion.div>

          <motion.div
            variants={itemVariants}
            className="mt-10 flex flex-wrap gap-3 text-sm text-white/70"
          >
            {t("hero.tags").map((item) => (
              <span key={item} className="border border-white/20 px-4 py-1.5 rounded-full">
                {item}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        animate={isMobile ? { opacity: 1, y: 0 } : { opacity: 1, y: [0, 6, 0] }}
        transition={{
          opacity: { delay: 0.6, duration: 0.6, ease: [0.22, 1, 0.36, 1] },
          y: isMobile
            ? { duration: 0.4, ease: [0.22, 1, 0.36, 1] }
            : { delay: 1.1, duration: 2.4, repeat: Infinity, ease: "easeInOut" }
        }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50 flex flex-col items-center gap-2"
      >
        <span className="text-xs uppercase tracking-[0.2em]">{t("hero.scroll")}</span>
        <div className="w-[1px] h-12 bg-gradient-to-b from-white/50 to-transparent" />
      </motion.div>
    </section>
  );
}
