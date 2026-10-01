import Link from "next/link";
import { Poppins } from "next/font/google";
import Footer from "./Footer/page";
import Navbar from "./Navbar/page";



const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

export default function NotFound() {
  return (
    <div className={`${poppins.className} bg-white text-gray-900 antialiased`}>
      <section className="relative w-full overflow-hidden bg-[#0732df]">
        {/* Grid lines */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 mix-blend-hard-light
          bg-[linear-gradient(rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.25)_1px,transparent_1px)]
          bg-[size:120px_120px] bg-[position:center_top]"
        />

        {/* NAVBAR ekhane boshao (hero-r upor overlay hole: absolute inset-x-0 top-0 z-30) */}
        <Navbar></Navbar>

        <div className="relative z-10 mx-auto flex max-w-[1180px] flex-col items-center px-5 pb-20 pt-28 text-center text-white md:px-8 md:pb-24 md:pt-32">
          {/* Big 404, niche-er dike fade hoye jay */}
          <p
            aria-hidden="true"
            className="select-none bg-gradient-to-b from-[#D4FF1F] from-35% to-[#D4FF1F]/0 bg-clip-text text-[150px] font-semibold leading-[0.85] tracking-tight text-transparent sm:text-[240px] md:text-[340px]"
          >
            404
          </p>

          <h1 className="-mt-12 max-w-[640px] text-4xl font-semibold leading-[1.15] sm:-mt-20 sm:text-5xl md:-mt-28 md:text-[56px]">
            The page you are looking for doesn&apos;t exist
          </h1>

          <p className="mt-6 text-xs sm:text-sm">
            Try to use a correct url or go back to homepage to start again
          </p>

          <Link
            href="/"
            className="mt-8 rounded-full bg-[#D4FF1F] px-6 py-2.5 text-sm font-medium text-black transition hover:brightness-95"
          >
            Back to Home
          </Link>
        </div>
      </section>

      {/* FOOTER ekhane boshao */}
      <Footer></Footer>
    </div>
  );
}