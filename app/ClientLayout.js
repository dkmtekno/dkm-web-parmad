'use client';

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Loader from "./component/Loader";
import Navbar from "./component/Navbar";
import Footer from "./component/Footer";
import BubbleMenu from "./component/BubbleMenu";
import BackgroundVector from "./component/BackgroundVector";

export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const [loading, setLoading] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  // daftar path yang tidak mau pakai navbar & footer
  const noLayoutPaths = ["/program/tambah"];

  useEffect(() => {
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (hasMounted) {
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [pathname, hasMounted]);

  if (!hasMounted) return null;

  const isNoLayoutPage = noLayoutPaths.includes(pathname);

  return (
    <div className="relative antialiased min-h-screen">
      {loading ? (
        <Loader />
      ) : (
        <>
          {!isNoLayoutPage && <Navbar />}
          {!isNoLayoutPage && <BackgroundVector />}
          {children}
          {!isNoLayoutPage && <BubbleMenu />}
          {!isNoLayoutPage && <Footer />}
        </>
      )}
    </div>
  );
}
