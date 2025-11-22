"use client";

import { Star, Package } from "lucide-react";

export default function FiltersBar() {
  return (
    <div className="w-full bg-white border-b border-zinc-200 px-6 py-4">

      {/* Nombre */}
      <h2 className="text-lg font-semibold text-amber-700 mb-4">
        Papelería DORADO
      </h2>

      {/* Primera fila */}
      <div className="flex gap-3 flex-wrap mb-4">

        {/* ACTIVO */}
        <button className="px-4 py-1.5 rounded-md bg-amber-600 text-white text-sm font-semibold shadow-sm">
          Todos
        </button>

        <button className="flex items-center gap-2 px-4 py-1.5 rounded-md bg-zinc-100 border border-zinc-300 text-sm text-black shadow-sm">
          <Star size={16} className="text-yellow-500" />
          Más Vendidos
        </button>

        <button className="flex items-center gap-2 px-4 py-1.5 rounded-md bg-zinc-100 border border-zinc-300 text-sm text-black shadow-sm">
          <Package size={16} className="text-amber-700" />
          Combos
        </button>
      </div>

      {/* Segunda fila deslizable */}
      <div className="flex gap-3 overflow-x-auto scrollbar-hide whitespace-nowrap">

        {[
          "Todos",
          "Cuadernos",
          "Papel",
          "Cartulinas",
          "Útiles Escolares",
          "Folders",
          "Sobres",
          "Combos",
          "Archivadores",
          "Accesorios",
        ].map((category, index) => (
          <button
            key={index}
            className={`inline-block px-4 py-1.5 rounded-md text-sm shadow-sm ${
              category === "Todos"
                ? "bg-amber-600 text-white font-semibold"
                : "bg-zinc-100 border border-zinc-300 text-black"
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
