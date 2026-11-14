import MenuCard from "./MenuCard";

function MenuList({ daftarMenu, onTambah }) {
  if (daftarMenu.length === 0) {
    return <p className="text-stone-500">Tidak ada menu pada kategori ini.</p>;
  }

  return (
    <div className="grid gap-4 sm:grid-cols-2">
      {daftarMenu.map((menu) => (
        <MenuCard
          key={menu.id}
          id={menu.id}
          nama={menu.nama}
          kategori={menu.kategori}
          harga={menu.harga}
          tersedia={menu.tersedia}
          deskripsi={menu.deskripsi}
          onTambah={onTambah}
        />
      ))}
    </div>
  );
}

export default MenuList;
