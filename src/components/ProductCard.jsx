import React from "react";
import Link from 'next/link'

function ProductCard({ props }) {
  return (
    <Link href={`/${props.category}`}>
      <div className="max-w-md border p-10">
        <img src={props.img} alt="" />
        <h1>{props.nombre}</h1>
        <p>{props.descripcion}</p>
        <p>{props.price}</p>
      </div>
    </Link>
  );
}

export default ProductCard;
