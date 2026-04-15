"use client";

import Link from "next/link";
import { useCart } from "../context/CartContext";
import Image from "next/image";

export default function Navbar() {
  const { totalItems } = useCart();

  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-black/90 backdrop-blur border-b border-gray-800 sticky top-0 z-50">
      {/* <h1 className="text-xl font-bold text-orange-500">Halal Oven</h1> */}
      <Image src="/images/logo.jpg" alt="Halal Oven Logo" width="80px" height="40px" className="rounded-full" />  

      <div className="flex items-center gap-6 text-gray-300">
        <Link href="/menu" className="hover:text-white transition-colors">Menu</Link>
        <Link href="/cart" className="hover:text-white transition-colors flex items-center gap-2">
          Cart
          {totalItems > 0 && (
            <span className="bg-orange-500 text-white text-xs font-bold w-5 h-5 rounded-full flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </Link>
      </div>
    </nav>
  );
}