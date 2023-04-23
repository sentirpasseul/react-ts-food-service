import React from "react";
import { products } from "../../data/products";
import { IProduct } from "../../model";
import { useState } from "react";

interface ProductProps {
  product: IProduct;
}

export function Product({ product }: ProductProps) {
  const [details, setDetails] = useState(false);

  const btnBgClassName = details ? "bg-blue-400" : "bg-yellow-400";
  const btnClasses = ["py-2 px-4 border", btnBgClassName];

  return (
    <div className="border py-2 px-4 rounded flex flex-col items-center mb-2">
      <img
        src={product.image}
        className="w-16 md:w-32 lg:w-32"
        alt={product.title}
      ></img>
      <p className="mb-1 text-lg">{product.title}</p>
      <p className="font-bold">Цена: {product.price}</p>
      <button
        className={btnClasses.join(" ")}
        onClick={() => setDetails((prev) => !prev)}
      >
        {details ? "Hide Details" : "Show Details"}
      </button>
      {details && (
        <div>
          <p>{product.description}</p>
        </div>
      )}
    </div>
  );
}
