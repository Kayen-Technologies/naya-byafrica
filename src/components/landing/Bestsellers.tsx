import Image from "next/image";

const products = [
  {
    name: "Clear skin bar soap",
    price: "GHS 60.00",
    image: "/images/landing/bestsellers/clear-skin-bar-soap.png",
  },
  {
    name: "Lemon dew shower gel",
    price: "GHS 65.00",
    image: "/images/landing/bestsellers/lemon-dew-shower-gel.png",
  },
  {
    name: "Clear skin face oil",
    price: "GHS 90.00",
    image: "/images/landing/bestsellers/clear-skin-face-oil.png",
  },
  {
    name: "Vanilla mint shower gel",
    price: "GHS 65.00",
    image: "/images/landing/bestsellers/vanilla-mint-shower-gel.png",
  },
  {
    name: "Mango sorbet shea fusion",
    price: "GHS 90.00",
    image: "/images/landing/bestsellers/mango-sorbet-shea-fusion.png",
  },
  {
    name: "Berry tropical shea fusion",
    price: "GHS 90.00",
    image: "/images/landing/bestsellers/berry-tropical-shea-fusion.png",
  },
];

export function Bestsellers() {
  return (
    <section id="bestsellers" className="bg-white px-6 py-20 text-black sm:px-10 sm:py-24 lg:px-[3.5vw] lg:py-28">
      <div className="mb-12 flex items-end justify-between gap-8 sm:mb-14">
        <div>
          <h2 className="font-jost text-3xl font-medium leading-tight tracking-tight sm:text-4xl lg:text-[2.5rem]">
            Loved by the NAYA tribe.
          </h2>
          <p className="mt-5 font-kumbh-sans text-sm leading-relaxed sm:text-base">
            The favourites your skin keeps coming back to.
          </p>
        </div>
        <a
          href="#shop"
          className="shrink-0 font-jost text-base font-medium underline underline-offset-4 sm:text-lg"
        >
          Shop All
        </a>
      </div>

      <div className="flex snap-x snap-mandatory gap-5 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-12 sm:overflow-visible sm:snap-none lg:grid-cols-3 lg:gap-y-16">
        {products.map((product) => (
          <article key={product.name} className="w-[82vw] max-w-[444px] shrink-0 snap-start sm:w-auto sm:max-w-none">
            <div className="relative aspect-square w-full overflow-hidden bg-[#f7f5f4]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                sizes="(min-width: 1024px) 30vw, (min-width: 640px) 45vw, 100vw"
                className="object-cover"
              />
            </div>

            <div className="mt-8 flex flex-col gap-4">
              <div className="flex flex-col items-start gap-2">
                <h3 className="font-jost text-lg font-medium leading-tight">
                  {product.name}
                </h3>
                <div className="flex" aria-label="Rated 4 out of 5 stars">
                  {[1, 2, 3, 4].map((star) => (
                    <Image
                      key={star}
                      src="/images/landing/bestsellers/star-rate.svg"
                      alt=""
                      width={18}
                      height={18}
                    />
                  ))}
                </div>
              </div>

              <div className="flex items-end justify-between gap-4">
                <p className="font-kumbh-sans text-lg font-medium leading-[1.4] tracking-[0.1px] sm:text-xl">
                  {product.price}
                </p>
                <a
                  href="#shop"
                  className="flex h-[50px] shrink-0 items-center justify-center rounded border border-black px-6 font-kumbh-sans text-sm transition-colors hover:bg-black hover:text-white sm:px-8 sm:text-base"
                >
                  Quick shop
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
