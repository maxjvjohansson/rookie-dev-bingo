import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import ClientWrapper from "./ClientWrapper";
import StyledComponentsRegistry from "./registry";
import Navbar from "@/components/Navbar/Navbar";
import { getUser } from "@/lib/supabase/getUser";
import { getUserProfile } from "@/lib/supabase/profile";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "WU24 | LIA-Bingo",
  description: "Bingo game for WU24 internship.",
};

export default async function RootLayout({
  children,
}: {
  children: ReactNode;
}) {
  const user = await getUser();
  const profile = user ? await getUserProfile(user.id) : null;
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.svg" />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <StyledComponentsRegistry>
          <ClientWrapper>
            <Navbar user={user} profile={profile} />
            <main>{children}</main>
          </ClientWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
