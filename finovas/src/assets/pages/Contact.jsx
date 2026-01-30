import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "emailjs-com";
import {
  Mail,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import useIsMobile from "../lib/useMobile";

const localeMap = {
  fr: "fr-FR",
  en: "en-US",
  es: "es-ES",
  de: "de-DE",
};

export default function ContactPro() {
  const { t, currentLang } = useLanguage();
  const isMobile = useIsMobile();
  const page = t("contactPage");

  /* --------------------------------------------------
     VALIDATION SCHEMA
  -------------------------------------------------- */
  const schema = z.object({
    name: z.string().min(1, page.form.errors.name),
    email: z.string().email(page.form.errors.email),
    company: z.string().optional(),
    phone: z.string().optional(),
    topic: z.string().min(1, page.form.errors.topic),
    message: z.string().min(20, page.form.errors.message),
    consent: z.literal(true, {
      errorMap: () => ({ message: page.form.errors.consent }),
    }),
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({ resolver: zodResolver(schema) });

  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;
    if (publicKey) emailjs.init(publicKey);
  }, []);

  /* --------------------------------------------------
     SUBMIT
  -------------------------------------------------- */
  const onSubmit = async (data) => {
    setSending(true);
    setErrorMessage("");

    try {
      const locale = localeMap[currentLang?.code] || "fr-FR";
      const submittedAt = new Date().toLocaleString(locale, {
        dateStyle: "medium",
        timeStyle: "short",
      });

      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          ...data,
          submitted_at: submittedAt,
          site_link: window.location.origin,
          to_email: import.meta.env.VITE_CONTACT_TO_EMAIL,
        }
      );

      setSuccess(true);
      reset();
      setTimeout(() => setSuccess(false), 5000);
    } catch {
      setErrorMessage(page.status.error_body);
    } finally {
      setSending(false);
    }
  };

  /* --------------------------------------------------
     INPUT STYLES
  -------------------------------------------------- */
  const inputBase =
    "w-full rounded-xl border-2 px-4 py-3.5 focus:outline-none focus:ring-2 focus:ring-purple-900/20 transition";
  const inputOk = "border-slate-200 bg-white";
  const inputError = "border-red-400 bg-red-50";

  return (
    <section className="w-full bg-slate-950 text-white">

      {/* ======================================================
         HERO
      ====================================================== */}
      <div className="relative overflow-hidden">
        {!isMobile && (
          <>
            <img
              src="/wallpaper/objectif.webp"
              alt="Contact Finovas"
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950/95 via-slate-950/85 to-slate-900/60" />
          </>
        )}

        <div className="relative max-w-6xl mx-auto px-6 py-28 lg:py-28 text-center">
          <motion.div
            initial={{ opacity: 0, y: isMobile ? 12 : 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: isMobile ? 0.4 : 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-xs font-semibold mb-6">
              <Mail size={14} />
              {page.hero.badge}
            </div>

            <h1 className="text-4xl lg:text-6xl font-bold mb-6">
              {page.hero.title}
            </h1>

            <p className="text-base lg:text-lg text-white/70 max-w-2xl mx-auto">
              {page.hero.description}
            </p>
          </motion.div>
        </div>
      </div>

      {/* ======================================================
         FORM
      ====================================================== */}
      <div className="bg-slate-50 text-slate-900">
        <div className="max-w-3xl mx-auto px-6 py-20">

          {/* SUCCESS */}
          <AnimatePresence>
            {success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-8 rounded-xl border border-emerald-200 bg-emerald-50 px-6 py-4 flex gap-3"
              >
                <CheckCircle className="text-emerald-600" />
                <div>
                  <p className="font-semibold text-emerald-900">
                    {page.status.success_title}
                  </p>
                  <p className="text-sm text-emerald-700">
                    {page.status.success_body}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* ERROR */}
          <AnimatePresence>
            {errorMessage && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-8 rounded-xl border border-red-200 bg-red-50 px-6 py-4 flex gap-3"
              >
                <AlertCircle className="text-red-600" />
                <div>
                  <p className="font-semibold text-red-900">
                    {page.status.error_title}
                  </p>
                  <p className="text-sm text-red-700">
                    {errorMessage}
                  </p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          <form
            id="contact-form"
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white rounded-3xl border border-slate-200 p-8 lg:p-10 shadow-xl space-y-6"
          >
            <h2 className="text-3xl font-bold text-slate-900">
              {page.form.title}
            </h2>
            <p className="text-slate-600">
              {page.form.description}
            </p>

            {/* NAME / EMAIL */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  {page.form.labels.name} *
                </label>
                <input
                  {...register("name")}
                  className={`${inputBase} ${errors.name ? inputError : inputOk}`}
                  placeholder={page.form.placeholders.name}
                />
                {errors.name && (
                  <p className="text-sm text-red-600 mt-2">
                    {errors.name.message}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  {page.form.labels.email} *
                </label>
                <input
                  type="email"
                  {...register("email")}
                  className={`${inputBase} ${errors.email ? inputError : inputOk}`}
                  placeholder={page.form.placeholders.email}
                />
                {errors.email && (
                  <p className="text-sm text-red-600 mt-2">
                    {errors.email.message}
                  </p>
                )}
              </div>
            </div>

            {/* COMPANY / PHONE */}
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold mb-2">
                  {page.form.labels.company}
                </label>
                <input
                  {...register("company")}
                  className={`${inputBase} ${inputOk}`}
                  placeholder={page.form.placeholders.company}
                />
              </div>

              <div>
                <label className="block text-sm font-semibold mb-2">
                  {page.form.labels.phone}
                </label>
                <input
                  type="tel"
                  {...register("phone")}
                  className={`${inputBase} ${inputOk}`}
                  placeholder={page.form.placeholders.phone}
                />
              </div>
            </div>

            {/* TOPIC */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                {page.form.labels.topic} *
              </label>
              <select
                {...register("topic")}
                className={`${inputBase} ${errors.topic ? inputError : inputOk}`}
              >
                {page.form.topics.map((topic) => (
                  <option key={topic.value || "empty"} value={topic.value}>
                    {topic.label}
                  </option>
                ))}
              </select>
              {errors.topic && (
                <p className="text-sm text-red-600 mt-2">
                  {errors.topic.message}
                </p>
              )}
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block text-sm font-semibold mb-2">
                {page.form.labels.message} *
              </label>
              <textarea
                rows={6}
                {...register("message")}
                className={`${inputBase} resize-none ${
                  errors.message ? inputError : inputOk
                }`}
                placeholder={page.form.placeholders.message}
              />
              {errors.message && (
                <p className="text-sm text-red-600 mt-2">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* CONSENT */}
            <div>
              <label className="flex items-start gap-3 text-sm text-slate-600">
                <input
                  type="checkbox"
                  {...register("consent")}
                  className="mt-1 h-4 w-4 rounded border-slate-300 text-purple-900"
                />
                <span>{page.form.consent}</span>
              </label>
              {errors.consent && (
                <p className="text-sm text-red-600 mt-2">
                  {errors.consent.message}
                </p>
              )}
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              disabled={sending}
              className="w-full inline-flex items-center justify-center gap-3 rounded-full bg-purple-900 px-10 py-4 font-semibold text-white shadow-lg hover:bg-purple-800 transition disabled:opacity-50"
            >
              {sending ? page.form.sending : page.form.submit}
              {!sending && <Send size={18} />}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
