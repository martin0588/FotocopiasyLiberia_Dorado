"use client";

import { Star, Package } from "lucide-react";

export default function FiltersBar({
  activeTopFilter,
  setActiveTopFilter,
  activeCategory,
  setActiveCategory,
}) {
  const categories = [
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
  ];

  const baseBtn =
    "px-4 py-1.5 rounded-md text-sm shadow-sm transition-colors shrink-0";
  const activeBtn = "bg-amber-600 text-white font-semibold";
  const normalBtn = "bg-zinc-100 border border-zinc-300 text-black";

  return (
    <div className="w-full bg-white border-b border-zinc-200 px-6 py-4">
      {/* Primera fila */}
      <div className="flex gap-3 flex-wrap mb-4">
        <button
          onClick={() => setActiveTopFilter("todos")}
          className={`${baseBtn} ${
            activeTopFilter === "todos" ? activeBtn : normalBtn
          }`}
        >
          Todos
        </button>

        <button
          onClick={() => setActiveTopFilter("top")}
          className={`flex items-center gap-2 ${baseBtn} ${
            activeTopFilter === "top" ? activeBtn : normalBtn
          }`}
        >
          <Star size={16} className="text-yellow-500" />
          Más Vendidos
        </button>

        <button
          onClick={() => setActiveTopFilter("combos")}
          className={`flex items-center gap-2 ${baseBtn} ${
            activeTopFilter === "combos" ? activeBtn : normalBtn
          }`}
        >
          <Package size={16} className="text-amber-700" />
          Combos
        </button>
      </div>

      {/* Segunda fila */}
      <div className="flex gap-3 overflow-x-auto scrollbar-hide whitespace-nowrap">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`${baseBtn} ${
              activeCategory === category ? activeBtn : normalBtn
            }`}
          >
            {category}
          </button>
        ))}
      </div>
    </div>
  );
}
