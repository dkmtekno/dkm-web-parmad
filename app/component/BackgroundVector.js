"use client";

import { usePathname } from "next/navigation";

export default function BackgroundVector() {
  const pathname = usePathname();

  return (
    <div className="relative">
      {pathname !== "/kontak-kami" && (
        <img
          loading="lazy"
          src="/Vector_2.png"
          alt="Garis Vector"
          className="absolute left-0 top-0 -translate-y-6 w-full -z-10"
        />
      )}

      <img
        loading="lazy"
        src="/Vector_1.png"
        alt="Garis Vector"
        className="absolute left-0 top-1/2 -translate-y-1/2 w-full -z-10"
      />
    </div>
  );
}
