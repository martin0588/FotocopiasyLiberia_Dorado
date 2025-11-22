"use client";

import { Home, Search, ShoppingCart, Heart } from "lucide-react";

export default function BottomNav({ 
  onHomeClick, 
  onSearchClick, 
  onCartClick,
  onFavoritoClick,
  activeView = "home" 
}) {
  const navItems = [
    { id: "home", icon: Home, label: "Inicio", onClick: onHomeClick },
    { id: "search", icon: Search, label: "Buscar", onClick: onSearchClick },
    { id: "cart", icon: ShoppingCart, label: "Carrito", onClick: onCartClick },
    { id: "favorito", icon: Heart, label: "Favoritos", onClick: onFavoritoClick },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t border-zinc-200 shadow-md px-6 py-2 z-50">
      <div className="flex justify-between text-center">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = activeView === item.id;
          
          return (
            <button
              key={item.id}
              onClick={item.onClick}
              className={`flex flex-col items-center transition-colors ${
                isActive ? "text-amber-600" : "text-zinc-600"
              }`}
            >
              <Icon size={22} />
              <span className="text-xs">{item.label}</span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}