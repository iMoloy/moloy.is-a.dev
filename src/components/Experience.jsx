"use client";

import { motion } from "framer-motion";
import { experience } from "@/data/portfolio";

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 max-w-6xl mx-auto overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-2xl md:text-3xl font-black text-text-main tracking-tighter uppercase mb-2">Work Experience</h2>
        <div className="w-16 h-1.5 bg-yellow-400"></div>
      </motion.div>

      <div className="relative">
        {/* Central Vertical Line */}
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-yellow-400 hidden md:block" />

        <div className="flex flex-col">
          {experience.map((exp, index) => {
            const isRight = index % 2 !== 0;
            
            return (
              <div 
                key={index} 
                className={`relative flex items-center justify-center md:justify-between w-full ${index !== 0 ? "md:-mt-16" : ""}`}
              >
                {/* Connector Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 bg-yellow-400 border-4 border-border-main z-10 hidden md:block" />

                {/* Left side spacer/content */}
                {isRight && <div className="hidden md:block w-[45%]" />}

                <motion.div
                  initial={{ opacity: 0, x: isRight ? 100 : -100 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, ease: "easeOut" }}
                  className={`w-full md:w-[48%] ${isRight ? "md:text-left" : "md:text-right"} flex flex-col z-20`}
                >
                  <div className="p-6 border-2 border-border-main bg-card hover:border-yellow-400 transition-all group shadow-2xl">
                    <span className="text-xs font-black text-black bg-yellow-400 px-2 py-0.5 uppercase tracking-widest mb-3 inline-block">
                      {exp.period}
                    </span>
                    <h3 className="text-xl font-black text-text-main uppercase group-hover:text-yellow-400 transition-colors">
                      {exp.role}
                    </h3>
                    <p className="text-md font-bold text-text-main mb-4 uppercase tracking-tighter">
                      {exp.company}
                    </p>
                    <p className="text-xs text-text-muted leading-relaxed italic">
                      {exp.description}
                    </p>
                  </div>
                </motion.div>

                {/* Right side spacer/content */}
                {!isRight && <div className="hidden md:block w-[45%]" />}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
