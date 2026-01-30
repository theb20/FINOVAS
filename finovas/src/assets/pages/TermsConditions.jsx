import { useLanguage } from "../context/LanguageContext.jsx";
import useIsMobile from "../lib/useMobile.js";

export default function TermsConditions() {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const page = t("legalPages.terms");

  return (
    <main className="bg-white text-slate-900">

      {/* ======================================================
         HERO / BANNER
      ====================================================== */}
      <section
        className={`relative overflow-hidden text-white
          ${isMobile
            ? "bg-slate-900 py-20"
            : "bg-gradient-to-br from-emerald-900 via-teal-900 to-slate-900 py-28"
          }`}
      >
        {/* Decorative blur – desktop only */}
        {!isMobile && (
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute -top-12 left-10 h-52 w-52 rounded-full bg-emerald-500/40 blur-3xl" />
            <div className="absolute -bottom-16 right-8 h-60 w-60 rounded-full bg-teal-400/40 blur-3xl" />
          </div>
        )}

        <div className="relative max-w-5xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-emerald-200">
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

        {/* Meta */}
        <div className="mb-10">
          <p className="text-xs uppercase tracking-widest text-emerald-700">
            {page.banner.eyebrow}
          </p>
          <p className="mt-2 text-sm text-slate-500">
            {page.updated}
          </p>
        </div>

        <div className="space-y-12 text-slate-700 leading-relaxed text-sm md:text-base">

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-slate-900">
              {page.sections.object.title}
            </h2>
            <p className="mt-3">
              {page.sections.object.body}
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-slate-900">
              {page.sections.access.title}
            </h2>
            <p className="mt-3">
              {page.sections.access.body}
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-slate-900">
              {page.sections.ip.title}
            </h2>
            <p className="mt-3">
              {page.sections.ip.body}
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-slate-900">
              {page.sections.liability.title}
            </h2>
            <p className="mt-3">
              {page.sections.liability.body}
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-slate-900">
              {page.sections.links.title}
            </h2>
            <p className="mt-3">
              {page.sections.links.body}
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-slate-900">
              {page.sections.data.title}
            </h2>
            <p className="mt-3">
              {page.sections.data.body}
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-slate-900">
              {page.sections.law.title}
            </h2>
            <p className="mt-3">
              {page.sections.law.body}
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
