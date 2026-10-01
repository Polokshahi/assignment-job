import Link from "next/link";

export default function Footer() {
  return (
    <footer className="w-full bg-white pt-16 pb-8 px-6 md:px-12 border-t border-gray-100">
      <div className="max-w-[1440px] mx-auto">
        {/* Top Section: Newsletter & Links Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-start">
          
          {/* Left Side: Logo & Newsletter */}
          <div className="lg:col-span-5 space-y-6">
            {/* Logo & Brand Name */}
            <Link href="/" className="flex items-center gap-3">
              <div className="w-9 h-9 flex items-center justify-center">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img 
                  src="/hero-image/Vector.png" 
                  alt="ByteSpace Logo" 
                  className="w-full h-full object-contain" 
                />
              </div>
              <span className="text-[#040819] font-extrabold text-2xl tracking-wide">ByteSpace</span>
            </Link>

            {/* Description */}
            <p className="text-gray-500 text-sm max-w-md leading-relaxed">
              Stay Up to date with our latest features and releases by joining our newsletter.
            </p>

            {/* Newsletter Input & Button */}
            <div className="flex flex-col sm:flex-row items-center gap-3 max-w-md">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full h-[50px] px-5 rounded-full border border-gray-300 text-gray-800 placeholder-gray-400 focus:outline-none focus:border-blue-600 text-sm bg-white"
              />
              <button className="w-full sm:w-auto h-[50px] px-8 bg-[#ccff00] text-blue-950 font-semibold rounded-full hover:bg-lime-400 transition-all text-sm shrink-0 shadow-sm">
                Search
              </button>
            </div>

            {/* Terms Consent */}
            <p className="text-[11px] text-gray-400 max-w-md leading-normal">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>

          {/* Right Side: Links Columns */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-3 gap-8 pt-2">
            
            {/* Column 1 */}
            <div className="space-y-4">
              <Link href="/courses" className="block text-sm text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Featured Courses
              </Link>
              <Link href="/categories" className="block text-sm text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Featured Categories
              </Link>
              <Link href="/business" className="block text-sm text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Business
              </Link>
              <Link href="/it" className="block text-sm text-gray-700 hover:text-blue-600 font-medium transition-colors">
                IT
              </Link>
              <Link href="/design" className="block text-sm text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Design
              </Link>
            </div>

            {/* Column 2 */}
            <div className="space-y-4">
              <Link href="/development" className="block text-sm text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Development
              </Link>
              <Link href="/marketing" className="block text-sm text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Marketing
              </Link>
              <Link href="/photography" className="block text-sm text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Photography
              </Link>
              <Link href="/finance" className="block text-sm text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Finance
              </Link>
              <Link href="/sport" className="block text-sm text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Sport
              </Link>
            </div>

            {/* Column 3 */}
            <div className="space-y-4">
              <Link href="/creator" className="block text-sm text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Become a Creator
              </Link>
              <Link href="/affiliate" className="block text-sm text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Affiliate Program
              </Link>
              <Link href="/contact" className="block text-sm text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Contact
              </Link>
              <Link href="/help" className="block text-sm text-gray-700 hover:text-blue-600 font-medium transition-colors">
                Help
              </Link>
              <Link href="/about" className="block text-sm text-gray-700 hover:text-blue-600 font-medium transition-colors">
                About
              </Link>
            </div>

          </div>

        </div>

        {/* Bottom Divider */}
        <div className="w-full h-[1px] bg-gray-200 my-12"></div>

        {/* Bottom Bar: Copyright & Policy Links */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <p>&copy; 2023 ByteSpace. All rights reserved.</p>
          
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="hover:text-gray-900 transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-gray-900 transition-colors">
              Terms of Service
            </Link>
            <Link href="/cookies" className="hover:text-gray-900 transition-colors">
              Cookies Settings
            </Link>
          </div>
        </div>

      </div>
    </footer>
  );
}