"use client";

import { Search } from "lucide-react";
import Navbar from "../Navbar/page";

type Slot = {
  src: string;
  alt: string;
  cx: number; // icon-er center, section-er width-er % e
  cy: number; // icon-er center, section-er height-er % e
  width: number; // icon-er width, section-er width-er % e
};

// Sob icon-e ekhon ek-i placeholder. Pore protita-r src alada kore nio.

const slots: Slot[] = [
  { src: "/image/3dIcon.png", alt: "Lime squiggle", cx: 6.25, cy: 40, width: 14.5 }, //3dicon
  { src: "/image/white-wave.png", alt: "White squiggle", cx: 18.9, cy: 55, width: 8.6 }, //whitewave
  { src: "/image/Cone1.png", alt: "White ring", cx: 10.8, cy: 83.5, width: 12.8 },
  { src: "/image/Cone.png", alt: "Lime cylinder", cx: 94.8, cy: 34.25, width: 12.4 }, //cone
  { src: "/image/Cone2.png", alt: "White cone", cx: 83.4, cy: 54.4, width: 9.2 },
  { src: "/image/white-wave.png", alt: "White squiggle", cx: 90.2, cy: 78.25, width: 13.6 },
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
    <section className="relative aspect-[717/512] w-full overflow-hidden bg-[#0732df] font-[Poppins,sans-serif]">
      {/* Grid lines */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(to right,#fff 1px,transparent 1px),linear-gradient(to bottom,#fff 1px,transparent 1px)",
          backgroundSize: "8.37vw 8.37vw",
          backgroundPosition: "-0.3vw -0.3vw",
        }}
      />

      {/* Navbar */}
      <div className="absolute inset-x-0 top-0 z-30">
        <Navbar />
      </div>

      {/* Big lime circle behind the boy */}
      <div
        aria-hidden="true"
        className="absolute z-0 rounded-full bg-[#CCFF1A]"
        style={{ left: "13%", top: "56.5%", width: "75%", aspectRatio: "1 / 1" }}
      />

      {/* Heading + text + search */}
      <div className="absolute inset-x-0 top-[16%] z-20 flex flex-col items-center px-4 text-center">
        <h1 className="text-[clamp(28px,5.3vw,84px)] font-semibold leading-[1.18] text-white">
          Get Access to Hundreds <br /> Courses Available
        </h1>
        <p className="mt-[3.4vw] max-w-[90%] text-[clamp(10px,1.4vw,20px)] font-normal text-white">
          Unlock your creativity, gain valuable knowledge, and grow your
          business with our wide range of courses.
        </p>

        <div className="mt-[3.4vw] flex w-full min-w-[300px] max-w-[44vw] items-center justify-center gap-[1.3vw]">
          <div className="flex h-[clamp(36px,3.9vw,60px)] flex-1 items-center gap-3 rounded-full bg-white px-[1.4vw]">
            <Search className="h-4 w-4 shrink-0 text-gray-400" aria-hidden="true" />
            <input
              type="text"
              placeholder="Course, topic, creator"
              aria-label="Search courses"
              className="w-full bg-transparent text-[clamp(11px,1.2vw,16px)] text-gray-800 placeholder-gray-400 outline-none"
            />
          </div>
          <button
            type="button"
            className="h-[clamp(36px,3.9vw,60px)] shrink-0 rounded-full bg-[#D4FF1F] px-[2vw] text-[clamp(11px,1.2vw,16px)] font-medium text-black transition hover:brightness-95"
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
          style={{
            left: `${s.cx}%`,
            top: `${s.cy}%`,
            width: `${s.width}%`,
            height: "auto",
            transform: "translate(-50%, -50%)",
          }}
          className="pointer-events-none absolute z-10 hidden sm:block"
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
        className="absolute z-20 flex flex-col justify-center rounded-xl bg-white px-[1.1vw] shadow-md"
        style={{ left: "27.9%", top: "62.3%", width: "14.6%", height: "7.2%" }}
      >
        <p className="text-[clamp(8px,1.05vw,15px)] font-medium text-black">UI/UX Design</p>
        <p className="mt-0.5 text-[clamp(6px,0.8vw,11px)] text-gray-400">
          200 Courses &bull; 1000+ Students
        </p>
      </div>

      {/* Card: Learning Progress */}
      <div
        className="absolute z-20 flex flex-col justify-center rounded-xl bg-white px-[1.2vw] shadow-md"
        style={{ left: "58.4%", top: "63.8%", width: "16.3%", height: "12.8%" }}
      >
        <p className="text-[clamp(7px,0.95vw,13px)] text-gray-700">Learning Progress</p>
        <p className="text-[clamp(18px,2.9vw,44px)] font-semibold leading-tight text-black">55%</p>
        <div className="h-[0.5vw] min-h-[4px] w-full overflow-hidden rounded-full bg-gray-200">
          <div className="h-full w-[55%] rounded-full bg-[#D4FF1F]" />
        </div>
      </div>

      {/* Card: Happy Students */}
      <div
        className="absolute z-20 flex flex-col justify-center rounded-xl bg-white px-[1.1vw] shadow-md"
        style={{ left: "22.6%", top: "82%", width: "18.2%", height: "12%" }}
      >
        <p className="text-[clamp(8px,1.05vw,15px)] font-medium text-black">Happy Students</p>
        <p className="mt-0.5 text-[clamp(6px,0.8vw,11px)] text-gray-500">
          4.5 (240) <span className="text-[#D4FF1F]">&#9733;</span>
        </p>
        <div className="mt-[0.6vw] flex items-center">
          {avatars.map((src, i) => (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              key={src}
              src={src}
              alt=""
              className={`h-[2.3vw] max-h-[34px] min-h-[18px] w-[2.3vw] min-w-[18px] max-w-[34px] rounded-full border-2 border-white object-cover ${
                i > 0 ? "-ml-[0.6vw]" : ""
              }`}
            />
          ))}
          <span className="-ml-[0.6vw] flex h-[2.3vw] max-h-[34px] min-h-[18px] w-[2.3vw] min-w-[18px] max-w-[34px] items-center justify-center rounded-full border-2 border-white bg-[#D4FF1F] text-[clamp(6px,0.75vw,10px)] font-semibold text-black">
            2K+
          </span>
        </div>
      </div>
    </section>
  );
}