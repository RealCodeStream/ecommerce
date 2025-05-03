import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';



const Carrusel = ({ imagenes }) => {
    const [activeIndex, setActiveIndex] = useState(0);
  
    useEffect(() => {
      // Cambio automático de diapositiva cada 4 segundos
      const interval = setInterval(() => {
        setActiveIndex((current) => (current === imagenes.length - 1 ? 0 : current + 1));
      }, 4000);
  
      return () => clearInterval(interval);
    }, [imagenes.length]);
  
    const siguienteSlide = () => {
      setActiveIndex((current) => (current === imagenes.length - 1 ? 0 : current + 1));
    };
  
    const anteriorSlide = () => {
      setActiveIndex((current) => (current === 0 ? imagenes.length - 1 : current - 1));
    };
  
    return (
      <div className="relative w-full h-64 md:h-96 overflow-hidden rounded-lg shadow-lg mb-8">
        {imagenes.map((imagen, index) => (
          <div
            key={imagen.id}
            className={`absolute w-full h-full transition-opacity duration-500 ${
              index === activeIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img 
              src={imagen.url} 
              alt={imagen.alt} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
        
        <button 
          onClick={anteriorSlide}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full"
        >
          <ChevronLeft size={24} />
        </button>
        
        <button 
          onClick={siguienteSlide}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-black bg-opacity-30 text-white p-2 rounded-full"
        >
          <ChevronRight size={24} />
        </button>
        
        <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {imagenes.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full ${
                index === activeIndex ? 'bg-black' : 'bg-gray-400'
              }`}
            />
          ))}
        </div>
      </div>
    );
}

export default Carrusel