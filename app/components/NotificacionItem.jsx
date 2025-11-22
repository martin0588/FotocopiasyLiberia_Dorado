import { Tag, Package, Percent } from "lucide-react";

export default function NotificacionItem({ notificacion }) {
  const { tipo, titulo, descripcion, tiempo, esNuevo, boton } = notificacion;

  const iconos = {
    oferta: <Tag size={20} className="text-amber-500" />,
    reserva: <Package size={20} className="text-amber-500" />,
    promocion: <Percent size={20} className="text-amber-500" />,
  };

  const botones = {
    oferta: {
      texto: "Ver Oferta",
      estilo: "bg-amber-500 hover:bg-amber-600 text-white",
    },
    reserva: {
      texto: "Ver Reserva",
      estilo: "bg-white hover:bg-gray-50 text-amber-600 border-2 border-amber-500",
    },
  };

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-4">
        {/* Header de la notificación */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex gap-3 flex-1">
            <div className="shrink-0 mt-0.5">
              {iconos[tipo] || iconos.oferta}
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-1">
                <h3 className="font-semibold text-gray-800 text-sm">{titulo}</h3>
                {esNuevo && (
                  <span className="bg-amber-500 text-white text-xs px-2 py-0.5 rounded-full font-medium">
                    Nuevo
                  </span>
                )}
              </div>
              <p className="text-sm text-gray-500">{descripcion}</p>
              <p className="text-xs text-gray-400 mt-1">{tiempo}</p>
            </div>
          </div>
        </div>

        {/* Botón de acción */}
        {boton && botones[tipo] && (
          <button
            className={`w-full mt-3 py-2.5 rounded-lg font-medium text-sm transition-colors ${botones[tipo].estilo}`}
          >
            {botones[tipo].texto}
          </button>
        )}
      </div>
    </div>
  );
}