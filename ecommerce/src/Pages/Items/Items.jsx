import React from 'react';
import ProductList from "../../components/ProductList/ProductList"
import { useOutletContext } from 'react-router-dom';

const productosEjemplo = [
  { id: 1, nombre: 'Teléfono Inteligente', precio: 299.99, imagen: '/api/placeholder/200/200', descripcion: 'Último modelo con cámara de alta resolución' },
  { id: 2, nombre: 'Laptop', precio: 899.99, imagen: '/api/placeholder/200/200', descripcion: 'Potente laptop para trabajo y entretenimiento' },
  { id: 3, nombre: 'Auriculares Bluetooth', precio: 79.99, imagen: '/api/placeholder/200/200', descripcion: 'Con cancelación de ruido' },
  { id: 4, nombre: 'Smartwatch', precio: 159.99, imagen: '/api/placeholder/200/200', descripcion: 'Monitorea tu salud y actividad física' },
  { id: 5, nombre: 'Tablet', precio: 249.99, imagen: '/api/placeholder/200/200', descripcion: 'Perfecta para entretenimiento y productividad' },
  { id: 6, nombre: 'Cámara Digital', precio: 449.99, imagen: '/api/placeholder/200/200', descripcion: 'Captura momentos especiales con alta calidad' },
];
const Items = () => {
  const carritoUtils = useOutletContext();
  return (
    <div className="py-4">
      <ProductList 
        productos={productosEjemplo} 
        agregarAlCarrito={carritoUtils.agregarAlCarrito} 
      />
    </div>
  );
}

export default Items