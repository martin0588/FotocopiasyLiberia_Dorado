import React from "react";

interface ProductCardProps {
  image: string;
  title: string;
  description: string;
  price: number;
  isTop: boolean;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  description,
  price,
  isTop,
}) => {
  return (
    <div className="relative bg-white rounded-2xl shadow-sm p-3">
      {isTop && (
        <span className="absolute top-2 left-2 bg-orange-400 text-white text-xs px-2 py-1 rounded-lg font-semibold flex items-center gap-1">
          ⭐ Top
        </span>
      )}

      <button className="absolute top-2 right-2 bg-white border border-gray-200 rounded-full p-1 text-gray-500">
        🤍
      </button>

      <img
        src={image}
        alt={title}
        className="w-full h-28 object-cover rounded-lg mb-3"
      />

      <p className="text-gray-500 text-xs mb-1">Cuadernos</p>

      <h3 className="text-sm font-semibold leading-tight">{title}</h3>

      <p className="text-sm text-gray-600">{description}</p>

      <div className="flex items-center justify-between mt-3">
        <span className="font-bold text-[15px] text-gray-700">
          Bs. {price.toFixed(2)}
        </span>

        <button className="bg-orange-500 text-white rounded-md p-2">
          🛒
        </button>
      </div>
    </div>
  );
};

export default ProductCard;