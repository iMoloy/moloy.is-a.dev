"use client";

import Link from "next/link";
import { useTheme } from "./ThemeProvider";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { theme } = useTheme();
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState("about");
  const [isOpen, setIsOpen] = useState(false);

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
            className="absolute w-px h-8 bg-gradient-to-b from-yellow-400 to-transparent"
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between relative z-10">
        <div 
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-3 cursor-pointer group"
        >
          {/* Brand Identity */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span className="text-xl sm:text-2xl font-black tracking-tighter text-text-main uppercase">
              <span className="text-yellow-400">M</span>
              <span className="text-yellow-400">O</span>
              LO
              <span className="text-yellow-400">Y</span>
            </span>
            
            {/* Tagline - Now visible on mobile but smaller */}
            <div className="flex items-center gap-1 sm:gap-1.5 font-bold text-[10px] sm:text-sm tracking-tight">
              <span className="text-yellow-400">{`{`}</span>
              <span className="text-text-main">is a</span>
              <span className="text-yellow-400 uppercase">DEV</span>
              <span className="text-yellow-400">{`}`}</span>
            </div>
          </div>
          
          {/* Mobile/Tablet Chevron Indicator */}
          <motion.div 
            animate={{ rotate: isOpen ? 180 : 0 }}
            className="lg:hidden text-yellow-400"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="m6 9 6 6 6-6"/></svg>
          </motion.div>
        </div>
        
        <div className="hidden lg:flex items-center gap-8 text-sm font-medium text-text-muted">
          {navLinks.map((link) => {
            const isActive = 
              (link.href === pathname) || 
              (link.id && activeSection === link.id);
            
            return (
              <Link 
                key={link.name}
                href={link.href} 
                className={`transition-all duration-300 relative py-1 px-2 ${
                  isActive 
                    ? "bg-yellow-400 text-black dark:bg-transparent dark:text-yellow-400 font-black" 
                    : "text-text-muted hover:text-yellow-400"
                }`}
              >
                {link.name}
                {isActive && (
                  <motion.div 
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-black dark:bg-yellow-400"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        <div className="flex items-center gap-2 sm:gap-4">
          
          <a 
            href="/resume.pdf" 
            target="_blank"
            rel="noopener noreferrer" 
            className="px-3 sm:px-5 py-2 bg-black text-white dark:bg-yellow-400 dark:text-black border-2 border-black dark:border-white font-black text-[10px] sm:text-xs hover:bg-yellow-400 hover:text-black transition-all duration-300 uppercase tracking-widest"
          >
            Resume
          </a>
        </div>
      </div>
      {/* Mobile/Tablet Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="lg:hidden bg-nav/95 backdrop-blur-xl border-b border-border-main overflow-hidden"
          >
            <div className="flex flex-col p-6 gap-4">
              {navLinks.map((link) => {
                const isActive = 
                  (link.href === pathname) || 
                  (link.id && activeSection === link.id);
                
                return (
                  <Link 
                    key={link.name}
                    href={link.href} 
                    onClick={() => setIsOpen(false)}
                    className={`text-lg font-black uppercase tracking-tighter transition-all duration-300 ${
                      isActive 
                        ? "text-yellow-400 pl-4 border-l-4 border-yellow-400" 
                        : "text-text-muted hover:text-yellow-400 hover:pl-2"
                    }`}
                  >
                    {link.name}
                  </Link>
                );
              })}
              
              <div className="pt-4 border-t border-border-main/50">
                <a 
                  href="/resume.pdf" 
                  target="_blank"
                  rel="noopener noreferrer" 
                  onClick={() => setIsOpen(false)}
                  className="w-full block text-center px-5 py-4 bg-yellow-400 text-black font-black uppercase tracking-widest text-sm"
                >
                  Resume
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
