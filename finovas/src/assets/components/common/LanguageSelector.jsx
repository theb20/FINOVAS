import { useState, useRef, useEffect } from "react";
import { useLanguage } from "../../context/LanguageContext";
import { ChevronDown, Globe } from "lucide-react";

export default function LanguageSelector({ variant = "desktop" }) {
  const { currentLang, setLanguage, languages } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  const language = currentLang.code;

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  if (variant === "mobile") {
    return (
      <div className="flex gap-3">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium transition-colors ${
              language === lang.code
                ? "bg-violet-50 border-violet-200 text-violet-700"
                : "bg-white border-gray-200 text-gray-600 hover:bg-gray-50"
            }`}
          >
            <img
              src={lang.flag}
              alt={lang.name}
              className="w-5 h-auto rounded-sm object-cover"
            />
            {lang.code.toUpperCase()}
          </button>
        ))}
      </div>
    );
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-violet-800 transition-colors py-2"
      >
        <Globe color="#fff" size={16} />
        <span className="text-white uppercase">{language}</span>
        <ChevronDown
        color="#fff"
          size={14}
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div className="absolute right-0 top-full mt-2 w-40 rounded-xl bg-white border border-gray-100 shadow-lg py-1 z-50 overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => {
                setLanguage(lang.code);
                setIsOpen(false);
              }}
              className={`w-full text-left px-4 py-2.5 text-sm flex items-center gap-3 hover:bg-gray-50 transition-colors ${
                language === lang.code ? "bg-violet-50 text-violet-700 font-medium" : "text-gray-700"
              }`}
            >
              <img
                src={lang.flag}
                alt={lang.name}
                className="w-5 h-auto rounded-sm shadow-sm object-cover"
              />
              {lang.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
