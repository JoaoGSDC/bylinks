import type { Metadata } from "next";
import { fantonLordData } from "./client";
import { BackgroundEffects } from "./components/BackgroundEffects";
import { HeroSection } from "./components/HeroSection";
import { FeatureCards } from "./components/FeatureCards";
import { HighlightCardSection } from "./components/HighlightCard";
import { ContentSection } from "./components/ContentSection";

export const metadata: Metadata = {
  title: "Fanton Lord - Reino dos Nobres",
  description: "Comunidade gamer premium. Tecnologia, evolução e entretenimento.",
  openGraph: {
    title: "Fanton Lord",
    description: "Reino dos Nobres - Comunidade Gamer Premium",
    type: "website",
  },
};

export default function FantonLordPage() {
  return (
    <main className="relative min-h-screen bg-[#050816] overflow-x-hidden">
      <BackgroundEffects />
      <div className="relative z-10">
        <HeroSection data={fantonLordData} />
        <div className="px-4 pb-8" style={{ marginTop: "-40px" }}>

          <div className="max-w-[420px] mx-auto pt-4">
            <FeatureCards cards={fantonLordData.featureCards} />
            <HighlightCardSection card={fantonLordData.highlightCard} />
            {/* <ContentSection
              title={fantonLordData.contentSection.title}
              items={fantonLordData.contentSection.items}
            /> */}
            <footer className="pt-10 text-center">
              <div
                className="w-8 h-px mx-auto mb-4"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(212, 175, 55, 0.5), transparent)",
                }}
              />
              <p className="text-[10px] text-white/25 tracking-[0.2em] uppercase">
                © {new Date().getFullYear()} {fantonLordData.name}
              </p>
              <p className="text-[9px] text-white/15 mt-1 tracking-widest uppercase">
                Todos os direitos reservados
              </p>
            </footer>
          </div>
        </div>
      </div>
    </main>
  );
}
