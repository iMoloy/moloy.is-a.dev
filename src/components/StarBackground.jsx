"use client";

import { useEffect, useRef } from "react";

export default function StarBackground() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext("2d");
    let animationFrameId;

    const setCanvasSize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    // Normal twinkling stars
    const numStars = 150;
    const stars = [];
    const shootingStars = [];

    for (let i = 0; i < numStars; i++) {
      stars.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: Math.random() * 1.5,
        twinkleSpeed: 0.005 + Math.random() * 0.015,
        alpha: Math.random(),
      });
    }

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Only animate if in dark mode
      const isDark = document.documentElement.classList.contains('dark');
      if (!isDark) {
        animationFrameId = requestAnimationFrame(draw);
        return;
      }

      // 1. Draw Twinkling Stars
      stars.forEach((star) => {
        star.alpha += star.twinkleSpeed;
        if (star.alpha <= 0 || star.alpha >= 1) {
          star.twinkleSpeed = -star.twinkleSpeed;
        }
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${Math.abs(star.alpha)})`;
        ctx.fill();
      });

      // 2. Draw Shooting Stars (Meteors)
      // 1% chance to spawn a shooting star per frame
      if (Math.random() < 0.01 && shootingStars.length < 2) {
        shootingStars.push({
          x: Math.random() * canvas.width * 1.5, // Start further right
          y: Math.random() * (canvas.height / 2) - 100, // Start higher up
          len: 40 + Math.random() * 60,
          speed: 8 + Math.random() * 8,
          opacity: 1,
        });
      }

      for (let i = shootingStars.length - 1; i >= 0; i--) {
        const ss = shootingStars[i];
        
        // Move diagonally down-left
        ss.x -= ss.speed;
        ss.y += ss.speed * 0.5; // Angle of falling
        ss.opacity -= 0.008; // Fade out slowly

        if (ss.opacity <= 0 || ss.x < -100 || ss.y > canvas.height + 100) {
          shootingStars.splice(i, 1);
          continue;
        }

        ctx.beginPath();
        // Create a trailing gradient for the shooting star
        // The head is neon green (#ccff00), tail fades out
        const gradient = ctx.createLinearGradient(ss.x, ss.y, ss.x + ss.len, ss.y - ss.len * 0.5);
        gradient.addColorStop(0, `rgba(204, 255, 0, ${ss.opacity})`); // Head
        gradient.addColorStop(0.2, `rgba(255, 255, 255, ${ss.opacity * 0.8})`); // Middle
        gradient.addColorStop(1, `rgba(255, 255, 255, 0)`); // Tail
        
        ctx.moveTo(ss.x, ss.y);
        ctx.lineTo(ss.x + ss.len, ss.y - ss.len * 0.5);
        ctx.strokeStyle = gradient;
        ctx.lineWidth = 1.5;
        ctx.lineCap = "round";
        ctx.stroke();
        
        // Give the head a little glow
        ctx.beginPath();
        ctx.arc(ss.x, ss.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(204, 255, 0, ${ss.opacity})`;
        ctx.fill();
      }

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener("resize", setCanvasSize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-[-10] w-full h-full pointer-events-none transition-opacity duration-700 opacity-0 dark:opacity-100 bg-transparent"
    />
  );
}
