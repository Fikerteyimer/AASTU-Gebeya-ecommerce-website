import React, { useState } from "react";
import { products } from "../data";
import Button from "./Button";

const categories = ["All", "Electronics", "Clothes", "Accessories"];

const ProductsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const filteredProducts =
    selectedCategory === "All"
      ? products
      : products.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white text-center py-8">
        <h1 className="text-3xl font-bold">Our Products</h1>
      </header>

      {/* Category Filter */}
      <div className="max-w-6xl mx-auto p-6 flex flex-wrap gap-4 justify-center">
        {categories.map((cat) => (
          <Button
            key={cat}
            text={cat}
            onClick={() => setSelectedCategory(cat)}
            className={selectedCategory === cat
              ? "bg-blue-600 text-white border-none"
              : "bg-white text-blue-600 border border-blue-600"
            }
          />
        ))}
      </div>

      {/* Products Grid */}
      <div className="max-w-6xl mx-auto p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <img
              src={product.img}
              alt={product.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h2 className="text-lg font-semibold">{product.name}</h2>
              <p className="text-blue-600 font-bold">{product.price}</p>
              <p className="text-gray-600 text-sm mt-2">{product.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;