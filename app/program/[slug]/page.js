"use client";

import React, { useEffect, useState, useRef } from "react";
import { useParams } from "next/navigation";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

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

  return (
    <main className="max-w-4xl mx-auto py-20 px-6">
      <h1 className="text-3xl font-bold text-[#0066FF] mb-4">
        {program.title}
      </h1>
      <p
        className="text-gray-700 mb-6 leading-relaxed"
        dangerouslySetInnerHTML={{ __html: program.desc }}
      />
      <p className="text-gray-600 mb-2">
        <strong>Tanggal:</strong>{" "}
        {new Date(program.date).toLocaleDateString("id-ID", {
          day: "numeric",
          month: "long",
          year: "numeric",
        })}
      </p>
      <p className="text-gray-600 mb-2">
        <strong>Waktu:</strong> {program.time}
      </p>
      <p className="text-gray-600 mb-6">
        <strong>Lokasi:</strong> {program.location}
      </p>

      {program.gallery?.length > 0 && (
        <div className="w-full relative mt-10">
          {/* Tombol Navigasi di LUAR sisi kiri dan kanan */}
          <button
            ref={prevRef}
            className="absolute top-1/2 -translate-y-1/2 md:-left-24 -left-0 z-10 p-2 bg-white/70 rounded-full hover:bg-white transition"
          >
            <FaArrowCircleLeft size={32} />
          </button>
          <button
            ref={nextRef}
            className="absolute top-1/2 -translate-y-1/2 md:-right-24 -right-0 z-10 p-2 bg-white/70 rounded-full hover:bg-white transition"
          >
            <FaArrowCircleRight size={32} />
          </button>

          {/* Swiper Container */}
          <div className="relative">
            <Swiper
              spaceBetween={10}
              slidesPerView={1}
              modules={[Navigation, Pagination]}
              onInit={(swiper) => {
                if (
                  prevRef.current &&
                  nextRef.current &&
                  paginationRef.current
                ) {
                  swiper.params.navigation.prevEl = prevRef.current;
                  swiper.params.navigation.nextEl = nextRef.current;
                  swiper.params.pagination.el = paginationRef.current;
                  swiper.navigation.init();
                  swiper.navigation.update();
                  swiper.pagination.init();
                  swiper.pagination.update();
                }
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
          </div>

          {/* Dot Pagination */}
          <div ref={paginationRef} className="mt-4 flex justify-center gap-2" />

          {/* Lightbox */}
          <Lightbox
            open={open}
            close={() => setOpen(false)}
            index={index}
            slides={program.gallery.map((src) => ({ src }))}
          />
        </div>
      )}
    </main>
  );
}
