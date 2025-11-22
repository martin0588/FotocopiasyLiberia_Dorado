"use client";

import { useFavorites } from "@/context/FavoritesContext";
import { Heart, ShoppingCart } from "lucide-react";
import TabsBarFav from "./TabsBarFav";
import { useCart } from "@/context/CartContext";

export default function FavoritosPage() {
  const { favorites } = useFavorites();
  const { addToCart } = useCart();

  return (
    <div className="px-4 pb-24">

      {/* Tabs Favoritos / Ofertas / Puntos */}
      <TabsBarFav active="Favoritos" />

      {/* Estado vacío */}
      {favorites.length === 0 && (
        <div className="flex flex-col items-center mt-16 text-gray-400">
          <Heart size={48} />
          <p className="mt-2 text-sm">No tienes productos favoritos</p>
          <p className="text-xs text-gray-400">
            Presiona el ♡ en los productos que te gusten
          </p>
        </div>
      )}

      {/* Lista de favoritos */}
      <div className="space-y-4">
        {favorites.map((item) => (
          <div
            key={item.id}
            className="flex bg-white rounded-xl p-3 shadow-sm border justify-between"
          >
            {/* Imagen */}
            <img
              src={item.image || "/next.svg"}
              className="w-16 h-16 rounded-lg object-cover"
              alt={item.name}
            />

            {/* Info */}
            <div className="flex-1 px-3">
              <p className="font-semibold text-sm">{item.name}</p>
              <p className="text-xs text-gray-500">{item.category}</p>
              <p className="mt-1 font-semibold text-orange-600 text-sm">
                Bs. {item.price}
              </p>
            </div>

            {/* Botón Agregar */}
            <button
              onClick={() =>
                addToCart({
                  id: item.id,
                  name: item.name,
                  price: item.price,
                  image: item.image,
                  category: item.category,
                  qty: 1,
                })
              }
              className="flex items-center bg-orange-600 text-white text-sm px-3 py-1 rounded-lg"
            >
              <ShoppingCart size={16} className="mr-1" />
              Agregar
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
