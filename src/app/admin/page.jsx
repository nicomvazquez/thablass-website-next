"use client";
import React, { useEffect, useState } from "react";

function page() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const load = async () => {
      const res = await fetch("/api/products");
      const data = await res.json();
      console.log(data);
      setProducts(data);
    };
    load();
  }, []);

  return (
    <section>
      <h2>products:</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.nombre}</li>
        ))}
      </ul>
    </section>
  );
}

export default page;
