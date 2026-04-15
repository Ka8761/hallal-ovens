"use client";

import { useCart } from "../context/CartContext";
import { CartItem as CartItemType } from "../types";

interface Props {
  item: CartItemType;
}

export default function CartItem({ item }: Props) {
  const { increaseQty, decreaseQty } = useCart();

  return (
    <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-4 mb-3">
      <div className="flex justify-between items-start mb-2">
        <div>
          <p className="font-semibold text-white text-sm">{item.name}</p>
          <p className="text-zinc-500 text-xs mt-0.5">{item.description}</p>
        </div>
        <p className="text-orange-400 font-bold text-sm ml-3 shrink-0">
          ${(item.price * item.quantity).toFixed(2)}
        </p>
      </div>

      <div className="flex items-center justify-between mt-3">
        <div className="flex items-center gap-3">
          <button
            onClick={() => decreaseQty(item.id)}
            className="w-7 h-7 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center text-lg transition-colors"
          >
            −
          </button>
          <span className="text-white font-semibold text-sm w-5 text-center">
            {item.quantity}
          </span>
          <button
            onClick={() => increaseQty(item.id)}
            className="w-7 h-7 rounded-lg bg-zinc-800 hover:bg-zinc-700 text-white flex items-center justify-center text-lg transition-colors"
          >
            +
          </button>
        </div>
        <p className="text-zinc-500 text-xs">${item.price.toFixed(2)} each</p>
      </div>
    </div>
  );
}