"use client";

import { useEffect, useRef } from "react";

export function Particles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d", { alpha: false });
    if (!ctx) return;

    let particles: Particle[] = [];
    let animationFrameId: number;
    let mouse = { x: -1000, y: -1000, active: false };
    
    // Configuration for silent, dense cosmic dust
    const baseParticleCount = window.innerWidth < 768 ? 400 : 1500;
    const mouseOrbitRadius = 300; // Large, soft interaction radius

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      x: number;
      y: number;
      z: number;
      size: number;
      opacity: number;
      color: string;
      vx: number;
      vy: number;
      baseVx: number;
      baseVy: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        
        // Depth layers (1 = near stars, 4 = far galaxy dust)
        this.z = Math.random() * 3 + 1; 
        
        // Tiny, star-like sizes based on depth
        this.size = (Math.random() * 1.2 + 0.3) / this.z;
        
        // Soft glowing opacity based on depth
        this.opacity = (Math.random() * 0.5 + 0.1) / this.z;
        
        // Real astronomical colors: white, soft blue, faint purple
        const colors = [
          "255, 255, 255", // white star
          "255, 255, 255", // extra weight for white
          "200, 220, 255", // soft blue star
          "220, 200, 255"  // faint purple dust
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
        
        // Silent, almost still cosmic drifting
        this.baseVx = (Math.random() - 0.5) * 0.05 / this.z;
        this.baseVy = (Math.random() - 0.5) * 0.05 / this.z;
        this.vx = this.baseVx;
        this.vy = this.baseVy;
      }

      update() {
        // Smooth Mouse Gravitational Swirl
        if (mouse.active) {
          const dx = this.x - mouse.x;
          const dy = this.y - mouse.y;
          const distToMouse = Math.sqrt(dx * dx + dy * dy);

          if (distToMouse < mouseOrbitRadius) {
            // Force is strongest near center, drops to 0 at radius edge
            const force = (mouseOrbitRadius - distToMouse) / mouseOrbitRadius;
            
            // Calculate angle from mouse to particle
            const angle = Math.atan2(dy, dx);
            
            // Tangential angle for galaxy spinning (+90 degrees)
            const orbitAngle = angle + Math.PI / 2;
            
            // Force applied depends on depth (near particles react more)
            // Gentle multiplier ensures smooth, non-explosive motion
            const orbitForce = force * 0.15 / this.z;
            
            // Apply tangential/orbital motion
            this.vx += Math.cos(orbitAngle) * orbitForce;
            this.vy += Math.sin(orbitAngle) * orbitForce;
            
            // Apply extremely slight gravitational pull to keep them swirling around cursor
            const pullForce = force * 0.02 / this.z;
            this.vx -= Math.cos(angle) * pullForce;
            this.vy -= Math.sin(angle) * pullForce;
          }
        }

        // Inertia: gradually decay velocity back to the calm, silent drifting state
        this.vx = this.vx * 0.96 + this.baseVx * 0.04;
        this.vy = this.vy * 0.96 + this.baseVy * 0.04;

        this.x += this.vx;
        this.y += this.vy;

        // Elegant wrapping (if particles drift off-screen, they reappear silently)
        if (this.x < -10) this.x = canvas.width + 10;
        else if (this.x > canvas.width + 10) this.x = -10;
        
        if (this.y < -10) this.y = canvas.height + 10;
        else if (this.y > canvas.height + 10) this.y = -10;

        this.draw();
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = `rgba(${this.color}, ${this.opacity})`;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }
    }

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < baseParticleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      if (!ctx) return;
      
      // Cinematic deep space fade effect (smooth soft trails)
      ctx.fillStyle = "rgba(0, 0, 0, 0.3)";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
      
      animationFrameId = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      mouse.active = true;
    };

    const handleMouseLeave = () => {
      mouse.active = false;
    };

    window.addEventListener("resize", resize, { passive: true });
    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    window.addEventListener("mouseleave", handleMouseLeave, { passive: true });

    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseleave", handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
