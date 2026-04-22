import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Nav from "@/components/Nav";
import Link from "next/link";
import ScrollTopButton from "@/components/ScrollTopButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "工藤防災",
  description: "工藤防災の公式サイト",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-50 text-gray-900`}
      >
        {/* ==== ヘッダー ==== */}
        {/* zを少し下げる */}
        <header className="sticky top-0 z-40 bg-white shadow-md">
          <div className="max-w-6xl mx-auto px-8 py-4 flex justify-between items-center">
            <h1 className="text-lg sm:text-xl font-bold text-blue-900 whitespace-nowrap">
              <Link href="/" className="hover:opacity-70 transition">
              工藤防災株式会社
              </Link>
              
              
            </h1>

            <Nav />
          </div>
        </header>

        {/* ページ本体 */}
        <main className="relative z-0">
          {children}
        </main>

        <ScrollTopButton />
      </body>
    </html>
  );
}