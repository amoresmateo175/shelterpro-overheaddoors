"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();

  // Parallax layers
  const yText = useTransform(scrollY, [0, 300], [0, -80]);
  const yBg = useTransform(scrollY, [0, 300], [0, 50]);

  return (
    <section className="relative overflow-hidden py-24">
      
      {/* Background layer */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 bg-gradient-to-b from-white to-gray-100"
      />

      {/* Content */}
      <motion.div
        style={{ y: yText }}
        className="container relative text-center"
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-6">
          Reliable Overhead Door Solutions
        </h1>

        <p className="text-lg text-gray-600 mb-6">
          Installation, repair, and automation for residential and commercial garage doors.
        </p>

        <motion.a
          href="#contact"
          whileHover={{ scale: 1.05 }}
          className="btn-primary inline-block"
        >
          Request Service
        </motion.a>
      </motion.div>
    </section>
  );
}