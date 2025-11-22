"use client";

import TabsBar from "../TabsBar";
import { Building2 } from "lucide-react";

export default function EmpresaPage() {
  return (
    <div className="px-4 pb-24">
      <TabsBar active="Empresa" />

      <div className="bg-white border rounded-xl p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <Building2 className="text-orange-600" size={22} />
          <p className="font-semibold">Pedidos Corporativos</p>
        </div>

        <p className="text-sm text-gray-600 mb-3">
          Realiza pedidos grandes para empresas con descuentos especiales
        </p>

        <label className="text-sm text-gray-600">Nombre de empresa</label>
        <input
          className="w-full bg-gray-100 px-3 py-2 rounded-lg mt-1 mb-3"
          placeholder="Mi Empresa S.R.L."
        />

        <label className="text-sm text-gray-600">NIT</label>
        <input
          className="w-full bg-gray-100 px-3 py-2 rounded-lg mt-1 mb-3"
          placeholder="1234567890"
        />

        <p className="text-sm text-gray-600 mb-2">Tipo de pedido</p>

        <div className="flex gap-2 mb-3">
          <button className="flex-1 bg-gray-200 text-gray-600 py-2 rounded-lg">
            Pedido Único
          </button>
          <button className="flex-1 bg-orange-600 text-white py-2 rounded-lg">
            Pedido Mensual
          </button>
        </div>

        <label className="text-sm text-gray-600">Detalle del pedido</label>
        <textarea
          className="w-full bg-gray-100 px-3 py-2 rounded-lg mt-1 mb-3"
          placeholder="Describe los productos que necesitas..."
        />

        <button className="w-full bg-orange-600 text-white py-2 rounded-lg">
          Solicitar Cotización
        </button>
      </div>
    </div>
  );
}
