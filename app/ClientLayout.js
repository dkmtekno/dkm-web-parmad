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

  useEffect(() => {
    // Tunggu sampai client mount, untuk hindari hydration error
    setHasMounted(true);
  }, []);

  useEffect(() => {
    if (hasMounted) { // Loading hanya dijalankan setelah client siap
      setLoading(true);
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);

      return () => clearTimeout(timer);
    }
  }, [pathname, hasMounted]);

  if (!hasMounted) return null; // Jangan render apapun sampai client siap

  return (
    <div className="relative antialiased min-h-screen">
      {loading ? (
        <Loader />
      ) : (
        <>
          <Navbar />
          <BackgroundVector />
          {children}
          <BubbleMenu />
          <Footer />
        </>
      )}
    </div>
  );
}
