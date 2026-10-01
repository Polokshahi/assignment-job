import type { CSSProperties } from "react";

type SlotProps = {
  src: string;
  className: string; // position + size
};

function IconSlot({ src, className }: SlotProps) {
  return (
    // eslint-disable-next-line @next/next/no-img-element
    <img
      src={src}
      alt=""
      aria-hidden="true"
      draggable={false}
      className={`pointer-events-none absolute select-none object-contain ${className}`}
    />
  );
}

// Shob icon-e ekhon ek-i image. Pore protita-r path alada kore nio.


const icons: SlotProps[] = [
  { src: "/Image/3dIcon.png", className: "-left-[118px] -top-[140px] h-[385px] w-[385px] rotate-50" },
  { src: "/Image/white-wave.png", className: "left-[200px] top-[28px] hidden h-[175px] w-[175px] md:block -rotate-10" },
  { src: "/Image/Cone-green.png", className: "right-[160px] top-[18px] hidden h-[188px] w-[188px] md:block" },
  { src: "/Image/Cone-white.png", className: "-right-6 top-[55px] h-[200px] w-[110px] md:h-[275px] md:w-[150px]" },
  { src: "/Image/Cone2.png", className: "-left-[70px] bottom-[70px] hidden h-[188px] w-[188px] md:block -rotate-28" },
  { src: "/Image/Cone-ring-green.png", className: "-bottom-[100px] left-[55px] h-[342px] w-[342px]" },
  { src: "/Image/3dIcon.png", className: "-bottom-[150px] right-[65px] hidden h-[330px] w-[330px] md:block" },
];

const gridStyle: CSSProperties = {
  mixBlendMode: "hard-light",
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)",
  backgroundSize: "95px 95px",
  backgroundPosition: "center top",
};

export default function Unlock() {
  return (
    <section className="relative w-full  overflow-hidden bg-[#0038E0] font-[Poppins,sans-serif]">
      {/* Grid overlay */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0"
        style={gridStyle}
      />

      {/* Icons */}
      {icons.map((icon, i) => (
        <IconSlot key={i} src={icon.src} className={icon.className} />
      ))}

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-[760px] flex-col items-center px-4 py-16 text-center text-white md:py-[68px]">
        <h2 className="max-w-[640px] text-3xl font-semibold leading-[1.25] md:text-[40px]">
  Unlock Your Potential as a
  <br className="hidden md:block" /> Creator with ByteSpace
</h2>

        <p className="mt-8 text-sm leading-[1.75] md:mt-[38px]">
          Experience the collaboration of numerous creators and an expanding
          selection of courses. Register now and become a part of a community
          comprising over 10,000 local and international creators. Utilize our
          Course Editor, and showcase your expertise by publishing your finest
          course on the ByteSpace Course Library.
        </p>

        <button
          type="button"
          className="mt-8 rounded-full bg-[#D4FF1F] px-[18px] py-[10px] text-sm font-medium text-black transition hover:brightness-95 md:mt-[38px]"
        >
          Join as Creator
        </button>
      </div>
    </section>
  );
}