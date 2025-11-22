import { useState } from "react";
import { Package, MapPin, Info } from "lucide-react";

export default function Reservas() {
  const [reservas] = useState([
    {
      id: "RES-001",
      fecha: "18 de noviembre de 2025",
      estado: "Reservado",
      productos: [
        { nombre: "Cuaderno Universitario 100 hojas", cantidad: 2, precio: 31.00 },
        { nombre: "Cuaderno Anillado A5", cantidad: 1, precio: 12.00 },
      ],
      total: 73.00,
      lugar: "Papelería DORADO",
      direccion: "Av. Principal #123, Centro, La Paz",
    },
    {
      id: "RES-002",
      fecha: "17 de noviembre de 2025",
      estado: "Reservado",
      productos: [
        { nombre: "Papelógrafos (Pack 10 hojas)", cantidad: 3, precio: 54.00 },
        { nombre: "Papel Fotográfico Glossy A4", cantidad: 5, precio: 425.00 },
      ],
      total: 71.50,
      lugar: "Papelería DORADO",
      direccion: "Av. Principal #123, Centro, La Paz",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      {/* Header */}
      <div className="bg-white px-4 py-4 border-b border-gray-200 flex items-center justify-between">
        <h1 className="text-lg font-semibold text-gray-800">Mis Reservas</h1>
        <Package className="text-amber-500" size={24} />
      </div>

      {/* Lista de Reservas */}
      <div className="px-4 py-4 space-y-4">
        {reservas.map((reserva) => (
          <div
            key={reserva.id}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden"
          >
            {/* Header de la reserva */}
            <div className="px-4 py-3 border-b border-gray-100 flex items-center justify-between">
              <div>
                <p className="font-semibold text-gray-800">
                  Reserva #{reserva.id}
                </p>
                <p className="text-xs text-gray-500">📅 {reserva.fecha}</p>
              </div>
              <span className="bg-amber-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                {reserva.estado}
              </span>
            </div>

            {/* Productos */}
            <div className="px-4 py-3 border-b border-gray-100">
              <p className="text-xs text-gray-500 font-medium mb-2">Productos</p>
              {reserva.productos.map((prod, i) => (
                <div key={i} className="flex justify-between items-start mb-2">
                  <div className="flex-1">
                    <p className="text-sm text-gray-800">{prod.nombre}</p>
                    <p className="text-xs text-gray-400">Cantidad: {prod.cantidad}</p>
                  </div>
                  <span className="text-amber-600 font-medium text-sm">
                    Bs. {prod.precio.toFixed(2)}
                  </span>
                </div>
              ))}
            </div>

            {/* Total */}
            <div className="px-4 py-3 border-b border-gray-100 flex justify-between items-center">
              <p className="text-sm font-medium text-gray-700">Costo Total:</p>
              <span className="text-amber-600 font-bold">
                Bs. {reserva.total.toFixed(2)}
              </span>
            </div>

            {/* Lugar de recogida */}
            <div className="px-4 py-3 bg-amber-50">
              <div className="flex items-start gap-2">
                <MapPin size={18} className="text-amber-500 mt-0.5 shrink-0" />
                <div>
                  <p className="text-sm font-medium text-amber-700">
                    Recoger en: {reserva.lugar}
                  </p>
                  <p className="text-xs text-amber-600">{reserva.direccion}</p>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Información */}
        <div className="bg-blue-50 border border-blue-200 rounded-xl p-4 flex gap-3">
          <Info size={20} className="text-blue-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-blue-800 mb-1">Información</p>
            <p className="text-xs text-blue-700 leading-relaxed">
              Las reservas están listas para ser recogidas en nuestra tienda. 
              Por favor, presenta tu número de reserva al momento de recoger.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}