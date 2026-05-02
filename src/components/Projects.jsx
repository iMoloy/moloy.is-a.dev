"use client";

import { motion } from "framer-motion";
import { projects as portfolioProjects } from "@/data/portfolio";
import { Star } from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

export default function Projects({ items, isAllProjectsPage = false }) {
  const [favorites, setFavorites] = useState([]);
  const [mounted, setMounted] = useState(false);
  const [imgErrors, setImgErrors] = useState({});
  
  useEffect(() => {
    const savedFavs = JSON.parse(localStorage.getItem("favoriteProjects") || "[]");
    setFavorites(savedFavs);
    setMounted(true);
  }, []);

  const toggleFavorite = (id) => {
    const newFavs = favorites.includes(id) 
      ? favorites.filter(favId => favId !== id)
      : [...favorites, id].slice(-4); // Keep max 4 favorites
    
    setFavorites(newFavs);
    localStorage.setItem("favoriteProjects", JSON.stringify(newFavs));
  };

  const handleImgError = (id) => {
    setImgErrors(prev => ({ ...prev, [id]: true }));
  };

  if (!mounted) {
    return (
      <section id="projects" className="py-24 px-6 max-w-6xl mx-auto min-h-[400px]">
        <div className="flex justify-center items-center h-40">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-accent"></div>
        </div>
      </section>
    );
  }

  let displayProjects = items || portfolioProjects;
  
  if (!isAllProjectsPage) {
    const favProjects = portfolioProjects.filter(p => favorites.includes(p.id));
    const otherProjects = portfolioProjects.filter(p => !favorites.includes(p.id) && p.featured);
    displayProjects = [...favProjects, ...otherProjects].slice(0, 4);
    
    if (displayProjects.length < 4) {
      const remaining = portfolioProjects.filter(p => !displayProjects.find(dp => dp.id === p.id));
      displayProjects = [...displayProjects, ...remaining].slice(0, 4);
    }
  }

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto">
      {!isAllProjectsPage && (
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-4"
        >
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-text-main tracking-tight mb-4">Featured Projects</h2>
            <div className="w-20 h-1.5 bg-accent rounded-full"></div>
          </div>
          <Link href="/projects" className="text-accent font-semibold hover:underline flex items-center gap-2 group">
            View All Projects 
            <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
            </motion.span>
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
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="group relative bg-card rounded-3xl overflow-hidden border border-border-main hover:border-accent transition-colors duration-500 shadow-sm"
          >
            <div className="aspect-video bg-background w-full overflow-hidden border-b border-border-main relative group-hover:scale-105 transition-transform duration-700 ease-in-out flex items-center justify-center">
              {!imgErrors[project.id] ? (
                <img 
                  src={`https://api.microlink.io/?url=${encodeURIComponent(project.url)}&screenshot=true&meta=false&embed=screenshot.url`} 
                  alt={project.name}
                  className="w-full h-full object-cover object-top opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                  loading="lazy"
                  onError={() => handleImgError(project.id)}
                />
              ) : (
                <div className="absolute inset-0 flex items-center justify-center bg-accent-bg/10 p-8">
                  <h3 className="text-3xl font-bold text-accent opacity-40">{project.name}</h3>
                </div>
              )}
              
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-60 pointer-events-none"></div>

              {/* Favorite Button */}
              <button 
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  toggleFavorite(project.id);
                }}
                className={`absolute top-4 right-4 z-20 p-3 rounded-full backdrop-blur-md border transition-all duration-300 ${
                  favorites.includes(project.id) 
                  ? 'bg-accent border-accent text-white dark:text-black shadow-lg shadow-accent/20' 
                  : 'bg-black/20 border-white/20 text-white hover:bg-accent/20 hover:border-accent hover:text-accent'
                }`}
              >
                <Star size={20} fill={favorites.includes(project.id) ? "currentColor" : "none"} />
              </button>
            </div>
            
            <div className="p-8">
              <h3 className="text-2xl font-bold text-text-main mb-3 group-hover:text-accent transition-colors">
                {project.name}
              </h3>
              <p className="text-text-muted mb-6 line-clamp-2">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech) => (
                  <span key={tech} className="px-3 py-1 text-xs font-medium rounded-full bg-accent-bg text-accent border border-accent/20">
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex items-center gap-6">
                <a 
                  href={project.url} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 text-sm font-semibold text-text-main hover:text-accent transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                  Live Demo
                </a>
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="flex items-center gap-2 text-sm font-semibold text-text-main hover:text-accent transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                  GitHub
                </a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
