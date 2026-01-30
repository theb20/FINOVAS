import { motion } from "framer-motion";

export default function Logo({ className = "", withBackground = false, size = 150, src = "/favicon/logo.png" }) {
  const wrapperClass = withBackground
    ? "inline-flex items-center justify-center rounded-2xl bg-white/10 backdrop-blur-sm px-6 py-4"
    : "inline-flex items-center justify-center";

  const width = typeof size === 'number' ? `${size}px` : size;

  return (
    <div className={`${wrapperClass} ${className}`.trim()}>
      <div className="relative" style={{ width }}>
        {/* Logo Image */}
        <motion.img
          src={src}
          alt="Finovas Logo"
          className="w-full h-auto drop-shadow-md relative z-10"
          initial={{ opacity: 0, scale: 0.8, y: 10, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, y: 0, rotate: 0 }}
          transition={{ 
            duration: 0.8, 
            ease: [0.34, 1.56, 0.64, 1]
          }}
          whileHover={{ scale: 1.05 }}
        />

        {/* Shine Effect Overlay */}
        <div 
          className="absolute inset-0 z-20 pointer-events-none"
          style={{
            maskImage: `url(${src})`,
            maskSize: "contain",
            maskRepeat: "no-repeat",
            maskPosition: "center",
            WebkitMaskImage: `url(${src})`,
            WebkitMaskSize: "contain",
            WebkitMaskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
          }}
        >
          <motion.div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(120deg, transparent 30%, rgba(255, 255, 255, 0.6) 50%, transparent 70%)",
              backgroundSize: "200% 100%",
            }}
            animate={{ backgroundPosition: ["100% 0", "-100% 0"] }}
            transition={{ 
              repeat: Infinity, 
              duration: 3, 
              repeatDelay: 2,
              ease: "linear" 
            }}
          />
        </div>
      </div>
    </div>
  );
}
