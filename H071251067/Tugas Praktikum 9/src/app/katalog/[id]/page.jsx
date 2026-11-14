
import pool from "@/lib/db";
import Link from "next/link";
import { notFound } from "next/navigation";
import TombolHapus from "@/components/TombolHapus";

export default async function DetailBuku({ params }) {
  const { id } = await params;

  const hasil = await pool.query(
    "SELECT * FROM buku WHERE id = $1",
    [id]
  );

  if (hasil.rows.length === 0) {
    notFound();
  }

  const buku = hasil.rows[0];

  return (
    <div className="mx-auto max-w-3xl">
      <Link
        href="/katalog"
        className="text-sm font-semibold text-senja-tua hover:text-malam"
      >
        ← Kembali ke Katalog
      </Link>

      <div className="mt-8 overflow-hidden rounded-3xl border bg-white shadow-sm">
        <div className="bg-gradient-to-br from-indigo-900 to-purple-900 p-12 text-white">
          <p className="text-sm uppercase tracking-widest text-white/60">
            {buku.kategori}
          </p>

          <h1 className="mt-4 font-serif text-4xl font-bold">
            {buku.judul}
          </h1>

          <p className="mt-3 text-white/70">{buku.penulis}</p>
        </div>

        <div className="space-y-5 p-8">
          <div>
            <p className="text-sm text-tinta-lembut">Tahun Terbit</p>
            <p className="font-semibold">{buku.tahun}</p>
          </div>

          <div>
            <p className="text-sm text-tinta-lembut">Status Buku</p>
            <p className="font-semibold">
              {buku.tersedia ? "Tersedia" : "Sedang Dipinjam"}
            </p>
          </div>

          <div>
            <p className="text-sm text-tinta-lembut">Sinopsis</p>
            <p className="leading-relaxed">{buku.sinopsis}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-3 border-t p-8">
          <Link
            href={`/katalog/${id}/edit`}
            className="rounded-xl bg-malam px-6 py-3 font-semibold text-white hover:bg-senja-tua"
          >
            Edit Buku
          </Link>

          <TombolHapus id={id} />
        </div>
      </div>
    </div>
  );
}
