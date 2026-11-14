"use client";

import { useState } from "react";
import Link from "next/link";

const gayaKategori = {
  Teknologi: {
    sampul: "from-sky-700 to-indigo-900",
    chip: "bg-sky-50 text-sky-700 ring-sky-200",
  },
  Fiksi: {
    sampul: "from-rose-600 to-purple-900",
    chip: "bg-rose-50 text-rose-700 ring-rose-200",
  },
  "Pengembangan Diri": {
    sampul: "from-amber-500 to-orange-800",
    chip: "bg-amber-50 text-amber-700 ring-amber-200",
  },
};

export default function BukuCard({ buku }) {
  const [favorit, setFavorit] = useState(false);
  const gaya = gayaKategori[buku.kategori] ?? gayaKategori.Teknologi;

  return (
    <article className="group flex flex-col overflow-hidden rounded-3xl border border-tinta/10 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-tinta/10">
      {/* sampul buku */}
      <div
        className={`relative flex h-44 items-end bg-gradient-to-br ${gaya.sampul} p-5`}
      >
        <span className="pointer-events-none absolute right-3 top-0 select-none font-serif text-8xl font-bold leading-none text-white/15">
          {buku.judul.charAt(0)}
        </span>
        <div className="absolute inset-y-0 left-3 w-px bg-white/25" />
        <p className="relative line-clamp-2 pl-3 font-serif text-lg font-semibold leading-snug text-white">
          {buku.judul}
        </p>

        <button
          type="button"
          onClick={() => setFavorit(!favorit)}
          aria-pressed={favorit}
          aria-label={favorit ? "Hapus dari favorit" : "Simpan ke favorit"}
          className={`absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full text-base backdrop-blur transition-all active:scale-90 ${
            favorit
              ? "bg-white text-rose-500 shadow"
              : "bg-white/20 text-white hover:bg-white/35"
          }`}
        >
          {favorit ? "♥" : "♡"}
        </button>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <div className="flex items-center justify-between gap-2">
          <span
            className={`rounded-full px-2.5 py-1 text-xs font-medium ring-1 ring-inset ${gaya.chip}`}
          >
            {buku.kategori}
          </span>
          <span className="text-xs text-tinta-lembut">{buku.tahun}</span>
        </div>

        <h3 className="mt-3 font-serif text-lg font-semibold leading-snug text-tinta">
          {buku.judul}
        </h3>
        <p className="mt-1 text-sm text-tinta-lembut">{buku.penulis}</p>

        <div className="mt-auto flex items-center justify-between gap-3 pt-5">
          <span
            className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-semibold ${
              buku.tersedia
                ? "bg-emerald-100 text-emerald-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            <span
              className={`h-1.5 w-1.5 rounded-full ${
                buku.tersedia ? "bg-emerald-500" : "bg-red-500"
              }`}
            />
            {buku.tersedia ? "Tersedia" : "Sedang Dipinjam"}
          </span>

          <Link
            href={`/katalog/${buku.id}`}
            className="text-sm font-semibold text-senja-tua transition-colors hover:text-malam"
          >
            Lihat Detail <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
          </Link>
        </div>
      </div>
    </article>
  );
}
