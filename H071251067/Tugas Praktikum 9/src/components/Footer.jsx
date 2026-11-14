import Link from "next/link";

const tautan = [
  { label: "Beranda", path: "/" },
  { label: "Katalog", path: "/katalog" },
  { label: "Usulan Buku", path: "/usulan" },
];

export default function Footer() {
  return (
    <footer className="mt-24 bg-malam text-white/80">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-3">
        <div>
          <p className="font-serif text-2xl font-semibold text-white">
            Pustaka <span className="text-senja">Senja</span>
          </p>
          <p className="mt-3 max-w-xs text-sm leading-relaxed text-white/60">
            Ruang baca komunitas dekat kampus, tempat teman-teman menemukan
            buku, fokus, dan sore yang tenang.
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
            Jelajahi
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {tautan.map((t) => (
              <li key={t.path}>
                <Link
                  href={t.path}
                  className="transition-colors hover:text-senja"
                >
                  {t.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-widest text-white/40">
            Kunjungi Kami
          </p>
          <p className="mt-4 text-sm leading-relaxed">
            Jl. Kampus Raya No. 12
            <br />
            Setiap hari, 10.00 – 20.00 WITA
          </p>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/40">
        © 2026 Pustaka Senja. Dikelola dengan ♥ oleh Nabila.
      </div>
    </footer>
  );
}
