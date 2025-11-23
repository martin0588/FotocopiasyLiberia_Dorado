"use client";

import { useCart } from "./CartContext";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useState } from "react";
import Reservas from "./Reservas";   // ← Para mostrar Mis Reservas

export default function CarritoPage() {
  const { cart, addToCart, decreaseQty, removeFromCart, clearCart } = useCart();
  const [tab, setTab] = useState("carrito");

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <div className="px-4 py-4 max-w-xl mx-auto text-gray-900">

      {/* Título */}
      <div className="flex items-center gap-2 mb-3">
        <span className="text-orange-600 text-xl">🛒</span>
        <h1 className="text-lg font-bold">Mi Carrito</h1>
      </div>

      {/* Tabs */}
      <div className="bg-gray-200 rounded-full p-1 flex mb-4">
        <button
          className={`flex-1 py-2 rounded-full text-sm font-semibold ${
            tab === "carrito" ? "bg-white shadow text-black" : "text-gray-600"
          }`}
          onClick={() => setTab("carrito")}
        >
          Carrito
        </button>

        <button
          className={`flex-1 py-2 rounded-full text-sm font-semibold ${
            tab === "reservar" ? "bg-white shadow text-black" : "text-gray-600"
          }`}
          onClick={() => setTab("reservar")}
        >
          Reservar
        </button>

        <button
          className={`flex-1 py-2 rounded-full text-sm font-semibold ${
            tab === "reservas" ? "bg-white shadow text-black" : "text-gray-600"
          }`}
          onClick={() => setTab("reservas")}
        >
          Mis Reservas
        </button>
      </div>

      {/* TAB CARRITO */}
      {tab === "carrito" && (
        <>
          <div className="space-y-4">
            {cart.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-white p-3 rounded-xl shadow"
              >
                <img
                  src={item.image}
                  className="w-16 h-16 rounded-lg object-cover"
                />

                <div className="ml-3 flex-1">
                  <h3 className="font-semibold text-sm text-black">{item.title}</h3>
                  <p className="text-xs text-gray-600">{item.category}</p>

                  {/* BOTONES +/- */}
                  <div className="flex items-center gap-2 mt-2">
                    <button
                      onClick={() => decreaseQty(item.id)}
                      className="bg-gray-200 text-gray-700 w-7 h-7 rounded-full flex items-center justify-center"
                    >
                      <Minus size={14} />
                    </button>

                    <span className="font-semibold">{item.qty}</span>

                    <button
                      onClick={() => addToCart({ ...item, qty: 1 })}
                      className="bg-gray-200 text-gray-700 w-7 h-7 rounded-full flex items-center justify-center"
                    >
                      <Plus size={14} />
                    </button>
                  </div>
                </div>

                {/* PRECIO Y PAPELERA */}
                <div className="flex flex-col items-end gap-2">
                  <p className="font-semibold text-sm text-black">
                    Bs. {(item.price * item.qty).toFixed(2)}
                  </p>

                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-red-500"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* TOTAL Y BOTONES */}
          {cart.length > 0 && (
            <div className="mt-6 bg-orange-50 rounded-xl p-4 shadow">
              <p className="font-bold text-lg flex justify-between text-black">
                <span>Total:</span>
                <span>Bs. {total.toFixed(2)}</span>
              </p>

              {/* FINALIZAR COMPRA → CAMBIA A "Mis Reservas" */}
              <button
                onClick={() => setTab("reservas")}
                className="w-full bg-orange-500 text-white mt-3 py-2 rounded-xl font-semibold"
              >
                Finalizar Compra
              </button>

              <button
                onClick={clearCart}
                className="w-full text-gray-700 mt-2 py-2 rounded-xl font-semibold"
              >
                Vaciar Carrito
              </button>
            </div>
          )}
        </>
      )}

      {/* TAB RESERVAR */}
      {tab === "reservar" && (
        <div className="bg-white rounded-xl shadow p-5 mt-4">

          <div className="flex items-center gap-2 mb-4">
            <span className="text-orange-600 text-xl">📄</span>
            <h2 className="text-lg font-semibold text-black">Solicitar Reserva</h2>
          </div>

          <p className="text-gray-700 text-sm mb-4">
            Describe qué productos deseas reservar.
          </p>

          <label className="font-semibold text-sm">¿Qué deseas reservar?</label>

          <textarea
            className="w-full bg-gray-100 mt-2 p-3 rounded-lg text-sm focus:outline-none"
            rows={4}
            placeholder="Ej: 5 cuadernos de 100 hojas, 2 packs de bolígrafos..."
          />

          <button className="w-full bg-orange-400 text-white font-semibold py-2 rounded-xl mt-4">
            Enviar Solicitud
          </button>

        </div>
      )}

      {/* TAB MIS RESERVAS (muestra componente Reservas.jsx) */}
      {tab === "reservas" && (
        <div className="mt-4">
          <Reservas />
        </div>
      )}
    </div>
  );
}
