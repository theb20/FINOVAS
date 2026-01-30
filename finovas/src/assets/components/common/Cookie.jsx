import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Cookie, Settings } from "lucide-react";

const STORAGE_KEY = "cookie_preferences_v1";

const DEFAULT_PREFS = {
  necessary: true,
  analytics: true,
  functional: true,
  marketing: true,
};

export default function CookieConsentEnterprise() {
  const [prefs, setPrefs] = useState(null);
  const [showBanner, setShowBanner] = useState(false);
  const [showSettings, setShowSettings] = useState(false);

  // Init
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      setPrefs(JSON.parse(stored));
    } else {
      setShowBanner(true);
    }
  }, []);

  const savePrefs = (newPrefs) => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newPrefs));
    setPrefs(newPrefs);
    setShowBanner(false);
    setShowSettings(false);
  };

  const acceptAll = () => {
    savePrefs({
      necessary: true,
      analytics: true,
      functional: true,
      marketing: true,
    });
  };

  const refuseAll = () => {
    savePrefs({
      necessary: true,
      analytics: false,
      functional: false,
      marketing: false,
    });
  };

  return (
    <>
      {/* Bouton flottant (réouverture du centre de préférences) */}
      {prefs && (
        <button
          onClick={() => setShowSettings(true)}
          aria-label="Ouvrir le centre de préférences cookies"
          className="fixed bottom-6 left-6 z-40 flex items-center gap-2 px-3 py-2 rounded-full bg-violet-700 text-white text-xs font-semibold shadow-lg hover:bg-violet-800 transition-colors"
        >
          <Settings size={16} />
          Gérer les cookies
        </button>
      )}

      {/* Bandeau initial (consentement) */}
      <AnimatePresence>
        {showBanner && (
          <motion.div
            initial={{ y: 100 }}
            animate={{ y: 0 }}
            exit={{ y: 100 }}
            transition={{ duration: 0.4 }}
            role="dialog"
            aria-label="Bandeau de consentement aux cookies"
            className="fixed bottom-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-t border-gray-200 shadow-2xl"
          >
            <div className="max-w-7xl mx-auto px-6 py-5 grid gap-4 md:grid-cols-[1fr_auto] md:items-center">
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-violet-700 text-white">
                  <Cookie size={18} />
                </div>
                <div>
                  <p className="text-sm text-gray-800 font-medium">
                    Nous utilisons des cookies nécessaires au fonctionnement du site et, avec votre accord, des cookies pour la mesure d’audience et l’amélioration de nos services.
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    Vous pouvez modifier vos préférences à tout moment. Consultez notre <a href="/privacy" className="underline hover:text-gray-700">politique de confidentialité</a>.
                  </p>
                </div>
              </div>
              <div className="flex flex-wrap gap-2 md:justify-end">
                <button
                  onClick={refuseAll}
                  className="px-4 py-2 rounded-md text-sm font-semibold border border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Tout refuser
                </button>
                <button
                  onClick={() => setShowSettings(true)}
                  className="px-4 py-2 rounded-md text-sm font-semibold border border-gray-300 text-gray-700 hover:bg-gray-50"
                >
                  Paramétrer
                </button>
                <button
                  onClick={acceptAll}
                  className="px-5 py-2 rounded-md text-sm font-semibold bg-violet-700 text-white hover:bg-violet-800"
                >
                  Tout accepter
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Centre de préférences (modal) */}
      <AnimatePresence>
        {showSettings && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label="Centre de préférences cookies"
            className="fixed inset-0 z-50 bg-black/40 backdrop-blur-sm flex items-center justify-center px-4"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="bg-white rounded-2xl max-w-xl w-full p-6 shadow-2xl border border-gray-100"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-violet-700 text-white">
                  <Settings size={16} />
                </div>
                <h2 className="text-lg font-semibold">Centre de préférences</h2>
              </div>
              <p className="text-sm text-gray-600 mb-4">
                Choisissez les catégories de cookies que vous souhaitez activer. Les cookies nécessaires sont toujours actifs.
              </p>

              {[
                { key: "necessary", title: "Cookies nécessaires", desc: "Indispensables au fonctionnement du site", locked: true },
                { key: "analytics", title: "Cookies analytiques", desc: "Mesure d’audience et performance" },
                { key: "functional", title: "Cookies fonctionnels", desc: "Amélioration de l’expérience utilisateur" },
                { key: "marketing", title: "Cookies marketing", desc: "Personnalisation des contenus" },
              ].map(({ key, title, desc, locked }) => (
                <div key={key} className="flex items-center justify-between py-4 border-b">
                  <div className="max-w-md">
                    <p className="font-medium text-gray-900">{title}</p>
                    <p className="text-sm text-gray-500">{desc}</p>
                  </div>
                  <label className={`relative inline-flex items-center cursor-pointer ${locked ? "opacity-60 cursor-not-allowed" : ""}`}>
                    <input
                      type="checkbox"
                      className="sr-only peer"
                      checked={(prefs || DEFAULT_PREFS)[key]}
                      disabled={locked}
                      onChange={() =>
                        setPrefs({
                          ...(prefs || DEFAULT_PREFS),
                          [key]: !(prefs || DEFAULT_PREFS)[key],
                        })
                      }
                    />
                    <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none rounded-full peer peer-checked:bg-violet-700 transition-colors"></div>
                    <span className="absolute left-1 top-1 h-4 w-4 rounded-full bg-white shadow transition-transform peer-checked:translate-x-5"></span>
                  </label>
                </div>
              ))}

              <div className="mt-6 flex flex-wrap justify-end gap-2">
                <button onClick={refuseAll} className="px-4 py-2 rounded-md text-sm font-semibold border border-gray-300 text-gray-700 hover:bg-gray-50">
                  Tout refuser
                </button>
                <button onClick={acceptAll} className="px-4 py-2 rounded-md text-sm font-semibold border border-gray-300 text-gray-700 hover:bg-gray-50">
                  Tout accepter
                </button>
                <button
                  onClick={() => savePrefs(prefs || DEFAULT_PREFS)}
                  className="px-5 py-2 rounded-md text-sm font-semibold bg-violet-700 text-white hover:bg-violet-800"
                >
                  Enregistrer
                </button>
              </div>
              <p className="mt-4 text-xs text-gray-500">
                Dernière mise à jour: Jan 2026 · <a href="/privacy" className="underline hover:text-gray-700">Politique de confidentialité</a>
              </p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
