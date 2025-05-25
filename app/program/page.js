"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import React, { useState } from "react";
import { FaDownload, FaCalendar, FaMapPin, FaClock } from "react-icons/fa";
import { AiOutlineClose } from "react-icons/ai";

export default function Program() {
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
          <h1 className="mb-4 text-1xl lg:text-2xl font-bold !leading-snug text-gray-700">
            Program 2025/2026
            <br />
            <span className="text-[#0066FF] lg:text-6xl text-3xl">
              Kabinet Naeema
            </span>
          </h1>
          <p className="font-medium text-gray-500 lg:text-lg">
            Program kerja dibawah kabinet ini dirancang untuk menjawab kebutuhan
            mahasiswa dalam aspek keagamaan dan sosial secara seimbang. Tidak
            hanya menghadirkan kegiatan keislaman yang mendalam dan inklusif,
            Kabinet Naeema juga mendorong gerakan sosial yang peduli dan solutif
            terhadap lingkungan sekitar.
          </p>
          <div className="mt-6 md:mt-12 flex flex-col md:flex-row gap-4">
            <Link href="#program">
              <button className="bg-[#0066FF] text-white px-8 py-2 rounded-[12px] hover:bg-blue-700 w-full md:w-auto">
                Lihat Selengkapnya
              </button>
            </Link>
            <Link
              href="https://docs.google.com/document/d/1o8zyKVDxZqfVq7MqUxFpd97i5EXUrkPKy1NPBVJa8kc/edit?usp=sharing"
              target="_blank"
            >
              <button className="flex items-center justify-center text-[#0066FF] border border-[#0066FF] px-8 py-2 rounded-[12px] hover:bg-[#0066FF] w-full md:w-auto hover:text-white transition">
                <FaDownload className="pr-2 text-2xl" /> Unduh Program Naeema
              </button>
            </Link>
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

      <section
        className="py-12 text-center lg:text-left px-4 lg:px-0"
        id="program"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-[#0066FF] text-3xl font-bold"
          >
            Program DKM Terbaru Kami
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm mt-2 lg:w-3/5"
          >
            Kami menyediakan berbagai macam program DKM yang dapat membantu kamu
            dalam mengembangkan kemampuan dan keterampilan digital.
          </motion.p>
          <div className="bg-[#0066FF] w-40 h-1 rounded-full mt-4 mx-auto lg:mx-0"></div>
        </div>

        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="py-12 flex flex-col lg:flex-row items-center max-w-6xl mx-auto gap-10"
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            src="/program_qurban.png"
            loading="lazy"
            width="500"
            height="500"
            className="rounded-3xl lg:w-2/5"
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <h2 className="mt-4 text-2xl font-bold text-[#0066FF] lg:text-2xl">
              Qurban Idul Adha 1446 H DKM Paramadina
            </h2>
            <p className="mb-6 mt-2 leading-relaxed text-gray-500">
              Qurban Idul Adha 1446 H merupakan program tahunan DKM dalam rangka
              Hari Raya Idul Adha yang bertujuan memfasilitasi mahasiswa dan
              civitas akademika Paramadina untuk berkurban serta menyalurkannya
              kepada yang membutuhkan. Yuk, jangan sia-siakan kesempatan emas
              ini untuk mempersembahkan ibadah qurban terbaik kita hanya karena
              Allah.
            </p>
            <p className="text-gray-600 mb-4">
              Lihat selengkapnya di Instagram kami di{" "}
              <Link href="https://www.instagram.com/dkmparamadina/">
                <strong>@dkmparamadina</strong>
              </Link>
              .
            </p>
          </motion.div>
        </motion.div>
      </section>

      <section
        className="py-12 text-center lg:text-left px-4 lg:px-0"
        id="program"
      >
        <div className="max-w-6xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-[#0066FF] text-3xl font-bold"
          >
            Program (Upcoming Events)
          </motion.h3>
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-500 text-sm mt-2 lg:w-2/3"
          >
            Program DKM Paramadina yang akan segera dilaksanakan dalam waktu
            dekat. Setiap kegiatan dirancang untuk membangun semangat keislaman,
            kepedulian sosial, dan kebersamaan di lingkungan kampus Universitas
            Paramadina. Yuk, bersiap ikut berkontribusi dalam kebaikan bersama!
          </motion.p>
          <div className="bg-[#0066FF] w-40 h-1 rounded-full mt-4 mx-auto lg:mx-0"></div>
        </div>

        <motion.div
          viewport={{ once: true }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="py-12 flex flex-col lg:flex-row items-center max-w-6xl mx-auto gap-10"
        >
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            src="/program_qurban.png"
            loading="lazy"
            width="500"
            height="500"
            className="rounded-3xl lg:w-2/5"
          />
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="w-full lg:w-1/2 text-center lg:text-left"
          >
            <h2 className="mt-4 text-2xl font-bold text-[#0066FF] lg:text-2xl">
              Qurban Idul Adha 1446 H DKM Paramadina
            </h2>
            <p className="mb-6 mt-2 leading-relaxed text-gray-500">
              Qurban Idul Adha 1446 H merupakan program tahunan DKM dalam rangka
              Hari Raya Idul Adha yang bertujuan memfasilitasi mahasiswa dan
              civitas akademika Paramadina untuk berkurban serta menyalurkannya
              kepada yang membutuhkan. Yuk, jangan sia-siakan kesempatan emas
              ini untuk mempersembahkan ibadah qurban terbaik kita hanya karena
              Allah.
            </p>
            <p className="text-gray-600 mb-4">
              Lihat selengkapnya di Instagram kami di{" "}
              <Link href="https://www.instagram.com/dkmparamadina/">
                <strong>@dkmparamadina</strong>
              </Link>
              .
            </p>
          </motion.div>
        </motion.div>
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
