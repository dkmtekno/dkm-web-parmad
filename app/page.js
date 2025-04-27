"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Home() {
  const divisiList = [
    { title: "Ketum & Waketum", icon: "/ketum_waketum.png" },
    { title: "Sekretaris", icon: "/sekre.png" },
    { title: "Bendahara", icon: "/bendahara.png" },
    { title: "Produksi Kreatif", icon: "/prokre.png" },
    { title: "Kajian & Dakwah", icon: "/kajian_dakwah.png" },
    { title: "Teknologi", icon: "/teknologi.png" },
    { title: "Hubungan Masyarakat", icon: "/humas.png" },
    { title: "Human Resource", icon: "/hrd.png" },
    { title: "Badan Pengawas", icon: "/bpo.png" },
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <main className="font-sans bg-[#F0F6FF]">
      {/* HERO SECTION */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center relative rounded-bl-[20px] rounded-br-[20px] lg:rounded-bl-[50px] lg:rounded-br-[50px]"
        style={{
          backgroundImage: "url('/bg_hero.png')",
        }}
      >
        {/* Overlay hitam transparan */}
        <div className="absolute inset-0 bg-black/40 z-0 rounded-bl-[20px] rounded-br-[20px] lg:rounded-bl-[50px] lg:rounded-br-[50px]" />

        {/* Ornamen kiri */}
        <img
          src="/logo_left_hero.png"
          alt="Left Ornament"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 max-w-[100px] md:max-w-[150px]"
        />

        <img
          loading="lazy"
          src="/Vector_2.png"
          alt="Garis Vector"
          className="absolute left-0 top-1/2 -translate-y-1/2 w-full"
        />

        <img
          loading="lazy"
          src="/Vector_1.png"
          alt="Garis Vector"
          className="absolute left-0 top-1/2 -translate-y-1/2 w-full"
        />

        {/* Ornamen kanan */}
        <img
          src="/logo_right_hero.png"
          alt="Right Ornament"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 max-w-[100px] md:max-w-[150px]"
        />

        {/* Konten tengah */}
        <div className="z-20 text-center text-white px-4">
          <h1 className="text-2xl md:text-4xl font-bold">
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit, sed do eiusmod tempor.
          </h1>
          <p className="text-orange-300 mt-2 font-semibold">
            #LoremIpsumDolorSitAmet
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button className="bg-[#0066FF] px-8 py-2 rounded-full hover:bg-blue-700">
              Lorem Ipsum
            </button>
            <button className="text-[#0066FF] border border-[#0066FF] px-8 py-2 rounded-full hover:bg-[#0066FF] hover:text-white transition">
              Lorem Ipsum
            </button>
          </div>
        </div>
      </section>

      {/* LOREM IPSUM SECTION */}
      <motion.section
        viewport={{ once: true }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        className="py-12 text-center px-4 z-20"
      >
        <h2 className="text-4xl font-bold text-[#0066FF] mb-4">Lorem Ipsum</h2>
        <p className="max-w-5xl mx-auto text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>
        <div className="my-5 mx-auto bg-[#0066FF] w-40 h-2 rounded-full"></div>
      </motion.section>

      {/* VIDEO SECTION */}
      <div className="mx-auto py-6 px-12 max-w-6xl relative z-10">
        <div className="z-10">
          <img src="/video.png" alt="video" className="mb-4" />
        </div>
      </div>

      {/* DIVISI SECTION */}
      <section className="px-4 py-12 relative z-10">
        <div className="absolute inset-0 -z-10">
          <img
            loading="lazy"
            src="/logo_2.png"
            alt="Ornamen Kanan"
            width="500"
            height="500"
            className="absolute right-0 bottom-0 pointer-events-none"
          />
        </div>
        <motion.h3
          viewport={{ once: true }}
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="text-left text-3xl font-semibold text-[#0066FF] max-w-6xl mx-auto my-12"
        >
          Divisi Naeema DKM Paramadina 2025/2026
        </motion.h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {divisiList.map((divisi, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md p-8 rounded-xl text-left"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <img
                src={divisi.icon}
                alt={divisi.title}
                className="mb-4"
                width="60"
                height="60"
              />
              <h1 className="font-semibold text-[#2C2F33] text-xl">
                {divisi.title}
              </h1>
              <p className="text-gray-500 text-sm mt-1">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt.
              </p>
              <p className="text-xs text-[#0066FF] mt-6">
                #NaeemaDKMParamadina
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-[#0066FF] text-3xl font-bold text-left px-6 lg:px-0">
            Testimonial
          </h3>
          <p className="text-gray-500 text-sm mt-2 px-6 lg:px-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div className="bg-[#0066FF] w-40 h-1 rounded-full mt-4 mx-6 lg:mx-0"></div>
        </div>
        <div className="space-y-10 py-10 bg-blue-50">
          {/* ANIMASI KE KIRI */}
          <div className="overflow-hidden group relative">
            <div className="flex w-[200%] animate-left-marquee group-hover:[animation-play-state:paused] gap-6">
              {[...Array(2)].map((_, idx) => (
                <div
                  key={idx}
                  className={`flex ${idx === 1 ? "pr-6" : ""} gap-6`}
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <motion.div
                      key={`atas-${idx}-${num}`}
                      // transition-transform duration-300 hover:scale-105 hover:bg-gray-100
                      className="min-w-[260px] bg-white p-6 rounded-2xl"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: num * 0.1 }}
                    >
                      <div className="flex items-center">
                        <img src="/user.png" width="40" height="40" />
                        <div className="mt-2 mb-3 ms-2 flex flex-col justify-center">
                          <h5 className="font-bold text-[#0066FF]">Hamutra</h5>
                          <p className="text-gray-400 text-xs">Lorem ipsum</p>
                        </div>
                      </div>

                      <p className="text-gray-600 text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit...
                      </p>
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* ANIMASI KE KANAN */}
          <div className="overflow-hidden group relative">
            <div className="flex w-[200%] animate-right-marquee group-hover:[animation-play-state:paused] gap-6">
              {[...Array(2)].map((_, idx) => (
                <div
                  key={idx}
                  className={`flex ${idx === 1 ? "pr-6" : ""} gap-6`}
                >
                  {[1, 2, 3, 4, 5, 6].map((num) => (
                    <motion.div
                      key={`bawah-${idx}-${num}`}
                      // transition-transform duration-300 hover:scale-105 hover:bg-gray-100
                      className="min-w-[260px] bg-white p-6 rounded-2xl"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: num * 0.1 }}
                    >
                      <div className="flex items-center">
                        <img
                          src="/user.png"
                          width="40"
                          height="40"
                          loading="lazy"
                        />
                        <div className="mt-2 mb-3 ms-2 flex flex-col justify-center">
                          <h5 className="font-bold text-[#0066FF]">Hamutra</h5>
                          <p className="text-gray-400 text-xs">Lorem ipsum</p>
                        </div>
                      </div>
                      <p className="text-gray-600 text-sm">
                        Lorem ipsum dolor sit amet, consectetur adipiscing
                        elit...
                      </p>
                    </motion.div>
                  ))}
                </div>
              ))}
            </div>
          </div>

          {/* Tambahkan style animasi */}
          <style jsx>{`
            @keyframes left-marquee {
              0% {
                transform: translateX(0%);
              }
              100% {
                transform: translateX(-50%);
              }
            }

            @keyframes right-marquee {
              0% {
                transform: translateX(-50%);
              }
              100% {
                transform: translateX(0%);
              }
            }

            .animate-left-marquee {
              animation: left-marquee 40s linear infinite;
            }

            .animate-right-marquee {
              animation: right-marquee 40s linear infinite;
            }
          `}</style>
        </div>
      </section>

      {/* CTA SECTION */}
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="px-4 py-12 flex flex-col lg:flex-row items-center max-w-6xl mx-auto gap-10 relative z-20"
      >
        <motion.img
          src="/program_naeema.png"
          loading="lazy"
          width="500"
          height="500"
          className="rounded-3xl lg:w-2/5"
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        />
        <div className="w-full lg:w-1/2">
          <img
            src="/program.png"
            width="30"
            height="30"
            className="mb-4"
            loading="lazy"
          />
          <h4 className="text-[#0066FF] text-2xl font-bold">Lorem Ipsum</h4>
          <p className="mt-2 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          <Link href="/tentang-kami">
            <button className="mt-4 bg-[#0066FF] text-white px-4 py-2 rounded-[12px] hover:bg-blue-700">
              Lihat Program DKM Paramadina
            </button>
          </Link>
        </div>
      </motion.section>

      {/* FAQ */}
      <section className="px-4 py-12 relative z-10">
        <div className="absolute inset-0 -z-10">
          <img
            loading="lazy"
            src="/Vector_3.png"
            alt="Garis Vector"
            className="absolute left-0 bottom-0 -translate-y-6 w-full -z-10"
          />
        </div>
        <h4 className="text-center text-3xl font-semibold text-[#0066FF] mb-6">
          Frequently Asked Questions
        </h4>
        <div className="space-y-2 max-w-4xl mx-auto">
          {[...Array(5)].map((_, i) => (
            <div key={i} className="bg-[#DAE9FF] rounded-[12px]">
              <div
                onClick={() => toggle(i)}
                className="flex justify-between items-center px-6 py-4 cursor-pointer"
              >
                <span className="text-[#0066FF] font-medium">
                  Lorem Ipsum Dolor Sit Amet
                </span>
                <img
                  loading="lazy"
                  src="/arrow_bottom.png"
                  width="14"
                  height="14"
                  className={`transition-transform duration-300 ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                  alt="arrow"
                />
              </div>

              {openIndex === i && (
                <div className="px-6 pb-4 text-sm text-gray-700 animate-fadein">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris nisi ut aliquip ex ea commodo consequat.
                </div>
              )}
            </div>
          ))}

          {/* Tambahkan animasi masuk */}
          <style jsx>{`
            .animate-fadein {
              animation: fadein 0.3s ease-in-out;
            }

            @keyframes fadein {
              from {
                opacity: 0;
                transform: translateY(-5px);
              }
              to {
                opacity: 1;
                transform: translateY(0);
              }
            }
          `}</style>
        </div>
      </section>

      {/* JOIN US SECTION */}
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
            <ul className="text-sm space-y-1">
              <li>dkmcrew@gmail.com</li>
              <li>@dkmparamadina</li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold mb-2">Our Home</h6>
            <p className="text-sm">
              Universitas Paramadina, Jl. Gatot Subroto No. 97, Jakarta Selatan
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
