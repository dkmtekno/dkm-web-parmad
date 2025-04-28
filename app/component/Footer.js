import Link from "next/link";
import React from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0066FF] text-white px-6 py-12">
      <div className="grid lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
        <div>
          <img src="/logo_footer.png" width="150" height="150" />
        </div>
        <div>
          <h6 className="font-semibold mb-2">Main Menu</h6>
          <ul className="text-sm space-y-1">
            <li>
              <Link href="/">Beranda</Link>
            </li>
            <li>
              <Link href="/tentang-kami">Tentang Kami</Link>
            </li>
            <li>
              <Link href="/divisi-organisasi">Divisi Organisasi</Link>
            </li>
            <li>
              <Link href="/program">Program</Link>
            </li>
            <li>
              <Link href="/kontak-kami">Kontak Kami</Link>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-semibold mb-2">Contact Us</h6>
          <ul className="text-sm space-y-3">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-[#DAE9FF]" />
              <a href="tel:+6281285092798" className="hover:underline">
                +62 812-8509-2798
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-[#DAE9FF]" />
              <a href="mailto:dkm@paramadina.ac.id" className="hover:underline">
                dkm@paramadina.ac.id
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaInstagram className="text-[#DAE9FF]" />
              <a
                href="https://www.instagram.com/dkmparamadina/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                @dkmparamadina
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h6 className="font-semibold mb-2">Our Home</h6>
          <p className="text-sm flex items-start gap-2">
            <FaMapMarkerAlt className="text-2xl text-[#DAE9FF]" />
            <a
              href="https://maps.app.goo.gl/ybMo9N4GejMSCtFF6"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              Jl. Raya Mabes Hankam No.Kav 9, Setu, Kec. Cipayung, Kota Jakarta
              Timur, Daerah Khusus Ibukota Jakarta 13880
            </a>
          </p>
        </div>
      </div>
      <p className="text-center text-xs mt-10">
        © 2025 Naeema DKM Paramadina. All Rights Reserved
      </p>
    </footer>
  );
}
