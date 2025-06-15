"use client";

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

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [pathname]);

  return (
    <div className="antialiased">
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
