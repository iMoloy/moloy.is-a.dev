"use client";

import { motion } from "framer-motion";
import { about } from "@/data/portfolio";

export default function About() {
  const aboutParagraphs = about;

  return (
    <section id="about" className="py-16 md:py-20 px-6 max-w-6xl mx-auto overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-10"
      >
        <h2 className="text-2xl md:text-3xl font-black text-text-main tracking-tighter uppercase mb-2">About Me</h2>
        <div className="w-16 h-1.5 bg-yellow-400"></div>
      </motion.div>

      <div className="flex flex-col gap-16 relative">
        {/* Connection Line */}
        <div className="absolute left-6 md:left-1/2 -translate-x-1/2 h-full w-1 bg-yellow-400/20 hidden md:block" />

        {aboutParagraphs.map((text, index) => {
          const isEven = index % 2 === 0;
          
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: isEven ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex items-center ${isEven ? "md:justify-start" : "md:justify-end"} relative`}
            >
              <div className={`w-full md:w-[60%] p-8 border-2 border-border-main bg-card hover:border-yellow-400 transition-all group relative`}>
                <div className={`absolute -top-6 ${isEven ? "-right-4" : "-left-4"} text-6xl md:text-8xl font-black text-text-main/10 group-hover:text-yellow-400/30 transition-all pointer-events-none`}>
                  0{index + 1}
                </div>
                <p 
                  className="text-sm md:text-md text-text-main leading-relaxed font-medium"
                  dangerouslySetInnerHTML={{ __html: text }}
                />
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
