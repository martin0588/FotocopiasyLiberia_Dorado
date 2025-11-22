"use client";

import { Bell, Phone, Package, Calculator } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-white border-b px-4 py-3">

      {/* Título */}
      <div className="mb-3">
        <h1 className="text-lg font-semibold text-orange-700">
          Papelería DORADO
        </h1>
        <p className="text-xs text-gray-500 -mt-1">
          Todo en papelería y útiles
        </p>
      </div>

      {/* Botones pequeños (móvil) */}
      <div className="flex gap-2 overflow-x-auto no-scrollbar">

        <button className="flex items-center gap-1 px-3 py-1 border rounded-full bg-white text-sm whitespace-nowrap">
          <Package size={14} />
          Reservas
        </button>

        <button className="flex items-center gap-1 px-3 py-1 border rounded-full bg-white text-sm whitespace-nowrap">
          <Phone size={14} />
          Contáctanos
        </button>

        <button className="flex items-center gap-1 px-3 py-1 border rounded-full bg-white text-sm whitespace-nowrap">
          <Calculator size={14} />
          Cotizar
        </button>

        <button className="flex items-center gap-1 px-3 py-1 border rounded-full bg-white text-sm whitespace-nowrap">
          <Bell size={14} />
          Notificaciones
        </button>
      </div>
    </header>
  );
}
