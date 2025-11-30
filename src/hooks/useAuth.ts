"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";

export function useAuth() {
  const supabase = createClient();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function login(email: string, password: string) {
    setLoading(true);
    setError("");

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return null;
    }

    return true;
  }

  async function signup(email: string, password: string, fullName: string) {
    setLoading(true);
    setError("");

    const { data, error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: {
          fullName,
        },
      },
    });

    setLoading(false);

    if (error) {
      setError(error.message);
      return null;
    }

    return data.user;
  }

  async function logout() {
    supabase.auth.signOut();
    window.location.href = "/";
  }

  return { login, signup, logout, loading, error };
}
