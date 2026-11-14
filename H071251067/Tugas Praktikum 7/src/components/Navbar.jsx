function Navbar({
  daftarKategori,
  kategoriAktif,
  onPilihKategori,
  totalItem,
  totalHarga,
}) {
  return (
    <header className="sticky top-0 z-10 bg-stone-900 text-amber-50 shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between gap-4">
          <h1 className="text-xl font-bold tracking-wide">☕ Kedai Kopi Senja</h1>
          <p className="md:hidden text-sm font-semibold" aria-live="polite">
            {totalItem} item · Rp {totalHarga.toLocaleString("id-ID")}
          </p>
        </div>

        <nav className="flex flex-wrap gap-2" aria-label="Kategori menu">
          {daftarKategori.map((kategori) => (
            <button
              key={kategori}
              type="button"
              onClick={() => onPilihKategori(kategori)}
              aria-pressed={kategori === kategoriAktif}
              className={
                "rounded-full px-4 py-1.5 text-sm font-medium transition " +
                (kategori === kategoriAktif
                  ? "bg-amber-400 text-stone-900"
                  : "bg-stone-700 text-amber-50 hover:bg-stone-600")
              }
            >
              {kategori}
            </button>
          ))}
        </nav>

        <p
          className="hidden md:block text-sm font-semibold whitespace-nowrap"
          aria-live="polite"
        >
          {totalItem} item · Rp {totalHarga.toLocaleString("id-ID")}
        </p>
      </div>
    </header>
  );
}

export default Navbar;
