import { useState } from "react";
import { Bell, Tag, Package, Percent, Lightbulb } from "lucide-react";

// ----------------------------------------------------
// COMPONENTE INDIVIDUAL DE NOTIFICACIÓN (DISEÑO FIGMA)
// ----------------------------------------------------
function NotificacionItem({ notificacion }) {
  const { tipo, titulo, descripcion, tiempo } = notificacion;

  const iconos = {
    oferta: <Tag size={20} className="text-amber-500" />,
    reserva: <Package size={20} className="text-amber-500" />,
    promocion: <Percent size={20} className="text-amber-500" />,
  };

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-4 shadow-sm">
      <div className="flex gap-3">
        {/* Ícono */}
        <div className="shrink-0 mt-0.5">
          {iconos[tipo] || iconos.oferta}
        </div>

        {/* Contenido */}
        <div className="flex-1">
          <h3 className="font-semibold text-gray-800 text-sm mb-1">
            {titulo}
          </h3>

          <p className="text-sm text-gray-500">{descripcion}</p>

          <p className="text-xs text-gray-400 mt-1">{tiempo}</p>
        </div>
      </div>
    </div>
  );
}

// ----------------------------------------------------
// LISTA DE NOTIFICACIONES
// ----------------------------------------------------
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
      {notificaciones.map((n) => (
        <NotificacionItem key={n.id} notificacion={n} />
      ))}
    </div>
  );
}

// ----------------------------------------------------
// PANTALLA COMPLETA (LA QUE IMPORTAS EN TU APP)
// ----------------------------------------------------
export default function Notificaciones() {
  const [notificaciones] = useState([
    {
      id: 1,
      tipo: "promocion",
      titulo: "Combo 3x2 en Bolígrafos",
      descripcion: "Oferta especial: lleva 3 packs y paga solo 2",
      tiempo: "Hace 2 días",
    },
    {
      id: 2,
      tipo: "promocion",
      titulo: "Descuento en Cuadernos A4",
      descripcion: "20% de descuento en cuadernos de 100 hojas",
      tiempo: "Hace 3 días",
    },
    {
      id: 3,
      tipo: "promocion",
      titulo: "Pack de Marcadores",
      descripcion: "2 sets de marcadores al precio de 1",
      tiempo: "Hace 4 días",
    },
    {
      id: 4,
      tipo: "promocion",
      titulo: "Carpetas y Archivadores",
      descripcion: "Compra 5 y llévate 6",
      tiempo: "Hace 5 días",
    },
    {
      id: 5,
      tipo: "oferta",
      titulo: "Tijeras y Pegamento",
      descripcion: "15% de descuento en artículos de corte y pegado",
      tiempo: "Hace 1 semana",
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-100 pb-20">

      {/* Header superior */}
      <div className="bg-white px-4 py-4 border-b border-gray-200 flex items-center justify-between">
        <h1 className="text-lg font-semibold text-gray-800">Notificaciones</h1>
        <Bell className="text-amber-500" size={24} />
      </div>

      {/* Contenido */}
      <div className="px-4 py-4 space-y-4">
        
        {/* Lista */}
        <NotificacionesList notificaciones={notificaciones} />

        {/* Consejo */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3">
          <Lightbulb size={20} className="text-amber-500 shrink-0 mt-0.5"
          />
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
