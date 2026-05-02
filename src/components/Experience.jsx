"use client";

import { motion } from "framer-motion";

export default function Experience({ items }) {
  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto border-t border-border-main flex flex-col md:flex-row gap-12 md:gap-24 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="md:w-1/3"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-text-main tracking-tight sticky top-32">Experience</h2>
      </motion.div>
      <div className="md:w-2/3 space-y-16">
        {items.map((item, index) => (
          <motion.div 
            key={item.id} 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative group"
          >
            <div className="flex flex-col sm:flex-row sm:items-baseline gap-2 sm:gap-4 mb-2">
              <span className="text-sm font-semibold text-accent tracking-wider uppercase shrink-0 sm:w-40">{item.period}</span>
              <h3 className="text-2xl font-bold text-text-main group-hover:text-accent transition-colors">{item.role}</h3>
            </div>
            <div className="sm:pl-44 mb-4">
              <p className="text-xl text-text-main font-medium mb-4">{item.company}</p>
              <p className="text-text-muted mb-6 leading-relaxed">{item.description}</p>
              <div className="flex flex-wrap gap-2">
                {item.tech.map((t) => (
                  <span key={t} className="px-3 py-1 rounded-full bg-accent-bg border border-border-main text-text-muted text-xs font-medium">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
