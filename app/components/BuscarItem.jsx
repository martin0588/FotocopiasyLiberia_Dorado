import { Heart, ShoppingCart } from "lucide-react";

export default function BuscarItem({ producto, onAddToCart, onToggleFavorito }) {
  const { id, imagen, nombre, categoria, descripcion, precio, esTop, esFavorito } = producto;

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-3 flex gap-3">
      {/* Imagen */}
      <div className="relative shrink-0">
        {esTop && (
          <span className="absolute top-1 left-1 bg-amber-500 text-white text-[10px] px-2 py-0.5 rounded-md font-semibold z-10">
            ⭐ Top
          </span>
        )}
        <img
          src={imagen}
          alt={nombre}
          className="w-20 h-20 object-cover rounded-lg bg-gray-100"
        />
      </div>

      {/* Info */}
      <div className="flex flex-col flex-1 min-w-0">
        <p className="text-gray-400 text-xs">{categoria}</p>

        <h3 className="text-sm font-semibold text-gray-800 leading-tight">
          {nombre}
        </h3>

        <p className="text-xs text-gray-500 line-clamp-1">
          {descripcion}
        </p>

        {/* Precio + botones */}
        <div className="flex items-center justify-between mt-auto pt-2">
          <span className="text-amber-600 font-bold text-sm">
            Bs. {precio.toFixed(2)}
          </span>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => onToggleFavorito?.(id)}
              className="p-1.5 text-gray-400 hover:text-red-500 transition-colors"
            >
              <Heart 
                size={18} 
                className={esFavorito ? "fill-red-500 text-red-500" : ""} 
              />
            </button>

            <button 
              onClick={() => onAddToCart?.(id)}
              className="bg-amber-500 hover:bg-amber-600 text-white rounded-lg p-2 transition-colors"
            >
              <ShoppingCart size={16} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}