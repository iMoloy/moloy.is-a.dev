"use client";

import { motion } from "framer-motion";

export default function ProblemSolving({ items }) {
  return (
    <section className="py-16 md:py-20 px-6 max-w-6xl mx-auto border-t border-border-main overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-10"
      >
        <h2 className="text-4xl md:text-5xl font-bold text-text-main tracking-tight">Problem Solving</h2>
        <p className="text-text-muted mt-4 text-lg">Continuous learning through competitive programming and algorithmic challenges.</p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {items.map((item, index) => (
          <motion.a
            href={item.link}
            target="_blank"
            rel="noreferrer"
            key={item.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="group block p-6 bg-card border border-border-main rounded-2xl hover:border-accent transition-all duration-300 hover:shadow-lg hover:-translate-y-1 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="16 18 22 12 16 6"></polyline><polyline points="8 6 2 12 8 18"></polyline></svg>
            </div>
            
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 bg-white rounded-full p-2 flex items-center justify-center shrink-0">
                <img src={item.icon} alt={item.platform} className="w-full h-full object-contain" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-text-main group-hover:text-accent transition-colors">{item.platform}</h3>
                <p className="text-sm text-text-muted">@{item.username}</p>
              </div>
            </div>
            
            <div className="inline-flex px-3 py-1 bg-accent-bg border border-border-main rounded-full text-accent font-medium text-sm">
              {item.solved}
            </div>
          </motion.a>
        ))}
      </div>
    </section>
  );
}
