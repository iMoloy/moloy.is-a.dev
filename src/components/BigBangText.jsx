"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function BigBangText({ texts }) {
  const [index, setIndex] = useState(0);
  const [showExplosion, setShowExplosion] = useState(false);
  const [isColliding, setIsColliding] = useState(false);
  const [isShaking, setIsShaking] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      // Step 1: Start collision
      setIsColliding(true);
      
      // Step 2: Collision moment
      setTimeout(() => {
        setShowExplosion(true);
        setIsShaking(true);
        setIndex((prev) => (prev + 1) % texts.length);
        setIsColliding(false);
        
        // Step 3: End effects
        setTimeout(() => {
          setShowExplosion(false);
          setIsShaking(false);
        }, 800);
      }, 800); // Planet travel time

    }, 5000); // Cycle duration

    return () => clearInterval(interval);
  }, [texts.length]);

  return (
    <motion.div 
      animate={isShaking ? { x: [-2, 2, -2, 2, 0], y: [-2, 2, 2, -2, 0] } : {}}
      transition={{ duration: 0.1, repeat: 4 }}
      className="relative inline-flex items-center justify-center min-h-[1.2em]"
    >
      {/* Current Text */}
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ opacity: 0, scale: 0.2, filter: "brightness(5)" }}
          animate={{ opacity: 1, scale: 1, filter: "brightness(1)" }}
          exit={{ opacity: 0, scale: 2, filter: "brightness(3) blur(10px)" }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="relative z-10"
        >
          {texts[index]}
        </motion.span>
      </AnimatePresence>

      {/* Realistic Collision Planets */}
      <AnimatePresence>
        {isColliding && (
          <>
            {/* Left Planet with tail */}
            <motion.div
              initial={{ x: -400, opacity: 0, scale: 0.2 }}
              animate={{ x: 0, opacity: 1, scale: 0.8 }}
              exit={{ scale: 3, opacity: 0 }}
              className="absolute left-1/2 -translate-x-full w-10 h-10 bg-white rounded-full z-20"
              style={{ boxShadow: "0 0 30px #FFFF00, 0 0 60px #FFFF00" }}
            >
              <div className="absolute top-1/2 right-0 w-20 h-1 bg-gradient-to-l from-yellow-400 to-transparent translate-y-[-50%]" />
            </motion.div>
            
            {/* Right Planet with tail */}
            <motion.div
              initial={{ x: 400, opacity: 0, scale: 0.2 }}
              animate={{ x: 0, opacity: 1, scale: 0.8 }}
              exit={{ scale: 3, opacity: 0 }}
              className="absolute left-1/2 w-10 h-10 bg-white rounded-full z-20"
              style={{ boxShadow: "0 0 30px #FFFF00, 0 0 60px #FFFF00" }}
            >
              <div className="absolute top-1/2 left-0 w-20 h-1 bg-gradient-to-r from-yellow-400 to-transparent translate-y-[-50%]" />
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Enhanced Big Bang Explosion */}
      {showExplosion && (
        <div className="absolute inset-0 flex items-center justify-center z-30 pointer-events-none">
          {/* Shockwave Ring */}
          <motion.div
            initial={{ scale: 0, opacity: 1, border: "4px solid #FFFF00" }}
            animate={{ scale: 8, opacity: 0, border: "1px solid #FFFF00" }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="absolute w-20 h-20 rounded-full"
          />
          
          {/* Central Bright Flash */}
          <motion.div
            initial={{ scale: 0, opacity: 1 }}
            animate={{ scale: 20, opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="absolute w-10 h-10 bg-white rounded-full blur-2xl"
          />
          
          {/* Advanced Particles */}
          {[...Array(30)].map((_, i) => (
            <motion.div
              key={i}
              initial={{ x: 0, y: 0, opacity: 1, scale: Math.random() * 2 }}
              animate={{ 
                x: (Math.random() - 0.5) * 600, 
                y: (Math.random() - 0.5) * 400, 
                opacity: 0,
                rotate: 360
              }}
              transition={{ duration: Math.random() * 0.5 + 0.5, ease: "easeOut" }}
              className="absolute w-1.5 h-1.5 bg-yellow-400 rounded-full bigbang-dot"
            />
          ))}
        </div>
      )}
    </motion.div>
  );
}
