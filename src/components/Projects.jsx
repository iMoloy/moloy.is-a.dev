"use client";

import { motion } from "framer-motion";
import { projects } from "@/data/portfolio";
import { useState, useEffect } from "react";
import { Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Projects({ limit, isAllProjectsPage = false }) {
  const [favorites, setFavorites] = useState([]);
  const [imgErrors, setImgErrors] = useState({});

  useEffect(() => {
    const savedFavorites = localStorage.getItem("favoriteProjects");
    if (savedFavorites) {
      setFavorites(JSON.parse(savedFavorites));
    }
  }, []);

  const toggleFavorite = (id) => {
    const newFavorites = favorites.includes(id)
      ? favorites.filter((favId) => favId !== id)
      : [...favorites, id];
    setFavorites(newFavorites);
    localStorage.setItem("favoriteProjects", JSON.stringify(newFavorites));
  };

  const handleImgError = (id) => {
    setImgErrors((prev) => ({ ...prev, [id]: true }));
  };

  const displayProjects = isAllProjectsPage 
    ? projects 
    : projects.filter(p => p.featured).slice(0, 4);

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto bg-background">
      {!isAllProjectsPage && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4"
        >
          <div>
            <h2 className="text-2xl md:text-3xl font-black text-text-main tracking-tighter uppercase mb-2">Selected Works</h2>
            <div className="w-16 h-1.5 bg-yellow-400"></div>
          </div>
          <Link href="/projects" className="bg-yellow-400 text-black px-4 py-2 dark:bg-transparent dark:text-yellow-400 text-xs font-black hover:bg-black hover:text-white dark:hover:text-white transition-all uppercase tracking-widest border-2 border-border-main pb-1">
            Browse All
          </Link>
        </motion.div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {displayProjects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative bg-card border-2 border-border-main hover:border-yellow-400 transition-all duration-300 overflow-hidden rounded-none"
          >
            <div className="aspect-[16/10] overflow-hidden border-b-2 border-border-main relative p-1">
              <div className="w-full h-full overflow-hidden relative">
                {!imgErrors[project.id] ? (
                  <Image 
                    src={`https://api.microlink.io/?url=${encodeURIComponent(project.url)}&screenshot=true&meta=false&embed=screenshot.url`} 
                    alt={project.name}
                    width={800}
                    height={500}
                    className="w-full h-full object-cover object-top transition-all duration-700 group-hover:scale-110"
                    loading="lazy"
                    onError={() => handleImgError(project.id)}
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-card p-8">
                    <h3 className="text-lg font-black text-text-main uppercase">{project.name}</h3>
                  </div>
                )}
              </div>
              
              {/* Favorite Button - Only show on All Projects page */}
              {isAllProjectsPage && (
                <button 
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    toggleFavorite(project.id);
                  }}
                  className={`absolute top-4 right-4 z-20 p-2 border-2 transition-all duration-300 ${
                    favorites.includes(project.id) 
                    ? 'bg-yellow-400 border-black text-black' 
                    : 'bg-card border-border-main text-text-muted hover:bg-yellow-400 hover:text-black'
                  }`}
                >
                  <Star size={16} fill={favorites.includes(project.id) ? "currentColor" : "none"} />
                </button>
              )}
            </div>
            
            <div className="p-6">
              <h3 className="text-lg font-black text-text-main mb-3 group-hover:text-yellow-400 transition-colors uppercase">
                {project.name}
              </h3>
              <p className="text-xs md:text-sm text-text-muted mb-6 font-medium">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech) => (
                  <button key={tech} className="px-3 py-1 text-[10px] font-black border-2 border-border-main bg-black text-white dark:bg-yellow-400 dark:text-black uppercase tracking-tight cursor-pointer">
                    {tech}
                  </button>
                ))}
              </div>
              
              <div className="flex items-center gap-8">
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 px-3 py-1.5 bg-yellow-400 text-black dark:bg-transparent dark:text-yellow-400 border-2 border-border-main text-xs font-black hover:bg-black hover:text-white dark:hover:text-white transition-all uppercase tracking-widest"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  Live
                </a>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 px-3 py-1.5 bg-black text-white dark:bg-white dark:text-black border-2 border-border-main text-xs font-black hover:bg-yellow-400 hover:text-black transition-all uppercase tracking-widest"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  Source
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
