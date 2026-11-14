
"use client";

import Link from "next/link";
import { ubahBuku } from "@/app/actions/buku";
import { daftarKategori } from "@/data/dataBuku";

export default function FormatEditBuku({ buku }) {
  return (
    <form
      action={ubahBuku}
      className="mt-8 space-y-5 rounded-3xl border border-tinta/10 bg-white p-6 shadow-sm"
    >
      <input type="hidden" name="id" value={buku.id} />

      <div>
        <label className="mb-2 block text-sm font-medium">
          Judul Buku
        </label>
        <input
          type="text"
          name="judul"
          defaultValue={buku.judul}
          required
          className="w-full rounded-xl border border-tinta/15 px-4 py-3 outline-none focus:border-senja"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Penulis
        </label>
        <input
          type="text"
          name="penulis"
          defaultValue={buku.penulis}
          required
          className="w-full rounded-xl border border-tinta/15 px-4 py-3 outline-none focus:border-senja"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Kategori
        </label>
        <select
          name="kategori"
          defaultValue={buku.kategori}
          required
          className="w-full rounded-xl border border-tinta/15 bg-white px-4 py-3 outline-none focus:border-senja"
        >
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
        <label className="mb-2 block text-sm font-medium">
          Tahun Terbit
        </label>
        <input
          type="number"
          name="tahun"
          defaultValue={buku.tahun}
          min="1"
          step="1"
          required
          className="w-full rounded-xl border border-tinta/15 px-4 py-3 outline-none focus:border-senja"
        />
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium">
          Sinopsis
        </label>
        <textarea
          name="sinopsis"
          defaultValue={buku.sinopsis}
          rows="5"
          required
          className="w-full rounded-xl border border-tinta/15 px-4 py-3 outline-none focus:border-senja"
        />
      </div>

      <label className="flex items-center gap-3 text-sm">
        <input
          type="checkbox"
          name="tersedia"
          defaultChecked={buku.tersedia}
          className="h-4 w-4 accent-amber-700"
        />
        Buku tersedia untuk dipinjam
      </label>

      <div className="flex flex-wrap gap-3 pt-3">
        <button
          type="submit"
          className="rounded-xl bg-malam px-6 py-3 font-semibold text-white transition hover:bg-senja-tua"
        >
          Simpan Perubahan
        </button>

        <Link
          href={`/katalog/${buku.id}`}
          className="rounded-xl border border-tinta/15 px-6 py-3 font-semibold text-tinta-lembut transition hover:bg-gray-50"
        >
          Batal
        </Link>
      </div>
    </form>
  );
}
