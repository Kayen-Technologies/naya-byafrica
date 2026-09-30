import Image from "next/image";
import { Navbar } from "@/components/Navbar";

export function Hero() {
  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black selection:bg-[#6B2046]/50 selection:text-white">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 z-10 bg-[linear-gradient(125.15deg,transparent_53.64%,rgba(0,0,0,0.62)_94.11%)]" />
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -left-[18.38%] -top-[25.9%] h-[139.16%] w-[148.74%]">
            <Image
              src="/images/landing/landing-hero.png"
              alt="African botanicals and NAYA self-care"
              fill
              priority
              className="object-cover"
              sizes="100vw"
            />
          </div>
        </div>
      </div>

      <div className="relative z-10">
        <Navbar />
      </div>

      <div className="relative z-10 mx-auto flex min-h-screen flex-col justify-end px-6 pb-16 sm:px-10 lg:px-[3.5vw] lg:pb-20">
        <div className="ml-auto flex max-w-3xl flex-col items-end text-right">
          <h1 className="mb-8 font-jost text-4xl font-semibold leading-[1.1] tracking-tight text-white drop-shadow-lg sm:text-5xl lg:text-[3.5rem]">
            African botanicals, elevated
            <br />
            for modern self-care.
          </h1>

          <div className="flex w-full flex-col items-center justify-end gap-4 sm:flex-row">
            <a href="#bestsellers" className="flex min-h-[50px] w-full items-center justify-center rounded bg-[#6B2046] px-3 py-4 font-kumbh-sans text-sm font-medium text-white transition-colors duration-300 hover:bg-[#852a58] sm:w-[210px] sm:text-base">
              Shop Tribe Favourites
            </a>

            <a href="#our-story" className="flex min-h-[50px] w-full items-center justify-center rounded border border-white bg-transparent px-8 py-3 font-kumbh-sans text-sm font-medium text-white transition-colors duration-300 hover:bg-white/10 sm:w-[210px] sm:text-base">
              Discover Our Story
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
