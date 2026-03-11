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
    { href: "/about", label: "会社概要" },
    { href: "/services", label: "事業内容" },
    { href: "/contact", label: "お問い合わせ" },
    { href: "/areas", label: "対応エリア" },
    { href: "/policy", label: "プライバシーポリシー" },
    { href: "/fee", label: "料金" },
  ];

  return (
    <>
      {/* PCナビ */}
      <nav
        className={`hidden md:flex space-x-8 text-sm font-medium transition-all duration-300 ${
          scrolled ? "bg-white shadow-md px-6 py-3 rounded-md" : ""
        }`}
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`hover:text-red-600 ${
              pathname === link.href ? "text-red-600" : ""
            }`}
          >
            {link.label}
          </Link>
        ))}
      </nav>

      {/* ハンバーガー */}
      <button
        className="md:hidden fixed top-5 right-6 z-[100] w-8 h-8"
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

      {/* フル画面メニュー */}
      <div
        className={`fixed inset-0 z-[95] bg-black/60 backdrop-blur md:hidden transform transition-transform duration-500 ${
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
        </div>
      </div>
    </>
  );
}
{/* test */}
{/*ksdjad */}