import React from "react";

function ProductCard({ props }) {
  return (
    <div className="max-w-xl">
      <img src={props.url} alt="" />
      <p>{props.title}</p>
    </div>
  );
}

export default ProductCard;
