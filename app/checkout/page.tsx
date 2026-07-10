"use client";

import { useEffect, useState } from "react";
import { CartItem, getCart, saveCart } from "@/lib/cart";

export default function CheckoutPage() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const placeOrder = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    saveCart([]);
    setCart([]);
    setSuccess(true);
  };

  if (success) {
    return (
      <main className="min-h-screen bg-[#faf7f2] px-6 py-20 text-center text-[#222]">
        <div className="mx-auto max-w-xl rounded-3xl bg-white p-10">
          <div className="text-6xl">✅</div>
          <h1 className="mt-6 text-4xl font-bold">Order Received</h1>
          <p className="mt-4 text-gray-600">
            Thank you for shopping with SHINE ON JEWELRY.
          </p>
          <a
            href="/shop"
            className="mt-8 inline-block rounded-full bg-[#b9975b] px-8 py-3 text-white"
          >
            Continue Shopping
          </a>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#faf7f2] px-6 py-10 text-[#222]">
      <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2">
        <form onSubmit={placeOrder} className="rounded-3xl bg-white p-6">
          <h1 className="text-3xl font-bold">Checkout</h1>

          <input className="mt-6 w-full rounded-xl border p-3" placeholder="Full name" required />
          <input className="mt-4 w-full rounded-xl border p-3" placeholder="Phone number" required />
          <input className="mt-4 w-full rounded-xl border p-3" placeholder="Delivery address" required />

          <select className="mt-4 w-full rounded-xl border p-3" required>
            <option value="">Choose payment method</option>
            <option>Cash on Delivery</option>
            <option>ABA KHQR</option>
          </select>

          <button className="mt-6 w-full rounded-full bg-[#b9975b] py-4 text-white">
            Place Order
          </button>
        </form>

        <div className="rounded-3xl bg-white p-6">
          <h2 className="text-2xl font-bold">Order Summary</h2>

          <div className="mt-6 space-y-4">
            {cart.map((item) => (
              <div key={item.id} className="flex justify-between">
                <span>{item.name} × {item.quantity}</span>
                <span>${(item.price * item.quantity).toFixed(2)}</span>
              </div>
            ))}
          </div>

          <div className="mt-6 border-t pt-6">
            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
