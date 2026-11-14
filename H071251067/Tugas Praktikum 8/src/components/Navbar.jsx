"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { label: "Beranda", path: "/" },
  { label: "Katalog", path: "/katalog" },
  { label: "Usulan Buku", path: "/usulan" },
];

function cekAktif(pathname, path) {
  if (path === "/") return pathname === "/";
  // /katalog dan /katalog/[id] sama-sama menandai menu Katalog
  return pathname === path || pathname.startsWith(path + "/");
}

export default function Navbar() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-40 border-b border-tinta/10 bg-kertas/80 backdrop-blur-md">
      <nav className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-5 py-3.5">
        <Link href="/" className="group flex items-center gap-2.5">
          <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-senja to-malam-muda text-lg text-white shadow-sm transition-transform group-hover:rotate-6">
            ☀
          </span>
          <span className="font-serif text-xl font-semibold tracking-tight text-tinta">
            Pustaka <span className="text-senja-tua">Senja</span>
          </span>
        </Link>

        <ul className="flex items-center gap-1 text-sm font-medium">
          {menu.map((item) => {
            const aktif = cekAktif(pathname, item.path);
            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  aria-current={aktif ? "page" : undefined}
                  className={`relative block rounded-full px-3.5 py-2 transition-colors sm:px-4 ${
                    aktif
                      ? "bg-malam text-white"
                      : "text-tinta-lembut hover:bg-tinta/5 hover:text-tinta"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
