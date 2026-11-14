import Link from "next/link";
import dataBuku from "@/data/dataBuku";

export async function generateMetadata({ params }) {
  const { id } = await params;
  const buku = dataBuku.find((b) => b.id === id);
  return { title: buku ? buku.judul : "Buku tidak ditemukan" };
}

export default async function DetailBuku({ params }) {
  const { id } = await params;
  const buku = dataBuku.find((b) => b.id === id);

  if (!buku) {
    return (
      <div className="mx-auto max-w-lg py-20 text-center">
        <p className="font-serif text-8xl font-semibold text-senja/70">404</p>
        <h1 className="mt-4 font-serif text-3xl font-semibold tracking-tight">
          Buku tidak ditemukan
        </h1>
        <p className="mt-3 text-tinta-lembut">
          Tidak ada buku dengan id &quot;{id}&quot; di koleksi Pustaka Senja.
        </p>
        <Link
          href="/katalog"
          className="mt-8 inline-block rounded-full bg-malam px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-malam-muda"
        >
          ← Kembali ke Katalog
        </Link>
      </div>
    );
  }

  return (
    <div>
      <Link
        href="/katalog"
        className="inline-flex items-center gap-1.5 text-sm font-semibold text-tinta-lembut transition-colors hover:text-senja-tua"
      >
        ← Kembali ke Katalog
      </Link>

      <article className="animasi-muncul mt-6 grid gap-10 md:grid-cols-[18rem_1fr]">
        <div className="relative flex aspect-[3/4] items-end overflow-hidden rounded-3xl bg-gradient-to-br from-malam via-malam-muda to-senja-tua p-7 shadow-2xl shadow-malam/25">
          <span className="pointer-events-none absolute -right-2 -top-6 select-none font-serif text-[10rem] font-bold leading-none text-white/10">
            {buku.judul.charAt(0)}
          </span>
          <div className="absolute inset-y-0 left-5 w-px bg-white/25" />
          <div className="relative pl-4 text-white">
            <p className="font-serif text-2xl font-semibold leading-snug">
              {buku.judul}
            </p>
            <p className="mt-2 text-sm text-white/70">{buku.penulis}</p>
          </div>
        </div>

        <div className="py-2">
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-kertas-tua px-3 py-1 text-xs font-semibold text-tinta-lembut">
              {buku.kategori}
            </span>
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
          </div>

          <h1 className="mt-5 font-serif text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
            {buku.judul}
          </h1>

          <dl className="mt-6 grid max-w-md grid-cols-2 gap-4 rounded-2xl border border-tinta/10 bg-white p-5 text-sm">
            <div>
              <dt className="text-tinta-lembut">Penulis</dt>
              <dd className="mt-0.5 font-semibold">{buku.penulis}</dd>
            </div>
            <div>
              <dt className="text-tinta-lembut">Tahun Terbit</dt>
              <dd className="mt-0.5 font-semibold">{buku.tahun}</dd>
            </div>
          </dl>

          <h2 className="mt-8 text-sm font-semibold uppercase tracking-widest text-senja-tua">
            Sinopsis
          </h2>
          <p className="mt-3 max-w-2xl text-lg leading-relaxed text-tinta/85">
            {buku.sinopsis}
          </p>

          <Link
            href="/katalog"
            className="mt-10 inline-block rounded-full bg-malam px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-malam/20 transition-all hover:-translate-y-0.5 hover:bg-malam-muda"
          >
            ← Kembali ke Katalog
          </Link>
        </div>
      </article>
    </div>
  );
}
