"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { api } from "@/app/lib/api";
import { useUser } from "@/app/hooks/useUser";

export default function DashboardPage() {
  const { user, loading } = useUser();
  const router = useRouter();

  // Redirect to login if not authenticated
  useEffect(() => {
    if (!loading && !user) router.replace("/login");
  }, [user, loading, router]);

  const handleLogout = async () => {
    await api.post("/auth/logout");
    router.replace("/login");
  };

  if (loading) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-100">
        <p className="text-gray-500">Loading...</p>
      </main>
    );
  }

  if (!user) return null; // redirect in-flight

  return (
    <main className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg text-center w-[350px]">
        <img
          src={user.avatar}
          alt="avatar"
          className="w-24 h-24 rounded-full mx-auto mb-4"
        />
        <h1 className="text-2xl font-bold">{user.name}</h1>
        <p className="text-gray-600 mb-6">{user.email}</p>
        <button
          onClick={handleLogout}
          className="bg-black text-white px-5 py-3 rounded-lg hover:opacity-90 transition"
        >
          Sign Out
        </button>
      </div>
    </main>
  );
}
