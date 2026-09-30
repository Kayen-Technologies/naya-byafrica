import Image from "next/image";

const stores = [
  { name: "A&C Mall, East Legon", image: "/images/landing/retail/ac-mall.png" },
  { name: "Marina Mall, Airport City", image: "/images/landing/retail/marina-mall.png" },
];

export function RetailShops() {
  return (
    <section id="stores" className="bg-[#48122d] px-6 py-20 text-white sm:px-10 lg:min-h-[1104px] lg:px-[3.5vw] lg:py-[120px]">
      <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-jost text-3xl font-medium leading-tight sm:text-4xl lg:text-[2.5rem]">Come experience NAYA in person.</h2>
          <p className="mt-6 max-w-[800px] font-kumbh-sans text-sm leading-relaxed tracking-[0.08px] sm:text-base">
            Explore our products, discover your scent and find the right care for your routine at one of our Accra stores.
          </p>
        </div>
        <a href="#contact" className="shrink-0 font-jost text-base font-medium underline underline-offset-4 sm:text-lg">Chat on WhatsApp</a>
      </div>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:mt-12 lg:gap-7">
        {stores.map((store) => (
          <article key={store.name} className="relative aspect-square overflow-hidden">
            <Image src={store.image} alt={`${store.name} NAYA retail store`} fill sizes="(min-width: 1024px) 46vw, (min-width: 640px) 45vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white/70" />
            <div className="absolute inset-x-5 bottom-6 flex flex-col items-center gap-6 text-black sm:inset-x-8 sm:bottom-8">
              <div className="flex items-center gap-4 font-jost text-xl font-medium sm:text-2xl lg:text-[32px]">
                <Image src="/images/landing/icons/location.svg" alt="" width={24} height={24} />
                <h3>{store.name}</h3>
              </div>
              <a href="#contact" className="flex h-[50px] w-full max-w-[402px] items-center justify-center rounded bg-white px-8 font-kumbh-sans text-sm sm:text-base">
                View store details
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
