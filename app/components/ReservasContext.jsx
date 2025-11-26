"use client";
import { createContext, useContext, useState } from "react";

const ReservasContext = createContext();

export function ReservasProvider({ children }) {
  const [reservas, setReservas] = useState([]);

  const agregarReserva = (productos) => {
    const nueva = {
      id: "RES-" + String(reservas.length + 1).padStart(3, "0"),
      fecha: new Date().toLocaleDateString(),
      estado: "Reservado",
      productos,
      total: productos.reduce((sum, p) => sum + p.price * p.qty, 0),
      lugar: "Papelería DORADO",
      direccion: "Av. Principal #123, Centro, La Paz",
    };
    setReservas([...reservas, nueva]);
  };

  return (
    <ReservasContext.Provider value={{ reservas, agregarReserva }}>
      {children}
    </ReservasContext.Provider>
  );
}

export const useReservas = () => useContext(ReservasContext);
