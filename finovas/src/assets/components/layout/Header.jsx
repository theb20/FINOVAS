import { useState } from "react";
import { 
  ChevronDown, 
  Menu, 
  X, 
  Smartphone, 
  Globe, 
  CreditCard, 
  Shield, 
  Activity, 
  Server, 
  Zap,
  Users,
  ArrowRight
} from "lucide-react";
import Logo from "../common/Logo.jsx";
import LanguageSelector from "../common/LanguageSelector.jsx";
import { useLanguage } from "../../context/LanguageContext.jsx";

export default function HeaderFinovasPillMega() {
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolutionsOpen, setMobileSolutionsOpen] = useState(false);
  const { t } = useLanguage();

  return (
    <header className="fixed top-0 left-0 right-0 z-50  ">
      <div className="max-w-7xl mx-auto pe-6 lg:px-6 h-[72px] flex items-center justify-between">

        {/* Logo */}
        <a href="/" className="mt-4 block">
          <Logo size={220} />
        </a>

        {/* CENTER PILL NAV */}
        <nav className="hidden lg:flex items-center bg-white border border-black/10 rounded-full px-2 py-1 shadow-sm relative">
          <a href="/" className="px-5 py-2 text-sm font-medium text-black hover:text-violet-800 transition-colors">
            {t('header.accueil')}
          </a>

          {/* Mega trigger */}
          <button
            onMouseEnter={() => setMegaOpen(true)}
            onClick={() => setMegaOpen(!megaOpen)}
            className="px-5 py-2 flex items-center gap-1 text-sm font-medium text-black hover:text-violet-800 transition-colors outline-none"
          >
            {t('header.solutions')}
            <ChevronDown size={14} className={`transition-transform duration-200 ${megaOpen ? "rotate-180" : ""}`} />
          </button>

          <a href="/pricing" className="px-5 py-2 text-sm font-medium text-black hover:text-violet-800 transition-colors">
            {t('header.pricing')}
          </a>

          {/* CTA */}
          <a
            href="/contact"
            className="ml-1 px-5 py-2 rounded-full bg-violet-900 text-white text-sm font-medium hover:bg-violet-800 transition-colors shadow-md hover:shadow-lg"
          >
            {t('header.contact')}
          </a>
        </nav>

        {/* Right */}
        <div className="hidden lg:flex items-center ms-[10%] gap-6 text-sm text-gray-600 font-medium">
          <LanguageSelector />
        </div>

        {/* Mobile */}
        <button className="lg:hidden text-white" onClick={() => setMobileOpen(true)}>
          <Menu />
        </button>
      </div>

      {/* MEGA MENU */}
      <div
        onMouseLeave={() => setMegaOpen(false)}
        className={`absolute top-[72px] left-0 right-0 mx-6 rounded-3xl bg-black/40 backdrop-blur-md border-t border-black/10 shadow-xl hidden lg:block w-full transition-all duration-200 ease-in-out origin-top ${
          megaOpen 
            ? "opacity-100 translate-y-0 visible" 
            : "opacity-0 -translate-y-2 invisible"
        }`}
      >
            <div className="container flex items-center justify-center  mx-6 rounded-xl px-6 py-12 grid grid-cols-4 gap-10 text-sm text-white">

          {/* Column 1 */}
              <div>
                <p className="uppercase text-xs tracking-widest text-gray-400 mb-6 font-semibold flex items-center gap-2">
                  <Globe size={14} /> {t('header.telecoms')}
                </p>
                <ul className="space-y-4">
                  <li>
                    <a href="/solutions/dcb" className="group flex items-start gap-3 hover:text-violet-700 transition-colors">
                      <Smartphone className="w-5 h-5 text-gray-400 group-hover:text-violet-700 transition-colors" />
                      <div>
                        <span className="block font-medium">{t('header.dcb')}</span>
                        <span className="text-xs text-gray-500">{t('header.dcb_desc')}</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="/solutions/sms" className="group flex items-start gap-3 hover:text-violet-700 transition-colors">
                      <Zap className="w-5 h-5 text-gray-400 group-hover:text-violet-700 transition-colors" />
                      <div>
                        <span className="block font-medium">{t('header.sms')}</span>
                        <span className="text-xs text-gray-500">{t('header.sms_desc')}</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="/solutions/distribution" className="group flex items-start gap-3 hover:text-violet-700 transition-colors">
                      <Users className="w-5 h-5 text-gray-400 group-hover:text-violet-700 transition-colors" />
                      <div>
                        <span className="block font-medium">{t('header.distribution')}</span>
                        <span className="text-xs text-gray-500">{t('header.distribution_desc')}</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 2 */}
              <div>
                <p className="uppercase text-xs tracking-widest text-gray-400 mb-6 font-semibold flex items-center gap-2">
                  <CreditCard size={14} /> {t('header.fintech')}
                </p>
                <ul className="space-y-4">
                  <li>
                    <a href="/solutions/momo" className="group flex items-start gap-3 hover:text-violet-700 transition-colors">
                      <Smartphone className="w-5 h-5 text-gray-400 group-hover:text-violet-700 transition-colors" />
                      <div>
                        <span className="block font-medium">{t('header.momo')}</span>
                        <span className="text-xs text-gray-500">{t('header.momo_desc')}</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="/solutions/gateway" className="group flex items-start gap-3 hover:text-violet-700 transition-colors">
                      <Server className="w-5 h-5 text-gray-400 group-hover:text-violet-700 transition-colors" />
                      <div>
                        <span className="block font-medium">{t('header.gateway')}</span>
                        <span className="text-xs text-gray-500">{t('header.gateway_desc')}</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="/solutions/transactions" className="group flex items-start gap-3 hover:text-violet-700 transition-colors">
                      <Activity className="w-5 h-5 text-gray-400 group-hover:text-violet-700 transition-colors" />
                      <div>
                        <span className="block font-medium">{t('header.transactions')}</span>
                        <span className="text-xs text-gray-500">{t('header.transactions_desc')}</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Column 3 */}
              <div>
                <p className="uppercase text-xs tracking-widest text-gray-400 mb-6 font-semibold flex items-center gap-2">
                  <Server size={14} /> {t('header.platforms')}
                </p>
                <ul className="space-y-4">
                  <li>
                    <a href="/solutions/api" className="group flex items-start gap-3 hover:text-violet-700 transition-colors">
                      <Zap className="w-5 h-5 text-gray-400 group-hover:text-violet-700 transition-colors" />
                      <div>
                        <span className="block font-medium">{t('header.api')}</span>
                        <span className="text-xs text-gray-500">{t('header.api_desc')}</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="/solutions/reporting" className="group flex items-start gap-3 hover:text-violet-700 transition-colors">
                      <Activity className="w-5 h-5 text-gray-400 group-hover:text-violet-700 transition-colors" />
                      <div>
                        <span className="block font-medium">{t('header.reporting')}</span>
                        <span className="text-xs text-gray-500">{t('header.reporting_desc')}</span>
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="/solutions/security" className="group flex items-start gap-3 hover:text-violet-700 transition-colors">
                      <Shield className="w-5 h-5 text-gray-400 group-hover:text-violet-700 transition-colors" />
                      <div>
                        <span className="block font-medium">{t('header.security')}</span>
                        <span className="text-xs text-gray-500">{t('header.security_desc')}</span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>

              {/* Highlight */}
              <a href="/ecosystem" className="block group">
                <div 
                  className="relative overflow-hidden rounded-3xl text-white shadow-[0_12px_40px_rgba(0,0,0,0.45)] ring-1 ring-black/60 bg-neutral-950 transition-transform duration-300 group-hover:-translate-y-1"
                >
                  <div className="relative min-h-[240px] rounded-[1.6rem] overflow-hidden">
                    <div className="relative h-32">
                      <img
                        src="/wallpaper/card.webp"
                        alt="Finovas highlight background"
                        className="absolute inset-0 h-full w-full object-cover"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
                      <div className="absolute top-3 right-4 text-right">
                        <div className="text-[11px] font-medium text-white/95 tracking-wide">
                          {t('header.highlight_title_1')}
                        </div>
                        <div className="text-[11px] font-medium text-white/95 tracking-wide">
                          {t('header.highlight_title_2')}
                        </div>
                      </div>
                    </div>

                    <div className="relative w-full px-6 py-6">
                      <span className="absolute -top-4 left-0 h-6 w-14 bg-neutral-950 rounded-br-2xl"></span>
                      <div className="mb-6">
                        <div className="text-base font-semibold text-white">
                          {t('header.highlight_hub')}
                        </div>
                        <div className="text-sm text-neutral-400">
                          {t('header.highlight_desc')}
                        </div>
                      </div>
                      <div className="flex items-end justify-between text-white/90">
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-extrabold leading-none">05</span>
                          <span className="text-sm text-neutral-400">Doc</span>
                        </div>
                        <div className="text-sm font-medium">1270 Notes</div>
                      </div>
                    </div>

                    <div className="pointer-events-none absolute -bottom-20 -right-10 h-56 w-56 rounded-full bg-[radial-gradient(circle_at_center,rgba(244,63,94,0.25),transparent_60%)] blur-2xl"></div>
                  </div>
                </div>
              </a>

            </div>
      </div>
      

      {/* MOBILE MENU */}
      <div
        className={`fixed inset-0 bg-white z-50 flex flex-col h-full transition-transform duration-300 ease-in-out ${
          mobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Mobile Header */}
            <div className="flex justify-between items-center p-6 border-b border-gray-100">
              <Logo size={110} src="/favicon/logo-black.png" />
              <button 
                onClick={() => setMobileOpen(false)}
                className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              >
                <X size={24} className="text-violet-700" />
              </button>
            </div>

            {/* Mobile Content */}
            <div className="flex-1 overflow-y-auto px-6 py-6">
              <nav className="space-y-5 text-[17px] text-gray-900 font-semibold">
                <a href="/mission" className="block py-3 border-b border-gray-100">
                  {t('header.accueil')}
                </a>
                
                {/* Mobile Accordion for Solutions */}
                <div>
                  <button 
                    onClick={() => setMobileSolutionsOpen(!mobileSolutionsOpen)}
                    className="flex items-center justify-between w-full py-3 border-b border-gray-100"
                  >
                    <span>{t('header.solutions')}</span>
                    <ChevronDown 
                      size={20} 
                      className={`transition-transform duration-300 ${mobileSolutionsOpen ? "rotate-180" : ""}`} 
                    />
                  </button>
                  
                  <div
                    className={`overflow-hidden transition-all duration-300 ease-in-out ${
                      mobileSolutionsOpen 
                        ? "max-h-[500px] opacity-100" 
                        : "max-h-0 opacity-0"
                    }`}
                  >
                    <div className="pl-4 pt-4 space-y-4 text-base text-gray-600">
                      <div className="space-y-2">
                        <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">{t('header.telecoms')}</p>
                        <a href="/solutions/dcb" className="block py-1">{t('header.dcb')}</a>
                        <a href="/solutions/sms" className="block py-1">{t('header.sms')}</a>
                      </div>
                      <div className="space-y-2">
                        <p className="text-xs uppercase tracking-wider text-gray-400 font-semibold">{t('header.fintech')}</p>
                        <a href="/solutions/momo" className="block py-1">{t('header.momo')}</a>
                        <a href="/solutions/gateway" className="block py-1">{t('header.gateway')}</a>
                      </div>
                    </div>
                  </div>
                </div>

                <a href="/pricing" className="block py-3 border-b border-gray-100">
                  {t('header.pricing')}
                </a>
                <a href="/contact" className="block py-3 border-b border-gray-100">
                  {t('header.contact')}
                </a>
              </nav>

              <div className="mt-10 space-y-4 border-t border-gray-100 pt-8">
                <a
                  href="/contact"
                  className="block w-full text-center bg-violet-700 text-white py-4 rounded-xl font-bold shadow-lg active:scale-95 transition-transform hover:bg-violet-800"
                >
                  {t('header.contact')}
                </a>
              </div>

              {/* Legal Links Mobile */}
              <div className="mt-6 border-t border-gray-100 pt-6">
                 <div className="grid grid-cols-1 gap-4 text-sm font-medium text-gray-500">
                    {t('footer.legal_links').map((item, i) => (
                      <a key={i} href={item.to} className="hover:text-violet-700 transition-colors block py-1">
                        {item.label}
                      </a>
                    ))}
                 </div>
              </div>

              <div className="mt-8 pb-8 flex justify-center">
                <LanguageSelector variant="mobile" />
              </div>
            </div>
      </div>
    </header>
  );
}
