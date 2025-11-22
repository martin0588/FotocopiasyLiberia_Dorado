import { useState } from "react";
import { Search, SlidersHorizontal, ArrowDownUp, Heart, ShoppingCart, X, Check } from "lucide-react";
// En tu proyecto: import { products } from "../data/products";

// Datos de ejemplo (en tu proyecto usa el import de arriba)
const products = [
  { id: 1, title: "Cuaderno Universitario 100 hojas", category: "Cuadernos", description: "Cuaderno universitario espiral, rayado", price: 15.5, image: "https://images.unsplash.com/photo-1531346878377-a5be20888e57?w=200", isTop: true },
  { id: 2, title: "Cuaderno Empastado A4", category: "Cuadernos", description: "Cuaderno empastado tapa dura, 200 hojas", price: 28.0, image: "https://images.unsplash.com/photo-1517842645767-c639042777db?w=200", isTop: true },
  { id: 3, title: "Cuaderno Anillado A5", category: "Cuadernos", description: "Cuaderno anillado tamaño A5, 80 hojas", price: 12.0, image: "https://images.unsplash.com/photo-1544816155-12df9643f363?w=200", isTop: false },
  { id: 4, title: "Papel Bond Carta (Resma)", category: "Papel", description: "Resma de 500 hojas, papel bond blanco", price: 42.0, image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?w=200", isTop: true },
  { id: 5, title: "Papel Fotográfico Glossy A4", category: "Papel", description: "Pack 20 hojas papel fotográfico brillante", price: 85.0, image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=200", isTop: false },
  { id: 6, title: "Papel Fotográfico Mate A4", category: "Papel", description: "Pack 20 hojas papel fotográfico acabado mate", price: 80.0, image: "https://images.unsplash.com/photo-1589998059171-988d887df646?w=200", isTop: false },
  { id: 7, title: "Bolígrafos Pack x12", category: "Bolígrafos", description: "Pack 12 bolígrafos azul, negro y rojo", price: 18.0, image: "https://images.unsplash.com/photo-1585336261022-680e295ce3fe?w=200", isTop: true },
  { id: 8, title: "Lápices HB Pack x10", category: "Lápices", description: "Pack 10 lápices grafito HB con borrador", price: 12.0, image: "https://images.unsplash.com/photo-1522111608460-19e7331e00fb?w=200", isTop: false },
];

function BuscarItem({ product, onAddToCart, onToggleFavorito, modoComparar, seleccionado, onToggleComparar, isFavorito }) {
  const { id, image, title, category, description, price, isTop } = product;

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-3 flex gap-3 relative">
      {modoComparar && (
        <button onClick={() => onToggleComparar?.(id)} className={`absolute top-2 right-2 w-6 h-6 rounded border-2 flex items-center justify-center transition-colors ${seleccionado ? "bg-amber-500 border-amber-500 text-white" : "border-gray-300 bg-white"}`}>
          {seleccionado && <Check size={14} />}
        </button>
      )}

      <div className="relative shrink-0">
        {isTop && <span className="absolute top-1 left-1 bg-amber-500 text-white text-[10px] px-2 py-0.5 rounded-md font-semibold z-10">⭐ Top</span>}
        <img src={image} alt={title} className="w-20 h-20 object-cover rounded-lg bg-gray-100" />
      </div>

      <div className="flex flex-col flex-1 min-w-0">
        <p className="text-gray-400 text-xs">{category}</p>
        <h3 className="text-sm font-semibold text-gray-800 leading-tight">{title}</h3>
        <p className="text-xs text-gray-500 line-clamp-1">{description}</p>

        <div className="flex items-center justify-between mt-auto pt-2">
          <span className="text-amber-600 font-bold text-sm">Bs. {price.toFixed(2)}</span>
          {!modoComparar && (
            <div className="flex items-center gap-2">
              <button onClick={() => onToggleFavorito?.(id)} className="p-1.5 text-gray-400 hover:text-red-500 transition-colors">
                <Heart size={18} className={isFavorito ? "fill-red-500 text-red-500" : ""} />
              </button>
              <button onClick={() => onAddToCart?.(id)} className="bg-amber-500 hover:bg-amber-600 text-white rounded-lg p-2 transition-colors">
                <ShoppingCart size={16} />
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function BuscarList({ products, onAddToCart, onToggleFavorito, modoComparar, seleccionados, onToggleComparar, favoritos }) {
  if (!products || products.length === 0) {
    return (
      <div className="text-center py-12">
        <Search size={48} className="mx-auto text-gray-300 mb-4" />
        <p className="text-gray-500">No se encontraron productos</p>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      {products.map((product) => (
        <BuscarItem key={product.id} product={product} onAddToCart={onAddToCart} onToggleFavorito={onToggleFavorito} modoComparar={modoComparar} seleccionado={seleccionados?.includes(product.id)} onToggleComparar={onToggleComparar} isFavorito={favoritos?.includes(product.id)} />
      ))}
    </div>
  );
}

function FiltrosModal({ isOpen, onClose, filtros, setFiltros }) {
  const categorias = ["Cuadernos", "Papel", "Cartulinas", "Útiles Escolares", "Folders", "Sobres", "Combos", "Archivadores", "Accesorios", "Bolígrafos", "Lápices", "Marcadores", "Resaltadores", "Colores"];
  const materiales = ["Tamaño Carta", "Tamaño Oficio", "Papel Cebolla", "Papel Mantequilla", "Cartulina Bristol", "Cartulina Opalina", "Cartulina Duplex", "Cinta Adhesiva", "Goma", "Notas Adhesivas", "Organizadores"];

  const toggleFiltro = (tipo, valor) => {
    setFiltros((prev) => ({ ...prev, [tipo]: prev[tipo]?.includes(valor) ? prev[tipo].filter((v) => v !== valor) : [...(prev[tipo] || []), valor] }));
  };

  const limpiarFiltros = () => setFiltros({ categorias: [], materiales: [], soloStock: false });

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
      <div className="bg-white w-80 h-full overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-4 py-3 flex items-center justify-between">
          <div>
            <h2 className="font-semibold text-gray-800">Filtros</h2>
            <p className="text-xs text-gray-500">Refina tu búsqueda</p>
          </div>
          <button onClick={onClose} className="p-1 text-gray-500 hover:text-gray-700"><X size={20} /></button>
        </div>

        <div className="p-4 space-y-6">
          <div>
            <h3 className="font-medium text-gray-800 mb-3">Categorías</h3>
            <div className="space-y-2">
              {categorias.map((cat) => (
                <label key={cat} className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={filtros.categorias?.includes(cat)} onChange={() => toggleFiltro("categorias", cat)} className="w-4 h-4 rounded border-gray-300 text-amber-500 focus:ring-amber-500" />
                  <span className="text-sm text-gray-600">{cat}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-3">Materiales</h3>
            <div className="space-y-2">
              {materiales.map((mat) => (
                <label key={mat} className="flex items-center gap-2 cursor-pointer">
                  <input type="checkbox" checked={filtros.materiales?.includes(mat)} onChange={() => toggleFiltro("materiales", mat)} className="w-4 h-4 rounded border-gray-300 text-amber-500 focus:ring-amber-500" />
                  <span className="text-sm text-gray-600">{mat}</span>
                </label>
              ))}
            </div>
          </div>

          <div>
            <h3 className="font-medium text-gray-800 mb-3">Disponibilidad</h3>
            <label className="flex items-center gap-2 cursor-pointer">
              <input type="checkbox" checked={filtros.soloStock} onChange={() => setFiltros((prev) => ({ ...prev, soloStock: !prev.soloStock }))} className="w-4 h-4 rounded border-gray-300 text-amber-500 focus:ring-amber-500" />
              <span className="text-sm text-gray-600">Solo en stock</span>
            </label>
          </div>
        </div>

        <div className="sticky bottom-0 bg-white border-t border-gray-200 p-4">
          <button onClick={limpiarFiltros} className="w-full bg-amber-500 hover:bg-amber-600 text-white font-medium py-3 rounded-lg transition-colors">Limpiar filtros</button>
        </div>
      </div>
    </div>
  );
}

export default function Buscar() {
  const [busqueda, setBusqueda] = useState("");
  const [mostrarFiltros, setMostrarFiltros] = useState(false);
  const [modoComparar, setModoComparar] = useState(false);
  const [seleccionados, setSeleccionados] = useState([]);
  const [favoritos, setFavoritos] = useState([]);
  const [filtros, setFiltros] = useState({ categorias: [], materiales: [], soloStock: false });

  const productosFiltrados = products.filter((p) => {
    const matchBusqueda = p.title.toLowerCase().includes(busqueda.toLowerCase()) || p.category.toLowerCase().includes(busqueda.toLowerCase());
    const matchCategoria = filtros.categorias.length === 0 || filtros.categorias.includes(p.category);
    return matchBusqueda && matchCategoria;
  });

  const handleToggleFavorito = (id) => setFavoritos((prev) => prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]);
  const handleAddToCart = (id) => console.log("Agregado al carrito:", id);
  const handleToggleComparar = (id) => setSeleccionados((prev) => prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]);

  return (
    <div className="min-h-screen bg-gray-100 pb-20">
      <div className="bg-white px-4 py-3 border-b border-gray-200">
        <div className="relative">
          <Search size={18} className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input type="text" value={busqueda} onChange={(e) => setBusqueda(e.target.value)} placeholder="Buscar productos..." className="w-full pl-10 pr-4 py-2.5 bg-gray-100 rounded-lg text-sm text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-amber-400" />
        </div>
      </div>

      <div className="bg-white px-4 py-2 border-b border-gray-200 flex gap-3">
        <button onClick={() => setMostrarFiltros(true)} className="flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-700 hover:bg-gray-50 transition-colors">
          <SlidersHorizontal size={16} />Filtros
        </button>
        <button onClick={() => { setModoComparar(!modoComparar); setSeleccionados([]); }} className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-colors ${modoComparar ? "bg-amber-500 text-white" : "border border-gray-200 text-gray-700 hover:bg-gray-50"}`}>
          <ArrowDownUp size={16} />Comparar
        </button>
      </div>

      <div className="px-4 py-3">
        <p className="text-sm text-gray-600">{productosFiltrados.length} productos encontrados</p>
      </div>

      <div className="px-4">
        <BuscarList products={productosFiltrados} onAddToCart={handleAddToCart} onToggleFavorito={handleToggleFavorito} modoComparar={modoComparar} seleccionados={seleccionados} onToggleComparar={handleToggleComparar} favoritos={favoritos} />
      </div>

      <FiltrosModal isOpen={mostrarFiltros} onClose={() => setMostrarFiltros(false)} filtros={filtros} setFiltros={setFiltros} />
    </div>
  );
}