
import pool from "@/lib/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import FormatEditBuku from "./FormatEditBuku";

export default async function EditBuku({ params }) {
  const { id } = await params;

  const hasil = await pool.query(
    "SELECT * FROM buku WHERE id = $1",
    [id]
  );

  if (hasil.rows.length === 0) {
    notFound();
  }

  const buku = {
    ...hasil.rows[0],
    id: String(hasil.rows[0].id),
    tahun: Number(hasil.rows[0].tahun),
  };

  return (
    <div className="mx-auto max-w-3xl">
      <Link
        href={`/katalog/${id}`}
        className="text-sm font-semibold text-senja-tua hover:text-malam"
      >
        ← Kembali ke Detail Buku
      </Link>

      <div className="mt-8">
        <p className="text-sm font-semibold uppercase tracking-widest text-senja-tua">
          Pengelolaan Buku
        </p>

        <h1 className="mt-2 font-serif text-4xl font-semibold">
          Edit Buku
        </h1>

        <p className="mt-3 text-tinta-lembut">
          Perbarui informasi buku yang tersimpan di Pustaka Senja.
        </p>
      </div>

      <FormatEditBuku buku={buku} />
    </div>
  );
}
