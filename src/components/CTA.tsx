"use client";

import { motion } from "framer-motion";

export default function CTA() {
  return (
    <section className="relative overflow-hidden py-24 bg-[var(--navy)] text-white text-center">

      {/* Background subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-[var(--navy)] to-[#070d1f]" />

      {/* Floating gold glow (layer 1) */}
      <motion.div
        animate={{ y: [0, -30, 0], opacity: [0.12, 0.25, 0.12] }}
        transition={{ duration: 7, repeat: Infinity }}
        className="absolute w-96 h-96 bg-[var(--gold)] rounded-full blur-3xl top-[-50px] left-1/2 -translate-x-1/2"
      />

      {/* Secondary glow (adds depth) */}
      <motion.div
        animate={{ y: [0, 20, 0], opacity: [0.08, 0.18, 0.08] }}
        transition={{ duration: 9, repeat: Infinity }}
        className="absolute w-72 h-72 bg-[var(--gold)] rounded-full blur-3xl bottom-[-40px] right-10"
      />

      <div className="container relative">

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          Get Your Garage Door Fixed Today
        </motion.h2>

        {/* Subtext (más persuasivo) */}
        <motion.p
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-8 text-gray-300 max-w-xl mx-auto"
        >
          Fast response, professional service, and long-lasting solutions for residential and commercial overhead doors.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="#"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4 }}
          whileHover={{
            scale: 1.08,
            boxShadow: "0px 15px 40px rgba(212,175,55,0.35)",
          }}
          whileTap={{ scale: 0.95 }}
          className="relative inline-block px-8 py-4 rounded-lg font-semibold text-[var(--navy)] bg-[var(--gold)] overflow-hidden"
        >
          {/* Shine effect */}
          <motion.span
            initial={{ x: "-100%" }}
            whileHover={{ x: "200%" }}
            transition={{ duration: 0.8 }}
            className="absolute inset-0 bg-white/30 skew-x-[-20deg]"
          />

          <span className="relative z-10">
            Request Service
          </span>
        </motion.a>

        {/* Trust signal */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-sm text-gray-400 mt-6"
        >
          ✔ Same-day service available • ✔ Licensed & insured
        </motion.p>

      </div>
    </section>
  );
}