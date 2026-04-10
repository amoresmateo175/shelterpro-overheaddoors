"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 80%", "end 20%"],
  });

  const opacity = useTransform(scrollYProgress, [0, 1], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1]);

  return (
    <section id="about" ref={ref} className="container py-20">
      <motion.div style={{ opacity, scale }}>
        <h2 className="text-3xl font-bold mb-6">
          Why Overhead Door Services Matter
        </h2>

        <p className="text-gray-600 mb-4">
          Overhead garage doors are essential for both residential and commercial
          properties. They provide security, energy efficiency, and operational
          convenience.
        </p>

        <p className="text-gray-600 mb-4">
          Proper installation and maintenance ensure safety, reduce downtime,
          and protect valuable assets in any environment.
        </p>

        <p className="text-gray-600">
          ShelterPro Overhead Doors delivers long-term reliability through
          expert service and precision work.
        </p>
      </motion.div>
    </section>
  );
}