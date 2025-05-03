import React from 'react'

const Profaile = () => {
  return (
    <div className="py-8">
      
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <div className="bg-gray-100 rounded-lg p-4 text-center">
              <div className="w-32 h-32 mx-auto rounded-full bg-blue-100 flex items-center justify-center text-blue-700 text-5xl font-bold mb-4">
                JP
              </div>
              <h2 className="text-xl font-bold">Juan Pérez</h2>
              <p className="text-gray-600">cliente@ejemplo.com</p>
              <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md text-sm font-medium">
                Editar Perfil
              </button>
            </div>
          </div>
          
          <div className="md:w-2/3">
            <h3 className="text-xl font-bold mb-4">Información Personal</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Nombre</label>
                <div className="bg-gray-50 border border-gray-200 rounded-md p-2">Juan</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Apellido</label>
                <div className="bg-gray-50 border border-gray-200 rounded-md p-2">Pérez</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Email</label>
                <div className="bg-gray-50 border border-gray-200 rounded-md p-2">cliente@ejemplo.com</div>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-600 mb-1">Teléfono</label>
                <div className="bg-gray-50 border border-gray-200 rounded-md p-2">+1 234 567 8900</div>
              </div>
            </div>
            
            <h3 className="text-xl font-bold mb-4">Dirección de Envío</h3>
            <div className="bg-gray-50 border border-gray-200 rounded-md p-3 mb-6">
              <p>Calle Principal 123</p>
              <p>Ciudad Ejemplo, CP 12345</p>
              <p>País</p>
            </div>
            
            <h3 className="text-xl font-bold mb-4">Historial de Compras</h3>
            <div className="border rounded-md overflow-hidden">
              <div className="grid grid-cols-4 bg-gray-100 p-3 font-medium text-gray-600">
                <div>Pedido</div>
                <div>Fecha</div>
                <div>Estado</div>
                <div>Total</div>
              </div>
              
              <div className="grid grid-cols-4 p-3 border-t">
                <div>#12345</div>
                <div>12/04/2025</div>
                <div>
                  <span className="bg-green-100 text-green-800 px-2 py-1 rounded-full text-xs">Entregado</span>
                </div>
                <div>$124.99</div>
              </div>
              
              <div className="grid grid-cols-4 p-3 border-t">
                <div>#12344</div>
                <div>28/03/2025</div>
                <div>
                  <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">En tránsito</span>
                </div>
                <div>$89.50</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profaile