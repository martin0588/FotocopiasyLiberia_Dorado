"use client";

import { useCart } from "./CartContext";
import { Minus, Plus, Trash2, Tag } from "lucide-react";
import { useState } from "react";
import { useReservas } from "./ReservasContext";

export default function CarritoPage() {
  const { cart, addToCart, decreaseQty, removeFromCart, clearCart } = useCart();
  const { agregarReserva } = useReservas();

  const [tab, setTab] = useState("carrito");
  const [solicitudTexto, setSolicitudTexto] = useState("");

  // ✅ Calcular cantidad total de productos
  const cantidadTotal = cart.reduce((sum, item) => sum + (item.qty || 1), 0);

  // ✅ Determinar si aplica descuento
  const aplicaDescuento = cantidadTotal >= 5;
  const porcentajeDescuento = aplicaDescuento ? 5 : 0;

  // ✅ Calcular subtotal (sin descuento)
  const subtotal = cart.reduce(
    (sum, item) => sum + Number(item.price || 0) * (item.qty || 1),
    0
  );

  // ✅ Calcular descuento
  const descuento = aplicaDescuento ? subtotal * 0.05 : 0;

  // ✅ Calcular total final
  const total = subtotal - descuento;

  const generarReserva = () => {
    if (cart.length === 0) return;
    agregarReserva(cart);
    clearCart();
  };

  const generarSolicitudReserva = () => {
    if (!solicitudTexto.trim()) return;

    const solicitud = [
      {
        id: "SOLICITUD",
        title: "Solicitud personalizada",
        category: "Solicitud",
        description: solicitudTexto,
        qty: 1,
        price: 0,
        image: "",
        isTop: false
      }
    ];

    agregarReserva(solicitud);
    setSolicitudTexto("");
  };

  return (
    <div className="px-4 py-4 max-w-xl mx-auto text-gray-900 pb-20">
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
      </div>

      {/* TAB: CARRITO */}
      {tab === "carrito" && (
        <>
          {/* 🎉 Banner de Descuento */}
          {cantidadTotal >= 3 && cantidadTotal < 5 && (
            <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 mb-4 flex gap-3">
              <Tag size={20} className="text-amber-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-amber-800">
                  ¡Casi ahí! 🎉
                </p>
                <p className="text-xs text-amber-700">
                  Agrega {5 - cantidadTotal} producto{5 - cantidadTotal > 1 ? "s" : ""} más para obtener 5% de descuento
                </p>
              </div>
            </div>
          )}

          {aplicaDescuento && (
            <div className="bg-green-50 border border-green-200 rounded-xl p-3 mb-4 flex gap-3">
              <Tag size={20} className="text-green-600 shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-medium text-green-800">
                  ✅ Descuento Aplicado
                </p>
                <p className="text-xs text-green-700">
                  Tienes {cantidadTotal} productos. ¡Disfrutá tu 5% de descuento!
                </p>
              </div>
            </div>
          )}

          {/* Lista de productos */}
          <div className="space-y-4">
            {cart.map((item) => {
              const safePrice = Number(item.price || 0);
              const qty = item.qty || 1;

              return (
                <div
                  key={item.id}
                  className="flex items-center bg-white p-3 rounded-xl shadow"
                >
                  <img
                    src={item.image}
                    className="w-16 h-16 rounded-lg object-cover"
                    alt={item.title}
                  />

                  <div className="ml-3 flex-1">
                    <h3 className="font-semibold text-sm text-black">
                      {item.title}
                    </h3>
                    <p className="text-xs text-gray-600">{item.category}</p>

                    <div className="flex items-center gap-2 mt-2">
                      <button
                        onClick={() => decreaseQty(item.id)}
                        className="bg-gray-200 text-gray-700 w-7 h-7 rounded-full flex items-center justify-center"
                      >
                        <Minus size={14} />
                      </button>

                      <span className="font-semibold">{qty}</span>

                      <button
                        onClick={() => addToCart(item)}
                        className="bg-gray-200 text-gray-700 w-7 h-7 rounded-full flex items-center justify-center"
                      >
                        <Plus size={14} />
                      </button>
                    </div>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <p className="font-semibold text-sm text-black">
                      Bs. {(safePrice * qty).toFixed(2)}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500"
                    >
                      <Trash2 size={18} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Resumen de compra */}
          {cart.length > 0 && (
            <div className="mt-6 bg-orange-50 rounded-xl p-4 shadow">
              <div className="space-y-2 mb-3">
                <div className="flex justify-between text-sm text-gray-700">
                  <span>Subtotal ({cantidadTotal} producto{cantidadTotal !== 1 ? "s" : ""}):</span>
                  <span>Bs. {subtotal.toFixed(2)}</span>
                </div>

                {aplicaDescuento && (
                  <div className="flex justify-between text-sm text-green-600 font-medium">
                    <span>Descuento ({porcentajeDescuento}%):</span>
                    <span>- Bs. {descuento.toFixed(2)}</span>
                  </div>
                )}

                <div className="border-t border-orange-200 pt-2">
                  <div className="flex justify-between text-lg font-bold text-black">
                    <span>Total:</span>
                    <span>Bs. {total.toFixed(2)}</span>
                  </div>
                  {aplicaDescuento && (
                    <p className="text-xs text-green-600 text-right mt-1">
                      Ahorraste Bs. {descuento.toFixed(2)}
                    </p>
                  )}
                </div>
              </div>

              <button
                onClick={generarReserva}
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

          {cart.length === 0 && (
            <div className="text-center text-gray-500 mt-6 text-sm">
              Tu carrito está vacío.
            </div>
          )}
        </>
      )}

      {/* TAB: RESERVAR */}
      {tab === "reservar" && (
        <div className="bg-white rounded-xl shadow p-5 mt-4">
          <h2 className="text-lg font-semibold text-black mb-4">
            Solicitar Reserva
          </h2>

          <textarea
            className="w-full bg-gray-100 mt-2 p-3 rounded-lg text-sm focus:outline-none"
            rows={4}
            placeholder="Ej: 5 cuadernos de 100 hojas..."
            value={solicitudTexto}
            onChange={(e) => setSolicitudTexto(e.target.value)}
          />

          <button
            onClick={generarSolicitudReserva}
            className="w-full bg-orange-400 text-white font-semibold py-2 rounded-xl mt-4"
          >
            Enviar Solicitud
          </button>
        </div>
      )}
    </div>
  );
}