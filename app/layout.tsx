import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import Header from "./components/Header";
import BottomNav from "./components/BottomNav";
import { CartProvider } from "@/context/CartContext";
import { FavoritesProvider } from "@/context/FavoritesContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Papelería Dorado",
  description: "Aplicación de papelería y útiles",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <CartProvider>
          <FavoritesProvider>

            {/* Header fijo */}
            <div className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
              <Header />
            </div>

            {/* Contenido */}
            <main className="pt-28 pb-20 px-4">
              {children}
            </main>

            {/* Barra inferior */}
            <BottomNav />

          </FavoritesProvider>
        </CartProvider>
      </body>
    </html>
  );
}
