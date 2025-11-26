"use client";

import { useState } from "react";

import Header from "./components/Header";
import FiltersBar from "./components/FiltersBar";
import BottomNav from "./components/BottomNav";

import ProductsGrid from "./components/ProductsGrid";
import { products } from "./data/products";

import Carrito from "./components/carrito";
import Favorito from "./components/Favorito";
import Reservas from "./components/Reservas";
import Contactanos from "./components/Contactanos";
import Notificaciones from "./components/Notificaciones";
import Buscar from "./components/Buscar";

export default function Home() {
  const [activeView, setActiveView] = useState("home");

  // ✅ filtro 1ra fila (Todos / Más Vendidos / Combos)
  const [activeTopFilter, setActiveTopFilter] =
    useState<"todos" | "top" | "combos">("todos");

  // ✅ filtro 2da fila categorías
  const [activeCategory, setActiveCategory] = useState("Todos");

  // ✅ filtrar productos según lo que dice el botón
  const filteredProducts = products.filter((p) => {
    const byCategory =
      activeCategory === "Todos" || p.category === activeCategory;

    const byTopFilter =
      activeTopFilter === "todos"
        ? true
        : activeTopFilter === "top"
        ? p.isTop === true
        : activeTopFilter === "combos"
        ? p.category === "Combos" // ojo: si no tienes "Combos" en tu data, no mostrará nada
        : true;

    return byCategory && byTopFilter;
  });

  return (
    <div className="">

      {/* 🟧 SIEMPRE mostrar Header arriba */}
      <Header 
        onReservasClick={() => setActiveView("reservas")} 
        onContactanosClick={() => setActiveView("contactanos")}
        onNotificacionesClick={() => setActiveView("notificaciones")}
      />

      {/* ✅ Filtros solo en home, ahora con props */}
      {activeView === "home" && (
        <FiltersBar
          activeTopFilter={activeTopFilter}
          setActiveTopFilter={setActiveTopFilter}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      )}

      <main className={activeView === "home" ? "px-4 py-4" : ""}>

        {/* 🏠 HOME */}
        {activeView === "home" && (
          <ProductsGrid products={filteredProducts} />
        )}

        {/* 🔎 BUSCAR */}
        {activeView === "search" && <Buscar />}

        {/* 🛒 CARRITO */}
        {activeView === "cart" && <Carrito />}

        {/* ❤️ FAVORITOS */}
        {activeView === "favorito" && <Favorito />}

        {/* 📦 RESERVAS */}
        {activeView === "reservas" && <Reservas />}

        {/* 📞 CONTÁCTANOS */}
        {activeView === "contactanos" && <Contactanos />}

        {/* 🔔 NOTIFICACIONES */}
        {activeView === "notificaciones" && <Notificaciones />}

      </main>

      <BottomNav
        activeView={activeView}
        onHomeClick={() => setActiveView("home")}
        onSearchClick={() => setActiveView("search")}
        onCartClick={() => setActiveView("cart")}
        onFavoritoClick={() => setActiveView("favorito")}
      />
    </div>
  );
}
