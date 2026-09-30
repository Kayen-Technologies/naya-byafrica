import Image from "next/image";

export function OurStory() {
  return (
    <section id="our-story" className="bg-white text-black">
      <div className="relative h-[420px] overflow-hidden sm:h-[520px] lg:h-[652px]">
        <Image src="/images/landing/story-background.png" alt="NAYA founder celebrating African botanicals and self-care" fill sizes="100vw" className="object-cover object-center" />
      </div>
      <div className="flex justify-center px-6 py-12 sm:px-10 lg:min-h-[298px] lg:items-center lg:px-4 lg:py-8">
        <div className="flex max-w-[650px] flex-col items-center gap-6 text-center">
          <h2 className="font-jost text-3xl font-medium leading-tight sm:text-4xl lg:text-[2.5rem]">Made here to create more here.</h2>
          <p className="font-kumbh-sans text-sm leading-relaxed tracking-[0.08px] sm:text-base">
            NAYA exists to elevate African ingredients, craftsmanship and manufacturing into products the world desires. From ingredient processors and formulators to makers and creatives, every product contributes to a growing ecosystem of African skill, innovation and opportunity.
          </p>
          <a href="#footer" className="flex h-[50px] items-center justify-center rounded border border-black px-8 font-kumbh-sans text-sm transition-colors hover:bg-black hover:text-white sm:text-base">
            Discover Our Purpose
          </a>
        </div>
      </div>
    </section>
  );
}
