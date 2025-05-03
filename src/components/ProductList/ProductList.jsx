import React from 'react'
import ProductCard from '../ProductCard/ProductCard';

const ProductList = ({ productos, agregarAlCarrito }) => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {productos.map(producto => (
        <ProductCard 
          key={producto.id} 
          producto={producto} 
          agregarAlCarrito={agregarAlCarrito} 
        />
      ))}
    </div>
  );
}

export default ProductList