"use client";

import { motion } from "framer-motion";

export default function Hero() {
  const scrollToMenu = () => {
    document.getElementById("menu-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="min-h-[88vh] flex flex-col items-center justify-center text-center bg-gradient-to-br from-black via-zinc-900 to-black px-6">
      <motion.h1
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-6xl md:text-7xl font-extrabold bg-gradient-to-r from-orange-400 to-red-500 bg-clip-text text-transparent"
      >
        Halal Oven
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="mt-5 text-lg text-gray-400 max-w-md"
      >
        Premium Halal Pizza. Fast. Fresh. Simple.
      </motion.p>

      <motion.button
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.5 }}
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.97 }}
        onClick={scrollToMenu}
        className="mt-8 bg-gradient-to-r from-orange-500 to-red-600 px-10 py-3.5 rounded-full font-semibold text-white shadow-lg shadow-orange-500/20 transition-shadow hover:shadow-orange-500/40"
      >
        Order Now
      </motion.button>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-4 text-gray-500 text-sm"
      >
        Call: 7807000202
      </motion.p>
    </div>
  );
}