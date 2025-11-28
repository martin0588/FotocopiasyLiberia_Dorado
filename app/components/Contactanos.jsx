import { Phone, MapPin, Clock, Mail, MessageCircle, Map } from "lucide-react";

export default function Contactanos() {
  const contactInfo = [
    {
      icon: MapPin,
      titulo: "Dirección",
      contenido: "Calle Arturo Valle, entre Av. Sucre y Calle 13 de Septiembre, El Alto — La Paz",
    },
    {
      icon: Clock,
      titulo: "Horario de Atención",
      contenido:
        "Lunes a Viernes: 8:00 - 19:00\nSábados: 9:00 - 18:00\nDomingos: 10:00 - 14:00",
    },
    {
      icon: Phone,
      titulo: "Teléfono",
      contenido: "+591 75254197",
    },
    {
      icon: Mail,
      titulo: "Correo Electrónico",
      contenido: "libreriadorado02@gmail.com",
    },
    {
      icon: MessageCircle,
      titulo: "WhatsApp",
      contenido: "+591 75254197",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      {/* Header */}
      <div className="bg-white px-4 py-4 border-b border-gray-200 flex items-center justify-between">
        <h1 className="text-lg font-semibold text-gray-800">Contáctanos</h1>
        <Phone className="text-amber-500" size={24} />
      </div>

      <div className="px-4 py-4 space-y-4">
        {/* Tarjeta de información */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {/* Header de la tarjeta */}
          <div className="px-4 py-3 border-b border-gray-100">
            <h2 className="font-semibold text-amber-600">Papelería DORADO</h2>
          </div>

          {/* Lista de contacto */}
          <div className="divide-y divide-gray-100">
            {contactInfo.map((item, i) => {
              const Icon = item.icon;
              return (
                <div key={i} className="px-4 py-3 flex gap-3">
                  <Icon size={20} className="text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm font-medium text-gray-800">
                      {item.titulo}
                    </p>
                    <p className="text-sm text-gray-500 whitespace-pre-line">
                      {item.contenido}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Botones de acción */}
        <div className="space-y-3">
          {/* Llamar ahora */}
          <button
            onClick={() => (window.location.href = "tel:+59175254197")}
            className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 rounded-xl flex items-center justify-center gap-2 transition-colors"
          >
            <Phone size={20} />
            Llamar ahora
          </button>

          {/* WhatsApp */}
          <button
            onClick={() =>
              window.open(
                "https://wa.me/59175254197?text=Hola%2C%20quisiera%20hacer%20una%20consulta",
                "_blank"
              )
            }
            className="w-full bg-white hover:bg-gray-50 text-gray-800 font-medium py-3 rounded-xl border-2 border-amber-500 flex items-center justify-center gap-2 transition-colors"
          >
            <MessageCircle size={20} className="text-amber-500" />
            Escribir por WhatsApp
          </button>

          {/* Enviar correo */}
           <button
            onClick={() =>
              window.open(
                "https://mail.google.com/mail/?view=cm&fs=1&to=libreriadorado02@gmail.com&su=Consulta&body=Hola%20quisiera%20más%20información",
                "_blank"
              )
            }
            className="w-full bg-white hover:bg-gray-50 text-gray-600 font-medium py-3 rounded-xl border border-gray-200 flex items-center justify-center gap-2 transition-colors"
          >
            <Mail size={20} className="text-gray-400" />
            Enviar correo
          </button>
            

          {/* Ver en mapa */}
          <button
            onClick={() =>
              window.open(
                "https://maps.app.goo.gl/v85zny85UaxbtHkm8",
                "_blank"
              )
            }
            className="w-full bg-white hover:bg-gray-50 text-gray-600 font-medium py-3 rounded-xl border border-gray-200 flex items-center justify-center gap-2 transition-colors"
          >
            <Map size={20} className="text-gray-400" />
            Ver en mapa
          </button>
        </div>

        {/* Información de ubicación */}
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4 flex gap-3">
          <MapPin size={20} className="text-amber-500 shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-amber-800 mb-1">Ubicación</p>
            <p className="text-xs text-amber-700 leading-relaxed">
              Estamos ubicados en la ciudad de EL Alto cerca a la universidad UPEA, fácil acceso en transporte
              público. Te esperamos para brindarte la mejor atención.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

// Actualización para contributors
// Línea 2
// Línea 3
// Línea 4
// Línea 5
