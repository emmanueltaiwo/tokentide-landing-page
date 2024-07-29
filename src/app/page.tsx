import AboutSection from "@/components/AboutSection";
import Features from "@/components/Features";
import HeroSection from "@/components/HeroSection";

export default function Home() {
  return (
    <main className="z-10">
      <HeroSection />
      <AboutSection />
      <Features />
    </main>
  );
}
