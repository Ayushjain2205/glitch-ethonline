import type React from "react";
import type { Metadata } from "next";
import { Orbitron, Space_Mono } from "next/font/google";

import "./globals.css";

const _orbitron = Orbitron({
  subsets: ["latin"],
  weight: ["400", "700", "900"],
});
const _spaceMono = Space_Mono({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "v0 App",
  description: "Created with v0",
  generator: "v0.app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-sans antialiased`}>{children}</body>
    </html>
  );
}
