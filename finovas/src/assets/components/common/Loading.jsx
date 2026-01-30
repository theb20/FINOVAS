import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-white">
      <div className="flex flex-col items-center">

        {/* Logo + ring */}
        <div className="relative w-20 h-20 flex items-center justify-center">
          
          {/* Soft rotating ring */}
          <motion.div
            className="absolute inset-0 rounded-full border border-violet-200"
            animate={{ rotate: 360 }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "linear",
            }}
          />

          {/* Logo */}
          <img
            src="/favicon/favicon.svg"
            alt="Finovas"
            className="w-10 h-10 object-contain"
          />
        </div>

        {/* Brand */}
        <motion.h2
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mt-5 text-sm font-semibold tracking-widest text-slate-900"
        >
          FINOVAS
        </motion.h2>

        {/* Minimal loading indicator */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: 24 }}
          transition={{
            duration: 1.2,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut",
          }}
          className="mt-3 h-[2px] rounded-full bg-violet-600"
        />
      </div>
    </div>
  );
}
