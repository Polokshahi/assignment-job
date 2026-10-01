import Link from "next/link";
import { ShoppingBag } from "lucide-react";

export default function Navbar() {
  return (
   <header className="w-full h-[100px] bg-transparent flex items-center justify-center px-6 md:px-12 relative z-20">
      <div className="w-full max-w-[1440px] flex items-center justify-between">
        
        {/* Logo & Brand Name */}
        <Link href="/" className="flex items-center gap-3">
          <div className="flex items-center justify-center">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img 
              src="/hero-image/Vector.png" 
              alt="ByteSpace Logo" 
              className="object-contain"
            />
          </div>
          <span className="text-white font-bold text-2xl tracking-wide">ByteSpace</span>
        </Link>

        {/* Nav Links */}
        <nav className="hidden md:flex items-center gap-12 text-sm font-medium text-gray-200">
          <Link href="/" className="text-white hover:text-lime-400 transition-colors">Home</Link>
          <Link href="/courses" className="hover:text-lime-400 transition-colors">Courses</Link>
          <Link href="/CreatorProfile" className="hover:text-lime-400 transition-colors">Creators</Link>
        </nav>

        {/* Action Buttons */}
        <div className="flex items-center gap-8 text-sm font-medium">
          <Link href="#" className="text-white hover:text-lime-400 transition-colors hidden sm:block">
            Sign In
          </Link>
          <Link 
            href="#" 
            className="bg-white text-blue-950 px-6 py-2.5 rounded-full font-semibold hover:bg-[#ccff00] transition-colors"
          >
            Join Us
          </Link>
          <button className="text-white hover:text-[#ccff00] transition-colors relative flex items-center">
            <ShoppingBag className="w-5 h-5" />
          </button>
        </div>

      </div>
    </header>
  );}


