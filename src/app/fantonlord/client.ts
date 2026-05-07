import type { StaticImageData } from "next/image";
import character1 from "./images/character-1.png";
import character2 from "./images/character-2.png";
import character3 from "./images/character-3.png";
import character4 from "./images/character-4.png";
import wallpaper1 from "./images/wallpaper-1.png";
import wallpaper2 from "./images/wallpaper-2.png";
import wallpaper3 from "./images/wallpaper-3.png";

export interface SocialLink {
  id: string;
  name: string;
  url: string;
  icon: "tiktok" | "instagram" | "youtube";
}

export interface FeatureCard {
  id: string;
  title: string;
  subtitle: string;
  url: string;
  image: string | StaticImageData;
  badge?: string;
  accent: "blue" | "purple" | "gold";
}

export interface HighlightCard {
  id: string;
  title: string;
  subtitle: string;
  cta: string;
  url: string;
  image: string | StaticImageData;
}

export interface ContentItem {
  id: string;
  title: string;
  source: string;
  thumbnail: string | StaticImageData;
  url: string;
}

export interface FantonLordData {
  name: string;
  subtitle: string;
  heroImage: string | StaticImageData;
  logoSymbol: string;
  socialLinks: SocialLink[];
  featureCards: FeatureCard[];
  highlightCard: HighlightCard;
  contentSection: {
    title: string;
    items: ContentItem[];
  };
}

export const fantonLordData: FantonLordData = {
  name: "FANTON LORD",
  subtitle: "REINO DOS NOBRES • LIVE NA TWITCH",
  heroImage: wallpaper1,
  logoSymbol: "✦",
  socialLinks: [
    {
      id: "tiktok",
      name: "TikTok",
      url: "https://www.tiktok.com/@fantonlord",
      icon: "tiktok",
    },
    {
      id: "instagram",
      name: "Instagram",
      url: "https://www.instagram.com/fanton.lord",
      icon: "instagram",
    },
    {
      id: "youtube",
      name: "YouTube",
      url: "https://www.youtube.com/@fantonlord",
      icon: "youtube",
    },
  ],
  featureCards: [
    {
      id: "twitch",
      title: "TWITCH",
      subtitle: "LIVE CINEMATOGRAFICA • AO VIVO",
      url: "https://www.twitch.tv/fantonlord",
      image: wallpaper3,
      badge: "AO VIVO",
      accent: "purple",
    },
  ],
  highlightCard: {
    id: "community",
    title: "REINO DOS NOBRES",
    subtitle: "A elite da comunidade gamer",
    cta: "FAÇA PARTE",
    url: "https://discord.gg/e39CYTjMJH",
    image: wallpaper2,
  },
  contentSection: {
    title: "CONTEÚDO & DESTAQUES",
    items: [
      {
        id: "1",
        title: "Fanton Lord: A Origem",
        source: "youtube.com",
        thumbnail: character3,
        url: "#",
      },
      {
        id: "2",
        title: "Canal oficial: twitch.tv/fantonlord",
        source: "twitch.tv",
        thumbnail: character4,
        url: "https://www.twitch.tv/fantonlord",
      },
      {
        id: "3",
        title: "Tecnologia para Gaming",
        source: "tiktok.com",
        thumbnail: character1,
        url: "#",
      },
      {
        id: "4",
        title: "Comunidade Elite",
        source: "discord.gg",
        thumbnail: character2,
        url: "#",
      },
    ],
  },
};
