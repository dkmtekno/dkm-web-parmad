import React from "react";
import ProfileCard from "../component/ProfileCard";
import Link from "next/link";

export default function divisiOrganisasi() {
  return (
    <main className="font-sans bg-[#F0F6FF] relative z-10">
      <img
        loading="lazy"
        src="/Vector_2.png"
        alt="Garis Vector"
        className="absolute left-0 top-0 -translate-y-6 w-full -z-10"
      />
      <section className="px-4 py-12 flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-10">
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
          <Link href="/">
            <button className="mt-6 bg-[#0066FF] px-8 py-2 rounded-[12px] hover:bg-blue-700">
              Lorem Ipsum
            </button>
          </Link>
        </div>
        <img
          src="/divisi_organisasi.png"
          loading="lazy"
          width="700"
          height="700"
          className="rounded-3xl lg:w-2/5"
        />
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-[#0066FF] text-3xl font-bold text-left">
            Ketum & Waketum
          </h3>
          <p className="text-gray-500 text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div className="bg-[#0066FF] w-40 h-1 rounded-full mt-4"></div>
        </div>
        <div className="flex gap-6 flex-wrap max-w-6xl mx-auto my-6">
          <ProfileCard
            name="Muhammad Syalki"
            subtitle="Ketua Umum DKM Paramadina"
            imageUrl="/syalki.png"
          />
          <ProfileCard
            name="Nur'izzah Syakaromansyah"
            subtitle="Wakil Ketua Umum DKM Paramadina"
            imageUrl="/syaka.png"
          />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-[#0066FF] text-3xl font-bold text-left">
            Sekretaris
          </h3>
          <p className="text-gray-500 text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div className="bg-[#0066FF] w-40 h-1 rounded-full mt-4"></div>
        </div>
        <div className="flex gap-6 flex-wrap max-w-6xl mx-auto my-6">
          <ProfileCard
            name="Ahmad Maulana"
            subtitle="Sekretaris I"
            imageUrl="/alan.png"
          />
          <ProfileCard
            name="Farida Maimunah"
            subtitle="Sekretaris II"
            imageUrl="/faridah.png"
          />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-[#0066FF] text-3xl font-bold text-left">
            Bendahara
          </h3>
          <p className="text-gray-500 text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div className="bg-[#0066FF] w-40 h-1 rounded-full mt-4"></div>
        </div>
        <div className="flex gap-6 flex-wrap max-w-6xl mx-auto my-6">
          <ProfileCard
            name="Sofia Nuril Fairuzi"
            subtitle="Bendahara I"
            imageUrl="/sofia.png"
          />
          <ProfileCard
            name="Ratu Islam Al-Kautsar"
            subtitle="Bendahara II"
            imageUrl="/ratu.png"
          />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-[#0066FF] text-3xl font-bold text-left">
            Kajian & Dakwah
          </h3>
          <p className="text-gray-500 text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div className="bg-[#0066FF] w-40 h-1 rounded-full mt-4"></div>
        </div>
        <div className="flex gap-6 flex-wrap max-w-6xl mx-auto my-6">
          <ProfileCard
            name="Novita Fitri Apriliana"
            subtitle="Kepala Divisi Kajian & Dakwah"
            imageUrl="/novita.png"
          />
          <ProfileCard
            name="Adjie Putra Wijaya"
            subtitle="Anggota Kajian & Dakwah"
            imageUrl="/adjie.png"
          />
          <ProfileCard
            name="Muhammad Rayan Bramantyo"
            subtitle="Anggota Kajian & Dakwah"
            imageUrl="/bram.png"
          />
          <ProfileCard
            name="Fathi Ainurabbani"
            subtitle="Anggota Kajian & Dakwah"
            imageUrl="/fathi.png"
          />
          <ProfileCard
            name="Tubagus Arya"
            subtitle="Anggota Kajian & Dakwah"
            imageUrl="/arya.png"
          />
          <ProfileCard
            name="Hasbin Najib"
            subtitle="Anggota Kajian & Dakwah"
            imageUrl="/hasbi.png"
          />
          <ProfileCard
            name="Muhammad Raihan Ramadhan"
            subtitle="Anggota Kajian & Dakwah"
            imageUrl="/dhan.png"
          />
          <ProfileCard
            name="Muhammad Elvan Rosyadi"
            subtitle="Anggota Kajian & Dakwah"
            imageUrl="/elvan.png"
          />
          <ProfileCard
            name="Azmi Fairuz Habibi"
            subtitle="Anggota Kajian & Dakwah"
            imageUrl="/azmi.png"
          />
          <ProfileCard
            name="Hafizudin"
            subtitle="Anggota Kajian & Dakwah"
            imageUrl="/hafiz.png"
          />
          <ProfileCard
            name="Diaz Badrussalam"
            subtitle="Anggota Kajian & Dakwah"
            imageUrl="/diaz.png"
          />
          <ProfileCard
            name="Tsaqilah Azri"
            subtitle="Anggota Kajian & Dakwah"
            imageUrl="/tsaqillah.png"
          />
          <ProfileCard
            name="Fayyaza Shofa Zakiyah"
            subtitle="Anggota Kajian & Dakwah"
            imageUrl="/shofa.png"
          />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-[#0066FF] text-3xl font-bold text-left">
            Hubungan Masyarakat
          </h3>
          <p className="text-gray-500 text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div className="bg-[#0066FF] w-40 h-1 rounded-full mt-4"></div>
        </div>
        <div className="flex gap-6 flex-wrap max-w-6xl mx-auto my-6">
          <ProfileCard
            name="Aqila Irza Ghania"
            subtitle="Kepala Divisi Hubungan Masyarakat"
            imageUrl="/aqillah.png"
          />
          <ProfileCard
            name="Osama Hisbullah"
            subtitle="Anggota Humas Internal"
            imageUrl="/osama.png"
          />
          <ProfileCard
            name="Nazwa Siti Fadhilah"
            subtitle="Anggota Humas Internal"
            imageUrl="/nazwa.png"
          />
          <ProfileCard
            name="Rizki Aulia Ramadhani"
            subtitle="Anggota Humas Internal"
            imageUrl="/rizki.png"
          />
          <ProfileCard
            name="Rahmaisa Aulia"
            subtitle="Anggota Humas Internal"
            imageUrl="/rahma.png"
          />
          <ProfileCard
            name="Sheiza Istiana Ashri"
            subtitle="Anggota Humas Internal"
            imageUrl="/sheiza.png"
          />
          <ProfileCard
            name="Ahmad Haikal Wahab"
            subtitle="Anggota Humas Eksternal"
            imageUrl="/haikal.png"
          />
          <ProfileCard
            name="Muhammad Valen Akmal Fatnadi"
            subtitle="Anggota Humas Eksternal"
            imageUrl="/valen.png"
          />
          <ProfileCard
            name="Akmal Raudhi"
            subtitle="Anggota Humas Eksternal"
            imageUrl="/akmal.png"
          />
          <ProfileCard
            name="Salma Benina"
            subtitle="Anggota Humas Eksternal"
            imageUrl="/salma.png"
          />
          <ProfileCard
            name="Sabrina Shafa Salsabila"
            subtitle="Anggota Humas Eksternal"
            imageUrl="/shafa.png"
          />
          <ProfileCard
            name="Willyan Afif"
            subtitle="Anggota Humas Eksternal"
            imageUrl="/willy.png"
          />
          <ProfileCard
            name="Syahrul Naufal Effendy"
            subtitle="Anggota Humas Eksternal"
            imageUrl="/default_profile.png"
          />
          <ProfileCard
            name="Fathur Rizqie Saepudin Septrya"
            subtitle="Anggota Humas Eksternal"
            imageUrl="/default_profile.png"
          />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-[#0066FF] text-3xl font-bold text-left">
            Human Resource
          </h3>
          <p className="text-gray-500 text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div className="bg-[#0066FF] w-40 h-1 rounded-full mt-4"></div>
        </div>
        <div className="flex gap-6 flex-wrap max-w-6xl mx-auto my-6">
          <ProfileCard
            name="Destria Maharani"
            subtitle="Kepala Divisi Human Resource"
            imageUrl="/destria.png"
          />
          <ProfileCard
            name="Alifvia Mandalika"
            subtitle="Anggota Human Resource"
            imageUrl="/alifvia.png"
          />
          <ProfileCard
            name="Muhammad Afif Ardiansyah"
            subtitle="Anggota Human Resource"
            imageUrl="/ardian.png"
          />
          <ProfileCard
            name="Fadil Rizky Hapta"
            subtitle="Anggota Human Resource"
            imageUrl="/fadil.png"
          />
          <ProfileCard
            name="Aulia Puspa Negara"
            subtitle="Anggota Human Resource"
            imageUrl="/puspa.png"
          />
          <ProfileCard
            name="Suci Ramadhani"
            subtitle="Anggota Human Resource"
            imageUrl="/suci.png"
          />
          <ProfileCard
            name="Fadelia Nabila Aisyah Putri"
            subtitle="Anggota Human Resource"
            imageUrl="/fadel.png"
          />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-[#0066FF] text-3xl font-bold text-left">
            Produksi Digital
          </h3>
          <p className="text-gray-500 text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div className="bg-[#0066FF] w-40 h-1 rounded-full mt-4"></div>
        </div>
        <div className="flex gap-6 flex-wrap max-w-6xl mx-auto my-6">
          <ProfileCard
            name="Muhammad Ariel Dien"
            subtitle="Kepala Divisi Digital"
            imageUrl="/ariel.png"
          />
          <ProfileCard
            name="Muhammad Rafiq Mizan"
            subtitle="Anggota Produksi Digital"
            imageUrl="/mizan.png"
          />
          <ProfileCard
            name="Muhammad Farhan"
            subtitle="Anggota Produksi Digital"
            imageUrl="/farhan.png"
          />
          <ProfileCard
            name="Hilya Aufa Mufida"
            subtitle="Anggota Produksi Digital"
            imageUrl="/hilya.png"
          />
          <ProfileCard
            name="Gde Reval Ariefa Antariksa"
            subtitle="Anggota Produksi Digital"
            imageUrl="/reval.png"
          />
          <ProfileCard
            name="Aldi Muhammad Fadhilah"
            subtitle="Anggota Produksi Digital"
            imageUrl="/aldi.png"
          />
        </div>
      </section>

      <section className="py-12">
        <div className="max-w-6xl mx-auto">
          <h3 className="text-[#0066FF] text-3xl font-bold text-left">
            Teknologi
          </h3>
          <p className="text-gray-500 text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div className="bg-[#0066FF] w-40 h-1 rounded-full mt-4"></div>
        </div>
        <div className="flex gap-6 flex-wrap max-w-6xl mx-auto my-6">
          <ProfileCard
            name="Muhammad Ariel Dien"
            subtitle="Kepala Divisi Digital"
            imageUrl="/ariel.png"
          />
          <ProfileCard
            name="Ilham Saputra"
            subtitle="Anggota Teknologi"
            imageUrl="/ilham.png"
          />
          <ProfileCard
            name="Akmal Abdiel Dewa Mutawakkil"
            subtitle="Anggota Teknologi"
            imageUrl="/abdiel.png"
          />
          <ProfileCard
            name="Fadhil Husein"
            subtitle="Anggota Teknologi"
            imageUrl="/husein.png"
          />
          <ProfileCard
            name="Fauziah Nurulfarhi"
            subtitle="Anggota Teknologi"
            imageUrl="/uzi.png"
          />
         
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
