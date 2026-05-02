"use client";

import { motion } from "framer-motion";
import { useState, useEffect } from "react";

export default function Hero({ profile }) {
  const [stats, setStats] = useState({
    repos: "20+",
    experience: "3+",
    contributions: "400+"
  });

  useEffect(() => {
    // Auto fetch user profile data from GitHub
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

    // Auto fetch total commits as Contributions from our local cached API route
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
    <section className="pt-40 pb-24 px-6 max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 overflow-hidden">
      <motion.div 
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="flex-1 space-y-6"
      >
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-border-main bg-accent-bg text-accent text-sm font-medium"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
          Available for Work
        </motion.div>
        
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-text-main leading-tight">
          Hi, I'm {profile.nickname}. <br />
          <span className="text-text-muted">{profile.title}.</span>
        </h1>
        
        <p className="text-lg md:text-xl text-text-muted max-w-2xl leading-relaxed">
          {profile.subtitle} Passionate about building scalable and user-centric web applications.
        </p>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          className="flex items-center gap-6 pt-4"
        >
          <a 
            href="mailto:moloykrishnapaul@gmail.com" 
            className="px-6 py-3 rounded-full bg-accent text-white dark:text-black font-semibold text-base hover:scale-105 hover:opacity-90 transition-all duration-300 shadow-md"
          >
            Get in touch
          </a>
          <div className="flex items-center gap-4">
            <a href={profile.github} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-border-main flex items-center justify-center text-text-muted hover:border-accent hover:text-accent transition-all hover:-translate-y-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="w-12 h-12 rounded-full border border-border-main flex items-center justify-center text-text-muted hover:border-accent hover:text-accent transition-all hover:-translate-y-1">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
            </a>
          </div>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-64 h-64 md:w-96 md:h-96 shrink-0 relative mt-16 md:mt-0"
      >
        <div className="absolute inset-0 rounded-full bg-accent-bg blur-3xl"></div>
        <img src={profile.avatar} alt={profile.name} className="relative z-10 w-full h-full object-cover rounded-full border-2 border-border-main" />

        {/* Floating Badge 1: Experience (Top Left) */}
        <motion.div 
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute -left-4 top-0 md:-left-12 md:top-6 z-20 bg-card/80 backdrop-blur-md border border-border-main px-3 py-2 rounded-xl shadow-lg flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-500 text-sm">
            🏆
          </div>
          <div>
            <p className="text-[10px] text-text-muted font-semibold uppercase tracking-wider">Experience</p>
            <p className="text-xs font-bold text-text-main">{stats.experience}+ Years</p>
          </div>
        </motion.div>

        {/* Floating Badge 2: Projects (Bottom Right) */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute -right-4 bottom-12 md:-right-12 md:bottom-20 z-20 bg-card/80 backdrop-blur-md border border-border-main px-3 py-2 rounded-xl shadow-lg flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-full bg-accent/20 flex items-center justify-center text-accent text-sm">
            🚀
          </div>
          <div>
            <p className="text-[10px] text-text-muted font-semibold uppercase tracking-wider">Public Repos</p>
            <p className="text-xs font-bold text-text-main">{stats.repos} Projects</p>
          </div>
        </motion.div>

        {/* Floating Badge 3: Contributions (Bottom Left) */}
        <motion.div 
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          className="absolute -left-2 -bottom-2 md:-left-8 md:-bottom-4 z-20 bg-card/80 backdrop-blur-md border border-border-main px-3 py-2 rounded-xl shadow-lg flex items-center gap-2"
        >
          <div className="w-8 h-8 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-500 text-sm">
            🔥
          </div>
          <div>
            <p className="text-[10px] text-text-muted font-semibold uppercase tracking-wider">Total Commits</p>
            <p className="text-xs font-bold text-text-main">{stats.contributions}+ Contributions</p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
