import { useLanguage } from "../context/LanguageContext.jsx";
import useIsMobile from "../lib/useMobile.js";

export default function CookiesPolicy() {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const page = t("legalPages.cookies");

  return (
    <main className="bg-white text-slate-900">

      {/* ======================================================
         HERO / BANNER
      ====================================================== */}
      <section
        className={`relative overflow-hidden text-white
          ${isMobile
            ? "bg-slate-900 py-20"
            : "bg-gradient-to-br from-sky-900 via-blue-900 to-slate-900 py-28"
          }`}
      >
        {/* Decorative blur – desktop only */}
        {!isMobile && (
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute -top-12 left-8 h-52 w-52 rounded-full bg-sky-500/40 blur-3xl" />
            <div className="absolute -bottom-16 right-12 h-60 w-60 rounded-full bg-blue-400/40 blur-3xl" />
          </div>
        )}

        <div className="relative max-w-5xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-sky-200">
            {page.banner.eyebrow}
          </p>

          <h1 className="mt-4 text-3xl md:text-5xl font-semibold leading-tight">
            {page.banner.title}
          </h1>

          <p className="mt-3 text-sm md:text-base text-white/70 max-w-2xl">
            {page.banner.subtitle}
          </p>
        </div>
      </section>

      {/* ======================================================
         CONTENT
      ====================================================== */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-20">

        {/* Meta info */}
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-purple-700">
            {page.banner.eyebrow}
          </p>
          <p className="mt-2 text-sm text-slate-500">
            {page.updated}
          </p>
        </div>

        {/* Legal content */}
        <div className="space-y-12 text-slate-700 leading-relaxed text-sm md:text-base">

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-slate-900">
              {page.sections.definition.title}
            </h2>
            <p className="mt-3">
              {page.sections.definition.body}
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-slate-900">
              {page.sections.types.title}
            </h2>
            <ul className="mt-3 list-disc pl-5 space-y-2">
              {page.sections.types.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-slate-900">
              {page.sections.consent.title}
            </h2>
            <p className="mt-3">
              {page.sections.consent.body}
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-slate-900">
              {page.sections.retention.title}
            </h2>
            <p className="mt-3">
              {page.sections.retention.body}
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-slate-900">
              {page.sections.contact.title}
            </h2>
            <p className="mt-3">
              {page.sections.contact.body}
            </p>
          </section>

        </div>
      </section>
    </main>
  );
}
