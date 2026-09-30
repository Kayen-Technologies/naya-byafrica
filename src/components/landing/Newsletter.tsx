import Image from "next/image";

const newsletterImages = [
  "/images/landing/newsletter/tribe-1.png",
  "/images/landing/newsletter/tribe-2.png",
  "/images/landing/newsletter/tribe-3.png",
  "/images/landing/newsletter/tribe-4.png",
  "/images/landing/newsletter/tribe-5.png",
  "/images/landing/newsletter/tribe-6.png",
];
export function Newsletter() {
  return (
    <section id="newsletter" className="relative bg-white px-6 py-20 text-black sm:px-10 lg:min-h-[1015px] lg:px-0 lg:py-0">
      <div className="mx-auto flex max-w-[472px] flex-col items-center gap-6 text-center lg:absolute lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2">
        <h2 className="font-jost text-3xl font-medium leading-tight sm:text-4xl lg:text-[2.5rem]">Join the NAYA Tribe.</h2>
        <p className="font-kumbh-sans text-sm leading-relaxed tracking-[0.08px] sm:text-base">
          Receive new product stories, ingredient notes, store updates and thoughtful offers, delivered gently to your inbox.
        </p>
        <form className="flex w-full flex-col items-center gap-4">
          <label htmlFor="newsletter-email" className="flex h-[62px] w-full items-center justify-center border-b border-[#333] pb-4 font-kumbh-sans text-base">
            <span className="sr-only">Your email</span>
            <input id="newsletter-email" type="email" placeholder="Your Email" className="w-full bg-transparent text-center outline-none placeholder:text-black" />
          </label>
          <button type="submit" className="flex h-[50px] items-center justify-center rounded border border-black px-8 font-kumbh-sans text-sm transition-colors hover:bg-black hover:text-white sm:text-base">
            Join the tribe
          </button>
        </form>
      </div>

      <div aria-label="NAYA community" className="mt-10 grid grid-cols-3 gap-3 sm:gap-5 lg:mt-0">
        {newsletterImages.map((src, index) => (
          <div key={src} className={`relative aspect-square overflow-hidden ${index > 2 ? "hidden sm:block" : ""} lg:absolute lg:block lg:h-[245px] lg:w-[245px] ${[
            "lg:left-[14%] lg:top-[12%]",
            "lg:right-[14%] lg:top-[12%]",
            "lg:left-[7%] lg:top-[38%]",
            "lg:right-[7%] lg:top-[38%]",
            "lg:left-[16%] lg:bottom-[10%]",
            "lg:right-[16%] lg:bottom-[10%]",
          ][index]}`}>
            <Image src={src} alt="NAYA community member enjoying self-care" fill sizes="(min-width: 1024px) 245px, 30vw" className="object-cover" />
          </div>
        ))}
      </div>
    </section>
  );
}
