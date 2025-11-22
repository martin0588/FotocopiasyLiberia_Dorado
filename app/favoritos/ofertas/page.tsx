import TabsBarFav from "../TabsBarFav";

export default function OfertasPage() {
  const ofertas = [
    {
      title: "Ofertas Especiales",
      desc: "Aprovecha nuestras promociones exclusivas",
      highlight: true,
    },
    {
      title: "15% OFF en Cuadernos",
      badge: "15%",
      desc: "Válido en toda la línea de cuadernos universitarios",
      fecha: "30 Nov 2025",
    },
    {
      title: "Combo 3x2 en Bolígrafo",
      badge: "3x2",
      desc: "Lleva 3 packs y paga solo 2",
      fecha: "15 Dic 2025",
    },
    {
      title: "Pack Estudiante -20%",
      badge: "20%",
      desc: "Descuento en combos estudiantiles",
      fecha: "31 Dic 2025",
    },
  ];

  return (
    <div className="px-4 pb-24">
      {/* Tabs */}
      <TabsBarFav active="Ofertas" />

      <div className="space-y-4">
        {ofertas.map((o, i) => (
          <div
            key={i}
            className={`rounded-xl p-4 border shadow-sm ${
              o.highlight ? "bg-orange-50 border-orange-200" : "bg-white"
            }`}
          >
            <div className="flex justify-between items-center">
              <p className="font-semibold">{o.title}</p>
              {o.badge && (
                <span className="text-white bg-orange-600 text-xs px-2 py-1 rounded-md">
                  {o.badge}
                </span>
              )}
            </div>
            <p className="text-xs text-gray-600 mt-1">{o.desc}</p>

            {o.fecha && (
              <p className="text-xs mt-2 text-gray-500">Válido hasta: {o.fecha}</p>
            )}

            {!o.highlight && (
              <button className="mt-3 bg-orange-600 text-white text-sm px-3 py-1 rounded-lg">
                Ver Productos
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
