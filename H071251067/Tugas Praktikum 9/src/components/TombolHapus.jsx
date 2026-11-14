
"use client";

import { hapusBuku } from "@/app/actions/buku";

export default function TombolHapus({ id }) {
  async function handleHapus() {
    const yakin = window.confirm(
      "Apakah kamu yakin ingin menghapus buku ini?"
    );

    if (!yakin) return;

    await hapusBuku(id);
  }

  return (
    <button
      type="button"
      onClick={handleHapus}
      className="rounded-xl bg-red-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-red-700"
    >
      Hapus Buku
    </button>
  );
}
