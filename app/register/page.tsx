"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const res = await fetch("/api/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });

    const data = await res.json();
    setLoading(false);

    if (!res.ok) {
      setError(data.error ?? "Terjadi kesalahan.");
    } else {
      router.push("/login");
    }
  }

  return (
    <div className="min-h-screen flex justify-center p-10 bg-white rounded-lg shadow-md">
      <div className="w-full max-w-md">
        <div className="text-3xl font-extrabold text-center mb-11">
          Registrasi Akun
        </div>

        {error && (
          <p className="text-red-500 text-sm text-center mb-4">{error}</p>
        )}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            type="text"
            placeholder="Masukkan nama lengkap"
            className="h-13 rounded-md border-slate-200 px-5"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <Input
            type="email"
            placeholder="Masukkan email"
            className="h-13 rounded-md border-slate-200 px-5"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="relative">
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Masukkan password"
              className="h-13 rounded-md border-slate-200 pr-10 px-5"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400"
              tabIndex={-1}
            >
              {showPassword ? <Eye size={18} /> : <EyeOff size={18} />}
            </button>
          </div>

          <Button
            type="submit"
            className="h-12 rounded-md font-bold bg-sky-400 hover:bg-sky-500 text-white mt-2"
            disabled={loading}
          >
            {loading ? "Memuat..." : "Daftar"}
          </Button>
        </form>

        <p className="text-center text-sm mt-4">
          Sudah punya akun?{" "}
          <Link
            href="/login"
            className="font-semibold text-indigo-600 hover:underline"
          >
            Masuk di sini
          </Link>
        </p>
      </div>
    </div>
  );
}
