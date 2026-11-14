
"use server";

import pool from "@/lib/db";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

// VALIDASI DATA BUKU
function validasiBuku(formData) {
  const judul = String(formData.get("judul") || "").trim();
  const penulis = String(formData.get("penulis") || "").trim();
  const kategori = String(formData.get("kategori") || "").trim();
  const tahun = Number(formData.get("tahun"));
  const tersedia = formData.get("tersedia") === "on";
  const sinopsis = String(formData.get("sinopsis") || "").trim();

  if (!judul || !penulis || !kategori || !sinopsis) {
    throw new Error("Semua kolom wajib diisi.");
  }

  if (!Number.isInteger(tahun) || tahun <= 0) {
    throw new Error("Tahun harus berupa bilangan bulat positif.");
  }

  return { judul, penulis, kategori, tahun, tersedia, sinopsis };
}

// CREATE: MENAMBAHKAN BUKU
export async function tambahBuku(formData) {
  const buku = validasiBuku(formData);

  const hasil = await pool.query(
    `INSERT INTO buku
    (judul, penulis, kategori, tahun, tersedia, sinopsis)
    VALUES ($1, $2, $3, $4, $5, $6)
    RETURNING id`,
    [
      buku.judul,
      buku.penulis,
      buku.kategori,
      buku.tahun,
      buku.tersedia,
      buku.sinopsis,
    ]
  );

  console.log("Buku berhasil ditambahkan:", hasil.rows[0]);

    revalidatePath("/katalog");
  revalidatePath("/");
  redirect("/katalog");
}

// UPDATE: MENGUBAH BUKU
export async function ubahBuku(formData) {
  const id = Number(formData.get("id"));

  if (!Number.isInteger(id) || id <= 0) {
    throw new Error("ID buku tidak valid.");
  }

  const buku = validasiBuku(formData);

  const hasil = await pool.query(
    `UPDATE buku
     SET judul = $1,
         penulis = $2,
         kategori = $3,
         tahun = $4,
         tersedia = $5,
         sinopsis = $6
     WHERE id = $7`,
    [
      buku.judul,
      buku.penulis,
      buku.kategori,
      buku.tahun,
      buku.tersedia,
      buku.sinopsis,
      id,
    ]
  );

  if (hasil.rowCount === 0) {
    throw new Error("Buku tidak ditemukan.");
  }

  revalidatePath("/katalog");
revalidatePath(`/katalog/${id}`);
revalidatePath("/");
redirect(`/katalog/${id}`);
}

// DELETE: MENGHAPUS BUKU
export async function hapusBuku(id) {
  const idBuku = Number(id);

  if (!Number.isInteger(idBuku) || idBuku <= 0) {
    throw new Error("ID buku tidak valid.");
  }

  const hasil = await pool.query(
    "DELETE FROM buku WHERE id = $1",
    [idBuku]
  );

  if (hasil.rowCount === 0) {
    throw new Error("Buku tidak ditemukan.");
  }

    revalidatePath("/katalog");
  revalidatePath("/");
  revalidatePath(`/katalog/${idBuku}`);

  redirect("/katalog");
}
