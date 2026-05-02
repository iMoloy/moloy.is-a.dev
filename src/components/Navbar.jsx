"use client";

import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    if (pathname !== "/") {
      setActiveSection("");
      return;
    }

    const handleScroll = () => {
      const sections = ["about", "projects", "experience", "education"];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 120 && rect.bottom >= 120;
        }
        return false;
      });
      if (current) setActiveSection(current);
      else if (window.scrollY < 100) setActiveSection("about");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [pathname]);

  const navLinks = [
    { name: "About", href: "/#about", id: "about" },
    { name: "Featured", href: "/#projects", id: "projects" },
    { name: "All Projects", href: "/projects" },
    { name: "Experience", href: "/#experience", id: "experience" },
    { name: "Education", href: "/#education", id: "education" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-nav/80 backdrop-blur-md border-b border-border-main transition-all duration-300">
      {/* Subtle Starfall in Navbar */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ top: -10, left: `${Math.random() * 100}%`, opacity: 0 }}
            animate={{ 
              top: "100%", 
              opacity: [0, 1, 0],
              x: [0, 20] 
            }}
            transition={{ 
              duration: Math.random() * 2 + 2, 
              repeat: Infinity, 
              delay: Math.random() * 5,
              ease: "linear"
            }}
            className="absolute w-px h-8 bg-gradient-to-b from-accent to-transparent"
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between relative z-10">
        <Link href="/" className="text-xl font-bold tracking-tighter text-text-main group">
          Moloy<span className="text-accent group-hover:animate-pulse">.</span>
        </Link>
        
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-text-muted">
          {navLinks.map((link) => {
            const isActive = 
              (link.href === pathname) || 
              (link.id && activeSection === link.id);
            
            return (
              <Link 
                key={link.name}
                href={link.href} 
                className={`transition-all duration-300 relative py-1 ${
                  isActive ? "text-accent font-semibold" : "hover:text-accent"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div 
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-accent rounded-full"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-accent-bg text-text-muted hover:text-accent transition-colors duration-300"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>
            )}
          </button>
          
          <a 
            href="/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer" 
            className="hidden sm:block px-5 py-2 bg-yellow-400 text-black border-2 border-white font-black text-xs hover:bg-white transition-all duration-300 uppercase tracking-widest"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
}
