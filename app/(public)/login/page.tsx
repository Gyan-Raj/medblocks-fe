// app\(public)\login\page.tsx
"use client";

import Link from "next/link";

export default function LoginPage() {
  const handleGoogleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google";
  };

  const handleGithubLogin = () => {
    window.location.href = "http://localhost:5000/auth/github";
  };

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-lg">
        <h1 className="text-3xl font-bold text-center mb-8">Login</h1>

        {/* Username Password Login */}
        <form className="flex flex-col gap-4">
          <input
            type="text"
            placeholder="Username"
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
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center gap-4 my-6">
          <div className="h-px bg-gray-300 flex-1" />
          <span className="text-sm text-gray-500">OR</span>
          <div className="h-px bg-gray-300 flex-1" />
        </div>

        {/* OAuth Buttons */}
        <div className="flex flex-col gap-3">
          <button
            onClick={handleGoogleLogin}
            className="border rounded-lg p-3 hover:bg-gray-100 transition"
          >
            Sign in with Google
          </button>

          <button
            onClick={handleGithubLogin}
            className="border rounded-lg p-3 hover:bg-gray-100 transition"
          >
            Sign in with GitHub
          </button>
        </div>

        {/* Signup */}
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
