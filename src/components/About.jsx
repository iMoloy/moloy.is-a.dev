"use client";

import { motion } from "framer-motion";

export default function About({ paragraphs }) {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto border-t border-border-main flex flex-col md:flex-row gap-12 md:gap-24 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="md:w-1/3"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-text-main tracking-tight sticky top-32">About Me</h2>
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="md:w-2/3 space-y-6 text-lg text-text-muted"
      >
        {paragraphs.map((p, i) => (
          <p key={i} dangerouslySetInnerHTML={{ __html: p.replace(/text-slate-200 hover:text-teal-300 focus-visible:text-teal-300|text-white hover:text-\[#ccff00\]/g, 'text-text-main hover:text-accent') }} />
        ))}
      </motion.div>
    </section>
  );
}
