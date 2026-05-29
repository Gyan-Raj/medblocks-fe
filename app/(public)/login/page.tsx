// app\(public)\login\page.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/app/lib/api";
import Image from "next/image";

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    try {
      await api.post("/auth/login", form);
      router.replace("/dashboard");
    } catch (err: any) {
      setError(err.response?.data?.error || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const handleGoogleLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/google`;
  };

  const handleGithubLogin = () => {
    window.location.href = `${process.env.NEXT_PUBLIC_BASE_URL}/auth/github`;
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8">Login</h1>

        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <input
            name="email"
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
            className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
          />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
          />

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="bg-black text-white rounded-lg p-3 hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Logging in..." : "Login"}
          </button>
        </form>

        <div className="flex items-center gap-4 my-6">
          <div className="h-px bg-gray-300 flex-1" />
          <span className="text-sm text-gray-500">OR</span>
          <div className="h-px bg-gray-300 flex-1" />
        </div>

        <div className="flex flex-col gap-3">
          <button
            type="button"
            onClick={handleGoogleLogin}
            className="
      flex items-center justify-center gap-3
      w-full
      rounded-lg border border-gray-300
      bg-white px-4 py-3
      font-medium text-gray-700
      transition-all duration-200
      hover:bg-gray-50 hover:border-gray-400
      focus:outline-none focus:ring-2 focus:ring-gray-300
      cursor-pointer
    "
          >
            <Image
              src="/icons/google.svg"
              alt="Google"
              width={20}
              height={20}
            />
            <span>Sign in with Google</span>
          </button>

          <button
            type="button"
            onClick={handleGithubLogin}
            className="
      flex items-center justify-center gap-3
      w-full
      rounded-lg border border-gray-300
      bg-white px-4 py-3
      font-medium text-gray-700
      transition-all duration-200
      hover:bg-gray-50 hover:border-gray-400
      focus:outline-none focus:ring-2 focus:ring-gray-300
      cursor-pointer
    "
          >
            <Image
              src="/icons/github.svg"
              alt="GitHub"
              width={20}
              height={20}
            />
            <span>Sign in with GitHub</span>
          </button>
        </div>

        <p className="text-center mt-6 text-sm">
          Don&apos;t have an account?{" "}
          <Link href="/signup" className="font-semibold underline">
            Sign Up
          </Link>
        </p>
      </div>
    </main>
  );
}
