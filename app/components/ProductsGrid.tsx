"use client";
import React from "react";
import ProductCard from "./ProductCard";
import { Product } from "../types";

interface ProductsGridProps {
  products: Product[];
}

const ProductsGrid: React.FC<ProductsGridProps> = ({ products = [] }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(180px, 1fr))",
        gap: "16px",
        padding: "10px",
      }}
    >
      {products.map((item) => (
        <ProductCard
          key={item.id}
          id={item.id}
          image={item.image}
          title={item.title}
          description={item.description}
          price={item.price}
          isTop={item.isTop}
          category={item.category}
        />
      ))}
    </div>
  );
};

export default ProductsGrid;
