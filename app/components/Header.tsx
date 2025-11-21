"use client";
import { Bell, Phone, Package, Calculator } from "lucide-react";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-zinc-200 px-6 py-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        
        {/* Título */}
        <div>
          <h1 className="text-xl font-semibold text-amber-700">
            Papelería DORADO
          </h1>
          <p className="text-sm text-zinc-600">Todo en papelería y útiles</p>
        </div>

        {/* Botones */}
        <div className="flex flex-wrap gap-3">
          <button className="flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-zinc-100">
            <Package size={18} />
            Reservas
          </button>

          <button className="flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-zinc-100">
            <Phone size={18} />
            Contáctanos
          </button>

          <button className="flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-zinc-100">
            <Calculator size={18} />
            Cotizar
          </button>

          <button className="flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-zinc-100">
            <Bell size={18} />
            Notificaciones
          </button>
        </div>
      </div>
    </header>
  );
}
