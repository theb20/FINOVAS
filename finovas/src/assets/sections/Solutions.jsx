import { useState } from "react";
import { motion } from "framer-motion";
import {
  CreditCard,
  Zap,
  Layers,
  Smartphone,
  ShieldCheck,
  BarChart3,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import useIsMobile from "../lib/useMobile";

const ICONS = [CreditCard, Zap, Layers, Smartphone, ShieldCheck, BarChart3];
const COLORS = [
  "from-blue-500 to-cyan-400",
  "from-purple-500 to-pink-400",
  "from-amber-500 to-orange-400",
  "from-emerald-500 to-teal-400",
  "from-red-500 to-rose-400",
  "from-indigo-500 to-violet-400",
];

export default function Solutions() {
  const [active, setActive] = useState(0);
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const solutions = t("solutions.items");
  const ActiveIcon = ICONS[active];

  return (
    <section className="relative py-20 bg-[#050209] text-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* ---------- HEADER ---------- */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            {t("solutions.title_prefix")}{" "}
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {t("solutions.title_suffix")}
            </span>
          </h2>
          <p className="text-slate-400 text-lg">
            {t("solutions.intro")}
          </p>
        </motion.div>

        {/* ======================================================
           MOBILE VERSION – STACKED CARDS (NEW DESIGN)
        ====================================================== */}
        {isMobile && (
          <div className="space-y-6">
            {solutions.map((item, i) => {
              const Icon = ICONS[i];

              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.35 }}
                  className="relative rounded-2xl border border-white/10 bg-white/5 p-6"
                >
                  {/* Card header */}
                  <div className="flex items-center gap-4 mb-4">
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-br ${COLORS[i]}
                      flex items-center justify-center`}
                    >
                      <Icon size={22} />
                    </div>
                    <h3 className="text-lg font-semibold">
                      {item.title}
                    </h3>
                  </div>

                  {/* Description */}
                  <p className="text-slate-300 text-sm leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-5">
                    {item.features.map((f, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 text-sm text-slate-300"
                      >
                        <CheckCircle2
                          size={16}
                          className="text-green-400 mt-0.5"
                        />
                        <span>{f}</span>
                      </li>
                    ))}
                  </ul>

                  {/* CTA */}
                  <button className="inline-flex items-center gap-2 text-sm font-medium text-purple-400">
                    {t("solutions.cta")}
                    <ArrowRight size={16} />
                  </button>
                </motion.div>
              );
            })}
          </div>
        )}

        {/* ======================================================
           DESKTOP VERSION – TABS + PANEL (ORIGINAL DESIGN)
        ====================================================== */}
        {!isMobile && (
          <div className="grid lg:grid-cols-12 gap-10">

            {/* Tabs */}
            <div className="lg:col-span-5 flex lg:flex-col gap-2">
              {solutions.map((item, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className={`p-4 rounded-xl text-left transition border
                    ${active === i
                      ? "bg-white/5 border-white/10"
                      : "border-transparent text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                >
                  <span className="font-medium">{item.title}</span>
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="lg:col-span-7 min-h-[420px]">
              <motion.div
                key={active}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.35 }}
                className="relative h-full rounded-3xl border border-white/10
                  bg-white/5 backdrop-blur-xl p-8 md:p-12"
              >
                {/* Glow */}
                <div
                  className={`absolute -top-20 -right-20 w-72 h-72
                  bg-gradient-to-br ${COLORS[active]}
                  opacity-20 blur-[100px]`}
                />

                {/* Icon */}
                <div
                  className={`w-16 h-16 mb-8 rounded-2xl bg-gradient-to-br ${COLORS[active]}
                  flex items-center justify-center`}
                >
                  <ActiveIcon size={32} />
                </div>

                <h3 className="text-3xl font-bold mb-4">
                  {solutions[active].title}
                </h3>

                <p className="text-slate-300 mb-6 leading-relaxed">
                  {solutions[active].description}
                </p>

                <ul className="space-y-3 mb-8">
                  {solutions[active].features.map((f, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300">
                      <CheckCircle2 size={18} className="text-green-400" />
                      {f}
                    </li>
                  ))}
                </ul>

                <button className="flex items-center gap-2 font-medium hover:gap-4 transition-all">
                  {t("solutions.cta")}
                  <ArrowRight size={18} />
                </button>
              </motion.div>
            </div>

          </div>
        )}

      </div>
    </section>
  );
}
