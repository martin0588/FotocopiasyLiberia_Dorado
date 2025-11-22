import React, { useState } from "react";
import { FileText, BookOpen } from "lucide-react";

export default function Servicios() {
  const [fotocopias, setFotocopias] = useState({ paginas: 1, copias: 1, notas: "" });
  const [empastado, setEmpastado] = useState({ tipo: "Anillado", detalles: "" });

  return (
    <div className="w-full flex flex-col items-center p-6 text-center">
      <div className="grid grid-cols-1 gap-6 w-full max-w-md">
        {/* Fotocopias */}
        <div className="border rounded-2xl p-5 shadow-sm text-left bg-white">
          <div className="flex items-center gap-2 mb-3">
            <FileText className="text-orange-500" />
            <h2 className="font-semibold text-lg">Fotocopias</h2>
          </div>

          <label className="text-sm font-medium">Número de páginas</label>
          <input
            type="number"
            className="w-full mt-1 mb-3 p-2 bg-gray-100 rounded-lg"
            value={fotocopias.paginas}
            onChange={(e) => setFotocopias({ ...fotocopias, paginas: e.target.value })}
          />

          <label className="text-sm font-medium">Cantidad de copias</label>
          <input
            type="number"
            className="w-full mt-1 mb-3 p-2 bg-gray-100 rounded-lg"
            value={fotocopias.copias}
            onChange={(e) => setFotocopias({ ...fotocopias, copias: e.target.value })}
          />

          <label className="text-sm font-medium">Notas adicionales</label>
          <textarea
            className="w-full mt-1 p-2 bg-gray-100 rounded-lg"
            placeholder="Ej: a color, doble cara, anillado..."
            value={fotocopias.notas}
            onChange={(e) => setFotocopias({ ...fotocopias, notas: e.target.value })}
          />

          <p className="text-sm text-gray-500 mt-2">Precio estimado: Bs. 0.20</p>

          <button className="w-full bg-orange-500 text-white mt-4 p-2 rounded-lg font-medium">
            Encargar Fotocopias
          </button>
        </div>

        {/* Empastados */}
        <div className="border rounded-2xl p-5 shadow-sm text-left bg-white">
          <div className="flex items-center gap-2 mb-3">
            <BookOpen className="text-orange-500" />
            <h2 className="font-semibold text-lg">Empastados</h2>
          </div>

          <label className="text-sm font-medium">Tipo de empastado</label>
          <div className="flex gap-2 my-2">
            <button
              className={`px-4 py-1 rounded-lg border ${empastado.tipo === "Anillado" ? "bg-orange-500 text-white" : "bg-white"}`}
              onClick={() => setEmpastado({ ...empastado, tipo: "Anillado" })}
            >
              Anillado
            </button>
            <button
              className={`px-4 py-1 rounded-lg border ${empastado.tipo === "Tapa Dura" ? "bg-orange-500 text-white" : "bg-white"}`}
              onClick={() => setEmpastado({ ...empastado, tipo: "Tapa Dura" })}
            >
              Tapa Dura
            </button>
          </div>

          <label className="text-sm font-medium">Detalles del documento</label>
          <textarea
            className="w-full mt-1 p-2 bg-gray-100 rounded-lg"
            placeholder="Cantidad de páginas, tipo de papel, etc."
            value={empastado.detalles}
            onChange={(e) => setEmpastado({ ...empastado, detalles: e.target.value })}
          />

          <p className="text-sm text-gray-500 mt-2">Precio desde: Bs. 15.00</p>

          <button className="w-full bg-orange-500 text-white mt-4 p-2 rounded-lg font-medium">
            Encargar Empastado
          </button>
        </div>
      </div>
    </div>
  );
}
