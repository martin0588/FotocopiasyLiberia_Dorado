import { Building2 } from "lucide-react";
import { useState } from "react";

export default function Empresa() {
  const [empresa, setEmpresa] = useState("");
  const [nit, setNit] = useState("");
  const [tipo, setTipo] = useState("único");
  const [detalle, setDetalle] = useState("");

  return (
    <div className="w-full flex flex-col items-center p-6 text-center">
      <div className="w-full max-w-md border rounded-2xl p-5 shadow-sm bg-white text-left">

        {/* Título */}
        <div className="flex items-center gap-2 mb-3">
          <Building2 className="text-orange-500" />
          <h2 className="font-semibold text-lg">Pedidos Corporativos</h2>
        </div>

        <p className="text-gray-500 text-sm mb-4">
          Realiza pedidos grandes para empresas con descuentos especiales
        </p>

        {/* Nombre empresa */}
        <label className="text-sm font-medium">Nombre de empresa</label>
        <input
          type="text"
          className="w-full mt-1 mb-3 p-2 bg-gray-100 rounded-lg"
          placeholder="Mi Empresa S.R.L."
          value={empresa}
          onChange={(e) => setEmpresa(e.target.value)}
        />

        {/* NIT */}
        <label className="text-sm font-medium">NIT</label>
        <input
          type="text"
          className="w-full mt-1 mb-4 p-2 bg-gray-100 rounded-lg"
          placeholder="1234567890"
          value={nit}
          onChange={(e) => setNit(e.target.value)}
        />

        {/* Tipo de pedido */}
        <label className="text-sm font-medium">Tipo de pedido</label>
        <div className="flex gap-2 my-2">
          <button
            className={`px-4 py-1 rounded-lg border ${
              tipo === "único"
                ? "bg-orange-500 text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setTipo("único")}
          >
            Pedido Único
          </button>

          <button
            className={`px-4 py-1 rounded-lg border ${
              tipo === "mensual"
                ? "bg-orange-500 text-white"
                : "bg-white text-black"
            }`}
            onClick={() => setTipo("mensual")}
          >
            Pedido Mensual
          </button>
        </div>

        {/* Detalle */}
        <label className="text-sm font-medium">Detalle del pedido</label>
        <textarea
          className="w-full mt-1 mb-4 p-2 bg-gray-100 rounded-lg"
          placeholder="Describe los productos que necesitas..."
          value={detalle}
          onChange={(e) => setDetalle(e.target.value)}
        />

        {/* Botón */}
        <button className="w-full bg-orange-500 text-white mt-2 p-2 rounded-lg font-medium">
          Solicitar Cotización
        </button>
      </div>
    </div>
  );
}
