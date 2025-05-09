import React, { useState } from 'react'; 
import Navbar from '../components/NavBar/Navbar';
import { Outlet, useLocation } from 'react-router-dom'; 
import CartModal from "../components/CartModal/CartModal";
import Footer from '../components/Footer/Footer';

const Layout = () => {

  const [carrito, setCarrito] = useState([]);
  const [mostrarCarrito, setMostrarCarrito] = useState(false);
const location = useLocation();

  
  const noFooterPages = ['/pagina-sin-footer', '/chatbot']; 
  const shouldShowFooter = !noFooterPages.includes(location.pathname);

  // Función para agregar al carrito 
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
    <Navbar cantidadTotal={cantidadTotal} toggleCarrito={toggleCarrito} />
    
    {/* Agrega padding-top para dejar espacio debajo del navbar fijo */}
    <div className="pt-20">
      <Outlet context={carritoUtils} />
    </div>

    <CartModal 
      mostrar={mostrarCarrito}
      carrito={carrito}
      onClose={() => setMostrarCarrito(false)}
      cambiarCantidad={cambiarCantidad}
      eliminarDelCarrito={eliminarDelCarrito}
    />
    
    {shouldShowFooter && <Footer />}
  </div>
);
};

export default Layout;
