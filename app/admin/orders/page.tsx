const orders = [
  ["SOJ-1001", "Srey Mom", "$19.98", "Cash on Delivery", "Pending"],
  ["SOJ-1002", "Dara", "$12.99", "ABA KHQR", "Paid"],
  ["SOJ-1003", "Sophea", "$8.99", "Cash on Delivery", "Delivered"],
];

export default function AdminOrdersPage() {
  return (
    <main className="min-h-screen bg-[#111] px-6 py-10 text-white">
      <div className="mx-auto max-w-6xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm tracking-[0.3em] text-[#d4af37]">ADMIN</p>
            <h1 className="mt-2 text-4xl font-bold">Orders</h1>
          </div>

          <a
            href="/admin"
            className="rounded-full border border-[#d4af37] px-5 py-2 text-sm text-[#d4af37]"
          >
            Dashboard
          </a>
        </div>

        <div className="mt-10 rounded-3xl bg-[#1c1c1c] p-6">
          <h2 className="text-2xl font-bold">Recent Orders</h2>

          <div className="mt-6 overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="text-gray-400">
                <tr>
                  <th className="py-3">Order ID</th>
                  <th>Customer</th>
                  <th>Total</th>
                  <th>Payment</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
                {orders.map(([id, customer, total, payment, status]) => (
                  <tr key={id} className="border-t border-white/10">
                    <td className="py-4 font-medium text-[#d4af37]">{id}</td>
                    <td>{customer}</td>
                    <td>{total}</td>
                    <td>{payment}</td>
                    <td>{status}</td>
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
