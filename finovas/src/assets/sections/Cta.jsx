import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext.jsx";
import useIsMobile from "../lib/useMobile.js";

export default function FinalCTA() {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  return (
    <section className="relative w-full text-white overflow-hidden py-14 md:py-14">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/wallpaper/cta.webp" 
          alt={t("cta.title_line1")} 
          className="w-full h-full object-cover object-center"
        />
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 bg-slate-900/50" /> 
      </div>

      {/* ======================================================
         DESKTOP BACKGROUND GLOW (REMOVED ON MOBILE)
      ====================================================== */}
      {!isMobile && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[900px] bg-indigo-900/20 blur-[180px]" />
        </div>
      )}

      <div className="relative max-w-6xl mx-auto px-6 text-center">

        {/* ======================================================
           CONTENT
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 12 : 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: isMobile ? 0.4 : 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="text-xs md:text-sm uppercase tracking-widest text-white">
            {t("cta.tag")}
          </span>

          <h2 className="mt-6 text-3xl md:text-5xl font-semibold leading-tight">
            {t("cta.title_line1")}
            <br />
            {t("cta.title_line2")}
          </h2>

          <p className="mt-6 md:mt-8 text-base md:text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            {t("cta.description")}
          </p>

          {/* ======================================================
             ACTIONS
          ====================================================== */}
          <div className="mt-12 md:mt-14 flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
            {/* Primary CTA */}
            <a
              href="/contact"
              className={`w-full sm:w-auto px-8 md:px-10 py-4 rounded-xl
                bg-indigo-600 text-white font-semibold text-sm md:text-base
                shadow-md md:shadow-lg md:shadow-indigo-600/30
                transition-colors duration-300
                ${!isMobile ? "hover:bg-indigo-700" : ""}
              `}
            >
              {t("cta.btn_demo")}
            </a>

            {/* Secondary CTA */}
            <a
              href="/partenariats"
              className={`w-full sm:w-auto px-8 md:px-10 py-4 rounded-xl
                border border-white/20 text-white font-semibold text-sm md:text-base
                transition-colors duration-300
                ${!isMobile ? "hover:bg-white/10" : ""}
              `}
            >
              {t("cta.btn_partner")}
            </a>
          </div>
        </motion.div>

        {/* ======================================================
           FOOTER TRUST LINE
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: isMobile ? 0.35 : 0.45, delay: 0.1 }}
          className="mt-14 md:mt-20 text-[10px] md:text-xs text-gray-500 uppercase tracking-widest"
        >
          {t("cta.footer")}
        </motion.div>
      </div>
    </section>
  );
}
