"use client";

import { motion } from "framer-motion";

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0 },
};

export default function Services() {
  return (
    <section id="services" className="bg-gray-50 py-16">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-10">
          Our Services
        </h2>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          <motion.div variants={item}>
            <h3 className="font-semibold text-xl mb-2">Installation</h3>
            <p className="text-gray-600">
              Professional overhead door installation for homes and businesses.
            </p>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="font-semibold text-xl mb-2">Repair</h3>
            <p className="text-gray-600">
              Fast and reliable repair services for springs, motors, and tracks.
            </p>
          </motion.div>

          <motion.div variants={item}>
            <h3 className="font-semibold text-xl mb-2">Maintenance</h3>
            <p className="text-gray-600">
              Preventive maintenance to extend the life of your garage door.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}