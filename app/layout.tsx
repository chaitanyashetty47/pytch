
import type { Metadata } from "next";
import {  Manrope } from "next/font/google";
import "./globals.css";

import { Toaster } from "@/components/ui/sonner"

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
});



export const metadata: Metadata = {
  title: "Pytch",
  description: "Pytch is a platform for creating and managing your projects.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${manrope.variable}  antialiased`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
