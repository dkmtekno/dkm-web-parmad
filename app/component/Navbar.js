"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const isHome = pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const getLinkClass = (href) => {
    const isActive = pathname === href;

    if (scrolled) {
      // Kalau sudah discroll, semua link jadi putih
      return isActive
        ? "text-orange-500"
        : "text-white hover:text-[#0066FF] transition";
    } else if (isHome) {
      // Kalau masih di home dan belum scroll
      return isActive
        ? "text-orange-500"
        : "text-white hover:text-[#0066FF] transition";
    } else {
      // Kalau di halaman lain dan belum scroll
      return isActive
        ? "text-orange-500"
        : "text-[#0066FF] hover:text-[#0066FF] transition";
    }
  };

  // Kalau scrolled, pakai logo putih, kalau belum scrolled pakai biasa
  const logoSrc = scrolled
    ? "/logo_dkm_putih.png" // Logo putih saat scroll
    : isHome
    ? "/logo_dkm_putih.png" // Di home awal tetap putih
    : "/logo_dkm_parmad.png"; // Selain home biru

  // Icon sosial media
  const ytIcon = scrolled
    ? "/icon_yt_white.png"
    : isHome
    ? "/icon_yt_white.png"
    : "/icon_yt_blue.png";

  const waIcon = scrolled
    ? "/icon_wa_white.png"
    : isHome
    ? "/icon_wa_white.png"
    : "/icon_wa_blue.png";

  const igIcon = scrolled
    ? "/icon_ig_white.png"
    : isHome
    ? "/icon_ig_white.png"
    : "/icon_ig_blue.png";

  return (
    <nav
      className={`fixed top-0 left-0 right-0 px-8 py-4 transition-all duration-300 ease-in-out flex justify-between items-center z-40 ${
        scrolled
          ? "bg-black/70 backdrop-blur-md shadow-lg max-w-6xl mx-auto rounded-full mt-3"
          : "w-full"
      }`}
    >
      {/* Logo */}
      <Link href="/">
        <img
          src={logoSrc}
          alt="Logo DKM"
          className="h-10 transition-all duration-300"
        />
      </Link>

      {/* Desktop Menu */}
      <div className="hidden lg:flex gap-6 text-sm font-semibold">
        <Link href="/" className={getLinkClass("/")}>
          Beranda
        </Link>
        <Link href="/tentang-kami" className={getLinkClass("/tentang-kami")}>
          Tentang Kami
        </Link>
        <Link
          href="/divisi-organisasi"
          className={getLinkClass("/divisi-organisasi")}
        >
          Divisi Organisasi
        </Link>
        <Link href="/program" className={getLinkClass("/program")}>
          Program
        </Link>
        <Link href="/kontak-kami" className={getLinkClass("/kontak-kami")}>
          Kontak Kami
        </Link>
      </div>

      {/* Sosial Media */}
      <div className="hidden lg:flex gap-4 items-center">
        <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
          <img src={ytIcon} alt="YouTube" className="h-6 w-6" />
        </a>
        <a
          href="https://wa.me/nomorwa"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={waIcon} alt="WhatsApp" className="h-6 w-6" />
        </a>
        <a
          href="https://instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={igIcon} alt="Instagram" className="h-6 w-6" />
        </a>
      </div>

      {/* Hamburger Menu */}
      <button
        className={`lg:hidden focus:outline-none transition-colors duration-300 ${
          scrolled ? "text-white" : isHome ? "text-white" : "text-[#0066FF]"
        }`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          {menuOpen ? (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          ) : (
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            />
          )}
        </svg>
      </button>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 right-8 bg-black/70 rounded-lg py-4 px-6 flex flex-col gap-4 text-white text-sm font-semibold lg:hidden">
          <Link
            href="/"
            className={getLinkClass("/")}
            onClick={() => setMenuOpen(false)}
          >
            Beranda
          </Link>
          <Link
            href="/tentang-kami"
            className={getLinkClass("/tentang-kami")}
            onClick={() => setMenuOpen(false)}
          >
            Tentang Kami
          </Link>
          <Link
            href="/divisi-organisasi"
            className={getLinkClass("/divisi-organisasi")}
            onClick={() => setMenuOpen(false)}
          >
            Divisi Organisasi
          </Link>
          <Link
            href="/program"
            className={getLinkClass("/program")}
            onClick={() => setMenuOpen(false)}
          >
            Program
          </Link>
          <Link
            href="/kontak-kami"
            className={getLinkClass("/kontak-kami")}
            onClick={() => setMenuOpen(false)}
          >
            Kontak Kami
          </Link>
        </div>
      )}
    </nav>
  );
}
