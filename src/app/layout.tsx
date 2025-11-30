import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import ClientWrapper from "./ClientWrapper";
import StyledComponentsRegistry from "./registry";
import Navbar from "@/components/Navbar/Navbar";
import { getUser } from "@/lib/supabase/getUser";

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
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <StyledComponentsRegistry>
          <ClientWrapper>
            <Navbar user={user} />
            <main>{children}</main>
          </ClientWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
