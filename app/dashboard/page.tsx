"use client";

import { useEffect, useState } from "react";

export default function Dashboard() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch("/api/orders")
      .then((res) => res.json())
      .then(setOrders);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white p-10">
      
      {/* BRAND HEADER */}
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-orange-400">
          Halal Oven 🍕
        </h1>
        <p className="text-zinc-500 text-sm">
          Incoming Orders Dashboard
        </p>
      </div>

      {orders.length === 0 ? (
        <p className="text-zinc-500">No orders yet</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="w-full text-left border border-zinc-800">
            
            <thead className="bg-zinc-900 text-zinc-300">
              <tr>
                <th className="p-3">ID</th>
                <th className="p-3">Customer</th>
                <th className="p-3">Contact</th>
                <th className="p-3">Items</th>
                <th className="p-3">Total</th>
                <th className="p-3">Time</th>
              </tr>
            </thead>

            <tbody>
              {orders.map((o: any) => (
                <tr key={o.id} className="border-t border-zinc-800">
                  
                  <td className="p-3 text-orange-400">
                    #{o.id}
                  </td>

                  <td className="p-3">
                    <p className="font-semibold">{o.name}</p>
                    <p className="text-xs text-zinc-500">{o.email}</p>
                  </td>

                  <td className="p-3 text-sm text-zinc-300">
                    {o.phone}
                  </td>

                  <td className="p-3 text-sm">
                    {o.items?.map((i: any, idx: number) => (
                      <div key={idx}>
                        {i.quantity}x {i.name}
                      </div>
                    ))}
                  </td>

                  <td className="p-3 text-green-400 font-bold">
                    ${o.total}
                  </td>

                  <td className="p-3 text-xs text-zinc-500">
                    {new Date(o.createdAt).toLocaleString()}
                  </td>
                </tr>
              ))}
            </tbody>

          </table>
        </div>
      )}
    </div>
  );
}