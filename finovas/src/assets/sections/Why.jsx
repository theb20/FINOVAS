import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import useIsMobile from "../lib/useMobile.js";
import LazyImage from "../components/common/LazyImage";

export default function WhyFinovas() {
  const { t } = useLanguage();
  const reasons = t("why.items");
  const isMobile = useIsMobile();

  /* --------------------------------------------------
     DESKTOP VARIANTS (MAGAZINE STYLE)
  -------------------------------------------------- */
  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1], staggerChildren: 0.08 },
    },
  };

  const headerItem = {
    hidden: { opacity: 0, y: 12 },
    show: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.98 },
    show: (index) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.22, 1, 0.36, 1],
        delay: index * 0.08,
      },
    }),
  };

  return (
    <section className="relative w-full bg-[#f4f4f4] text-black py-16 md:py-24 border-b border-black/60 md:border-black">
      <div className="max-w-[1400px] mx-auto px-4 md:px-8">

        {/* ======================================================
           HEADER (COMMUN)
        ====================================================== */}
        <div className="flex flex-col md:flex-row justify-between items-start border-b border-black/40 md:border-b-2 md:border-black pb-10 md:pb-12 mb-10 md:mb-12">
          <motion.div
            className="flex flex-col"
            variants={headerVariants}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.3 }}
          >
            <motion.span
              variants={headerItem}
              className="text-xs md:text-sm font-bold tracking-[0.3em] mb-3 md:mb-4 uppercase"
            >
              {t("why.title_brand")}
            </motion.span>

            <motion.h2
              variants={headerItem}
              className="text-4xl sm:text-6xl md:text-9xl font-black tracking-tighter leading-[0.9] md:leading-[0.8]"
            >
              {t("why.title_main")}
            </motion.h2>
          </motion.div>

          <div className="mt-6 md:mt-0 max-w-sm">
            <p className="text-base md:text-xl italic leading-relaxed">
              "{t("why.quote")}"
            </p>
          </div>
        </div>

        {/* ======================================================
           MOBILE VERSION – STACKED EDITORIAL CARDS
        ====================================================== */}
        {isMobile && (
          <div className="space-y-8">
            {reasons.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.35 }}
                className="bg-white border border-black/20"
              >
                {/* Image */}
                <div className="relative h-[200px] overflow-hidden">
                  <LazyImage
                    src={item.image}
                    alt={item.title}
                    width={800}
                    height={450}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute top-3 right-3 bg-black text-white text-xs px-2 py-1 font-bold">
                    {item.id}
                  </div>
                </div>

                {/* Content */}
                <div className="p-5">
                  <h3 className="text-xl font-black uppercase tracking-tight mb-1">
                    {item.title}
                  </h3>

                  <span className="inline-block mb-3 text-xs font-bold uppercase tracking-widest border border-black px-2 py-1">
                    {item.subtitle}
                  </span>

                  <p className="text-sm leading-relaxed text-black/80">
                    {item.description}
                  </p>

                  <div className="mt-4 flex justify-end">
                    <ArrowUpRight size={28} strokeWidth={1.5} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* ======================================================
           DESKTOP VERSION – MAGAZINE GRID (ORIGINAL)
        ====================================================== */}
        {!isMobile && (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 border-x-0 md:border-x-2 border-black divide-y divide-black/40 md:divide-black lg:divide-y-0 lg:divide-x-2">
            {reasons.map((item, index) => (
              <motion.div
                key={item.id}
                variants={cardVariants}
                initial="hidden"
                whileInView="show"
                custom={index}
                viewport={{ once: true, amount: 0.4 }}
                className="group relative flex flex-col h-full bg-white hover:bg-black hover:text-white transition-colors duration-500 ease-out"
              >
                {/* Image */}
                <div className="relative h-[240px] md:h-[400px] overflow-hidden border-b border-black/30 md:border-b-2 md:border-black grayscale group-hover:grayscale-0 transition-all duration-700">
                  <LazyImage
                    src={item.image}
                    alt={item.title}
                    width={1600}
                    height={900}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                  />
                  <div className="absolute top-4 right-4 bg-white text-black px-3 py-1 font-bold border border-black z-10">
                    {item.id}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 md:p-12 flex flex-col flex-grow justify-between">
                  <div>
                    <h3 className="text-3xl md:text-5xl font-black mb-2 uppercase tracking-tight">
                      {item.title}
                    </h3>

                    <span className="inline-block px-3 py-1 border border-current text-xs font-bold uppercase tracking-widest mb-8">
                      {item.subtitle}
                    </span>

                    <p className="text-base md:text-xl font-medium leading-relaxed opacity-80 max-w-md">
                      {item.description}
                    </p>
                  </div>

                  <div className="mt-12 flex justify-end">
                    <ArrowUpRight
                      size={48}
                      className="transform group-hover:rotate-45 transition-transform duration-500"
                      strokeWidth={1}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        )}

        {/* ======================================================
           FOOTER STRIP
        ====================================================== */}
        <div className="border-x-0 md:border-x-2 border-b border-black/60 md:border-b-2 md:border-black p-3 md:p-4 flex justify-between items-center text-[10px] md:text-xs font-bold uppercase tracking-widest bg-black text-white mt-10">
          <span>{t("why.footer_brand")}</span>
          <span>{t("why.footer_tagline")}</span>
        </div>

      </div>
    </section>
  );
}
