"use client";

import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="container text-center py-20">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-6"
      >
        Reliable Overhead Door Solutions
      </motion.h1>

      <motion.p
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-lg text-gray-600 mb-6"
      >
        Installation, repair, and automation for residential and commercial garage doors.
      </motion.p>

      <motion.a
        href="#contact"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.4 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
        className="btn-primary inline-block"
      >
        Request Service
      </motion.a>
    </section>
  );
}