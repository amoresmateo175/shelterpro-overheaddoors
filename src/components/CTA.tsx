"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section
      id="contact"
      className="bg-[var(--navy)] text-white py-16 text-center"
    >
      <div className="container">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="text-3xl font-bold mb-4"
        >
          Need Garage Door Service?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="mb-6 text-gray-300"
        >
          Contact ShelterPro today for professional and reliable service.
        </motion.p>

        <motion.a
          href="#"
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary inline-block"
        >
          Request Service
        </motion.a>
      </div>
    </section>
  );
}