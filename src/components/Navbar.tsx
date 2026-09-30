import Image from "next/image";
import Link from "next/link";

const iconClass = "shrink-0";

export function Navbar() {
  return (
    <nav aria-label="Main navigation" className="absolute left-0 right-0 top-0 z-50 flex w-full items-center justify-between px-4 py-6 sm:px-6 lg:px-[56px]">
      <div className="hidden items-center gap-[29px] rounded-[20px] bg-white px-6 py-4 font-kumbh-sans text-base font-medium text-[#1e1e1e] lg:flex">
        <Link href="#shop" className="flex items-center gap-2 transition-opacity hover:opacity-70">
          Shop
          <Image src="/images/landing/icons/arrow-down.svg" alt="" width={20} height={20} className={iconClass} />
        </Link>
        <Link href="#bestsellers" className="transition-opacity hover:opacity-70">Tribe Favourite</Link>
        <Link href="#stores" className="transition-opacity hover:opacity-70">Gifts</Link>
        <span aria-hidden="true" className="h-[26px] w-0.5 bg-[#e6e6e6]" />
        <Link href="#bestsellers" aria-label="Search products" className="transition-opacity hover:opacity-70">
          <Image src="/images/landing/icons/search.svg" alt="" width={24} height={24} className={iconClass} />
        </Link>
      </div>

      <Link href="/" aria-label="NAYA By Africa home" className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity hover:opacity-80">
        <Image src="/images/landing/naya-logo-white.png" alt="NAYA By Africa" width={227} height={72} priority className="h-auto w-[112px] sm:w-[170px] lg:w-[227px]" />
      </Link>

      <div className="ml-auto hidden items-center gap-4 rounded-[20px] bg-white px-6 py-4 font-kumbh-sans text-base font-medium text-[#1e1e1e] lg:flex">
        <Link href="#our-story" className="transition-opacity hover:opacity-70">Our Story</Link>
        <Link href="#ingredients" className="transition-opacity hover:opacity-70">Ingredients</Link>
        <span aria-hidden="true" className="h-[26px] w-0.5 bg-[#e6e6e6]" />
        <button type="button" aria-label="Country: Ghana" className="flex items-center gap-2 transition-opacity hover:opacity-70">
          <Image src="/images/landing/icons/ghana-flag.svg" alt="" width={24} height={24} className={iconClass} />
          <Image src="/images/landing/icons/arrow-down.svg" alt="" width={20} height={20} className={iconClass} />
        </button>
        <span aria-hidden="true" className="h-[26px] w-0.5 bg-[#e6e6e6]" />
        <Link href="#shop" aria-label="Shopping basket" className="transition-opacity hover:opacity-70">
          <Image src="/images/landing/icons/shopping-basket.svg" alt="" width={24} height={24} className={iconClass} />
        </Link>
      </div>

      <div className="flex items-center gap-2 rounded-[14px] bg-white px-3 py-2 font-kumbh-sans text-sm font-medium text-[#1e1e1e] lg:hidden">
        <Link href="#shop" className="flex items-center gap-1">
          Shop
          <Image src="/images/landing/icons/shopping-basket.svg" alt="" width={16} height={16} />
        </Link>
      </div>

      <div className="flex items-center gap-3 rounded-[14px] bg-white px-3 py-2 font-kumbh-sans text-sm font-medium text-[#1e1e1e] lg:hidden">
        <details className="group relative">
          <summary className="flex cursor-pointer list-none items-center gap-2 [&::-webkit-details-marker]:hidden">
            Menu
            <span aria-hidden="true" className="flex w-4 flex-col gap-[3px]">
              <span className="h-px w-full bg-current" />
              <span className="h-px w-full bg-current" />
              <span className="h-px w-full bg-current" />
            </span>
          </summary>
          <div className="absolute right-0 top-full mt-3 flex min-w-44 flex-col gap-4 rounded-xl bg-white p-4 text-sm shadow-lg">
            <Link href="#bestsellers">Tribe Favourite</Link>
            <Link href="#stores">Gifts</Link>
            <Link href="#our-story">Our Story</Link>
            <Link href="#ingredients">Ingredients</Link>
          </div>
        </details>
        
      </div>
    </nav>
  );
}
