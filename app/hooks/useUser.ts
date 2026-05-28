"use client";

import { useEffect, useState } from "react";
import { api } from "@/app/lib/api";

type User = {
  id: string;
  name: string;
  email: string;
  avatar: string;
};

export function useUser() {
  const [user, setUser] = useState<User | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    api
      .get<{ user: User }>("/auth/me")
      .then((res) => setUser(res.data.user))
      .catch(() => setUser(null))
      .finally(() => setLoading(false));
  }, []);

  return { user, loading };
}
