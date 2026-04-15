import { CartProvider } from "../context/CartContext";
import Navbar from "../components/Navbar";
import "./globals.css";
import Footer from "@/components/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        <CartProvider>
          <Navbar />
          {children}
          <Footer/>
        </CartProvider>
      </body>
    </html>
  );
}