import { Fraunces, Plus_Jakarta_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata = {
  title: {
    default: "Pustaka Senja — Ruang Baca Komunitas",
    template: "%s | Pustaka Senja",
  },
  description:
    "Katalog buku, detail koleksi, dan usulan buku baru untuk ruang baca komunitas Pustaka Senja.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id" className={`${fraunces.variable} ${jakarta.variable}`}>
      <body className="flex min-h-screen flex-col">
        <Navbar />
        <main className="mx-auto w-full max-w-6xl flex-1 px-5 pt-8">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
