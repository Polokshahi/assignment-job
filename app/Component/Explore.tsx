import { Building2, Camera, Code, Laptop, Megaphone, Pencil } from "lucide-react";



export default function Explore() {

    const categories = [
    { title: "Design", icon: <Pencil className="w-6 h-6 text-[#040819]" /> },
    { title: "Development", icon: <Code className="w-6 h-6 text-[#040819]" /> },
    { title: "IT & Software", icon: <Laptop className="w-6 h-6 text-[#040819]" /> },
    { title: "Business", icon: <Building2 className="w-6 h-6 text-[#040819]" /> },
    { title: "Marketing", icon: <Megaphone className="w-6 h-6 text-[#040819]" /> },
    { title: "Photography", icon: <Camera className="w-6 h-6 text-[#040819]" /> },
  ];

  return (
    <div className="w-full bg-white py-16 px-6 flex flex-col items-center justify-center">
      {/* Header Section */}
      <div className="text-center max-w-3xl mx-auto">
        <h2 className="text-[#040819] text-[32px] font-bold tracking-tight">
          Explore Diverse Learning Paths at Bytespace
        </h2>
        <p className="mt-3 text-[16px] text-[#82868E] ">
         At Bytespace, we believe in empowering individuals through knowledge. Our diverse range of courses spans various fields, ensuring there's something for everyone. Unleash your potential and explore our carefully curated categories.
        </p>
      </div>

      {/* Categories Grid Cards Section */}
      <div className="mt-12 w-full max-w-[1200px] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
        {categories.map((cat, index) => (
          <div
            key={index}
            className="w-full h-[180px] bg-white border border-gray-200 rounded-[24px] p-6 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-all group cursor-pointer"
          >
            {/* Lime Green Circle Icon Background */}
            <div className="w-14 h-14 bg-[#ccff00] rounded-full flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
              {cat.icon}
            </div>
            <span className="text-[#040819] font-semibold text-sm">
              {cat.title}
            </span>
          </div>
        ))}
      </div>
    </div>
  )
}
