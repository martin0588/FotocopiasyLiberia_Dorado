"use client";
import React, { createContext, useContext, useState } from "react";
import type { Producto } from "./FavoritesContext"; 
// Si prefieres usar Product de types.ts, cambia la línea por:
// import type { Product as Producto } from "../types";

type CartItem = Producto & { qty: number };

type CartContextType = {
  cart: CartItem[];
  addToCart: (product: Producto) => void;
  decreaseQty: (id: Producto["id"]) => void;
  removeFromCart: (id: Producto["id"]) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | null>(null);

export function CartProvider({ children }: { children: React.ReactNode }) {
  // ✅ aquí va el fix: tipar el array
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Producto) => {
    setCart((prev) => {
      const existing = prev.find((p) => p.id === product.id);

      if (existing) {
        return prev.map((p) =>
          p.id === product.id ? { ...p, qty: p.qty + 1 } : p
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  const decreaseQty = (id: Producto["id"]) => {
    setCart((prev) =>
      prev
        .map((p) => (p.id === id ? { ...p, qty: p.qty - 1 } : p))
        .filter((p) => p.qty > 0)
    );
  };

  const removeFromCart = (id: Producto["id"]) => {
    setCart((prev) => prev.filter((p) => p.id !== id));
  };

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider
      value={{ cart, addToCart, decreaseQty, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart debe usarse dentro de CartProvider");
  }
  return ctx;
}
