# Kedai Kopi Senja

Halaman pemesanan mandiri untuk Kedai Kopi Senja (Tugas Praktikum 7: React Hooks, State & Props).
Dibuat dengan React (Vite), JavaScript (JSX), dan Tailwind CSS v3.

## Menjalankan

```bash
npm install
npm run dev      # mode pengembangan
npm run build    # build produksi
```

## Fitur

- Menampilkan 9 menu beserta harga, dengan filter kategori (Semua, Kopi, Non-Kopi, Makanan).
- Detail tiap menu dibuka sendiri-sendiri (state di `MenuCard`).
- Menu yang habis tidak bisa dipesan (tombol nonaktif dan dijaga lagi di `handleTambah`).
- Jumlah item dan total harga muncul di Navbar dan di Ringkasan Pesanan, dihitung dari satu state `pesanan`.
- Form nama dan nomor meja dengan validasi; pesanan kosong juga ditolak dengan pesan.
- Setelah terkirim: ucapan terima kasih, form dan pesanan dikosongkan.

## Struktur state

| State | Lokasi | Keterangan |
| --- | --- | --- |
| `kategoriAktif` | `App.jsx` | Kategori yang dipilih |
| `pesanan` | `App.jsx` | Array `{ id, jumlah }`; total dihitung dari sini |
| `ucapan` | `App.jsx` | Pesan terima kasih setelah pesanan terkirim |
| `detailTerbuka` | `MenuCard.jsx` | Detail menu terbuka atau tidak, per kartu |
| `nama`, `meja`, `galat` | `FormPesan.jsx` | Input form dan pesan kesalahan |

> Catatan: `vite.config.js` ditambahkan karena dibutuhkan Vite untuk plugin React.
