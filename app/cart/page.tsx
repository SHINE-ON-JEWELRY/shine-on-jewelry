"use client";

import { useEffect, useState } from "react";
import { CartItem, getCart, saveCart } from "@/lib/cart";

export default function CartPage() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const updateQuantity = (id: string, quantity: number) => {
    const updatedCart = cart
      .map((item) => (item.id === id ? { ...item, quantity } : item))
      .filter((item) => item.quantity > 0);

    setCart(updatedCart);
    saveCart(updatedCart);
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <main className="min-h-screen bg-[#faf7f2] px-6 py-10 text-[#222]">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-bold">Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="mt-10 rounded-3xl bg-white p-8 text-center">
            <p>Your cart is empty.</p>
            <a
              href="/shop"
              className="mt-6 inline-block rounded-full bg-[#b9975b] px-6 py-3 text-white"
            >
              Continue Shopping
            </a>
          </div>
        ) : (
          <div className="mt-8 space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between rounded-3xl bg-white p-5"
              >
                <div>
                  <h2 className="font-semibold">{item.name}</h2>
                  <p className="text-[#b9975b]">${item.price}</p>
                </div>

                <div className="flex items-center gap-3">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="rounded-full border px-3 py-1"
                  >
                    -
                  </button>
                  <span>{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="rounded-full border px-3 py-1"
                  >
                    +
                  </button>
                </div>
              </div>
            ))}

            <div className="rounded-3xl bg-white p-6">
              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>${total.toFixed(2)}</span>
              </div>

              <a
                href="/checkout"
                className="mt-6 block rounded-full bg-[#b9975b] py-4 text-center text-white"
              >
                Checkout
              </a>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
