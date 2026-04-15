"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { useCart } from "../context/CartContext";
import { Food } from "../types";
import Toast from "./Toast";

interface FoodCardProps {
  food: Food;
}

export default function FoodCard({ food }: FoodCardProps) {
  const { addToCart } = useCart();
  const [toastVisible, setToastVisible] = useState(false);

  const handleAdd = () => {
    addToCart(food);
    setToastVisible(true);
    setTimeout(() => setToastVisible(false), 2500);
  };

  return (
    <>
      <Toast message={`${food.name} added to cart!`} visible={toastVisible} />

      <motion.div
        whileHover={{ y: -4 }}
        transition={{ type: "spring", stiffness: 300 }}
        className="relative bg-zinc-900 border border-zinc-800 hover:border-orange-500/60 rounded-2xl overflow-hidden flex flex-col"
        style={{ aspectRatio: "3/4" }}
      >
        {/* BADGE */}
        {food.tag && (
          <div className="absolute top-3 left-3 z-10">
            <span
              className={`text-white text-xs px-2.5 py-1 rounded-full font-semibold ${
                food.tag === "NEW" ? "bg-red-500" : "bg-orange-500"
              }`}
            >
              {food.tag}
            </span>
          </div>
        )}

        {/* IMAGE */}
        <div className="w-full flex-1 bg-zinc-800 overflow-hidden">
          <img
            src={food.image}
            alt={food.name}
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src =
                "https://placehold.co/400x300/27272a/f97316?text=🍕";
            }}
          />
        </div>

        {/* BODY */}
        <div className="p-4 flex flex-col justify-between" style={{ minHeight: "140px" }}>
          <div>
            <h2 className="text-base font-semibold text-white leading-tight mb-1">
              {food.name}
            </h2>
            <p className="text-zinc-400 text-xs leading-relaxed">{food.description}</p>
          </div>

          <div className="flex justify-between items-center mt-3">
            <p className="text-orange-400 font-bold text-base">${food.price.toFixed(2)}</p>
            <button
              onClick={handleAdd}
              className="bg-orange-500 hover:bg-orange-600 active:scale-95 text-white px-4 py-1.5 rounded-lg text-sm font-medium transition-all"
            >
              Add
            </button>
          </div>
        </div>
      </motion.div>
    </>
  );
}