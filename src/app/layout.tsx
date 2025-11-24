import type { ReactNode } from "react";
import { Inter } from "next/font/google";
import ClientWrapper from "./ClientWrapper";
import StyledComponentsRegistry from "./registry";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "WU24 | LIA-Bingo",
  description: "Bingo game for WU24 internship.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <StyledComponentsRegistry>
          <ClientWrapper>
            <main>{children}</main>
          </ClientWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
