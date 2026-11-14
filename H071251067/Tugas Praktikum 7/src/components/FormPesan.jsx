import { useState } from "react";

function FormPesan({ pesananKosong, onKirim }) {
  const [nama, setNama] = useState("");
  const [meja, setMeja] = useState("");
  const [galat, setGalat] = useState({});

  function handleSubmit(e) {
    e.preventDefault();

    const galatBaru = {};
    const namaBersih = nama.trim();
    const mejaBersih = meja.trim();

    if (namaBersih.length < 2) {
      galatBaru.nama = "Nama wajib diisi (minimal 2 karakter).";
    }
    if (!/^[1-9][0-9]*$/.test(mejaBersih)) {
      galatBaru.meja = "Nomor meja harus berupa angka lebih dari 0.";
    }
    if (pesananKosong) {
      galatBaru.pesanan = "Pesanan masih kosong. Pilih menu terlebih dahulu.";
    }

    setGalat(galatBaru);
    if (Object.keys(galatBaru).length > 0) return;

    onKirim(namaBersih, mejaBersih);
    setNama("");
    setMeja("");
    setGalat({});
  }

  const kelasInput =
    "w-full rounded-lg border px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-amber-400 ";

  return (
    <section className="rounded-2xl border border-amber-200 bg-white p-4 shadow-sm">
      <h2 className="text-lg font-semibold mb-3">Data Pemesan</h2>

      <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-3">
        <div>
          <label htmlFor="nama" className="block text-sm font-medium mb-1">
            Nama
          </label>
          <input
            id="nama"
            type="text"
            value={nama}
            onChange={(e) => setNama(e.target.value)}
            placeholder="Nama Anda"
            className={kelasInput + (galat.nama ? "border-red-400" : "border-stone-300")}
          />
          {galat.nama && <p className="mt-1 text-xs text-red-600">{galat.nama}</p>}
        </div>

        <div>
          <label htmlFor="meja" className="block text-sm font-medium mb-1">
            Nomor Meja
          </label>
          <input
            id="meja"
            type="text"
            inputMode="numeric"
            value={meja}
            onChange={(e) => setMeja(e.target.value)}
            placeholder="Contoh: 5"
            className={kelasInput + (galat.meja ? "border-red-400" : "border-stone-300")}
          />
          {galat.meja && <p className="mt-1 text-xs text-red-600">{galat.meja}</p>}
        </div>

        {galat.pesanan && pesananKosong && (
          <p role="alert" className="text-sm font-medium text-red-600">
            {galat.pesanan}
          </p>
        )}

        <button
          type="submit"
          className="rounded-lg bg-stone-900 px-4 py-2.5 font-semibold text-amber-50 hover:bg-stone-700 transition"
        >
          Kirim Pesanan
        </button>
      </form>
    </section>
  );
}

export default FormPesan;
