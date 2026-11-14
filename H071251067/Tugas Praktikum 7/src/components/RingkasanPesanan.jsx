function RingkasanPesanan({ itemPesanan, totalItem, totalHarga, onKurang }) {
  return (
    <section className="rounded-2xl border border-amber-200 bg-white p-4 shadow-sm">
      <h2 className="text-lg font-semibold mb-3">Ringkasan Pesanan</h2>

      {itemPesanan.length === 0 ? (
        <p className="text-sm text-stone-500">
          Belum ada pesanan. Tekan Tambah pada menu yang Anda inginkan.
        </p>
      ) : (
        <ul className="divide-y divide-stone-100">
          {itemPesanan.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between gap-2 py-2 text-sm"
            >
              <div>
                <p className="font-medium">{item.nama}</p>
                <p className="text-stone-500">
                  {item.jumlah} × Rp {item.harga.toLocaleString("id-ID")}
                </p>
              </div>
              <div className="flex items-center gap-3">
                <p className="font-semibold">
                  Rp {(item.harga * item.jumlah).toLocaleString("id-ID")}
                </p>
                <button
                  type="button"
                  onClick={() => onKurang(item.id)}
                  aria-label={"Kurangi " + item.nama}
                  className="h-7 w-7 rounded-full bg-stone-200 font-bold hover:bg-stone-300"
                >
                  −
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="mt-3 flex items-center justify-between border-t border-stone-200 pt-3 font-semibold">
        <span>Total ({totalItem} item)</span>
        <span>Rp {totalHarga.toLocaleString("id-ID")}</span>
      </div>
    </section>
  );
}

export default RingkasanPesanan;
