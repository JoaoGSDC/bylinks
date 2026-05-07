"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { FeatureCard } from "../client";

interface FeatureCardsProps {
  cards: FeatureCard[];
}

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const itemVariants = {
  hidden: { y: 30, opacity: 0, scale: 0.95 },
  visible: {
    y: 0,
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

function FeatureCardItem({ card }: { card: FeatureCard }) {
  const accentColors = {
    blue: {
      border: "rgba(37, 99, 255, 0.35)",
      glow: "rgba(37, 99, 255, 0.28)",
      badge: "#2563ff",
    },
    purple: {
      border: "rgba(145, 70, 255, 0.35)",
      glow: "rgba(145, 70, 255, 0.3)",
      badge: "#9146FF",
    },
    gold: {
      border: "rgba(212, 175, 55, 0.3)",
      glow: "rgba(212, 175, 55, 0.25)",
      badge: "#d4af37",
    },
  };

  const colors = accentColors[card.accent];
  const isTwitch = card.id === "twitch";
  const ambienceTint = isTwitch
    ? "radial-gradient(120% 80% at 78% 10%, rgba(145,70,255,0.45) 0%, transparent 70%)"
    : "radial-gradient(120% 90% at 70% 8%, rgba(37,99,255,0.5) 0%, transparent 72%)";
  const objectPosition = isTwitch ? "center 15%" : "center 30%";

  return (
    <motion.a
      variants={itemVariants}
      href={card.url}
      target="_blank"
      rel="noopener noreferrer"
      whileHover={{
        scale: 1.03,
        y: -4,
        transition: { duration: 0.25 }
      }}
      whileTap={{ scale: 0.98 }}
      className="group relative block overflow-hidden rounded-xl"
      style={{
        aspectRatio: "2.5 / 1",
      }}
    >
      <div className="absolute inset-0">
        <Image
          src={card.image}
          alt={card.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-[1.06]"
          style={{ objectPosition }}
          sizes="(max-width: 768px) 50vw, 250px"
        />
      </div>
      <div
        className="absolute inset-0"
        style={{ background: ambienceTint }}
      />
      <div className="absolute inset-0 bg-linear-to-t from-[#030712]/95 via-[#060b1c]/55 to-black/15" />
      <div className="absolute inset-0 bg-linear-to-r from-black/30 via-transparent to-black/40" />

      <div
        className="absolute inset-0 rounded-xl transition-all duration-300"
        style={{
          border: `1px solid ${colors.border}`,
          boxShadow: `inset 0 -45px 55px rgba(1, 4, 14, 0.7), inset 0 0 24px ${colors.glow}`,
        }}
      />
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
        style={{
          boxShadow: `0 16px 38px rgba(0,0,0,0.45), 0 0 26px ${colors.glow}`,
        }}
      />
      {card.badge && (
        <div
          className="absolute top-3 left-3 rounded-md px-2 py-1 text-[9px] font-semibold tracking-[0.15em]"
          style={{
            background: colors.badge,
            color: "#fff",
            boxShadow: `0 8px 20px ${colors.glow}`,
          }}
        >
          {card.badge}
        </div>
      )}

      <div className="absolute inset-x-0 bottom-0 p-4">
        <h3 className="text-sm font-semibold text-white tracking-[0.18em] uppercase">
          {card.title}
        </h3>
        <p className="text-[10px] text-white/72 mt-1 tracking-[0.14em] uppercase">
          {card.subtitle}
        </p>
      </div>
      <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
        >
          <path d="M7 17L17 7" />
          <path d="M7 7h10v10" />
        </svg>
      </div>
    </motion.a>
  );
}

export function FeatureCards({ cards }: FeatureCardsProps) {
  const twitchCard = cards.find((card) => card.id === "twitch");
  if (!twitchCard) return null;

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className="w-full"
    >
      <FeatureCardItem key={twitchCard.id} card={twitchCard} />
    </motion.div>
  );
}
