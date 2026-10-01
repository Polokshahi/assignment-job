import type { CSSProperties } from "react";

type SlotProps = {
  label: string;
  className: string;
  tone?: "lime" | "white";
};

// Icon-er jaiga: pore replace kore <Image /> ba <svg /> boshiye nio
function IconSlot({ label, className, tone = "lime" }: SlotProps) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute flex items-center justify-center rounded-2xl border-2 border-dashed text-xs font-medium ${
        tone === "lime"
          ? "border-[#D4FF1F] bg-[#D4FF1F]/30 text-[#D4FF1F]"
          : "border-white bg-white/30 text-white"
      } ${className}`}
    >
      {label}
    </div>
  );
}

const gridStyle: CSSProperties = {
  position: "absolute",
  inset: 0,                      // top/right/bottom/left = 0, puro section cover
  width: "100%",
  height: "100%",
  opacity: 1,
  mixBlendMode: "hard-light",
  backgroundImage:
    "linear-gradient(rgba(255,255,255,0.25) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.25) 1px, transparent 1px)",
  backgroundSize: "95px 95px",
  backgroundPosition: "center top", // line-gulo majhkhan theke shomobhabe soray
};

export default function Unlock() {
  return (
    <section className="relative w-full overflow-hidden bg-[#0038E0] font-[Poppins,sans-serif]">
      {/* Grid overlay */}
      <div className="pointer-events-none absolute top-0" style={gridStyle} />

      {/* Icon placeholders: choto screen-e kichu hide kora */}
      <IconSlot label="Squiggle" className="-left-2.5 -top-2.5 h-[130px] w-[130px]" />
      <IconSlot label="Squiggle" tone="white" className="left-[165px] top-[28px] hidden h-[95px] w-[90px] md:flex" />
      <IconSlot label="Cone" className="right-[160px] top-[18px] hidden h-[115px] w-[100px] md:flex" />
      <IconSlot label="Cylinder" tone="white" className="-right-6 top-[55px] h-[200px] w-[110px] md:h-[275px] md:w-[150px]" />
      <IconSlot label="Cone" tone="white" className="-left-2 bottom-[70px] hidden h-[125px] w-[95px] md:flex" />
      <IconSlot label="Torus" className="-bottom-[60px] left-[55px] h-[140px] w-[190px]" />
      <IconSlot label="Squiggle" className="-bottom-[15px] right-[65px] hidden h-[130px] w-[115px] md:flex" />

      {/* Content: normal flow-e, tai height auto barbe */}
      <div className="relative z-10 mx-auto flex max-w-[760px] flex-col items-center px-4 py-16 text-center text-white md:py-[68px]">
        <h2 className="max-w-[460px] text-3xl font-semibold leading-[1.25] md:text-[40px]">
          Unlock Your Potential as a Creator with ByteSpace
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