"use client";

import { foods } from "../data/foods";
import FoodCard from "./FoodCard";

export default function FoodList() {
  return (
    <div id="menu-section" className="px-6 py-10 bg-black">
      <h2 className="text-2xl font-bold mb-6 text-white">Our Menu</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {foods.map((food) => (
          <FoodCard key={food.id} food={food} />
        ))}
      </div>
    </div>
  );
}