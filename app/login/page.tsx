"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Eye, EyeOff } from "lucide-react";
import Link from "next/link";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const result = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (result?.error) {
      setError("Email atau password salah.");
    } else {
      router.push("/");
    }
  }

  return (
    <div className="min-h-screen flex justify-center p-10 bg-white rounded-lg shadow-md">
      <div className="w-full max-w-md">
        {/* Logo / Brand */}
        <div className="text-3xl font-extrabold text-center mb-11">
          Masuk ke <span className="text-primary">GEMA</span>
        </div>

        <div className="absolute self-center mb-8">
          {error && <p className="text-red-500 text-sm text-center">{error}</p>}
        </div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <Input
            type="text"
            placeholder="Masukkan email"
            className="h-13 rounded-md border-slate-200 px-5"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <div className="flex flex-col gap-1">
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
          </div>

          <div className="flex justify-end">
            <Link
              href="/forgot-password"
              className="text-sm font-medium text-indigo-600 hover:underline"
            >
              Lupa Password?
            </Link>
          </div>

          <Button
            type="submit"
            className="h-12 rounded-md font-bold bg-sky-400 hover:bg-sky-500 text-white mt-2"
            disabled={loading}
          >
            {loading ? "Memuat..." : "Masuk"}
          </Button>
        </form>

        <p className="text-center text-sm mt-4">
          Belum punya akun?{" "}
          <Link
            href="/register"
            className="font-semibold text-indigo-600 hover:underline"
          >
            Daftar di sini
          </Link>
        </p>

        <div className="border-t border-slate-200 my-6" />

        <Button
          type="button"
          variant="outline"
          onClick={() => signIn("google")}
          className="h-12 rounded-md border-slate-200 font-semibold flex items-center justify-center gap-2 w-full"
        >
          <svg width="18" height="18" viewBox="0 0 24 24">
            <path
              fill="#4285F4"
              d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            />
            <path
              fill="#34A853"
              d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.99.69-2.26 1.1-3.71 1.1-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            />
            <path
              fill="#FBBC05"
              d="M5.84 14.14c-.22-.69-.35-1.42-.35-2.14s.13-1.45.35-2.14V7.02H2.18A10.99 10.99 0 0 0 1 12c0 1.77.43 3.44 1.18 4.98l3.66-2.84z"
            />
            <path
              fill="#EA4335"
              d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.02l3.66 2.84c.87-2.6 3.3-4.48 6.16-4.48z"
            />
          </svg>
          Masuk dengan Google
        </Button>
      </div>
    </div>
  );
}
