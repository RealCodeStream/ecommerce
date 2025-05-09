import getProductosServices from '../services/productosServices.js';

const getProductosController = async (req, res) => {
    try {
        const nombre = req.query.nombre;
        const productos = await getProductosServices(nombre);

        if (nombre && !productos) {
            return res.status(404).json({ error: 'Producto no encontrado' });
        }

        res.json(productos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

//module.exports = {getProductos};
export default getProductosController;