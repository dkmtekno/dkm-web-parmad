"use client";

import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { useParams } from "next/navigation";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import {
  FaArrowCircleLeft,
  FaArrowCircleRight,
  FaUserPlus,
} from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function ProgramDetail() {
  const { slug } = useParams(); // tidak perlu React.use() kalau pakai client component
  const [program, setProgram] = useState(null);
  const [open, setOpen] = useState(false);
  const [index, setIndex] = useState(0);

  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const paginationRef = useRef(null);

  useEffect(() => {
    fetch("/api/program")
      .then((res) => res.json())
      .then((data) => {
        const selected = data.find((item) => item.slug === slug);
        setProgram(selected);
      });
  }, [slug]);

  if (!program) {
    return (
      <main className="max-w-4xl mx-auto py-20 px-6 text-center">
        <h1 className="text-2xl font-semibold text-gray-500">Memuat data...</h1>
      </main>
    );
  }

  const handleScroll = () => {
    const section = document.getElementById("lihatselengkapnya");
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <main className="max-w-6xl mx-auto py-20 px-6">
      <section className="pb-24 lg:py-[100px] flex flex-col lg:flex-row items-center max-w-6xl mx-auto gap-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="lg:w-1/2"
        >
          <h1 className="mb-4 text-2xl lg:text-4xl font-bold !leading-snug text-[#0066FF]">
            {program?.title}
          </h1>
          <p className="font-medium text-gray-500 lg:text-sm">
            {program?.summaryDesc}
          </p>
          {slug === "bedah-buku-bukber-dkm" && (
            <div className="py-4">
              <p className="font-bold text-gray-500 lg:text-1sm">
                Supported By
              </p>
              <Image src="/morris.png" alt="morris" width={100} height={100} draggable="false" />
            </div>
          )}
        </motion.div>
        <motion.img
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          draggable="false"
          src={program?.thumbnails}
          loading="lazy"
          width="600"
          height="600"
          className="rounded-3xl lg:2/5"
        />
      </section>
      <h1 className="text-2xl font-bold text-[#0066FF] mb-4">
        Detail <span className="text-black">program</span>
      </h1>
      <p
        className="text-gray-700 mb-6 leading-relaxed text-sm"
        dangerouslySetInnerHTML={{ __html: program.desc }}
      />
      {program.gallery?.length > 0 && (
        <div className="w-full relative mt-10">
          <button
            ref={prevRef}
            className="absolute top-1/2 -translate-y-1/2 md:-left-24 -left-0 z-10 p-2 bg-white/70 cursor-pointer rounded-full hover:bg-white transition"
          >
            <FaArrowCircleLeft className="text-xl md:text-4xl" />
          </button>
          <button
            ref={nextRef}
            className="absolute top-1/2 -translate-y-1/2 md:-right-24 -right-0 z-10 p-2 bg-white/70 cursor-pointer rounded-full hover:bg-white transition"
          >
            <FaArrowCircleRight className="text-xl md:text-4xl" />
          </button>

          {/* Swiper Container */}
          <div className="relative">
            <Swiper
              spaceBetween={10}
              slidesPerView={3}
              slidesPerGroup={1}
              modules={[Navigation, Pagination]}
              onInit={(swiper) => {
                swiper.params.navigation.prevEl = prevRef.current;
                swiper.params.navigation.nextEl = nextRef.current;
                swiper.params.pagination.el = paginationRef.current;

                swiper.navigation.init();
                swiper.navigation.update();
                swiper.pagination.init();
                swiper.pagination.update();
              }}
              navigation={{
                prevEl: prevRef.current,
                nextEl: nextRef.current,
              }}
              pagination={{
                el: paginationRef.current,
                clickable: true,
              }}
              className="rounded-xl overflow-hidden"
            >
              {program.gallery.map((url, i) => (
                <SwiperSlide key={i}>
                  <img
                    src={url}
                    alt={`Gambar ${i + 1}`}
                    className="rounded-lg cursor-zoom-in w-full h-auto object-cover"
                    onClick={() => {
                      setIndex(i);
                      setOpen(true);
                    }}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* Dot Pagination Manual */}
            <div
              ref={paginationRef}
              className="mt-4 flex justify-center gap-2"
            />
          </div>

          {/* Lightbox */}
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            index={index}
            slides={program.gallery.map((src) => ({ src }))}
          />
        </div>
      )}

      <motion.section
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="bg-[#0066FF] text-[#DAE9FF] text-center py-20 lg:rounded-[37.5px] rounded-[20px] max-w-5xl mx-auto mt-[50px] lg:mt-28 px-6 relative z-20"
      >
        <h2 className="text-xl md:text-3xl font-semibold mb-4">
          Jangan sia-siakan waktu untuk berkembang{" "}
          <span className="text-[#FFAA00]">tanpa tujuan</span>.
        </h2>
        <p className="text-1xl md:text-xl font-semibold mb-4">
          Di DKM Paramadina, fokus belajar, asah skill, berkarya, dan bermanfaat
          bagi umat.
        </p>
        <div className="flex justify-center">
          <Link href={`https://wa.me/6281285092798?text=Assalamualaikum,%20Saya%ingin%mengatahui%20dari%20program%20${program?.title}.`}>
            <button className="mt-2 px-10 py-2 cursor-pointer rounded-full bg-[#DAE9FF] text-[#0066FF] text-sm font-semibold flex items-center gap-2 transition hover:brightness-110">
              <FaUserPlus size={16} />
              Gabung Program
            </button>
          </Link>
        </div>
      </motion.section>
    </main>
  );
}
