import React from 'react'

const ProductCard = ({ producto, agregarAlCarrito }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-105">
      <img 
        src={producto.imagen} 
        alt={producto.nombre} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-800">{producto.nombre}</h3>
        <p className="text-gray-600 text-sm mt-1">{producto.descripcion}</p>
        <div className="mt-3 flex justify-between items-center">
          <span className="text-xl font-bold text-gray-900">${producto.precio.toFixed(2)}</span>
          <button
            onClick={() => agregarAlCarrito(producto)}
            className="bg-blue-600 hover:bg-blue-700 text-white px-3 py-2 rounded-md text-sm font-medium transition-colors"
          >
            Agregar
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductCard