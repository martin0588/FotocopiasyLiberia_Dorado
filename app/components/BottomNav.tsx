"use client";

import Link from "next/link";
import { Home, Search, ShoppingCart, Heart } from "lucide-react";
import { usePathname } from "next/navigation";

export default function BottomNav() {
  const path = usePathname();

  const menu = [
    { label: "Inicio", icon: <Home size={20} />, href: "/" },
    { label: "Buscar", icon: <Search size={20} />, href: "/buscar" },
    { label: "Carrito", icon: <ShoppingCart size={20} />, href: "/carrito" },
    { label: "Favoritos", icon: <Heart size={20} />, href: "/favoritos" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-white border-t flex justify-around py-2 z-50">
      {menu.map((item) => {
        const active = path.startsWith(item.href);

        return (
          <Link
            key={item.label}
            href={item.href}
            className={`flex flex-col items-center text-xs ${
              active ? "text-orange-600 font-semibold" : "text-gray-500"
            }`}
          >
            {item.icon}
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}
