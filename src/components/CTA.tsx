"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="bg-[var(--navy)] text-white py-20 text-center relative overflow-hidden">
      
      {/* floating glow */}
      <motion.div
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute w-72 h-72 bg-[var(--gold)] opacity-10 rounded-full blur-3xl top-0 left-1/2 -translate-x-1/2"
      />

      <div className="container relative">
        <h2 className="text-3xl font-bold mb-4">
          Need Garage Door Service?
        </h2>

        <p className="mb-6 text-gray-300">
          Contact ShelterPro today for reliable and professional solutions.
        </p>

        <motion.a
          href="#"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary inline-block"
        >
          Request Service
        </motion.a>
      </div>
    </section>
  );
}