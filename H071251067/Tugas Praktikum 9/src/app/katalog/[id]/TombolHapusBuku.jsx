
"use client";

import { hapusBuku } from "@/app/actions/buku";

export default function TombolHapusBuku({ id }) {
  return (
    <form
      action={hapusBuku.bind(null, id)}
      onSubmit={(event) => {
        const yakin = window.confirm(
          "Apakah kamu yakin ingin menghapus buku ini?"
        );

        if (!yakin) {
          event.preventDefault();
        }
      }}
    >
      <button
        type="submit"
        className="rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
      >
        Hapus Buku
      </button>
    </form>
  );
}
