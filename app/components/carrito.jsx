import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import Servicios from "./Servicios";
import Reserva from "./Reserva";
import Empresa from "./Empresa";

export default function Carrito() {
  const [tab, setTab] = useState("carrito");

  return (
    <div className="w-full flex flex-col items-center p-6 text-center">

      {/* Tabs */}
      <div className="flex gap-4 bg-gray-100 px-4 py-2 rounded-full mb-10">
        
        <button
          className={`px-4 py-1 rounded-full text-sm font-medium ${
            tab === "carrito" ? "bg-white shadow" : "text-gray-600 hover:text-black"
          }`}
          onClick={() => setTab("carrito")}
        >
          Carrito
        </button>

        <button
          className={`px-4 py-1 rounded-full text-sm font-medium ${
            tab === "servicios" ? "bg-white shadow" : "text-gray-600 hover:text-black"
          }`}
          onClick={() => setTab("servicios")}
        >
          Servicios
        </button>

        <button
          className={`px-4 py-1 rounded-full text-sm font-medium ${
            tab === "reservar" ? "bg-white shadow" : "text-gray-600 hover:text-black"
          }`}
          onClick={() => setTab("reservar")}
        >
          Reservar
        </button>

        <button
          className={`px-4 py-1 rounded-full text-sm font-medium ${
            tab === "empresa" ? "bg-white shadow" : "text-gray-600 hover:text-black"
          }`}
          onClick={() => setTab("empresa")}
        >
          Empresa
        </button>
      </div>

      {/* Contenido dinámico */}
      {tab === "carrito" && (
        <>
          <ShoppingCart className="w-16 h-16 text-gray-400 mb-4" />
          <p className="text-gray-500 text-lg">Tu carrito está vacío</p>
        </>
      )}

      {tab === "servicios" && <Servicios />}
      {tab === "reservar" && <Reserva />}
      {tab === "empresa" && <Empresa />}
    </div>
  );
}
