import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, User, BotMessageSquareIcon } from 'lucide-react';

const Navbar = ({ cantidadTotal, toggleCarrito }) => {
  return (
    <nav className="bg-black text-white p-4 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center space-x-120">
          <Link to="/home" className="text-2xl font-bold">Mi Tienda</Link>
          <div className="hidden sm:flex space-x-4">
            <Link to="/home" className="hover:text-[#bdabef] transition-colors font-bold">Inicio</Link>
            <Link to="/items" className="hover:text-[#bdabef] transition-colors font-bold">Productos</Link>
          </div>
        </div>

        <div className="flex items-center space-x-4">
          <button 
            onClick={toggleCarrito}
            className="flex items-center gap-2 bg-[#6D4FC2] hover:bg-[#bdabef] px-4 py-2 rounded-md transition-colors"
          >
            <ShoppingCart size={20} />
            <span>{cantidadTotal}</span>
          </button>

          <Link to="/profail" className="flex items-center gap-2 hover:text-[#bdabef]">
            <User size={20} />
          </Link>

          <Link to="/chatbot" className="hover:text-[#bdabef] transition-colors font-bold">
            <BotMessageSquareIcon size={20} />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
