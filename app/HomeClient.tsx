"use client";

import { useState } from "react";

import Header from "./components/Header";
import FiltersBar from "./components/FiltersBar";
import BottomNav from "./components/BottomNav";

import ProductsGrid from "./components/ProductsGrid";

import Carrito from "./components/carrito";
import Favorito from "./components/Favorito";
import Reservas from "./components/Reservas";
import Contactanos from "./components/Contactanos";
import Notificaciones from "./components/Notificaciones";
import Buscar from "./components/Buscar";

import type { Product } from "./types";

export default function HomeClient({ products }: { products: Product[] }) {
  const [activeView, setActiveView] = useState("home");

  const [activeTopFilter, setActiveTopFilter] =
    useState<"todos" | "top" | "combos">("todos");

  const [activeCategory, setActiveCategory] = useState("Todos");

  const filteredProducts = products.filter((p) => {
    const byCategory =
      activeCategory === "Todos" || p.category === activeCategory;

    const byTopFilter =
      activeTopFilter === "todos"
        ? true
        : activeTopFilter === "top"
        ? p.isTop === true
        : activeTopFilter === "combos"
        ? p.category === "Combos"
        : true;

    return byCategory && byTopFilter;
  });

  return (
    <div className="">

      <Header 
        onReservasClick={() => setActiveView("reservas")} 
        onContactanosClick={() => setActiveView("contactanos")}
        onNotificacionesClick={() => setActiveView("notificaciones")}
      />

      {activeView === "home" && (
        <FiltersBar
          activeTopFilter={activeTopFilter}
          setActiveTopFilter={setActiveTopFilter}
          activeCategory={activeCategory}
          setActiveCategory={setActiveCategory}
        />
      )}

      <main className={activeView === "home" ? "px-4 py-4" : ""}>

        {activeView === "home" && (
          <ProductsGrid products={filteredProducts} />
        )}

        {activeView === "search" && <Buscar />}
        {activeView === "cart" && <Carrito />}
        {activeView === "favorito" && <Favorito />}
        {activeView === "reservas" && <Reservas />}
        {activeView === "contactanos" && <Contactanos />}
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
