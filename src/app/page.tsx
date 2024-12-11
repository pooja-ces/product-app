import React from "react";
import ProductList from '../components/ProductList';
import { getProducts } from "../lib/queries";

export async function getServerSideProps() {
  const res = await getProducts();
  return res;
}

export default async function Home() {
  
  const products = await getServerSideProps();

  return (
    <div>
      <ProductList products={products} />
    </div>
  );
}
