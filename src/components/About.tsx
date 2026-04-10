"use client";

import { motion } from "framer-motion";

export default function About() {
  return (
    <section id="about" className="container py-16">
      <motion.h2
        initial={{ opacity: 0, x: -40 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="text-3xl font-bold mb-6"
      >
        Why Overhead Door Services Matter
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        className="text-gray-600 mb-4"
      >
        Overhead garage doors are essential for both residential and commercial
        properties. They provide security, energy efficiency, and operational
        convenience in everyday use.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="text-gray-600 mb-4"
      >
        A properly installed and maintained door protects valuable assets,
        improves workflow in commercial environments, and enhances safety for
        families and employees.
      </motion.p>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="text-gray-600"
      >
        At ShelterPro Overhead Doors, we ensure every system operates smoothly,
        safely, and efficiently for long-term reliability.
      </motion.p>
    </section>
  );
}