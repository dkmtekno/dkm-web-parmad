import React from "react";

export default function Program() {
  return (
    <main className="font-sans bg-[#F0F6FF] relative z-10">
      <img
        loading="lazy"
        src="/Vector_2.png"
        alt="Garis Vector"
        className="absolute left-0 top-0 -translate-y-6 w-full -z-10"
      />
      <section className="px-4 py-24 flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-10">
        <div className="lg:w-1/2">
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
            <button className="bg-[#0066FF] px-8 py-2 rounded-[12px] hover:bg-blue-700">
              Lorem Ipsum
            </button>
            <button className="text-[#0066FF] border border-[#0066FF] px-8 py-2 rounded-[12px] hover:bg-[#0066FF] hover:text-white transition">
              Lorem Ipsum
            </button>
          </div>
        </div>
        <img
          src="/hero_kajian.png"
          loading="lazy"
          width="700"
          height="700"
          className="rounded-3xl lg:w-2/5"
        />
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-[#0066FF] text-3xl font-bold text-left">
            Lorem ipsum dolor sit amet
          </h3>
          <p className="text-gray-500 text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div className="bg-[#0066FF] w-40 h-1 rounded-full mt-4"></div>
        </div>

        <div className="py-12 flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-10">
          <img
            src="/program_naeema.png"
            loading="lazy"
            width="500"
            height="500"
            className="rounded-3xl lg:w-2/5"
          />
          <div className="w-full lg:w-1/2">
            <h2 className="mt-4 text-2xl font-bold text-[#0066FF] lg:text-2xl">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit
            </h2>
            <p className="mb-6 mt-2 leading-relaxed text-gray-500">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat.
            </p>
            <button className="bg-[#0066FF] px-6 py-2 rounded-[12px] hover:bg-blue-700">
              Lihat selengkapnya
            </button>
          </div>
        </div>
      </section>

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
