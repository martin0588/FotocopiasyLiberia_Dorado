import { CalendarDays } from "lucide-react";
import { useState } from "react";

export default function Reserva() {
  const [fecha, setFecha] = useState("");

  return (
    <div className="w-full flex flex-col items-center p-6 text-center">
      <div className="w-full max-w-md border rounded-2xl p-5 shadow-sm bg-white text-left">

        {/* Título */}
        <div className="flex items-center gap-2 mb-3">
          <CalendarDays className="text-orange-500" />
          <h2 className="font-semibold text-lg">Reservar Productos</h2>
        </div>

        <p className="text-gray-500 text-sm mb-4">
          Reserva productos para recoger en tienda en una fecha específica
        </p>

        {/* Fecha */}
        <label className="text-sm font-medium">Fecha de retiro</label>
        <input
          type="date"
          className="w-full mt-1 mb-4 p-2 bg-gray-100 rounded-lg"
          value={fecha}
          onChange={(e) => setFecha(e.target.value)}
        />

        {/* Productos */}
        <label className="text-sm font-medium">Productos a reservar</label>
        <p className="text-gray-500 text-sm mb-4">0 productos en el carrito</p>

        {/* Botón */}
        <button className="w-full bg-orange-300 text-white mt-2 p-2 rounded-lg font-medium">
          Confirmar Reserva
        </button>
      </div>
    </div>
  );
}
