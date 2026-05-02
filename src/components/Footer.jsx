"use client";

import { motion } from "framer-motion";
import { profile } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t-2 border-border-main bg-background">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-6">
        
        {/* Left Side: Logo GIF Animation */}
        <motion.div 
          whileHover={{ scale: 1.1 }}
          className="w-14 h-14 cursor-pointer overflow-hidden border-2 border-border-main bg-card shrink-0"
        >
          <img src="/image.gif" alt="Coding Animation" className="w-full h-full object-cover" />
        </motion.div>

        {/* Right Side: Text with Horizontal line in middle */}
        <div className="flex flex-col items-center gap-1.5 text-center">
          <p className="text-text-muted font-bold text-[10px] md:text-xs uppercase tracking-tight">
            Coded in <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer" className="text-yellow-400 hover:text-text-main transition-colors">VS Code</a>. 
            Built with <a href="https://nextjs.org/" target="_blank" rel="noreferrer" className="text-yellow-400 hover:text-text-main transition-colors">Next.js</a>, <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer" className="text-yellow-400 hover:text-text-main transition-colors">Tailwind CSS</a> and <a href="https://www.framer.com/motion/" target="_blank" rel="noreferrer" className="text-yellow-400 hover:text-text-main transition-colors">Framer Motion</a>.
          </p>
          
          {/* Horizontal Line between texts */}
          <div className="w-full h-[1px] bg-border-main/20" />
          
          <p className="text-text-main font-black text-[10px] md:text-xs uppercase tracking-widest">
            © {currentYear} {profile.name}. ALL RIGHTS RESERVED.
          </p>
        </div>
        
      </div>
    </footer>
  );
}
