const stats = [
  ["Total Revenue", "$0.00"],
  ["Orders", "0"],
  ["Products", "6"],
  ["Customers", "0"],
];

export default function AdminPage() {
  return (
    <main className="min-h-screen bg-[#111] px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm tracking-[0.3em] text-[#d4af37]">ADMIN</p>
            <h1 className="mt-2 text-4xl font-bold">Dashboard</h1>
          </div>

          <a
            href="/"
            className="rounded-full border border-[#d4af37] px-5 py-2 text-sm text-[#d4af37]"
          >
            View Store
          </a>
        </div>

        <div className="mt-10 grid gap-5 md:grid-cols-4">
          {stats.map(([label, value]) => (
            <div key={label} className="rounded-3xl bg-[#1c1c1c] p-6">
              <p className="text-sm text-gray-400">{label}</p>
              <p className="mt-3 text-3xl font-bold text-[#d4af37]">
                {value}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-10 grid gap-6 md:grid-cols-3">
          <a href="/admin/products" className="rounded-3xl bg-[#1c1c1c] p-6">
            <h2 className="text-2xl font-bold">Products</h2>
            <p className="mt-2 text-gray-400">Add, edit, and remove products.</p>
          </a>

          <a href="/admin/orders" className="rounded-3xl bg-[#1c1c1c] p-6">
            <h2 className="text-2xl font-bold">Orders</h2>
            <p className="mt-2 text-gray-400">View customer orders.</p>
          </a>

          <a href="/admin/settings" className="rounded-3xl bg-[#1c1c1c] p-6">
            <h2 className="text-2xl font-bold">Settings</h2>
            <p className="mt-2 text-gray-400">Store contact and payment setup.</p>
          </a>
        </div>
      </div>
    </main>
  );
}
