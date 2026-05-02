"use client";

import { motion } from "framer-motion";

export default function Education({ items }) {
  return (
    <section id="education" className="py-24 px-6 max-w-6xl mx-auto border-t border-border-main flex flex-col md:flex-row gap-12 md:gap-24 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="md:w-1/3"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-text-main tracking-tight sticky top-32">Education</h2>
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
              <h3 className="text-2xl font-bold text-text-main group-hover:text-accent transition-colors">{item.degree}</h3>
            </div>
            <div className="sm:pl-44 mb-4">
              <p className="text-xl text-text-main font-medium mb-4">{item.institution}</p>
              <p className="text-text-muted mb-6 leading-relaxed">{item.description}</p>
              {item.links && (
                <div className="flex flex-col gap-3 mt-4">
                  {item.links.map((link, i) => (
                    <a 
                      key={i} 
                      href={link.url} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-flex items-center gap-2 text-accent hover:text-text-main transition-colors text-sm font-medium"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
                      {link.name} Credential
                    </a>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
