import React from 'react'
import { Link } from 'react-router-dom'
import { ShoppingCart, User, BotMessageSquareIcon } from 'lucide-react';

const Navbar = ({ cantidadTotal, toggleCarrito }) => {
  return (
    <nav className="bg-black text-white p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-120">
          <Link to="/home" className="text-2xl font-bold">Mi Tienda</Link>
          <div className="hidden sm:flex space-x-4">
            <Link to="/home" className="hover:text-red-400 transition-colors font-bold">Inicio</Link>
            <Link to="/items" className="hover:text-red-400 transition-colors font-bold">Productos</Link>
          </div>
        </div>
        
        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleCarrito}
            className="flex items-center gap-2 bg-blue-800 hover:bg-blue-900 px-4 py-2 rounded-md transition-colors"
          >
            <ShoppingCart size={20} />
            <span>{cantidadTotal}</span>
          </button>
          
          <Link to="/profail" className="flex items-center gap-2 hover:text-blue-200">
            <User size={20} />
          </Link>

          <Link to="/chatbot" className="hover:text-red-400 transition-colors font-bold">
          <BotMessageSquareIcon size={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar