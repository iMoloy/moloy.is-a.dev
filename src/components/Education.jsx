"use client";

import { motion } from "framer-motion";
import { education } from "@/data/portfolio";

export default function Education() {
  return (
    <section id="education" className="py-24 px-6 max-w-6xl mx-auto overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16"
      >
        <h2 className="text-2xl md:text-3xl font-black text-text-main tracking-tighter uppercase mb-2">Education & Certs</h2>
        <div className="w-16 h-1.5 bg-yellow-400"></div>
      </motion.div>

      <div className="relative">
        {/* Central Vertical Line */}
        <div className="absolute left-1/2 -translate-x-1/2 h-full w-1 bg-yellow-400 hidden md:block" />

        <div className="flex flex-col">
          {education.map((edu, index) => {
            const isRight = index % 2 === 0;
            
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
                      {edu.year || edu.period}
                    </span>
                    <h3 className="text-xl font-black text-text-main uppercase mb-2">
                      {edu.degree}
                    </h3>
                    <p className="text-md font-bold text-black bg-yellow-400 px-2 py-0.5 inline-block dark:bg-transparent dark:text-yellow-400 dark:p-0 uppercase tracking-tighter mb-4">
                      {edu.institution}
                    </p>
                    <p className="text-xs text-text-muted leading-relaxed font-medium mb-4">
                      {edu.description}
                    </p>

                    {/* Simplilearn Specific Links */}
                    {edu.links && edu.links.length > 0 && (
                      <div className="mt-4 pt-4 border-t border-border-main">
                        <p className="text-[10px] font-black text-yellow-400 uppercase mb-3 tracking-widest">Credentials:</p>
                        <div className="flex flex-col gap-2">
                          {edu.links.map((link, idx) => (
                            <a 
                              key={idx}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-[10px] font-bold text-text-main hover:text-yellow-400 flex items-center gap-2 uppercase tracking-tight group/link"
                            >
                              <span className="w-1.5 h-1.5 bg-yellow-400 group-hover/link:animate-ping" />
                              {link.name}
                            </a>
                          ))}
                        </div>
                      </div>
                    )}
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
