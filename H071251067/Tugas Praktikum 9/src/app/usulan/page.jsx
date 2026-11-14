"use client";

import { useState } from "react";

const pilihanKategori = ["Teknologi", "Fiksi", "Pengembangan Diri"];

const kelasInput =
  "mt-2 w-full rounded-2xl border border-tinta/15 bg-white px-4 py-3 text-sm text-tinta outline-none transition-all placeholder:text-tinta-lembut/60 focus:border-senja focus:ring-4 focus:ring-senja/15";

export default function Usulan() {
  const [nama, setNama] = useState("");
  const [judul, setJudul] = useState("");
  const [kategori, setKategori] = useState(pilihanKategori[0]);
  const [alasan, setAlasan] = useState("");
  const [peringatan, setPeringatan] = useState("");
  const [konfirmasi, setKonfirmasi] = useState("");
  const [daftarUsulan, setDaftarUsulan] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    if (
      nama.trim() === "" ||
      judul.trim() === "" ||
      kategori.trim() === "" ||
      alasan.trim() === ""
    ) {
      setKonfirmasi("");
      setPeringatan("Semua kolom wajib diisi sebelum usulan dikirim.");
      return;
    }

    const usulanBaru = {
      id: `${Date.now()}`,
      nama: nama.trim(),
      judul: judul.trim(),
      kategori,
      alasan: alasan.trim(),
    };

    setDaftarUsulan([usulanBaru, ...daftarUsulan]);
    setPeringatan("");
    setKonfirmasi(`Terima kasih, ${usulanBaru.nama}! Usulan berhasil dikirim.`);
    setNama("");
    setJudul("");
    setKategori(pilihanKategori[0]);
    setAlasan("");
  }

  return (
    <div className="mx-auto max-w-2xl">
      <div className="animasi-muncul">
        <p className="text-sm font-semibold uppercase tracking-widest text-senja-tua">
          Usulan Buku
        </p>
        <h1 className="mt-1 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
          Buku apa yang kamu tunggu?
        </h1>
        <p className="mt-3 text-tinta-lembut">
          Usulkan judul baru untuk dihadirkan di rak Pustaka Senja.
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        noValidate
        className="mt-8 space-y-5 rounded-3xl border border-tinta/10 bg-white p-6 shadow-sm sm:p-8"
      >
        {peringatan && (
          <div
            role="alert"
            className="rounded-2xl border border-red-200 bg-red-50 px-4 py-3 text-sm font-medium text-red-700"
          >
            ⚠ {peringatan}
          </div>
        )}
        {konfirmasi && (
          <div
            role="status"
            className="rounded-2xl border border-emerald-200 bg-emerald-50 px-4 py-3 text-sm font-medium text-emerald-700"
          >
            ✓ {konfirmasi}
          </div>
        )}

        <div>
          <label htmlFor="nama" className="text-sm font-semibold">
            Nama Pengusul
          </label>
          <input
            id="nama"
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Nama kamu"
            className={kelasInput}
          />
        </div>

        <div>
          <label htmlFor="judul" className="text-sm font-semibold">
            Judul Buku yang Diusulkan
          </label>
          <input
            id="judul"
            type="text"
            value={judul}
            onChange={(e) => setJudul(e.target.value)}
            placeholder="Contoh: Sapiens"
            className={kelasInput}
          />
        </div>

        <div>
          <label htmlFor="kategori" className="text-sm font-semibold">
            Kategori
          </label>
          <select
            id="kategori"
            value={kategori}
            onChange={(e) => setKategori(e.target.value)}
            className={kelasInput}
          >
            {pilihanKategori.map((k) => (
              <option key={k} value={k}>
                {k}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label htmlFor="alasan" className="text-sm font-semibold">
            Alasan Usulan
          </label>
          <textarea
            id="alasan"
            rows={4}
            value={alasan}
            onChange={(e) => setAlasan(e.target.value)}
            placeholder="Kenapa buku ini layak ada di Pustaka Senja?"
            className={`${kelasInput} resize-none`}
          />
        </div>

        <button
          type="submit"
          className="w-full rounded-full bg-malam px-6 py-3.5 text-sm font-semibold text-white shadow-lg shadow-malam/20 transition-all hover:-translate-y-0.5 hover:bg-malam-muda active:translate-y-0"
        >
          Kirim Usulan
        </button>
      </form>

      {daftarUsulan.length > 0 && (
        <section className="mt-12">
          <h2 className="font-serif text-2xl font-semibold tracking-tight">
            Usulan sesi ini{" "}
            <span className="text-base font-normal text-tinta-lembut">
              ({daftarUsulan.length})
            </span>
          </h2>
          <ul className="mt-5 space-y-4">
            {daftarUsulan.map((u) => (
              <li
                key={u.id}
                className="rounded-2xl border border-tinta/10 bg-white p-5 shadow-sm"
              >
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <p className="font-serif text-lg font-semibold">{u.judul}</p>
                  <span className="rounded-full bg-kertas-tua px-3 py-1 text-xs font-semibold text-tinta-lembut">
                    {u.kategori}
                  </span>
                </div>
                <p className="mt-1 text-sm text-senja-tua">
                  Diusulkan oleh {u.nama}
                </p>
                <p className="mt-3 text-sm leading-relaxed text-tinta-lembut">
                  {u.alasan}
                </p>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
