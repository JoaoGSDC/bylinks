"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import type { FantonLordData } from "../client";
import { SocialLinks } from "./SocialLinks";

interface HeroSectionProps {
  data: FantonLordData;
}

export function HeroSection({ data }: HeroSectionProps) {
  return (
    <div className="relative w-full h-[430px] overflow-hidden">
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={data.heroImage}
          alt={`${data.name} Hero`}
          fill
          priority
          className="object-cover object-center"
          sizes="100vw"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/28 to-black/84" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#050816]/95 via-[#050816]/30 to-transparent" />
      <div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-44 opacity-45"
        style={{
          background: "radial-gradient(ellipse at center bottom, rgba(37, 99, 255, 0.25) 0%, transparent 60%)",
        }}
      />

      <motion.div
        className="absolute inset-0 flex flex-col items-center justify-center px-6 pb-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <motion.div
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="mb-3"
        >
          <span
            className="text-4xl text-[#d4af37]"
            style={{
              textShadow: "0 0 30px rgba(212, 175, 55, 0.5)",
              filter: "drop-shadow(0 0 10px rgba(212, 175, 55, 0.3))",
            }}
          >
            {data.logoSymbol}
          </span>
        </motion.div>

        <motion.h1
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
          className="text-3xl md:text-5xl font-bold text-white tracking-[0.2em] text-center uppercase"
          style={{
            textShadow: "0 4px 30px rgba(37, 99, 255, 0.4), 0 2px 10px rgba(0,0,0,0.5)",
            fontFamily: "system-ui, -apple-system, sans-serif",
          }}
        >
          {data.name}
        </motion.h1>
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={{ scaleX: 1, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6, ease: "easeOut" }}
          className="w-16 h-[1px] my-4"
          style={{
            background: "linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.8), transparent)",
          }}
        />
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.7, ease: "easeOut" }}
          className="text-xs md:text-sm text-[#d4af37] tracking-[0.3em] uppercase font-light"
          style={{
            textShadow: "0 2px 15px rgba(212, 175, 55, 0.3)",
          }}
        >
          {data.subtitle}
        </motion.p>
        <p className="mt-2 text-[10px] text-white/70 tracking-[0.2em] uppercase">
          Canal oficial na Twitch
        </p>
      </motion.div>
      <div className="absolute left-1/2 bottom-5 z-20 w-full -translate-x-1/2 px-4">
        <div className="mx-auto w-fit px-3 py-1.5">
          <SocialLinks socialLinks={data.socialLinks} className="py-0" />
        </div>
      </div>
    </div>
  );
}
