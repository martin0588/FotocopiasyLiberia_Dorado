"use client";
import React, { createContext, useContext, useEffect, useState } from "react";
import type { Product } from "../types";

type ReservaProducto = Product & { qty: number };

type Reserva = {
  id: string;
  fecha: string;
  estado: string;
  productos: ReservaProducto[];
  total: number;
  lugar: string;
  direccion: string;
};

type ReservasContextType = {
  reservas: Reserva[];
  agregarReserva: (productos: ReservaProducto[]) => void;
  eliminarReserva?: (id: string) => void; // opcional por si luego lo agregas
};

const ReservasContext = createContext<ReservasContextType | null>(null);

export function ReservasProvider({ children }: { children: React.ReactNode }) {
  const [reservas, setReservas] = useState<Reserva[]>([]);

  // ✅ cargar reservas guardadas (si ya usabas localStorage)
  useEffect(() => {
    const saved = localStorage.getItem("reservas");
    if (saved) {
      try {
        setReservas(JSON.parse(saved));
      } catch {
        setReservas([]);
      }
    }
  }, []);

  // ✅ guardar reservas
  useEffect(() => {
    localStorage.setItem("reservas", JSON.stringify(reservas));
  }, [reservas]);

  const agregarReserva = (productos: ReservaProducto[]) => {
    const nueva: Reserva = {
      id: "RES-" + String(reservas.length + 1).padStart(3, "0"),
      fecha: new Date().toLocaleDateString(),
      estado: "Reservado",
      productos,
      total: productos.reduce(
        (sum, p) => sum + Number(p.price) * (p.qty ?? 1),
        0
      ),
      lugar: "Papelería DORADO",
      direccion: "Av. Principal #123, Centro, La Paz",
    };

    setReservas((prev) => [...prev, nueva]);
  };

  return (
    <ReservasContext.Provider value={{ reservas, agregarReserva }}>
      {children}
    </ReservasContext.Provider>
  );
}

export function useReservas() {
  const ctx = useContext(ReservasContext);
  if (!ctx) {
    throw new Error("useReservas debe usarse dentro de ReservasProvider");
  }
  return ctx;
}
