"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
function TestimonialCard({ name, prodi, testimoni }) {
  return (
    <motion.div
      className="min-w-[260px] bg-white p-6 rounded-2xl flex flex-col justify-between h-auto"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <div>
        <div className="flex items-center mb-3">
          <img src="/user.png" width="40" height="40" loading="lazy" />
          <div className="ms-2 flex flex-col justify-center">
            <h5 className="font-bold text-[#0066FF]">{name}</h5>
            <p className="text-gray-400 text-xs">{prodi}</p>
          </div>
        </div>
        <p className="text-gray-600 text-sm">{testimoni}</p>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const fullText =
    "Bergabung bersama DKM, raih pengalaman berorganisasi yang luar biasa.";
  const [displayedText, setDisplayedText] = useState("");
  const [i, setI] = useState(0);

  useEffect(() => {
    let timeout;
    if (i < fullText.length) {
      timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + fullText[i]);
        setI((prev) => prev + 1);
      }, 80);
    } else {
      // Setelah selesai ngetik, tunggu lalu reset ulang
      timeout = setTimeout(() => {
        setDisplayedText("");
        setI(0);
      }, 1500); // Delay 1.5 detik sebelum mengulang
    }

    return () => clearTimeout(timeout);
  }, [i, fullText]);

  const divisiList = [
    {
      title: "Ketum & Waketum",
      icon: "/ketum_waketum.png",
      task: "Pemimpin organisasi yang bertanggung jawab mengarahkan kebijakan, mengelola operasional dan memastikan seluruh program berjalan selaras dengan visi dakwah kampus.",
    },
    {
      title: "Sekretaris",
      icon: "/sekre.png",
      task: "Mengelola administrasi dan membantu memastikan kelancaran operasional DKM.",
    },
    {
      title: "Bendahara",
      icon: "/bendahara.png",
      task: "Mengelola keuangan DKM, termasuk pengelolaan anggaran, pengeluaran DKM.",
    },
    {
      title: "Produksi Kreatif",
      icon: "/prokre.png",
      task: "Mengembangkan konsep dan ide kreatif untuk DKM, termasuk desain, pembuatan dan editing video, serta strategi branding.",
    },
    {
      title: "Kajian & Dakwah",
      icon: "/kajian_dakwah.png",
      task: "Mengadakan dan mengelola kajian rutin, mengembangkan konsep dan jadwal kegiatan kajian dan dakwah sesuai kebutuhan, membentuk dan memfasilitasi komunitas penghafal Al-Quran dan menyediakan bimbingan terkait keagamaan di DKM Paramadina.",
    },
    {
      title: "Teknologi",
      icon: "/teknologi.png",
      task: "Mengelola dan mengembangkan teknologi informasi dan sistem yang digunakan DKM, meliputi perancangan, pengembangan, dan pemeliharaan sistem teknologi informasi.",
    },
    {
      title: "Hubungan Masyarakat",
      icon: "/humas.png",
      task: "Menjalin hubungan baik dengan publik dan media, serta mempromosikan citra positif DKM di internal dan eksternal kampus Paramadina.",
    },
    {
      title: "Human Resource",
      icon: "/hrd.png",
      task: "Mengelola sumber daya manusia DKM termasuk pengembangan dan pengelolaan anggota serta mengadakan kegiatan PHBI. ",
    },
    {
      title: "Badan Pengawas",
      icon: "/bpo.png",
      task: "Badan Pengawas adalah elemen struktural dalam DKM yang berfungsi untuk memastikan seluruh kegiatan organisasi berjalan sesuai prinsip, visi dan aturan organisasi, serta berperan sebagai pengontrol internal.",
    },
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
          <motion.h1
            className="text-2xl md:text-5xl font-bold mx-0 lg:mx-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >
            {displayedText}
            {/* Kursor selalu muncul setelah teks yang sedang diketik */}
            <motion.span
              className="inline-block"
              animate={{ opacity: [0, 1] }}
              transition={{ repeat: Infinity, duration: 0.6 }}
            >
              |
            </motion.span>
          </motion.h1>
          <p className="text-1xl md:text-2xl text-orange-300  mt-2 font-semibold">
            #NaeemaDKMParamadina
          </p>
          <div className="mt-6 md:mt-12 flex flex-col md:flex-row mx-auto items-center justify-center gap-4">
            <Link href="#lihatselengkapnya">
              <button className="bg-[#0066FF] px-8 py-2 rounded-[12px] hover:bg-blue-700 w-full md:w-auto">
                Lihat Selengkapnya
              </button>
            </Link>
            <Link href="/tentang-kami">
              <button className="text-[#0066FF] border border-[#0066FF] px-8 py-2 rounded-[12px] hover:bg-[#0066FF] hover:text-white transition w-full md:w-auto">
                Tentang Kami
              </button>
            </Link>
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
        id="lihatselengkapnya"
      >
        <h2 className="text-2xl lg:text-4xl font-bold text-[#0066FF] mb-4">
          Selamat Datang di Naeema DKM Paramadina
        </h2>
        <p className="max-w-5xl mx-auto text-gray-600">
          DKM Paramadina adalah organisasi kerohanian Islam yang menjadi wadah
          bagi mahasiswa untuk memperdalam nilai-nilai Islam, memperkuat
          solidaritas antar civitas kampus dan mewujudkan Islam sebagai rahmat
          bagi seluruh alam melalui program-program positif dan inspiratif.
          Sebagai bagian dari Universitas Paramadina yang menjunjung tinggi
          Islam inklusif, berkeadaban, dan berbasis akal sehat, DKM Paramadina
          hadir dengan pendekatan dakwah yang moderat, terbuka terhadap dialog,
          dan berpijak pada semangat keberagaman. Kami percaya bahwa Islam
          adalah agama yang memuliakan ilmu, menjunjung keadilan dan mendorong
          kemajuan umat.
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
              <p className="text-gray-500 text-sm mt-1">{divisi.task}</p>
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
          <p className="text-gray-500 text-sm mt-2 px-6 lg:px-0 lg:w-2/3">
            Pernyataan atau kesaksian dari seseorang biasanya pengguna, peserta,
            atau anggota yang menceritakan pengalaman positif mereka terhadap
            suatu organiasi.
          </p>
          <div className="bg-[#0066FF] w-40 h-1 rounded-full mt-4 mx-6 lg:mx-0"></div>
        </div>

        <div className="space-y-10 py-10 bg-blue-50">
          {/* ANIMASI KE KIRI */}
          <div className="overflow-hidden group relative">
            <div className="flex w-[200%] animate-left-marquee group-hover:[animation-play-state:paused] gap-6 items-center">
              <div className="flex gap-6">
                <TestimonialCard
                  key="t1"
                  name="Fayyaza Shofa Z."
                  prodi="Psikologi 2023"
                  testimoni="aku merasa nyaman dan lebih santai dari beberapa proker yang diadakan dan yang aku ikuti juga membantu aku lebih produktif dan sambil belajar. Terima Kasih DKM 🫶🏻"
                />
                <TestimonialCard
                  key="t2"
                  name="Karisya Alya H."
                  prodi="Psikologi 2023"
                  testimoni=" Selain menambah ilmu, kegiatan ini juga jadi ajang silaturahmi antar mahasiswa. Mungkin kedepannya bisa lebih aktif lagi dalam promosi biar makin banyak yang ikut dan terlibat langsung."
                />
                <TestimonialCard
                  key="t3"
                  name="Aqila Irza G."
                  prodi="Psikologi 2023"
                  testimoni="menurutku DKM bukan sekedar organisasi, but it's also a space for me to grow, learn and find my second family 🥹🤍✨"
                />
                <TestimonialCard
                  key="t4"
                  name="Ahmad Maulana"
                  prodi="Manajemen 2024"
                  testimoni="selain seru, bisa jadi wadah mengasah berbagai skill"
                />
                <TestimonialCard
                  key="t5"
                  name="N. Syakaromansyah"
                  prodi="Psikologi 2023"
                  testimoni="proker dkm banyak yang makin fresh, semoga orang-orang di dalamnya bisa bertumbuh lebih baik juga"
                />
                <TestimonialCard
                  key="t6"
                  name="Nadya Isma R."
                  prodi="Psikologi 2022"
                  testimoni="DKM kekeluargaannya dapet banget si, dan wadah yang cocok untuk kalian tumbuh dan mengembangkan skill yang kalian punya 🤗.. Sekali masuk DKM, dijamin kamu akan tercandu², xixixi"
                />
                <TestimonialCard
                  key="t7"
                  name="Destria Maharani"
                  prodi="Psikologi 2023"
                  testimoni="DKM bener-bener jadi tempat buat rehat dari segala kepusingan duniawi di perkuliahan😻kehangatan yang ada didalamnya bikin sadar kalo ini ternyata bukan sekedar organisasi tapi jadi keluargaa🥺"
                />
                <TestimonialCard
                  key="t8"
                  name="Novita Fitri A."
                  prodi="Psikologi 2023"
                  testimoni="Sebagai alumni pesantren, Seneng karena di DKM tuh aku merasa semua orang punya tempat, semua suara dihargai, dan setiap kontribusi, besar atau kecilnya, berarti 🥹🤍"
                />
                <TestimonialCard
                  key="t9"
                  name="Ratu Islam A."
                  prodi="Ilmu Komunikasi 2024"
                  testimoni="gapernah nyesel buat gabung di DKM, ternyata banyak hal kecil yg dilakuin tapi berdampak besar buat sekitar"
                />
                <TestimonialCard
                  key="t10"
                  name="Farida Maimunah"
                  prodi="Desain Produk 2024"
                  testimoni="Dkm ini sangat seruuu, banyak kegiatan menarik juga tapi ga keluar dari batasan agama."
                />
              </div>
            </div>
          </div>

          {/* ANIMASI KE KANAN */}
          <div className="overflow-hidden group relative">
            <div className="flex w-[200%] animate-right-marquee group-hover:[animation-play-state:paused] gap-6 items-center">
              <div className="flex gap-6">
                <TestimonialCard
                  key="t11"
                  name="Filzah Aisyah A."
                  prodi="Psikologi 2022"
                  testimoni=" konten konten dkm makin unik dan bervariatif jadi ga monoton, semoga dkm baik proker dan anggotanya menjadi lebih baik lagi "
                />
                <TestimonialCard
                  key="t12"
                  name="Muhammad Ariel D."
                  prodi="Teknik Informatika 2023"
                  testimoni="Dkm seru abiss, prokernya keren keren, setiap kegiatanya selalu dibalut dengan semangat kebersamaan dan kekeluargaan. Sukses terus DKM Paramadina!"
                />
                <TestimonialCard
                  key="t13"
                  name="M. Alif Akbar"
                  prodi="H. Internasional 2022"
                  testimoni="Sebagai mantan ketua umum DKM Paramadina, saya bangga pernah menjadi bagian dari DKM Paramadina. DKM Paramadina bukan sekedar organisasi kerohanian, tetapi sebagai rumah kedua bagi saya, yang membentuk karakter dan kepedulian saya."
                />
                <TestimonialCard
                  key="t14"
                  name="Hatfina Maula"
                  prodi="Psikologi 2022"
                  testimoni="Dkm sekarang lebih berkembang dan aktif apa lagi di media sosialnya untuk kontennya sangat bervariatif ya juga lebih aktif dan kompak. Prokernya juga lebih jauh lebih menarik apalagi mampu bekerjasama dengan beberapa brand.. Waww luar biasaa kerenn bgtt 😍. Sukses selalu ya buat dkm semakin meningkat lebih baik 🫶🏻"
                />
                <TestimonialCard
                  key="t15"
                  name="Sheiza Istiana A."
                  prodi="Teknik Informatika 2024"
                  testimoni="berada di organisasi yang nyaman seperti DKM sungguh beruntung, struktur-struktur pembagian tugas yang terstruktur, dan alur kerja yang jelas. Ketika rapat diisi dengan pembahasan yang baik, bertemu hasil dari rapat tersebut, dan tidak hanya kosong semata."
                />
                <TestimonialCard
                  key="t16"
                  name="Rahmaisha Aulia"
                  prodi="Desain Produk 2024"
                  testimoni="jadi bagian dari DKM bikin hidup lebih berwarna, karena orang² di dkm seru² dan dapat ruang untuk bertumbuh dan berkembang."
                />
                <TestimonialCard
                  key="t17"
                  name="Nazwa Siti F."
                  prodi="Ilmu Komunikasi 2024"
                  testimoni="salah satu UKM yang paling berasa bangett kekeluargaannya!! Mulai dari anggota nya yang saling support, lingkungan yang positif, and it feels like a safe space buat kita grow together. Karena disini kita bukan cuman belajar berogranisasi aja, tapi juga belajar secara spritual. Love the energy here! 🫶🏻"
                />
                <TestimonialCard
                  key="t18"
                  name="Tsaqilah Azri"
                  prodi="H. Internasional 2024"
                  testimoni="Sangat bangga bergabung dengan keluarga hangat ini, ketika dunia kampus kadang membuat kita lalai dalam banyak hal, di Dkm membuat saya semangat kembali dalam memperbaiki semuanya kembali seperti dulu, dengan teman-teman yang saling mengingatkan dan saling membantu,lop sekebonnnnnn Dkm✨"
                />
                <TestimonialCard
                  key="t19"
                  name="Ilham Saputra"
                  prodi="Teknik Informatika 2024"
                  testimoni="Teknologi yang digunakan DKM benar-benar keren dan memudahkan! Semua serba digital, terstruktur, dan bikin kerja jadi efisien. Selain itu, kegiatan di DKM tuh beda banget dan seru, kekeluargaan, tapi tetap produktif. Nggak kayak organisasi lain yang kadang kaku, di DKM semuanya terasa hidup dan bermakna!"
                />
                <TestimonialCard
                  key="t20"
                  name="Muhammad Syalky"
                  prodi="Ilmu Komunikasi 2023"
                  testimoni="lorem ipsum"
                />
              </div>
            </div>
          </div>

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
          <h4 className="text-[#0066FF] text-2xl font-bold">
            Yuk Kenal DKM Paramadina!
          </h4>
          <p className="mt-2 text-gray-700">
            Tempatnya mahasiswa keren yang pengen tumbuh bareng lewat kegiatan
            keislaman, sosial, dan pengembangan diri. Ada banyak kegiatan seru
            dan bermanfaat loh!
          </p>
          <Link href="/program">
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
          <div className="bg-[#DAE9FF] rounded-[12px]">
            <div
              onClick={() => toggle(0)}
              className="flex justify-between items-center px-6 py-4 cursor-pointer"
            >
              <span className="text-[#0066FF] font-medium">
                Bagaimana cara bergabung dengan DKM?
              </span>
              <img
                loading="lazy"
                src="/arrow_bottom.png"
                width="14"
                height="14"
                className={`transition-transform duration-300 ${
                  openIndex === 0 ? "rotate-180" : ""
                }`}
                alt="arrow"
              />
            </div>
            {openIndex === 0 && (
              <div className="px-6 pb-4 text-sm text-gray-700 animate-fadein">
                DKM membuka pendaftaran kepengurusan secara terbuka dimulai dari
                OKUP Day dan informasinya diumumkan di media sosial resmi.
              </div>
            )}
          </div>

          <div className="bg-[#DAE9FF] rounded-[12px]">
            <div
              onClick={() => toggle(1)}
              className="flex justify-between items-center px-6 py-4 cursor-pointer"
            >
              <span className="text-[#0066FF] font-medium">
                Apakah DKM hanya fokus pada kegiatan keagamaan?
              </span>
              <img
                loading="lazy"
                src="/arrow_bottom.png"
                width="14"
                height="14"
                className={`transition-transform duration-300 ${
                  openIndex === 1 ? "rotate-180" : ""
                }`}
                alt="arrow"
              />
            </div>
            {openIndex === 1 && (
              <div className="px-6 pb-4 text-sm text-gray-700 animate-fadein">
                Tidak. DKM juga aktif dalam kegiatan sosial, kemanusiaan, serta
                pembangunan karakter dan kepemimpinan Islami.
              </div>
            )}
          </div>

          <div className="bg-[#DAE9FF] rounded-[12px]">
            <div
              onClick={() => toggle(2)}
              className="flex justify-between items-center px-6 py-4 cursor-pointer"
            >
              <span className="text-[#0066FF] font-medium">
                Apakah kegiatan DKM terbuka untuk umum?
              </span>
              <img
                loading="lazy"
                src="/arrow_bottom.png"
                width="14"
                height="14"
                className={`transition-transform duration-300 ${
                  openIndex === 2 ? "rotate-180" : ""
                }`}
                alt="arrow"
              />
            </div>
            {openIndex === 2 && (
              <div className="px-6 pb-4 text-sm text-gray-700 animate-fadein">
                Ya, sebagian besar kegiatan DKM terbuka untuk umum, baik
                mahasiswa Paramadina maupun luar kampus.
              </div>
            )}
          </div>

          <div className="bg-[#DAE9FF] rounded-[12px]">
            <div
              onClick={() => toggle(3)}
              className="flex justify-between items-center px-6 py-4 cursor-pointer"
            >
              <span className="text-[#0066FF] font-medium">
                Bagaimana cara mengetahui jadwal kajian DKM?
              </span>
              <img
                loading="lazy"
                src="/arrow_bottom.png"
                width="14"
                height="14"
                className={`transition-transform duration-300 ${
                  openIndex === 3 ? "rotate-180" : ""
                }`}
                alt="arrow"
              />
            </div>
            {openIndex === 3 && (
              <div className="px-6 pb-4 text-sm text-gray-700 animate-fadein">
                Jadwal kajian DKM biasanya diumumkan melalui Instagram resmi dan
                grup WhatsApp DKM.
              </div>
            )}
          </div>

          <div className="bg-[#DAE9FF] rounded-[12px]">
            <div
              onClick={() => toggle(4)}
              className="flex justify-between items-center px-6 py-4 cursor-pointer"
            >
              <span className="text-[#0066FF] font-medium">
                Siapa yang bisa menjadi pengurus DKM?
              </span>
              <img
                loading="lazy"
                src="/arrow_bottom.png"
                width="14"
                height="14"
                className={`transition-transform duration-300 ${
                  openIndex === 4 ? "rotate-180" : ""
                }`}
                alt="arrow"
              />
            </div>
            {openIndex === 4 && (
              <div className="px-6 pb-4 text-sm text-gray-700 animate-fadein">
                Mahasiswa aktif Universitas Paramadina yang memiliki semangat
                berdakwah dan kontribusi positif bisa menjadi pengurus DKM.
              </div>
            )}
          </div>

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
        className="bg-[#0066FF] text-[#DAE9FF] text-center py-20 lg:rounded-[37.5px] rounded-[20px] max-w-5xl mx-auto my-8 lg:my-28 px-6 relative z-20"
      >
        <h2 className="text-2xl md:text-3xl font-semibold mb-4">
          Udah siap gaul bareng di DKM Paramadina?
        </h2>
        <Link href="https://wa.me/6281285092798?text=Assalamualaikum,%20Saya%20mohon%20bantuan%20dari%20DKM%20Paramadina.">
          <button className="mt-2 px-12 py-2 rounded-full bg-[#DAE9FF] text-[#0066FF] text-sm font-semibold transition hover:brightness-110">
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
