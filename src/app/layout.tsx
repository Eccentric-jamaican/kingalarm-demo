import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import GSAPRegistry from "@/components/GSAPRegistry";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "KingAlarm",
  description: "Alarm System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <GSAPRegistry />
        {children}
      </body>
    </html>
  );
}
