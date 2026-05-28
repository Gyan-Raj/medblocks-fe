// app\(public) \signup\page.tsx
"use client";

import Link from "next/link";

export default function SignupPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8">Sign Up</h1>

        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
            className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="email"
            placeholder="Email"
            className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
          />

          <input
            type="password"
            placeholder="Password"
            className="border rounded-lg p-3 outline-none focus:ring-2 focus:ring-black"
          />

          <button
            type="submit"
            className="bg-black text-white rounded-lg p-3 hover:opacity-90 transition"
          >
            Create Account
          </button>
        </form>

        <p className="text-center mt-6 text-sm">
          Already have an account?{" "}
          <Link href="/login" className="font-semibold underline">
            Login
          </Link>
        </p>
      </div>
    </main>
  );
}
