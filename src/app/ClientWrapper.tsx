"use client";

import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import { theme } from "@/styles/theme";
import { GlobalStyles } from "@/styles/globalStyles";
import { createClient } from "@/lib/supabase/client";
import Navbar from "@/components/Navbar/Navbar";

export default function ClientWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const supabase = createClient();

  const [user, setUser] = useState<any>(null);
  const [loadingUser, setLoadingUser] = useState(true);

  useEffect(() => {
    async function loadUser() {
      const { data } = await supabase.auth.getUser();
      setUser(data.user ?? null);
      setLoadingUser(false);
    }

    loadUser();

    // Listen to login/logout changes
    const { data: listener } = supabase.auth.onAuthStateChange(
      (_event, session) => {
        setUser(session?.user ?? null);
      }
    );

    return () => listener.subscription.unsubscribe();
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Navbar user={user} loading={loadingUser} />
      {children}
    </ThemeProvider>
  );
}
