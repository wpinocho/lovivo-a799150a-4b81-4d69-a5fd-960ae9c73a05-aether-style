import { AetherHeader } from '@/components/aether/AetherHeader';
import { HeroSection } from '@/components/aether/HeroSection';
import { MarqueeSection } from '@/components/aether/MarqueeSection';
import { ProductShowcase } from '@/components/aether/ProductShowcase';
import { BentoGrid } from '@/components/aether/BentoGrid';
import { FooterSection } from '@/components/aether/FooterSection';
import { FloatingCart } from '@/components/FloatingCart';
import { ScrollReveal } from '@/components/aether/ScrollReveal';
import type { UseIndexLogicReturn } from '@/components/headless/HeadlessIndex';

/**
 * EDITABLE UI - IndexUI
 * 
 * AETHER Landing Page - Dark Mode Luxury Experience
 * Designed for high conversion with immersive scrollytelling
 */

interface IndexUIProps {
  logic: UseIndexLogicReturn;
}

export const IndexUI = ({ logic }: IndexUIProps) => {
  return (
    <div className="min-h-screen bg-[#050505]">
      {/* Scroll Reveal Animations */}
      <ScrollReveal />

      {/* Fixed Header */}
      <AetherHeader />

      {/* Hero Section - Full viewport height */}
      <HeroSection />

      {/* Hype Marquee */}
      <MarqueeSection />

      {/* Product Showcase with Glassmorphism */}
      <ProductShowcase />

      {/* Tech Specs Bento Grid */}
      <BentoGrid />

      {/* Bottom Marquee */}
      <MarqueeSection />

      {/* Footer with Interactive AETHER Text */}
      <FooterSection />

      {/* Floating Cart */}
      <FloatingCart />
    </div>
  );
};