import React from 'react'
import { X } from 'lucide-react';

const CartModal = ({ mostrar, carrito, onClose, cambiarCantidad, eliminarDelCarrito }) => {
  if (!mostrar) return null;

  const totalCarrito = carrito.reduce(
    (total, item) => total + item.producto.precio * item.cantidad,
    0
  );

  return (
    <div className="fixed inset-0 flex justify-end items-start z-50">
      <div className="bg-black w-full max-w-md h-full overflow-y-auto shadow-lg border">
        <div className="p-5 bg-[#6D4FC2] text-white flex justify-between items-center">
          <h2 className="text-xl font-bold">Carrito de Compras</h2>
          <button 
            onClick={onClose}
            className="text-white hover:text-gray-200 cursor-pointer transition-transform hover:scale-105"
          >
            <X size={24} />
          </button>
        </div>
        
        <div className="p-4">
          {carrito.length === 0 ? (
            <p className="text-white text-center py-8">Tu carrito está vacío</p>
          ) : (
            <>
              {carrito.map(item => (
                <div key={item.producto.id} className="flex items-center justify-between border-b py-4">
                  <div className="flex items-center gap-3 text-white">
                    <img 
                      src={item.producto.imagen} 
                      alt={item.producto.nombre} 
                      className="w-16 h-16 object-cover rounded-md"
                    />
                    <div>
                      <h3 className="font-medium">{item.producto.nombre}</h3>
                      <p className="text-white">${item.producto.precio.toFixed(2)}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-2 text-white">
                    <button
                      onClick={() => cambiarCantidad(item.producto.id, item.cantidad - 1)}
                      className="bg-[#bdabef] hover:bg-[#6D4FC2] w-8 h-8 flex items-center justify-center rounded cursor-pointer transition-transform hover:scale-105"
                    >
                      -
                    </button>
                    <span className="w-8 text-center ">{item.cantidad}</span>
                    <button
                      onClick={() => cambiarCantidad(item.producto.id, item.cantidad + 1)}
                      className="bg-[#bdabef] hover:bg-[#6D4FC2] w-8 h-8 flex items-center justify-center rounded cursor-pointer transition-transform hover:scale-105"
                    >
                      +
                    </button>
                    <button
                      onClick={() => eliminarDelCarrito(item.producto.id)}
                      className="ml-2 text-white hover:text-[#bdabef] cursor-pointer transition-transform hover:scale-102"
                    >
                      <X size={20} />
                    </button>
                  </div>
                </div>
              ))}
              
              <div className="mt-6 pt-4 border-t">
                <div className="flex justify-between font-bold text-lg mb-4 text-white">
                  <span>Total:</span>
                  <span>${totalCarrito.toFixed(2)}</span>
                </div>
                <button className="w-full bg-[#6D4FC2] hover:bg-[#bdabef] cursor-pointer transition-transform hover:scale-102 text-white py-3 rounded-md font-medium">
                  Proceder al Pago
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default CartModal