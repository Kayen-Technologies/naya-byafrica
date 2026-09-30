import Image from "next/image";

const ingredients = [
  {
    name: "Shea",
    image: "/images/landing/ingredients/shea.png",
    mask: "/images/landing/ingredients/sheabutter-mask.svg",
    aspect: "aspect-[429/541]",
  },
  {
    name: "Baobab",
    image: "/images/landing/ingredients/baobab.png",
    mask: "/images/landing/ingredients/baobab-mask.svg",
    aspect: "aspect-[412/532]",
  },
  {
    name: "Black Soap",
    image: "/images/landing/ingredients/black-soap.png",
    mask: "/images/landing/ingredients/black-soap-mask.svg",
    aspect: "aspect-[405/494]",
  },
];
export function IngredientStory() {
  return (
    <section id="ingredients" className="bg-[#48122d] px-6 py-20 text-white sm:px-10 lg:min-h-[1005px] lg:px-[3.5vw] lg:py-[120px]">
      <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-start lg:max-w-[1147px] lg:gap-6">
          <h2 className="font-jost text-3xl font-medium leading-tight sm:w-[468px] sm:shrink-0 sm:text-4xl lg:text-[2.5rem]">
            Powerful botanicals. Thoughtful formulations.
          </h2>
          <p className="max-w-[500px] font-kumbh-sans text-sm leading-relaxed tracking-[0.08px] sm:text-base">
            Shea butter. Baobab oil. African black soap. Moringa. Cocoa butter. NAYA brings together ingredients long valued across Africa with contemporary formulation, beautiful scent and skilled craftsmanship.
          </p>
        </div>
        <div className="flex flex-col items-end gap-6">
          <a href="#ingredients-list" className="font-jost text-base font-medium underline underline-offset-4 sm:text-lg">
            Meet our ingredients
          </a>
          <Image src="/images/landing/icons/arrow-small.svg" alt="" width={56} height={24} />
        </div>
      </div>

      <div id="ingredients-list" className="mt-12 flex snap-x snap-mandatory items-end gap-6 overflow-x-auto scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden sm:grid sm:grid-cols-3 sm:gap-5 sm:overflow-visible sm:snap-none lg:mt-16 lg:gap-8">
        {ingredients.map((ingredient) => (
          <figure key={ingredient.name} className="w-[82vw] max-w-[360px] shrink-0 snap-start flex flex-col items-center gap-6 sm:mx-auto sm:w-full sm:max-w-[430px]">
            <div
              className={`relative w-full ${ingredient.aspect} ${ingredient.name === "Baobab" ? "rotate-180" : ""}`}
              style={{
                maskImage: `url("${ingredient.mask}")`,
                WebkitMaskImage: `url("${ingredient.mask}")`,
                maskSize: "100% 100%",
                WebkitMaskSize: "100% 100%",
                maskRepeat: "no-repeat",
                WebkitMaskRepeat: "no-repeat",
              }}
            >
              <Image
                src={ingredient.image}
                alt={`${ingredient.name} ingredient`}
                fill
                sizes="(min-width: 1024px) 28vw, (min-width: 640px) 30vw, 90vw"
                className={`object-cover ${ingredient.name === "Baobab" ? "rotate-180" : ""}`}
              />
            </div>
            <figcaption className="font-jost text-center text-xl font-medium">{ingredient.name}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
