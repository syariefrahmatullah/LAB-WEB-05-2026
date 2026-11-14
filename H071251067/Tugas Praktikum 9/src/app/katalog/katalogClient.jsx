
"use client";

import { useState } from "react";
import BukuCard from "@/components/BukuCard";
import { daftarKategori } from "@/data/dataBuku";
import { tambahBuku } from "@/app/actions/buku";

export default function KatalogClient({ dataBuku }) {
  const [kategoriAktif, setKategoriAktif] = useState("Semua");

  const bukuTampil =
    kategoriAktif === "Semua"
      ? dataBuku
      : dataBuku.filter((b) => b.kategori === kategoriAktif);

  return (
    <div>
      <div className="animasi-muncul">
        <p className="text-sm font-semibold uppercase tracking-widest text-senja-tua">
          Katalog
        </p>

        <h1 className="mt-1 font-serif text-4xl font-semibold tracking-tight sm:text-5xl">
          Temukan bacaanmu
        </h1>

        <p className="mt-3 max-w-xl text-tinta-lembut">
          Seluruh koleksi Pustaka Senja. Saring berdasarkan kategori dan simpan
          buku yang kamu suka.
        </p>
      </div>

      {/* FORM TAMBAH BUKU */}
      <section className="mt-8 rounded-3xl border border-tinta/10 bg-white p-6 shadow-sm">
        <h2 className="font-serif text-2xl font-semibold">
          Tambahkan Buku
        </h2>

        <p className="mt-2 text-sm text-tinta-lembut">
          Masukkan informasi buku baru ke dalam koleksi Pustaka Senja.
        </p>

        <form action={tambahBuku} className="mt-6 grid gap-4 sm:grid-cols-2">
          <div>
            <label className="mb-2 block text-sm font-medium">Judul Buku</label>
            <input
              type="text"
              name="judul"
              required
              placeholder="Masukkan judul buku"
              className="w-full rounded-xl border border-tinta/15 px-4 py-3 outline-none focus:border-senja"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Penulis</label>
            <input
              type="text"
              name="penulis"
              required
              placeholder="Nama penulis"
              className="w-full rounded-xl border border-tinta/15 px-4 py-3 outline-none focus:border-senja"
            />
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Kategori</label>
            <select
              name="kategori"
              required
              defaultValue=""
              className="w-full rounded-xl border border-tinta/15 bg-white px-4 py-3 outline-none focus:border-senja"
            >
              <option value="" disabled>
                Pilih kategori
              </option>
              {daftarKategori
                .filter((kategori) => kategori !== "Semua")
                .map((kategori) => (
                  <option key={kategori} value={kategori}>
                    {kategori}
                  </option>
                ))}
            </select>
          </div>

          <div>
            <label className="mb-2 block text-sm font-medium">Tahun Terbit</label>
            <input
              type="number"
              name="tahun"
              required
              min="1"
              step="1"
              placeholder="Contoh: 2024"
              className="w-full rounded-xl border border-tinta/15 px-4 py-3 outline-none focus:border-senja"
            />
          </div>

          <div className="sm:col-span-2">
            <label className="mb-2 block text-sm font-medium">Sinopsis</label>
            <textarea
              name="sinopsis"
              required
              rows="4"
              placeholder="Tuliskan sinopsis buku..."
              className="w-full rounded-xl border border-tinta/15 px-4 py-3 outline-none focus:border-senja"
            />
          </div>

          <label className="flex items-center gap-3 text-sm sm:col-span-2">
            <input
              type="checkbox"
              name="tersedia"
              defaultChecked
              className="h-4 w-4 accent-amber-700"
            />
            Buku tersedia untuk dipinjam
          </label>

          <button
            type="submit"
            className="rounded-xl bg-malam px-6 py-3 font-semibold text-white transition hover:bg-senja-tua sm:col-span-2"
          >
            + Tambahkan Buku
          </button>
        </form>
      </section>

      {/* FILTER KATEGORI */}
      <div className="mt-8 flex flex-wrap items-center gap-2">
        {daftarKategori.map((kategori) => {
          const aktif = kategori === kategoriAktif;

          return (
            <button
              key={kategori}
              type="button"
              onClick={() => setKategoriAktif(kategori)}
              aria-pressed={aktif}
              className={`rounded-full px-5 py-2 text-sm font-semibold transition-all ${
                aktif
                  ? "bg-malam text-white shadow-md shadow-malam/20"
                  : "border border-tinta/15 bg-white text-tinta-lembut hover:border-senja hover:text-senja-tua"
              }`}
            >
              {kategori}
            </button>
          );
        })}

        <span className="ml-auto text-sm text-tinta-lembut">
          {bukuTampil.length} buku
        </span>
      </div>

      {/* DAFTAR BUKU */}
      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {bukuTampil.map((buku) => (
          <BukuCard key={buku.id} buku={buku} />
        ))}
      </div>

      {bukuTampil.length === 0 && (
        <p className="mt-8 text-center text-tinta-lembut">
          Belum ada buku dalam kategori ini.
        </p>
      )}
    </div>
  );
}
