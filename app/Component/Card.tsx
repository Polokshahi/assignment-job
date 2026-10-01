
export default function Card() {

  const courses = [
    {
      id: 1,
      title: "Learn Figma from Basic",
      author: "  purepearl studio",
      rating: "4.5",
      price: "$25",
      lessons: "17 Lessons",
      hours: "2 hours 16 mins",
      comments: "59 Comments",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 2,
      title: "Build Digital Asset",
      author: "  purepearl studio",
      rating: "4.5",
      price: "$25",
      lessons: "17 Lessons",
      hours: "2 hours 16 mins",
      comments: "59 Comments",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 3,
      title: "the Power of Big Data",
      author: "  purepearl studio",
      rating: "4.5",
      price: "$25",
      lessons: "17 Lessons",
      hours: "2 hours 16 mins",
      comments: "59 Comments",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 4,
      title: "Balancing Productivity an...",
      author: "  purepearl studio",
      rating: "4.5",
      price: "$25",
      lessons: "17 Lessons",
      hours: "2 hours 16 mins",
      comments: "59 Comments",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 5,
      title: "Mastering Money Manage...",
      author: "  purepearl studio",
      rating: "4.5",
      price: "$25",
      lessons: "17 Lessons",
      hours: "2 hours 16 mins",
      comments: "59 Comments",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=500&auto=format&fit=crop&q=60",
    },
    {
      id: 6,
      title: "From Idea to Startup Succ...",
      author: "  purepearl studio",
      rating: "4.5",
      price: "$25",
      lessons: "17 Lessons",
      hours: "2 hours 16 mins",
      comments: "59 Comments",
      level: "Beginner",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=500&auto=format&fit=crop&q=60",
    },
  ];

  return (
    <div className="w-full bg-white py-16 flex justify-center">
      {/* Main container with max-width 1199px */}
      <div 
        style={{ width: "1199px", gap: "40px" }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto"
      >
        {courses.map((course) => (
          <div
            key={course.id}
            style={{ width: "373px", height: "384px", borderWidth: "1px" }}
            className="bg-white rounded-[24px] p-4 border-gray-200 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between"
          >
            <div>
              {/* Card Image Container */}
              <div className="h-[170px] bg-gray-900 rounded-[18px] mb-3 overflow-hidden relative flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover"
                />

                {/* Glassmorphic Overlapping Badges */}
                <div className="absolute bottom-2.5 left-2 right-2 flex items-center justify-center gap-1">
                  <span className="bg-white/80 backdrop-blur-md text-gray-800 text-[10px] font-medium px-2 py-1 rounded-full whitespace-nowrap shadow-sm">
                    {course.lessons}
                  </span>
                  <span className="bg-white/80 backdrop-blur-md text-gray-800 text-[10px] font-medium px-2 py-1 rounded-full whitespace-nowrap shadow-sm">
                    {course.hours}
                  </span>
                  <span className="bg-white/80 backdrop-blur-md text-gray-800 text-[10px] font-medium px-2 py-1 rounded-full whitespace-nowrap shadow-sm">
                    {course.comments}
                  </span>
                </div>
              </div>

              {/* Title & Rating */}
              <div className="flex justify-between items-start mt-1">
                <div>
                  <h3 className="font-bold text-[15px] text-gray-900 tracking-tight">
                    {course.title}
                  </h3>
                  <p className="text-[11px] text-blue-600 mt-0.5">
                   <span className="text-gray-600">{`by`}</span>  {course.author}
                  </p>
                </div>
                <div className="text-right flex items-center gap-1">
                  <span className="text-[18px] font-bold text-[#4F4F4F]">{course.rating}</span>
                  <span className="text-gray-400 text-[20px]">&#9733;</span>
                </div>
              </div>

              {/* Level & Students Avatars */}
              <div className="flex items-center gap-4 mt-3">
                <span className="text-[11px] bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-medium flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-500"></span>
                  {course.level}
                </span>

                {/* Avatar Stack */}
                <div className="flex items-center -space-x-2">
                  <div className="w-6 h-6 rounded-full bg-red-300 border-2 border-white overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=60" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-6 h-6 rounded-full bg-blue-300 border-2 border-white overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=60" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-6 h-6 rounded-full bg-green-300 border-2 border-white overflow-hidden">
                    <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&auto=format&fit=crop&q=60" alt="User" className="w-full h-full object-cover" />
                  </div>
                  <div className="w-6 h-6 rounded-full bg-[#ccff00] text-blue-950 text-[9px] font-bold flex items-center justify-center border-2 border-white">
                    26+
                  </div>
                </div>
              </div>
            </div>

            {/* Price Footer */}
            <div className="mt-3 flex justify-between items-center border-t border-gray-100 pt-3">
              <div className="flex items-baseline gap-1">
                <span className="text-lg font-black text-blue-600">{course.price}</span>
                <span className="text-[10px] text-gray-400 font-normal">/lifetime</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
