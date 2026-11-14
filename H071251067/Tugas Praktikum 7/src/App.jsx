import { useState } from "react";
import Navbar from "./components/Navbar";
import MenuList from "./components/MenuList";
import RingkasanPesanan from "./components/RingkasanPesanan";
import FormPesan from "./components/FormPesan";
import Footer from "./components/Footer";

// Satu-satunya sumber data menu. Komponen anak hanya menerimanya lewat props.
const dataMenu = [
  { id: 1, nama: "Kopi Susu", kategori: "Kopi", harga: 18000, tersedia: true, deskripsi: "Espresso dengan susu segar dan gula aren." },
  { id: 2, nama: "Americano", kategori: "Kopi", harga: 15000, tersedia: true, deskripsi: "Espresso dengan air panas, rasa kuat dan bersih." },
  { id: 3, nama: "Cappuccino", kategori: "Kopi", harga: 22000, tersedia: true, deskripsi: "Espresso, susu panas, dan busa susu tebal." },
  { id: 4, nama: "Matcha Latte", kategori: "Non-Kopi", harga: 24000, tersedia: true, deskripsi: "Teh hijau matcha dengan susu." },
  { id: 5, nama: "Teh Tarik", kategori: "Non-Kopi", harga: 14000, tersedia: false, deskripsi: "Teh susu yang ditarik hingga berbusa." },
  { id: 6, nama: "Cokelat Panas", kategori: "Non-Kopi", harga: 20000, tersedia: true, deskripsi: "Cokelat pekat dengan susu hangat." },
  { id: 7, nama: "Roti Bakar", kategori: "Makanan", harga: 16000, tersedia: true, deskripsi: "Roti tebal dengan selai cokelat dan keju." },
  { id: 8, nama: "Pisang Goreng", kategori: "Makanan", harga: 12000, tersedia: false, deskripsi: "Pisang goreng renyah dengan taburan keju." },
  { id: 9, nama: "Nasi Goreng", kategori: "Makanan", harga: 25000, tersedia: true, deskripsi: "Nasi goreng kampung dengan telur mata sapi." },
];

// Daftar kategori diturunkan dari data menu (bukan data baru).
const daftarKategori = ["Semua", ...new Set(dataMenu.map((menu) => menu.kategori))];

function App() {
  // Satu data, satu state. Total item dan total harga dihitung dari `pesanan`,
  // sehingga angka di Navbar dan di ringkasan selalu sama.
  const [kategoriAktif, setKategoriAktif] = useState("Semua");
  const [pesanan, setPesanan] = useState([]); // [{ id, jumlah }]
  const [ucapan, setUcapan] = useState("");

  const menuTampil =
    kategoriAktif === "Semua"
      ? dataMenu
      : dataMenu.filter((menu) => menu.kategori === kategoriAktif);

  const itemPesanan = pesanan.map((p) => {
    const menu = dataMenu.find((m) => m.id === p.id);
    return { id: p.id, nama: menu.nama, harga: menu.harga, jumlah: p.jumlah };
  });

  const totalItem = itemPesanan.reduce((jumlah, item) => jumlah + item.jumlah, 0);
  const totalHarga = itemPesanan.reduce(
    (total, item) => total + item.harga * item.jumlah,
    0
  );

  function handleTambah(id) {
    const menu = dataMenu.find((m) => m.id === id);
    if (!menu || !menu.tersedia) return; // menu habis tidak boleh dipesan

    setUcapan("");
    setPesanan((sebelumnya) => {
      const sudahAda = sebelumnya.find((p) => p.id === id);
      if (sudahAda) {
        return sebelumnya.map((p) =>
          p.id === id ? { ...p, jumlah: p.jumlah + 1 } : p
        );
      }
      return [...sebelumnya, { id, jumlah: 1 }];
    });
  }

  function handleKurang(id) {
    setPesanan((sebelumnya) =>
      sebelumnya
        .map((p) => (p.id === id ? { ...p, jumlah: p.jumlah - 1 } : p))
        .filter((p) => p.jumlah > 0)
    );
  }

  function handleKirim(nama, meja) {
    setUcapan(
      `Terima kasih, ${nama}! Pesanan untuk meja ${meja} sudah dikirim ke dapur.`
    );
    setPesanan([]);
  }

  return (
    <div className="min-h-screen bg-amber-50 text-stone-800 flex flex-col">
      <Navbar
        daftarKategori={daftarKategori}
        kategoriAktif={kategoriAktif}
        onPilihKategori={setKategoriAktif}
        totalItem={totalItem}
        totalHarga={totalHarga}
      />

      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-6">
        {ucapan !== "" && (
          <div
            role="status"
            className="mb-6 rounded-xl border border-green-300 bg-green-100 px-4 py-3 text-green-800 font-medium"
          >
            {ucapan}
          </div>
        )}

        <div className="grid gap-6 lg:grid-cols-3">
          <section className="lg:col-span-2">
            <MenuList daftarMenu={menuTampil} onTambah={handleTambah} />
          </section>

          <aside className="flex flex-col gap-6">
            <RingkasanPesanan
              itemPesanan={itemPesanan}
              totalItem={totalItem}
              totalHarga={totalHarga}
              onKurang={handleKurang}
            />
            <FormPesan pesananKosong={totalItem === 0} onKirim={handleKirim} />
          </aside>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
