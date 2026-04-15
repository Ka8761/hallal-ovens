import logo from "../public/images/logo.jpg";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-gray-800 text-white py-10 mt-16">
      <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
        
        {/* LEFT - LOGO */}
        <div className="flex flex-col items-center md:items-start">
          <div className="w-16 h-16 bg-gray-800 rounded-full mb-3 flex items-center justify-center">
            {/* Replace later with real logo */}
           <Image src={logo} alt="Halal Oven Logo" className="w-16 h-16" />
          </div>

          <h2 className="text-lg font-bold">
            Halal Oven
          </h2>

          <p className="text-gray-500 text-sm mt-1">
            Fresh. Fast. 100% Halal.
          </p>
        </div>

        {/* CENTER - LINKS */}
        <div className="text-center">
          <h3 className="text-sm font-semibold text-gray-400 mb-2">
            Quick Links
          </h3>

          <div className="flex gap-4 justify-center text-sm">
            <a href="/" className="hover:text-white">
              Home
            </a>
            <a href="/" className="hover:text-white">
              Menu
            </a>
            <a href="/cart" className="hover:text-white">
              Cart
            </a>
          </div>
        </div>

        {/* RIGHT - CONTACT */}
        <div className="flex flex-col items-center md:items-end">
          <h3 className="text-sm font-semibold text-gray-400 mb-2">
            Contact
          </h3>

          <p className="text-gray-300 text-sm">
            +1 7807000202
          </p>

          {/* INSTAGRAM ICON ONLY */}
          <a
            href="https://instagram.com/the.halal.oven"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-3 hover:opacity-70 transition"
          >
            {/* SIMPLE WHITE ICON (SVG) */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-6 h-6 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={1.5}
            >
              <rect x="3" y="3" width="18" height="18" rx="5" />
              <circle cx="12" cy="12" r="4" />
              <circle cx="17" cy="7" r="1" />
            </svg>
          </a>
        </div>
      </div>

      {/* BOTTOM */}
      <div className="text-center text-gray-600 text-xs mt-8">
        © {new Date().getFullYear()} Halal Oven. All rights reserved.
      </div>
    </footer>
  );
}