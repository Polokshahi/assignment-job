import { Poppins } from "next/font/google";
import Footer from "../Footer/page";
import Navbar from "../Navbar/page";

// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const avatars = [
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://randomuser.me/api/portraits/men/46.jpg",
  "https://randomuser.me/api/portraits/women/12.jpg",
  "https://randomuser.me/api/portraits/men/85.jpg",
];

const courses = [
  { id: 1, title: "Learn Figma from Basic", image: "https://picsum.photos/seed/figma-basic/600/400" },
  { id: 2, title: "Build Digital Asset", image: "https://picsum.photos/seed/digital-asset/600/400" },
  { id: 3, title: "the Power of Big Data", image: "https://picsum.photos/seed/big-data/600/400" },
  { id: 4, title: "Balancing Productivity and Creativity", image: "https://picsum.photos/seed/productivity/600/400" },
  { id: 5, title: "Mastering Money Management", image: "https://picsum.photos/seed/money/600/400" },
  { id: 6, title: "From Idea to Startup Success", image: "https://picsum.photos/seed/startup/600/400" },
].map((c) => ({
  ...c,
  author: "purepearl studio",
  lessons: "17 Lessons",
  duration: "2 hours 16 mins",
  comments: "59 Comments",
  rating: "4.5",
  level: "Beginner",
  price: "$25",
}));

function Icon({ d, className = "h-4 w-4" }: { d: string; className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
    >
      <path d={d} />
    </svg>
  );
}

function FilterButton({
  icon,
  children,
}: {
  icon: string;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2 text-xs font-medium text-gray-700 transition hover:bg-gray-50"
    >
      <Icon d={icon} className="h-3.5 w-3.5" />
      {children}
    </button>
  );
}

export default function Page() {
  return (
    <div className={`${poppins.className} bg-white text-gray-900 antialiased`}>
      {/* HERO */}
      <section className="relative w-full overflow-hidden bg-[#0732df]">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 mix-blend-hard-light
          bg-[linear-gradient(rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.25)_1px,transparent_1px)]
          bg-[size:95px_95px] bg-[position:center_top]"
        />

        {/* NAVBAR ekhane boshao (hero-r upor overlay hole: absolute inset-x-0 top-0 z-30) */}
       <Navbar></Navbar>

        <div className="relative z-10 mx-auto max-w-[1180px] px-5 pb-12 pt-28 text-white md:px-8 md:pt-32">
          <div className="flex items-center gap-5">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="https://randomuser.me/api/portraits/men/52.jpg"
              alt="PurePearl Studio"
              className="h-[72px] w-[72px] shrink-0 rounded-2xl bg-pink-300 object-cover"
            />
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h1 className="text-3xl font-semibold leading-tight md:text-[36px]">
                  PurePearl Studio
                </h1>
                <span className="rounded-full bg-[#D4FF1F] px-3 py-1 text-[11px] font-medium text-black">
                  Creator
                </span>
              </div>
              <p className="mt-1 text-sm">Passionate UI/UX, Web designer</p>
            </div>
          </div>

          <p className="mt-6 max-w-[900px] text-sm leading-[1.75]">
            Welcome to the creative world of [Creator&apos;s Name]. Here,
            you&apos;ll discover the passion, expertise, and inspiration that
            drive my creative journey. Let&apos;s explore and learn together!
            <br />
            Dive into my creative portfolio, showcasing a glimpse of my artistic
            endeavors. From digital designs to multimedia projects, each piece
            tells a unique story. Explore the world of creativity with me.
          </p>

          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full bg-white px-5 py-2 text-xs font-medium text-black">
                <span className="mr-2 text-gray-500">3</span>Products
              </span>
              <span className="rounded-full bg-white px-5 py-2 text-xs font-medium text-black">
                <span className="mr-2 text-gray-500">12</span>Followers
              </span>
            </div>
            <button
              type="button"
              className="rounded-full bg-[#D4FF1F] px-7 py-2.5 text-sm font-medium text-black transition hover:brightness-95"
            >
              Follow
            </button>
          </div>
        </div>
      </section>

      {/* FILTER BAR + GRID */}
      <section className="mx-auto max-w-[1180px] px-5 py-10 md:px-8">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-3">
            <FilterButton icon="M4 5h16l-6 8v6l-4-2v-4z">Filter</FilterButton>
            <FilterButton icon="M5 19V13M12 19V8M19 19V4">Level</FilterButton>
            <FilterButton icon="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z">
              Category
            </FilterButton>
          </div>
          <FilterButton icon="M4 7h16M7 12h10M10 17h4">Most relevant</FilterButton>
        </div>

        <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {courses.map((course) => (
            <article
              key={course.id}
              className="mx-auto flex h-[384px] w-full max-w-[373px] flex-col justify-between rounded-[24px] border border-gray-200 bg-white p-4 transition-shadow hover:shadow-md"
            >
              <div>
                <div className="relative h-[190px] overflow-hidden rounded-[18px] bg-gray-900">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={course.image}
                    alt={course.title}
                    loading="lazy"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute bottom-3 left-2 right-2 flex items-center justify-center gap-1.5">
                    {[course.lessons, course.duration, course.comments].map((label) => (
                      <span
                        key={label}
                        className="whitespace-nowrap rounded-full bg-white/40 px-3 py-1.5 text-[11px] text-gray-700 backdrop-blur-md"
                      >
                        {label}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex items-start justify-between gap-3">
                  <div className="min-w-0">
                    <p className="truncate text-lg font-semibold leading-tight text-black">
                      {course.title}
                    </p>
                    <p className="mt-1 text-[11px] text-gray-500">
                      by <span className="text-[#0732df]">{course.author}</span>
                    </p>
                  </div>
                  <span className="flex shrink-0 items-center gap-1 text-base text-gray-500">
                    {course.rating}
                    <span className="text-lg leading-none text-gray-300">&#9733;</span>
                  </span>
                </div>
              </div>

              <div>
                <div className="flex items-center gap-3">
                  <span className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-xs font-medium text-gray-600">
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
                      <rect x="1" y="8" width="3" height="5" rx="1" />
                      <rect x="5.5" y="5" width="3" height="8" rx="1" />
                      <rect x="10" y="2" width="3" height="11" rx="1" />
                    </svg>
                    {course.level}
                  </span>
                  <div className="flex items-center">
                    {avatars.map((src, i) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        key={src}
                        src={src}
                        alt=""
                        className={`h-[26px] w-[26px] rounded-full border-2 border-white object-cover ${i > 0 ? "-ml-2" : ""}`}
                      />
                    ))}
                    <span className="-ml-2 flex h-[26px] w-[26px] items-center justify-center rounded-full border-2 border-white bg-[#D4FF1F] text-[9px] font-semibold text-black">
                      26+
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-lg font-semibold text-[#0732df]">
                  {course.price}
                  <span className="text-[11px] font-normal text-gray-500">/lifetime</span>
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* FOOTER ekhane boshao */}
      <Footer></Footer>
    </div>
  );
}