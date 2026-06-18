"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    const res = await fetch("/api/admin/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    setLoading(false);
    if (!res.ok) return setError(data.error || "Login failed");
    router.push("/admin/dashboard");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 py-8" style={{ background: "#0a0a0a" }}>
      <div className="w-full max-w-md p-6 sm:p-8 rounded-3xl" style={{ background: "#111", border: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="text-center mb-8">
          <div className="font-black text-2xl tracking-tight mb-1" style={{ color: "#ffffff" }}>BRAND BROKERS</div>
          <p className="text-sm" style={{ color: "#9ca3af" }}>Admin Panel</p>
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <div>
            <label className="text-xs font-bold uppercase tracking-widest block mb-2" style={{ color: "#9ca3af" }}>Email</label>
            <input
              type="email" value={email} onChange={e => setEmail(e.target.value)} required
              className="w-full px-4 py-3 rounded-xl text-sm outline-none focus:border-white transition-colors"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#ffffff" }}
            />
          </div>
          <div>
            <label className="text-xs font-bold uppercase tracking-widest block mb-2" style={{ color: "#9ca3af" }}>Password</label>
            <input
              type="password" value={password} onChange={e => setPassword(e.target.value)} required
              className="w-full px-4 py-3 rounded-xl text-sm outline-none focus:border-white transition-colors"
              style={{ background: "rgba(255,255,255,0.05)", border: "1px solid rgba(255,255,255,0.1)", color: "#ffffff" }}
            />
          </div>
          {error && <p className="text-red-400 text-sm text-center">{error}</p>}
          <button
            type="submit" disabled={loading}
            className="mt-2 py-3 rounded-xl font-black text-black transition-all hover:opacity-90 disabled:opacity-50"
            style={{ background: "linear-gradient(135deg,#ffffff,#d1d5db)" }}
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
