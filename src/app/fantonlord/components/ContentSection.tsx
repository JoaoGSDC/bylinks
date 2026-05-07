"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { ContentItem } from "../client";

interface ContentSectionProps {
  title: string;
  items: ContentItem[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { x: -20, opacity: 0 },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut" as const,
    },
  },
};

function ContentItemCard({ item }: { item: ContentItem }) {
  return (
    <motion.a
      variants={itemVariants}
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        x: 4,
        transition: { duration: 0.2 }
      }}
      className="group flex items-center gap-4 p-3 rounded-xl transition-all duration-300"
      style={{
        background: "rgba(37, 99, 255, 0.03)",
        border: "1px solid rgba(37, 99, 255, 0.08)",
      }}
    >
      {/* Thumbnail */}
      <div className="relative w-14 h-14 rounded-lg overflow-hidden flex-shrink-0">
        <Image
          src={item.thumbnail}
          alt={item.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-110"
          sizes="56px"
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-black/30 to-transparent" />
      </div>

      {/* Text content */}
      <div className="flex-1 min-w-0">
        <h4 className="text-sm font-medium text-white/90 truncate group-hover:text-white transition-colors">
          {item.title}
        </h4>
        <p className="text-[10px] text-white/40 mt-0.5 uppercase tracking-wider">
          {item.source}
        </p>
      </div>

      {/* Arrow */}
      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-200">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="rgba(255,255,255,0.4)"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </div>
    </motion.a>
  );
}

export function ContentSection({ title, items }: ContentSectionProps) {
  return (
    <div className="mt-8">
      {/* Section Title */}
      <motion.h2
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-xs font-bold text-[#d4af37] tracking-[0.2em] uppercase mb-4 px-1"
      >
        {title}
      </motion.h2>

      {/* Items Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-30px" }}
        className="grid grid-cols-2 gap-3"
      >
        {items.map((item) => (
          <ContentItemCard key={item.id} item={item} />
        ))}
      </motion.div>
    </div>
  );
}
