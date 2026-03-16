"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // スクロール検知
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // スクロールロック
  useEffect(() => {
    if (isOpen) {
      document.documentElement.style.overflow = "hidden";
      document.body.style.overflow = "hidden";
    } else {
      document.documentElement.style.overflow = "";
      document.body.style.overflow = "";
    }
  }, [isOpen]);

  const links = [
    { href: "/", label: "ホーム" },
    { href: "/services", label: "事業内容" },
    { href: "/about", label: "会社概要" },
    { href: "/contact", label: "お問い合わせ" },
    { href: "/blog", label: "社長の独り言"},
  ];

  return (
    <>
      {/* ヘッダー */}
      <header
        className={`sticky top-0 z-50 transition-all duration-300 ${
          scrolled ? "bg-white shadow-md" : "bg-white/90 backdrop-blur"
        }`}
      >
        <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">


          {/* PCナビ */}
          <nav className="hidden md:flex items-center space-x-8 text-sm font-medium">

            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`hover:text-red-600 transition ${
                  pathname === link.href ? "text-red-600" : ""
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* 電話ボタン */}
            <a
              href="tel:0493245561"
              className="ml-4 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition"
            >
              📞 0493-24-5561
            </a>

          </nav>

          {/* ハンバーガー */}
          <button
            className="md:hidden relative w-8 h-8 z-[100]"
            onClick={() => setIsOpen(!isOpen)}
          >
            <span
              className={`absolute left-0 w-8 h-0.5 bg-black transition-all duration-300 ${
                isOpen ? "rotate-45 top-4" : "top-2"
              }`}
            />
            <span
              className={`absolute left-0 w-8 h-0.5 bg-black transition-all duration-300 ${
                isOpen ? "opacity-0" : "top-4"
              }`}
            />
            <span
              className={`absolute left-0 w-8 h-0.5 bg-black transition-all duration-300 ${
                isOpen ? "-rotate-45 top-4" : "top-6"
              }`}
            />
          </button>

        </div>
      </header>

      {/* モバイルメニュー */}
      <div
        className={`fixed inset-0 z-[95] bg-black/70 backdrop-blur-md md:hidden transform transition-transform duration-500 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >

        <div className="pt-32 flex flex-col items-center space-y-10 text-2xl font-semibold text-white">

          {links.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`transition-all duration-500 ${
                isOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              } ${pathname === link.href ? "text-red-400" : ""}`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {link.label}
            </Link>
          ))}

          {/* 電話 */}
          <a
            href="tel:0493245561"
            className="mt-8 bg-red-600 px-6 py-3 rounded-md text-white text-lg"
          >
            📞 電話する
          </a>

        </div>
      </div>
    </>
  );
}