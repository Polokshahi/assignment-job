"use client";

import { Search, Filter } from "lucide-react";
import Navbar from "../Navbar/page";
import Link from "next/link";
import Footer from "../Footer/page";

export default function CoursesPage() {
  const categories = [
    "Featured", "Music", "Drawing & Painting", "Marketing", 
    "Animation", "Social Media", "UI/UX Design", "Creative Marketing", "Cooking"
  ];

  const avatars = [
  "https://randomuser.me/api/portraits/women/68.jpg",
  "https://randomuser.me/api/portraits/men/46.jpg",
  "https://randomuser.me/api/portraits/women/12.jpg",
  "https://randomuser.me/api/portraits/men/85.jpg",
];

  // মোট ১৮টি কোর্স কার্ডের ডেটা
  const courses = [
    { id: 1, title: "Learn Figma from Basic", price: "$25", rating: "4.5", lessons: "17 Lessons", image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=500&auto=format&fit=crop&q=60", author: "by purepearl studio" },
    { id: 2, title: "Build Digital Asset", price: "$25", rating: "4.5", lessons: "17 Lessons", image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&auto=format&fit=crop&q=60", author: "by purepearl studio" },
    { id: 3, title: "the Power of Big Data", price: "$25", rating: "4.5", lessons: "17 Lessons", image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60", author: "by purepearl studio" },
    { id: 4, title: "Balancing Productivity an...", price: "$25", rating: "4.5", lessons: "17 Lessons", image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&auto=format&fit=crop&q=60", author: "by purepearl studio" },
    { id: 5, title: "Mastering Money Manage...", price: "$25", rating: "4.5", lessons: "17 Lessons", image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&auto=format&fit=crop&q=60", author: "by purepearl studio" },
    { id: 6, title: "From Idea to Startup Succ...", price: "$25", rating: "4.5", lessons: "17 Lessons", image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60", author: "by purepearl studio" },
    { id: 7, title: "UI/UX Advanced Design", price: "$35", rating: "4.8", lessons: "17 Lessons", image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=500&auto=format&fit=crop&q=60", author: "by purepearl studio" },
    { id: 8, title: "JavaScript Mastery", price: "$30", rating: "4.7", lessons: "17 Lessons", image: "https://images.unsplash.com/photo-1579468118864-1b9ea3c0db4a?w=500&auto=format&fit=crop&q=60", author: "by purepearl studio" },
    { id: 9, title: "Digital Marketing Pro", price: "$20", rating: "4.3", lessons: "17 Lessons", image: "https://images.unsplash.com/photo-1432888498266-38ffec3eaf0a?w=500&auto=format&fit=crop&q=60", author: "by purepearl studio" },
    { id: 10, title: "React & Next.js Guide", price: "$40", rating: "4.9", lessons: "17 Lessons", image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=500&auto=format&fit=crop&q=60", author: "by purepearl studio" },
    { id: 11, title: "Python for Data Science", price: "$45", rating: "4.6", lessons: "17 Lessons", image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&auto=format&fit=crop&q=60", author: "by purepearl studio" },
    { id: 12, title: "Motion Graphics Basics", price: "$25", rating: "4.4", lessons: "17 Lessons", image: "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=500&auto=format&fit=crop&q=60", author: "by purepearl studio" },
    { id: 13, title: "Social Media Strategy", price: "$15", rating: "4.2", lessons: "17 Lessons", image: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&auto=format&fit=crop&q=60", author: "by purepearl studio" },
    { id: 14, title: "Brand Identity Design", price: "$30", rating: "4.7", lessons: "17 Lessons", image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=500&auto=format&fit=crop&q=60", author: "by purepearl studio" },
    { id: 15, title: "Financial Freedom 101", price: "$20", rating: "4.5", lessons: "17 Lessons", image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=500&auto=format&fit=crop&q=60", author: "by purepearl studio" },
    { id: 16, title: "Content Writing Mastery", price: "$15", rating: "4.3", lessons: "17 Lessons", image: "https://images.unsplash.com/photo-1455390582262-044cdead277a?w=500&auto=format&fit=crop&q=60", author: "by purepearl studio" },
    { id: 17, title: "Mobile App Development", price: "$50", rating: "4.9", lessons: "17 Lessons", image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&auto=format&fit=crop&q=60", author: "by purepearl studio" },
    { id: 18, title: "Creative Photography", price: "$25", rating: "4.6", lessons: "17 Lessons", image: "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=500&auto=format&fit=crop&q=60", author: "by purepearl studio" },
  ];

  return (
    <main className="min-h-screen bg-white text-gray-900 flex flex-col justify-between">

       
      {/* Top Blue Header Section */}
      <div  className="relative w-full overflow-hidden bg-[#0732df] pb-12
    bg-[linear-gradient(rgba(255,255,255,0.25)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.25)_1px,transparent_1px)]
    bg-[size:95px_95px] bg-[position:center_top]">
        <div className="absolute inset-0 opacity-40 pointer-events-none"></div>
        <div className="flex items-center justify-center">
             <Navbar></Navbar>
        </div>
        <div className="z-10 text-center max-w-4xl mx-auto mt-6 px-4">
            
          <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight">
            Find Your Next Course
          </h1>

          <div className="mt-6 max-w-lg mx-auto bg-white p-2 rounded-full shadow-lg flex items-center justify-between">
            <div className="flex items-center gap-3 px-4 w-full">
              <Search className="w-5 h-5 text-gray-400" />
              <input 
                type="text" 
                placeholder="Search course..." 
                className="w-full bg-transparent text-gray-800 placeholder-gray-400 focus:outline-none text-sm"
              />
            </div>
            <button className="bg-[#ccff00] text-blue-950 font-semibold px-6 py-2.5 rounded-full hover:bg-[#b3ec00] transition-all text-sm shrink-0">
              Courses
            </button>
          </div>
        </div>
      </div>

      {/* Filter & Content Section */}
      <div  className="max-w-[1440px] w-full mx-auto px-6 md:px-12 py-10 flex-grow">
        {/* Filter Bar */}
        <div  className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-gray-100 pb-6">
          <div className="flex items-center gap-3 flex-wrap">
            <button className="flex items-center gap-1.5 px-4 py-2 rounded-full border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50">
              <Filter className="w-3.5 h-3.5" /> Filter
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50">
              Level
            </button>
            <button className="px-4 py-2 rounded-full border border-gray-200 text-xs font-semibold text-gray-700 hover:bg-gray-50">
              Category
            </button>
          </div>

          <div className="text-xs font-medium text-gray-500">
            Most relevant
          </div>
        </div>

        {/* Categories Horizontal Scroll / List */}
        <div className="flex items-center gap-2 overflow-x-auto py-6 no-scrollbar">
          {categories.map((cat, idx) => (
            <button 
              key={idx} 
              className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-colors ${
                idx === 0 ? "bg-[#ccff00] text-blue-950" : "bg-gray-100 text-gray-600 hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Grid (18 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-4">
          {courses.map((course) => (

            <Link key={course.id} href={`/CourseDetails`}>

            <div
    key={course.id}
    style={{ width: "373px", height: "384px" }}
    className="mx-auto flex flex-col justify-between rounded-[24px] border border-gray-200 bg-white p-4 font-[Poppins,sans-serif] transition-shadow hover:shadow-md"
  >
    <div>
      {/* Image + glass badges */}
      <div className="relative h-[190px] overflow-hidden rounded-[18px] bg-gray-900">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={course.image}
          alt={course.title}
          className="h-full w-full object-cover"
        />
        <div className="absolute bottom-3 left-2 right-2 flex items-center justify-center gap-1.5">
          {[course.lessons, "2 hours 16 mins", "59 Comments"].map((label) => (
            <span
              key={label}
              className="whitespace-nowrap rounded-full bg-white/40 px-3 py-1.5 text-[11px] font-normal text-gray-700 backdrop-blur-md"
            >
              {label}
            </span>
          ))}
        </div>
      </div>

      {/* Title + rating */}
      <div className="mt-4 flex items-start justify-between gap-3">
        <div className="min-w-0">
          <p className="truncate text-lg font-semibold leading-tight text-black">
            {course.title}
          </p>
          <p className="mt-1 text-[11px] text-gray-500">
            by <span className="text-[#0038E0]">{course.author}</span>
          </p>
        </div>
        <span className="flex shrink-0 items-center gap-1 text-base text-gray-500">
          {course.rating}
          <span className="text-lg leading-none text-gray-300">&#9733;</span>
        </span>
      </div>
    </div>

    <div>
      {/* Level + avatars */}
      <div className="flex items-center gap-3">
        <span className="flex items-center gap-2 rounded-full bg-gray-100 px-4 py-2 text-xs font-medium text-gray-600">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="currentColor" aria-hidden="true">
            <rect x="1" y="8" width="3" height="5" rx="1" />
            <rect x="5.5" y="5" width="3" height="8" rx="1" />
            <rect x="10" y="2" width="3" height="11" rx="1" />
          </svg>
          Beginner
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

      {/* Price */}
      <p className="mt-4 text-lg font-semibold text-[#0038E0]">
        {course.price}
        <span className="text-[11px] font-normal text-gray-500">/lifetime</span>
      </p>
    </div>
  </div>
            
            
            
            </Link>
  
))}
</div>

        {/* Pagination */}
        <div className="flex items-center justify-center gap-2 mt-12">
          <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-xs font-bold">&lt;</button>
          <button className="w-8 h-8 rounded-full bg-[#ccff00] text-blue-950 flex items-center justify-center text-xs font-bold">1</button>
          <button className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-xs font-bold">2</button>
          <button className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-xs font-bold">3</button>
          <button className="w-8 h-8 rounded-full hover:bg-gray-100 flex items-center justify-center text-xs font-bold">4</button>
          <button className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-xs font-bold">&gt;</button>
        </div>


        



      </div>


      <div>
        <Footer></Footer>
      </div>

      



    </main>

    
  );
}