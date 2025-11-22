"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

export type Producto = {
  id: string | number;
  image: string;
  title: string;
  description: string;
  price: number;
  isTop: boolean;
  category: string;
};

type FavoritesContextType = {
  favorites: Producto[];
  toggleFavorite: (p: Producto) => void;
  isFavorite: (id: Producto["id"]) => boolean;
};

const FavoritesContext = createContext<FavoritesContextType | null>(null);

export function FavoritesProvider({ children }: { children: React.ReactNode }) {
  const [favorites, setFavorites] = useState<Producto[]>([]);

  // cargar de localStorage
  useEffect(() => {
    const saved = localStorage.getItem("favorites");
    if (saved) setFavorites(JSON.parse(saved));
  }, []);

  // guardar en localStorage
  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  const isFavorite = (id: Producto["id"]) =>
    favorites.some((f) => f.id === id);

  const toggleFavorite = (p: Producto) => {
    setFavorites((prev) =>
      prev.some((f) => f.id === p.id)
        ? prev.filter((f) => f.id !== p.id) // quitar
        : [...prev, p] // agregar
    );
  };

  return (
    <FavoritesContext.Provider value={{ favorites, toggleFavorite, isFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  const ctx = useContext(FavoritesContext);
  if (!ctx) throw new Error("useFavorites debe usarse dentro de FavoritesProvider");
  return ctx;
}
