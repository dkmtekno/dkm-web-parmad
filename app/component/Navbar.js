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
    const isActive = pathname === href || pathname.startsWith(`${href}/`);

    if (scrolled) {
      return isActive
        ? "text-orange-500 font-bold"
        : "text-white hover:text-[#0066FF] transition";
    } else if (isHome) {
      return isActive
        ? "text-orange-500 font-bold"
        : "text-white hover:text-[#0066FF] transition";
    } else {
      return isActive
        ? "text-orange-500 font-bold"
        : "text-[#0066FF] hover:text-[#0066FF] transition";
    }
  };

  const logoSrc = scrolled
    ? "/logo_dkm_putih.png"
    : isHome
    ? "/logo_dkm_putih.png"
    : "/logo_dkm_parmad.png";

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

      {/* Sosial Media Desktop */}
      <div className="hidden lg:flex gap-4 items-center">
        <SocialIcons isHome={isHome} scrolled={scrolled} />
      </div>

      {/* Hamburger Button */}
      <div className="lg:hidden">
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className={`${
            scrolled ? "text-white" : isHome ? "text-white" : "text-[#0066FF]"
          } focus:outline-none`}
        >
          {/* Icon hamburger */}
          <svg
            className="h-6 w-6"
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
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-20 left-0 right-0 bg-black/80 backdrop-blur-md flex flex-col items-center gap-6 py-6 text-white font-semibold text-lg z-30">
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

          {/* Social Media Mobile */}
          <div className="flex gap-4 pt-4">
            <SocialIcons isHome={isHome} scrolled={scrolled} />
          </div>
        </div>
      )}
    </nav>
  );
}

function SocialIcons({ isHome, scrolled }) {
  const iconColor =
    isHome || scrolled
      ? "fill-white group-hover:fill-[#0066FF]"
      : "fill-[#0066FF] group-hover:fill-white";

  return (
    <>
      {/* TikTok */}
      <a
        href="https://www.tiktok.com/@dkm.paramadina?_t=ZS-8vVAp1vne7Q&_r=1"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="30"
          height="30"
          viewBox="0 0 45 45"
          fill="none"
          className="transition-colors duration-300"
        >
          <path
            d="M31.1248 10.9125C29.8434 9.44911 29.1371 7.57012 29.1373 5.625H23.3436V28.875C23.2998 30.1335 22.7689 31.3258 21.8629 32.2003C20.9569 33.0749 19.7466 33.5633 18.4873 33.5625C15.8248 33.5625 13.6123 31.3875 13.6123 28.6875C13.6123 25.4625 16.7248 23.0437 19.9311 24.0375V18.1125C13.4623 17.25 7.7998 22.275 7.7998 28.6875C7.7998 34.9312 12.9748 39.375 18.4686 39.375C24.3561 39.375 29.1373 34.5938 29.1373 28.6875V16.8938C31.4867 18.581 34.3074 19.4862 37.1998 19.4813V13.6875C37.1998 13.6875 33.6748 13.8563 31.1248 10.9125Z"
            className={iconColor}
          />
        </svg>
      </a>

      {/* WhatsApp */}
      <a
        href="https://wa.me/6281285092798?text=Assalamualaikum,%20Saya%20mohon%20bantuan%20dari%20DKM%20Paramadina."
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
          className="transition-colors duration-300"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M12.6748 2C7.1518 2 2.6748 6.477 2.6748 12C2.6748 13.89 3.1998 15.66 4.1128 17.168L3.2208 20.2C3.16959 20.3741 3.16622 20.5587 3.21105 20.7346C3.25588 20.9104 3.34725 21.0709 3.47556 21.1992C3.60388 21.3276 3.76439 21.4189 3.94022 21.4638C4.11606 21.5086 4.30072 21.5052 4.4748 21.454L7.5068 20.562C9.06548 21.5051 10.853 22.0025 12.6748 22C18.1978 22 22.6748 17.523 22.6748 12C22.6748 6.477 18.1978 2 12.6748 2ZM10.4128 14.263C12.4358 16.285 14.3668 16.552 15.0488 16.577C16.0858 16.615 17.0958 15.823 17.4888 14.904C17.5384 14.7897 17.5564 14.6641 17.5409 14.5405C17.5255 14.4168 17.4771 14.2996 17.4008 14.201C16.8528 13.501 16.1118 12.998 15.3878 12.498C15.2366 12.3935 15.0509 12.3516 14.8695 12.381C14.6881 12.4105 14.5251 12.509 14.4148 12.656L13.8148 13.571C13.7833 13.6202 13.7341 13.6555 13.6774 13.6696C13.6207 13.6837 13.5607 13.6756 13.5098 13.647C13.1028 13.414 12.5098 13.018 12.0838 12.592C11.6578 12.166 11.2858 11.6 11.0768 11.219C11.0509 11.1706 11.0434 11.1144 11.0557 11.0609C11.068 11.0074 11.0993 10.9602 11.1438 10.928L12.0678 10.242C12.1997 10.1273 12.2848 9.9682 12.3069 9.79486C12.329 9.62153 12.2866 9.44611 12.1878 9.302C11.7398 8.646 11.2178 7.812 10.4608 7.259C10.3631 7.1882 10.2487 7.14406 10.1287 7.13091C10.0088 7.11776 9.88752 7.13606 9.7768 7.184C8.8568 7.578 8.0608 8.588 8.0988 9.627C8.1238 10.309 8.3908 12.24 10.4128 14.263Z"
            className={iconColor}
          />
        </svg>
      </a>

      {/* Instagram */}
      <a
        href="https://www.instagram.com/dkmparamadina/"
        target="_blank"
        rel="noopener noreferrer"
        className="group"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
        >
          <path
            d="M12.6749 8.87579C10.9546 8.87579 9.5507 10.2797 9.5507 12C9.5507 13.7203 10.9546 15.1242 12.6749 15.1242C14.3952 15.1242 15.7991 13.7203 15.7991 12C15.7991 10.2797 14.3952 8.87579 12.6749 8.87579ZM22.0452 12C22.0452 10.7063 22.0569 9.42423 21.9843 8.13283C21.9116 6.63283 21.5694 5.30158 20.4726 4.2047C19.3734 3.10548 18.0444 2.76564 16.5444 2.69298C15.2507 2.62033 13.9687 2.63204 12.6773 2.63204C11.3835 2.63204 10.1015 2.62033 8.81007 2.69298C7.31007 2.76564 5.97882 3.10783 4.88195 4.2047C3.78273 5.30392 3.44288 6.63283 3.37023 8.13283C3.29757 9.42658 3.30929 10.7086 3.30929 12C3.30929 13.2914 3.29757 14.5758 3.37023 15.8672C3.44288 17.3672 3.78507 18.6985 4.88195 19.7953C5.98117 20.8945 7.31007 21.2344 8.81007 21.307C10.1038 21.3797 11.3859 21.368 12.6773 21.368C13.971 21.368 15.253 21.3797 16.5444 21.307C18.0444 21.2344 19.3757 20.8922 20.4726 19.7953C21.5718 18.6961 21.9116 17.3672 21.9843 15.8672C22.0593 14.5758 22.0452 13.2938 22.0452 12ZM12.6749 16.807C10.0148 16.807 7.86788 14.6602 7.86788 12C7.86788 9.33986 10.0148 7.19298 12.6749 7.19298C15.3351 7.19298 17.4819 9.33986 17.4819 12C17.4819 14.6602 15.3351 16.807 12.6749 16.807ZM17.6788 8.11876C17.0577 8.11876 16.5562 7.6172 16.5562 6.99611C16.5562 6.37501 17.0577 5.87345 17.6788 5.87345C18.2999 5.87345 18.8015 6.37501 18.8015 6.99611C18.8017 7.14359 18.7728 7.28966 18.7164 7.42595C18.66 7.56224 18.5774 7.68607 18.4731 7.79036C18.3688 7.89464 18.245 7.97733 18.1087 8.03368C17.9724 8.09004 17.8263 8.11895 17.6788 8.11876Z"
            fill="#0066FF"
            className={iconColor}
          />
        </svg>
      </a>
    </>
  );
}
