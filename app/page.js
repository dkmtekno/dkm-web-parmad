export default function Home() {

  const divisiList = [
    { title: 'Ketum & Waketum', icon: '/ketum_waketum.png' },
    { title: 'Sekretaris', icon: '/sekre.png' },
    { title: 'Bendahara', icon: '/bendahara.png' },
    { title: 'Produksi Kreatif', icon: '/prokre.png' },
    { title: 'Kajian & Dakwah', icon: '/kajian_dakwah.png' },
    { title: 'Teknologi', icon: '/teknologi.png' },
    { title: 'Hubungan Masyarakat', icon: '/humas.png' },
    { title: 'Human Resource', icon: '/hrd.png' },
    { title: 'Badan Pengawas', icon: '/bpo.png' },
  ];

  return (
    <main className="font-sans bg-[#F0F6FF]">
      {/* HERO SECTION */}
      <section
        className="h-screen bg-cover bg-center flex items-center justify-center relative"
        style={{
          backgroundImage: "url('/bg_hero.png')",
          borderRadius: "0px 0px 50px 50px",
        }} // ganti dengan nama gambar di /public
      >
        <div
          className="absolute inset-0 bg-black/40 z-0"
          style={{ borderRadius: "0px 0px 50px 50px" }}
        />
        <div className="z-10 text-center text-white px-4">
          <h1 className="text-2xl md:text-4xl font-bold">
            Lorem ipsum dolor sit amet, consectetur <br />
            adipiscing elit, sed do eiusmod tempor.
          </h1>
          <p className="text-orange-300 mt-2 font-semibold">
            #LoremIpsumDolorSitAmet
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <button className="bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-700">
              Lorem Ipsum
            </button>
            <button className="text-blue-600 border border-blue-600 px-4 py-2 rounded-full hover:bg-blue-600 hover:text-white transition">
              Lorem Ipsum
            </button>
          </div>
        </div>
      </section>

      {/* LOREM IPSUM SECTION */}
      <section className="py-12 text-center px-4">
        <h2 className="text-2xl font-bold text-blue-600 mb-4">Lorem Ipsum</h2>
        <p className="max-w-2xl mx-auto text-gray-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua...
        </p>
      </section>

      {/* VIDEO SECTION */}
      <div className="flex justify-center py-6">
        <div className="bg-black w-[90%] md:w-[70%] h-[250px] rounded-xl flex items-center justify-center">
          <span className="text-white text-4xl">▶</span>
        </div>
      </div>

      {/* DIVISI SECTION */}
      <section className="px-4 py-12">
        <h3 className="text-center text-xl font-semibold text-blue-600 mb-8">
          Divisi Naeema DKM Paramadina 2025/2026
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {divisiList.map((divisi, index) => (
            <div
              key={index}
              className="bg-white shadow-md p-8 rounded-xl text-left"
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
              <p className="text-xs text-blue-600 mt-6">#NaeemaDKMParamadina</p>
            </div>
          ))}
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="px-4 py-12 bg-white">
        <h3 className="text-blue-600 text-xl font-bold text-center mb-6">
          Testimonial
        </h3>
        <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {[1, 2, 3].map((_, i) => (
            <div key={i} className="bg-gray-100 p-6 rounded-lg shadow">
              <div className="font-bold text-blue-600 mb-2">Hamba</div>
              <p className="text-gray-600 text-sm">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt...
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="px-4 py-12 flex flex-col md:flex-row items-center max-w-6xl mx-auto gap-10">
        <div className="w-full md:w-1/2 h-60 bg-gray-300 rounded-xl" />
        <div className="w-full md:w-1/2">
          <h4 className="text-blue-600 font-bold text-lg">Lorem Ipsum</h4>
          <p className="mt-2 text-gray-700">Lorem ipsum dolor sit amet...</p>
          <button className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">
            Lihat Program DKM Paramadina
          </button>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-12">
        <h4 className="text-center text-xl font-semibold text-blue-600 mb-6">
          Frequently Asked Questions
        </h4>
        <div className="space-y-2 max-w-4xl mx-auto">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="flex justify-between items-center bg-white px-6 py-4 shadow rounded cursor-pointer"
            >
              <span>Lorem Ipsum Dolor Sit Amet</span>
              <span className="text-gray-500">▼</span>
            </div>
          ))}
        </div>
      </section>

      {/* JOIN US SECTION */}
      <section className="bg-blue-600 text-white text-center py-12 rounded-xl max-w-6xl mx-auto my-6 px-4">
        <h5 className="text-xl font-bold">
          Udah siap gaul bareng di DKM Paramadina?
        </h5>
        <button className="mt-4 bg-white text-blue-600 px-4 py-2 rounded font-semibold">
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
