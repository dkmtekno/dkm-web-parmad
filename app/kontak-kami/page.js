"use client";
import { motion } from "framer-motion";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaInstagram,
  FaMapMarkerAlt,
  FaWhatsapp,
} from "react-icons/fa";
import React from "react";

export default function KontakKami() {
  return (
    <main className="font-sans bg-[#F0F6FF] relative z-10">
      {/* <img
        loading="lazy"
        src="/Vector_2.png"
        alt="Garis Vector"
        className="absolute left-0 top-0 -translate-y-6 w-full -z-10"
      /> */}
      <section className="px-4 py-24 flex flex-col lg:flex-row items-center max-w-6xl mx-auto gap-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <h1 className="mb-4 text-2xl font-bold !leading-snug text-gray-700 lg:text-4xl">
            Lorem ipsum dolor sit amet
            <br />
            <span className="text-[#0066FF]"> Lorem Ipsum</span>
          </h1>
          <p className="font-medium text-gray-500 lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <div className="mt-6 flex gap-4">
            <button className="flex items-center gap-2 bg-[#0066FF] px-8 py-2 rounded-[12px] hover:bg-blue-700">
              <FaWhatsapp className="text-white" />
              Hubungi Whatsapp
            </button>
          </div>
        </motion.div>
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          src="/kontak_kami.png"
          loading="lazy"
          width="700"
          height="700"
          className="rounded-3xl lg:w-2/5"
        />
      </section>

      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-[#0066FF] text-[#DAE9FF] text-center py-20 lg:rounded-[37.5px] rounded-[20px] max-w-5xl mx-auto my-8 px-6 relative z-20"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Udah siap gaul bareng di DKM Paramadina?
        </h2>
        <button className="mt-2 px-12 py-2 rounded-full bg-[#DAE9FF] text-[#0066FF] text-sm font-semibold transition hover:brightness-110">
          Yuk Ikutan
        </button>
      </motion.section>

      <div className="relative z-10">
        <div className="absolute inset-0 -z-10">
          <img
            loading="lazy"
            src="/logo_3.png"
            alt="Ornamen bawah"
            width="500"
            height="500"
            className="absolute left-0 bottom-0 pointer-events-none"
          />
        </div>
      </div>

      <div className="w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.6181827941696!2d106.90414257421631!3d-6.314974993674382!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3c398b48d51%3A0x2a232e58c9357e8f!2sUniversitas%20Paramadina!5e1!3m2!1sid!2sid!4v1745765573804!5m2!1sid!2sid"
          className="w-full h-[450px] border-0"
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      {/* FOOTER */}
      <footer className="bg-[#001f60] text-white px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          <div>
            <h6 className="text-xl font-bold">DKM Paramadina</h6>
          </div>
          <div>
            <h6 className="font-semibold mb-2">Main Menu</h6>
            <ul className="text-sm space-y-1">
              <li>Beranda</li>
              <li>Our Program</li>
              <li>FAQs</li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold mb-2">Contact Us</h6>
            <ul className="text-sm space-y-3">
              <li className="flex items-center gap-2">
                <FaPhoneAlt className="text-[#DAE9FF]" />
                <a href="tel:+6281234567890" className="hover:underline">
                  +62 812-3456-7890
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaEnvelope className="text-[#DAE9FF]" />
                <a href="mailto:dkmcrew@gmail.com" className="hover:underline">
                  dkmcrew@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <FaInstagram className="text-[#DAE9FF]" />
                <a
                  href="https://instagram.com/dkmparamadina"
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
              <FaMapMarkerAlt className="text-[#DAE9FF] mt-1" />
              <a
                href="https://maps.app.goo.gl/12345ExampleLink"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Universitas Paramadina, Jl. Gatot Subroto No. 97, Jakarta
                Selatan
              </a>
            </p>
          </div>
        </div>
        <p className="text-center text-xs mt-10">
          © 2025 DKM Paramadina. All Rights Reserved
        </p>
      </footer>
    </main>
  );
}
