"use client";

import { motion, useScroll, useTransform } from "framer-motion";

export default function Hero() {
  const { scrollY } = useScroll();

  // Parallax
  const yText = useTransform(scrollY, [0, 400], [0, -100]);
  const yBg = useTransform(scrollY, [0, 400], [0, 80]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0.85]);

  return (
    <section className="relative overflow-hidden py-28">

      {/* Background gradient */}
      <motion.div
        style={{ y: yBg }}
        className="absolute inset-0 bg-gradient-to-b from-white via-gray-50 to-gray-100"
      />

      {/* Subtle animated gold glow */}
      <motion.div
        animate={{ y: [0, -20, 0], opacity: [0.15, 0.25, 0.15] }}
        transition={{ duration: 6, repeat: Infinity }}
        className="absolute w-80 h-80 bg-[var(--gold)] rounded-full blur-3xl top-10 left-1/2 -translate-x-1/2"
      />

      {/* Content */}
      <motion.div
        style={{ y: yText, opacity }}
        className="container relative text-center"
      >
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-bold mb-6 leading-tight"
        >
          Reliable Overhead Door{" "}
          <span className="text-[var(--navy)]">
            Solutions
          </span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-lg md:text-xl text-gray-600 mb-8 max-w-2xl mx-auto"
        >
          Professional installation, repair, and automation for residential and commercial garage doors.
        </motion.p>

        {/* CTA */}
        <motion.a
          href="#contact"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          whileHover={{
            scale: 1.08,
            boxShadow: "0px 10px 25px rgba(212,175,55,0.3)",
          }}
          whileTap={{ scale: 0.95 }}
          className="btn-primary inline-block font-medium"
        >
          Request Service
        </motion.a>

        {/* Optional trust microcopy */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-sm text-gray-400 mt-6"
        >
          Trusted by homeowners and businesses
        </motion.p>
      </motion.div>
    </section>
  );
}