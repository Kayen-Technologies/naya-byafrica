"use client";

import Image from "next/image";
import { useRef } from "react";

const categories = [
  {
    title: "Cleanse & Refresh",
    description:
      "African black soap shower gels and nourishing bar soaps for your everyday cleanse.",
    action: "Shop Cleansers",
    image: "/images/landing/begin/cleanse-refresh.png",
    imageAlt: "Naya cinnamon and spice African black soap shower gel",
  },
  {
    title: "Moisturize & Glow",
    description:
      "Shea butter fusions, body creams and botanical oils for beautifully soft skin.",
    action: "Shop Moisturizers",
    image: "/images/landing/begin/moisturize-glow.png",
    imageAlt: "Naya shea butter fusion moisturizers with botanicals",
  },
  {
    title: "Polish & Renew",
    description:
      "Mineral-rich sea salt scrubs that make exfoliation feel like a ritual.",
    action: "Shop Scrubs",
    image: "/images/landing/begin/polish-renew.png",
    imageAlt: "Naya coconut mint sea salt scrub and body cream",
  },
  {
    title: "Gift with Care",
    description:
      "Thoughtfully curated sets for celebrations, loved ones and everyday self-care.",
    action: "Shop Gifts",
    image: "/images/landing/begin/gift-with-care.png",
    imageAlt: "Naya skincare products arranged in a gift box",
  },
];

export function Begin() {
  const cardsRef = useRef<HTMLDivElement>(null);

  function scrollCards(direction: "left" | "right") {
    const cards = cardsRef.current;
    if (!cards) return;

    cards.scrollBy({
      left: direction === "left" ? -cards.clientWidth * 0.8 : cards.clientWidth * 0.8,
      behavior: "smooth",
    });
  }

  return (
    <section id="shop" className="overflow-hidden bg-[#48122D] py-20 text-white sm:py-24 lg:py-28">
      <div className="mx-auto  pl-6 sm:pl-10 lg:pl-[3.5vw]">
        <div className="mb-12 flex items-end justify-between gap-8 pr-6 sm:mb-14 sm:pr-10 lg:pr-[3.5vw]">
          <div>
            <h2 className="font-jost text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-[2.75rem]">
              Begin with what your skin needs.
            </h2>
            <p className="mt-4 max-w-5xl font-kumbh-sans text-sm leading-relaxed text-white/90 sm:text-base">
              From cleansing and exfoliating to deep nourishment and thoughtful gifting, discover care made for every part of your routine.
            </p>
          </div>

          <div className="mb-1 hidden shrink-0 items-center gap-4 sm:flex">
            <button
              type="button"
              aria-label="Scroll to previous categories"
              onClick={() => scrollCards("left")}
              className="font-kumbh-sans text-xl text-white/50 transition-colors hover:text-white"
            >
              ←
            </button>
            <button
              type="button"
              aria-label="Scroll to more categories"
              onClick={() => scrollCards("right")}
              className="font-kumbh-sans text-xl text-white transition-colors hover:text-white/70"
            >
              →
            </button>
          </div>
        </div>

        <div
          ref={cardsRef}
          className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pr-6 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:pr-10 lg:pr-[3.5vw]"
        >
          {categories.map((category) => (
            <article
              key={category.title}
              className="w-[82vw] max-w-[444px] shrink-0 snap-start sm:w-[42vw] lg:w-[25.5vw]"
            >
              <div className="relative aspect-[0.697] overflow-hidden bg-black/20">
                <Image
                  src={category.image}
                  alt={category.imageAlt}
                  fill
                  sizes="(min-width: 1024px) 26vw, (min-width: 640px) 42vw, 82vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/20 to-transparent" />
                <div className="relative z-10 max-w-[390px] px-7 pt-7 sm:px-8 sm:pt-8">
                  <h3 className="font-jost text-xl font-medium leading-tight sm:text-2xl">
                    {category.title}
                  </h3>
                  <p className="mt-4 font-kumbh-sans text-sm leading-relaxed text-white/95 sm:text-base">
                    {category.description}
                  </p>
                </div>
              </div>

              <a
                href="#shop"
                className="mt-5 flex min-h-14 items-center justify-center gap-2 border border-white/90 px-5 text-center font-kumbh-sans text-sm transition-colors hover:bg-white hover:text-[#48122D] sm:text-base"
              >
                {category.action} <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
