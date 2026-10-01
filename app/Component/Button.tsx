
export default function Button() {
  const firstrowButton = [
    "Featured",
    "Music",
    "Drawing & Painting",
    "Marketing",
    "Animation",
    "Social Media",
    "UI/UX Design",
    "Creative Marketing"
  ];

  const secondrowButton = [
    "Digital Illustration",
    "Film & Video",
    "Crafts",
    "Freelance & Entrepreneurship",
    "Graphic Design",
    "Photography"
  ];

  const thirdrowButton = [
    "Productivity",
    "Web Development",
    "Data Science",
    "Cooking"
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-white py-8 px-4 gap-3">
      {/* First Row */}
      <div className="flex flex-wrap justify-center gap-2.5">
        {firstrowButton.map((button, index) => (
          <button 
            key={index} 
            className={`font-satoshi rounded-full px-5 py-2.5 text-xs sm:text-sm transition-all shadow-sm ${
              index === 0 
                ? "bg-[#ccff00] text-[#4B4C53] font-bold" 
                : "bg-[#F5F5F6] text-[#4B4C53] hover:bg-gray-200"
            }`}
          >
            {button}
          </button>
        ))}
      </div>

      {/* Second Row */}
      <div className="flex flex-wrap justify-center gap-2.5">
        {secondrowButton.map((button, index) => (
          <button 
            key={index} 
            className="bg-[#F5F5F6] text-[#4B4C53] hover:bg-gray-200 rounded-full px-5 py-2.5 text-xs sm:text-sm transition-all shadow-sm"
          >
            {button}
          </button>
        ))}
      </div>

      {/* Third Row with + More button */}
      <div className="flex flex-wrap items-center justify-center gap-2.5">
        {thirdrowButton.map((button, index) => (
          <button 
            key={index} 
            className="bg-[#F5F5F6] text-[#4B4C53] hover:bg-gray-200 rounded-full px-5 py-2.5 text-xs sm:text-sm  transition-all shadow-sm"
          >
            {button}
          </button>
        ))}
        <button className="text-blue-600 hover:underline px-4 py-2.5 text-xs sm:text-sm ">
          + More
        </button>
      </div>
    </div>
  );
}