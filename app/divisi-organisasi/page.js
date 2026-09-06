"use client";
import React from "react";
import ProfileCard from "../component/ProfileCard";
import Link from "next/link";
import { motion } from "framer-motion";
import FilterDivisi from "../component/FilterDivisi";

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
            Di balik
            <br />
            <span className="text-[#0066FF] lg:text-6xl text-3xl">
              {" "}
              DKM Paramadina
            </span>
          </h1>
          <p className="font-medium text-gray-500 lg:text-lg">
            DKM Paramadina memiliki beberapa divisi yang saling bersinergi untuk
            mewujudkan visi dan misi dakwah kampus. Setiap divisi memiliki peran
            penting dalam menunjang kegiatan keislaman yang aktif, kreatif dan
            berdampak.
          </p>
          <Link href="#divisi">
            <button className="mt-6 cursor-pointer bg-[#0066FF] text-white px-8 py-2 rounded-[12px] hover:bg-blue-700">
              Lihat Selengkapnya
            </button>
          </Link>
        </motion.div>
        <motion.img
          src="/divisi_organisasi.webp"
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
      <FilterDivisi />

      <motion.section
        className="md:py-[150px] py-12 px-6 lg:px-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        id="bpo"
      >
        <div className="max-w-6xl mx-auto text-center lg:text-left">
          <h3 className="text-[#0066FF] text-3xl font-bold">
            Badan Pengawas Organisasi DKM
          </h3>
          <p className="text-gray-500 text-sm mt-2">
            Mengawasi dan mengevaluasi jalannya organisasi DKM agar tetap
            transparan, akuntabel, dan sesuai dengan visi, misi, serta aturan
            yang berlaku, termasuk melakukan penilaian kinerja pengurus dan
            memberikan rekomendasi perbaikan organisasi.
          </p>
          <div className="bg-[#0066FF] w-40 h-1 rounded-full mt-4 mx-auto md:mx-auto lg:mx-0"></div>
        </div>
        <div className="flex justify-center lg:justify-start gap-6 flex-wrap max-w-6xl mx-auto my-6">
          <ProfileCard
            name="Muhammad Syalky"
            subtitle="Badan Pengawas Organisasi DKM"
            imageUrl="/syalki.webp"
            instagramUrl={"muhammadsyalki"}
            tiktokUrl={"muhammadsyalki"}
            linkedinUrl={"muhammad-syalky-3aabb3277"}
          />
          <ProfileCard
            name="Nur'izzah Syakaromansyah"
            subtitle="Badan Pengawas Organisasi DKM"
            imageUrl="/syaka.webp"
            instagramUrl={"syakaromansyh"}
            linkedinUrl={"nur-izzah-syakaromansyah-145392289"}
          />
        </div>
      </motion.section>

      <motion.section
        className="md:py-[150px] py-12 px-6 lg:px-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        id="ketum"
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
            name="Azmi Fairuz Habibi"
            subtitle="Ketua Umum DKM Paramadina"
            imageUrl="/azmi.webp"
            instagramUrl={"mi_fairuzh"}
          />
          <ProfileCard
            name="Tsaqilah Azri"
            subtitle="Wakil Ketua Umum DKM Paramadina"
            imageUrl="/qil.webp"
            instagramUrl={"tsazri23 "}
            linkedinUrl={"tsaqilah-azri-46293a343"}
          />
        </div>
      </motion.section>

      <motion.section
        className="md:py-[150px] py-12 px-6 lg:px-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        id="sekretaris"
      >
        <div className="max-w-6xl mx-auto lg:text-left text-center">
          <h3 className="text-[#0066FF] text-3xl font-bold">Secretary</h3>
          <p className="text-gray-500 text-sm mt-2">
            Mengelola administrasi dan dokumentasi organisasi secara sistematis.
            Divisi ini memastikan seluruh surat, arsip kegiatan, dan memastikan
            seluruh surat, arsip kegiatan, dan dokumen resmi tersusun secara
            sistematis dan terdokumentasi dengan baik. Sehingga koordinasi dan
            operasional organisasi berjalan lancar.
          </p>
          <div className="bg-[#0066FF] w-40 h-1 rounded-full mt-4 mx-auto md:mx-auto lg:mx-0"></div>
        </div>
        <div className="flex lg:justify-start justify-center gap-6 flex-wrap max-w-6xl mx-auto my-6">
          <ProfileCard
            name="Farida Maimunah"
            subtitle="Sekretaris I"
            imageUrl="/far.webp"
            instagramUrl={"faridam12_"}
            linkedinUrl={"farida-maimunah-141465252"}
          />

          <ProfileCard
            name="Nayla Tiara Divni"
            subtitle="Sekretaris II"
            imageUrl="/nayla.webp"
            instagramUrl={"nelaatrd_"}
          />
        </div>
      </motion.section>

      <motion.section
        className="md:py-[150px] py-12 px-6 lg:px-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        id="bendahara"
      >
        <div className="max-w-6xl mx-auto lg:text-left text-center">
          <h3 className="text-[#0066FF] text-3xl font-bold">Finance</h3>
          <p className="text-gray-500 text-sm mt-2">
            Mengelola pendanaan dan keuangan organisasi. Divisi ini mengatur
            pemasukan dan pengeluaran, menyusun laporan keuangan, serta
            memastikan setiap program terlaksana sesuai perencanaan anggaran
            dengan pencatatan yang jelas dan akuntabel.
          </p>
          <div className="bg-[#0066FF] w-40 h-1 rounded-full mt-4 mx-auto lg:mx-0"></div>
        </div>
        <div className="flex lg:justify-start justify-center gap-6 flex-wrap max-w-6xl mx-auto my-6">
          <ProfileCard
            name="Ahmad Maulana"
            subtitle="Bendahara I"
            imageUrl="/alanparmad.webp"
            instagramUrl={"ulmaul.27"}
          />
          <ProfileCard
            name="Alif Shidqi Putra Amir"
            subtitle="Bendahara II"
            imageUrl="/alif.webp"
            instagramUrl={"v4lhalladxd"}
          />
        </div>
      </motion.section>

      <motion.section
        className="md:py-[150px] py-12 px-6 lg:px-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        id="kajian-dakwah"
      >
        <div className="max-w-6xl mx-auto lg:text-left text-center">
          <h3 className="text-[#0066FF] text-3xl font-bold">
            Islamic Development & Da'wah
          </h3>
          <p className="text-gray-500 text-sm mt-2">
            Menjadikan DKM Paramadina sebagai wadah pusat pembinaan dan
            pengembangan keislaman yang terbuka bagi semua. Divisi ini
            mengembangkan program kajian dan pembinaan melalui kegiatan
            pelatihan dasar untuk memperkuat nilai spiritual dan intelektual
            mahasiswa, serta menghadirkan dakwah yang relevan dengan kehidupan
            kampus.
          </p>
          <div className="bg-[#0066FF] w-40 h-1 rounded-full mt-4 mx-auto md:mx-auto lg:mx-0"></div>
        </div>
        <div className="flex justify-center lg:justify-start gap-6 flex-wrap max-w-6xl mx-auto my-6">
          <ProfileCard
            name="Muhammad Rafiq Mizan"
            subtitle="Kepala Divisi Islamic Development & Da'wah"
            imageUrl="/mizan.webp"
            instagramUrl={"rafiq_mizan"}
          />
          <ProfileCard
            name="Hasbi Najib"
            subtitle="Anggota Islamic Development & Da'wah"
            imageUrl="/hasbi.webp"
            instagramUrl={"haasbinajib"}
          />
          <ProfileCard
            name="Diaz Badrussalam"
            subtitle="Anggota Islamic Development & Da'wah"
            imageUrl="/az.webp"
            instagramUrl={"diaz_badrussalam"}
          />
          <ProfileCard
            name="Aufa Zuhada"
            subtitle="Anggota Islamic Development & Da'wah"
            imageUrl="/aufa.webp"
            instagramUrl={"aufazh_"}
          />
          <ProfileCard
            name="Hafizudin"
            subtitle="Anggota Islamic Development & Da'wah"
            imageUrl="/fish.webp"
            instagramUrl={"7.alqdry_"}
            tiktokUrl={"hafizudin.1301"}
          />
          <ProfileCard
            name="Nurindah"
            subtitle="Anggota Islamic Development & Da'wah"
            imageUrl="/nurindah.webp"
            instagramUrl={"nusiiw14_"}
          />
          <ProfileCard
            name="Muhammad Labib Buhairil Ma’arif"
            subtitle="Anggota Islamic Development & Da'wah"
            imageUrl="/labib.webp"
          />
          <ProfileCard
            name="Maisaroh"
            subtitle="Anggota Islamic Development & Da'wah"
            imageUrl="/maisaroh.webp"
            instagramUrl={"mai_srh11"}
          />
          <ProfileCard
            name="Hilwa Sukma S"
            subtitle="Anggota Islamic Development & Da'wah"
            imageUrl="/sukma.webp"
            instagramUrl={"hilwaa.en"}
          />
          <ProfileCard
            name="Alya Tsabitah Izzati"
            subtitle="Anggota Islamic Development & Da'wah"
            imageUrl="/alya.webp"
            instagramUrl={"alyaa_ja20"}
          />
          <ProfileCard
            name="Muhammad Ilham Fajar"
            subtitle="Anggota Islamic Development & Da'wah"
            imageUrl="/fajar.webp"
            instagramUrl={"ilham.fajar02"}
          />
          <ProfileCard
            name="Cinta Nayla Maharani Adi"
            subtitle="Anggota Islamic Development & Da'wah"
            imageUrl="/cinta.webp"
            instagramUrl={"cintanayl"}
          />
          <ProfileCard
            name="Siti Hanifah"
            subtitle="Anggota Islamic Development & Da'wah"
            imageUrl="/siti.webp"
            instagramUrl={"seavloussky"}
          />
        </div>
      </motion.section>

      <motion.section
        className="md:py-[150px] py-12 px-6 lg:px-0 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        id="humas"
      >
        <div className="max-w-6xl mx-auto text-center lg:text-left">
          <h3 className="text-[#0066FF] text-3xl font-bold">
            Public Relations
          </h3>
          <p className="text-gray-500 text-sm mt-2">
            Mengelola komunikasi dan membangun hubungan dengan berbagai pihak,
            baik internal maupun eksternal. Divisi ini menjaga citra organisasi
            sekaligus memperluas jejaring dan kolaborasi strategis.
          </p>
          <div className="bg-[#0066FF] w-40 h-1 rounded-full mt-4 mx-auto md:mx-auto lg:mx-0"></div>
        </div>
        <div className="flex justify-center lg:justify-start gap-6 flex-wrap max-w-6xl mx-auto my-6">
          <ProfileCard
            name="Sheiza Istiana Ashri"
            subtitle="Kepala Divisi Public Relations"
            imageUrl="/sheiza.webp"
            instagramUrl={"caacaicaa__"}
          />
          <ProfileCard
            name="Aulia Mutia Zahra"
            subtitle="Anggota Public Relations"
            imageUrl="/aulia.webp"
            instagramUrl={"aulz_hr"}
          />
          <ProfileCard
            name="Fika Hapsah Mardani"
            subtitle="Anggota Public Relations"
            imageUrl="/fika.webp"
            instagramUrl={"fikaahapsah"}
          />
          <ProfileCard
            name="Aisyah Putri Marbun"
            subtitle="Anggota Public Relations"
            imageUrl="/putri.webp"
            instagramUrl={"aisyaaa.sha"}
          />
        </div>
      </motion.section>

      <motion.section
        className="md:py-[150px] py-12 px-6 lg:px-0 relative z-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        id="hr"
      >
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
            Berfokus pada pengembangan kualitas anggota. Melalui sistem
            pembinaan dan evaluasi yang berkelanjutan, divisi ini membangun
            budaya kerja yang disiplin, kolaboratif, dan bertanggung jawab.
          </p>
          <div className="bg-[#0066FF] w-40 h-1 rounded-full mt-4 mx-auto md:mx-auto lg:mx-0"></div>
        </div>
        <div className="flex justify-center lg:justify-start gap-6 flex-wrap max-w-6xl mx-auto my-6">
          <ProfileCard
            name="Fadil Rizky Hapta"
            subtitle="Kepala Divisi Human Resource"
            imageUrl="/fadil.webp"
            instagramUrl={"rzhpt_"}
          />
          <ProfileCard
            name="Suci Ramadhani"
            subtitle="Anggota Human Resource"
            imageUrl="/suci.webp"
            instagramUrl={"_vbsuciwa"}
          />
          <ProfileCard
            name="Aden Ala Azmi"
            subtitle="Anggota Human Resource"
            imageUrl="/aden.webp"
            instagramUrl={"aden_azmii"}
          />
          <ProfileCard
            name="Rahmat Hidayat"
            subtitle="Anggota Human Resource"
            imageUrl="/rahmat.webp"
            instagramUrl={"hidaydrahmat"}
          />
          <ProfileCard
            name="Muhammad Azhar Falah"
            subtitle="Anggota Human Resource"
            imageUrl="/azhar.webp"
            instagramUrl={"mazhrfal_"}
          />
          <ProfileCard
            name="Rael Isma Rabbani"
            subtitle="Anggota Human Resource"
            imageUrl="/rael.webp"
            instagramUrl={"kaismara_"}
          />
          <ProfileCard
            name="Octavio Egi F"
            subtitle="Anggota Human Resource"
            imageUrl="/vio.webp"
            instagramUrl={"octavioegi90"}
          />
        </div>
      </motion.section>

      <motion.section
        className="md:py-[150px] py-12 px-6 lg:px-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        id="digital-kreatif"
      >
        <div className="max-w-6xl mx-auto text-center lg:text-left">
          <h3 className="text-[#0066FF] text-3xl font-bold">Creative</h3>
          <p className="text-gray-500 text-sm mt-2">
            Menangani kebutuhan desain, publikasi visual, dan dokumentasi
            termasuk pembuatan materi grafis serta editing foto dan video
            kegiatan. Divisi ini menjaga konsistensi identitas visual DKM dan
            mengarsipkan hasil karya secara terstruktur.
          </p>
          <div className="bg-[#0066FF] w-40 h-1 rounded-full mt-4 mx-auto md:mx-auto lg:mx-0"></div>
        </div>
        <div className="flex justify-center lg:justify-start gap-6 flex-wrap max-w-6xl mx-auto my-6">
          <ProfileCard
            name="Hilya Aufa Mufida"
            subtitle="Kepala Divisi Creative"
            imageUrl="/yaya.webp"
            instagramUrl={"hlyyyaaah"}
          />
          <ProfileCard
            name="Muhammad Farhan"
            subtitle="Anggota Creative"
            imageUrl="/aan.webp"
            instagramUrl={"mf_habsyi"}
          />
          <ProfileCard
            name="Meiliani Nurul Azzahra"
            subtitle="Anggota Creative"
            imageUrl="/mei.webp"
            instagramUrl={"_meii_0"}
          />
          <ProfileCard
            name="Saskia Awulayatika"
            subtitle="Anggota Creative"
            imageUrl="/saskia.webp"
            instagramUrl={"sasqawulaya"}
          />
          <ProfileCard
            name="Raisa Lutfiya Aqeela"
            subtitle="Anggota Creative"
            imageUrl="/raisa.webp"
            instagramUrl={"raisaltfy"}
          />
          <ProfileCard
            name="Muhammad Sabila Rosyad"
            subtitle="Anggota Creative"
            imageUrl="/sabila.webp"
            instagramUrl={"mhmd.rsyaad"}
          />
          <ProfileCard
            name="Reva Suci Aulia"
            subtitle="Anggota Creative"
            imageUrl="/reva.webp"
            instagramUrl={"repaliaulia_"}
          />
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        id="digital-teknologi"
        className="md:py-[150px] py-12 px-6 lg:px-0 relative z-10"
      >
        <div className="absolute inset-0 -z-10">
          <img
            loading="lazy"
            src="/Vector_3.png"
            alt="Garis Vector"
            className="absolute left-0 bottom-0 -translate-y-6 w-full -z-10"
          />
        </div>
        <div className="max-w-6xl mx-auto text-center lg:text-left">
          <h3 className="text-[#0066FF] text-3xl font-bold">
            Digital Technology
          </h3>
          <p className="text-gray-500 text-sm mt-2">
            Mengelola dan mengembangkan website serta sistem digital DKM,
            termasuk pembaruan konten, keamanan data, dan pengembangan fitur
            untuk mendukung efektivitas operasional serta transformasi digital
            organisasi.
          </p>
          <div className="bg-[#0066FF] w-40 h-1 rounded-full mt-4 mx-auto md:mx-auto lg:mx-0"></div>
        </div>
        <div className="flex justify-center lg:justify-start gap-6 flex-wrap max-w-6xl mx-auto my-6">
          <ProfileCard
            name="Ilham Saputra"
            subtitle="Ketua Digital Technology"
            imageUrl="/ilham.webp"
            instagramUrl={"_ilham.spt"}
            linkedinUrl={"ilham-saputra-b39b5b1b8"}
          />
          <ProfileCard
            name="Haical Sheva Juansyah"
            subtitle="Anggota Digital Technology"
            imageUrl="/haical.webp"
            instagramUrl={"__juansyah__"}
          />
          <ProfileCard
            name="Muhammad Jawsyan"
            subtitle="Anggota Digital Technology"
            imageUrl="/jawsyan.webp"
            instagramUrl={"j2k14a"}
          />
          <ProfileCard
            name="Muhammad Raihan Ramadhan"
            subtitle="Anggota Digital Technology"
            imageUrl="../default_profile.png"
            instagramUrl={"raihan.adhan"}
          />
        </div>
      </motion.section>

      <motion.section
        className="md:py-[150px] py-12 px-6 lg:px-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        id="sosmed"
      >
        <div className="max-w-6xl mx-auto text-center lg:text-left">
          <h3 className="text-[#0066FF] text-3xl font-bold">
            Social Media Development
          </h3>
          <p className="text-gray-500 text-sm mt-2">
            Mengelola strategi komunikasi digital dan produksi konten media
            sosial. Divisi ini memastikan pesan dakwah tersampaikan secara
            konsisten dan relevan di ruang digital.
          </p>
          <div className="bg-[#0066FF] w-40 h-1 rounded-full mt-4 mx-auto md:mx-auto lg:mx-0"></div>
        </div>
        <div className="flex justify-center lg:justify-start gap-6 flex-wrap max-w-6xl mx-auto my-6">
          <ProfileCard
            name="Akmal Abdiel Dewa Mutawakkil"
            subtitle="Ketua Divisi Social Media Development"
            imageUrl="/akmal.webp"
            instagramUrl={"Akmal_Abdiel"}
          />
          <ProfileCard
            name="Muhammad Faiq Willyan Afif"
            subtitle="Anggota Social Media Development"
            imageUrl="/willy.webp"
            instagramUrl={"willyanafif"}
          />
          <ProfileCard
            name="Aldi Muhammad Fadhilah"
            subtitle="Anggota Social Media Development"
            imageUrl="/aldi.webp"
            instagramUrl={"aldimfadh_"}
          />
          <ProfileCard
            name="Muhammad Nabil Syauqie"
            subtitle="Anggota Social Media Development"
            imageUrl="/nabil.webp"
            instagramUrl={"nabile.syauqie"}
          />
          <ProfileCard
            name="Muhammad Rizky Maulana Rabbani"
            subtitle="Anggota Social Media Development"
            imageUrl="/rizky.webp"
            instagramUrl={"skibanie"}
          />
          <ProfileCard
            name="Khalid Jazuli Elghifari"
            subtitle="Anggota Social Media Development"
            imageUrl="/khalid.webp"
            instagramUrl={"jzuly_"}
          />
          <ProfileCard
            name="Syabna Nuri Fatikasari"
            subtitle="Anggota Social Media Development"
            imageUrl="/nuri.webp"
            instagramUrl={"nasybnz_"}
          />
        </div>
      </motion.section>

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
        <Link href="https://wa.me/6285888179140?text=Assalamualaikum,%20Saya%20mohon%20bantuan%20dari%20DKM%20Paramadina.">
          <button className="mt-2 px-12 cursor-pointer py-2 rounded-full bg-[#DAE9FF] text-[#0066FF] text-sm font-semibold transition hover:brightness-110">
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
    </main>
  );
}
