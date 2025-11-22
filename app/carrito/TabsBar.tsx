"use client";

import React from "react";
import Link from "next/link";

const tabs = [
  { label: "Carrito", href: "/carrito" },
  { label: "Servicios", href: "/carrito/servicios" },
  { label: "Reservar", href: "/carrito/reservar" },
  { label: "Empresa", href: "/carrito/empresa" },
];

export default function TabsBar({ active }: { active: string }) {
  return (
    <div className="w-full flex bg-gray-100 rounded-full p-1 mt-3 mb-3">
      {tabs.map((tab) => {
        const isActive = active === tab.label;
        return (
          <Link
            key={tab.label}
            href={tab.href}
            className={`flex-1 text-center text-sm py-2 rounded-full transition
              ${isActive ? "bg-white font-semibold shadow-sm" : "text-gray-500"}`}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
}
