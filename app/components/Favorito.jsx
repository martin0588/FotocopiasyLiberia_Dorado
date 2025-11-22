"use client";
import { Heart } from "lucide-react";
import { useFavorites } from "./FavoritesContext";

export default function Favorito() {
  const { favorites } = useFavorites();

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      <div className="bg-white px-4 py-4 border-b border-gray-200">
        <h1 className="text-lg font-semibold text-gray-800">
          Favoritos y Beneficios
        </h1>
      </div>

      <div className="px-4 py-4">
        {favorites.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16">
            <Heart size={64} className="text-gray-300 mb-6" strokeWidth={1} />
            <h2 className="text-lg font-medium text-gray-700 mb-2">
              No tienes productos favoritos
            </h2>
            <p className="text-sm text-gray-400 text-center">
              Presiona el <Heart size={14} className="inline text-gray-400" /> en los productos que te gusten
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {favorites.map((p) => (
              <div key={p.id} className="bg-white rounded-xl p-3 shadow-sm">
                <img src={p.image} className="w-full h-24 object-cover rounded-lg" />
                <p className="text-xs text-gray-500 mt-2">{p.category}</p>
                <h3 className="text-sm font-semibold">{p.title}</h3>
                <p className="text-xs text-gray-600">{p.description}</p>
                <p className="font-bold mt-1">Bs. {p.price.toFixed(2)}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
