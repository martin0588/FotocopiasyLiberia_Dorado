"use client";

import { useEffect, useState } from "react";
import { Package, MapPin, Info, Trash2 } from "lucide-react";
import type { Product } from "../types";

// Producto dentro de la reserva (con qty)
type ReservaProducto = Product & { qty: number };

// Forma de una reserva guardada en localStorage
type Reserva = {
  id: string | number;
  fecha?: string;
  productos?: ReservaProducto[];
  total: number;
  lugar?: string;
  direccion?: string;
};

export default function Reservas() {
  const [reservas, setReservas] = useState<Reserva[]>([]);

  useEffect(() => {
    const data: Reserva[] = JSON.parse(localStorage.getItem("reservas") || "[]");

    // mostramos más nuevas primero
    setReservas([...data].reverse());
  }, []);

  const eliminarReserva = (id: Reserva["id"]) => {
    // reservas en pantalla están al revés (más nuevas arriba)
    // filtramos esa lista
    const filtradoPantalla = reservas.filter((r) => r.id !== id);
    setReservas(filtradoPantalla);

    // para guardar, volvemos al orden original (más viejas primero)
    const paraGuardar = [...filtradoPantalla].reverse();
    localStorage.setItem("reservas", JSON.stringify(paraGuardar));
  };

  return (
    <div className="min-h-screen bg-gray-100 pb-24">
      {/* HEADER */}
      <div className="bg-white px-4 py-4 border-b border-gray-200 flex items-center justify-between">
        <h1 className="text-lg font-semibold text-gray-800">Mis Reservas</h1>
        <Package className="text-amber-500" size={24} />
      </div>

      <div className="px-4 py-4 space-y-4">
        {reservas.length === 0 && (
          <div className="text-center text-gray-500 text-sm mt-4">
            Aún no tienes reservas.
          </div>
        )}

        {reservas.map((reserva) => (
          <div
            key={reserva.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
          >
            {/* CABECERA DE LA TARJETA */}
            <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-800">
                  Reserva #{reserva.id}
                </p>
                {reserva.fecha && (
                  <p className="text-xs text-gray-500">📅 {reserva.fecha}</p>
                )}
              </div>

              <button
                onClick={() => eliminarReserva(reserva.id)}
                className="text-red-500 hover:text-red-700"
              >
                <Trash2 size={20} />
              </button>
            </div>

            {/* PRODUCTOS */}
            <div className="px-4 py-3 border-b border-gray-100">
              <p className="text-xs text-gray-500 font-medium mb-2">Productos</p>

              {(reserva.productos ?? []).map((prod, i) => {
                const safePrice = Number(prod.price || 0);
                const qty = prod.qty ?? 1;
                const desc = (prod as any).descripcion ?? prod.description;

                return (
                  <div key={i} className="flex justify-between items-start mb-3">
                    <div className="flex-1">
                      <p className="text-sm text-gray-800">{prod.title}</p>

                      {desc && (
                        <p className="text-xs text-gray-500 mt-1">{desc}</p>
                      )}

                      <p className="text-xs text-gray-400 mt-1">
                        Cantidad: {qty}
                      </p>
                    </div>

                    <span className="text-amber-600 font-medium text-sm">
                      {safePrice === 0
                        ? "Pendiente"
                        : `Bs. ${(safePrice * qty).toFixed(2)}`}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* TOTAL */}
            <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center">
              <p className="text-sm font-medium text-gray-700">Costo Total:</p>

              <span className="text-amber-600 font-bold">
                {Number(reserva.total) === 0
                  ? "Pendiente"
                  : `Bs. ${Number(reserva.total).toFixed(2)}`}
              </span>
            </div>

            {/* LUGAR */}
            <div className="px-4 py-3 bg-amber-50">
              <div className="flex items-start gap-2">
                <MapPin
                  size={18}
                  className="text-amber-500 mt-0.5 shrink-0"
                />
                <div>
                  <p className="text-sm font-medium text-amber-700">
                    Recoger en: {reserva.lugar ?? "Tienda"}
                  </p>
                  {reserva.direccion && (
                    <p className="text-xs text-amber-600">{reserva.direccion}</p>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* INFO FINAL */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex gap-3 mt-6 mb-10">
          <Info size={20} className="text-blue-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-blue-800 mb-1">
              Información
            </p>
            <p className="text-xs text-blue-700 leading-relaxed">
              Las reservas están listas para ser recogidas en nuestra tienda.
              Presenta el número de reserva al recoger.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
