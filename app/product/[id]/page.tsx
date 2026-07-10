"use client";

import AddToCartButton from "@/components/AddToCartButton";

const products = [
  {
    id: "1",
    name: "Pearl Stud Earrings",
    price: 7.99,
    category: "Studs",
    material: "Pearl imitation, stainless steel",
    description:
      "Elegant pearl stud earrings designed for everyday beauty and simple luxury.",
  },
  {
    id: "2",
    name: "Gold Hoop Earrings",
    price: 12.99,
    category: "Hoops",
    material: "Gold plated alloy",
    description:
      "Classic gold hoop earrings with a polished finish for a timeless look.",
  },
  {
    id: "3",
    name: "Crystal Drop Earrings",
    price: 9.99,
    category: "Drops",
    material: "Crystal, silver plated alloy",
    description:
      "Sparkling crystal drop earrings perfect for dinner, parties, and special events.",
  },
];

export default function ProductDetailPage({
  params,
}: {
  params: { id: string };
}) {
  const product = products.find((item) => item.id === params.id);

  if (!product) {
    return <main className="p-10">Product not found</main>;
  }

  return (
    <main className="min-h-screen bg-[#faf7f2] px-6 py-10 text-[#222]">
      <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-2">
        <div className="flex h-[500px] items-center justify-center rounded-3xl bg-[#f1ebe2] text-8xl">
          💎
        </div>

        <div>
          <a href="/shop" className="text-sm text-[#b9975b]">
            ← Back to Shop
          </a>

          <p className="mt-8 text-sm uppercase tracking-[0.3em] text-[#b9975b]">
            {product.category}
          </p>

          <h1 className="mt-3 text-5xl font-bold">{product.name}</h1>

          <p className="mt-5 text-3xl font-bold text-[#b9975b]">
            ${product.price}
          </p>

          <p className="mt-6 text-gray-600">{product.description}</p>

          <div className="mt-6 rounded-2xl bg-white p-5">
            <p className="font-semibold">Material</p>
            <p className="mt-2 text-gray-600">{product.material}</p>
          </div>

          <div className="mt-6 flex gap-3">
            <AddToCartButton product={{ id: product.id, name: product.name, price: product.price }} />
            <button className="flex-1 rounded-full border py-4">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
