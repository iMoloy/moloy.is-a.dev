"use client";

import { useEffect, useState, useRef } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [isMounted, setIsMounted] = useState(false);
  const [isPointer, setIsPointer] = useState(false);
  const [particles, setParticles] = useState([]);
  
  const mousePos = useRef({ x: -100, y: -100 });
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  // Smooth springs for the core head
  const springConfig = { damping: 25, stiffness: 400 };
  const smoothX = useSpring(cursorX, springConfig);
  const smoothY = useSpring(cursorY, springConfig);

  useEffect(() => {
    setIsMounted(true);
    
    const moveCursor = (e) => {
      mousePos.current = { x: e.clientX, y: e.clientY };
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);

      const target = e.target;
      setIsPointer(
        window.getComputedStyle(target).cursor === "pointer" ||
        target.tagName === "A" ||
        target.tagName === "BUTTON"
      );
      
      // Spawn particles frequently on move to create a dense tail
      spawnParticle(e.clientX, e.clientY);
    };

    const spawnParticle = (x, y) => {
      if (x < 0) return;

      const id = Math.random().toString(36).substr(2, 9);
      const newParticle = {
        id,
        x,
        y,
        size: Math.random() * 10 + 15, // Dense size
      };
      
      setParticles((prev) => [...prev.slice(-40), newParticle]); // More particles for a longer tail
      
      setTimeout(() => {
        setParticles((prev) => prev.filter((p) => p.id !== id));
      }, 500); // Quick fade for a "leg" feel
    };

    // Constant emission even when idle to keep the "leg" visible
    const idleInterval = setInterval(() => {
      spawnParticle(mousePos.current.x, mousePos.current.y);
    }, 30); // Very fast generation for density

    window.addEventListener("mousemove", moveCursor);
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      clearInterval(idleInterval);
    };
  }, [cursorX, cursorY]);

  if (!isMounted) return null;

  return (
    <div className="fixed inset-0 pointer-events-none z-[9999] hidden md:block">
      {/* Dense Smoke Leg (Tail) */}
      {particles.map((p) => (
        <motion.div
          key={p.id}
          initial={{ 
            opacity: 0.8, 
            scale: 0.8, 
            x: p.x, 
            y: p.y 
          }}
          animate={{ 
            opacity: 0, 
            scale: 0.2, // Taper at the end
          }}
          transition={{ duration: 0.5, ease: "linear" }}
          className="absolute rounded-full bg-accent/50 blur-md"
          style={{
            width: p.size,
            height: p.size,
            left: 0,
            top: 0,
            translateX: "-50%",
            translateY: "-50%",
          }}
        />
      ))}

      {/* Comet Core */}
      <motion.div
        className="absolute w-3.5 h-3.5 bg-white rounded-full shadow-[0_0_10px_#ccff00,0_0_20px_rgba(204,255,0,0.6)]"
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      
      {/* Interaction Ring */}
      <motion.div
        className="absolute border-2 border-accent rounded-full"
        animate={{
          width: isPointer ? 40 : 0,
          height: isPointer ? 40 : 0,
          opacity: isPointer ? 0.7 : 0,
        }}
        style={{
          x: smoothX,
          y: smoothY,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
    </div>
  );
}
