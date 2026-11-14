
import Link from "next/link";
import Hero from "@/components/Hero";
import pool from "@/lib/db";

export default async function Beranda() {
  const hasil = await pool.query(`
    SELECT
      COUNT(*) AS total,
      COUNT(*) FILTER (WHERE tersedia = true) AS tersedia,
      COUNT(*) FILTER (WHERE tersedia = false) AS dipinjam
    FROM buku
  `);

  const total = Number(hasil.rows[0].total);
  const tersedia = Number(hasil.rows[0].tersedia);
  const dipinjam = Number(hasil.rows[0].dipinjam);

  const statistik = [
    {
      label: "Total Koleksi Buku",
      nilai: total,
      gaya: "from-malam to-malam-muda text-white",
      sub: "text-white/60",
    },
    {
      label: "Buku Tersedia",
      nilai: tersedia,
      gaya: "from-emerald-50 to-white text-emerald-900 border border-emerald-200",
      sub: "text-emerald-700/70",
    },
    {
      label: "Buku Dipinjam",
      nilai: dipinjam,
      gaya: "from-orange-50 to-white text-orange-900 border border-orange-200",
      sub: "text-orange-700/70",
    },
  ];

  return (
    <div className="space-y-14">
      <Hero
        nama="Pustaka Senja"
        slogan="Tempat tenang untuk membaca, berdiskusi, dan menemukan buku favorit berikutnya, hanya beberapa langkah dari kampus."
        lokasi="Jl. Kampus Raya No. 12"
        jamBuka="Setiap hari, 10.00 – 20.00 WITA"
      />

      <section>
        <div className="mb-6">
          <p className="text-sm font-semibold uppercase tracking-widest text-senja-tua">
            Ringkasan
          </p>
          <h2 className="mt-1 font-serif text-3xl font-semibold tracking-tight">
            Koleksi kami saat ini
          </h2>
        </div>

        <div className="grid gap-4 sm:grid-cols-3">
          {statistik.map((s) => (
            <div
              key={s.label}
              className={`rounded-3xl bg-gradient-to-br p-7 shadow-sm ${s.gaya}`}
            >
              <p className="font-serif text-6xl font-semibold leading-none">
                {s.nilai}
              </p>
              <p className={`mt-3 text-sm font-medium ${s.sub}`}>
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="flex flex-col items-start justify-between gap-6 rounded-3xl bg-kertas-tua p-8 sm:flex-row sm:items-center sm:p-10">
        <div className="max-w-md">
          <h2 className="font-serif text-2xl font-semibold tracking-tight">
            Mau mulai dari mana?
          </h2>
          <p className="mt-2 text-tinta-lembut">
            Jelajahi katalog, atau usulkan judul yang belum ada di rak kami.
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          <Link
            href="/katalog"
            className="rounded-full bg-malam px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-malam/20 transition-all hover:-translate-y-0.5 hover:bg-malam-muda"
          >
            Lihat Katalog
          </Link>

          <Link
            href="/usulan"
            className="rounded-full border border-tinta/20 bg-white px-6 py-3 text-sm font-semibold text-tinta transition-all hover:-translate-y-0.5 hover:border-senja hover:text-senja-tua"
          >
            Usulkan Buku
          </Link>
        </div>
      </section>
    </div>
  );
}
