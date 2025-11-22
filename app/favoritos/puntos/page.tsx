import TabsBarFav from "../TabsBarFav";

export default function PuntosPage() {
  return (
    <div className="px-4 pb-24">
      <TabsBarFav active="Puntos" />

      {/* Tarjeta principal */}
      <div className="bg-gradient-to-br from-orange-400 to-orange-600 text-white p-6 rounded-xl shadow text-center mb-4">
        <div className="text-5xl mb-2">🎁</div>
        <p className="text-3xl font-bold">250 Puntos</p>
        <p className="text-sm">Tu saldo actual</p>
      </div>

      {/* Cómo ganar puntos */}
      <div className="bg-white border rounded-xl p-4 shadow-sm mb-4">
        <p className="font-semibold mb-3">¿Cómo ganar puntos?</p>

        <div className="space-y-3">
          <div className="bg-orange-50 rounded-lg p-3 flex justify-between">
            <span className="text-sm">Por cada compra</span>
            <span className="bg-orange-600 text-white text-xs px-2 py-1 rounded-md">
              +10 pts
            </span>
          </div>

          <div className="bg-orange-50 rounded-lg p-3 flex justify-between">
            <span className="text-sm">Por dejar una reseña</span>
            <span className="bg-orange-600 text-white text-xs px-2 py-1 rounded-md">
              +5 pts
            </span>
          </div>

          <div className="bg-orange-50 rounded-lg p-3 flex justify-between">
            <span className="text-sm">Cumpleaños</span>
            <span className="bg-orange-600 text-white text-xs px-2 py-1 rounded-md">
              +50 pts
            </span>
          </div>
        </div>
      </div>

      {/* Canjear puntos */}
      <div className="bg-white border rounded-xl p-4 shadow-sm">
        <p className="font-semibold mb-3">Canjear Puntos</p>

        <div className="space-y-3">
          <div className="flex justify-between items-center bg-orange-50 p-3 rounded-lg">
            <span>Descuento Bs. 5</span>
            <span className="bg-orange-600 text-white text-xs px-2 py-1 rounded-md">
              100 pts
            </span>
          </div>

          <div className="flex justify-between items-center bg-orange-50 p-3 rounded-lg">
            <span>Descuento Bs. 15</span>
            <span className="bg-orange-600 text-white text-xs px-2 py-1 rounded-md">
              250 pts
            </span>
          </div>

          <div className="flex justify-between items-center bg-orange-50 p-3 rounded-lg">
            <span>Descuento Bs. 30</span>
            <span className="bg-orange-600 text-white text-xs px-2 py-1 rounded-md">
              500 pts
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
