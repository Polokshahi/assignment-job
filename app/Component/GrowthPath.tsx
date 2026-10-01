"use client";

import Image from "next/image";

export default function GrowthSection() {
  return (
    <section className="relative w-full overflow-hidden bg-white">
      
      {/* ================= TOP SECTION ================= */}
      <div className="relative mx-auto min-h-[730px] w-full max-w-[1440px]">
        
        {/* Background glow */}
        <div className="pointer-events-none absolute -left-[180px] -top-[150px] h-[650px] w-[650px] rounded-full bg-[#e8ff8a] opacity-70 blur-[100px]" />
        
        <div className="pointer-events-none absolute right-[-180px] top-[-80px] h-[600px] w-[600px] rounded-full bg-[#e8edff] opacity-80 blur-[100px]" />

        {/* Left content */}
        <div className="absolute left-[7%] top-[165px] z-10 max-w-[520px]">
          <h2 className="text-[42px] font-bold leading-[1.08] tracking-[-1.5px] text-[#24262b]">
            Your Path to Professional
            <br />
            Growth Starts Here!
          </h2>

          <p className="mt-8 max-w-[510px] text-[16px] leading-[1.5] text-[#666970]">
            Explore our curated selection of courses tailored to enhance
            your capabilities and accelerate your career journey.
            Whether you are looking to sharpen specific skills, gain
            industry expertise, or embark on a new career path entirely,
            we have the resources you need.
          </p>

          {/* Stats */}
          <div className="mt-10 flex gap-[55px]">
            <div>
              <div className="text-[32px] font-semibold leading-none text-[#1455e8]">
                12K
              </div>
              <div className="mt-2 text-[15px] text-[#666970]">
                Students
              </div>
            </div>

            <div>
              <div className="text-[32px] font-semibold leading-none text-[#1455e8]">
                70+
              </div>
              <div className="mt-2 text-[15px] text-[#666970]">
                Courses
              </div>
            </div>

            <div>
              <div className="text-[32px] font-semibold leading-none text-[#1455e8]">
                16
              </div>
              <div className="mt-2 text-[15px] text-[#666970]">
                Creators
              </div>
            </div>
          </div>
        </div>

        {/* Right visual */}
        <div className="absolute right-[5%] top-[100px] h-[520px] w-[620px]">
          
          {/* Main course card */}
          <div className="absolute left-[30px] top-0 z-10 w-[315px] rounded-[20px] border border-[#d9d9d9] bg-white p-[12px] shadow-sm">
            <div className="relative h-[195px] overflow-hidden rounded-[13px] bg-[#eee]">
              <img
                src="/hero-image/boyImage.png"
                alt=""
                className="h-full w-full object-cover"
              />

              <div className="absolute bottom-3 left-3 rounded-full bg-white/90 px-3 py-2 text-[11px] text-[#555]">
                17 Lessons
              </div>

              <div className="absolute bottom-3 left-[95px] rounded-full bg-white/90 px-3 py-2 text-[11px] text-[#555]">
                2 hours 16 min
              </div>
            </div>

            <h3 className="mt-4 text-[18px] font-semibold text-[#111]">
              Learn Figma from
            </h3>

            <p className="text-[11px] text-[#555]">
              by <span className="text-[#285be8]">purepearl studio</span>
            </p>

            <div className="mt-3 flex items-center gap-2">
              <span className="rounded-full bg-[#f2f2f2] px-3 py-1 text-[11px]">
                📊 Beginner
              </span>
            </div>

            <div className="mt-3 text-[20px] font-semibold text-[#1455e8]">
              $25
              <span className="ml-1 text-[11px] font-normal text-[#555]">
                /lifetime
              </span>
            </div>
          </div>

          {/* Person */}
          <img
            src="/hero-image/boyImage.png"
            alt=""
            className="absolute bottom-0 right-[60px] z-20 h-[500px] w-auto object-contain"
          />

          {/* Progress card */}
          <div className="absolute right-0 top-[180px] z-30 w-[235px] rounded-[16px] bg-white p-4 shadow-[0_10px_35px_rgba(0,0,0,0.08)]">
            <p className="text-[12px] text-[#555]">
              Learning Progress
            </p>

            <div className="mt-2 text-[40px] font-bold leading-none text-[#25272b]">
              55%
            </div>

            <div className="mt-4 h-[8px] overflow-hidden rounded-full bg-[#f1f1f1]">
              <div className="h-full w-[55%] rounded-full bg-[#b8ff00]" />
            </div>
          </div>

          {/* Green shape */}
         <img
  src="/hero-image/3dIcon.png"
  alt="Wavy Shape"
  className="absolute -right-[50px] top-[20px]  z-30 w-[216px] h-auto object-contain pointer-events-none -rotate-12"
/>
        </div>
      </div>


      {/* ================= BOTTOM SECTION ================= */}
      <div className="relative mx-auto min-h-[730px] w-full max-w-[1440px]">

        {/* Background glow */}
        <div className="pointer-events-none absolute bottom-[-150px] left-[-150px] h-[550px] w-[550px] rounded-full bg-[#eaff89] opacity-70 blur-[110px]" />

        <div className="pointer-events-none absolute bottom-[-100px] right-[-150px] h-[600px] w-[600px] rounded-full bg-[#dce3ff] opacity-80 blur-[120px]" />

        {/* Left visual */}
        <div className="absolute left-[7%] top-[40px] h-[650px] w-[500px]">

          {/* Revenue card */}
          <div className="absolute left-0 top-[25px] z-10 w-[205px] rounded-[17px] bg-[#124bea] p-4 text-white">
            <p className="text-[12px]">Total Revenue</p>
            <p className="text-[9px]">July 1-28</p>

            <p className="mt-3 text-[21px] font-bold">
              $120.29
            </p>

            <div className="mt-3 h-[7px] rounded-full bg-white/30">
              <div className="h-full w-[52%] rounded-full bg-[#b8ff00]" />
            </div>
          </div>

          {/* Year card */}
          <div className="absolute left-0 top-[175px] z-10 w-[135px] rounded-[17px] bg-[#124bea] p-4 text-white">
            <p className="text-[12px]">Year to Date</p>
            <p className="text-[9px]">2023</p>

            <p className="mt-3 text-[19px] font-bold">
              $1,200.38
            </p>

            <span className="mt-3 inline-block rounded-full bg-[#b8ff00] px-2 py-1 text-[9px] font-semibold text-[#111]">
              +12$
            </span>
          </div>

          {/* Woman */}
          <img
            src="/hero-image/girl.png"
            alt=""
            className="absolute bottom-0 left-[70px] z-20 h-[550px] w-auto object-contain"
          />

          {/* Green shape */}
          <img
            src="/hero-image/3dIcon.png"
            alt=""
            className="absolute left-[280px] top-[190px] z-30 w-[216px] h-auto object-contain rotate-30"
          />

          {/* Happy students */}
          <div className="absolute bottom-[70px] right-[-20px] z-40 w-[260px] rounded-[18px] bg-white p-4 shadow-[0_10px_35px_rgba(0,0,0,0.08)]">
            <p className="text-[13px] font-medium text-[#333]">
              Happy Students
            </p>

            <p className="text-[10px] text-[#777]">
              4.5 (240) ⭐
            </p>

            <div className="mt-2 flex items-center">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4, 5].map((item) => (
                  <div
                    key={item}
                    className="h-[34px] w-[34px] rounded-full border-2 border-white bg-[#ddd]"
                  />
                ))}
              </div>

              <div className="ml-auto flex h-[40px] w-[40px] items-center justify-center rounded-full bg-[#b8ff00] text-[10px] font-bold">
                2K+
              </div>
            </div>
          </div>
        </div>


        {/* Right content */}
        <div className="absolute right-[8%] top-[110px] max-w-[570px]">
          <h2 className="text-[42px] font-bold leading-[1.08] tracking-[-1.5px] text-[#24262b]">
            Create & Manage
            <br />
            Courses Easily.
          </h2>

          <p className="mt-8 text-[16px] leading-[1.6] text-[#666970]">
            ByteSpace supports individuals or entities in the creation,
            publication, and administration of educational courses.
          </p>

          <div className="mt-8 space-y-4">
            {[
              "Share Your Expertise",
              "Monetize Your Passion",
              "Flexibility and Autonomy",
              "Build a Community",
            ].map((item) => (
              <div
                key={item}
                className="flex items-center gap-3 text-[15px] text-[#333]"
              >
                <span className="flex h-[20px] w-[20px] items-center justify-center rounded-full bg-[#1455e8] text-[12px] font-bold text-white">
                  ✓
                </span>

                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}