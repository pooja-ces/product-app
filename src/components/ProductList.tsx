import React from "react";


type Product = { id: number; name: string; price: number; category: string };

const ProductList = ({ products }: { products: Product[] }) => (
    <div className="grid grid-cols-3 gap-4 mx-20 mb-20">
        {products.map((product) => (
            <div key={product.id} className="border p-4">
                <h3 className="font-bold text-xl">{product.name}</h3>
                <p className="font-semibold text-lg">${product.price}</p>
                <p className="font-semibold text-lg">{product.category}</p>
            </div>
        ))}
    </div>
);

export default ProductList;
