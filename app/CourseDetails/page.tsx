"use client";

import Link from "next/link";
import { useState } from "react";
import { Poppins } from "next/font/google";
import Footer from "../Footer/page";
import Navbar from "../Navbar/page";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const BLUE = "#0732df";
const LIME = "#D4FF1F";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/courses", label: "Courses" },
  { href: "/creators", label: "Creators" },
];

const lessons = [
  { no: "01", title: "Introduction to Digital Assets", time: "12 mins" },
  { no: "02", title: "Design Principles for Impacts", time: "18 mins" },
  { no: "03", title: "Advanced Techniques in Digital Creation", time: "24 mins" },
];

const includes = [
  { label: "Learning Resources", d: "M4 5h16v14H4zM8 9h8M8 13h5" },
  { label: "Quality Lesson Videos", d: "M4 6h12v12H4zM16 10l4-2v8l-4-2" },
  { label: "Certificate of Completion", d: "M5 4h14v12H5zM9 20l3-3 3 3M8 8h8M8 11h5" },
  { label: "Proven Curriculum", d: "M12 3l8 4-8 4-8-4 8-4zM6 10v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" },
];

const sneakPeek = [11, 22, 33, 44].map(
  (n) => `https://picsum.photos/seed/bytespace${n}/300/300`
);

const keyPoints = [
  "Foundational Concepts",
  "Design Principles Mastery",
  "Advanced Techniques in Digital Creation",
  "Project Showcases and Critique",
  "Optimizing for Various Platforms",
  "Digital Asset Management Best Practices",
  "Monetization Strategies",
  "Capstone Project: Building Your Portfolio",
];

// const reviews = [
//   { name: "Sarah M.", text: "Clear, practical and very well structured." },
//   { name: "James L.", text: "The project critiques were the best part." },
//   { name: "Alex B.", text: "Helped me launch my first digital product." },
// ];

const footerColumns = [
  ["Featured Course", "Featured Category", "Courses", "IT", "Design"],
  ["Development", "Marketing", "Photography", "Finance", "Sport"],
  ["Become a Creator", "Affiliate Program", "Contact", "Help", "About"],
];

const tabs = ["About", "Lessons", "Reviews"] as const;
type Tab = (typeof tabs)[number];

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



const lessonModules = [
  {
    title: "Module 1: Introduction to Digital Assets",
    desc: "Lay the groundwork with lessons like 'Understanding Digital Elements' and 'Navigating Design Software Tools.' Dive into the essentials of digital asset creation.",
  },
  {
    title: "Module 2: Design Principles for Impact",
    desc: "Master the principles that drive impactful designs with lessons such as 'Color Theory in Digital Design' and 'Typography Essentials.' Elevate your visual communication skills.",
  },
  {
    title: "Module 4: User-Centric Design Strategies",
    desc: "Understand 'Design Thinking in Digital Creation' and delve into 'User Experience (UX) Essentials.' Craft digital assets with a focus on user-centric design.",
  },
  {
    title: "Module 5: Interactive Media and Engagement",
    desc: "Engage your audience with lessons like 'Creating Interactive Presentations' and 'Integrating Multimedia Elements.' Master the art of creating immersive digital experiences.",
  },
  {
    title: "Module 6: Project Showcase and Critique",
    desc: "Perfect your presentation skills with 'Effective Presentation Techniques' and embrace collaboration with 'Peer Critique and Collaboration.' Showcase your work with confidence.",
  },
  {
    title: "Module 7: Optimizing Digital Assets for Various Platforms",
    desc: "Adapt your digital creations for 'Mobile Platforms' and optimize for 'Social Media.' Ensure widespread accessibility and engagement across diverse digital landscapes.",
  },
];

const progress = 55;



const ratingBreakdown = [
  { stars: 5, count: 720, pct: 92 },
  { stars: 4, count: 120, pct: 36 },
  { stars: 3, count: 21, pct: 6 },
  { stars: 2, count: 12, pct: 4 },
  { stars: 1, count: 16, pct: 4 },
];

const reviews = [
  {
    name: "PurePearl Studio",
    role: "UI/UX Designer",
    avatar: "https://randomuser.me/api/portraits/men/52.jpg",
    rating: 5,
    time: "a year ago",
    text: "The course provided me with a comprehensive understanding of digital asset creation. The lessons were in-depth, practical, and immediately applicable to my work. Highly recommended!",
  },
  {
    name: "Albert Flores",
    role: "UI/UX Designer",
    avatar: "https://randomuser.me/api/portraits/women/33.jpg",
    rating: 5,
    time: "a year ago",
    text: "This course transformed my approach to digital design. The combination of theory, hands-on exercises, and real-world applications made it a truly enriching experience. Excited to implement what I've learned!",
  },
  {
    name: "Cody Fisher",
    role: "UI/UX Designer",
    avatar: "https://randomuser.me/api/portraits/men/22.jpg",
    rating: 5,
    time: "a year ago",
    text: "The project showcase and critique module created a collaborative environment where I could showcase my work, receive valuable feedback, and refine my skills. It added a unique and valuable dimension to the learning process.",
  },
  {
    name: "Brooklyn Simmons",
    role: "UI/UX Designer",
    avatar: "https://randomuser.me/api/portraits/men/64.jpg",
    rating: 5,
    time: "a year ago",
    text: "The lessons on optimizing digital assets for various platforms were particularly insightful. The course adapts to the evolving digital landscape, and the engaging content kept me motivated throughout.",
  },
];

const ratingFilters = ["all", 5, 4, 3, 2, 1] as const;














function Logo({ dark = false }: { dark?: boolean }) {
    
  return (
    <Link href="/" className="flex items-center gap-2">
      <span
        className="flex h-7 w-7 items-center justify-center rounded-lg"
        style={{ backgroundColor: LIME }}
      >
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4"
          fill="none"
          stroke={BLUE}
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M7 4v16M7 8c5-3 10 0 10 4s-5 7-10 4" />
        </svg>
      </span>
      <span className={`text-base font-semibold ${dark ? "text-black" : "text-white"}`}>
        ByteSpace
      </span>
    </Link>
  );
}

function Pill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-xs font-medium text-gray-800">
      {children}
    </span>
  );
}

export default function CourseDetails() {
  const [tab, setTab] = useState<Tab>("About");
  const [ratingFilter, setRatingFilter] = useState<"all" | 1 | 2 | 3 | 4 | 5>("all");
const visibleReviews =
  ratingFilter === "all" ? reviews : reviews.filter((r) => r.rating === ratingFilter);
  const [menuOpen, setMenuOpen] = useState(false);

  

  return (
    <div className={`${poppins.className} bg-white text-gray-900 antialiased`}>
      {/* overflow-x-clip (not overflow-hidden) so the sticky sidebar still works */}
      <main className="relative w-full overflow-x-clip">

        <Navbar></Navbar>
        {/* Blue hero background + grid lines */}
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 h-[620px] bg-[#0732df] md:h-[680px]"
        >
          <div
            className="absolute inset-0 mix-blend-hard-light
            bg-[linear-gradient(rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.25)_1px,transparent_1px)]
            bg-[size:95px_95px] bg-[position:center_top]"
          />
        </div>

        {/* NAVBAR */}
        {/* <header className="absolute inset-x-0 top-0 z-30">
          <nav className="mx-auto flex h-16 max-w-[1180px] items-center justify-between px-5 md:px-8">
            <Logo />

            <ul className="hidden items-center gap-8 text-xs font-medium text-white md:flex">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="transition hover:text-[#D4FF1F]">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="hidden items-center gap-5 text-xs font-medium text-white md:flex">
              <Link href="/sign-in" className="transition hover:text-[#D4FF1F]">
                Sign in
              </Link>
              <Link href="/join" className="transition hover:text-[#D4FF1F]">
                Join Us
              </Link>
              <Link
                href="/cart"
                aria-label="Cart"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/70 transition hover:bg-white/10"
              >
                <Icon d="M5 7h14l-1.5 10h-11zM9 7a3 3 0 016 0" />
              </Link>
            </div>

            <button
              type="button"
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
              onClick={() => setMenuOpen((v) => !v)}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/70 text-white md:hidden"
            >
              <Icon
                className="h-5 w-5"
                d={menuOpen ? "M6 6l12 12M18 6L6 18" : "M4 7h16M4 12h16M4 17h16"}
              />
            </button>
          </nav>

          {menuOpen && (
            <div className="mx-5 rounded-2xl bg-white p-5 shadow-lg md:hidden">
              <ul className="space-y-4 text-sm font-medium text-gray-800">
                {navLinks.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} onClick={() => setMenuOpen(false)}>
                      {l.label}
                    </Link>
                  </li>
                ))}
                <li className="flex gap-3 pt-2">
                  <Link href="/sign-in" className="rounded-full bg-gray-100 px-4 py-2 text-xs">
                    Sign in
                  </Link>
                  <Link href="/join" className="rounded-full bg-[#D4FF1F] px-4 py-2 text-xs">
                    Join Us
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </header> */}

        

        {/* CONTENT */}
        <div className="relative z-10 mx-auto max-w-[1180px] px-5 pb-20 pt-28 md:px-8 md:pt-32">
          {/* Title block */}
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row ">
            <div className=" text-white">
              <h1 className="text-3xl font-semibold leading-tight md:text-[40px]">
                Build Digital Asset: A Comprehensive Guide
              </h1>
              <p className="mt-3 text-base md:text-lg">
                Unlock the Power of Digital Creation with Expert Guidance
              </p>
              <p className="mt-4 text-sm">
                by <span className="font-medium text-[#D4FF1F]">purepearl studio</span>
              </p>
              <div className="mt-5 flex flex-wrap gap-3">
                <Pill>
                  <Icon d="M5 19V13M12 19V8M19 19V4" />
                  Intermediate
                </Pill>
                <Pill>
                  <span className="text-[#0732df]">&#9733;</span>
                  4.9 (172 reviews)
                </Pill>
                <Pill>
                  <Icon d="M16 19v-1a4 4 0 00-4-4H8a4 4 0 00-4 4v1M10 10a3 3 0 100-6 3 3 0 000 6z" />
                  199 Students
                </Pill>
              </div>
            </div>

            <button
              type="button"
              className="inline-flex items-center gap-2 rounded-full bg-[#D4FF1F] px-5 py-2.5 text-sm font-medium text-black transition hover:brightness-95"
            >
              <Icon d="M4 12v7h16v-7M12 3v12M8 7l4-4 4 4" />
              Share
            </button>
          </div>

          {/* Main grid */}
          <div className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]">
            {/* LEFT */}
            <div className="min-w-0">
              <div className="relative aspect-[16/10] overflow-hidden rounded-[24px] bg-gray-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src="/hero-image/girlCourseImg.jpg"
                  alt="Course preview"
                  className="h-full w-full object-cover"
                />
                <button
                  type="button"
                  aria-label="Play video"
                  className="absolute left-1/2 top-1/2 flex h-16 w-16 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white/60 backdrop-blur-md transition hover:bg-white/80"
                >
                  <svg viewBox="0 0 24 24" className="h-7 w-7 fill-white" aria-hidden="true">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </button>
              </div>

              {/* Tabs */}
              <div className="mt-10 flex gap-3" role="tablist">
                {tabs.map((t) => (
                  <button
                    key={t}
                    type="button"
                    role="tab"
                    aria-selected={tab === t}
                    onClick={() => setTab(t)}
                    className={`rounded-full px-5 py-2 text-xs font-medium transition ${
                      tab === t
                        ? "bg-[#D4FF1F] text-black"
                        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
                    }`}
                  >
                    {t}
                  </button>
                ))}
              </div>

              {tab === "About" && (
                <div>
                  <h2 className="mt-8 text-xl font-semibold">Description</h2>
                  <div className="mt-4 space-y-5 text-sm leading-[1.8] text-gray-600">
                    <p>
                      Embark on an enlightening exploration into the world of digital
                      creation with our comprehensive course, &quot;Build Digital
                      Assets: A Comprehensive Guide.&quot; This transformative learning
                      experience delves deep into the intricacies of crafting impactful
                      digital assets. From laying the groundwork with foundational
                      concepts to mastering advanced techniques, this guide is
                      meticulously curated to empower you with the skills essential for
                      navigating the dynamic landscape of digital asset creation.
                    </p>
                    <p>
                      In the initial modules, you&apos;ll establish a solid foundation
                      by immersing yourself in the foundational concepts that form the
                      backbone of digital asset creation. Understand the fundamental
                      elements that constitute compelling digital content and gain
                      proficiency in leveraging these elements to bring your creative
                      ideas to life.
                    </p>
                    <p>
                      As you progress through the course, you&apos;ll extend to design
                      principles that drive impactful visualizations. Uncover the
                      secrets behind effective visual communication, exploring color
                      theory, typography, and layout strategies that elevate your
                      digital assets to new heights. Engage in hands-on exercises that
                      reinforce your understanding, allowing you to apply these
                      principles to practical scenarios.
                    </p>
                  </div>

                  <h2 className="mt-10 text-xl font-semibold">Sneak Peek</h2>
                  <div className="mt-4 grid grid-cols-2 gap-3 sm:grid-cols-4">
                    {sneakPeek.map((src) => (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        key={src}
                        src={src}
                        alt=""
                        loading="lazy"
                        className="aspect-square w-full rounded-2xl object-cover"
                      />
                    ))}
                  </div>

                  <h2 className="mt-10 text-xl font-semibold">Key Points</h2>
                  <ul className="mt-4 space-y-3">
                    {keyPoints.map((p) => (
                      <li key={p} className="flex items-center gap-3 text-sm text-gray-700">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#0732df]">
                          <svg
                            viewBox="0 0 24 24"
                            className="h-3 w-3"
                            fill="none"
                            stroke="white"
                            strokeWidth="3"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M5 12l5 5 9-10" />
                          </svg>
                        </span>
                        {p}
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Leason Tab */}

              {tab === "Lessons" && (
  <div>
    <h2 className="mt-8 text-xl font-semibold">Explore the Modules</h2>
    <p className="mt-4 text-sm leading-[1.8] text-gray-600">
      Immerse yourself in the course content as we break down each module into
      comprehensive lessons, providing practical insights and hands-on
      experiences.
    </p>

    <h2 className="mt-8 text-xl font-semibold">Lesson List</h2>
    <ul className="mt-5 space-y-5">
      {lessonModules.map((m) => (
        <li key={m.title} className="flex items-start gap-4">
          <span className="flex h-[52px] w-[62px] shrink-0 items-center justify-center rounded-2xl bg-[#D4FF1F] text-black">
            <Icon
              className="h-6 w-6"
              d="M4 6h9a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V8a2 2 0 012-2zM15 10.5l6-3.5v10l-6-3.5"
            />
          </span>
          <div className="min-w-0">
            <h3 className="text-sm font-medium text-black">{m.title}</h3>
            <p className="mt-1 text-sm leading-[1.6] text-gray-600">{m.desc}</p>
          </div>
        </li>
      ))}
    </ul>

    <h2 className="mt-10 text-xl font-semibold">Lesson Content</h2>
    <p className="mt-4 text-sm leading-[1.8] text-gray-600">
      Engage with each lesson through captivating video content, detailed
      textual explanations, and interactive elements. Download resources,
      complete assignments, and test your understanding with quizzes.
    </p>

    <h2 className="mt-10 text-xl font-semibold">Lesson Progress Tracking</h2>
    <p className="mt-4 text-sm leading-[1.8] text-gray-600">
      Witness your growth as you complete lessons, with an intuitive progress
      tracking feature guiding you through your learning journey.
    </p>

    <div className="mt-5 rounded-2xl border border-gray-200 bg-white px-5 py-4">
      <p className="text-xs text-gray-700">Learning Progress</p>
      <p className="mt-1 text-[32px] font-semibold leading-tight text-black">
        {progress}%
      </p>
      <div
        className="mt-2 h-2 w-full overflow-hidden rounded-full bg-gray-200"
        role="progressbar"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-label="Learning progress"
      >
        <div
          className="h-full rounded-full bg-[#D4FF1F]"
          style={{ width: `${progress}%` }}
        />
      </div>
    </div>
  </div>
)}
        {/* Reviews */}
             {tab === "Reviews" && (
  <div>
    <h2 className="mt-8 text-xl font-semibold">What Learners Are Saying</h2>
    <p className="mt-4 text-sm leading-[1.8] text-gray-600">
      Discover what our learners have to say about their experience with
      &apos;Build Digital Assets: A Comprehensive Guide.&apos; Read reviews and
      ratings from individuals who have embarked on the transformative journey
      of mastering digital asset creation.
    </p>

    {/* Rating summary */}
    <div className="mt-5 flex flex-col gap-5 rounded-2xl border border-gray-200 bg-white p-5 sm:flex-row sm:items-center">
      <div className="flex h-[110px] w-[130px] shrink-0 flex-col items-center justify-center rounded-xl bg-[#D4FF1F] text-black">
        <span className="text-xs">Ratings</span>
        <span className="text-[32px] font-semibold leading-tight">4.7</span>
      </div>

      <ul className="flex-1 space-y-2">
        {ratingBreakdown.map((r) => (
          <li key={r.stars} className="flex items-center gap-4">
            <div className="h-1.5 flex-1 overflow-hidden rounded-full bg-gray-200">
              <div
                className="h-full rounded-full bg-[#D4FF1F]"
                style={{ width: `${r.pct}%` }}
              />
            </div>
            <span
              className="shrink-0 text-sm tracking-[2px] text-gray-700"
              aria-label={`${r.stars} stars`}
            >
              {"★".repeat(r.stars)}
            </span>
            <span className="w-8 shrink-0 text-right text-xs text-gray-600">
              {r.count}
            </span>
          </li>
        ))}
      </ul>
    </div>

    {/* Filters */}
    <h3 className="mt-8 text-base font-semibold">Individual Reviews:</h3>
    <div className="mt-4 flex flex-wrap gap-2">
      {ratingFilters.map((f) => (
        <button
          key={f}
          type="button"
          onClick={() => setRatingFilter(f)}
          aria-pressed={ratingFilter === f}
          className={`rounded-full px-4 py-2 text-xs font-medium transition ${
            ratingFilter === f
              ? "bg-[#D4FF1F] text-black"
              : "bg-gray-100 text-gray-600 hover:bg-gray-200"
          }`}
        >
          {f === "all" ? "All rating" : `★ ${f}`}
        </button>
      ))}
    </div>

    {/* Review cards */}
    <ul className="mt-5 space-y-5">
      {visibleReviews.map((r) => (
        <li key={r.name} className="rounded-2xl border border-gray-200 bg-white p-5">
          <div className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={r.avatar}
                alt={r.name}
                className="h-10 w-10 rounded-full object-cover"
              />
              <div>
                <p className="text-sm font-medium text-black">{r.name}</p>
                <p className="text-xs text-gray-500">{r.role}</p>
              </div>
            </div>
            <span className="shrink-0 text-xs text-gray-500">{r.time}</span>
          </div>

          <p
            className="mt-4 text-base tracking-[3px] text-gray-700"
            aria-label={`${r.rating} out of 5 stars`}
          >
            {"★".repeat(r.rating)}
          </p>

          <p className="mt-4 text-sm leading-[1.7] text-gray-600">
            &quot;{r.text}&quot;
          </p>
        </li>
      ))}

      {visibleReviews.length === 0 && (
        <li className="rounded-2xl border border-dashed border-gray-300 p-8 text-center text-sm text-gray-500">
          No reviews for this rating yet.
        </li>
      )}
    </ul>
  </div>
)}




            </div>

            {/* RIGHT: sidebar */}
            <aside className="lg:sticky lg:top-6 lg:self-start">
              <div className="rounded-[24px] border border-gray-200 bg-white p-5 shadow-[0_8px_30px_rgba(0,0,0,0.06)]">
                <h3 className="text-sm font-semibold">112 Lessons (24 hours)</h3>

                <ul className="mt-4 space-y-3">
                  {lessons.map((l) => (
                    <li key={l.no} className="flex items-center justify-between gap-3 text-xs">
                      <span className="flex gap-3">
                        <span className="text-gray-500">{l.no}</span>
                        <span className="font-medium">{l.title}</span>
                      </span>
                      <span className="flex shrink-0 items-center gap-1 text-[#0732df]">
                        <Icon d="M4 6h12v12H4zM16 10l4-2v8l-4-2" className="h-3 w-3" />
                        {l.time}
                      </span>
                    </li>
                  ))}
                </ul>
                <p className="mt-3 text-xs text-gray-500">99 more videos</p>

                <div className="my-4 h-px bg-gray-100" />

                <p className="text-center text-xs text-gray-500">
                  Ready to Dive In? Enroll Now and Start Building Your Digital Future
                </p>
                <p className="mt-4 text-[28px] font-semibold text-[#0732df]">
                  $25
                  <span className="text-xs font-normal text-gray-500">/lifetime</span>
                </p>
                <button
                  type="button"
                  className="mt-3 w-full rounded-full bg-[#D4FF1F] py-3 text-sm font-medium text-black transition hover:brightness-95"
                >
                  Enroll Now
                </button>

                <h4 className="mt-6 text-sm font-semibold">This course include</h4>
                <ul className="mt-3 space-y-3">
                  {includes.map((i) => (
                    <li key={i.label} className="flex items-center gap-3 text-xs text-gray-600">
                      <span className="text-[#0732df]">
                        <Icon d={i.d} />
                      </span>
                      {i.label}
                    </li>
                  ))}
                </ul>

                <div className="my-5 h-px bg-gray-100" />

                <div className="flex items-center gap-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src="https://randomuser.me/api/portraits/men/52.jpg"
                    alt="PurePearl Studio"
                    className="h-11 w-11 rounded-full object-cover"
                  />
                  <div>
                    <p className="text-sm font-semibold">PurePearl Studio</p>
                    <p className="text-xs text-gray-500">Professional Creator</p>
                  </div>
                </div>
                <p className="mt-3 text-xs leading-relaxed text-gray-500">
                  Ready to Dive In? Enroll Now and Start Building Your Digital Future
                </p>
                <button
                  type="button"
                  className="mt-3 rounded-full bg-gray-100 px-4 py-2 text-xs font-medium text-gray-700 transition hover:bg-gray-200"
                >
                  See Full Profile
                </button>
              </div>
            </aside>
          </div>
        </div>
      </main>

      {/* FOOTER */}

      <Footer></Footer>
    
    </div>
  );
}