"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import Image from "next/image";
import BigBangText from "./BigBangText";

export default function Hero({ profile }) {
  const titles = [
    "Full Stack Web Developer",
    "Web Designer",
    "Front End Developer",
    "Back End Developer",
    "QA Engineer"
  ];
  
  const [stats, setStats] = useState({
    repos: "20+",
    experience: "3+",
    contributions: "400+"
  });

  useEffect(() => {
    fetch("https://api.github.com/users/iMoloy")
      .then((res) => res.json())
      .then((data) => {
        if (data.id) {
          const startYear = new Date(data.created_at).getFullYear();
          const currentYear = new Date().getFullYear();
          const expYears = currentYear - startYear;

          setStats(prev => ({
            ...prev,
            repos: data.public_repos,
            experience: expYears > 0 ? expYears : 1
          }));
        }
      })
      .catch((err) => console.error("Error fetching GitHub profile:", err));

    fetch("/api/github")
      .then((res) => res.json())
      .then((data) => {
        if (data.total_count) {
          setStats(prev => ({
            ...prev,
            contributions: data.total_count
          }));
        }
      })
      .catch((err) => console.error("Error fetching GitHub commits:", err));
  }, []);

  return (
    <section className="pt-16 pb-12 md:pt-24 md:pb-20 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-16 overflow-visible bg-background">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="flex-1 text-center md:text-left z-20"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 border-2 border-border-main bg-yellow-400 text-black text-xs font-black uppercase tracking-widest mb-6"
        >
          <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
          Available for Hire
        </motion.div>
        
        <h1 className="text-2xl md:text-3xl font-black tracking-tighter text-text-main leading-tight min-h-[100px] md:min-h-[120px] uppercase">
          Hi, I'm {profile.nickname}. <br />
          <span className="mt-1 inline-flex flex-wrap items-center gap-x-2">
            I am a <span className="bg-yellow-400 text-black px-2 dark:bg-transparent dark:text-yellow-400"><BigBangText texts={titles} /></span>.
          </span>
        </h1>
        
        <p className="text-sm md:text-md text-text-muted max-w-xl mx-auto md:mx-0 leading-relaxed font-bold uppercase tracking-wide mb-8">
          {profile.subtitle} I specialize in crafting high-performance, pixel-perfect web experiences.
        </p>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="flex flex-wrap items-center justify-center md:justify-start gap-4"
        >
          <a 
            href="mailto:moloykrishnapaul@gmail.com" 
            className="px-8 py-4 bg-black text-white dark:bg-yellow-400 dark:text-black font-black text-lg border-2 border-border-main hover:bg-yellow-400 hover:text-black dark:hover:bg-white dark:hover:text-black transition-all duration-300 active:scale-95 uppercase"
          >
            Work with me
          </a>
          <div className="flex items-center gap-3">
            <a href={profile.github} target="_blank" rel="noreferrer" className="w-12 h-12 border-2 border-border-main flex items-center justify-center text-text-main hover:bg-yellow-400 hover:text-black transition-all bg-card">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 border-2 border-border-main flex items-center justify-center text-text-main hover:bg-yellow-400 hover:text-black transition-all bg-card">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="w-60 h-60 md:w-[380px] md:h-[380px] shrink-0 relative mt-12 md:mt-0"
      >
        <div className="absolute inset-0 border-4 border-border-main bg-card"></div>
        <div className="relative z-10 w-full h-full p-1.5 border-4 border-border-main bg-card">
          <Image 
            src={profile.avatar} 
            alt={profile.name} 
            width={380}
            height={380}
            priority
            className="w-full h-full object-cover border-2 border-border-main" 
          />
        </div>

        {/* Badges - Dynamic Inversion */}
        <motion.div 
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-4 top-8 md:-left-12 md:top-16 z-20 bg-yellow-400 border-2 border-black p-2 md:p-3 rounded-none flex items-center gap-2 md:gap-3 shadow-[4px_4px_0px_#000]"
        >
          <div className="text-black text-lg font-black">#01</div>
          <div>
            <p className="text-[9px] text-black font-black uppercase tracking-wider">Experience</p>
            <p className="text-xs md:text-sm font-black text-black">{stats.experience}+ YRS</p>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, 12, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -right-4 bottom-16 md:-right-12 md:bottom-24 z-20 bg-yellow-400 border-2 border-black p-2 md:p-3 rounded-none flex items-center gap-2 md:gap-3 shadow-[4px_4px_0px_#000]"
        >
          <div className="text-black text-lg font-black">#02</div>
          <div>
            <p className="text-[9px] text-black font-black uppercase tracking-wider">Projects</p>
            <p className="text-xs md:text-sm font-black text-black">{stats.repos}+ APPS</p>
          </div>
        </motion.div>

        <motion.div 
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute left-8 -bottom-3 md:left-16 md:-bottom-6 z-20 bg-yellow-400 border-2 border-black p-2 md:p-3 rounded-none flex items-center gap-2 md:gap-3 shadow-[4px_4px_0px_#000]"
        >
          <div className="text-black text-lg font-black">#03</div>
          <div>
            <p className="text-[9px] text-black font-black uppercase tracking-wider">Commits</p>
            <p className="text-xs md:text-sm font-black text-black">{stats.contributions}+ TOTAL</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
