'use client';

import { useState } from 'react';
import { products } from '@/data/products';

export default function Shop() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');

  const categories = [
    { id: 'all', name: 'All Products' },
    { id: 'Studs', name: 'Studs' },
    { id: 'Hoops', name: 'Hoops' },
    { id: 'Drops', name: 'Drops' },
    { id: 'Fashion', name: 'Fashion' },
  ];

  let filtered = selectedCategory === 'all' 
    ? products 
    : products.filter(p => p.category === selectedCategory);

  if (sortBy === 'price-low') {
    filtered = [...filtered].sort((a, b) => a.price - b.price);
  } else if (sortBy === 'price-high') {
    filtered = [...filtered].sort((a, b) => b.price - a.price);
  }

  return (
    <main className="min-h-screen bg-[#faf7f2] text-[#222]">
      <section className="px-6 py-6 flex justify-between items-center border-b">
        <h1 className="text-xl font-bold tracking-wide">SHINE ON JEWELRY</h1>
        <nav className="hidden md:flex gap-6 text-sm">
           <a href="/" className="hover:text-[#b9975b]">Home</a>
           <a href="/shop" className="font-semibold text-[#b9975b]">Shop</a>
           <a href="/admin">Admin</a>
           <a href="/cart">Cart</a>
         </nav>
         <a href="/cart" className="rounded-full border px-4 py-2 text-sm hover:bg-[#b9975b] hover:text-white transition">
           Cart
         </a>
      </section>

      <section className="px-6 py-12">
        <div className="mb-8">
          <h2 className="text-4xl font-bold mb-8">Shop Our Collection</h2>
          
          <div className="flex flex-col md:flex-row gap-8 mb-8">
            <div className="flex-1">
              <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide">Category</h3>
              <div className="space-y-2">
                {categories.map(cat => (
                  <label key={cat.id} className="flex items-center gap-3 cursor-pointer">
                    <input
                      type="radio"
                      name="category"
                      value={cat.id}
                      checked={selectedCategory === cat.id}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-4 h-4"
                    />
                    <span className="text-sm">{cat.name}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="flex-1">
              <h3 className="font-semibold mb-4 text-sm uppercase tracking-wide">Sort By</h3>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-4 py-2 border rounded-lg text-sm bg-white text-[#222] focus:outline-none focus:ring-2 focus:ring-[#b9975b]"
              >
                <option value="featured">Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        <div className="mb-6 text-sm text-gray-600">
          Showing {filtered.length} products
        </div>

        <div className="grid gap-6 md:grid-cols-4">
          {filtered.map(product => (
            <div
              key={product.id}
              className="rounded-3xl bg-white p-5 shadow-sm hover:shadow-md transition cursor-pointer group"
            >
              <div className="mb-4 flex h-48 items-center justify-center rounded-2xl bg-[#f1ebe2] text-5xl group-hover:bg-[#e8dfd5] transition">
                💎
              </div>
              <h4 className="font-semibold line-clamp-2">{product.name}</h4>
              <p className="mt-2 text-lg font-semibold text-[#b9975b]">${product.price.toFixed(2)}</p>
            <a
              href={`/product/${product.id}`}
              className="mt-5 block w-full rounded-full bg-[#b9975b] py-3 text-center text-white"
            >
              View Details
            </a>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
