"use client";

import { useState } from "react";
import { products } from "@/data/products";

export default function ShopPage() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const categories = ["All", ...new Set(products.map((p) => p.category))];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "All" || product.category === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <main className="min-h-screen bg-[#faf7f2] px-6 py-10 text-[#222]">
      <div className="mx-auto max-w-6xl">
        <div className="mb-10 flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
         <div>
           <p className="text-sm tracking-[0.3em] text-[#b9975b]">SHOP</p>
           <h1 className="mt-2 text-4xl font-bold">Featured Earrings</h1>
         </div>

         <a href="/" className="rounded-full border px-5 py-2 text-sm">
           Home
         </a>
        </div>

        <div className="mb-8 grid gap-4 md:grid-cols-2">
         <input
           value={search}
           onChange={(e) => setSearch(e.target.value)}
           placeholder="Search earrings..."
           className="rounded-full border bg-white px-5 py-3"
         />

         <select
           value={category}
           onChange={(e) => setCategory(e.target.value)}
           className="rounded-full border bg-white px-5 py-3"
         >
           {categories.map((item) => (
             <option key={item}>{item}</option>
           ))}
         </select>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
         {filteredProducts.map((product) => (
           <div key={product.id} className="rounded-3xl bg-white p-5 shadow-sm">
             <div className="mb-4 flex h-56 items-center justify-center rounded-2xl bg-[#f1ebe2] text-6xl">
               💎
             </div>

             <p className="text-xs uppercase tracking-widest text-gray-400">
               {product.category}
             </p>

             <h2 className="mt-2 text-lg font-semibold">{product.name}</h2>

             <p className="mt-2 text-xl font-bold text-[#b9975b]">
               ${product.price.toFixed(2)}
             </p>

             <a
               href={`/product/${product.id}`}
               className="mt-5 block w-full rounded-full bg-[#b9975b] py-3 text-center text-white"
             >
               View Details
             </a>
           </div>
         ))}
        </div>

        {filteredProducts.length === 0 && (
         <div className="mt-10 rounded-3xl bg-white p-8 text-center">
           No products found.
         </div>
        )}
      </div>
    </main>
  );
}
