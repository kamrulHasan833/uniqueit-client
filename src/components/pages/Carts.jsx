import React from "react";
import { useLoaderData } from "react-router-dom";

function Carts() {
  const products = useLoaderData();
  const { imageURL } = products;
  return (
    <div>
      <img src={imageURL} alt="" />
    </div>
  );
}

export default Carts;
