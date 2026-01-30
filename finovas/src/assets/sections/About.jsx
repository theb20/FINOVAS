import { motion } from "framer-motion";
import {
  Code2,
  CreditCard,
  Globe,
  LayoutGrid,
  Lock,
  ShieldCheck,
  Smartphone,
  Zap,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import useIsMobile from "../lib/useMobile";
import LazyImage from "../components/common/LazyImage";

/* --------------------------------------------------
   Bento Card – desktop animé / mobile statique
-------------------------------------------------- */
const BentoCard = ({ children, className = "", background, isMobile }) => {
  const Wrapper = isMobile ? "div" : motion.div;

  return (
    <Wrapper
      {...(!isMobile && {
        initial: { opacity: 0, y: 24 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.4 },
        transition: { duration: 0.35, ease: [0.22, 1, 0.36, 1] },
      })}
      className={`relative overflow-hidden rounded-3xl bg-[#0F0818]
      border border-white/5 p-5 md:p-8 transition-colors ${className}`}
    >
      {background && <div className="absolute inset-0 z-0">{background}</div>}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 to-transparent pointer-events-none" />
      <div className="relative z-10 h-full">{children}</div>
    </Wrapper>
  );
};

export default function AboutSection() {
  const { t } = useLanguage();
  const isMobile = useIsMobile();

  return (
    <section className="relative w-full bg-white text-white py-12 md:py-16 px-4 md:px-8 overflow-hidden">
      {/* Ambient glows – desktop only */}
      {!isMobile && (
        <>
          <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-purple-900/20 rounded-full blur-[128px]" />
          <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-indigo-900/20 rounded-full blur-[128px]" />
        </>
      )}

      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="mb-12 md:mb-16 text-center md:text-left">
          <h2 className="text-3xl md:text-5xl font-bold text-black">
            {t("about.title")}
          </h2>
          <p className="text-sm md:text-base text-gray-400 w-full md:w-1/2 mt-4">
            {t("about.subtitle")}
          </p>
        </div>

        <div className="grid relative grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 md:h-[800px]">
          {/* Big background text – desktop only */}
          <div className="absolute w-full text-center pointer-events-none z-0
                -top-10 md:top-9
                -translate-y-1/2 md:-translate-x-1/2">
            <h3
                className="
                font-bold uppercase tracking-tighter select-none
                text-black/5
                text-[8rem] sm:text-[12rem] md:text-[29rem]
                leading-none
                "
            >
                Finovas
            </h3>
            </div>


          {/* CARD 1 */}
          <BentoCard
            isMobile={isMobile}
            className="md:row-span-2 flex flex-col justify-between"
            background={
              <LazyImage
                src={"/wallpaper/1.webp"}
                width={isMobile ? 640 : 1600}
                height={isMobile ? 360 : 900}
                className="w-full h-full object-cover opacity-40"
                alt="Digital ecosystem"
              />
            }
          >
            <div className="space-y-6">
              <div className="flex gap-2 flex-wrap">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-purple-300 flex items-center gap-2">
                  <Zap className="w-3 h-3" /> {t("about.card1.tag_monetization")}
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-gray-400">
                  {t("about.card1.tag_vas")}
                </span>
              </div>

              <h3 className="text-5xl md:text-6xl font-bold leading-[0.9]">
                {t("about.card1.title_p1")} <br />
                {t("about.card1.title_p2")}
                <span className="inline-block ml-2 w-3 h-3 rounded-full bg-green-400" />
              </h3>

              <p className="text-gray-300 text-sm md:text-base max-w-xs">
                {t("about.card1.description")}
              </p>
            </div>
          </BentoCard>

          {/* CARD 2 */}
          <BentoCard
            isMobile={isMobile}
            background={
              <LazyImage
                src={"/wallpaper/2.webp"}
                width={isMobile ? 640 : 1600}
                height={isMobile ? 360 : 900}
                className="w-full h-full object-cover opacity-25"
                alt="Security"
              />
            }
          >
            <div className="flex justify-between items-start">
              <div className="p-2 bg-white/5 rounded-lg border border-white/10">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div className="text-right text-xs text-gray-500 space-y-1">
                {t("about.card2.tags").map((tag, i) => (
                  <div key={i} className={i === 2 ? "text-white" : ""}>
                    {tag}
                  </div>
                ))}
              </div>
            </div>
             <div className="mt-8">
              <div className="text-3xl font-bold">{t("about.card2.title")}</div>
              <div className="text-xs text-gray-500 mt-2">
                {t("about.card2.subtitle")}
              </div>
            </div>
          </BentoCard>

          {/* CARD 3 */}
          <BentoCard
            delay={0.18}
            isMobile={isMobile}
            background={
              <div className="absolute inset-0">
                <LazyImage
                  src="/wallpaper/5.webp"
                  width={1600}
                  height={900}
                  className="w-full h-full object-cover opacity-20"
                  alt="Analytics"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#0F0818]/90" />
              </div>
            }
          >
            <h4 className="text-sm text-gray-400 mb-4">{t("about.card3.title")}</h4>
            <div className="bg-[#1a1527] rounded-xl p-4 border border-white/5">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-full bg-purple-500/20 flex items-center justify-center text-purple-400">
                  <LayoutGrid size={16} />
                </div>
                <div>
                  <div className="text-sm font-bold">{t("about.card3.subtitle")}</div>
                  <div className="text-[10px] text-gray-500">{t("about.card3.subtext")}</div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-2">
                {t("about.card3.tags").map((tag, index) => (
                  <div key={index} className="bg-white/5 rounded p-2 text-center text-sm">
                    {tag}
                  </div>
                ))}
              </div>
            </div>
          </BentoCard>

          {/* CARD 4 */}
          <BentoCard
            delay={0.24}
            isMobile={isMobile}
            className="md:col-span-2 flex items-center justify-center"
            background={
              <div className="absolute inset-0">
                <LazyImage
                  src="/wallpaper/4.webp"
                  width={1600}
                  height={900}
                  className="w-full h-full object-cover opacity-100"
                  alt="Abstract wave"
                />
                <div className="absolute inset-0 bg-[#0F0818]/70" />
              </div>
            }
          >
            <div className="flex justify-center h-50 items-center gap-2">
              <img src="/favicon.webp" className="w-16 h-16" />
              <div>
                <div className="text-5xl font-bold">Finovas</div>
                <div className="text-xs uppercase tracking-widest text-gray-400">
                  {t("about.card4.subtitle")}
                </div>
              </div>
            </div>
          </BentoCard>

          {/* CARD 5 â€” DEVELOPERS */}
          <BentoCard
            delay={0.3}
            isMobile={isMobile}
            background={
              <div className="absolute inset-0">
                <LazyImage
                  src="/wallpaper/image.webp"
                  width={1600}
                  height={900}
                  className="w-full h-full object-cover opacity-20"
                  alt="Developer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0F0818] to-transparent" />
              </div>
            }
          >
            <div className="border-l-2 border-green-500 pl-4 py-2 mb-6">
              <p className="text-sm italic text-gray-300">{t("about.card5.quote")}</p>
            </div>

            <div className="flex gap-2">
              <button className="px-4 py-2 bg-white/10 rounded-lg text-sm">
                {t("about.card5.btn_doc")}
              </button>
              <button className="px-4 py-2 bg-purple-600 rounded-lg text-sm flex items-center gap-2">
                {t("about.card5.btn_api")} <Code2 size={14} />
              </button>
              <button className="px-4 py-2 bg-white/10 rounded-lg text-sm">
                {t("about.card5.btn_sandbox")}
              </button>
            </div>
          </BentoCard>

          {/* CARD 6 â€” ECOSYSTEM */}
          <BentoCard
            delay={0.36}
            isMobile={isMobile}
            className="md:col-span-2 flex flex-col items-center justify-center"
            background={
              <div className="absolute inset-0">
                <LazyImage
                  src="/wallpaper/6.webp"
                  width={1600}
                  height={900}
                  className="w-full h-full object-cover opacity-90"
                  alt="Global network"
                />
                <div className="absolute inset-0 bg-[#0F0818]/85" />
              </div>
            }
          >
            <div className="flex gap-6">
              <Smartphone />
              <Globe />
              <img src="/favicon.webp" className="w-10 h-10" />
              <Lock />
              <CreditCard />
            </div>

            <p className="mt-6 text-sm text-gray-500 uppercase tracking-widest">
              {t("about.card6.text")}
            </p>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}
