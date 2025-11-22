"use client";
import { Bell, Phone, Package, Calculator } from "lucide-react";

interface HeaderProps {
  onReservasClick?: () => void;
  onContactanosClick?: () => void;
  onCotizarClick?: () => void;
  onNotificacionesClick?: () => void;
}

export default function Header({ 
  onReservasClick, 
  onContactanosClick, 
  onCotizarClick,
  onNotificacionesClick 
}: HeaderProps) {
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

        {/* Botonera estilo app móvil */}
        <div className="flex gap-3 whitespace-nowrap overflow-x-auto touch-pan-x scrollbar-hide">

          <button 
            onClick={onReservasClick}
            className="flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-amber-50 hover:border-amber-300 transition-colors shrink-0 text-black"
          >
            <Package size={18} />
            Reservas
          </button>

          <button 
            onClick={onContactanosClick}
            className="flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-amber-50 hover:border-amber-300 transition-colors shrink-0 text-black"
          >
            <Phone size={18} />
            Contáctanos
          </button>

          <button 
            onClick={onCotizarClick}
            className="flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-amber-50 hover:border-amber-300 transition-colors shrink-0 text-black"
          >
            <Calculator size={18} />
            Cotizar
          </button>

          <button 
            onClick={onNotificacionesClick}
            className="flex items-center gap-2 px-4 py-2 border rounded-full hover:bg-amber-50 hover:border-amber-300 transition-colors shrink-0 text-black"
          >
            <Bell size={18} />
            Notificaciones
          </button>

        </div>
      </div>
    </header>
  );
}