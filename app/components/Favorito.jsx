import { useState } from "react";
import { Heart, Gift } from "lucide-react";

export default function Favorito() {
  const [activeTab, setActiveTab] = useState("favoritos");

  const tabs = [
    { id: "favoritos", label: "Favoritos" },
    { id: "ofertas", label: "Ofertas" },
    { id: "puntos", label: "Puntos" },
  ];

  const ofertas = [
    {
      id: 1,
      titulo: "15% OFF en Cuadernos",
      badge: "15%",
      badgeColor: "bg-amber-500",
      descripcion: "Válido en toda la línea de cuadernos universitarios",
      validoHasta: "30 Nov 2025",
    },
    {
      id: 2,
      titulo: "Combo 3x2 en Bolígrafos",
      badge: "3x2",
      badgeColor: "bg-green-500",
      descripcion: "Lleva 3 packs y paga solo 2",
      validoHasta: "15 Dic 2025",
    },
    {
      id: 3,
      titulo: "Pack Estudiante -20%",
      badge: "20%",
      badgeColor: "bg-amber-500",
      descripcion: "Descuento en combos de útiles escolares",
      validoHasta: "31 Dic 2025",
    },
  ];

  const comoGanar = [
    { titulo: "Por cada compra", descripcion: "1 punto por cada Bs. 10 gastados", puntos: "+10 pts" },
    { titulo: "Por dejar una reseña", descripcion: "Califica productos comprados", puntos: "+5 pts" },
    { titulo: "Cumpleaños", descripcion: "Regalo especial", puntos: "+50 pts" },
  ];

  const canjear = [
    { descuento: "Bs. 5", descripcion: "En tu próxima compra", puntos: "100 pts" },
    { descuento: "Bs. 15", descripcion: "En tu próxima compra", puntos: "250 pts" },
    { descuento: "Bs. 30", descripcion: "En tu próxima compra", puntos: "500 pts" },
  ];

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      {/* Header */}
      <div className="bg-white px-4 py-4 border-b border-gray-200">
        <h1 className="text-lg font-semibold text-gray-800">
          Favoritos y Beneficios
        </h1>
      </div>

      {/* Tabs */}
      <div className="bg-white px-4">
        <div className="flex border-b border-gray-200">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 text-sm font-medium transition-colors relative ${
                activeTab === tab.id
                  ? "text-gray-900"
                  : "text-gray-500 hover:text-gray-700"
              }`}
            >
              {tab.label}
              {activeTab === tab.id && (
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber-500" />
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="px-4 py-4">
        
        {/* TAB FAVORITOS */}
        {activeTab === "favoritos" && (
          <div className="flex flex-col items-center justify-center py-16">
            <Heart size={64} className="text-gray-300 mb-6" strokeWidth={1} />
            <h2 className="text-lg font-medium text-gray-700 mb-2">
              No tienes productos favoritos
            </h2>
            <p className="text-sm text-gray-400 text-center">
              Presiona el <Heart size={14} className="inline text-gray-400" /> en los productos que te gusten
            </p>
          </div>
        )}

        {/* TAB OFERTAS */}
        {activeTab === "ofertas" && (
          <div>
            {/* Header Ofertas */}
            <div className="text-center mb-4">
              <h2 className="text-amber-500 font-bold text-lg flex items-center justify-center gap-2">
                <span className="text-xl">%</span> Ofertas Especiales
              </h2>
              <p className="text-gray-500 text-sm">
                Aprovecha nuestras promociones exclusivas
              </p>
            </div>

            {/* Lista de Ofertas */}
            <div className="space-y-3">
              {ofertas.map((oferta) => (
                <div
                  key={oferta.id}
                  className="bg-white rounded-xl p-4 shadow-sm border border-gray-100"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-gray-800">
                          {oferta.titulo}
                        </h3>
                        <span className={`${oferta.badgeColor} text-white text-xs px-2 py-0.5 rounded-full font-medium`}>
                          {oferta.badge}
                        </span>
                      </div>
                      <p className="text-sm text-gray-500 mb-2">
                        {oferta.descripcion}
                      </p>
                      <p className="text-xs text-gray-400">
                        Válido hasta: {oferta.validoHasta}
                      </p>
                    </div>
                    <button className="bg-amber-500 hover:bg-amber-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors">
                      Ver Productos
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* TAB PUNTOS */}
        {activeTab === "puntos" && (
          <div>
            {/* Header Puntos */}
            <div className="bg-gradient-to-r from-amber-500 to-amber-400 rounded-2xl p-6 text-center text-white mb-4">
              <Gift size={40} className="mx-auto mb-2" />
              <h2 className="text-3xl font-bold">250 Puntos</h2>
              <p className="text-amber-100 text-sm">Tu saldo actual</p>
            </div>

            {/* Cómo ganar puntos */}
            <div className="bg-white rounded-xl p-4 shadow-sm mb-4">
              <h3 className="font-semibold text-gray-800 mb-3">¿Cómo ganar puntos?</h3>
              <div className="space-y-3">
                {comoGanar.map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-l-4 border-amber-400 pl-3 bg-amber-50 rounded-r-lg">
                    <div>
                      <p className="font-medium text-gray-800 text-sm">{item.titulo}</p>
                      <p className="text-xs text-gray-500">{item.descripcion}</p>
                    </div>
                    <span className="bg-green-500 text-white text-xs px-2 py-1 rounded-full font-medium">
                      {item.puntos}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Canjear Puntos */}
            <div className="bg-white rounded-xl p-4 shadow-sm">
              <h3 className="font-semibold text-gray-800 mb-3">Canjear Puntos</h3>
              <div className="space-y-3">
                {canjear.map((item, i) => (
                  <div key={i} className="flex items-center justify-between py-2 border-l-4 border-gray-300 pl-3 bg-gray-50 rounded-r-lg">
                    <div>
                      <p className="font-medium text-gray-800 text-sm">Descuento {item.descuento}</p>
                      <p className="text-xs text-gray-500">{item.descripcion}</p>
                    </div>
                    <span className="bg-amber-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                      {item.puntos}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}