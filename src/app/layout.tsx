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
  title: "WU24 | LIA Bingo",
  description: "Track your bingo progress and compete on the leaderboard.",
  openGraph: {
    title: "WU24 | LIA Bingo",
    description: "Track your bingo progress and compete on the leaderboard.",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "WU24 LIA Bingo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "WU24 | LIA Bingo",
    description: "Track your bingo progress and compete on the leaderboard.",
    images: ["/og.png"],
  },
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
