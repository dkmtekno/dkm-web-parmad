"use client";
import React from "react";
import ProfileCard from "../component/ProfileCard";
import Link from "next/link";
import { motion } from "framer-motion";

export default function divisiOrganisasi() {
  return (
    <main className="font-sans bg-[#F0F6FF] relative z-10">
      <motion.img
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        loading="lazy"
        src="/Vector_2.png"
        alt="Garis Vector"
        className="absolute left-0 top-0 -translate-y-6 w-full -z-10"
      />

      {/* Ornamen kiri */}
      <img
        src="/logo_left_hero.png"
        alt="Left Ornament"
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 max-w-[100px] md:max-w-[150px]"
      />
      {/* Ornamen kanan */}
      <img
        src="/logo_right_hero.png"
        alt="Right Ornament"
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 max-w-[100px] md:max-w-[150px]"
      />
      <section className="px-4 py-24 lg:py-[150px] flex flex-col lg:flex-row items-center max-w-6xl mx-auto gap-10 relative z-10">
        <motion.div
          className="lg:w-1/2"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="mb-4 text-1xl lg:text-2xl font-bold !leading-snug text-gray-700">
            2025/2026
            <br />
            <span className="text-[#0066FF] lg:text-6xl text-3xl">
              {" "}
              Kabinet Naeema
            </span>
          </h1>
          <p className="font-medium text-gray-500 lg:text-lg">
            DKM Paramadina memiliki beberapa divisi yang saling bersinergi untuk
            mewujudkan visi dan misi dakwah kampus. Setiap divisi memiliki peran
            penting dalam menunjang kegiatan keislaman yang aktif, kreatif dan
            berdampak.
          </p>
          <Link href="#divisi">
            <button className="mt-6 bg-[#0066FF] text-white px-8 py-2 rounded-[12px] hover:bg-blue-700">
              Lihat Selengkapnya
            </button>
          </Link>
        </motion.div>
        <motion.img
          src="/divisi_organisasi.png"
          loading="lazy"
          width="700"
          height="700"
          className="rounded-3xl lg:w-2/5"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        />
      </section>

      <motion.section
        className="py-12 px-6 lg:px-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        id="divisi"
      >
        <div className="max-w-6xl mx-auto lg:text-left text-center">
          <h3 className="text-[#0066FF] text-3xl font-bold">Ketum & Waketum</h3>
          <p className="text-gray-500 text-sm mt-2 lg:w-4/5">
            Pemimpin organisasi yang bertanggung jawab mengarahkan kebijakan,
            mengelola operasional dan memastikan seluruh program berjalan
            selaras dengan visi dakwah kampus.
          </p>
          <div className="bg-[#0066FF] w-40 h-1 rounded-full mt-4 mx-auto md:mx-auto lg:mx-0"></div>
        </div>
        <div className="flex lg:justify-start justify-center gap-6 flex-wrap max-w-6xl mx-auto my-6">
          <ProfileCard
            name="Muhammad Syalki"
            subtitle="Ketua Umum DKM Paramadina"
            imageUrl="/syalki.png"
            instagramUrl={"muhammadsyalki"}
            tiktokUrl={"muhammadsyalki"}
            linkedinUrl={"muhammad-syalky-3aabb3277"}
          />
          <ProfileCard
            name="Nur'izzah Syakaromansyah"
            subtitle="Wakil Ketua Umum DKM Paramadina"
            imageUrl="/syaka.png"
            instagramUrl={"syakaromansyh"}
            linkedinUrl={"nur-izzah-syakaromansyah-145392289"}
          />
        </div>
      </motion.section>

      <motion.section
        className="py-12 px-6 lg:px-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto lg:text-left text-center">
          <h3 className="text-[#0066FF] text-3xl font-bold">Sekretaris</h3>
          <p className="text-gray-500 text-sm mt-2">
            Mengelola administrasi dan membantu memastikan kelancaran
            operasional DKM.
          </p>
          <div className="bg-[#0066FF] w-40 h-1 rounded-full mt-4 mx-auto md:mx-auto lg:mx-0"></div>
        </div>
        <div className="flex lg:justify-start justify-center gap-6 flex-wrap max-w-6xl mx-auto my-6">
          <ProfileCard
            name="Ahmad Maulana"
            subtitle="Sekretaris I"
            imageUrl="/alan.png"
            instagramUrl={"lanslogy"}
          />

          <ProfileCard
            name="Farida Maimunah"
            subtitle="Sekretaris II"
            imageUrl="/faridah.png"
            instagramUrl={"faridam12_"}
            linkedinUrl={"farida-maimunah-141465252"}
          />
        </div>
      </motion.section>

      <motion.section
        className="py-12 px-6 lg:px-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto lg:text-left text-center">
          <h3 className="text-[#0066FF] text-3xl font-bold">Bendahara</h3>
          <p className="text-gray-500 text-sm mt-2">
            Mengelola keuangan DKM, termasuk pengelolaan anggaran, pengeluaran
            DKM.
          </p>
          <div className="bg-[#0066FF] w-40 h-1 rounded-full mt-4 mx-auto lg:mx-0"></div>
        </div>
        <div className="flex lg:justify-start justify-center gap-6 flex-wrap max-w-6xl mx-auto my-6">
          <ProfileCard
            name="Sofia Nuril Fairuzi"
            subtitle="Bendahara I"
            imageUrl="/sofia.png"
            instagramUrl={"sofianurilfrzi"}
            linkedinUrl={"sofia-nuril-fairuzi-60a1b4314"}
          />
          <ProfileCard
            name="Ratu Islam Al-Kautsar"
            subtitle="Bendahara II"
            imageUrl="/ratu.png"
            instagramUrl={"ratuuktsrr"}
          />
        </div>
      </motion.section>

      <motion.section
        className="py-12 px-6 lg:px-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-6xl mx-auto lg:text-left text-center">
          <h3 className="text-[#0066FF] text-3xl font-bold">Kajian & Dakwah</h3>
          <p className="text-gray-500 text-sm mt-2">
            Mengadakan dan mengelola kajian rutin, mengembangkan konsep dan
            jadwal kegiatan kajian dan dakwah sesuai kebutuhan, membentuk dan
            memfasilitasi komunitas penghafal Al-Quran dan menyediakan bimbingan
            terkait keagamaan di DKM Paramadina.
          </p>
          <div className="bg-[#0066FF] w-40 h-1 rounded-full mt-4 mx-auto md:mx-auto lg:mx-0"></div>
        </div>
        <div className="flex justify-center lg:justify-start gap-6 flex-wrap max-w-6xl mx-auto my-6">
          <ProfileCard
            name="Novita Fitri Apriliana"
            subtitle="Kepala Divisi Kajian & Dakwah"
            imageUrl="/novita.png"
            instagramUrl={"novitanfa_"}
          />
          <ProfileCard
            name="Adjie Putra Wijaya"
            subtitle="Anggota Kajian & Dakwah"
            imageUrl="/adjie.png"
            instagramUrl={"djiewy"}
          />
          <ProfileCard
            name="Muhammad Rayan Bramantyo"
            subtitle="Anggota Kajian & Dakwah"
            imageUrl="/bram.png"
            instagramUrl={"askingtheo"}
          />
          <ProfileCard
            name="Fathi Ainurabbani"
            subtitle="Anggota Kajian & Dakwah"
            imageUrl="/fathi.png"
            instagramUrl={"fathi.ainur"}
          />
          <ProfileCard
            name="Tubagus Arya"
            subtitle="Anggota Kajian & Dakwah"
            imageUrl="/arya.png"
            instagramUrl={"7.alqdry_"}
            tiktokUrl={"tubagusaryahaidar"}
          />
          <ProfileCard
            name="Hasbin Najib"
            subtitle="Anggota Kajian & Dakwah"
            imageUrl="/hasbi.png"
            instagramUrl={"hahaasbinajib"}
          />
          <ProfileCard
            name="Muhammad Raihan Ramadhan"
            subtitle="Anggota Kajian & Dakwah"
            imageUrl="/dhan.png"
            instagramUrl={"mrhan.dhan"}
          />
          <ProfileCard
            name="Muhammad Elvan Rosyadi"
            subtitle="Anggota Kajian & Dakwah"
            imageUrl="/elvan.png"
            instagramUrl={"elvan_rosyadi"}
          />
          <ProfileCard
            name="Azmi Fairuz Habibi"
            subtitle="Anggota Kajian & Dakwah"
            imageUrl="/azmi.png"
            instagramUrl={"mi_fairuzh"}
          />
          <ProfileCard
            name="Hafizudin"
            subtitle="Anggota Kajian & Dakwah"
            imageUrl="/hafiz.png"
            instagramUrl={"hafizudin.1301"}
          />
          <ProfileCard
            name="Diaz Badrussalam"
            subtitle="Anggota Kajian & Dakwah"
            imageUrl="/diaz.png"
            instagramUrl={"yas_assalam"}
          />
          <ProfileCard
            name="Tsaqilah Azri"
            subtitle="Anggota Kajian & Dakwah"
            imageUrl="/tsaqillah.png"
            instagramUrl={"tsazri23"}
          />
          <ProfileCard
            name="Fayyaza Shofa Zakiyah"
            subtitle="Anggota Kajian & Dakwah"
            imageUrl="/shofa.png"
            instagramUrl={"shopa.aa"}
          />
          <ProfileCard
            name="Aufa Zuhada"
            subtitle="Anggota Kajian & Dakwah"
            imageUrl="/default_profile.png"
            instagramUrl={"aufazh_"}
          />
        </div>
      </motion.section>

      <section className="py-12 px-6 lg:px-0 relative z-20">
        <div className="max-w-6xl mx-auto text-center lg:text-left">
          <h3 className="text-[#0066FF] text-3xl font-bold">
            Hubungan Masyarakat
          </h3>
          <p className="text-gray-500 text-sm mt-2">
            Menjalin hubungan baik dengan publik dan media, serta mempromosikan
            citra positif DKM di internal dan eksternal kampus Paramadina.
          </p>
          <div className="bg-[#0066FF] w-40 h-1 rounded-full mt-4 mx-auto md:mx-auto lg:mx-0"></div>
        </div>
        <div className="flex justify-center lg:justify-start gap-6 flex-wrap max-w-6xl mx-auto my-6">
          <ProfileCard
            name="Aqila Irza Ghania"
            subtitle="Kepala Divisi Hubungan Masyarakat"
            imageUrl="/aqillah.png"
            instagramUrl={"aqilairzag"}
            linkedinUrl={"aqila-irza-ghania-20618a271"}
          />
          <ProfileCard
            name="Osama Hisbullah"
            subtitle="Anggota Humas Internal"
            imageUrl="/osama.png"
            instagramUrl={"mr_osem_3"}
          />
          <ProfileCard
            name="Nazwa Siti Fadhilah"
            subtitle="Anggota Humas Internal"
            imageUrl="/nazwa.png"
            instagramUrl={"nazwasfadilah"}
            linkedinUrl={"nazwa-f-b86a5a238"}
          />
          <ProfileCard
            name="Rizki Aulia Ramadhani"
            subtitle="Anggota Humas Internal"
            imageUrl="/rizki.png"
            instagramUrl={"llia.zk"}
          />
          <ProfileCard
            name="Rahmaisa Aulia"
            subtitle="Anggota Humas Internal"
            imageUrl="/rahma.png"
            instagramUrl={"rrahmawl"}
          />
          <ProfileCard
            name="Sheiza Istiana Ashri"
            subtitle="Anggota Humas Internal"
            imageUrl="/sheiza.png"
            instagramUrl={"caacaicaa_"}
          />
          <ProfileCard
            name="Ahmad Haikal Wahab"
            subtitle="Anggota Humas Eksternal"
            imageUrl="/haikal.png"
            instagramUrl={"ahmdhaikal15"}
          />
          <ProfileCard
            name="Muhammad Valen Akmal Fatnadi"
            subtitle="Anggota Humas Eksternal"
            imageUrl="/valen.png"
            instagramUrl={"mvalenaf"}
          />
          <ProfileCard
            name="Akmal Raudhi"
            subtitle="Anggota Humas Eksternal"
            imageUrl="/akmal.png"
            instagramUrl={"akmalraudhi"}
            tiktokUrl={"susumilkteaa"}
          />
          <ProfileCard
            name="Salma Benina"
            subtitle="Anggota Humas Eksternal"
            imageUrl="/salma.png"
            instagramUrl={"sallmaao"}
          />
          <ProfileCard
            name="Sabrina Shafa Salsabila"
            subtitle="Anggota Humas Eksternal"
            imageUrl="/shafa.png"
            instagramUrl={"salssabrinas"}
            tiktokUrl={"saltedcamellenak"}
          />
          <ProfileCard
            name="Willyan Afif"
            subtitle="Anggota Humas Eksternal"
            imageUrl="/willy.png"
            instagramUrl={"willyanafif"}
            tiktokUrl={"willynn_"}
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
            instagramUrl={"fathrzqie"}
          />
        </div>
      </section>

      <section className="py-12 px-6 lg:px-0 relative z-10">
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
        <div className="max-w-6xl mx-auto text-center lg:text-left">
          <h3 className="text-[#0066FF] text-3xl font-bold">Human Resource</h3>
          <p className="text-gray-500 text-sm mt-2">
            Mengelola sumber daya manusia DKM termasuk pengembangan dan
            pengelolaan anggota serta mengadakan kegiatan PHBI.
          </p>
          <div className="bg-[#0066FF] w-40 h-1 rounded-full mt-4 mx-auto md:mx-auto lg:mx-0"></div>
        </div>
        <div className="flex justify-center lg:justify-start gap-6 flex-wrap max-w-6xl mx-auto my-6">
          <ProfileCard
            name="Destria Maharani"
            subtitle="Kepala Divisi Human Resource"
            imageUrl="/destria.png"
            instagramUrl={"dstr.mhrni"}
          />
          <ProfileCard
            name="Alifvia Mandalika"
            subtitle="Anggota Human Resource"
            imageUrl="/alifvia.png"
            instagramUrl={"813vy"}
          />
          <ProfileCard
            name="Muhammad Afif Ardiansyah"
            subtitle="Anggota Human Resource"
            imageUrl="/ardian.png"
            instagramUrl={"aarrdiiann_"}
          />
          <ProfileCard
            name="Fadil Rizky Hapta"
            subtitle="Anggota Human Resource"
            imageUrl="/fadil.png"
            instagramUrl={"rzhpt_"}
          />
          <ProfileCard
            name="Aulia Puspa Negara"
            subtitle="Anggota Human Resource"
            imageUrl="/puspa.png"
            instagramUrl={"puspa_595"}
          />
          <ProfileCard
            name="Suci Ramadhani"
            subtitle="Anggota Human Resource"
            imageUrl="/suci.png"
            instagramUrl={"_vbsuciwa"}
          />
          <ProfileCard
            name="Fadelia Nabila Aisyah Putri"
            subtitle="Anggota Human Resource"
            imageUrl="/fadel.png"
            instagramUrl={"usala.fiyah"}
          />
        </div>
      </section>

      <section className="py-12 px-6 lg:px-0">
        <div className="max-w-6xl mx-auto text-center lg:text-left">
          <h3 className="text-[#0066FF] text-3xl font-bold">
            Produksi Kreatif
          </h3>
          <p className="text-gray-500 text-sm mt-2">
            Mengembangkan konsep dan ide kreatif untuk DKM, termasuk desain,
            pembuatan dan editing video, serta strategi branding.
          </p>
          <div className="bg-[#0066FF] w-40 h-1 rounded-full mt-4 mx-auto md:mx-auto lg:mx-0"></div>
        </div>
        <div className="flex justify-center lg:justify-start gap-6 flex-wrap max-w-6xl mx-auto my-6">
          <ProfileCard
            name="Muhammad Ariel Dien"
            subtitle="Kepala Divisi Digital"
            imageUrl="/ariel.png"
            instagramUrl={"dienariel"}
          />
          <ProfileCard
            name="Muhammad Rafiq Mizan"
            subtitle="Anggota Produksi Kreatif"
            imageUrl="/mizan.png"
            instagramUrl={"rafiq_mizan"}
          />
          <ProfileCard
            name="Muhammad Farhan"
            subtitle="Anggota Produksi Kreatif"
            imageUrl="/farhan.png"
            instagramUrl={"mf_habsyi"}
          />
          <ProfileCard
            name="Hilya Aufa Mufida"
            subtitle="Anggota Produksi Kreatif"
            imageUrl="/hilya.png"
            instagramUrl={"hlyyyaaah"}
          />
          <ProfileCard
            name="Gde Reval Ariefa Antariksa"
            subtitle="Anggota Produksi Kreatif"
            imageUrl="/reval.png"
            instagramUrl={"gde.reval"}
          />
          <ProfileCard
            name="Aldi Muhammad Fadhilah"
            subtitle="Anggota Produksi Kreatif"
            imageUrl="/aldi.png"
            instagramUrl={"aldimfadh_"}
          />
        </div>
      </section>

      <section className="py-12 px-6 lg:px-0 relative z-10">
        <div className="absolute inset-0 -z-10">
          <img
            loading="lazy"
            src="/Vector_3.png"
            alt="Garis Vector"
            className="absolute left-0 bottom-0 -translate-y-6 w-full -z-10"
          />
        </div>
        <div className="max-w-6xl mx-auto text-center lg:text-left">
          <h3 className="text-[#0066FF] text-3xl font-bold">Teknologi</h3>
          <p className="text-gray-500 text-sm mt-2">
            Mengelola dan mengembangkan teknologi informasi dan sistem yang
            digunakan DKM, meliputi perancangan, pengembangan, dan pemeliharaan
            sistem teknologi informasi.
          </p>
          <div className="bg-[#0066FF] w-40 h-1 rounded-full mt-4 mx-auto md:mx-auto lg:mx-0"></div>
        </div>
        <div className="flex justify-center lg:justify-start gap-6 flex-wrap max-w-6xl mx-auto my-6">
          <ProfileCard
            name="Muhammad Ariel Dien"
            subtitle="Kepala Divisi Digital"
            imageUrl="/ariel.png"
            instagramUrl={"dienariel"}
          />
          <ProfileCard
            name="Ilham Saputra"
            subtitle="Anggota Teknologi"
            imageUrl="/ilham.png"
            instagramUrl={"_ilham.spt"}
          />
          <ProfileCard
            name="Akmal Abdiel Dewa Mutawakkil"
            subtitle="Anggota Teknologi"
            imageUrl="/abdiel.png"
            instagramUrl={"akmal_abdiel"}
          />
          <ProfileCard
            name="Fadhil Husein"
            subtitle="Anggota Teknologi"
            imageUrl="/husein.png"
            instagramUrl={"fadhilhusein"}
          />
          <ProfileCard
            name="Fauziah Nurulfarhi"
            subtitle="Anggota Teknologi"
            imageUrl="/uzi.png"
            instagramUrl={"fziahnrll"}
          />
        </div>
      </section>

      <section className="py-12 px-6 lg:px-0">
        <div className="max-w-6xl mx-auto text-center lg:text-left">
          <h3 className="text-[#0066FF] text-3xl font-bold">
            Badan Pengawas Organisasi DKM
          </h3>
          <p className="text-gray-500 text-sm mt-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt.
          </p>
          <div className="bg-[#0066FF] w-40 h-1 rounded-full mt-4 mx-auto md:mx-auto lg:mx-0"></div>
        </div>
        <div className="flex justify-center lg:justify-start gap-6 flex-wrap max-w-6xl mx-auto my-6">
          <ProfileCard
            name="Muhammad Alif Akbar"
            subtitle="Badan Pengawas Organisasi DKM"
            imageUrl="/alif.png"
          />
          <ProfileCard
            name="Fitri Aisyah Mahdiyah"
            subtitle="Badan Pengawas Organisasi DKM"
            imageUrl="/aisyah.png"
          />
          <ProfileCard
            name="Salsa Mukminah"
            subtitle="Badan Pengawas Organisasi DKM"
            imageUrl="/salsa.png"
          />
          <ProfileCard
            name="Hatfina Maula"
            subtitle="Badan Pengawas Organisasi DKM"
            imageUrl="/hatfina.png"
          />
        </div>
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
