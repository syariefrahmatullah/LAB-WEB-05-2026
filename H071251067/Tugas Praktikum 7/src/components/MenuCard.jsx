import { useState } from "react";

function MenuCard({ id, nama, kategori, harga, tersedia, deskripsi, onTambah }) {
  // State detail milik masing-masing kartu, sehingga membuka satu menu
  // tidak memengaruhi menu lain.
  const [detailTerbuka, setDetailTerbuka] = useState(false);

  return (
    <article
      className={
        "rounded-2xl border bg-white p-4 shadow-sm flex flex-col gap-3 " +
        (tersedia ? "border-amber-200" : "border-stone-200 opacity-70")
      }
    >
      <div className="flex items-start justify-between gap-3">
        <div>
          <h2 className="text-lg font-semibold">{nama}</h2>
          <span className="inline-block mt-1 rounded-full bg-amber-100 px-2.5 py-0.5 text-xs font-medium text-amber-800">
            {kategori}
          </span>
        </div>
        <p className="font-bold text-stone-900 whitespace-nowrap">
          Rp {harga.toLocaleString("id-ID")}
        </p>
      </div>

      {detailTerbuka && <p className="text-sm text-stone-600">{deskripsi}</p>}

      <div className="mt-auto flex items-center justify-between gap-2">
        <button
          type="button"
          onClick={() => setDetailTerbuka(!detailTerbuka)}
          className="text-sm font-medium text-amber-700 underline underline-offset-2 hover:text-amber-900"
        >
          {detailTerbuka ? "Tutup detail" : "Lihat detail"}
        </button>

        <button
          type="button"
          onClick={() => onTambah(id)}
          disabled={!tersedia}
          className={
            "rounded-lg px-4 py-2 text-sm font-semibold transition " +
            (tersedia
              ? "bg-amber-500 text-stone-900 hover:bg-amber-400"
              : "bg-stone-200 text-stone-500 cursor-not-allowed")
          }
        >
          {tersedia ? "Tambah" : "Habis"}
        </button>
      </div>
    </article>
  );
}

export default MenuCard;
