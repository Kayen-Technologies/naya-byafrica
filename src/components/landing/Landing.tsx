import { Hero } from "@/components/landing/Hero";
import { Begin } from "@/components/landing/Begin";
import { Bestsellers } from "@/components/landing/Bestsellers";
import { ValueStrip } from "@/components/landing/ValueStrip";
import { IngredientStory } from "@/components/landing/IngredientStory";
import { Scents } from "@/components/landing/Scents";
import { OurStory } from "@/components/landing/OurStory";
import { RetailShops } from "@/components/landing/RetailShops";
import { Newsletter } from "@/components/landing/Newsletter";
import { Footer } from "@/components/Footer";

export default function Landing() {
  return (
    <main className="min-h-screen">
      <Hero />
      <ValueStrip />
      <Begin />
      <Bestsellers />
      <IngredientStory />
      <Scents />
      <OurStory />
      <RetailShops />
      <Newsletter />
      <Footer />
    </main>
  );
}
