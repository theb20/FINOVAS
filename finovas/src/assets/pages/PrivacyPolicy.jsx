import { useLanguage } from "../context/LanguageContext.jsx";
import useIsMobile from "../lib/useMobile.js";

export default function PrivacyPolicy() {
  const { t } = useLanguage();
  const isMobile = useIsMobile();
  const page = t("legalPages.privacy");

  return (
    <main className="bg-white text-slate-900">

      {/* ======================================================
         HERO / BANNER
      ====================================================== */}
      <section
        className={`relative overflow-hidden text-white
          ${isMobile
            ? "bg-slate-900 py-20"
            : "bg-gradient-to-br from-purple-900 via-indigo-900 to-slate-900 py-28"
          }`}
      >
        {/* Decorative blur – desktop only */}
        {!isMobile && (
          <div className="absolute inset-0 opacity-30 pointer-events-none">
            <div className="absolute -top-10 -left-10 h-48 w-48 rounded-full bg-purple-500/40 blur-3xl" />
            <div className="absolute -bottom-16 right-10 h-56 w-56 rounded-full bg-indigo-400/40 blur-3xl" />
          </div>
        )}

        <div className="relative max-w-5xl mx-auto px-6">
          <p className="text-xs uppercase tracking-widest text-purple-200">
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
          <p className="text-xs uppercase tracking-widest text-purple-700">
            {page.banner.eyebrow}
          </p>
          <p className="mt-2 text-sm text-slate-500">
            {page.updated}
          </p>
        </div>

        <div className="space-y-12 text-slate-700 leading-relaxed text-sm md:text-base">

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-slate-900">
              {page.sections.controller.title}
            </h2>
            <p className="mt-3">
              {page.sections.controller.body}
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-slate-900">
              {page.sections.data.title}
            </h2>
            <ul className="mt-3 list-disc pl-5 space-y-2">
              {page.sections.data.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-slate-900">
              {page.sections.purposes.title}
            </h2>
            <ul className="mt-3 list-disc pl-5 space-y-2">
              {page.sections.purposes.items.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
            <p className="mt-3">
              {page.sections.purposes.body}
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-slate-900">
              {page.sections.recipients.title}
            </h2>
            <p className="mt-3">
              {page.sections.recipients.body}
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
              {page.sections.rights.title}
            </h2>
            <p className="mt-3">
              {page.sections.rights.body}
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-slate-900">
              {page.sections.cookies.title}
            </h2>
            <p className="mt-3">
              {page.sections.cookies.body}
            </p>
          </section>

          <section>
            <h2 className="text-lg md:text-xl font-semibold text-slate-900">
              {page.sections.updates.title}
            </h2>
            <p className="mt-3">
              {page.sections.updates.body}
            </p>
          </section>

        </div>
      </section>
    </main>
  );
}
