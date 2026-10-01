"use client";

import { Search } from "lucide-react";
import Navbar from "../Navbar/page";

// Protita icon-er position/size/rotate className-e likho.
// left/top = icon-er center (stage-er %), w = width (stage-er %).
const slots = [
  {
    src: "/Image/3dIcon.png",
    className: "-left-[250px] top-[40%] w-[30%] rotate-45",
  },
  {
    src: "/Image/white-wave.png",
    className: "left-[0%] top-[55%] w-[15%]",
  },
  {
    src: "/Image/Cone1.png",
    className: "left-[15%] top-[83.5%] w-[20%]",
  },
  {
    src: "/Image/Cone.png",
    className: "left-[120%] top-[34.25%] w-[15%]",
  },
  {
    src: "/Image/Cone2.png",
    className: "left-[105%] top-[45%] w-[15%]",
  },
  {
    src: "/Image/white-wave.png",
    className: "left-[85%] top-[78.25%] w-[15%]",
  },
];

const avatars = [
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://randomuser.me/api/portraits/men/46.jpg",
  "https://randomuser.me/api/portraits/women/12.jpg",
  "https://randomuser.me/api/portraits/men/85.jpg",
  "https://randomuser.me/api/portraits/men/32.jpg",
  "https://randomuser.me/api/portraits/women/44.jpg",
];

export default function HeroPage() {
  return (
    // Outer: full width blue bg. Height = stage-er height (max 1 screen).
    <section
      className="relative flex w-full justify-center overflow-hidden bg-[#0732df] font-[Poppins,sans-serif]"
      style={{ ["--w" as string]: "min(100vw, calc(100svh * 717 / 512))" }}
    >
      {/* Grid lines: puro width jure */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
          backgroundSize: "calc(var(--w) * 0.0837) calc(var(--w) * 0.0837)",
          backgroundPosition: "center top",
        }}
      />

      {/* Navbar: full width */}
      <div className="absolute inset-x-0 top-0 z-30">
        <Navbar />
      </div>

      {/* Stage: proportion 717/512, screen-e fit hoy */}
      <div
        className="relative [container-type:inline-size]"
        style={{
          width: "var(--w)",
          aspectRatio: "717 / 512",
        }}
      >
        {/* Big lime circle behind the boy */}
        <div
          aria-hidden="true"
          className="absolute z-0 rounded-full bg-[#CCFF1A]"
          style={{ left: "13%", top: "56.5%", width: "75%", aspectRatio: "1 / 1" }}
        />

        {/* Heading + text + search */}
        <div className="absolute inset-x-0 top-[16%] z-20 flex flex-col items-center px-4 text-center">
          <h1 className="text-[clamp(28px,5.3cqw,84px)] font-semibold leading-[1.18] text-white">
            Get Access to Hundreds <br /> Courses Available
          </h1>
          <p className="mt-[3.4cqw] max-w-[90%] text-[clamp(10px,1.4cqw,20px)] font-normal text-white">
            Unlock your creativity, gain valuable knowledge, and grow your
            business with our wide range of courses.
          </p>

          <div className="mt-[3.4cqw] flex w-full min-w-[300px] max-w-[44cqw] items-center justify-center gap-[1.3cqw]">
            <div className="flex h-[clamp(36px,3.9cqw,60px)] flex-1 items-center gap-3 rounded-full bg-white px-[1.4cqw]">
              <Search className="h-4 w-4 shrink-0 text-gray-400" aria-hidden="true" />
              <input
                type="text"
                placeholder="Course, topic, creator"
                aria-label="Search courses"
                className="w-full bg-transparent text-[clamp(11px,1.2cqw,16px)] text-gray-800 placeholder-gray-400 outline-none"
              />
            </div>
            <button
              type="button"
              className="h-[clamp(36px,3.9cqw,60px)] shrink-0 rounded-full bg-[#D4FF1F] px-[2cqw] text-[clamp(11px,1.2cqw,16px)] font-medium text-black transition hover:brightness-95"
            >
              Search
            </button>
          </div>
        </div>

        {/* Decorative 3D icons */}
        {slots.map((s, i) => (
          // eslint-disable-next-line @next/next/no-img-element
          <img
            key={i}
            src={s.src}
            alt=""
            aria-hidden="true"
            draggable={false}
            className={`pointer-events-none absolute z-10 hidden h-auto -translate-x-1/2 -translate-y-1/2 select-none sm:block ${s.className}`}
          />
        ))}

        {/* Boy image */}
        <div
          className="absolute bottom-0 z-10 flex items-end justify-center"
          style={{ left: "31%", width: "36%", height: "47%" }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/hero-image/boyImage.png"
            alt="Student with laptop"
            className="max-h-full max-w-full object-contain object-bottom"
          />
        </div>

        {/* Card: UI/UX Design */}
        <div
          className="absolute z-20 flex flex-col justify-center rounded-xl bg-white px-[1.1cqw] shadow-md"
          style={{ left: "27.9%", top: "62.3%", width: "14.6%", height: "7.2%" }}
        >
          <p className="text-[clamp(8px,1.05cqw,15px)] font-medium text-black">UI/UX Design</p>
          <p className="mt-0.5 text-[clamp(6px,0.8cqw,11px)] text-gray-400">
            200 Courses &bull; 1000+ Students
          </p>
        </div>

        {/* Card: Learning Progress */}
        <div
          className="absolute z-20 flex flex-col justify-center rounded-xl bg-white px-[1.2cqw] shadow-md"
          style={{ left: "58.4%", top: "63.8%", width: "16.3%", height: "12.8%" }}
        >
          <p className="text-[clamp(7px,0.95cqw,13px)] text-gray-700">Learning Progress</p>
          <p className="text-[clamp(18px,2.9cqw,44px)] font-semibold leading-tight text-black">55%</p>
          <div className="h-[0.5cqw] min-h-[4px] w-full overflow-hidden rounded-full bg-gray-200">
            <div className="h-full w-[55%] rounded-full bg-[#D4FF1F]" />
          </div>
        </div>

        {/* Card: Happy Students */}
        <div
          className="absolute z-20 flex flex-col justify-center rounded-xl bg-white px-[1.1cqw] shadow-md"
          style={{ left: "22.6%", top: "82%", width: "18.2%", height: "12%" }}
        >
          <p className="text-[clamp(8px,1.05cqw,15px)] font-medium text-black">Happy Students</p>
          <p className="mt-0.5 text-[clamp(6px,0.8cqw,11px)] text-gray-500">
            4.5 (240) <span className="text-[#D4FF1F]">&#9733;</span>
          </p>
          <div className="mt-[0.6cqw] flex items-center">
            {avatars.map((src, i) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                key={src}
                src={src}
                alt=""
                className={`h-[2.3cqw] max-h-[34px] min-h-[18px] w-[2.3cqw] min-w-[18px] max-w-[34px] rounded-full border-2 border-white object-cover ${
                  i > 0 ? "-ml-[0.6cqw]" : ""
                }`}
              />
            ))}
            <span className="-ml-[0.6cqw] flex h-[2.3cqw] max-h-[34px] min-h-[18px] w-[2.3cqw] min-w-[18px] max-w-[34px] items-center justify-center rounded-full border-2 border-white bg-[#D4FF1F] text-[clamp(6px,0.75cqw,10px)] font-semibold text-black">
              2K+
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}