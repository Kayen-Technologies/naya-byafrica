import Image from "next/image";

const values = [
  {
    image: "/images/landing/icons/rooted-botanicals.svg",
    lines: ["Rooted in", "African botanicals"],
    width: 23.4062,
    height: 35.0243,
  },
  {
    image: "/images/landing/icons/plant-based.svg",
    lines: ["Plant-based", "formulations"],
    width: 28.6275,
    height: 38.9375,
  },
  {
    image: "/images/landing/icons/crafted-in-ghana.svg",
    lines: ["Thoughtfully", "crafted in Ghana"],
    width: 56,
    height: 56,
  },
  {
    image: "/images/landing/icons/everyday-rituals.svg",
    lines: ["Made for", "everyday rituals"],
    width: 33.4689,
    height: 41.1621,
  },
];

function ValueItem({ value }: { value: (typeof values)[number] }) {
  return (
    <div className="flex items-center gap-2 text-[#153c35]">
      <div className="flex h-14 w-14 shrink-0 items-center justify-center">
        <Image src={value.image} alt="" width={value.width} height={value.height} />
      </div>
      <p className="font-kumbh-sans text-xs leading-tight sm:text-sm lg:text-base">
        {value.lines[0]}
        <br />
        {value.lines[1]}
      </p>
    </div>
  );
}

export function ValueStrip() {
  return (
    <section aria-label="NAYA values" className="bg-white px-6 py-5 sm:px-10 sm:py-10 lg:px-[3.5vw]">
      <ul className="sr-only">
        {values.map((value) => <li key={value.lines[1]}>{value.lines.join(" ")}</li>)}
      </ul>

      <div className="hidden w-full grid-cols-2 gap-5 sm:grid sm:grid-cols-4 sm:gap-4 lg:flex lg:justify-between">
        {values.map((value) => <ValueItem key={value.lines[1]} value={value} />)}
      </div>

      <div aria-hidden="true" className="overflow-hidden sm:hidden">
        <div className="value-strip-marquee flex w-max">
          {[0, 1].map((copy) => (
            <div key={copy} className="flex shrink-0 gap-8 pr-8">
              {values.map((value) => <ValueItem key={value.lines[1]} value={value} />)}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
