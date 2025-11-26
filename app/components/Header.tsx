"use client";
import { useState } from "react";
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

  const [activo, setActivo] = useState<"reservas" | "contactanos" | "cotizar" | "notificaciones">("reservas");

  const base =
    "flex items-center gap-2 px-4 py-2 border rounded-full transition-colors shrink-0";
  const normal =
    "text-black hover:bg-amber-50 hover:border-amber-300";
  const seleccionado =
    "bg-orange-500 border-orange-500 text-white"; // <-- activo naranja

  return (
    <header className="w-full bg-white border-b border-zinc-200 px-6 py-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

        {/* Título */}
        <div>
          <h1 className="text-xl font-semibold text-amber-700">
            FOTOCOPIAS y LIBRERÍA DORADO
          </h1>
          <p className="text-sm text-zinc-600">Todo en papelería y útiles</p>
        </div>

        {/* Botonera estilo app móvil */}
        <div className="flex gap-3 whitespace-nowrap overflow-x-auto touch-pan-x scrollbar-hide">

          <button 
            onClick={() => { setActivo("reservas"); onReservasClick?.(); }}
            className={`${base} ${activo === "reservas" ? seleccionado : normal}`}
          >
            <Package size={18} />
            Reservas
          </button>

          <button 
            onClick={() => { setActivo("contactanos"); onContactanosClick?.(); }}
            className={`${base} ${activo === "contactanos" ? seleccionado : normal}`}
          >
            <Phone size={18} />
            Contáctanos
          </button>
          
          <button 
            onClick={() => { setActivo("notificaciones"); onNotificacionesClick?.(); }}
            className={`${base} ${activo === "notificaciones" ? seleccionado : normal}`}
          >
            <Bell size={18} />
            Notificaciones
          </button>

        </div>
      </div>
    </header>
  );
}
