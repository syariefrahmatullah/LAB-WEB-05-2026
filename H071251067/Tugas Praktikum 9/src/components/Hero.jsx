export default function Hero({ nama, slogan, lokasi, jamBuka }) {
  return (
    <section className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-malam via-malam-muda to-senja-tua px-7 py-16 text-white shadow-xl shadow-malam/20 sm:px-14 sm:py-24">
      {/* matahari terbenam dekoratif */}
      <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-senja/60 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-24 right-24 h-64 w-64 rounded-full bg-amber-300/30 blur-3xl" />
      <div className="animasi-melayang pointer-events-none absolute right-8 top-1/2 hidden -translate-y-1/2 select-none font-serif text-[11rem] leading-none text-white/10 lg:block">
        ❝
      </div>

      <div className="animasi-muncul relative max-w-2xl">
        <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-medium tracking-wide backdrop-blur">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          Ruang baca komunitas
        </span>

        <h1 className="mt-6 font-serif text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
          {nama}
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-white/80">
          {slogan}
        </p>

        <div className="mt-8 flex flex-wrap gap-x-8 gap-y-2 text-sm text-white/70">
          <span>📍 {lokasi}</span>
          <span>🕙 {jamBuka}</span>
        </div>
      </div>
    </section>
  );
}
