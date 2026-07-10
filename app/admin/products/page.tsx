const products = [
  ["Pearl Stud Earrings", "$7.99", "Studs", "24"],
  ["Gold Hoop Earrings", "$12.99", "Hoops", "18"],
  ["Crystal Drop Earrings", "$9.99", "Drops", "30"],
  ["Butterfly Earrings", "$8.99", "Fashion", "15"],
  ["Heart Earrings", "$9.49", "Fashion", "20"],
  ["Flower Earrings", "$10.99", "Floral", "12"],
];

export default function AdminProductsPage() {
  return (
    <main className="min-h-screen bg-[#111] px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm tracking-[0.3em] text-[#d4af37]">ADMIN</p>
            <h1 className="mt-2 text-4xl font-bold">Products</h1>
          </div>

          <a
            href="/admin"
            className="rounded-full border border-[#d4af37] px-5 py-2 text-sm text-[#d4af37]"
          >
            Dashboard
          </a>
        </div>

        <div className="mt-10 rounded-3xl bg-[#1c1c1c] p-6">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold">Product List</h2>
            <button className="rounded-full bg-[#d4af37] px-5 py-2 text-black">
              Add Product
            </button>
          </div>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-gray-400">
                <tr>
                  <th className="py-3">Product</th>
                  <th>Price</th>
                  <th>Category</th>
                  <th>Stock</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
                {products.map(([name, price, category, stock]) => (
                  <tr key={name} className="border-t border-white/10">
                    <td className="py-4 font-medium">{name}</td>
                    <td>{price}</td>
                    <td>{category}</td>
                    <td>{stock}</td>
                    <td>
                      <button className="text-[#d4af37]">Edit</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </main>
  );
}
