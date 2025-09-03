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
import Link from "next/link";

export default function KontakKami() {
  return (
    <main className="font-sans bg-[#F0F6FF] relative z-10">
      {/* <img
        loading="lazy"
        src="/Vector_2.png"
        alt="Garis Vector"
        className="absolute left-0 top-0 -translate-y-6 w-full -z-10"
      /> */}
      <section className="px-4 py-24 lg:py-[150px] flex flex-col lg:flex-row items-center max-w-6xl mx-auto gap-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <h1 className="mb-4 text-1xl lg:text-2xl font-bold !leading-snug text-gray-700">
            Naeema DKM Paramadina
            <br />
            <span className="text-[#0066FF] lg:text-4xl text-3xl">
              Siap Mendengar dan Membantu
            </span>
          </h1>
          <p className="font-medium text-gray-500 lg:text-lg">
            Kami dari Dewan Keluarga Masjid (DKM) Paramadina siap melayani
            pertanyaan, masukan, maupun aspirasi dari civitas akademika
            Universitas Paramadina. Baik seputar kegiatan keislaman, kajian,
            donasi, hingga program sosial. Silakan hubungi kami kapan saja.
          </p>
          <div className="mt-6 flex gap-4">
            <Link href="https://wa.me/6281285092798?text=Assalamualaikum,%20Saya%20mohon%20bantuan%20dari%20DKM%20Paramadina.">
              <button className="flex items-center gap-2 cursor-pointer bg-[#0066FF] text-white px-8 py-2 rounded-[12px] hover:bg-blue-700">
                <FaWhatsapp className="text-white" />
                Hubungi Whatsapp
              </button>
            </Link>
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
        className="bg-[#0066FF] text-[#DAE9FF] text-center py-20 lg:rounded-[37.5px] rounded-[20px] max-w-5xl mx-auto my-8 lg:my-28 px-6 relative z-20"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Udah siap gaul bareng di DKM Paramadina?
        </h2>
        <Link href="https://wa.me/6281285092798?text=Assalamualaikum,%20Saya%20mohon%20bantuan%20dari%20DKM%20Paramadina.">
          <button className="mt-2 px-12 py-2 cursor-pointer rounded-full bg-[#DAE9FF] text-[#0066FF] text-sm font-semibold transition hover:brightness-110">
            Yuk Ikutan
          </button>
        </Link>
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
    </main>
  );
}
