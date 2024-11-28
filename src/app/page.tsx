"use client"
import React, { useEffect, useState } from "react";
import ProductList from '@/components/ProductList';
import Filters from '@/components/Filters';

type Product = { id: number; name: string; price: number; category: string };

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [filteredProducts, setFilteredProducts] = useState<Product[]>([]); 
  const [selectedCategory, setSelectedCategory] = useState<string>('');
  const [searchQuery, setSearchQuery] = useState<string>(''); 
  const [sortQuery, setSortQuery] = useState<string>(''); 

  useEffect(() => {
    fetch("/api/products")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data); 
        setFilteredProducts(data);
      })
      .catch((err) => console.error('Error fetching products:', err));
  }, []);

  // Filter products by search query (name)
  const handleFilter = (query: string) => {
    setSearchQuery(query);
  };

  // Filter products by category
  const handleSelectCategory = (category: string) => {
    setSelectedCategory(category);
  };

  // Sort products by a specified query
  const handleSort = (sortQuery: string) => {
    setSortQuery(sortQuery);
  };

  useEffect(() => {
    let updatedProducts = [...products];
    if (searchQuery) {
      updatedProducts = updatedProducts.filter(product =>
        product.name.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    if (selectedCategory) {
      updatedProducts = updatedProducts.filter(product =>
        product.category.toLowerCase() === selectedCategory.toLowerCase()
      );
    }
    if (sortQuery === 'price-asc') {
      updatedProducts.sort((a, b) => a.price - b.price);
    } else if (sortQuery === 'price-desc') {
      updatedProducts.sort((a, b) => b.price - a.price);
    } else if (sortQuery === 'name-asc') {
      updatedProducts.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortQuery === 'name-desc') {
      updatedProducts.sort((a, b) => b.name.localeCompare(a.name));
    }
    setFilteredProducts(updatedProducts);
  }, [searchQuery, selectedCategory, sortQuery, products]);

  return (
    <main>
      <Filters
        onFilter={handleFilter}
        onSelectCategory={handleSelectCategory}
        onSort={handleSort}
      />
      <ProductList products={filteredProducts} />
    </main>
  );
}
