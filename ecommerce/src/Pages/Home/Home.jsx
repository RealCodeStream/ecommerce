import React from 'react';
import Carrusel from "../../components/Carrusel/Carrusel";

const imagenes = [
  { id: 1, url: '/api/placeholder/800/400', alt: 'Promoción 1' },
  { id: 2, url: '/api/placeholder/800/400', alt: 'Promoción 2' },
  { id: 3, url: '/api/placeholder/800/400', alt: 'Promoción 3' },
];

const Home = () => {
  return (
    <div className="py-4">
      <Carrusel imagenes={imagenes} />
    </div>
    
  );
}

export default Home