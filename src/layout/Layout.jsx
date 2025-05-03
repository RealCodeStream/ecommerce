import React, { useState } from 'react';
import Navbar from '../components/NavBar/Navbar';
import { Outlet } from 'react-router-dom';
import CartModal from "../components/CartModal/CartModal";

const Layout = () => {

  const [carrito, setCarrito] = useState([]);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);

  // Función para agregar al carrito (¿implementarla como contexto?)
  const agregarAlCarrito = (producto) => {
    const itemExistente = carrito.find(item => item.producto.id === producto.id);
    
    if (itemExistente) {
      setCarrito(
        carrito.map(item =>
          item.producto.id === producto.id
            ? { ...item, cantidad: item.cantidad + 1 }
            : item
        )
      );
    } else {
      setCarrito([...carrito, { producto, cantidad: 1 }]);
    }
  };

  const eliminarDelCarrito = (id) => {
    setCarrito(carrito.filter(item => item.producto.id !== id));
  };

  const cambiarCantidad = (id, cantidad) => {
    if (cantidad <= 0) {
      eliminarDelCarrito(id);
      return;
    }
    
    setCarrito(
      carrito.map(item =>
        item.producto.id === id ? { ...item, cantidad } : item
      )
    );
  };

  const toggleCarrito = () => {
    setMostrarCarrito(!mostrarCarrito);
  };

  const cantidadTotal = carrito.reduce((total, item) => total + item.cantidad, 0);

  // Proporciona el carrito y sus funciones a otros componentes como props
  const carritoUtils = {
    items: carrito,
    agregarAlCarrito,
    eliminarDelCarrito,
    cambiarCantidad
  };
  return (
  <div>
      <Navbar cantidadTotal={cantidadTotal} toggleCarrito={toggleCarrito}/>
      <Outlet context={carritoUtils}/>

      <CartModal 
        mostrar={mostrarCarrito}
        carrito={carrito}
        onClose={() => setMostrarCarrito(false)}
        cambiarCantidad={cambiarCantidad}
        eliminarDelCarrito={eliminarDelCarrito}
      />
  </div>
  )
}

export default Layout