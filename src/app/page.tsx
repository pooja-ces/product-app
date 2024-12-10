"use client"

import React, { useState } from "react";
import ProductList from '../components/ProductList';
import Filters from '../components/Filters';
import { getProducts } from "../lib/queries";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  React.useEffect(() => {
    const fetchProducts = async () => {
      const products = await getProducts(searchQuery);
      setProducts(products);
    };
    fetchProducts();
  }, [searchQuery]);

  // Filter products by search query (name)
  const handleFilter = (query: string) => {
    setSearchQuery(query);
  };

  // Filter products by category
  const handleSelectCategory = (category: string) => {
    setSearchQuery(category);
  };

  return (
    <main>
      <Filters
        onFilter={handleFilter}
        onSelectCategory={handleSelectCategory}
      />
      <ProductList products={products} />
    </main>
  );
}
