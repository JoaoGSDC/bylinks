"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { HighlightCard } from "../client";

interface HighlightCardProps {
  card: HighlightCard;
}

export function HighlightCardSection({ card }: HighlightCardProps) {
  return (
    <motion.a
      href={card.url}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.25 }
      }}
      whileTap={{ scale: 0.98 }}
      className="group relative block w-full overflow-hidden rounded-xl mt-4"
      style={{
        aspectRatio: "2.5 / 1",
      }}
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
          sizes="(max-width: 768px) 100vw, 600px"
        />
      </div>

      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-transparent" />

      {/* Accent border */}
      <div
        className="absolute inset-0 rounded-xl transition-all duration-300"
        style={{
          border: "1px solid rgba(212, 175, 55, 0.25)",
          boxShadow: "inset 0 0 30px rgba(0,0,0,0.3)",
        }}
      />

      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl"
        style={{
          boxShadow: "0 0 40px rgba(212, 175, 55, 0.15), inset 0 0 60px rgba(0,0,0,0.2)",
          border: "1px solid rgba(212, 175, 55, 0.4)",
        }}
      />

      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-center px-6">
        <motion.h3
          className="text-lg md:text-xl font-bold text-white tracking-wider uppercase"
          style={{
            textShadow: "0 2px 20px rgba(0,0,0,0.5)",
          }}
        >
          {card.title}
        </motion.h3>
        <p className="text-xs text-white/70 mt-1 tracking-wide">
          {card.subtitle}
        </p>

        {/* CTA Button */}
        <div
          className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold tracking-wider uppercase w-fit transition-all duration-300 group-hover:scale-105"
          style={{
            background: "linear-gradient(135deg, rgba(212, 175, 55, 0.9), rgba(212, 175, 55, 0.7))",
            color: "#000",
            boxShadow: "0 4px 15px rgba(212, 175, 55, 0.3)",
          }}
        >
          {card.cta}
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </div>
      </div>
    </motion.a>
  );
}
