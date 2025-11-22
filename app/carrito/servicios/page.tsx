"use client";

import TabsBar from "../TabsBar";
import { FileText, BookOpen } from "lucide-react";

export default function ServiciosPage() {
  return (
    <div className="px-4 pb-24">
      <TabsBar active="Servicios" />

      {/* FOTOCOPIAS */}
      <div className="bg-white border rounded-xl p-4 shadow-sm mb-4">
        <div className="flex items-center gap-2 mb-3">
          <FileText className="text-orange-600" size={22} />
          <p className="font-semibold">Fotocopias</p>
        </div>

        <label className="text-sm text-gray-600">Número de páginas</label>
        <input
          type="number"
          className="w-full bg-gray-100 rounded-lg px-3 py-2 mt-1 mb-3"
          placeholder="1"
        />

        <label className="text-sm text-gray-600">Cantidad de copias</label>
        <input
          type="number"
          className="w-full bg-gray-100 rounded-lg px-3 py-2 mt-1 mb-3"
          placeholder="1"
        />

        <label className="text-sm text-gray-600">Notas adicionales</label>
        <textarea
          className="w-full bg-gray-100 rounded-lg px-3 py-2 mt-1"
          placeholder="Ej: a color, doble cara, anillado..."
        />

        <p className="text-xs text-gray-500 mt-2">
          Precio estimado: <span className="font-semibold">Bs. 0.20</span>
        </p>

        <button className="mt-3 w-full bg-orange-600 text-white py-2 rounded-lg">
          Encargar Fotocopias
        </button>
      </div>

      {/* EMPASTADOS */}
      <div className="bg-white border rounded-xl p-4 shadow-sm">
        <div className="flex items-center gap-2 mb-3">
          <BookOpen className="text-orange-600" size={22} />
          <p className="font-semibold">Empastados</p>
        </div>

        <p className="text-sm mb-2">Tipo de empastado</p>

        <div className="flex gap-2 mb-3">
          <button className="flex-1 bg-orange-600 text-white py-2 rounded-lg">
            Anillado
          </button>
          <button className="flex-1 bg-gray-200 text-gray-600 py-2 rounded-lg">
            Tapa Dura
          </button>
        </div>

        <label className="text-sm text-gray-600">Detalles del documento</label>
        <textarea
          className="w-full bg-gray-100 rounded-lg px-3 py-2 mt-1"
          placeholder="Cantidad de páginas, tipo de papel, etc..."
        />

        <p className="text-xs text-gray-500 mt-2">
          Precio desde: <span className="font-semibold">Bs. 15.00</span>
        </p>

        <button className="mt-3 w-full bg-orange-600 text-white py-2 rounded-lg">
          Encargar Empastado
        </button>
      </div>
    </div>
  );
}
