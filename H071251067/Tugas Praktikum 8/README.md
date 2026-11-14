# Pustaka Senja

Aplikasi multi-halaman untuk ruang baca komunitas **Pustaka Senja**, dibangun dengan Next.js (App Router), React, dan Tailwind CSS. Tugas Praktikum 8 — Framework React (Next.js Intro).

## Menjalankan

```bash
npm install
npm run dev
```

Buka http://localhost:3000.

## Halaman

| Route | Keterangan |
| --- | --- |
| `/` | Beranda: Hero, statistik koleksi (dihitung dari data), tombol ke katalog dan usulan |
| `/katalog` | Daftar buku, filter kategori, tombol favorit per kartu |
| `/katalog/[id]` | Detail buku dinamis; pesan "tidak ditemukan" untuk id tak valid |
| `/usulan` | Form usulan buku dengan validasi dan daftar usulan sesi ini |

## Struktur

```
src/
├── data/dataBuku.js        # satu sumber data (9 buku)
├── components/
│   ├── Navbar.jsx          # "use client" (usePathname)
│   ├── Hero.jsx            # Server Component
│   ├── BukuCard.jsx        # "use client" (tombol favorit)
│   └── Footer.jsx          # Server Component
└── app/
    ├── layout.jsx          # Navbar + {children} + Footer
    ├── page.jsx            # Beranda
    ├── katalog/page.jsx
    ├── katalog/[id]/page.jsx
    └── usulan/page.jsx
```

## Catatan

- Kolom `tersedia` untuk *Filosofi Teras* kosong pada soal, sehingga diasumsikan `true`. Ubah di `src/data/dataBuku.js` bila berbeda.
