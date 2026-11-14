"use client";

import { useState } from "react";
import BukuCard from "@/components/BukuCard";
import dataBuku, { daftarKategori } from "@/data/dataBuku";

export default function Katalog() {
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

      <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {bukuTampil.map((buku) => (
          <BukuCard key={buku.id} buku={buku} />
        ))}
      </div>
    </div>
  );
}
