"use client";

import { motion } from "framer-motion";
// Ícones customizados SVG para redes sociais
const TiktokIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" stroke="none">
    <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17" />
    <path d="m10 15 5-3-5-3z" />
  </svg>
);
import type { SocialLink, FantonLordData } from "../client";

interface SocialLinksProps {
  socialLinks: FantonLordData["socialLinks"];
  className?: string;
}

const iconMap = {
  tiktok: TiktokIcon,
  instagram: InstagramIcon,
  youtube: YoutubeIcon,
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.5,
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0, scale: 0.9 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: [0.22, 1, 0.36, 1] as const,
    },
  },
};

function SocialButton({ link }: { link: SocialLink }) {
  const Icon = iconMap[link.icon];

  return (
    <motion.a
      variants={itemVariants}
      href={link.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        scale: 1.1,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: 0.95 }}
      className="group relative w-11 h-11 rounded-full flex items-center justify-center transition-all duration-300"
      style={{
        background: "rgba(212, 175, 55, 0.15)",
        border: "1px solid rgba(212, 175, 55, 0.3)",
        backdropFilter: "blur(10px)",
      }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300"
        style={{
          background: "rgba(212, 175, 55, 0.25)",
          boxShadow: "0 0 15px rgba(212, 175, 55, 0.4)",
        }}
      />

      {/* Icon */}
      <Icon
        className="relative z-10 w-[18px] h-[18px] text-[#d4af37] group-hover:text-white transition-colors duration-300"
      />
    </motion.a>
  );
}

export function SocialLinks({ socialLinks, className }: SocialLinksProps) {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className={`flex items-center justify-center gap-3 py-5 ${className ?? ""}`}
    >
      {socialLinks.map((link) => (
        <SocialButton key={link.id} link={link} />
      ))}
    </motion.div>
  );
}
