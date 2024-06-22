import React from "react";

function ProductCard({ props }) {
  return (
    <div className="max-w-md border p-10">
      <img src={props.img} alt="" />
      <h1>{props.nombre}</h1>
      <p>{props.descripcion}</p>
      <p>{props.price}</p>
    </div>
  );
}

export default ProductCard;
