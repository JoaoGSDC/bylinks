"use client";

import { motion } from "framer-motion";

// Static particles for SSR consistency
const staticParticles = [
  { id: 0, x: 15, y: 20, size: 2, duration: 18, delay: 0, color: "gold" },
  { id: 1, x: 75, y: 35, size: 1.5, duration: 22, delay: 2, color: "blue" },
  { id: 2, x: 45, y: 60, size: 2.5, duration: 20, delay: 4, color: "gold" },
  { id: 3, x: 85, y: 75, size: 1.8, duration: 25, delay: 1, color: "blue" },
  { id: 4, x: 25, y: 80, size: 2.2, duration: 19, delay: 3, color: "blue" },
  { id: 5, x: 65, y: 15, size: 1.6, duration: 21, delay: 5, color: "gold" },
  { id: 6, x: 35, y: 45, size: 2, duration: 23, delay: 2, color: "blue" },
  { id: 7, x: 90, y: 50, size: 1.4, duration: 17, delay: 4, color: "gold" },
  { id: 8, x: 10, y: 65, size: 2.3, duration: 24, delay: 1, color: "blue" },
  { id: 9, x: 55, y: 85, size: 1.7, duration: 20, delay: 3, color: "gold" },
];

export function BackgroundEffects() {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Gradient overlay base */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#050816] via-[#0a0f1e] to-[#050816]" />

      {/* Subtle blue glow top-left */}
      <div
        className="absolute -top-1/4 -left-1/4 w-75 h-75 rounded-full opacity-20"
        style={{
          background: "radial-gradient(circle, rgba(37, 99, 255, 0.15) 0%, transparent 70%)",
        }}
      />

      {/* Subtle gold glow bottom-right */}
      <div
        className="absolute -bottom-1/4 -right-1/4 w-75 h-75 rounded-full opacity-10"
        style={{
          background: "radial-gradient(circle, rgba(212, 175, 55, 0.12) 0%, transparent 70%)",
        }}
      />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(37, 99, 255, 0.3) 1px, transparent 1px),
            linear-gradient(90deg, rgba(37, 99, 255, 0.3) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />

      {/* Static floating particles */}
      {staticParticles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            background: particle.color === "gold"
              ? "rgba(212, 175, 55, 0.4)"
              : "rgba(37, 99, 255, 0.3)",
            boxShadow: particle.color === "gold"
              ? "0 0 6px rgba(212, 175, 55, 0.4)"
              : "0 0 6px rgba(37, 99, 255, 0.3)",
          }}
          animate={{
            y: [-20, 20, -20],
            opacity: [0.2, 0.6, 0.2],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Subtle blue line accent */}
      <div
        className="absolute top-1/3 left-0 w-full h-px opacity-20"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(37, 99, 255, 0.5), transparent)",
        }}
      />

      {/* Subtle gold line accent */}
      <div
        className="absolute bottom-1/3 left-0 w-full h-px opacity-15"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.4), transparent)",
        }}
      />
    </div>
  );
}
