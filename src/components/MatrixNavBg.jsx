"use client";

import { useEffect, useRef } from "react";

export default function MatrixNavBg() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    
    const setCanvasSize = () => {
      if (canvas.parentElement) {
        canvas.width = canvas.parentElement.offsetWidth;
        canvas.height = canvas.parentElement.offsetHeight;
      }
    };
    setCanvasSize();
    window.addEventListener("resize", setCanvasSize);

    const chars = "ｱｲｳｴｵｶｷｸｹｺｻｼｽｾｿﾀﾁﾂﾃﾄﾅﾆﾇﾈﾉﾊﾋﾌﾍﾎﾏﾐﾑﾒﾓﾔﾕﾖﾗﾘﾙﾚﾛﾜﾝ0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const charArray = chars.split("");
    const fontSize = 12;
    // ensure we have enough columns even on resize
    const maxColumns = 200; 
    const drops = Array(maxColumns).fill(1);

    let animationFrameId;

    const draw = () => {
      const isDark = document.documentElement.classList.contains('dark');
      if (!isDark) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        animationFrameId = requestAnimationFrame(draw);
        return;
      }

      // Fade effect to create the "tail" of the characters
      ctx.fillStyle = "rgba(0, 0, 0, 0.15)"; 
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.font = fontSize + "px monospace";

      // Calculate how many columns we actually need right now
      const columns = Math.ceil(canvas.width / fontSize);

      for (let i = 0; i < columns; i++) {
        const text = charArray[Math.floor(Math.random() * charArray.length)];
        
        // Randomly make some characters white/brighter, others the accent color with lower opacity
        if (Math.random() > 0.95) {
          ctx.fillStyle = "rgba(255, 255, 255, 0.3)";
        } else {
          ctx.fillStyle = "rgba(204, 255, 0, 0.25)"; // Accent color but subtle
        }
        
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        // Reset drop randomly to create varied rain effect
        if (drops[i] * fontSize > canvas.height && Math.random() > 0.95) {
          drops[i] = 0;
        }
        drops[i]++;
      }
      
      setTimeout(() => {
        animationFrameId = requestAnimationFrame(draw);
      }, 50);
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
      className="absolute inset-0 z-0 w-full h-full pointer-events-none opacity-0 dark:opacity-100 transition-opacity duration-500"
    />
  );
}
