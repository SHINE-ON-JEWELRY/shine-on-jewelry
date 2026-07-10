"use client";

import { addToCart } from "@/lib/cart";

type Props = {
  product: {
    id: string;
    name: string;
    price: number;
  };
};

export default function AddToCartButton({ product }: Props) {
  return (
    <button
      onClick={() => {
        addToCart(product);
        alert("Added to cart");
      }}
      className="flex-1 rounded-full bg-[#b9975b] py-4 text-white"
    >
      Add to Cart
    </button>
  );
}
