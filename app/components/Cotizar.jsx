import { useState } from "react";
import { Calculator, Search, Tag } from "lucide-react";

export default function Cotizar() {
  const [busqueda, setBusqueda] = useState("");

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      {/* Header */}
      <div className="bg-white px-4 py-4 border-b border-gray-200 flex items-center justify-between">
        <h1 className="text-lg font-semibold text-gray-800">Cotizar</h1>
        <Calculator className="text-amber-500" size={24} />
      </div>

      <div className="px-4 py-4 space-y-4">
        {/* Tarjeta de búsqueda */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Header de búsqueda */}
          <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-2">
            <Search size={18} className="text-gray-400" />
            <span className="text-sm font-medium text-gray-700">Buscar Productos</span>
          </div>

          {/* Input de búsqueda */}
          <div className="px-4 py-4">
            <label className="block text-sm text-gray-600 mb-2">
              Nombre del producto
            </label>
            <input
              type="text"
              value={busqueda}
              onChange={(e) => setBusqueda(e.target.value)}
              placeholder="Buscar por nombre..."
              className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:border-amber-400 focus:ring-1 focus:ring-amber-400 transition-colors"
            />
          </div>
        </div>

        {/* Información de descuentos */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3">
          <Tag size={20} className="text-amber-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-amber-800 mb-1">Descuentos por Cantidad</p>
            <p className="text-xs text-amber-700 leading-relaxed">
              ¡Ahorra más! Obtén 10% de descuento en cualquier producto cuando compres más de 15 unidades.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}