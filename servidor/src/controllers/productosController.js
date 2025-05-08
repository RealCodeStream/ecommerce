import getProductosServices from '../services/productosServices.js';

const getProductosController = async (req, res) => {
    try {
        const productos = await getProductosServices();
        //console.log("Productos desde la base de datos:", productos);
        res.json(productos);
    } catch (error) {
        res.status(500).json({Error: error.message});
    }
}

//module.exports = {getProductos};
export default getProductosController;