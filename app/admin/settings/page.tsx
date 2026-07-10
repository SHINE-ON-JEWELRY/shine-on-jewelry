export default function AdminSettingsPage() {
  return (
    <main className="min-h-screen bg-[#111] px-6 py-10 text-white">
      <div className="mx-auto max-w-4xl">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm tracking-[0.3em] text-[#d4af37]">ADMIN</p>
            <h1 className="mt-2 text-4xl font-bold">Store Settings</h1>
          </div>

          <a href="/admin" className="rounded-full border border-[#d4af37] px-5 py-2 text-sm text-[#d4af37]">
            Dashboard
          </a>
        </div>

        <form className="mt-10 space-y-5 rounded-3xl bg-[#1c1c1c] p-6">
          <input className="w-full rounded-xl border border-white/10 bg-[#111] p-3" defaultValue="SHINE ON JEWELRY" />
          <input className="w-full rounded-xl border border-white/10 bg-[#111] p-3" placeholder="Phone number" />
          <input className="w-full rounded-xl border border-white/10 bg-[#111] p-3" placeholder="Telegram link" />
          <input className="w-full rounded-xl border border-white/10 bg-[#111] p-3" placeholder="Facebook page link" />
          <textarea className="h-28 w-full rounded-xl border border-white/10 bg-[#111] p-3" placeholder="Store address" />

          <select className="w-full rounded-xl border border-white/10 bg-[#111] p-3">
            <option>Cash on Delivery</option>
            <option>ABA KHQR</option>
            <option>Cash on Delivery + ABA KHQR</option>
          </select>

          <button className="rounded-full bg-[#d4af37] px-8 py-3 text-black">
            Save Settings
          </button>
        </form>
      </div>
    </main>
  );
}
