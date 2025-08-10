"use client";

import { useState, useEffect } from "react";

export default function NewProgramForm() {
  const [loading, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [shortDesc, setShortDesc] = useState("");
  const [desc, setDesc] = useState(""); // deskripsi panjang
  const [summaryDesc, setSummaryDesc] = useState(""); // otomatis terbuat

  useEffect(() => {
    const generatedSlug = title
      .toLowerCase()
      .trim()
      .replace(/[^a-z0-9\s-]/g, "")
      .replace(/\s+/g, "-")
      .replace(/-+/g, "-");
    setSlug(generatedSlug);
  }, [title]);

  useEffect(() => {
    if (!desc.trim()) {
      setSummaryDesc("");
      return;
    }

    const timeout = setTimeout(async () => {
      try {
        const res = await fetch("/api/summary", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ desc }),
        });

        if (res.ok) {
          const data = await res.json();
          setSummaryDesc(data.summary); // langsung dari Gemini
        }
      } catch (err) {
        console.error("Gagal membuat summary:", err);
      }
    }, 500); // debounce

    return () => clearTimeout(timeout);
  }, [desc]);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const formData = new FormData(e.target);
    formData.append("summaryDesc", summaryDesc); // hasil Gemini ikut terkirim

    const res = await fetch("/api/program", {
      method: "POST",
      body: formData,
    });

    setLoading(false);
    if (res.ok) {
      alert("Program berhasil dibuat!");
      e.target.reset();
      setTitle("");
      setSlug("");
      setShortDesc("");
      setDesc("");
      setSummaryDesc("");
    } else {
      alert("Gagal mengirim data");
    }
  }

  return (
    <div className="max-w-2xl mx-auto p-6 rounded-2xl shadow-lg bg-white my-24">
      <h1 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Buat Program Baru
      </h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <Input
          label="Judul"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <Input
          label="Slug (otomatis)"
          name="slug"
          value={slug}
          onChange={(e) => setSlug(e.target.value)}
        />

        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Deskripsi Singkat (maks. 85 karakter)
          </label>
          <textarea
            name="shortDesc"
            value={shortDesc}
            maxLength={85}
            onChange={(e) => setShortDesc(e.target.value)}
            rows={2}
            className="w-full border border-gray-300 rounded-xl px-3 py-2 text-black"
            required
          />
          <p className="text-sm text-gray-500 text-right">
            {shortDesc.length}/85 karakter
          </p>
        </div>

        <Input label="Upload Thumbnails" name="thumbnails" type="file" />

        <div>
          <label className="block mb-1 font-medium text-gray-700">
            Deskripsi
          </label>
          <textarea
            name="desc"
            value={desc}
            onChange={(e) => setDesc(e.target.value)}
            rows={4}
            className="w-full border border-gray-300 rounded-xl px-3 py-2 text-black"
            required
          />
          <p className="text-sm text-gray-500 text-right">
            {desc.length} karakter
          </p>

          {/* Tampilkan summaryDesc di bawahnya */}
          {summaryDesc && (
            <div className="mt-2 p-3 bg-gray-50 rounded-xl border text-sm text-gray-700">
              <strong>Summary (300 karakter):</strong>
              <p>{summaryDesc}</p>
            </div>
          )}
        </div>

        <Input label="Tanggal" name="date" type="date" />
        <Input label="Waktu" name="time" type="time" />
        <Input label="Lokasi" name="location" />
        <Input label="Upload Gambar" name="gallery" type="file" multiple />

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-400 cursor-pointer text-white font-semibold py-2 px-4 rounded-xl"
          disabled={loading}
        >
          {loading ? "Mengirim..." : "Simpan Program"}
        </button>
      </form>
    </div>
  );
}

function Input({
  label,
  name,
  type = "text",
  textarea = false,
  multiple = false,
  value,
  onChange,
}) {
  return (
    <div>
      <label className="block mb-1 font-medium text-gray-700">{label}</label>
      {textarea ? (
        <textarea
          name={name}
          value={value}
          onChange={onChange}
          className="w-full border border-gray-300 rounded-xl px-3 py-2 text-black"
          rows={4}
          required
        />
      ) : (
        <input
          name={name}
          type={type}
          multiple={multiple}
          value={value}
          onChange={onChange}
          className="w-full border border-gray-300 rounded-xl px-3 py-2 text-black"
        />
      )}
    </div>
  );
}
