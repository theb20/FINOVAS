import React from 'react';
import { Phone, Share2, Mail, MessageCircleMore, Home, User } from 'lucide-react';
import { useLocation, Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function NavScroll() {
  const location = useLocation();
  
  const navItems = [
    { name: 'Accueil', icon: Home, path: '/' },
    { name: 'À propos', icon: User, path: '/about' },
    { name: 'Message', icon: MessageCircleMore, path: '/message' },
    { name: 'Contact', icon: Mail, path: '/contact' },
  ];

  return (
    <div className="fixed right-2 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col items-end gap-3 py-4 pr-2">
      {navItems.map((item) => {
        const isActive = location.pathname === item.path;
        return (
          <Link
            key={item.name}
            to={item.path}
            className="relative group flex items-center justify-end py-2 pl-8 pr-1"
          >
            {/* Label Pro (Apparaît au survol) */}
            <span className={`absolute right-8 mr-2 px-3 py-1 rounded-md text-xs whitespace-nowrap font-medium tracking-wide bg-white/90 backdrop-blur-sm text-slate-800 shadow-sm border border-slate-100 transition-all duration-300 ${
              isActive || 'group-hover:opacity-100 group-hover:translate-x-0' 
                ? 'opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0' 
                : 'opacity-0 -translate-x-2'
            }`}>
              {item.name}
            </span>

            {/* Indicateur visuel (Trait minimaliste) */}
            <div className="relative flex items-center justify-center">
              {/* Ligne de base */}
              <div
                className={`w-[3px] rounded-full transition-all duration-500 ease-out ${
                  isActive 
                    ? 'bg-[#310947] h-8 shadow-[0_0_10px_rgba(0,0,0,0.1)]' 
                    : 'bg-slate-300 h-3 group-hover:bg-slate-500 group-hover:h-5'
                }`}
              />
              
              {/* Point lumineux subtil si actif */}
              {isActive && (
                <motion.div 
                  className="absolute right-full mr-1 w-1 h-1 bg-[#A600FF] rounded-full"
                  initial={{ opacity: 0, x: 5 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                />
              )}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
