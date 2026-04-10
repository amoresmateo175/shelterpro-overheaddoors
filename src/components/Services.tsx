"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Services() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="services" ref={ref} className="bg-gray-50 py-20">
      <motion.div style={{ y }} className="container">
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Services
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {["Installation", "Repair", "Maintenance"].map((title, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.2 }}
              whileHover={{ y: -8 }}
              className="bg-white p-6 rounded-xl shadow-sm"
            >
              <h3 className="font-semibold text-xl mb-2">{title}</h3>
              <p className="text-gray-600">
                High-quality {title.toLowerCase()} services for overhead doors.
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}