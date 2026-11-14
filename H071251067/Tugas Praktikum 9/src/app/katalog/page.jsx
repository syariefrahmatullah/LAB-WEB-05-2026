import pool from "@/lib/db";
import KatalogClient from "./katalogClient";

export default async function Katalog() {
  const hasil = await pool.query(`
    SELECT id, judul, penulis, kategori, tahun, tersedia, sinopsis
    FROM buku
    ORDER BY id ASC
  `);

  const dataBuku = hasil.rows.map((buku) => ({
    ...buku,
    id: String(buku.id),
    tahun: Number(buku.tahun),
  }));

  return <KatalogClient dataBuku={dataBuku} />;
}