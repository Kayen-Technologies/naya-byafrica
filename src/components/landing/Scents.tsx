import Image from "next/image";

export function Scents() {
  const categories = ["Fruit", "Floral", "Herbs & Spice", "Unscented"];

  return (
    <section id="scents" className="bg-white px-6 py-20 text-black sm:px-10 lg:min-h-[916px] lg:px-[3.5vw] lg:py-[120px]">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] lg:gap-12">
        <div>
          <h2 className="font-jost text-3xl font-medium leading-tight sm:text-4xl lg:text-[2.5rem]">Find your scent story.</h2>
          <p className="mt-6 max-w-[552px] font-kumbh-sans text-sm leading-relaxed tracking-[0.08px] sm:text-base">
            Bright fruit. Soft florals. Fresh herbs and spice. Or simply unscented. Choose the mood that feels most like you.
          </p>
          <ul className="mt-12 max-w-[356px]">
            {categories.map((category, index) => (
              <li key={category} className={`border-b border-black/30 py-6 font-jost text-2xl font-medium sm:text-[32px] ${index ? "text-black/30" : "text-black"}`}>
                {category}
                {index === 0 && <span className="sr-only">, selected scent category</span>}
              </li>
            ))}
          </ul>
          <a href="#bestsellers" className="mt-12 inline-block font-jost text-base font-medium underline underline-offset-4 sm:text-lg">
            Explore our scent collection
          </a>
        </div>
        <div className="relative min-h-[360px] overflow-hidden sm:min-h-[500px] lg:h-[676px]">
          <Image src="/images/landing/scents.png" alt="Fresh fruit and botanicals for NAYA scent blends" fill sizes="(min-width: 1024px) 48vw, 100vw" className="object-cover object-center" />
        </div>
      </div>
    </section>
  );
}
