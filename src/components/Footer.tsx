import Image from "next/image";

const footerColumns = [
  { title: "Shop", links: ["Tribe Favourites", "Shop All Products", "Soaps & Cleansers", "Creams & Moisturizers", "Body Oils", "Gifts & Bundles"] },
  { title: "Discover", links: ["Our Story", "Meet the founder", "Our Ingredients", "Visit Our Stores"] },
  { title: "Customer Care", links: ["Contact Us", "Shipping & Delivery", "Returns & Exchanges", "Privacy Policy", "Terms & Conditions"] },
];

export function Footer() {
  return (
    <footer id="footer" className="bg-[#48122d] px-6 py-16 text-white sm:px-10 lg:px-[3.5vw] lg:py-20">
      <div className="w-full">
        <div className="mx-auto flex max-w-[578px] flex-col items-center gap-10 text-center lg:gap-14">
          <Image src="/images/landing/naya-logo-white.png" alt="NAYA By Africa" width={252} height={80} className="h-20 w-auto object-contain" />
          <p className="font-jost text-3xl font-medium leading-tight sm:text-4xl lg:text-[56px]">African botanicals, elevated for modern self-care.</p>
        </div>

        <div className="my-16 border-t border-white/50" />

        <div className="grid grid-cols-2 gap-x-8 gap-y-12 sm:grid-cols-3 lg:flex lg:justify-between">
          {footerColumns.map((column) => (
            <div key={column.title}>
              <h2 className="font-jost text-xl font-medium sm:text-2xl">{column.title}</h2>
              <ul className="mt-8 space-y-5 font-kumbh-sans text-sm sm:text-base">
                {column.links.map((link) => (
                  <li key={link}><a href="#shop" className="transition-opacity hover:opacity-70">{link}</a></li>
                ))}
              </ul>
            </div>
          ))}
          <div>
            <h2 className="font-jost text-xl font-medium sm:text-2xl">Visit Us</h2>
            <div className="mt-8 space-y-5 font-kumbh-sans text-sm leading-relaxed sm:text-base">
              <p>A&amp;C Mall<br />East Legon, Accra</p>
              <p>Marina Mall<br />Airport City, Accra</p>
            </div>
          </div>
          <div>
            <h2 className="font-jost text-xl font-medium sm:text-2xl">Socials</h2>
            <ul className="mt-8 space-y-5 font-kumbh-sans text-sm sm:text-base">
              {["facebook", "twitter (X)", "Instagram", "tiktok"].map((social) => (
                <li key={social}><a href="#socials" className="transition-opacity hover:opacity-70">{social}</a></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
