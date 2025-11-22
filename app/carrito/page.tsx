"use client";

import { useCart } from "@/context/CartContext";
import TabsBar from "./TabsBar";
import { Trash2, Minus, Plus, ShoppingCart } from "lucide-react";

export default function CarritoPage() {
  const { cart, totalPrice, increaseQty, decreaseQty, removeFromCart, clearCart } = useCart();

  return (
    <div className="px-4 pb-24">

      {/* Tabs Superiores */}
      <TabsBar active="Carrito" />

      {/* Carrito vacío */}
      {cart.length === 0 && (
        <div className="flex flex-col items-center mt-16 text-gray-400">
          <ShoppingCart size={48} />
          <p className="mt-2 text-sm">Tu carrito está vacío</p>
        </div>
      )}

      {/* Carrito con productos */}
      {cart.length > 0 && (
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex justify-between bg-white rounded-xl p-3 shadow-sm border"
            >
              {/* Imagen */}
              <img
                src={item.image || "/next.svg"}
                alt={item.name}
                className="w-16 h-16 rounded-lg object-cover"
              />

              {/* Info */}
              <div className="flex-1 px-3">
                <p className="font-semibold text-sm">{item.name}</p>
                <p className="text-xs text-gray-500">{item.category}</p>

                {/* Cantidad */}
                <div className="flex items-center mt-2 gap-2">
                  <button
                    className="p-1 border rounded"
                    onClick={() => decreaseQty(item.id)}
                  >
                    <Minus size={16} />
                  </button>

                  <span className="text-sm">{item.qty}</span>

                  <button
                    className="p-1 border rounded"
                    onClick={() => increaseQty(item.id)}
                  >
                    <Plus size={16} />
                  </button>
                </div>
              </div>

              {/* Precio + eliminar */}
              <div className="flex flex-col items-end justify-between">
                <button onClick={() => removeFromCart(item.id)}>
                  <Trash2 size={18} className="text-red-400" />
                </button>
                <p className="font-semibold text-orange-600">Bs. {item.price}</p>
              </div>
            </div>
          ))}

          {/* Total */}
          <div className="bg-orange-50 border rounded-xl p-4">
            <div className="flex justify-between">
              <p className="font-semibold">Total:</p>
              <p className="font-semibold text-orange-600">Bs. {totalPrice.toFixed(2)}</p>
            </div>

            <button className="w-full bg-orange-600 text-white py-2 rounded-lg mt-3">
              Finalizar Compra
            </button>

            <button
              onClick={clearCart}
              className="w-full text-center mt-3 text-gray-500 text-sm"
            >
              Vaciar Carrito
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
