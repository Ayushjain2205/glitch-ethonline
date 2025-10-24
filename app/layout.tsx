import type React from "react";
import type { Metadata } from "next";
import { Orbitron, Space_Mono } from "next/font/google";
import { ThirdwebProvider } from "thirdweb/react";

import "./globals.css";

const _orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});
const _spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Glitch",
  description: "Create Games ",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>
        <ThirdwebProvider>{children}</ThirdwebProvider>
      </body>
    </html>
  );
}
