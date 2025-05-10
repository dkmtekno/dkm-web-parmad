"use client";
import { motion } from "framer-motion";
import React from "react";

export default function DetailProgram() {
  const fadeRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <main className="font-sans bg-[#F0F6FF] relative z-10">
      <img
        loading="lazy"
        src="/Vector_2.png"
        alt="Garis Vector"
        className="absolute left-0 top-0 -translate-y-6 w-full -z-10"
      />
      <section className="px-4 py-24 lg:py-[100px] flex flex-col lg:flex-row items-center max-w-6xl mx-auto gap-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <h1 className="mb-4 text-2xl font-bold !leading-snug text-gray-700 lg:text-4xl">
            Peringatan Nabi
            <br />
            <span className="text-[#0066FF]"> Muhammad SAW</span>
          </h1>
          <p className="font-medium text-gray-500 lg:text-lg">
            Isra Mi’raj merupakan salah satu peristiwa agung dalam sejarah Islam
            yang menjadi tonggak penting dalam perjalanan spiritual Nabi
            Muhammad SAW. Dalam peristiwa ini, Rasulullah melakukan perjalanan
            malam dari Masjidil Haram ke Masjidil Aqsha (Isra’), lalu
            dilanjutkan naik ke langit hingga mencapai Sidratul Muntaha
            (Mi’raj), di mana beliau menerima langsung perintah shalat dari
            Allah SWT. Shalat yang diwajibkan saat itu menjadi simbol ikatan
            yang paling intim antara hamba dan Tuhannya, serta pondasi utama
            dalam kehidupan seorang muslim.
          </p>
          <div className="mt-6 flex gap-4">
            <button className="bg-[#0066FF] text-white px-8 py-2 rounded-[12px] hover:bg-blue-700">
              Lihat Selengkapnya
            </button>
            <button className="text-[#0066FF] border border-[#0066FF] px-8 py-2 rounded-[12px] hover:bg-[#0066FF] hover:text-white transition">
              Lorem Ipsum
            </button>
          </div>
        </motion.div>
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          src="/hero_kajian.png"
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
    </main>
  );
}
