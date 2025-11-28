"use client";

import React from "react";
import { Heart } from "lucide-react";
import { useFavorites } from "./FavoritesContext";
import { useCart } from "./CartContext";

interface ProductCardProps {
  id: number | string;
  image: string;
  title: string;
  description: string;
  price: number;
  isTop: boolean;
  category: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  id,
  image,
  title,
  description,
  price,
  isTop,
  category,
}) => {
  const { toggleFavorite, isFavorite } = useFavorites();
  const fav = isFavorite(id);

  // ⬅️ Necesario para agregar al carrito
  const { addToCart } = useCart();

  // ⬅️ estado para animación
  const [pop, setPop] = React.useState(false);

  // Función que agrega al carrito + animación
  const handleAdd = (e: any) => {
    e.stopPropagation();

    addToCart({
      id,
      image,
      title,
      description,
      price,
      isTop,
      category,
    });

    // Activar animación pop
    setPop(true);
    setTimeout(() => setPop(false), 300);
  };

  return (
    <div className="relative bg-white rounded-2xl shadow-sm p-3">
      
      {/* ⭐ Top Badge */}
      {isTop && (
        <span className="absolute top-2 left-2 bg-orange-400 text-white text-xs px-2 py-1 rounded-lg font-semibold flex items-center gap-1">
          ⭐ Top
        </span>
      )}

      {/* ❤️ Favoritos */}
      <button
        onClick={(e) => {
          e.stopPropagation();
          toggleFavorite({
            id,
            image,
            title,
            description,
            price,
            isTop,
            category,
          });
        }}
        className="absolute top-2 right-2 bg-white border border-gray-200 rounded-full p-1"
      >
        <Heart
          size={18}
          className={fav ? "text-orange-500 fill-orange-500" : "text-gray-500"}
        />
      </button>

      {/* Imagen */}
      <img
        src={image}
        alt={title}
        className="w-full h-28 object-cover rounded-lg mb-3"
      />

      {/* Categoría */}
      <p className="text-gray-700 text-xs mb-1">{category}</p>


      {/* Texto */}
      <h3 className="text-sm font-semibold text-gray-900">{title}</h3>
      <p className="text-sm text-gray-600">{description}</p>

      {/* Precio + carrito */}
      <div className="flex items-center justify-between mt-3">
        <span className="font-bold text-[15px] text-gray-700">
          Bs. {price.toFixed(2)}
        </span>

        {/* 🛒 Botón animado */}
        <button
          onClick={handleAdd}
          className={`bg-orange-500 text-white rounded-md p-2 ${
            pop ? "cart-pop" : ""
          }`}
        >
          🛒
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
