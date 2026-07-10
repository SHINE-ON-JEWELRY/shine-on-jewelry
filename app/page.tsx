export default function Home() {
  return (
    <main className="min-h-screen bg-[#faf7f2] text-[#222]">
      <section className="px-6 py-6 flex justify-between items-center">
        <h1 className="text-xl font-bold tracking-wide">SHINE ON JEWELRY</h1>
        <nav className="hidden md:flex gap-6 text-sm">
          <a href="#">Home</a>
          <a href="#">Shop</a>
          <a href="#">Featured Earrings</a>
          <a href="#">Contact</a>
        </nav>
        <button className="rounded-full border px-4 py-2 text-sm">Cart</button>
      </section>

      <section className="px-6 py-24 text-center">
        <p className="mb-4 text-sm tracking-[0.3em] text-[#b9975b]">
          LUXURY EARRINGS
        </p>
        <h2 className="mx-auto max-w-3xl text-5xl font-bold md:text-7xl">
          Every Pair Tells Your Story
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-gray-600">
          Elegant earrings designed to bring confidence, beauty, and sparkle to every occasion.
        </p>
        <button className="mt-8 rounded-full bg-[#b9975b] px-8 py-3 text-white">
          Shop Now
        </button>
      </section>

      <section className="px-6 py-16">
        <h3 className="mb-8 text-center text-3xl font-bold">
          Featured Earrings
        </h3>

        <div className="grid gap-6 md:grid-cols-4">
          {[
            ["Pearl Stud Earrings", "$7.99"],
            ["Gold Hoop Earrings", "$12.99"],
            ["Crystal Drop Earrings", "$9.99"],
            ["Butterfly Earrings", "$8.99"],
          ].map(([name, price]) => (
            <div key={name} className="rounded-3xl bg-white p-5 shadow-sm">
              <div className="mb-4 flex h-48 items-center justify-center rounded-2xl bg-[#f1ebe2] text-5xl">
                💎
              </div>
              <h4 className="font-semibold">{name}</h4>
              <p className="mt-2 text-[#b9975b]">{price}</p>
              <button className="mt-4 w-full rounded-full border py-2">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
