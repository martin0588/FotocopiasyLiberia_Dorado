"use client";

import TabsBar from "../TabsBar";
import { Calendar } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function ReservarPage() {
  const { cart } = useCart();

  return (
    <div className="px-4 pb-24">
      <TabsBar active="Reservar" />

      <div className="bg-white border rounded-xl p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <Calendar className="text-orange-600" size={22} />
          <p className="font-semibold">Reservar Productos</p>
        </div>

        <p className="text-sm text-gray-600 mb-3">
          Reserva productos para recoger en tienda en una fecha específica
        </p>

        <label className="text-sm text-gray-600">Fecha de retiro</label>
        <input
          type="date"
          className="w-full bg-gray-100 px-3 py-2 rounded-lg mt-1 mb-4"
        />

        <label className="text-sm text-gray-600">Productos a reservar</label>
        <p className="text-orange-600 font-semibold mt-1 mb-4">
          {cart.length} productos en el carrito
        </p>

        <button className="w-full bg-orange-600 text-white py-2 rounded-lg">
          Confirmar Reserva
        </button>
      </div>
    </div>
  );
}
