"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[var(--navy)] text-white">
      <div className="container flex justify-between items-center py-4">
        <h1 className="font-bold text-xl">ShelterPro</h1>

        <div className="hidden md:flex gap-6">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          ☰
        </button>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
            className="md:hidden flex flex-col items-center gap-4 pb-4"
          >
            <a href="#services">Services</a>
            <a href="#about">About</a>
            <a href="#contact">Contact</a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}