"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  // 🔒 スクロール完全ロック
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
    { href: "/about", label: "会社概要" },
    { href: "/services", label: "事業内容" },
    { href: "/contact", label: "お問い合わせ" },
  ];

  return (
    <>
      {/* PC */}
      <nav className="hidden md:flex space-x-8 text-sm font-medium">
        {links.map((link) => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>

      {/* ハンバーガー */}
      <button
        className="md:hidden relative z-[100] w-8 h-8"
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

      {/* オーバーレイ */}
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed inset-0 bg-black/70 backdrop-blur-md z-[90] md:hidden"
        />
      )}

      {/* フル画面メニュー */}
      <div
        className={`fixed inset-0 z-[95] bg-white md:hidden transform transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pt-32 px-10 flex flex-col space-y-10 text-2xl font-semibold">
          {links.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`transition-all duration-500 ${
                isOpen
                  ? "opacity-100 translate-x-0"
                  : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: `${index * 120}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}