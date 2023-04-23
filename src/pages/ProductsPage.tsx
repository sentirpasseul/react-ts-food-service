import React from "react";
import { useProducts } from "../hooks/products";
import { Loader } from "../components/Loader";
import { ErrorMessage } from "../components/ErrorMessage";
import { Header } from "../components/Header/Header";
import { Product } from "../components/Product/Product";
import { Modal } from "../components/Modal";

export function ProductsPage() {
    const {loading, error, products} = useProducts()
  

    return (
      <div className="body">
        {loading && <Loader />}
        {error && <ErrorMessage error={error} />}
        <Header />
        <div className="container mx-auto max-w-2xl pt-5">
          {products.map((product) => (
            <Product product={product} key={product.id} />
          ))}
        </div>
        
      </div>
    );
}
