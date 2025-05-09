import React, { useEffect } from 'react';

const ProductCard = ({ producto, agregarAlCarrito }) => {
  useEffect(() => {
    // Crear el elemento link para cargar la fuente
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Poppins:wght@700&display=swap';
    link.rel = 'stylesheet';
    document.head.appendChild(link); // Añadirlo al head del documento

    return () => {
      document.head.removeChild(link); // Limpiar el link cuando el componente se desmonte
    };
  }, []);

  return (
    <div className="relative">
      <div className="absolute top-2 left-2 w-full h-full bg-gray-300 rounded-lg z-0"></div>

      <div className="relative z-10 bg-white rounded-lg shadow-lg overflow-hidden transition-transform hover:scale-105">
        <img 
          src={producto.imagen} 
          alt={producto.nombre} 
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <div className="relative inline-block mb-1">
            <h3 className="relative text-2xl font-extrabold text-gray-800 z-10" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {producto.nombre}
            </h3>
          </div>

          <p className="text-gray-600 text-sm">{producto.descripcion}</p>

          <div className="mt-3 flex justify-between items-center">
            <span className="text-xl font-bold text-gray-900">
              ${producto.precio.toFixed(2)}
            </span>
            <button
              onClick={() => agregarAlCarrito(producto)}
              className="bg-[#6D4FC2] hover:bg-[#5c42a4] text-white px-3 py-2 rounded-md text-sm font-medium cursor-pointer transition-transform hover:scale-105"
            >
              Agregar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
