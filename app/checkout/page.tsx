"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Checkout() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const router = useRouter();

  return (
    <div className="min-h-screen bg-black text-white p-10 max-w-md mx-auto">
      <h1 className="text-2xl font-bold">Checkout</h1>

      <input
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full p-2 mt-4 text-black rounded"
      />

      <input
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full p-2 mt-4 text-black rounded"
      />

      <button
        onClick={() => router.push("/success")}
        className="mt-6 bg-green-500 px-6 py-3 rounded w-full"
      >
        Place Order
      </button>
    </div>
  );
}