"use client";

import CartItemComponent from "@/components/CartItem";
import { useCart } from "@/context/CartContext";
import { useState } from "react";
import Link from "next/link";

export default function CartPage() {
  const { cart, totalItems, totalPrice } = useCart();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  // ✅ NEW STATES
  const [loading, setLoading] = useState(false);
  const [sent, setSent] = useState(false);

  const handleOrderNow = async () => {
    setLoading(true);

    await fetch("/api/orders", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
        items: cart,
        total: totalPrice,
        createdAt: new Date().toISOString(),
      }),
    });

    setLoading(false);
    setSent(true);
  };

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-lg mx-auto px-6 py-10">
        <h1 className="text-2xl font-bold mb-2">Your Cart</h1>

        {totalItems > 0 && (
          <p className="text-zinc-500 text-sm mb-6">
            {totalItems} item{totalItems !== 1 ? "s" : ""}
          </p>
        )}

        {cart.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-zinc-500 text-lg">Your cart is empty</p>
            <Link href="/" className="mt-4 inline-block text-orange-400 hover:underline text-sm">
              Browse the menu
            </Link>
          </div>
        ) : (
          <>
            {cart.map((item) => (
              <CartItemComponent key={item.id} item={item} />
            ))}

            {/* FORM */}
            <div className="mt-6 space-y-3">
              <input
                className="w-full p-2 rounded bg-zinc-900 border border-zinc-800"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                className="w-full p-2 rounded bg-zinc-900 border border-zinc-800"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                className="w-full p-2 rounded bg-zinc-900 border border-zinc-800"
                placeholder="Phone"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              <textarea
                className="w-full p-2 rounded bg-zinc-900 border border-zinc-800"
                placeholder="Message (how you want it)"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>

            {/* SUCCESS MESSAGE (NEW) */}
            {sent && (
              <p className="mt-6 text-green-400 font-semibold">
                ✅ Your order has been sent. Be ready with your order.
              </p>
            )}

            <div className="mt-6 bg-zinc-900 border border-zinc-800 rounded-2xl p-5">
              <div className="flex justify-between items-center mb-4">
                <span className="text-zinc-400">Total</span>
                <span className="text-orange-400 font-bold text-xl">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>

              <button
                onClick={handleOrderNow}
                disabled={loading || sent}
                className="w-full bg-gradient-to-r from-orange-500 to-red-600 text-white py-3.5 rounded-xl font-semibold text-base transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Order Now"}
              </button>

              <p className="text-center text-zinc-600 text-xs mt-3">
                We would get back to you!
              </p>
            </div>
          </>
        )}
      </div>
    </div>
  );
}