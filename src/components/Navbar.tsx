"use client";

import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="bg-[var(--navy)] text-white">
      <div className="container flex justify-between items-center py-4">
        <h1 className="font-bold text-xl">
          ShelterPro
        </h1>

        {/* Desktop menu */}
        <div className="hidden md:flex gap-6">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>

        {/* Hamburger */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden flex flex-col items-center gap-4 pb-4 fade-in">
          <a href="#services">Services</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </div>
      )}
    </nav>
  );
}