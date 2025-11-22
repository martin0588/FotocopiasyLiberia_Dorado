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
import Cotizar from "./components/Cotizar";
import Notificaciones from "./components/Notificaciones";
import Buscar from "./components/Buscar";

export default function Home() {
  const [activeView, setActiveView] = useState("home");

  return (
    <div className="pb-20">

      {/* 🟧 SIEMPRE mostrar Header arriba */}
      <Header 
        onReservasClick={() => setActiveView("reservas")} 
        onContactanosClick={() => setActiveView("contactanos")}
        onCotizarClick={() => setActiveView("cotizar")}
        onNotificacionesClick={() => setActiveView("notificaciones")}
      />

      {/* ❌ Filtros solo en home */}
      {activeView === "home" && <FiltersBar />}

      <main className={activeView === "home" ? "px-4 py-4" : ""}>

        {/* 🏠 HOME */}
        {activeView === "home" && (
          <ProductsGrid products={products} />
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

        {/* 🧮 COTIZAR */}
        {activeView === "cotizar" && <Cotizar />}

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