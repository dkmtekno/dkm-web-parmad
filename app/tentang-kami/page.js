"use client";

import { useState } from "react";

export default function tentangKami() {
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
      <section className="py-24 min-h-screen flex items-center justify-center relative">
        {/* Ornamen kiri */}
        <img
          src="/logo_left_hero.png"
          alt="Ornamen Kiri"
          className="absolute left-0 top-1/2 -translate-y-1/2 z-10 max-w-[100px] md:max-w-[150px]"
        />

        {/* Ornamen kanan */}
        <img
          src="/logo_right_hero.png"
          alt="Ornamen Kanan"
          className="absolute right-0 top-1/2 -translate-y-1/2 z-10 max-w-[100px] md:max-w-[150px]"
        />

        {/* Konten tengah */}
        <div className="z-20 text-center text-white px-4 flex flex-col items-center">
          <h2 className="text-4xl font-bold text-[#0066FF] mb-4">
            Tentang Kami
          </h2>
          <p className="max-w-5xl text-gray-600 mb-6">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
          <img
            loading="lazy"
            src="/divisi_naeemadkm.webp"
            alt="Divisi Naeemadkm"
            className="mx-auto my-4 lg:w-4xl"
          />
        </div>
      </section>

      {/* LOREM IPSUM SECTION */}
      <section className="py-12 text-center px-4">
        <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-[#DAE9FF] via-[#0066FF] to-[#DAE9FF] bg-clip-text text-transparent">
          Naeema DKM Paramadina
        </h2>

        <p className="max-w-5xl mx-auto text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident.
        </p>
        <div className="my-5 mx-auto bg-[#0066FF] w-40 h-2 rounded-full"></div>
      </section>

      {/* KETUM & WAKETUM SECTION */}
      <section className="px-4 py-12 flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-10">
        <img
          src="/syalki.png"
          loading="lazy"
          width="500"
          height="500"
          className="rounded-3xl lg:w-2/5"
        />
        <div className="w-full md:w-1/2">
          <p className="mb-2 text-lg font-medium text-[#0066FF] lg:text-xl">
            Ketua Umum DKM Paramadina
          </p>
          <h2 className="mb-4 text-4xl font-bold text-[#0066FF] lg:text-5xl">
            Muhammad Syalky
          </h2>
          <p className="mt-2 mb-4 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
          <div className="flex gap-4 text-gray-600">
            <a target="_blank" className="text-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 45 45"
                fill="none"
              >
                <path
                  d="M22.4998 16.6419C19.2743 16.6419 16.6419 19.2743 16.6419 22.4998C16.6419 25.7254 19.2743 28.3578 22.4998 28.3578C25.7254 28.3578 28.3577 25.7254 28.3577 22.4998C28.3577 19.2743 25.7254 16.6419 22.4998 16.6419ZM40.0692 22.4998C40.0692 20.0741 40.0911 17.6703 39.9549 15.2489C39.8187 12.4364 39.1771 9.94027 37.1204 7.88363C35.0594 5.8226 32.5677 5.18539 29.7552 5.04916C27.3294 4.91293 24.9256 4.9349 22.5042 4.9349C20.0785 4.9349 17.6746 4.91293 15.2533 5.04916C12.4408 5.18539 9.94467 5.82699 7.88803 7.88363C5.82699 9.94467 5.18978 12.4364 5.05355 15.2489C4.91732 17.6746 4.9393 20.0785 4.9393 22.4998C4.9393 24.9212 4.91732 27.3294 5.05355 29.7508C5.18978 32.5633 5.83139 35.0594 7.88803 37.1161C9.94906 39.1771 12.4408 39.8143 15.2533 39.9505C17.679 40.0868 20.0828 40.0648 22.5042 40.0648C24.93 40.0648 27.3338 40.0868 29.7552 39.9505C32.5677 39.8143 35.0638 39.1727 37.1204 37.1161C39.1815 35.055 39.8187 32.5633 39.9549 29.7508C40.0955 27.3294 40.0692 24.9256 40.0692 22.4998ZM22.4998 31.513C17.512 31.513 13.4867 27.4876 13.4867 22.4998C13.4867 17.512 17.512 13.4867 22.4998 13.4867C27.4876 13.4867 31.513 17.512 31.513 22.4998C31.513 27.4876 27.4876 31.513 22.4998 31.513ZM31.8822 15.2225C30.7176 15.2225 29.7772 14.2821 29.7772 13.1175C29.7772 11.953 30.7176 11.0125 31.8822 11.0125C33.0467 11.0125 33.9871 11.953 33.9871 13.1175C33.9875 13.394 33.9333 13.6679 33.8276 13.9235C33.722 14.179 33.5669 14.4112 33.3714 14.6067C33.1758 14.8023 32.9437 14.9573 32.6881 15.063C32.4326 15.1686 32.1587 15.2228 31.8822 15.2225Z"
                  fill="#0066FF"
                />
              </svg>
            </a>
            <a target="_blank" className="text-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 45 45"
                fill="none"
              >
                <path
                  d="M31.1248 10.9125C29.8434 9.44911 29.1371 7.57012 29.1373 5.625H23.3436V28.875C23.2998 30.1335 22.7689 31.3258 21.8629 32.2003C20.9569 33.0749 19.7466 33.5633 18.4873 33.5625C15.8248 33.5625 13.6123 31.3875 13.6123 28.6875C13.6123 25.4625 16.7248 23.0437 19.9311 24.0375V18.1125C13.4623 17.25 7.7998 22.275 7.7998 28.6875C7.7998 34.9312 12.9748 39.375 18.4686 39.375C24.3561 39.375 29.1373 34.5938 29.1373 28.6875V16.8938C31.4867 18.581 34.3074 19.4862 37.1998 19.4813V13.6875C37.1998 13.6875 33.6748 13.8563 31.1248 10.9125Z"
                  fill="#0066FF"
                />
              </svg>
            </a>
            <a target="_blank" className="text-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 45 45"
                fill="none"
              >
                <path
                  d="M35.625 5.625C36.6196 5.625 37.5734 6.02009 38.2766 6.72335C38.9799 7.42661 39.375 8.38044 39.375 9.375V35.625C39.375 36.6196 38.9799 37.5734 38.2766 38.2766C37.5734 38.9799 36.6196 39.375 35.625 39.375H9.375C8.38044 39.375 7.42661 38.9799 6.72335 38.2766C6.02009 37.5734 5.625 36.6196 5.625 35.625V9.375C5.625 8.38044 6.02009 7.42661 6.72335 6.72335C7.42661 6.02009 8.38044 5.625 9.375 5.625H35.625ZM34.6875 34.6875V24.75C34.6875 23.1289 34.0435 21.5741 32.8972 20.4278C31.7509 19.2815 30.1961 18.6375 28.575 18.6375C26.9812 18.6375 25.125 19.6125 24.225 21.075V18.9938H18.9938V34.6875H24.225V25.4437C24.225 24 25.3875 22.8188 26.8313 22.8188C27.5274 22.8188 28.1951 23.0953 28.6874 23.5876C29.1797 24.0799 29.4562 24.7476 29.4562 25.4437V34.6875H34.6875ZM12.9 16.05C13.7354 16.05 14.5366 15.7181 15.1274 15.1274C15.7181 14.5366 16.05 13.7354 16.05 12.9C16.05 11.1562 14.6438 9.73125 12.9 9.73125C12.0596 9.73125 11.2536 10.0651 10.6594 10.6594C10.0651 11.2536 9.73125 12.0596 9.73125 12.9C9.73125 14.6438 11.1562 16.05 12.9 16.05ZM15.5063 34.6875V18.9938H10.3125V34.6875H15.5063Z"
                  fill="#0066FF"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>

      <section className="px-4 py-12 flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-10">
        <div className="w-full md:w-1/2 text-right">
          <p className="mb-2 text-lg font-medium text-[#0066FF] lg:text-xl">
            Wakil Ketua Umum DKM Paramadina
          </p>
          <h2 className="mb-4 text-4xl font-bold text-[#0066FF] lg:text-5xl">
            Nur'izzah Syakaromansyah
          </h2>
          <p className="mt-2 mb-4 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident.
          </p>
          <div className="flex justify-end gap-4 text-gray-600">
            <a target="_blank" className="text-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 45 45"
                fill="none"
              >
                <path
                  d="M35.625 5.625C36.6196 5.625 37.5734 6.02009 38.2766 6.72335C38.9799 7.42661 39.375 8.38044 39.375 9.375V35.625C39.375 36.6196 38.9799 37.5734 38.2766 38.2766C37.5734 38.9799 36.6196 39.375 35.625 39.375H9.375C8.38044 39.375 7.42661 38.9799 6.72335 38.2766C6.02009 37.5734 5.625 36.6196 5.625 35.625V9.375C5.625 8.38044 6.02009 7.42661 6.72335 6.72335C7.42661 6.02009 8.38044 5.625 9.375 5.625H35.625ZM34.6875 34.6875V24.75C34.6875 23.1289 34.0435 21.5741 32.8972 20.4278C31.7509 19.2815 30.1961 18.6375 28.575 18.6375C26.9812 18.6375 25.125 19.6125 24.225 21.075V18.9938H18.9938V34.6875H24.225V25.4437C24.225 24 25.3875 22.8188 26.8313 22.8188C27.5274 22.8188 28.1951 23.0953 28.6874 23.5876C29.1797 24.0799 29.4562 24.7476 29.4562 25.4437V34.6875H34.6875ZM12.9 16.05C13.7354 16.05 14.5366 15.7181 15.1274 15.1274C15.7181 14.5366 16.05 13.7354 16.05 12.9C16.05 11.1562 14.6438 9.73125 12.9 9.73125C12.0596 9.73125 11.2536 10.0651 10.6594 10.6594C10.0651 11.2536 9.73125 12.0596 9.73125 12.9C9.73125 14.6438 11.1562 16.05 12.9 16.05ZM15.5063 34.6875V18.9938H10.3125V34.6875H15.5063Z"
                  fill="#0066FF"
                />
              </svg>
            </a>
            <a target="_blank" className="text-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 45 45"
                fill="none"
              >
                <path
                  d="M31.1248 10.9125C29.8434 9.44911 29.1371 7.57012 29.1373 5.625H23.3436V28.875C23.2998 30.1335 22.7689 31.3258 21.8629 32.2003C20.9569 33.0749 19.7466 33.5633 18.4873 33.5625C15.8248 33.5625 13.6123 31.3875 13.6123 28.6875C13.6123 25.4625 16.7248 23.0437 19.9311 24.0375V18.1125C13.4623 17.25 7.7998 22.275 7.7998 28.6875C7.7998 34.9312 12.9748 39.375 18.4686 39.375C24.3561 39.375 29.1373 34.5938 29.1373 28.6875V16.8938C31.4867 18.581 34.3074 19.4862 37.1998 19.4813V13.6875C37.1998 13.6875 33.6748 13.8563 31.1248 10.9125Z"
                  fill="#0066FF"
                />
              </svg>
            </a>
            <a target="_blank" className="text-3xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                viewBox="0 0 45 45"
                fill="none"
              >
                <path
                  d="M22.4998 16.6419C19.2743 16.6419 16.6419 19.2743 16.6419 22.4998C16.6419 25.7254 19.2743 28.3578 22.4998 28.3578C25.7254 28.3578 28.3577 25.7254 28.3577 22.4998C28.3577 19.2743 25.7254 16.6419 22.4998 16.6419ZM40.0692 22.4998C40.0692 20.0741 40.0911 17.6703 39.9549 15.2489C39.8187 12.4364 39.1771 9.94027 37.1204 7.88363C35.0594 5.8226 32.5677 5.18539 29.7552 5.04916C27.3294 4.91293 24.9256 4.9349 22.5042 4.9349C20.0785 4.9349 17.6746 4.91293 15.2533 5.04916C12.4408 5.18539 9.94467 5.82699 7.88803 7.88363C5.82699 9.94467 5.18978 12.4364 5.05355 15.2489C4.91732 17.6746 4.9393 20.0785 4.9393 22.4998C4.9393 24.9212 4.91732 27.3294 5.05355 29.7508C5.18978 32.5633 5.83139 35.0594 7.88803 37.1161C9.94906 39.1771 12.4408 39.8143 15.2533 39.9505C17.679 40.0868 20.0828 40.0648 22.5042 40.0648C24.93 40.0648 27.3338 40.0868 29.7552 39.9505C32.5677 39.8143 35.0638 39.1727 37.1204 37.1161C39.1815 35.055 39.8187 32.5633 39.9549 29.7508C40.0955 27.3294 40.0692 24.9256 40.0692 22.4998ZM22.4998 31.513C17.512 31.513 13.4867 27.4876 13.4867 22.4998C13.4867 17.512 17.512 13.4867 22.4998 13.4867C27.4876 13.4867 31.513 17.512 31.513 22.4998C31.513 27.4876 27.4876 31.513 22.4998 31.513ZM31.8822 15.2225C30.7176 15.2225 29.7772 14.2821 29.7772 13.1175C29.7772 11.953 30.7176 11.0125 31.8822 11.0125C33.0467 11.0125 33.9871 11.953 33.9871 13.1175C33.9875 13.394 33.9333 13.6679 33.8276 13.9235C33.722 14.179 33.5669 14.4112 33.3714 14.6067C33.1758 14.8023 32.9437 14.9573 32.6881 15.063C32.4326 15.1686 32.1587 15.2228 31.8822 15.2225Z"
                  fill="#0066FF"
                />
              </svg>
            </a>
          </div>
        </div>
        <img
          src="/syaka.png"
          loading="lazy"
          width="500"
          height="500"
          className="rounded-3xl lg:w-2/5"
        />
      </section>

      {/* JOIN US SECTION */}
      <section className="bg-[#0066FF] text-[#DAE9FF] text-center py-20 rounded-[37.5px] max-w-5xl mx-auto my-8 px-6">
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Udah siap gaul bareng di DKM Paramadina?
        </h2>
        <button className="mt-2 px-12 py-2 rounded-full bg-[#DAE9FF] text-[#0066FF] text-sm font-semibold transition hover:brightness-110">
          Yuk Ikutan
        </button>
      </section>

      {/* FOOTER */}
      <footer className="bg-[#001f60] text-white px-6 py-12 mt-10">
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
