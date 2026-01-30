import { Mail, Globe, ShieldCheck, FileText, Briefcase } from "lucide-react";
import { Link } from "react-router-dom";
import { useLanguage } from "../../context/LanguageContext.jsx";

export default function Footer() {
  const { t } = useLanguage();
  const columns = t('footer.columns');
  const legalLinks = t('footer.legal_links');
  return (
    <footer className="relative w-full bg-[#050209] text-white border-t border-white/10">

      {/* MAIN FOOTER */}
      <div className="max-w-7xl mx-auto px-6 py-24 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-6 gap-14">

        {/* Brand */}
        <div className="lg:col-span-2 space-y-6">
          <h3 className="text-2xl font-semibold tracking-tight">
            {t('footer.brand_title')}
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed max-w-md">
            {t('footer.brand_desc')}
          </p>

          
        </div>

        {/* Column 1 */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-300 mb-6">
            {columns[0].title}
          </h4>
          <ul className="space-y-4 text-sm text-gray-400">
            {columns[0].items.map((item, i) => (
              <li key={i} className="hover:text-white transition">{item}</li>
            ))}
          </ul>
        </div>

        {/* Column 2 */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-300 mb-6">
            {columns[1].title}
          </h4>
          <ul className="space-y-4 text-sm text-gray-400">
            {columns[1].items.map((item, i) => (
              <li key={i} className="hover:text-white transition">{item}</li>
            ))}
          </ul>
        </div>

        {/* Column 3 */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-300 mb-6">
            {columns[2].title}
          </h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-center gap-2 hover:text-white transition">
              <FileText size={14} /> {columns[2].items[0]}
            </li>
            <li className="flex items-center gap-2 hover:text-white transition">
              <Briefcase size={14} /> {columns[2].items[1]}
            </li>
            <li className="flex items-center gap-2 hover:text-white transition">
              <ShieldCheck size={14} /> {columns[2].items[2]}
            </li>
            <li className="hover:text-white transition">{columns[2].items[3]}</li>
          </ul>
        </div>

        {/* Column 4 */}
        <div>
          <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-300 mb-6">
            {columns[3].title}
          </h4>
          <ul className="space-y-4 text-sm text-gray-400">
            <li className="flex items-center gap-2">
              <Mail size={14} /> {columns[3].items[0]}
            </li>
            <li>{columns[3].items[1]}</li>
            <li>{columns[3].items[2]}</li>
            <li>{columns[3].items[3]}</li>
          </ul>
        </div>

      </div>

      {/* LEGAL BAR */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-8 text-xs uppercase tracking-widest text-gray-500">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <span>{t('footer.legal.left')}</span>
            <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-[10px] tracking-[0.25em] text-gray-400">
              {legalLinks.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  className="hover:text-white transition"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
            <span>{t('footer.legal.right')}</span>
          </div>
          <div className="mt-4 text-center text-[10px] tracking-[0.25em] text-gray-600">
            {t('footer.legal.middle')}
          </div>
        </div>
      </div>

    </footer>
  );
}
