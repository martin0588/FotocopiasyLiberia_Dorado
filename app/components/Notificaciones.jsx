import { useState } from "react";
import { Bell, Tag, Package, Percent, Lightbulb } from "lucide-react";

// Componente individual de notificación
function NotificacionItem({ notificacion }) {
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

// Componente de lista de notificaciones
function NotificacionesList({ notificaciones }) {
  if (!notificaciones || notificaciones.length === 0) {
    return (
      <div className="text-center py-12">
        <Bell size={48} className="mx-auto text-gray-300 mb-4" />
        <p className="text-gray-500">No tienes notificaciones</p>
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {notificaciones.map((notificacion) => (
        <NotificacionItem key={notificacion.id} notificacion={notificacion} />
      ))}
    </div>
  );
}

// Componente principal
export default function Notificaciones() {
  const [notificaciones] = useState([
    {
      id: 1,
      tipo: "oferta",
      titulo: "15% OFF en Papel Bond",
      descripcion: "Descuento especial válido hasta el 30 de noviembre",
      tiempo: "Hace 2 horas",
      esNuevo: true,
      boton: true,
    },
    {
      id: 2,
      tipo: "reserva",
      titulo: "Reserva #RES-002 está lista",
      descripcion: "Tu reserva está lista para recoger en tienda",
      tiempo: "Hace 5 horas",
      esNuevo: true,
      boton: true,
    },
    {
      id: 3,
      tipo: "promocion",
      titulo: "Combo 3x2 en Bolígrafos",
      descripcion: "Oferta especial: lleva 3 packs y paga solo 2",
      tiempo: "Hace 2 días",
      esNuevo: false,
      boton: false,
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      {/* Header */}
      <div className="bg-white px-4 py-4 border-b border-gray-200 flex items-center justify-between">
        <h1 className="text-lg font-semibold text-gray-800">Notificaciones</h1>
        <Bell className="text-amber-500" size={24} />
      </div>

      <div className="px-4 py-4 space-y-4">
        {/* Lista de notificaciones */}
        <NotificacionesList notificaciones={notificaciones} />

        {/* Consejo */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3">
          <Lightbulb size={20} className="text-amber-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-amber-800 mb-1">Consejo</p>
            <p className="text-xs text-amber-700 leading-relaxed">
              Mantente atento a las notificaciones para no perderte descuentos especiales en tus productos favoritos.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}