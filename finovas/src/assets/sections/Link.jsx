import { motion } from "framer-motion";
import {
  Radio,
  Smartphone,
  Wallet,
  Layers,
  CreditCard,
  Cpu,
  ArrowRight,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import useIsMobile from "../lib/useMobile";
import LazyImage from "../components/common/LazyImage";

const ICONS = [Radio, Smartphone, Wallet, Layers, CreditCard, Cpu];
const COLORS = [
  "text-blue-500",
  "text-emerald-500",
  "text-indigo-500",
  "text-pink-500",
  "text-orange-500",
  "text-cyan-500",
];
const BGS = [
  "bg-blue-50",
  "bg-emerald-50",
  "bg-indigo-50",
  "bg-pink-50",
  "bg-orange-50",
  "bg-cyan-50",
];

export default function LinkSection() {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const roles = t("roles.items");

  return (
    <section className="relative w-full bg-white py-16 md:py-20 overflow-hidden">

      {/* Decorative background – desktop only */}
      {!isMobile && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute -top-[20%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-b from-blue-100/50 to-transparent blur-3xl" />
          <div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-t from-indigo-100/50 to-transparent blur-3xl" />
        </div>
      )}

      <div className="max-w-7xl mx-auto container relative z-10">

        {/* ======================================================
           HEADER (COMMUN, ANIMÉ DESKTOP / SIMPLE MOBILE)
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: isMobile ? 12 : 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: isMobile ? 0.4 : 0.6 }}
          className="relative mb-16 md:mb-20"
        >
            <img
          src="/wallpaper/succes.webp"
          alt="Success illustration"
          className="absolute top-0 -right-4 h-full md:max-w-[420px] object-cover opacity-100 -z-10"
        />

          <span className="inline-block py-1 px-3 rounded-full bg-slate-50 text-slate-500 text-xs font-bold uppercase tracking-widest mb-6">
            {t("roles.header_tag")}
          </span>

          <h2 className="text-3xl md:text-5xl font-bold text-slate-900 leading-tight tracking-tight max-w-[560px]">
            {t("roles.title_line1")}
            <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-900 to-purple-600">
              {t("roles.title_line2")}
            </span>
          </h2>

          <p className="mt-6 text-base md:text-lg text-slate-600 leading-relaxed max-w-2xl">
            {t("roles.description")}
          </p>
        </motion.div>

        {/* ======================================================
           MOBILE VERSION – STACKED CARDS (NEW DESIGN)
        ====================================================== */}
        {isMobile && (
          <div className="space-y-5 mb-20">
            {roles.map((role, i) => {
              const Icon = ICONS[i] || ArrowRight;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.35 }}
                  className="bg-white border border-slate-200 rounded-xl p-5"
                >
                  <div className="flex items-center gap-4 mb-3">
                    <div
                      className={`w-10 h-10 rounded-lg ${
                        BGS[i] || "bg-slate-50"
                      } flex items-center justify-center`}
                    >
                      <Icon
                        className={`w-5 h-5 ${
                          COLORS[i] || "text-slate-500"
                        }`}
                      />
                    </div>
                    <h3 className="text-base font-bold text-slate-900">
                      {role.title}
                    </h3>
                  </div>

                  <p className="text-sm text-slate-600 leading-relaxed">
                    {role.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* ======================================================
           DESKTOP VERSION – GRID CARDS (ORIGINAL STYLE)
        ====================================================== */}
        {!isMobile && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-20">
            {roles.map((role, i) => {
              const Icon = ICONS[i] || ArrowRight;

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ delay: i * 0.08, duration: 0.5 }}
                  className="group relative bg-white p-6 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300"
                >
                  <div
                    className={`w-12 h-12 rounded-xl ${
                      BGS[i] || "bg-slate-50"
                    } flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon
                      className={`w-6 h-6 ${
                        COLORS[i] || "text-slate-500"
                      }`}
                    />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-purple-700 transition-colors">
                    {role.title}
                  </h3>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {role.desc}
                  </p>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* ======================================================
           BOTTOM TRUST / CTA (LIGHT MOBILE)
        ====================================================== */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: isMobile ? 0.35 : 0.5 }}
          className="pt-8 border-t border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6 text-slate-500 text-sm"
        >
          <div className="flex items-center gap-2">
            <div className="flex -space-x-2">
              {[
                "https://i.pinimg.com/1200x/14/79/0e/14790ee7e184bd90c856516b733c0efd.jpg",
                "https://i.pinimg.com/736x/61/7b/2e/617b2ec572c867b052f071cd32d02328.jpg",
                "https://i.pinimg.com/1200x/a2/9f/86/a29f86c2f893ed443738a5f8db641007.jpg",
              ].map((src) => (
                <LazyImage
                  key={src}
                  src={src}
                  alt="Partenaire"
                  width={32}
                  height={32}
                  className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white object-cover"
                />
              ))}
            </div>
            <span className="font-medium">
              {t("roles.bottom_partners")}
            </span>
          </div>

          <div className="uppercase tracking-widest text-xs font-semibold">
            {t("roles.bottom_cta")}
          </div>
        </motion.div>

      </div>
    </section>
  );
}
