// app/page.tsx  (SERVER COMPONENT)
import HomeClient from "./HomeClient";
import type { Product } from "./types";

export default async function Home() {
  const res = await fetch(
    "https://68f1af78b36f9750dee9ee40.mockapi.io/api/v1/cursitos",
  );

  const rawProducts = await res.json();

  const products: Product[] = rawProducts.map((p: any) => ({
    ...p,
    price: Number(p.price),
    isTop: p.isTop === true || p.isTop === "true",
  }));

  return <HomeClient products={products} />;
}
